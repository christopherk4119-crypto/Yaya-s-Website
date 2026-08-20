# SEO Playbook

Everything learned building SEO for **yayageneralservice.com** (Calgary electrician / plumber / appliance repair, Next.js App Router on Vercel).

Written to be reusable. Copy this file into the next project and work through it.

**Three parts:**
- **Part 1 — On-site SEO:** things you change in the codebase
- **Part 2 — Off-site SEO:** things you change outside the website
- **Part 3 — Google Search Console:** what to look at, and what each signal tells you to go fix on-site

---

## Part 0 — Read this before touching anything

Four lessons that cost real time on this project.

### 0.1 Code pushed ≠ live on the site

Committing to GitHub does nothing on its own. Vercel has to build it, and the build has to be promoted to Production. Multiple times in this project, work was "done" in the repo while the live site showed the old version.

**Always verify separately:** check the live URL yourself, or check Vercel → Deployments and confirm the newest deployment's commit hash matches what you just pushed and is marked **Production / Ready**.

If the live site looks stale after a successful push, check in this order:
1. Is Vercel's connected repo/branch actually the one you pushed to?
2. Did the newest deployment succeed, or error out?
3. Did it get promoted to Production, or is it sitting as a Preview?
4. Browser/CDN cache — hard refresh (`Cmd/Ctrl + Shift + R`) or incognito.

### 0.2 Canonical host must be enforced in exactly ONE place

This took the site down with `ERR_TOO_MANY_REDIRECTS`.

The code said the canonical domain was `www.yayageneralservice.com` (in the canonical tags, sitemap, robots.txt, and schema). A redirect was added in `next.config.ts` sending non-www → www. But Vercel's Domains settings only had the **bare** `yayageneralservice.com` configured — `www` wasn't set up as a domain at all. The two layers fought and looped forever.

**Rule:** decide the canonical host once, then make the host config (Vercel/Cloudflare/DNS) and the code agree. Do **not** add a code-level host redirect if your host platform is already doing host redirection.

**Before writing any host redirect:** open your hosting dashboard's domain settings and read what's actually configured there. Don't assume.

### 0.3 Check what already exists before building

A later SEO brief described problems that had already been fixed weeks earlier. Rebuilding them would have wasted hours and risked breaking working code.

**Before acting on any SEO audit or brief** (including one written by an AI), grep the codebase and verify each claim. Audits go stale fast, and they're often written without access to your actual current code.

### 0.4 An `href` in the code isn't proof a link works

A whole batch of new pages was built and linked — but the links were added to a small secondary text row, while the big visual service cards users actually click were plain `<div>`s that weren't links at all. Everything "worked" in the code and did nothing for a real user.

**Test the way a user actually behaves.** Click the thing. Confirm the URL changes. Checking that an `href` attribute exists is not the same test.

---

## Part 1 — On-site SEO (in the codebase)

### 1.1 Technical foundation

Get all of this right before writing a single page of content. It's the cheapest, highest-leverage work.

#### Canonical domain — pick one, use it everywhere

Every one of these must use the **same** host, protocol, and www-or-not:
- `metadataBase` in the root layout
- `alternates.canonical` on every page
- `openGraph.url` on every page
- `sitemap.ts`
- `robots.ts` sitemap reference
- All JSON-LD schema `url`, `@id`, `logo`, `image` fields

One `siteUrl` constant, imported everywhere, prevents this drifting. On this project it drifted to 68 hardcoded references across 25 files.

```ts
// src/app/layout.tsx
const siteUrl = "https://yayageneralservice.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
};
```

#### One `<h1>` per page

This site had **three** H1s on the homepage at one point: the hero headline was split into two separate `<h1>` tags (one per visual line), plus a hidden SEO text block had its own.

Fix pattern — wrap the lines in one H1, use `<div>` for the visual line break:

```tsx
<h1 className="space-y-2">
  <div>{headline.line1}</div>
  <div>{headline.line2}</div>
</h1>
```

Make the H1 match the page's target query closely. `/electrical` was changed from "Electrician Services Calgary" → **"Electrician Calgary"** to match the actual search term.

**Audit command:**
```bash
grep -rn "<h1" src/app src/components --include="*.tsx"
```

#### Title tags — under 60 characters, keyword first

Lead with the target term, not the business name. Google truncates past ~60 chars.

```
✅ "Emergency Plumber Calgary | 24/7, No Extra Fee"     (46)
✅ "Panel Upgrades Calgary | 100A to 200A"              (48)
❌ "YAYA General Contractor Incorporated | Emergency Plumbing Services in Calgary Alberta"
```

Use the Next.js template so subpages stay consistent:
```ts
title: {
  default: "Business Name | Primary Service City",
  template: "%s | Business Name",
}
```

#### Meta descriptions — under 155 characters

Not a ranking factor, but it's your ad copy in the search results — it drives CTR. Include the hook and the phone number.

```
"24/7 emergency plumber in Calgary. Burst pipes, no water, sewage backup,
water heater failure. No after-hours fee. Call (403) 400-3055."   (146)
```

**Audit script** (catches over-limit strings before they ship):
```bash
node -e "
const fs=require('fs');
const c=fs.readFileSync('src/app/PAGE/page.tsx','utf8');
const t=c.match(/title: \"([^\"]+)\"/); const d=c.match(/description: \"([^\"]+)\"/);
if(t)console.log('title',t[1].length,t[1]);
if(d)console.log('desc',d[1].length,d[1]);
"
```

#### sitemap.xml

Every indexable page, canonical URLs only, no retired/redirected URLs.

This site's sitemap was silently missing 6 pages that had been built — they existed, but Google had no clean path to find them.

**After adding any page, add it to the sitemap in the same commit.** Treat it as part of "done."

#### robots.txt

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
```

Confirm it isn't blocking anything real, and that it points at the sitemap.

#### Favicon must be square

This site's original icon was 497×431 — Google requires square, so it silently fell back to showing a generic hosting icon in search results instead of the company logo.

Ship: `icon.png` at 512×512, `apple-icon.png` at 180×180, plus a `manifest.ts` declaring both.

---

### 1.2 Structured data (JSON-LD)

This is how you get rich results — star ratings, FAQ dropdowns, business info panels. High value, and most small-business competitors skip it.

#### LocalBusiness — one global component, rendered in the root layout

Rendered once in `layout.tsx` means every page gets it automatically. Fields that mattered here:

| Field | Notes |
|---|---|
| `@type` | Array — be specific: `["LocalBusiness", "HomeAndConstructionBusiness", "Electrician", "GeneralContractor"]` |
| `name` | **Must exactly match the Google Business Profile.** See 1.3. |
| `alternateName` | Array — where old/DBA names live so you don't lose the association |
| `areaServed` | Array of `City` objects — Calgary, Airdrie, Cochrane, Okotoks, Chestermere |
| `geo` | `GeoCoordinates` — confirms location |
| `openingHoursSpecification` | 24/7 = one spec, all 7 days, `00:00`–`23:59` |
| `sameAs` | **Real profile URLs only.** A generic `https://facebook.com` does nothing — it must be the actual profile. |
| `logo` / `image` | Point at the actual image file, **not** the homepage URL |
| `aggregateRating` | `ratingValue`, `reviewCount`, `bestRating`, `worstRating` |
| `review` | Individual `Review` entries with `author`, `reviewRating`, `reviewBody` |
| `hasOfferCatalog` | Your service list with URLs |
| `priceRange` | `"$$"` — vague is fine and expected |

#### Service schema — per page

One reusable component, parameterized. **Watch the `provider` type** — this was a real bug: it was hardcoded to `"Electrician"`, which would have been factually wrong on every plumbing and appliance page.

```tsx
providerType?: "Electrician" | "Plumber" | "HomeAndConstructionBusiness"
```

#### FAQPage schema

Wrap your FAQ accordion component so the schema is emitted automatically wherever FAQs are used. This is what produces the expandable Q&A results in Google.

#### Validate after deploy

Run every page type through **Google Rich Results Test** (`search.google.com/test/rich-results`). Schema that doesn't parse produces zero benefit and fails silently — you'll never notice without testing.

Quick local sanity check that the object is at least valid JS:
```bash
node -e "
const s=require('fs').readFileSync('src/components/ui/local-business-schema.tsx','utf8');
const m=s.match(/const schema = (\{[\s\S]*?\n  \};)/);
console.log(JSON.stringify(new Function('return '+m[1].slice(0,-1))()).length,'bytes — parses OK');
"
```

---

### 1.3 NAP consistency (Name, Address, Phone)

**This is a compliance issue, not a style preference.** This business's Google Business Profile was suspended once over a name mismatch, and Google later rejected an edit citing "business identity changed."

The rule: the business name on the website must match the Google Business Profile **character for character**.

Where it has to match:
- `<title>` tags and the title template
- Meta descriptions
- `og:title`, `og:site_name`
- `author` / `creator` / `publisher` metadata
- Twitter card tags
- JSON-LD `name`
- Footer brand block and copyright line
- Logo `alt` text
- Navbar/footer tagline under the logo — **easy to miss**, and it reads as a second business name to a crawler
- Any body copy mentioning the business

**Audit command:**
```bash
grep -rn "Old Business Name" src --include="*.tsx" --include="*.ts"
```

Keep the old name as schema `alternateName` so you don't lose the association — just don't let it be the primary name anywhere.

> On this project the name flip-flopped twice, each time costing a full 45–68 occurrence sitewide rewrite. **Confirm the legal/GBP name once, in writing, before you build.**

---

### 1.4 Content architecture — the core strategy

This is what actually moved the needle.

#### The problem: thin catch-all pages

The site had 3 service pages with roughly nine bullet points between them. Google Search Console showed the pattern clearly:
- The site got **impressions** for dozens of specific service terms
- It ranked position **67–88** for them (page 7+, effectively invisible)
- Google was serving the **homepage** for specific service queries, because no better page existed

**When you have impressions but terrible position and no clicks, you usually don't have a keyword problem — you have a "no page deserves to rank" problem.**

#### The fix: hub-and-spoke

```
/electrical                    ← hub: overview + links to every spoke
├── /electrical/emergency-electrician      ← spoke: one topic, done properly
├── /electrical/panel-upgrades
├── /electrical/home-rewiring
├── /electrical/commercial-electrical
└── /electrical/renovation-electrical
```

Nest spokes **under** the hub (`/electrical/panel-upgrades`), not at root (`/panel-upgrade-calgary`). Nesting reinforces the topic cluster and makes the structure legible to both crawlers and users.

**Each spoke page needs:**
- 800–1200 words of genuinely useful content
- Unique title + meta description
- One H1 matching the target term
- What the job involves / what's included / permits required / realistic timeline / how to prepare
- A 4–6 question FAQ using questions real customers actually ask
- Real photos (see 1.6)
- Prominent tappable phone CTA — top and bottom
- Link **up** to the hub, and the hub links **down** to it
- Cross-links to genuinely related pages

Build a shared layout component so all of this is structurally consistent and you're only writing content, not markup, for each new page.

#### Keyword cannibalization — the trap

If two pages target the same query, they split the ranking signal and typically **both** rank worse than one strong page would.

This happened here: `/emergency-electrician-calgary` (old, thin) and `/electrical/emergency-electrician` (new, deep) both targeted "emergency electrician calgary."

**Fix: 301 redirect the weaker URL into the stronger one. Do not run both.**

```ts
// next.config.ts
async redirects() {
  return [
    { source: "/emergency-electrician-calgary", destination: "/electrical/emergency-electrician", permanent: true },
    { source: "/panel-upgrade-calgary",         destination: "/electrical/panel-upgrades",        permanent: true },
  ];
}
```

Then: delete the old page directory, remove it from the sitemap, and update every internal link to point at the new canonical URL directly (link to the destination, not through the redirect).

**Never just delete a page that has any history** — that's a 404 and you lose whatever authority it had. Always redirect.

**Verify the redirect actually fires:**
```bash
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://localhost:3000/old-url
# want: 308 (or 301) -> /new-url
```

#### Orphan pages

Five pages here had **zero** internal links pointing at them. They were in the sitemap, but nothing on the site linked to them — which is a weak signal to Google and means no user would ever find them by browsing.

**Audit:** for each page, grep for links pointing at it. If nothing links in, it's orphaned.

```bash
grep -rn "your-page-slug" src --include="*.tsx" | grep -v "app/your-page-slug/"
```

#### Internal linking

- Homepage → hub pages, with descriptive anchor text
- Hub → every spoke
- Spoke → hub (breadcrumb)
- Spoke ↔ genuinely related spokes, **including across categories** (dishwasher repair ↔ renovation plumbing ↔ renovation electrical)
- Use natural anchor text matching the target term — but **vary it**. Don't paste the identical string 20 times.

---

### 1.5 Content quality rules — the "don't get penalised" list

- **No doorway pages.** Do not generate near-identical pages by find-and-replacing a town or service name. Google treats this as a violation. Five strong pages beat forty hollow ones. If you can't write a genuinely differentiated page for a term, skip the term.
- **Mention the service area in the body copy** instead of building a separate page per surrounding town.
- **No keyword stuffing.** Don't repeat "Calgary electrician" every paragraph, and don't jam city names into every heading.
- **No pricing superlatives** — "cheapest," "best," "affordable" are unverifiable claims.
- **Never claim a capability the business doesn't have.** On this site, main sewer line work requiring drain camera and powered auger equipment was explicitly stated as referred out. Honesty here also builds trust with the reader.
- **Never reference licensed work without the certificate.** Gas appliances / gas water heaters were kept off this site entirely because the gas fitter certificate wasn't confirmed.
- **Write for a worried person comparing options**, not for a crawler. The content that ranks is the content that answers the question someone actually typed.

---

### 1.6 Images

- **Real job photos, not stock.** This site had genuine photos of panel upgrades, rough-in plumbing, commercial oven service. Real photos differentiate; stock photos look like every competitor.
- **Descriptive alt text** following a consistent convention: location + service + specific work.
  - ✅ `"Calgary electrician performing breaker panel upgrade"`
  - ❌ `"image1.jpg"` / `"electrician"`
- **Verify every referenced image actually exists** — broken images are a real UX and crawl problem:
```bash
grep -rohE '"/images/[^"]+\.(jpg|png|webp)"' src --include="*.tsx" | tr -d '"' | sort -u | \
  while read i; do [ -f "public$i" ] || echo "MISSING: $i"; done
```
- Use `next/image` with proper `sizes` to preserve Core Web Vitals.

---

### 1.7 Trust signals (E-E-A-T)

Google weighs Experience, Expertise, Authoritativeness, Trust — especially for local service businesses where a bad hire has real consequences.

What was added here:
- **Credentials as a headline element**, not a footnote. "Journeyman Electrician — Certified 2007" and "Journeyman Plumber" were buried in a row of small green checkmarks; they became a dedicated two-card banner below the hero on the homepage and all three hub pages. Both are compulsory-certification trades in Alberta and most competitors hold only one — that's a real differentiator and it belongs where people see it.
- **Real reviews on-page** with `AggregateRating` + `Review` schema — kept verbatim, typos included. Altering quoted reviews is bad practice, and real customer language reads more credibly than polished copy.
- **Years in business** stated plainly (since 2007).
- **A genuine structural differentiator** stated where it's relevant — here, one licensed person handling the circuit, the connection, and the appliance in a single visit. Mentioned where true, **not** copy-pasted onto every page.

---

## Part 2 — Off-site SEO (outside the website)

The website is only half of local SEO. For a local service business, the map pack often drives more calls than organic results.

### 2.1 Google Business Profile (GBP)

**The single highest-value off-site asset for a local business.**

- **The name must exactly match the website.** This is what got this profile suspended. Same characters, same punctuation, same "Incorporated" vs "Inc."
- Complete every field — categories (primary + secondary), service areas, hours, phone, website URL, description, attributes.
- Choose the **primary category** carefully — it's the strongest single relevance signal for map pack rankings.
- Upload real job photos regularly. Active profiles outperform dormant ones.
- Post updates — GBP has a posts feature most competitors ignore.
- **Respond to every review.** This site's owner replies to all of them, which is exactly right.

**GBP wins "near me" and local-intent searches** via the map pack, which sits above organic results. That's a separate track from website work but they reinforce each other — the site's NAP, schema, and `sameAs` links all feed the profile's credibility.

### 2.2 NAP consistency across every citation

Same name, address, phone — everywhere the business appears online:
- Google Business Profile
- The website
- Kijiji / classified listings
- Social profiles
- Any directory listing

Inconsistency here is exactly what makes Google doubt the business's identity. This is the #1 off-site hygiene item.

### 2.3 Citations and listings

This business had two Kijiji listings (appliance repair + electrician). These function as citations and referral traffic. Any directory listing counts — the value is in **consistency and volume**, not any single listing.

Wire them into the site's schema `sameAs` array so Google connects them to the business entity.

### 2.4 Reviews

- Volume and recency both matter. 9 reviews at 5.0 is a good start; steady new reviews matter more than a big one-time batch.
- Reviews feed **both** the map pack ranking and the on-site `AggregateRating` schema.
- Review generation is an off-site process (asking customers), but the **display and schema** are on-site work — keep them in sync when the count changes.

### 2.5 Social profiles

TikTok, Instagram, YouTube here. Their SEO value is mostly:
- Entity confirmation via `sameAs`
- Referral traffic
- Brand searches

Not a primary ranking driver, but cheap to link properly.

---

## Part 3 — Google Search Console

This is the feedback loop. Everything in Part 1 is guesswork until GSC tells you what's actually happening.

### 3.1 Setup — do this first

**Use a Domain property, not a URL-prefix property.**

A URL-prefix property (`https://www.example.com`) only tracks that exact variant. A **Domain property** (`example.com`, no protocol picker) covers `http`, `https`, `www`, and non-www all in one.

This matters enormously: this project had the same page appearing as two separate entries — `example.com/electrical` at position 16.3 and `www.example.com/electrical` at position 50.8 — the same page, splitting its own ranking signal. A Domain property makes that visible immediately instead of hiding half your data.

Then: **Sitemaps → submit `sitemap.xml`.**

### 3.2 The reports that matter

| Report | What it tells you |
|---|---|
| **Performance → Queries** | What people searched, impressions, clicks, CTR, average position |
| **Performance → Pages** | Which of your pages is ranking, and how |
| **Indexing → Pages** | What's indexed, what isn't, and *why* not — duplicates, canonical conflicts, crawl errors |
| **URL Inspection** | Per-URL status, which canonical Google actually chose, and "Request Indexing" |
| **Core Web Vitals** | Performance issues that affect ranking |
| **Enhancements / Rich results** | Whether your schema is being recognized |

### 3.3 The killer technique: filter by page, then read its queries

This is the most useful thing in GSC and it's slightly buried.

**Performance → click "Pages" tab → click a specific page → click back to "Queries" tab.**

You now see every query *that specific page* ranks for. This is how you diagnose:

- **Does the page rank for its own target term?** `/electrical` ranked **0** for "electrician calgary" — the homepage was catching that query instead. That tells you the page's title/H1/content isn't clearly claiming the term, and that you need internal links pointing at it with that anchor text.
- **Is the wrong page ranking?** If the homepage ranks for a specific service term, you need a dedicated page for it — and the homepage should link *to* that page rather than compete with it.
- **Is a page ranking for things it shouldn't?** That's a catch-all page absorbing queries that deserve their own pages.

### 3.4 Diagnostic patterns → what to fix on-site

This is the translation layer — the part that turns GSC data into code changes.

| What you see in GSC | What it means | On-site fix |
|---|---|---|
| Same page listed twice at different positions (www + non-www, or http + https) | Canonical split — the page is competing with itself | Fix canonical host everywhere; enforce **one** host redirect (Part 0.2) |
| High impressions, position 60–90, zero clicks | No page deserves to rank; a catch-all is absorbing the query | Build a dedicated page for that term (Part 1.4) |
| High impressions, position 5–15, low CTR | You rank but nobody clicks | Rewrite the title tag and meta description — this is your ad copy |
| **Position 8–20** | **Page 2. The most winnable position there is.** | Prioritise these above everything else — small improvements flip them to page 1 |
| Homepage ranking for a specific service query | Missing a dedicated page for that service | Build the page, link homepage → it with matching anchor text |
| Two of your pages ranking for one query | Cannibalization | 301 the weaker into the stronger (Part 1.4) |
| Page in sitemap but "Discovered – currently not indexed" | Weak signal — often an orphan | Add internal links pointing at it |
| "Duplicate, Google chose a different canonical" | Your canonical tag disagrees with Google's judgment | Check the canonical tag is correct and self-referential |
| Impressions dropping across the board | Often a deploy/technical break, not a content problem | Check the site actually loads; check Indexing → Pages for new errors |
| Rich results not appearing | Schema is invalid or not detected | Run Rich Results Test; validate the JSON parses |

### 3.5 Prioritisation

Work in this order:

1. **Technical/canonical issues** — they suppress everything else, and fixing them can lift rankings with zero new content
2. **Position 8–20 terms** — closest to page 1, highest ROI
3. **High-impression / zero-click terms** — real demand, no page serving it
4. **Long-tail terms with low impressions** — build these last, in small batches

### 3.6 Ship in waves and actually wait

**Do not ship everything at once.** If five changes go live together and rankings move, you've learned nothing about which one worked.

The rhythm:
1. Ship one coherent batch
2. Regenerate + resubmit the sitemap
3. Request indexing on the important URLs (URL Inspection → Request Indexing)
4. **Wait for recrawl — days to two weeks**
5. Re-check GSC: did position move? did duplicates drop out of the Pages report?
6. Only then ship the next batch

This is genuinely hard to do because you want to keep building. Do it anyway — it's the only way to know what's working.

---

## Part 4 — Checklist for the next site

### Before writing any code
- [ ] Confirm the **exact legal business name** in writing (match to GBP / incorporation docs)
- [ ] Confirm the canonical domain: www or non-www — check the **host platform's** domain settings
- [ ] Confirm which certifications/licenses can legally be advertised
- [ ] Get real photos of actual work
- [ ] Set up a GSC **Domain property**

### Technical foundation
- [ ] Single `siteUrl` constant used everywhere
- [ ] Canonical host enforced in exactly one place
- [ ] `metadataBase` + `alternates.canonical` on every page
- [ ] One `<h1>` per page, matching the target term
- [ ] Unique title (<60) + description (<155) per page
- [ ] `sitemap.ts` with all indexable pages, canonical URLs only
- [ ] `robots.ts` allowing crawl + pointing at the sitemap
- [ ] Square favicon (512×512) + apple-icon (180×180) + manifest
- [ ] Open Graph + Twitter tags per page

### Schema
- [ ] `LocalBusiness` (specific `@type` array) in root layout
- [ ] `areaServed`, `geo`, `openingHoursSpecification`, `priceRange`
- [ ] `sameAs` with **real** profile URLs
- [ ] `logo` / `image` pointing at actual image files
- [ ] `AggregateRating` + `Review` if reviews exist
- [ ] `Service` schema per service page, correct `provider` type
- [ ] `FAQPage` schema on FAQ blocks
- [ ] Validated in Google Rich Results Test after deploy

### Content
- [ ] Hub-and-spoke structure, spokes nested under hubs
- [ ] 800–1200 real words per service page
- [ ] FAQ (4–6 real questions) per page
- [ ] Real photos with descriptive alt text
- [ ] Tappable phone CTA top and bottom
- [ ] Credentials/trust signals as a headline element
- [ ] No doorway pages, no keyword stuffing, no pricing claims, no unlicensed capability claims

### Linking
- [ ] Every page reachable by clicking from the homepage
- [ ] Hub → spoke and spoke → hub
- [ ] Cross-links between related pages
- [ ] Zero orphan pages
- [ ] Internal links point at canonical URLs, not through redirects
- [ ] **Clicked every card/link and confirmed the URL changes**

### NAP
- [ ] Business name identical: titles, meta, schema, footer, copyright, logo alt, **tagline**, body copy
- [ ] Phone identical everywhere
- [ ] Matches GBP character for character

### Before shipping
- [ ] `npm run build` clean
- [ ] `npm run lint` clean
- [ ] `npx tsc --noEmit` clean
- [ ] All referenced images exist
- [ ] All internal link targets resolve
- [ ] Redirects tested with `curl` (expect 301/308)
- [ ] **Verified on the live URL after deploy, not just in the repo**

### After shipping
- [ ] Submit/resubmit sitemap in GSC
- [ ] Request indexing on priority URLs
- [ ] Wait for recrawl
- [ ] Re-check GSC before shipping the next wave

---

## Part 5 — Useful commands

```bash
# Find every H1 (should be one per page)
grep -rn "<h1" src/app src/components --include="*.tsx"

# Find wrong/old business name
grep -rn "Old Business Name" src --include="*.tsx" --include="*.ts"

# Find domain inconsistency
grep -rn "www\.yourdomain\.com" src --include="*.tsx" --include="*.ts"

# Missing images
grep -rohE '"/images/[^"]+\.(jpg|png|webp)"' src --include="*.tsx" | tr -d '"' | sort -u | \
  while read i; do [ -f "public$i" ] || echo "MISSING: $i"; done

# All internal link targets
grep -rohE 'href="/[a-z0-9/-]*"' src --include="*.tsx" | sort -u

# Test a redirect
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://localhost:3000/old-url

# Test a host redirect without DNS
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" \
  -H "Host: yourdomain.com" http://localhost:3000/

# Rough word count of a page's content strings
node -e "
const c=require('fs').readFileSync('src/app/PAGE/page.tsx','utf8');
console.log((c.match(/\"[^\"]{15,}\"/g)||[]).join(' ').split(/\s+/).length,'words');
"
```

---

## Appendix — what was built on this site

**15 new service pages**, hub-and-spoke under three trades:

| Hub | Spokes |
|---|---|
| `/electrical` | emergency-electrician, panel-upgrades, home-rewiring, commercial-electrical, renovation-electrical |
| `/plumbing` | emergency-plumber, frozen-pipes, drain-cleaning, sump-pumps, renovation-plumbing |
| `/appliance` | refrigerator-repair, washer-dryer-repair, stove-oven-repair, dishwasher-repair, commercial-appliance-repair |

**Retired via 301** (consolidated to kill cannibalization):
`/emergency-electrician-calgary` · `/panel-upgrade-calgary` · `/dryer-repair-calgary` · `/dishwasher-repair-calgary`

**Reusable components built:**

| Component | Purpose |
|---|---|
| `service-detail.tsx` | Full long-form service page layout (hero, sections, what's-included, permits, timeline, prep, FAQ, related, CTA) |
| `service-page-layout.tsx` | Hub page layout with optionally-clickable service cards |
| `service-schema.tsx` | Per-page `Service` JSON-LD, parameterized `provider` type |
| `local-business-schema.tsx` | Global `LocalBusiness` JSON-LD |
| `faq-section.tsx` | FAQ accordion + automatic `FAQPage` schema |
| `related-services.tsx` | Cross-link pill row |
| `trade-overview.tsx` | Prose block for hub pages |
| `credentials-banner.tsx` | Journeyman certification trust element |

**Still queued (Wave 2)** — build in batches of 2–3, only after GSC confirms Wave 1 moved:

| Term | Impressions | Current pos | Planned URL |
|---|---|---|---|
| outlet installation calgary | 26 | 81.6 | `/electrical/outlet-installation-calgary` |
| electrical renovation calgary | 11 | 86.3 | `/electrical/electrical-renovation-calgary` |
| new electrical panel calgary | 4 | 76.3 | *fold into existing panel-upgrades page* |
| subpanel installation calgary | 2 | 88.0 | `/electrical/subpanel-installation-calgary` |
| underground power to detached building calgary | 3 | 67.0 | `/electrical/underground-power-detached-building-calgary` |
| appliance wiring calgary | 2 | 73.5 | `/electrical/appliance-wiring-calgary` |
| 24 hour electrician calgary | 1 | 72.0 | `/electrical/24-hour-electrician-calgary` |
