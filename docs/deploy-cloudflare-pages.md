# Cloudflare Pages Deployment

## Why this setup

- The app now builds as a fully static Next.js export.
- There are no runtime API routes in the deployed site.
- Product loading happens in the browser through Supabase's public client.
- Affiliate buttons link directly to Coupang deeplinks.

This keeps the host responsible for serving static files only.

## Recommended host

Use Cloudflare Pages with GitHub integration.

## Build settings

- Framework preset: `Next.js (static export is fine)`
- Build command: `npm run build`
- Build output directory: `out`

## Environment variables

Set only these public values in Cloudflare Pages:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

## Do not set on the static host

These are not needed for the static site and should stay off the host:

- `SUPABASE_SERVICE_ROLE_KEY`
- `COUPANG_ACCESS_KEY`
- `COUPANG_SECRET_KEY`
- any GitHub token

## Notes

- If you use a custom domain, set `NEXT_PUBLIC_SITE_URL` to that production URL.
- If you use the default Pages domain first, set `NEXT_PUBLIC_SITE_URL` to the `*.pages.dev` URL and change it later.
- Product sync can continue to run locally or on a separate worker without affecting the public site host.
