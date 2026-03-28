# Content Distribution Pipeline

Notebook Atelier uses the site as the source of truth, then turns buying-intent topics into operator briefs for two human-assisted channels:

- Naver Blog
- Instagram

## Current workflow

1. Publish or update a buying guide on the site
2. Run the Slack brief sender
3. Receive:
   - Naver Blog draft outline
   - Instagram carousel slide copy
   - Instagram caption draft
   - Image-generation prompt
4. Human publishes:
   - paste the blog draft into Naver Blog and refine tone
   - generate the image from the prompt
   - publish the Instagram carousel

## Commands

Send the top 2 channel briefs:

```powershell
$nodeDir='C:\Users\joel6\Desktop\MACBOOK_BOY\notebook-atelier\.tools\node-v20.19.5-win-x64'
$env:Path = "$nodeDir;" + $env:Path
& "$nodeDir\node.exe" .\scripts\send-content-briefs.mjs
```

Send all briefs:

```powershell
$nodeDir='C:\Users\joel6\Desktop\MACBOOK_BOY\notebook-atelier\.tools\node-v20.19.5-win-x64'
$env:Path = "$nodeDir;" + $env:Path
& "$nodeDir\node.exe" .\scripts\send-content-briefs.mjs --all
```

Send one topic only:

```powershell
$nodeDir='C:\Users\joel6\Desktop\MACBOOK_BOY\notebook-atelier\.tools\node-v20.19.5-win-x64'
$env:Path = "$nodeDir;" + $env:Path
& "$nodeDir\node.exe" .\scripts\send-content-briefs.mjs --slug macbook-air-vs-pro
```

Dry run:

```powershell
$nodeDir='C:\Users\joel6\Desktop\MACBOOK_BOY\notebook-atelier\.tools\node-v20.19.5-win-x64'
$env:Path = "$nodeDir;" + $env:Path
& "$nodeDir\node.exe" .\scripts\send-content-briefs.mjs --dry-run
```

## Required secret

Store this only in:

- `local/autopilot/autopilot.secrets.ps1`

Required variable:

```powershell
$env:SLACK_WEBHOOK_URL = "..."
```

## Notes

- This is intentionally human-assisted.
- Naver Blog is not treated as a fully automated publishing target.
- Instagram images are generated from prompts rather than rendered by this repository.
