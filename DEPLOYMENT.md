# Vercel Deployment Guide

This document provides instructions for deploying the GoHighLevel Affiliate Marketing Website to Vercel with pnpm package manager.

## Prerequisites

- Node.js 18.x (specified in `.nvmrc`)
- pnpm 8.x (specified in `package.json`)
- PostgreSQL database (e.g., Neon, Supabase, or Vercel Postgres)
- Vercel account

## Required Environment Variables

Configure the following environment variables in your Vercel project settings:

### Database
```
DATABASE_URL=postgresql://user:password@host:5432/database
```

### Authentication
```
NEXTAUTH_URL=https://app.gohighlevelwithai.com
NEXTAUTH_SECRET=<generate-a-secure-random-string>
```

To generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

### Google Cloud Storage (for file uploads)
```
GOOGLE_APPLICATION_CREDENTIALS_JSON=<your-service-account-json>
# OR
GOOGLE_SERVICE_ACCOUNT=<your-service-account-json>

GCLOUD_BUCKET_NAME=<your-bucket-name>
```

### GoHighLevel Affiliate Link
```
GOHIGHLEVEL_AFFILIATE_LINK=https://www.gohighlevel.com/?fp_ref=your-ref
NEXT_PUBLIC_GOHIGHLEVEL_AFFILIATE_LINK=https://www.gohighlevel.com/?fp_ref=your-ref
```

### Google Analytics (Optional)
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Deployment Steps

### 1. Push to GitHub

If not already done:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and pnpm

### 3. Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset:** Next.js
- **Build Command:** `pnpm run build`
- **Install Command:** `pnpm install`
- **Output Directory:** `.next`
- **Node Version:** 18.x (detected from `.nvmrc`)

### 4. Add Environment Variables

In the Vercel project settings:
1. Navigate to "Settings" → "Environment Variables"
2. Add all required environment variables listed above
3. Select the appropriate environments (Production, Preview, Development)

### 5. Add Custom Domain

1. Navigate to "Settings" → "Domains"
2. Add `app.gohighlevelwithai.com`
3. Configure DNS records as instructed by Vercel:
   - For subdomain: Add a `CNAME` record pointing to `cname.vercel-dns.com`
   - Wait for DNS propagation (can take up to 48 hours)

### 6. Initialize Database

After deployment, initialize your database schema:

```bash
# Link to your Vercel project
vercel link

# Pull environment variables
vercel env pull .env.local

# Push database schema
npx prisma db push

# Optional: Seed database (if seed script exists)
npx prisma db seed
```

## Build Details

### Install Command
```bash
pnpm install
```

This will:
- Install all dependencies using pnpm
- Run `postinstall` script which executes `prisma generate`

### Build Command
```bash
pnpm run build
```

This will:
- Run `npx prisma generate` (redundant but ensures Prisma Client is available)
- Execute `next build` to create production build

## Package Manager Configuration

The project uses **pnpm 8** as specified in:
- `package.json` → `"packageManager": "pnpm@8"`
- `.nvmrc` → `18` (Node.js version)

Vercel will automatically detect and use pnpm based on:
1. The `packageManager` field in `package.json`
2. The presence of `pnpm-lock.yaml`

## Troubleshooting

### Build Failures

If builds fail, check:
1. All required environment variables are set
2. `DATABASE_URL` is valid and accessible
3. Node version matches `.nvmrc` (18.x)
4. Review build logs in Vercel dashboard

### Database Connection Issues

If database connection fails:
1. Verify `DATABASE_URL` format: `postgresql://user:password@host:5432/database`
2. Check database allows connections from Vercel IPs
3. For serverless databases, ensure connection pooling is configured

### Prisma Client Issues

If Prisma Client is not generated:
1. Verify `postinstall` script in `package.json` runs `prisma generate`
2. Check build logs for Prisma generation errors
3. Ensure `prisma/schema.prisma` is present in repository

### Custom Domain Issues

If custom domain doesn't work:
1. Verify DNS records are correctly configured
2. Wait for DNS propagation (up to 48 hours)
3. Check Vercel domain settings for error messages
4. Ensure SSL certificate is issued (automatic in Vercel)

## Monitoring and Maintenance

### View Logs
- Access real-time logs in Vercel Dashboard → Your Project → Logs
- Use Vercel CLI: `vercel logs <deployment-url>`

### Update Environment Variables
1. Vercel Dashboard → Settings → Environment Variables
2. Update variables
3. Redeploy (or enable auto-redeploy on environment variable changes)

### Database Management
- Use Prisma Studio locally: `npx prisma studio`
- Connect with database client using `DATABASE_URL`
- Monitor database performance and connections

## Support

For issues:
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Prisma:** [prisma.io/docs](https://www.prisma.io/docs)
- **pnpm:** [pnpm.io/motivation](https://pnpm.io/motivation)

---

**Last Updated:** December 2025
