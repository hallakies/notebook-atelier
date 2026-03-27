[CmdletBinding()]
param(
  [int]$MaxCycles = 8,
  [int]$PauseSeconds = 5,
  [switch]$UseSearch
)

$ErrorActionPreference = "Stop"

function Get-RepoRoot {
  return (Resolve-Path (Join-Path $PSScriptRoot "..\\..")).Path
}

function Ensure-FileFromTemplate {
  param(
    [string]$Path,
    [string]$TemplatePath
  )

  if (-not (Test-Path $Path)) {
    Copy-Item $TemplatePath $Path -Force
    throw "Created missing file: $Path. Fill it, then run the command again."
  }
}

function Load-Json {
  param([string]$Path)
  return Get-Content $Path -Raw | ConvertFrom-Json
}

function Save-Json {
  param(
    [string]$Path,
    [object]$Data
  )

  $Data.last_updated = (Get-Date).ToString("s")
  $Data | ConvertTo-Json -Depth 50 | Set-Content -Path $Path -Encoding UTF8
}

function Assert-InputFields {
  param([object]$InputData)

  $checks = @(
    @{ Label = "project.primary_domain"; Value = $InputData.project.primary_domain },
    @{ Label = "project.target_market"; Value = $InputData.project.target_market },
    @{ Label = "project.primary_offer"; Value = $InputData.project.primary_offer },
    @{ Label = "project.instagram_handle"; Value = $InputData.project.instagram_handle },
    @{ Label = "brand.tone"; Value = ($InputData.brand.tone -join ",") },
    @{ Label = "brand.must_not_do"; Value = ($InputData.brand.must_not_do -join ",") }
  )

  $missing = @($checks | Where-Object { -not $_.Value } | ForEach-Object { $_.Label })
  if ($missing.Count -gt 0) {
    throw "Missing required fields in overnight-input.json: $($missing -join ', ')"
  }
}

$repoRoot = Get-RepoRoot
$localDir = Join-Path $repoRoot "local\\autopilot"
$runsDir = Join-Path $localDir "runs"
$inputPath = Join-Path $localDir "overnight-input.json"
$statusPath = Join-Path $localDir "overnight-status.json"
$progressPath = Join-Path $localDir "progress.md"
$stopPath = Join-Path $localDir "STOP"
$secretsPath = Join-Path $localDir "autopilot.secrets.ps1"
$rootSecretsPath = Join-Path $repoRoot ".codex.secrets.ps1"

$promptTemplatePath = Join-Path $repoRoot "ops\\autopilot\\prompts\\night-operator.md"
$inputTemplatePath = Join-Path $repoRoot "ops\\autopilot\\templates\\overnight-input.template.json"
$statusTemplatePath = Join-Path $repoRoot "ops\\autopilot\\templates\\overnight-status.template.json"

New-Item -ItemType Directory -Path $localDir -Force | Out-Null
New-Item -ItemType Directory -Path $runsDir -Force | Out-Null

if (Test-Path $rootSecretsPath) {
  . $rootSecretsPath
}

if (Test-Path $secretsPath) {
  . $secretsPath
}

Ensure-FileFromTemplate -Path $inputPath -TemplatePath $inputTemplatePath

if (-not (Test-Path $statusPath)) {
  Copy-Item $statusTemplatePath $statusPath -Force
}

if (-not (Test-Path $progressPath)) {
  Set-Content -Path $progressPath -Encoding UTF8 -Value "# Overnight Progress`r`n"
}

$inputData = Load-Json -Path $inputPath
Assert-InputFields -InputData $inputData

for ($cycle = 1; $cycle -le $MaxCycles; $cycle++) {
  if (Test-Path $stopPath) {
    Write-Host "STOP file detected. Ending autopilot."
    break
  }

  $statusData = Load-Json -Path $statusPath
  $task = $statusData.tasks | Where-Object { $_.status -eq "pending" } | Sort-Object priority | Select-Object -First 1

  if (-not $task) {
    Write-Host "No pending tasks remain."
    break
  }

  foreach ($item in $statusData.tasks) {
    if ($item.id -eq $task.id) {
      $item.status = "in_progress"
      $item.notes = "Started by autopilot on $(Get-Date -Format s)"
    }
  }
  Save-Json -Path $statusPath -Data $statusData

  $runStamp = Get-Date -Format "yyyyMMdd-HHmmss"
  $runDir = Join-Path $runsDir "$runStamp-$($task.id)"
  New-Item -ItemType Directory -Path $runDir -Force | Out-Null

  $doneWhen = @($task.done_when | ForEach-Object { "- $_" }) -join "`r`n"
  $prompt = @"
$(Get-Content $promptTemplatePath -Raw)

Current cycle: $cycle / $MaxCycles
Current task id: $($task.id)
Current task title: $($task.title)

Done conditions:
$doneWhen

You must read and use these files:
- docs/overnight-master-plan.md
- docs/execution-roadmap.md
- docs/paperclip-company-blueprint.md
- docs/instagram-operating-system.md
- docs/product-direction.md
- local/autopilot/overnight-input.json
- local/autopilot/overnight-status.json
- local/autopilot/progress.md

Before you finish this task:

1. Make actual progress in the repository.
2. Run relevant validation.
3. Update local/autopilot/overnight-status.json for task `$($task.id)`.
4. Append a progress entry to local/autopilot/progress.md.
5. Leave the repository in a workable state.

If the task is fully done, set status to `done`.
If blocked, set status to `blocked` and explain why.
If only partial progress is safe, keep status as `in_progress` and write the next step.
"@

  $promptPath = Join-Path $runDir "prompt.txt"
  $outputPath = Join-Path $runDir "last-message.txt"
  $logPath = Join-Path $runDir "codex.log"
  Set-Content -Path $promptPath -Encoding UTF8 -Value $prompt

  $args = @(
    "exec",
    "--dangerously-bypass-approvals-and-sandbox",
    "-C", $repoRoot,
    "-o", $outputPath
  )

  if ($UseSearch) {
    $args += "--search"
  }

  $args += $prompt

  Write-Host "Starting cycle $cycle for task $($task.id)"
  $previousErrorActionPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  $codexOutput = & codex @args 2>&1
  $codexExitCode = $LASTEXITCODE
  $ErrorActionPreference = $previousErrorActionPreference

  $codexOutput | Tee-Object -FilePath $logPath

  if ($codexExitCode -ne 0) {
    $statusAfterRun = Load-Json -Path $statusPath
    foreach ($item in $statusAfterRun.tasks) {
      if ($item.id -eq $task.id -and $item.status -eq "in_progress") {
        $item.status = "blocked"
        $item.notes = "Autopilot harness saw codex exit code $codexExitCode on $(Get-Date -Format s). Review $logPath."
      }
    }
    Save-Json -Path $statusPath -Data $statusAfterRun
    Add-Content -Path $progressPath -Value "## $(Get-Date -Format s) - $($task.id)`r`nHarness failure with exit code $codexExitCode. Review $logPath.`r`n"
  }

  Start-Sleep -Seconds $PauseSeconds
}

Write-Host "Autopilot run completed. Review local/autopilot/progress.md for the latest summary."
