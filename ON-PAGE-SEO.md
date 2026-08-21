# On-Page SEO — Implementation Spec

Every piece of SEO that lives **inside the website**: the tags, the markup, the files, the images, the schema.

Companion to `SEO-PLAYBOOK.md`. That one is strategy, diagnosis, and how to read Search Console. **This one is the build spec** — what to actually put in the code, and which pieces wire up to Search Console and the Google Business Profile.

Code examples are Next.js App Router (what this site runs), with the raw HTML equivalent shown where it differs.

---

## 1. The `<head>` — every tag, and whether Google actually uses it

### 1.1 The ones that genuinely matter

| Tag | Purpose | Notes |
|---|---|---|
| `<title>` | Primary ranking + the clickable headline in results | Under 60 chars, target keyword first |
| `<meta name="description">` | Ad copy in the results — drives CTR | Under 155 chars. **Not a ranking factor**, but it decides whether anyone clicks |
| `<link rel="canonical">` | Tells Google which URL is the real one | Self-referential on every page. Wrong = split rankings |
| `<html lang="">` | Language + region | `en-CA` for Canada. Affects which locale you rank in |
| `<meta name="viewport">` | Mobile rendering | Google indexes mobile-first. Missing this = mobile usability failures |
| `<meta charset="utf-8">` | Character encoding | Prevents mangled text |
| `<meta name="robots">` | Index/follow directives | Only add if you need to *change* the default |

### 1.2 Social / preview tags

These don't affect ranking, but they control what your link looks like when shared — which affects clicks and traffic.

**Open Graph** (Facebook, LinkedIn, WhatsApp, Slack, iMessage, and the fallback for almost everything else):

```
og:title · og:description · og:url · og:type · og:image · og:site_name · og:locale
```

**Twitter/X cards** — only needed because X uses its own tags; everything else falls back to OG:

```
twitter:card (use "summary_large_image") · twitter:title · twitter:description · twitter:image
```

`og:image` should be a real image, at least 1200×630 for a large card. A square logo works but crops awkwardly on some platforms.

### 1.3 Icons and manifest

```
icon.png              512 × 512   ← MUST be square, or Google shows a generic icon
apple-icon.png        180 × 180   ← iOS home screen
favicon.ico           32 × 32     ← legacy, still requested by some browsers
manifest.webmanifest              ← name, icons, theme_color, background_color
```

> **This site's original icon was 497×431.** Google silently refused it and displayed a generic hosting icon in search results instead of the company logo. Nothing warned us. Square is mandatory.

### 1.4 Verification tags

Search Console needs to confirm you own the domain. Options:
- **DNS TXT record** — best. Verifies the whole domain, covers all subdomains and protocols, survives redeploys.
- **HTML meta tag** — `<meta name="google-site-verification" content="...">`. Works, but only verifies that one URL-prefix property.
- **HTML file upload** — works, easy to accidentally delete on a rebuild.

Use DNS if you control the DNS. It's what makes a **Domain property** possible, which is what you want (see §11).

### 1.5 `meta keywords` — be honest about this one

```html
<meta name="keywords" content="electrician calgary, plumber calgary, ...">
```

**Google has ignored this since 2009.** It does nothing for ranking. This site has one because it's harmless and it doubles as internal documentation of what a page targets — but do not spend a minute optimising it, and never let anyone bill you for "keyword meta tag optimisation."

### 1.6 Reference implementation

```ts
// src/app/layout.tsx — site-wide defaults
const siteUrl = "https://yourdomain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Business Name | Primary Service City",
    template: "%s | Business Name",        // subpages inherit this shape
  },
  description: "Under 155 characters. What you do, where, and the hook. Call (000) 000-0000.",

  authors:   [{ name: "Business Name" }],
  creator:   "Business Name",
  publisher: "Business Name",

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Business Name",
    title: "Business Name | Primary Service City",
    description: "Sharper, punchier than the meta description. This is social copy.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Business Name" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Name — Tagline",
    description: "Short version.",
    images: ["/og.png"],
  },

  alternates: { canonical: siteUrl },
};
```

```ts
// Any page — override per page
export const metadata: Metadata = {
  title: "Emergency Plumber Calgary | 24/7, No Extra Fee",   // becomes "… | Business Name"
  description: "Under 155 chars, specific to this page.",
  alternates: { canonical: `${siteUrl}/plumbing/emergency-plumber` },
  openGraph: {
    title: "Emergency Plumber Calgary | Business Name",
    description: "Social version.",
    url: `${siteUrl}/plumbing/emergency-plumber`,
  },
};
```

**`max-image-preview: large`** is worth having — it lets Google show a big image thumbnail next to your result instead of a tiny one.

---

## 2. Headings and semantic HTML

### 2.1 Heading rules

- **Exactly one `<h1>` per page.** Non-negotiable.
- The H1 should closely match the page's target query. `/electrical` went from "Electrician Services Calgary" → **"Electrician Calgary"**.
- Don't skip levels — h1 → h2 → h3, never h1 → h3.
- Headings describe the section beneath them. They're a table of contents, not decoration.
- Style with CSS, not by picking a heading level for its size. If you want small text, use `<h2 class="small">`, not `<h4>`.

**The failure mode to watch for:** a hero headline split across two lines using two `<h1>` tags. Renders identically, structurally wrong.

```html
<!-- WRONG — two H1s -->
<h1>Calgary's All-In-One</h1>
<h1>Contractor</h1>

<!-- RIGHT — one H1, visual break via div -->
<h1>
  <div>Calgary's All-In-One</div>
  <div>Contractor</div>
</h1>
```

### 2.2 Semantic elements

Use the real element. It tells crawlers and screen readers what a region *is*:

```html
<header>   site header
<nav>      navigation
<main>     the page's unique content — one per page
<article>  self-contained content
<section>  a thematic grouping (should have a heading)
<aside>    tangential content
<footer>   site footer
<address>  contact info — genuinely useful for NAP
<time datetime="2026-01-15">  dates
```

A page built entirely from `<div>` still ranks, but you're throwing away free signal.

### 2.3 Hidden text for SEO — the honest version

This site has a visually-hidden block containing the full name, address, phone and a summary. **This is legitimate** because:
- The content is true and matches the visible page
- It's hidden for layout reasons, not to show Google something different from users
- It uses `.sr-only` (clipped, still in the accessibility tree), not `display: none`

**It becomes a penalty risk the moment** the hidden text says something different from the visible page, stuffs keywords, or exists purely to game ranking. Keep it to NAP and a plain summary.

---

## 3. URLs

```
✅ /electrical/panel-upgrades
✅ /plumbing/emergency-plumber

❌ /Electrical/Panel_Upgrades      uppercase + underscores
❌ /page?id=447                    no keywords, hard to share
❌ /services/electrical/residential/calgary/panel-upgrades-and-service-changes
                                   too deep, too long
```

**Rules:**
- Lowercase only. `/Electrical` and `/electrical` can be treated as two URLs on some servers.
- Hyphens between words, never underscores. Google treats `panel_upgrade` as one word and `panel-upgrade` as two.
- Include the target keyword, drop filler words.
- Nest to reflect structure: `/electrical/panel-upgrades`, not `/panel-upgrade-calgary` floating at root.
- Keep it stable. **Changing a URL costs you its history** unless you 301 it.
- Pick trailing-slash or no-trailing-slash and be consistent — most hosts normalise, but internal links should match.

---

## 4. Content on the page

### 4.1 Keyword placement

Where the target term should naturally appear:

1. `<title>` — near the front
2. `<h1>`
3. **First 100 words** of body copy
4. At least one `<h2>`
5. The URL slug
6. An image alt attribute (where it honestly describes the image)
7. Naturally through the body — as often as reads well, and no more

**There is no keyword density target.** Anyone quoting you a percentage is selling 2011 advice. Write it so a human wouldn't notice you were targeting anything.

### 4.2 Length

800–1200 words for a service page is the working range that got results here. Below ~500 you're competing against pages with more depth. Above ~1500 for a straightforward service page is usually padding.

**Length is a symptom, not a goal.** A page hits 900 words because it genuinely answers what the job involves, what's included, whether a permit is needed, how long it takes, and what to do beforehand. Don't write to a word count.

### 4.3 The structure that works for a service page

```
H1 — target term
Intro (2 short paragraphs) — the problem, and the differentiator
Hero image
H2 — what the service actually involves
H2 — the specific sub-cases people search for
H2 — what to expect / how it works
Info block — what's included · permits · timeline · how to prepare
Related links
FAQ (4–6 real questions)
CTA — phone, tappable
```

### 4.4 FAQ blocks

Genuinely high value, for two reasons: they answer real long-tail queries in the user's own phrasing, and they're eligible for FAQ rich results via schema.

Write questions the way a customer would type them:

```
✅ "Why is there water pooling under my fridge?"
❌ "Refrigerator Water Leakage Diagnostics"
```

### 4.5 Content that gets you penalised

- **Doorway pages** — near-identical pages find-and-replacing a town or service name. Explicit Google violation.
- **Keyword stuffing** — including city names jammed into every heading.
- **Unverifiable superlatives** — "cheapest," "best," "#1."
- **Claiming capability you don't have.** This site explicitly states main sewer line work is referred out, and omits gas work entirely because the certificate wasn't confirmed.
- **Duplicate content across your own pages** — if two pages say the same thing, merge them.

---

## 5. Images

The most consistently neglected part of on-page SEO, and it's cheap to get right.

### 5.1 File names — do this before upload

The filename is a ranking signal for image search and adds context for the page.

```
✅ calgary-electrician-breaker-panel-upgrade-before-6.jpg
✅ calgary-plumber-shower-valve-brass-fitting-rough-in-5.jpg

❌ IMG_2847.jpg
❌ photo1.jpg
❌ Screen Shot 2026-01-15 at 3.42.11 PM.png
```

Lowercase, hyphens, descriptive, keyword-bearing where honest. **Rename before upload** — renaming later means updating every reference.

### 5.2 Alt text — every image, no exceptions

Alt text serves accessibility first and SEO second, and the same rule satisfies both: **describe what's actually in the image.**

```
✅ alt="Calgary electrician performing breaker panel upgrade"
✅ alt="Commercial US Range oven serviced by Calgary appliance technician"

❌ alt="electrician"                              too vague
❌ alt="calgary electrician calgary panel calgary" stuffing
❌ alt=""                                         only correct for purely decorative images
❌ (missing entirely)
```

Convention used here: **location + trade + specific work**. Pick a convention and hold it across the site.

Purely decorative images (background textures, spacer graphics) should have `alt=""` — an *empty* alt, deliberately, so screen readers skip them. Missing alt and empty alt are different things.

### 5.3 Format, size, delivery

| Concern | Do this |
|---|---|
| Format | WebP or AVIF, JPEG fallback. `next/image` handles conversion automatically |
| Dimensions | Always set `width`/`height` (or `fill` + sized container) — prevents layout shift (CLS) |
| Lazy loading | Default for below-fold. `next/image` does it automatically |
| Above-fold hero | `priority` / `loading="eager"` — this is usually your LCP element |
| Responsive | `sizes` attribute so mobile doesn't download the desktop image |
| File size | Under ~200KB for content images. A 4MB hero photo will wreck your Core Web Vitals |

```tsx
// Above-fold hero — priority, because this is the LCP element
<Image src={hero.src} alt={hero.alt} fill priority
       sizes="(max-width: 1024px) 100vw, 1024px"
       className="object-cover" />

// Below-fold — lazy by default
<Image src={photo.src} alt={photo.alt} fill
       sizes="(max-width: 640px) 50vw, 25vw" />
```

### 5.4 Real photos beat stock

This site uses genuine job photos — actual panel upgrades, actual rough-in plumbing, an actual serviced commercial oven. Stock photography makes you look like every competitor and carries no unique signal. Real photos are also the raw material for the Google Business Profile.

### 5.5 Verify they exist

Broken images are a real crawl and UX problem, and easy to miss:

```bash
grep -rohE '"/images/[^"]+\.(jpg|png|webp)"' src --include="*.tsx" \
  | tr -d '"' | sort -u \
  | while read i; do [ -f "public$i" ] || echo "MISSING: $i"; done
```

---

## 6. Links

### 6.1 Internal links

The mechanism that distributes authority through your site, and the thing Google follows to discover pages.

- **Anchor text should describe the destination.** "Panel upgrades" not "click here" or "read more."
- Vary the anchor text — don't paste one identical string twenty times.
- **Link to the canonical URL directly**, never through a redirect.
- **Every page must be reachable by clicking from the homepage.** An orphan page is a page Google barely believes in.

```bash
# Find orphans — does anything link TO this page?
grep -rn "your-page-slug" src --include="*.tsx" | grep -v "app/your-page-slug/"
```

> **The trap that bit this project:** the links existed in the code, but the big visual cards users actually click were plain `<div>`s. Clicking them did nothing. **Verify by clicking and watching the URL change** — an `href` in the source is not proof.

### 6.2 External links

- Linking out to genuinely authoritative sources is fine and can help credibility.
- `target="_blank"` **must** carry `rel="noopener noreferrer"` — security, not SEO, but do it.
- `rel="nofollow"` for paid/sponsored links, `rel="ugc"` for user-generated content.

### 6.3 Breadcrumbs

Worth adding: they give users a way up, and with `BreadcrumbList` schema Google renders the path in your search result instead of a bare URL.

```
Home → Electrical Services → Panel Upgrades
```

This site has visual breadcrumbs on detail pages but no `BreadcrumbList` schema yet — a genuine remaining gap and an easy win.

---

## 7. Structured data (JSON-LD)

All of it goes in a `<script type="application/ld+json">`. JSON-LD is Google's preferred format — don't use microdata or RDFa for new work.

### 7.1 Which types to use

| Type | Where | What it earns you |
|---|---|---|
| `LocalBusiness` (+ subtype) | Root layout — every page | Business info panel, map pack support |
| `Service` | Each service page | Service-specific context |
| `FAQPage` | Any page with FAQs | Expandable Q&A in results |
| `AggregateRating` + `Review` | Inside LocalBusiness | **Star ratings in search results** |
| `BreadcrumbList` | Any nested page | Breadcrumb path instead of raw URL |
| `Organization` | Root | Knowledge panel eligibility |
| `WebSite` | Root | Sitelinks search box |
| `ImageObject` | Image-heavy pages | Image search context |

Be specific with `@type`. `LocalBusiness` is generic; the subtype tells Google what you actually are:

```
Electrician · Plumber · HVACBusiness · GeneralContractor
HomeAndConstructionBusiness · Roofer · Locksmith · MovingCompany
```

You can use an **array** to claim several at once — this site uses:
```json
["LocalBusiness", "HomeAndConstructionBusiness", "Electrician", "GeneralContractor"]
```

### 7.2 LocalBusiness — the fields that matter

```ts
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician"],
  "@id": "https://yourdomain.com",
  name: "Exact Legal Business Name",        // MUST match the Business Profile
  alternateName: ["Old Name", "DBA Name"],  // where retired names live
  description: "...",
  url: "https://yourdomain.com",
  logo:  "https://yourdomain.com/icon.png", // actual image file, NOT the homepage URL
  image: "https://yourdomain.com/icon.png",
  telephone: "+15550000000",                // E.164 format
  email: "...",
  foundingDate: "2007",
  priceRange: "$$",                         // vague is expected and fine
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Debit",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },

  geo: { "@type": "GeoCoordinates", latitude: 51.0447, longitude: -114.0719 },

  areaServed: [
    { "@type": "City", name: "Calgary",   addressRegion: "AB", addressCountry: "CA" },
    { "@type": "City", name: "Airdrie",   addressRegion: "AB", addressCountry: "CA" },
  ],

  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00", closes: "23:59",        // 24/7 = one spec, all seven days
  }],

  sameAs: [                                  // REAL profile URLs only
    "https://www.instagram.com/yourhandle/",
    "https://www.youtube.com/channel/...",
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0", reviewCount: "9",
    bestRating: "5",    worstRating: "1",
  },

  review: [{
    "@type": "Review",
    author: { "@type": "Person", name: "Customer Name" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: "Verbatim review text.",
  }],
}
```

**Three mistakes to avoid:**
1. `sameAs: ["https://facebook.com"]` — a generic domain does nothing. It must be the actual profile URL.
2. `image` pointing at your homepage URL instead of an image file.
3. `name` not matching the Business Profile exactly. See §12.

### 7.3 Service schema — parameterize the provider

```ts
{
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Emergency Plumber",
  name: "Emergency Plumber",
  description: "...",
  url: "https://yourdomain.com/plumbing/emergency-plumber",
  provider: {
    "@type": "Plumber",        // ← must match the actual trade for THIS page
    name: "Exact Legal Business Name",
    telephone: "+15550000000",
    url: "https://yourdomain.com",
  },
  areaServed: [ /* same city list */ ],
}
```

> **Real bug from this project:** the provider type was hardcoded to `"Electrician"` in the shared component. Every plumbing and appliance page shipped afterward would have declared a plumber's work was done by an electrician. Parameterize it.

### 7.4 FAQPage

```ts
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}
```

Build this into the FAQ component itself so the schema emits automatically anywhere FAQs are used, rather than being hand-maintained per page.

### 7.5 Validate — schema fails silently

Invalid schema produces **zero** benefit and **zero** warnings. You will never notice without testing.

- **Google Rich Results Test** — `search.google.com/test/rich-results`
- **Schema.org Validator** — `validator.schema.org`
- Run **every page type**, not just the homepage.
- After deploy, watch Search Console → **Enhancements** for what Google actually detected.

---

## 8. Technical files

### 8.1 `robots.txt`

```ts
// src/app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
```

Confirm it isn't blocking anything real. A stray `Disallow: /` on a staging config that ships to production will de-index the entire site.

### 8.2 `sitemap.xml`

```ts
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yourdomain.com";
  return [
    { url: base,                 lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${base}/electrical`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // …every indexable page
  ];
}
```

- Canonical URLs only. Same host, same protocol as everywhere else.
- **No redirected or retired URLs.**
- `priority` is a weak hint; don't agonise over it. Relative ordering is all it conveys.
- **Add the page to the sitemap in the same commit that creates the page.** This site silently shipped six pages that were missing from it.

### 8.3 What to exclude from indexing

```ts
// A page you don't want in search results
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};
```

Typical candidates: thank-you pages, internal search results, filtered/paginated duplicates, staging routes.

---

## 9. Performance — Core Web Vitals

Google uses these as a ranking signal. All three are mostly won or lost on images and fonts.

| Metric | Measures | Target | Usual culprit |
|---|---|---|---|
| **LCP** | Largest Contentful Paint | < 2.5s | Unoptimised hero image |
| **CLS** | Cumulative Layout Shift | < 0.1 | Images without width/height; late-loading fonts |
| **INP** | Interaction to Next Paint | < 200ms | Heavy JS on the main thread |

**The practical fixes:**
- `next/image` everywhere, `priority` on the LCP image only
- Always reserve image dimensions
- `font-display: swap` and preconnect to the font host
- Defer third-party scripts (`strategy="afterInteractive"` in Next.js) — chat widgets, analytics, and pixels are the usual INP killers
- Check the real numbers in **PageSpeed Insights**, and the field data in **Search Console → Core Web Vitals**

---

## 10. Mobile

Google indexes **mobile-first** — the mobile rendering of your page *is* what gets ranked, not the desktop one.

- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Tap targets ≥ 44×44px with spacing between them
- Body text ≥ 16px
- No horizontal scroll — wide tables and code get `overflow-x: auto` on their own container
- **Phone numbers as real `tel:` links** — this is a conversion feature as much as an SEO one:

```html
<a href="tel:4034003055">Call (403) 400-3055</a>
```

- Same content on mobile as desktop. Content hidden on mobile is content Google may not count.

---

## 11. What connects to Google Search Console

The on-site pieces that feed directly into a GSC report:

| On the site | Shows up in GSC as | If it's wrong |
|---|---|---|
| `sitemap.xml` | Sitemaps report | Pages never get discovered |
| `robots.txt` | Blocked-by-robots errors | Silently de-indexed |
| Canonical tags | "Duplicate, Google chose a different canonical" | Rankings split across URLs |
| Verification (DNS/meta) | Property ownership | You can't see any data at all |
| JSON-LD schema | Enhancements → rich result reports | No rich results, no warning |
| Core Web Vitals | Core Web Vitals report (field data) | Ranking drag |
| 404s and redirects | Indexing → Pages → crawl errors | Lost authority from dead links |
| `hreflang` (multilingual) | International Targeting | Wrong-language page ranks |
| Mobile rendering | Mobile Usability | Suppressed on mobile results |

**Setup order for a new site:**
1. Verify by **DNS TXT** → gives you a **Domain property** covering http/https/www/non-www in one
2. Submit `sitemap.xml`
3. URL-inspect the homepage and a couple of key pages → **Request Indexing**
4. Wait. Days to two weeks for meaningful data.

---

## 12. What connects to the Google Business Profile

The website and the Business Profile have to tell the same story, or Google distrusts both.

### 12.1 The hard rule — NAP

**The business name on the site must match the Business Profile character for character.** Not "close enough."

```
"YAYA General Contractor Incorporated"   ≠   "YAYA General Contractor Inc."
"YAYA General Contractor Incorporated"   ≠   "YAYA Electrical, Plumbing and Appliance"
```

> This profile was **suspended once** over a name mismatch, and later had an edit rejected citing "business identity changed."

Everywhere the name appears on the site:
- Title tags and the title template
- Meta descriptions, `og:title`, `og:site_name`
- `author` / `creator` / `publisher`
- JSON-LD `name`
- Footer brand block and copyright line
- Logo `alt` text
- **The tagline under the logo** — easy to miss, reads as a second business name
- Body copy

```bash
grep -rn "Old Business Name" src --include="*.tsx" --include="*.ts"
```

Phone number identical everywhere too, including inside `tel:` links.

### 12.2 Schema should mirror the profile

Keep these in sync — when one changes, change the other in the same sitting:

| Schema field | Business Profile field |
|---|---|
| `name` | Business name |
| `telephone` | Phone |
| `address` / `geo` | Address / pin location |
| `areaServed` | Service areas |
| `openingHoursSpecification` | Hours |
| `sameAs` | Linked profiles |
| `@type` subtype | Primary + secondary categories |
| `aggregateRating` | Review count and average |

**The rating one drifts constantly.** Every new review changes the real count while the hardcoded schema stays stale. Set a reminder to update it, or pull it dynamically.

### 12.3 Practical wiring

- **The Business Profile's website link** should point at the homepage (or the most relevant service page for a service-specific listing).
- **Tag that link with UTM parameters** so you can actually measure how much traffic the profile sends:
  ```
  https://yourdomain.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp
  ```
- **Reuse the same real job photos** on the site and the profile — consistency reinforces the entity.
- **Reviews:** the profile is the source of truth. Display them on the site with `Review` schema, kept **verbatim** — typos included. Editing quoted reviews is bad practice and undermines credibility.
- **A Google Maps embed** on the contact page is a small trust/UX signal. Optional, and it costs some page weight.

---

## 13. Things people still do that don't work

Save yourself the time:

- **Meta keywords tag** — ignored since 2009
- **Keyword density percentages** — not a thing; write naturally
- **Exact-match domains** (`calgaryelectrician.com`) — devalued years ago
- **Submitting to hundreds of directories** — low-quality citation spam, can hurt
- **Article spinning / AI-mass-generated pages** — thin content, actively penalised
- **Hidden keyword-stuffed text** — penalty (hidden *NAP* is fine, see §2.3)
- **Buying backlinks** — manual action risk
- **Doorway pages per town** — explicit violation
- **`rel="prev"/"next"` for pagination** — Google stopped using it in 2019

---

## 14. Per-page checklist

Every time you add a page:

```
HEAD
  [ ] Unique <title>, under 60 chars, keyword first
  [ ] Unique meta description, under 155 chars
  [ ] Self-referential canonical, correct host
  [ ] og:title / og:description / og:url
  [ ] Page added to sitemap.ts  ← same commit

STRUCTURE
  [ ] Exactly one <h1>, matching the target term
  [ ] Heading levels don't skip
  [ ] Semantic elements, not div soup
  [ ] URL lowercase, hyphenated, nested correctly

CONTENT
  [ ] 800–1200 words of genuine content
  [ ] Target term in title, H1, first 100 words, one H2
  [ ] FAQ block, 4–6 real questions
  [ ] No stuffing, no pricing superlatives, no unverified claims
  [ ] Tappable tel: CTA, top and bottom

IMAGES
  [ ] Descriptive kebab-case filenames
  [ ] Alt text on every image (location + service + specific work)
  [ ] Dimensions set — no layout shift
  [ ] priority on the LCP image only
  [ ] Every referenced file actually exists

LINKS
  [ ] Links up to its hub
  [ ] Hub links down to it
  [ ] Cross-links to related pages
  [ ] Not an orphan
  [ ] Clicked every link and watched the URL change

SCHEMA
  [ ] Service schema with the correct provider type
  [ ] FAQPage schema if it has FAQs
  [ ] Validated in Rich Results Test

NAP
  [ ] Business name exactly matches the Business Profile
  [ ] Phone identical to everywhere else

SHIP
  [ ] build / lint / typecheck clean
  [ ] Verified on the LIVE url after deploy
```

---

## 15. Audit commands

```bash
# Every H1 — should be exactly one per page
grep -rn "<h1" src/app src/components --include="*.tsx"

# Images missing alt
grep -rn "<Image" -A4 src --include="*.tsx" | grep -L "alt="

# Referenced images that don't exist
grep -rohE '"/images/[^"]+\.(jpg|png|webp)"' src --include="*.tsx" \
  | tr -d '"' | sort -u \
  | while read i; do [ -f "public$i" ] || echo "MISSING: $i"; done

# Wrong/old business name anywhere
grep -rn "Old Business Name" src --include="*.tsx" --include="*.ts"

# Domain inconsistency
grep -rn "www\.yourdomain\.com" src --include="*.tsx" --include="*.ts"

# Every internal link target
grep -rohE 'href="/[a-z0-9/-]*"' src --include="*.tsx" | sort -u

# Pages missing a canonical
for f in $(find src/app -name "page.tsx"); do
  grep -q "canonical" "$f" || echo "NO CANONICAL: $f"
done

# Title / description lengths for one page
node -e "
const c=require('fs').readFileSync('src/app/PAGE/page.tsx','utf8');
const t=c.match(/title: \"([^\"]+)\"/), d=c.match(/description: \"([^\"]+)\"/);
if(t)console.log('title', t[1].length, t[1]);
if(d)console.log('desc ', d[1].length, d[1]);
"

# Verify a redirect fires
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" http://localhost:3000/old-url
```

---

## Known gaps on this site

Honest list of what's still missing, as of this writing:

- **No `BreadcrumbList` schema** — visual breadcrumbs exist on detail pages, but the schema isn't emitted. Easy win (§6.3).
- **No dedicated `og:image` per page** — everything falls back to the square logo, which crops awkwardly on large-card previews. A 1200×630 image per hub page would improve share appearance.
- **`aggregateRating` is hardcoded** at 5.0 / 9 reviews — will drift as new reviews come in.
- **`Organization` and `WebSite` schema not present** — lower priority than what's already there, but both are cheap to add.
- **Some hub-page card backgrounds still use Unsplash URLs** rather than real job photos.
