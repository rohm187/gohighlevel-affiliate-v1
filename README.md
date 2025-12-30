# 🚀 GoHighLevel Affiliate Marketing Website

A modern, high-converting Next.js website designed for GoHighLevel affiliate marketing, specifically targeting real estate agents.

---

## 🛠️ Contributing

This project uses **pnpm** as the package manager. To get started with local development:

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

**Note:** Please use `pnpm install` instead of `npm install` or `yarn install` to ensure consistency with the lock file.

---

## ✨ Features

- ✅ **Lead Capture Forms** - Integrated with PostgreSQL database
- ✅ **Google Analytics** - Track visitor behavior and conversions
- ✅ **GoHighLevel Affiliate Links** - Pre-configured throughout the site
- ✅ **Responsive Design** - Mobile-first, optimized for all devices
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **Fast Performance** - Next.js 14 with optimized images and code splitting
- ✅ **Database** - Prisma ORM with PostgreSQL
- ✅ **Modern UI** - Tailwind CSS with Framer Motion animations

---

## 📋 Tech Stack

- **Framework:** Next.js 14.2.28
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** PostgreSQL via Prisma ORM
- **Analytics:** Google Analytics GA4
- **Icons:** Lucide React
- **UI Components:** Radix UI + shadcn/ui

---

## 🌐 Site Structure

```
/                 - Homepage (Hero, Features, Benefits, Testimonials)
/bridge           - Simple conversion page (TikTok/social traffic)
/offer            - Detailed offer page with bonuses
/resources        - Educational hub with training resources
/about            - Company story and mission
/contact          - Contact form
/thank-you        - Post-submission thank you page
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```bash
# Database (Required)
DATABASE_URL='postgresql://user:password@host:5432/database'

# GoHighLevel Affiliate Link (Required)
GOHIGHLEVEL_AFFILIATE_LINK='https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87'
NEXT_PUBLIC_GOHIGHLEVEL_AFFILIATE_LINK='https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87'

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID='G-XXXXXXXXXX'

# Production URL (Optional - Vercel sets automatically)
NEXTAUTH_URL='https://yourdomain.com'
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)
- PostgreSQL database
- GoHighLevel affiliate account

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Database

```bash
# Generate Prisma Client
pnpm prisma generate

# Push schema to database
pnpm prisma db push
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Deployment to Vercel

### Option 1: Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option 2: Manual Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   - Add all required environment variables (see `.env.example`)
   - Click "Deploy"

4. **Initialize Database**
   ```bash
   # After deployment
   vercel link
   vercel env pull .env.local
   npx prisma db push
   ```

**See [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md) for detailed instructions.**

---

## 🗄️ Database Schema

### Lead Table
```sql
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
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
    PRIMARY KEY ("id")
);
```

### Newsletter Table
```sql
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);
```

---

## 🔌 API Endpoints

### POST /api/leads
Capture a new lead

**Request Body:**
```json
{
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "company": "Acme Real Estate",
  "message": "Interested in automation",
  "source": "homepage",
  "interests": "Lead generation"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "leadId": "clx..."
}
```

### GET /api/leads
Get recent leads (last 10)

**Response:**
```json
{
  "success": true,
  "leads": [...]
}
```

### POST /api/newsletter
Subscribe to newsletter

**Request Body:**
```json
{
  "email": "john@example.com",
  "source": "footer"
}
```

---

## 📊 Google Analytics Setup

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID='G-XXXXXXXXXX'
   ```
4. Redeploy your site

The Google Analytics component is already integrated in `app/layout.tsx`.

---

## 🎯 Accessing Your Data

### Option 1: Database Client

Use any PostgreSQL client (TablePlus, DBeaver, pgAdmin):

```sql
SELECT * FROM "Lead" ORDER BY "createdAt" DESC;
SELECT * FROM "Newsletter" ORDER BY "createdAt" DESC;
```

### Option 2: API Endpoint

```bash
curl https://yourdomain.com/api/leads
```

### Option 3: Google Sheets Integration (Future)

You can set up a script to automatically sync leads to Google Sheets using your Python bots.

---

## 🔗 GoHighLevel Affiliate Integration

Your affiliate link is configured in:
- All CTA buttons
- Offer page buttons
- Bridge page buttons
- Thank you page
- Resources page

**Current Affiliate Link:**
```
https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87
```

To update your affiliate link:
1. Change in `.env` file
2. Redeploy your site

---

## 📱 Pages Overview

### 1. Homepage (/)
- Hero section with stats
- Features showcase
- Benefits with images
- How it works timeline
- Testimonials
- Multiple CTAs

### 2. Bridge Page (/bridge)
- **Purpose:** High-converting page for social media traffic
- Simple, focused design
- Single call-to-action
- No distractions
- Perfect for TikTok bio link

### 3. Offer Page (/offer)
- Detailed offer presentation
- Lead capture form
- Bonuses breakdown
- Pricing comparison
- FAQ section

### 4. Resources Page (/resources)
- Training videos
- Templates library
- Case studies
- Educational content

### 5. About Page (/about)
- Company story
- Mission and values
- Team showcase
- Trust building

### 6. Contact Page (/contact)
- Contact form
- Business information
- Location (if applicable)

### 7. Thank You Page (/thank-you)
- Post-submission message
- Next steps
- Additional resources

---

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: 'your-color',
    // ...
  }
}
```

### Update Content

All content is in component files under `/components/` and `/app/`.

### Add New Pages

1. Create a new folder in `/app/your-page/`
2. Add `page.tsx`
3. Update navigation in `components/header.tsx`

---

## 🔧 Scripts

```bash
# Development
pnpm dev              # Start dev server

# Build
pnpm build            # Build for production
pnpm start            # Start production server

# Database
pnpm prisma generate  # Generate Prisma Client
pnpm prisma db push   # Push schema to database
pnpm prisma studio    # Open Prisma Studio (GUI)

# Linting
pnpm lint             # Run ESLint
```

---

## 📂 Project Structure

```
nextjs_space/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   │   ├── leads/          # Lead capture endpoint
│   │   └── newsletter/     # Newsletter endpoint
│   ├── about/              # About page
│   ├── bridge/             # Bridge page (social traffic)
│   ├── contact/            # Contact page
│   ├── offer/              # Offer page
│   ├── resources/          # Resources page
│   ├── thank-you/          # Thank you page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                 # UI primitives
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── ...                 # Other sections
│   ├── header.tsx
│   ├── footer.tsx
│   └── google-analytics.tsx
├── lib/                    # Utilities
│   ├── db.ts               # Prisma client
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Helper functions
├── prisma/                 # Database schema
│   └── schema.prisma
├── public/                 # Static files
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── README.md               # This file
└── VERCEL_DEPLOYMENT_GUIDE.md  # Deployment guide
```

---

## ⚠️ Important Notes

### No ActiveCampaign Integration

This version has ActiveCampaign **removed**. All lead data is stored in your PostgreSQL database. You can integrate with your own Python bots by:

1. Reading leads directly from the database
2. Using the `/api/leads` GET endpoint
3. Setting up webhooks to your Python backend

### Python Bot Integration

To integrate with your Python automation:

```python
import requests

# Fetch leads
response = requests.get('https://yourdomain.com/api/leads')
leads = response.json()['leads']

# Process leads with your bots
for lead in leads:
    # Send to email campaign bot
    # Add to social media bot
    # Update SEO bot
    # etc.
```

### Database Access

Your Python bots can connect directly to the PostgreSQL database:

```python
import psycopg2

conn = psycopg2.connect(DATABASE_URL)
cursor = conn.cursor()

cursor.execute('SELECT * FROM "Lead" WHERE "status" = \'new\'')
new_leads = cursor.fetchall()

# Process new leads
```

---

## 🤝 Support

For questions or issues:

1. Check [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)
2. Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
3. Review Prisma docs: [prisma.io/docs](https://www.prisma.io/docs)
4. Review Vercel docs: [vercel.com/docs](https://vercel.com/docs)

---

## 📄 License

This project is for your personal use as a GoHighLevel affiliate.

---

## 🎉 Ready to Deploy!

Your site is ready to:
- ✅ Capture leads
- ✅ Track analytics
- ✅ Convert visitors
- ✅ Integrate with your Python bots
- ✅ Make money with GoHighLevel!

**Deploy now and start earning! 🚀💰**
