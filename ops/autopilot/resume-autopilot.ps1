[CmdletBinding()]
param(
  [switch]$UseSearch
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\\..")).Path
$scriptPath = Join-Path $repoRoot "ops\\autopilot\\launch-overnight-autopilot.ps1"

$args = @(
  "-NoProfile",
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$scriptPath`"",
  "-MaxCycles", 0,
  "-PauseSeconds", 20
)

if ($UseSearch) {
  $args += "-UseSearch"
}

Start-Process -FilePath "powershell.exe" -ArgumentList ($args -join " ") -WindowStyle Minimized
Write-Host "Autopilot resume signal sent."
