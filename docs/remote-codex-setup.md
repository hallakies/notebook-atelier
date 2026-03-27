# Remote Codex Setup

`노트북 아틀리에` 운영용 장기 세션은 Windows 호스트에 Tailscale을 붙이고, WSL Ubuntu 안에서 `tmux + codex`로 유지한다.

## Current target

- Windows host: `desktop-vkrlvvm`
- Tailscale IPv4: `100.113.76.16`
- WSL distro: `Ubuntu`
- Repo path: `C:\Users\joel6\Desktop\MACBOOK_BOY\notebook-atelier`

## One-time steps

1. Tailscale 로그인
2. 관리자 PowerShell에서 `ops/remote/enable-windows-ssh.ps1` 실행
3. 일반 PowerShell에서 `wsl -d Ubuntu -- bash /mnt/c/Users/joel6/Desktop/MACBOOK_BOY/notebook-atelier/ops/remote/setup-wsl-codex.sh` 실행

## Start Codex remotely

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File C:\Users\joel6\Desktop\MACBOOK_BOY\notebook-atelier\ops\remote\start-codex-remote.ps1
```

직접 WSL에서:

```bash
~/.local/bin/codex-session
```

## SSH from another machine

```bash
ssh joel6@100.113.76.16
```

로그인 뒤:

```powershell
powershell -ExecutionPolicy Bypass -File C:\Users\joel6\Desktop\MACBOOK_BOY\notebook-atelier\ops\remote\start-codex-remote.ps1
```

## tmux management

```bash
wsl -d Ubuntu -- bash -lc 'tmux ls'
wsl -d Ubuntu -- bash -lc 'tmux attach -t codex'
wsl -d Ubuntu -- bash -lc 'tmux kill-session -t codex'
```

## Notes

- `OpenSSH Server` 활성화는 관리자 권한이 필요하다.
- 쿠팡 키, Supabase 키 같은 비밀값은 이 문서나 Git 저장소에 넣지 않는다.
- 원격 세션은 `tmux` 안에서 유지되므로 SSH 연결이 끊겨도 계속 살아 있다.
