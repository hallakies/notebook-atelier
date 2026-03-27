[CmdletBinding()]
param(
  [string]$Distro = "Ubuntu",
  [string]$Session = "codex"
)

$ErrorActionPreference = "Stop"

wsl -d $Distro -- bash -lc "export HOME=/home/joel610; /mnt/c/Users/joel6/Desktop/MACBOOK_BOY/notebook-atelier/ops/remote/setup-wsl-codex.sh >/tmp/notebook-atelier-setup.log 2>&1 || true; export NPM_CONFIG_PREFIX=\$HOME/.npm-global; export PATH=\$HOME/.npm-global/bin:\$HOME/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin; ~/.local/bin/codex-session '$Session'"
