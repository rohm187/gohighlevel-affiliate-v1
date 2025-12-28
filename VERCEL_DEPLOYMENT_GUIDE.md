# 🚀 Vercel Deployment Guide - GoHighLevel Affiliate Site

Complete guide to deploy your GoHighLevel affiliate marketing website to Vercel with GitHub integration.

---

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ GitHub account
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ GoHighLevel affiliate link
- ✅ PostgreSQL database (Vercel Postgres, Supabase, or other)
- ✅ Google Analytics account (optional)

---

## 🗄️ Step 1: Set Up PostgreSQL Database

### Option A: Vercel Postgres (Recommended)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Storage" → "Create Database"
3. Select "Postgres"
4. Choose your region and click "Create"
5. Copy the `POSTGRES_URL` connection string
6. This will be used as your `DATABASE_URL`

### Option B: External PostgreSQL (Supabase, Railway, etc.)

1. Create a PostgreSQL database with your provider
2. Get the connection string (format: `postgresql://user:password@host:5432/database`)
3. Keep this ready for environment variables

---

## 📂 Step 2: Push Code to GitHub

### 2.1: Initialize Git Repository

```bash
cd nextjs_space
git init
git add .
git commit -m "Initial commit - GoHighLevel affiliate site"
```

### 2.2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `gohighlevel-affiliate-site` (or your choice)
3. Choose "Private" or "Public"
4. **Do NOT** initialize with README (already have code)
5. Click "Create repository"

### 2.3: Push Code to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/gohighlevel-affiliate-site.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 3: Deploy to Vercel

### 3.1: Import Project

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Find your `gohighlevel-affiliate-site` repo
5. Click "Import"

### 3.2: Configure Project Settings

**Framework Preset:** Next.js (auto-detected)  
**Root Directory:** `./` (leave as default)  
**Build Command:** `yarn build` or `npm run build`  
**Output Directory:** `.next` (auto-configured)

### 3.3: Set Environment Variables

Click "Environment Variables" and add these:

#### Required Variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `DATABASE_URL` | `postgresql://...` | Your PostgreSQL connection string |
| `GOHIGHLEVEL_AFFILIATE_LINK` | `https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87` | Your GoHighLevel affiliate link |
| `NEXT_PUBLIC_GOHIGHLEVEL_AFFILIATE_LINK` | `https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87` | Same as above (public) |

#### Optional Variables:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Google Analytics GA4 Measurement ID |
| `NEXTAUTH_URL` | `https://yourdomain.com` | Production URL (Vercel sets automatically) |

### 3.4: Deploy

Click "Deploy" button and wait for deployment to complete (2-5 minutes).

---

## 🗃️ Step 4: Initialize Database Schema

After first deployment, you need to create database tables.

### 4.1: Run Prisma Migrations

You have two options:

#### Option A: Via Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run Prisma migration
npx prisma db push

# Generate Prisma Client
npx prisma generate
```

#### Option B: Via Database Client

Manually run this SQL in your database:

```sql
-- Create Lead table
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "phone" TEXT,
    "company" TEXT,
    "message" TEXT,
    "source" TEXT,
    "interests" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- Create Newsletter table
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- Create unique indexes
CREATE UNIQUE INDEX "Lead_email_key" ON "Lead"("email");
CREATE UNIQUE INDEX "Newsletter_email_key" ON "Newsletter"("email");
```

---

## 🌍 Step 5: Custom Domain (Optional)

### 5.1: Add Domain to Vercel

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `gohighlevelwithai.com`)
4. Click "Add"

### 5.2: Configure DNS Records

Add these records to your domain registrar:

**For Root Domain (gohighlevelwithai.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www Subdomain (www.gohighlevelwithai.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**DNS propagation takes 24-48 hours**

---

## 📊 Step 6: Set Up Google Analytics (Optional)

### 6.1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Admin" → "Create Property"
3. Enter property name: "GoHighLevel Affiliate Site"
4. Configure property settings and create

### 6.2: Get Measurement ID

1. In your new property, go to "Data Streams"
2. Click "Add stream" → "Web"
3. Enter your website URL
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 6.3: Add to Vercel

1. Go to Vercel project → "Settings" → "Environment Variables"
2. Add new variable:
   - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your Measurement ID)
3. Click "Save"
4. Redeploy your site (Vercel → Deployments → three dots → "Redeploy")

---

## 🔄 Step 7: Continuous Deployment

### Automatic Deployments

Every time you push to GitHub, Vercel automatically:
- ✅ Builds your site
- ✅ Runs tests
- ✅ Deploys to production
- ✅ Generates preview URL for branches

### Making Changes

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main
```

Vercel will automatically deploy within 2-3 minutes.

---

## 🧪 Step 8: Test Your Site

### 8.1: Test Lead Capture

1. Visit your site
2. Fill out a lead capture form
3. Check database for new entry:
   ```sql
   SELECT * FROM "Lead" ORDER BY "createdAt" DESC LIMIT 5;
   ```

### 8.2: Test Newsletter Signup

1. Try newsletter signup form
2. Verify in database:
   ```sql
   SELECT * FROM "Newsletter" ORDER BY "createdAt" DESC LIMIT 5;
   ```

### 8.3: Test GoHighLevel Links

1. Click any "Get Started" or CTA button
2. Verify it redirects to: `https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87`
3. Check that your affiliate parameter is present

### 8.4: Test Google Analytics

1. Visit your site
2. Open Google Analytics Real-Time view
3. Verify you see your visit in real-time

---

## 📁 Step 9: Access Your Data

### View Leads

You can access your leads via:

#### Option 1: Direct Database Access

Use your PostgreSQL client (TablePlus, DBeaver, pgAdmin):
```sql
SELECT * FROM "Lead" ORDER BY "createdAt" DESC;
```

#### Option 2: API Endpoint

```bash
# Get recent leads (GET request)
curl https://yourdomain.com/api/leads
```

#### Option 3: Build an Admin Panel (Future)

You can build a simple admin panel at `/admin` to view leads in the browser.

---

## 🔧 Troubleshooting

### Database Connection Issues

**Error:** "Can't reach database server"

**Solution:**
1. Verify `DATABASE_URL` is correct
2. Check database firewall allows Vercel IPs
3. Test connection string locally first

### Environment Variables Not Working

**Error:** "process.env.VARIABLE_NAME is undefined"

**Solution:**
1. Verify variable is set in Vercel dashboard
2. Make sure it starts with `NEXT_PUBLIC_` if used client-side
3. Redeploy after adding new variables

### Prisma Client Not Generated

**Error:** "Cannot find module '@prisma/client'"

**Solution:**
1. Add to `package.json` postinstall script:
   ```json
   "scripts": {
     "postinstall": "prisma generate"
   }
   ```
2. Commit and push changes

### Build Failures

**Error:** "Build failed"

**Solution:**
1. Check Vercel build logs
2. Test build locally: `npm run build`
3. Fix any TypeScript errors
4. Commit and push fix

---

## 📊 Monitoring & Analytics

### Vercel Analytics

Vercel provides built-in analytics:
- Page views
- Top pages
- Visitor locations
- Device types

Access via: Vercel Dashboard → Your Project → Analytics

### Google Analytics

Track:
- Page views
- User behavior
- Conversion funnels
- Traffic sources
- Goal completions

Access via: [analytics.google.com](https://analytics.google.com)

---

## 🎯 Next Steps

1. ✅ **Update TikTok Bio:** Link to your new Vercel URL
2. ✅ **Test All Forms:** Ensure lead capture works
3. ✅ **Monitor Analytics:** Track visitors and conversions
4. ✅ **Check Affiliate Dashboard:** Verify GoHighLevel sign-ups
5. ✅ **Create Backup:** Export database regularly

---

## 📞 Support Resources

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Prisma Docs:** [prisma.io/docs](https://www.prisma.io/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **GoHighLevel Support:** [support.gohighlevel.com](https://support.gohighlevel.com)

---

## 🎉 You're Live!

Your GoHighLevel affiliate site is now:
- ✅ Deployed on Vercel
- ✅ Connected to database
- ✅ Tracking analytics
- ✅ Capturing leads
- ✅ Ready to make money!

**Start driving traffic and watch the commissions roll in! 🚀💰**
