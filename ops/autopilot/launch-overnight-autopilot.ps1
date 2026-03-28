[CmdletBinding()]
param(
  [int]$MaxCycles = 0,
  [int]$PauseSeconds = 20,
  [switch]$UseSearch
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\\..")).Path
$localDir = Join-Path $repoRoot "local\\autopilot"
$launcherOutLog = Join-Path $localDir "launcher.out.log"
$launcherErrLog = Join-Path $localDir "launcher.err.log"
$scriptPath = Join-Path $repoRoot "ops\\autopilot\\start-overnight-autopilot.ps1"

New-Item -ItemType Directory -Path $localDir -Force | Out-Null

$args = @(
  "-NoProfile",
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$scriptPath`"",
  "-MaxCycles", $MaxCycles,
  "-PauseSeconds", $PauseSeconds
)

if ($UseSearch) {
  $args += "-UseSearch"
}

$argString = $args -join " "
$process = Start-Process -FilePath "powershell.exe" -ArgumentList $argString -WindowStyle Minimized -RedirectStandardOutput $launcherOutLog -RedirectStandardError $launcherErrLog -PassThru

Write-Host "Overnight autopilot started."
Write-Host "PID: $($process.Id)"
Write-Host "Stdout log: $launcherOutLog"
Write-Host "Stderr log: $launcherErrLog"
