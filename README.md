# Emergency Pools — emergencypools.com

16-page static site built with Astro. Every page is pre-rendered HTML — fully indexable by Google, no JavaScript rendering required.

## Launch (three steps, no coding)

1. **Push to GitHub.** Create a new repo at github.com (private is fine), then upload this folder — either drag-and-drop the files on the repo page, or use GitHub Desktop.
2. **Connect Vercel.** In Vercel: Add New → Project → import the repo. Vercel auto-detects Astro. Click Deploy. Done — same flow as the inventory app.
3. **Point the domain.** In Vercel: Project → Settings → Domains → add `emergencypools.com`. Vercel shows the exact DNS records to set at your registrar.

Then in Google Search Console: add the property, verify via DNS, and submit `https://emergencypools.com/sitemap-index.xml`.

## Before launch — confirm these

Open `src/data/site.js` and check:
- `hoursLine` — currently "Mon–Fri 8am–6pm · weekends on-call" (the 8–6 is a placeholder)
- `backing` — confirm the "PF Pool Care family / authorized dealer" phrasing is how you want the two brands connected publicly

## Adding a city (phase two)

Open `src/data/cities.js`, copy an existing city block, change the slug/name, and write the three unique copy blocks (intro, local detail, one FAQ) for each service. Push. Three new pages appear automatically with correct URLs, titles, schema, and internal links.

## Adding city pages for heater/equipment

In `src/data/services.js`, flip `hasCityPages: false` to `true` on the service, then add that service's copy blocks to each city in `cities.js`.

## Structure

- `src/data/site.js` — phone, hours, promise, fee (change once, changes everywhere)
- `src/data/services.js` — the 5 services, their diagnostic steps and FAQs
- `src/data/cities.js` — per-city unique copy (this is the SEO moat)
- `src/pages/` — page templates (you should never need to touch these)
