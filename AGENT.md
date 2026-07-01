# AGENT.md — Dubai Expat Tools
## Project Memory, Progress Log & Future Roadmap

> This file is the single source of truth for everything that has been done,
> everything that is planned, and exactly how to achieve it.
> Update this file every time a major change is made.

---

## 🌐 Live URLs

| Resource | URL |
|---|---|
| **Live website** | https://dubaiexpattools.vercel.app |
| **GitHub repo** | https://github.com/nabilanjumabl/dubai-expat-tools |
| **Google Search Console** | https://search.google.com/search-console (property: dubaiexpattools.vercel.app) |
| **Vercel dashboard** | https://vercel.com/dashboard |

---

## 🏗️ Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | Best SEO, static generation, fast |
| Language | TypeScript | Type safety, fewer bugs |
| Styling | Custom CSS variables + Tailwind utilities | Full control, no bloat |
| Hosting | Vercel (free tier) | Auto-deploy on GitHub push, free SSL |
| Currency API | exchangerate-api.com (free tier) | Live AED rates, no key needed |
| Analytics | Google Search Console | Free, direct Google data |
| Monetization | Google AdSense (pending approval) | UAE RPM $8–15, high value audience |

**Deploy pipeline:** Push to GitHub `master` → Vercel auto-builds → Live in ~2 minutes

---

## ✅ WHAT IS DONE (Completed)

### Phase 1 — Build (Completed: June 24, 2026)

#### Tools Built (6 fully working)
- [x] **UAE Salary Calculator** — Basic + housing + transport + other allowances, gratuity, AED to INR/PKR/USD/GBP/PHP conversion
- [x] **AED Currency Converter** — Live rates via exchangerate-api.com, 10 currencies (PKR, INR, PHP, EUR, GBP, USD, BDT, NPR, LKR, EGP)
- [x] **Gratuity Calculator** — UAE Labour Law 2025 formula, resignation vs termination scenarios, partial year support
- [x] **UAE VAT Calculator** — Add or remove 5% VAT, instant
- [x] **Golden Visa Eligibility Checker** — 4-step quiz, 6 profession categories, personalised result + next steps
- [x] **Dubai Rent Estimator** — 15 neighbourhoods, 4 unit types, budget/affordable/premium/luxury tiers

#### Pages Built
- [x] Homepage (`/`) — Hero, tools grid, why us strip, blog preview, CTA banner
- [x] Tools index (`/tools`) — All 6 tools listed
- [x] Blog index (`/blog`) — 4 posts listed
- [x] About page (`/about`) — Mission, what we offer, our promise
- [x] Privacy Policy (`/privacy`) — Full GDPR-friendly policy, AdSense compliant
- [x] Contact page (`/contact`) — Form UI (needs Formspree backend — see Phase 2)

#### Blog Posts Written (4)
- [x] **Moving to Dubai 2026: Complete Checklist** — 8 steps, 800+ words (`/blog/moving-to-dubai`)
- [x] **UAE Labour Law 2025 Changes** — 8 key changes, 900+ words (`/blog/uae-labour-law`)
- [x] **Best Banks in UAE for Expats 2026** — 5 banks compared, full pros/cons/fees (`/blog/best-banks-uae`)
- [x] **Dubai vs Abu Dhabi: Which Pays Better?** — 10 sectors, salary tables, cost of living (`/blog/dubai-vs-abu-dhabi`)

#### SEO Setup
- [x] Metadata on every page (title, description, keywords, og:tags)
- [x] Sitemap (`/sitemap.xml`) — 17 URLs, correct domain
- [x] robots.txt — Allow all, sitemap linked
- [x] og:url fixed to vercel domain
- [x] Sitemap submitted to Google Search Console
- [x] Breadcrumb navigation on all tool/blog pages
- [x] Internal linking — blog posts link to relevant tools

### Phase 1 Results (after 7 days live)
```
Total impressions:  49
Total clicks:       0  (pages not yet indexed — normal week 1)
Queries showing:    20
Average position:   85.4
Top query:          "download moving to dubai checklist" — 13 impressions
```

---

## 🔴 KNOWN ISSUES (Fix These First)

| Issue | Status | How to Fix |
|---|---|---|
| Sitemap shows 13 errors in GSC | Pending | Delete old sitemap in GSC → resubmit `sitemap.xml` |
| Contact form doesn't send email | Pending | Connect Formspree (free) — see Phase 2 tasks |
| Google Analytics not installed | Pending | Add GA4 tracking ID to layout.tsx |
| AdSense not applied yet | Pending | Apply at adsense.google.com |
| No email list | Pending | Add Mailchimp/Brevo signup form |

---

## 🗺️ FUTURE PLAN

---

### PHASE 2 — Fix & Polish (Target: Week 2–3, July 2026)

**Goal:** Fix all known issues, get AdSense approved, reach 500 daily visitors

#### Tasks

**Technical fixes**
- [ ] Connect contact form to Formspree (free at formspree.io) — add `action="https://formspree.io/f/YOUR_ID"` to contact page
- [ ] Add Google Analytics 4 — paste GA4 script into `app/layout.tsx` head
- [ ] Fix sitemap in Google Search Console — delete old, resubmit
- [ ] Request indexing for top 8 pages via URL Inspection (10/day limit)

**AdSense setup**
- [ ] Apply at adsense.google.com (need: About + Privacy + Contact pages ✅ done)
- [ ] Add AdSense auto-ads script to `app/layout.tsx` once approved
- [ ] Place manual ad units between tool and SEO content sections
- [ ] Expected RPM for UAE audience: **$8–15** (premium market)

**Content**
- [ ] Write 4 more blog posts targeting high-volume keywords:
  - "UAE gratuity calculator 2026" — target `/blog/uae-gratuity-guide`
  - "Best areas to live in Dubai for Indians" — target `/blog/best-areas-dubai-indians`
  - "How to open bank account in UAE without job" — target `/blog/bank-account-uae`
  - "UAE golden visa requirements 2026" — target `/blog/golden-visa-requirements`

**How to write and publish a new blog post:**
```bash
# 1. Create new folder and file
mkdir app/blog/YOUR-SLUG
touch app/blog/YOUR-SLUG/page.tsx

# 2. Copy structure from existing blog post (e.g. moving-to-dubai)
# 3. Write content — minimum 600 words, add metadata, link to tools
# 4. Add to blog/page.tsx posts array
# 5. Add to sitemap.ts
# 6. Push to GitHub
git add .
git commit -m "Blog: YOUR POST TITLE"
git push origin master
# Vercel auto-deploys in ~2 minutes
```

---

### PHASE 3 — Traffic Growth (Target: Month 2, August 2026)

**Goal:** 10,000 monthly visitors, AdSense earning $100–300/month

#### Content Strategy
- [ ] Publish 2 blog posts per week consistently
- [ ] Target long-tail keywords with low competition:
  ```
  "dubai salary for software engineer 2026"
  "how much does a nurse earn in dubai"
  "is aed to pkr rate good today"
  "dubai rent for family of 4"
  "can i get golden visa with 30000 salary"
  ```

#### Community Distribution (FREE traffic sources)
- [ ] Post in Facebook groups:
  - "Indians in Dubai" (500k+ members)
  - "Pakistanis in UAE" (200k+ members)
  - "Expats in Dubai" (300k+ members)
  - "Filipino Community Dubai" (150k+ members)
- [ ] Reddit posts (be helpful, not spammy):
  - r/dubai — share salary calculator when people ask salary questions
  - r/expats — share moving checklist
  - r/india, r/pakistan — share AED currency tool
- [ ] Share PDF checklist in WhatsApp expat groups

#### Russian Language Opportunity
- GSC already showing Russian salary queries ("расчет заработной платы в дубае")
- UAE has 100,000+ Russian expats post-2022
- [ ] Create `/ru` pages — Russian salary calculator, Russian blog post
- Easy win: translate salary calculator UI to Russian

---

### PHASE 4 — Monetization Scale (Target: Month 3–4, September–October 2026)

**Goal:** $1,000–3,000/month revenue

#### AdSense Optimization
- [ ] A/B test ad placements — between tool and content sections perform best
- [ ] UAE RPM target: $10–15 (vs global average $2–3)
- [ ] Traffic needed for $1k/month at $10 RPM = **100,000 monthly pageviews**

#### Affiliate Revenue (HIGH VALUE)
| Partner | Commission | How |
|---|---|---|
| Wise (money transfer) | $50–70 per signup | Add "Send money home" CTA on currency converter |
| Emirates NBD referral | AED 200–500 per account | Add bank comparison CTA |
| Bayut / Dubizzle (property) | AED 100–300 per lead | Add to rent estimator page |
| Insurance comparison | AED 50–150 per lead | Add health insurance tool |
| VPN services | $30–50 per signup | UAE expats use VPNs — sidebar ad |

**How to add affiliate links:**
```tsx
// On currency converter page, add after results:
<div style={{ background: "#E6F7F4", borderRadius: 12, padding: "1rem" }}>
  <p>Send money home with <strong>Wise</strong> — better rates than banks</p>
  <a href="YOUR_WISE_AFFILIATE_LINK">Get started →</a>
</div>
```

#### Email List (Long-term asset)
- [ ] Add Brevo (formerly Sendinblue) free signup form — 300 emails/day free
- [ ] Lead magnet: "Dubai Salary Negotiation Guide PDF" — capture emails
- [ ] Monthly newsletter: "Dubai Expat Money Tips" — keep audience engaged
- [ ] 10,000 email subscribers = direct traffic that doesn't depend on Google

---

### PHASE 5 — Automation (Target: Month 4+, October 2026+)

**Goal:** Blog posts auto-generated and published via GitHub Actions

#### Blog Automation with GitHub Actions + Claude API
```yaml
# .github/workflows/auto-blog.yml
# Runs every Monday — generates 1 new blog post using Claude API
# Commits it to GitHub → Vercel auto-deploys

name: Auto Blog Post
on:
  schedule:
    - cron: '0 8 * * 1'  # Every Monday at 8am
  workflow_dispatch:

jobs:
  generate-post:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Generate blog post
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          node scripts/generate-blog-post.js
      - name: Commit and push
        run: |
          git config user.email "bot@dubaiexpattools.com"
          git config user.name "Content Bot"
          git add .
          git commit -m "Auto blog: $(date +%Y-%m-%d)"
          git push
```

**To implement:**
1. Create `scripts/generate-blog-post.js` — calls Claude API with keyword prompt
2. Add `ANTHROPIC_API_KEY` to GitHub Secrets
3. Enable workflow — runs every Monday automatically

---

### PHASE 6 — Custom Domain + Scale (Target: Month 5–6)

**Goal:** Professional domain, 500k monthly visitors, $5,000+/month

- [ ] Buy domain: `dubaiexpattools.com` (~$12/year on Namecheap/GoDaddy)
- [ ] Connect to Vercel: Vercel dashboard → Domains → Add domain
- [ ] Update sitemap.ts base URL from vercel.app to .com
- [ ] Update og:url in layout.tsx
- [ ] Submit new sitemap to Google Search Console
- [ ] 301 redirect old vercel.app URLs to new domain (Vercel does this automatically)

**New tools to build for scale:**
- [ ] UAE Job Salary Comparison tool (by role + experience)
- [ ] Cost of Living Calculator (Dubai vs home city)
- [ ] UAE Mortgage Calculator
- [ ] School Fee Estimator (30+ schools database)
- [ ] UAE Health Insurance Comparison

---

## 📊 Revenue Projection

| Month | Monthly Visitors | AdSense ($10 RPM) | Affiliates | Total |
|---|---|---|---|---|
| Month 1 (now) | 0–5,000 | $0–50 | $0 | $0–50 |
| Month 2 | 10,000 | $100 | $50 | $150 |
| Month 3 | 30,000 | $300 | $200 | $500 |
| Month 4 | 75,000 | $750 | $500 | $1,250 |
| Month 6 | 200,000 | $2,000 | $1,500 | $3,500 |
| Month 12 | 1,000,000 | $10,000 | $5,000 | $15,000 |

---

## 📁 Project File Structure

```
dubai-expat-tools/
├── app/
│   ├── layout.tsx          ← Nav, footer, global metadata
│   ├── page.tsx            ← Homepage
│   ├── globals.css         ← All CSS variables and styles
│   ├── sitemap.ts          ← Auto-generated sitemap.xml
│   ├── about/page.tsx      ← About page
│   ├── privacy/page.tsx    ← Privacy policy
│   ├── contact/page.tsx    ← Contact form
│   ├── tools/
│   │   ├── page.tsx                    ← All tools index
│   │   ├── salary-calculator/page.tsx
│   │   ├── currency-converter/page.tsx
│   │   ├── gratuity-calculator/page.tsx
│   │   ├── vat-calculator/page.tsx
│   │   ├── golden-visa-checker/page.tsx
│   │   └── rent-estimator/page.tsx
│   └── blog/
│       ├── page.tsx                    ← Blog index
│       ├── moving-to-dubai/page.tsx
│       ├── uae-labour-law/page.tsx
│       ├── best-banks-uae/page.tsx
│       └── dubai-vs-abu-dhabi/page.tsx
├── public/
│   └── robots.txt
├── AGENT.md               ← THIS FILE
└── README.md              ← Deploy instructions
```

---

## 🔑 Keywords Already Ranking (GSC Data — Week 1)

| Keyword | Impressions | Position | Action |
|---|---|---|---|
| download moving to dubai checklist | 13 | ~85 | Create PDF download |
| dubai salary calculator | 7 | ~85 | Keep optimising |
| uae salary calculator | 5 | ~85 | Keep optimising |
| monthly salary calculator uae | 4 | ~85 | Keep optimising |
| расчет заработной платы в дубае | 3 | ~85 | Build Russian page |
| salary calculator | 2 | ~85 | Keep optimising |
| dubai money converter | 1 | ~85 | Keep optimising |

---

## 📝 How to Add a New Blog Post (Step by Step)

```bash
# Step 1: Clone or pull latest
git pull origin master

# Step 2: Create file
mkdir -p app/blog/YOUR-SLUG
# Write your page.tsx — copy structure from existing post

# Step 3: Add to blog index (app/blog/page.tsx)
# Add entry to the `posts` array

# Step 4: Add to sitemap (app/sitemap.ts)
# Add: { url: `${base}/blog/YOUR-SLUG`, lastModified: now, ... }

# Step 5: Deploy
git add .
git commit -m "Blog: Your Post Title"
git push origin master
# Vercel deploys automatically in ~2 minutes ✅
```

---

## 🤖 How to Use Claude to Write Blog Posts

Paste this prompt into Claude:

```
Write a full Next.js page.tsx blog post for Dubai Expat Tools.

Topic: [YOUR TOPIC]
Target keyword: [MAIN KEYWORD]
Slug: /blog/[YOUR-SLUG]
Min words: 700
Style: Match existing blog posts — professional but friendly,
data-driven, practical for expats.

Requirements:
- Full TypeScript Next.js page with Metadata export
- Breadcrumb at top
- Category badge
- Gold left-border intro quote
- Subheadings with h2 tags
- Internal links to relevant tools (/tools/salary-calculator etc)
- Navy CTA box at bottom linking to tools
- Legal disclaimer if needed
```

---

*Last updated: July 1, 2026*
*Next review: August 1, 2026*
