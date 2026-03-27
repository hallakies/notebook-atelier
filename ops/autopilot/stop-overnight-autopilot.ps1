[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\\..")).Path
$localDir = Join-Path $repoRoot "local\\autopilot"
$stopPath = Join-Path $localDir "STOP"

New-Item -ItemType Directory -Path $localDir -Force | Out-Null
Set-Content -Path $stopPath -Encoding UTF8 -Value "stop"

Write-Host "STOP signal written to $stopPath"
