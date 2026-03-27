# Notebook Atelier

`노트북 아틀리에`는 한국 사용자의 맥북 구매 결정을 빠르게 돕는 프리미엄 노트북 추천 서비스다.

## Local development

```bash
npm install
npm run dev
```

앱은 기본적으로 `http://localhost:3000`에서 실행된다.

## Deployment

- Web: Vercel
- Database: Supabase Postgres
- Local commerce worker: `local/coupang-sync`

## Remote operations

원격 Codex 세션 운영 가이드는 [docs/remote-codex-setup.md](./docs/remote-codex-setup.md)에 정리돼 있다.

핵심 스크립트:

- `ops/remote/setup-wsl-codex.sh`
- `ops/remote/enable-windows-ssh.ps1`
- `ops/remote/start-codex-remote.ps1`
