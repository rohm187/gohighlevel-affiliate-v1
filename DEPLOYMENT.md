# Deployment / Vercel instructions

This doc describes how to deploy this Next.js app to Vercel (recommended) using pnpm and Node 18.

1) Branch & apply changes
- Create a branch: `git checkout -b chore/stabilize-deploy`
- Commit the updated `package.json`, `next.config.js`, and `.nvmrc`.

2) Regenerate pnpm lockfile (locally)
- Ensure pnpm v8+ is installed.
- Remove other lockfiles if present:
  - `git rm -f package-lock.json yarn.lock || true`
- Regenerate the lockfile:
  - `rm -f pnpm-lock.yaml`
  - `pnpm install`
- Commit the generated `pnpm-lock.yaml`.

3) Build & test locally
- `pnpm install --frozen-lockfile`
- `pnpm run build`
- `pnpm run start` (test production runtime)
- Test pages and API routes (especially /api/leads).

4) Vercel project setup
- Create or connect the project in Vercel (link the GitHub repo).
- Project settings:
  - Install Command: `pnpm install --frozen-lockfile`
  - Build Command: `pnpm build`
  - Node version: 18 (Vercel respects engines/node or set in UI)
  - Framework Preset: Next.js
- Add domain: `app.gohighlevelwithai.com` (follow Vercel DNS instructions; add CNAME: `app -> cname.vercel-dns.com`)

5) Environment variables (add in Vercel UI)
- DATABASE_URL
- NEXTAUTH_URL = https://app.gohighlevelwithai.com
- NEXTAUTH_SECRET
- GOOGLE_SERVICE_ACCOUNT (JSON string) or GOOGLE_APPLICATION_CREDENTIALS_JSON
- GCLOUD_BUCKET_NAME
- Any `NEXT_PUBLIC_*` variables required by the client.

6) ActiveCampaign removal note
- ActiveCampaign has been removed from code in this PR (replaced by a safe stub). If you want to re-integrate later, use server-side API calls or a webhook. Do not store secrets in code.

7) Rollback
- If anything breaks, revert the branch or roll back the deployment in Vercel.
