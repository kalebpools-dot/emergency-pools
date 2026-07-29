# SEO Technical Audit, Keyword Targets & Photo Plan — emergencypools.com

Written 2026-07-29. Covers three things you asked for: (1) a full on-page SEO
audit of all 69 pages, (2) keyword targets worth pursuing, (3) how to get
real, unique photos onto the site — including the honest answer on geotagging.

---

## 1. On-page SEO audit — what I found and fixed

I built the site and programmatically checked every one of the 69 pages for
title length, meta description length, H1 presence/uniqueness, and canonical
tags. Before this pass:

- Every one of the 9 service hub pages had a title 77–91 characters long
  (Google typically truncates around 60). Cause: the title template stacked
  the full service name + all three launch cities + the brand name.
- 42 of the 51 city+service pages had meta descriptions 165–189 characters
  long (target is ~155–160) — the template was carrying more boilerplate
  than a search snippet has room for.
- 3 guide articles and the homepage were slightly over on description length.
- No page had Open Graph or Twitter Card tags — meaning any link shared to
  Facebook, Twitter/X, or iMessage would show no preview image or blank text.
- No structured data beyond the basic LocalBusiness schema — despite having
  genuine FAQ content on every service and city page, none of it was marked
  up as `FAQPage`, which is what makes those accordion-style rich results
  show up directly in Google search.

All fixed as of this session:

- Shortened title templates sitewide. City+service titles now read like
  `Pool pump repair in Georgetown, TX | Emergency Pools` and drop the brand
  suffix automatically on the few combinations still too long (e.g. "Pool
  automation & plumbing repair in Harker Heights, TX"). Hub titles are now
  `{Service} | Emergency Pools`.
- Shortened meta description templates to fit within ~155–160 characters
  everywhere, phone number always included.
- Added Open Graph and Twitter Card meta tags to every page (title,
  description, url, and an image — currently defaulting to the favicon,
  see the photo section below for the real fix).
- Added `FAQPage` structured data to all 51 service hub + city pages,
  generated from the exact same FAQ data already rendered on the page (so
  there's no risk of the schema saying something different from what a
  visitor actually sees, which Google penalizes).
- Confirmed: zero duplicate titles, zero duplicate descriptions, zero
  duplicate H1s, canonical tag present on every page, `robots.txt` correctly
  points at the sitemap.

**Not done yet, flagged honestly:** the 13 guide articles and the weekly
cleaning page have FAQ content hand-written with some inline links mixed
into the answer text. Adding `FAQPage` schema there safely means restructuring
those 14 files so the visible text and the schema text can't drift apart —
I didn't want to rush that across 14 already-published pages in the same
pass as everything else. Worth a follow-up if you want the full FAQ rich
result treatment sitewide.

---

## 2. Keyword targets

Straight answer on data: I don't have access to Google Keyword Planner or a
paid tool like Ahrefs/SEMrush, so I can't hand you exact search volumes.
Once Search Console is verified (waiting on the emergencypools.com DNS
switch) you'll get real query and impression data within a few weeks — that
should drive what gets built next far better than any tool I can guess
with now. What I can do is map out the *structure* of what to target, which
is what actually matters before volume does.

### The three keyword layers, and how the site already maps to them

**Layer 1 — transactional, service + city.** These are the highest-intent
searches: someone has a broken pump right now and types "pool pump repair
Georgetown TX." Every one of the 51 city+service pages targets exactly one
of these. Full matrix, 7 services × 6 cities:

pool pump repair, green pool cleanup, pool leak repair, pool filter repair,
pool automation & plumbing, UV & ozone sanitizer repair, pool heat pump
repair — each × Georgetown, Round Rock, Cedar Park, Killeen, Harker
Heights, Temple.

Plus the 2 non-city hub services (gas heater repair, equipment replacement)
and the weekly cleaning funnel page.

**Layer 2 — implicit local ("near me").** Google infers local intent from
context (map pack triggers, device location) rather than needing the literal
words "near me" on the page — so you don't need to stuff that phrase in.
What actually helps this layer: a verified Google Business Profile (still
not set up — this is the single highest-leverage thing left undone, see
below), consistent NAP (name/address/phone) across the web, and reviews.
None of that is a content problem the website can solve alone.

**Layer 3 — informational, problem-aware.** Someone hasn't decided to call
yet — they're searching "why is my pool green" or "pool pump humming won't
start." This is what the 13 `/guides/` articles already target. This layer
is usually the largest by volume and the cheapest to rank for, since fewer
competitors bother writing real answers instead of thin service pages.

### Gaps worth closing next, ranked by likely payoff

1. **Google Business Profile.** Not a website task, but it outranks
   everything else on this list for local visibility. The map pack sits
   above organic results for almost every "near me" and city+service query.
   I can't create the account for you, but I can walk you through it once
   you're ready — it's about 10 minutes.
2. **"Pool service" / "pool company" generic terms.** Right now the site is
   built entirely around named problems (pump, leak, cleaning). Broader
   searches like "pool company Georgetown TX" or "pool service near me"
   without a specific problem attached aren't explicitly targeted anywhere.
   The homepage partially covers this but could do more.
3. **Salt cell / salt system repair.** A common failure point we haven't
   covered at all — "salt cell not producing chlorine" or "salt system
   error" is a real, frequent search for anyone running a saltwater pool,
   and it's adjacent to both automation and UV/ozone content you already have.
4. **Seasonal openings/closings.** "Pool opening service Georgetown" and
   "winterizing a pool in Texas" are seasonal but real search terms with
   almost no competition from an emergency-repair-focused site like this one.
5. **Comparison/decision queries.** "Pool pump repair cost vs replacement,"
   "should I repair or replace my pool heater" — you already have the
   repair-or-replace guide for pumps; the same pattern could extend to
   heaters and filters.

I'd hold off building more pages for #2–5 until Search Console gives you
real query data — building on a guess is how you end up with pages nobody
searches for. The GBP setup (#1) is worth doing regardless of any data,
since it has no content cost and the highest ceiling.

---

## 3. Getting real, unique photos onto the site

### Why this matters for SEO specifically, not just looks

Right now the site has **zero images** beyond the favicon — I checked. That
cuts you off from: image search traffic entirely, the `og:image` that makes
links look real when shared or texted (currently falling back to a tiny
favicon), and a trust signal that matters more than most SEO factors for a
service business — stock photography reads as generic, and real photos of
real work read as credible.

### What to shoot (priority order)

1. **Before/after pairs.** Green pool → clear pool, corroded pump → new
   install, cracked filter → replaced. These are the single highest-value
   photos for a repair business and the easiest to get organically during
   normal jobs.
2. **Technician actually working.** Hands on equipment, mid-repair, not
   posed — these read as authentic and work well as hero images on the
   pump/leak/filter/automation pages.
3. **Trucks and equipment pad shots.** Establishes local presence and gives
   you something branded to use across every page without needing a new
   photo per page.
4. **Completed equipment installs.** A clean, correctly-installed Hayward,
   Pentair, or Jandy pump/filter/automation panel — good for the equipment
   replacement and automation pages specifically, and doubles as proof of
   the factory-authorized-dealer claim.
5. **Team/owner photo.** For an eventual About page and for Google Business
   Profile — profiles with a real human face convert better and this is
   also the one category where a scheduled photoshoot (rather than
   job-site candids) makes sense.

You don't need a professional shoot for most of this — phone photos taken
during real jobs, shot in landscape, reasonably well-lit, are exactly what
this brand's plainspoken-and-honest voice calls for. A few minutes per job
adds up fast.

### Technical setup once you have photos

This is the part I'll handle once you have images — send them to me (or
drop them in the connected folder) and I'll:

- Resize and compress to WebP for fast loading (large uncompressed phone
  photos would hurt page speed, which is itself a ranking factor)
- Write descriptive alt text that's genuinely descriptive, not keyword-
  stuffed (e.g. `alt="Technician replacing a Pentair variable-speed pump
  motor in Round Rock, TX"` — accurate, specific, still naturally keyword-
  relevant)
- Name files descriptively (`pool-pump-repair-round-rock-before-after.webp`,
  not `IMG_4821.webp`) — file names are a minor but real signal
- Set a real `og:image` per page instead of the current favicon fallback
- Add `ImageObject` structured data where it's a genuine before/after or
  completed job, which is eligible for Google's project/work-gallery
  treatment in some verticals
- Place them: hero image on the homepage and each service hub page,
  before/after pairs on the relevant guide articles, truck/team photo in
  the footer or an About section if we build one

### Your geotagging question, answered honestly

I looked into this rather than guess. Short version: **it matters for your
Google Business Profile, not for your website.**

Website images: Google has been consistent for years that it doesn't use
EXIF/GPS data from photos on a webpage as a ranking signal, and most image
hosting and optimization tools strip that metadata on upload anyway — so
it's not something to spend time on for the site itself.

Google Business Profile: there's actual, if mixed, evidence here. A
10-week study by a marketing agency (27 lawn-care businesses, published on
Search Engine Land in 2025) geotagged some GBP photo uploads and tracked
ranking across seven metrics. The one clear result: "[service] near me"
rankings improved, with statistical significance, specifically in the towns
whose coordinates were embedded in the photos. But four of the other six
metrics got *worse*, including "[service] + city name" rankings in those
same towns and overall service-area rank in towns that weren't geotagged.
The agency's own conclusion was that it's a trade-off, not a clean win, and
they decided not to keep doing it for clients going forward.

My honest read: it's not a must-do, and I wouldn't build a workflow around
manually geotagging every photo. What actually matters more for local
"within our service area" signal is the thing you don't have yet — a
verified Google Business Profile with your real address and service area
set correctly, consistent NAP across directories, and photos uploaded
there regularly. That structured data does the job geotagging is trying to
approximate, more reliably.

Sources: [How geotagging photos affects Google Business Profile rank: Study](https://searchengineland.com/geotagging-photos-google-business-profile-rank-453525) · [How to Rank Higher on Google Maps in 2026](https://almcorp.com/blog/google-maps-seo/) · [How to Do Keyword Research for Local SEO in 2026](https://www.straightnorth.com/blog/how-to-do-keyword-research-for-local-seo/)
