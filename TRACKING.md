# Tracking & remarketing setup

Goal: know what visitors do on the site (where they drop off) and be able to
show them ads later on Google and Meta (Facebook/Instagram) if they don't call.

The site runs on **Google Tag Manager (GTM)** — one container that holds
everything else (Google Analytics, Google Ads remarketing, Meta Pixel,
Microsoft Clarity). Once a tag is added inside GTM, you can change it from
a web dashboard — no code edits or deploys needed.

## Done already (as of 2026-07-28)

- **GTM container created and live.** Account "Emergency Pools", container
  `GTM-WHKQGLPH`, wired into `src/data/site.js` and published (Version 2).
- **GA4 property created.** Property "emergencypools.com", Measurement ID
  `G-PP6799FKBT`, industry Home & Garden, objectives set to "Generate leads"
  and "Understand web traffic". Time zone set to Central (Chicago).
- **GA4 is tracking pageviews site-wide** via the Google Tag in GTM,
  firing on Initialization/All Pages.
- **Phone clicks are tracked as a `phone_click` event.** Trigger fires on
  any link where Click URL contains `tel:` — covers the header number,
  footer, sticky call bar, and the dispatch box on every service page,
  since they all already use `tel:` links. No code changes were needed.
- GA4 data can take up to 48 hours to fully populate in reports after first
  publish — this is normal, not a sign anything is broken.

To check it's working: open GA4 → Reports → Realtime, browse the live site
in another tab, and confirm your own visit and a phone-number click show up.

## Still to do

## Step 4 — Google Ads remarketing

1. Create a Google Ads account at [ads.google.com](https://ads.google.com)
   if you don't have one.
2. Link it to GA4: in GA4, **Admin → Product Links → Google Ads Links** →
   link the account. This automatically shares site-visitor audiences with
   Google Ads — no separate remarketing tag needed.
3. In Google Ads: **Tools → Audience Manager**, confirm a "All users" /
   website-visitor audience is populating (takes a day or so of traffic).
4. Optionally mark `phone_click` as a **Conversion** in GA4 (Admin → Events →
   toggle "Mark as conversion") and import it into Google Ads (Goals →
   Conversions → Import from Google Analytics). Then Google Ads can optimize
   campaigns toward actual phone clicks, not just visits.
5. Build a remarketing campaign in Google Ads targeting the "all visitors"
   (or "visited but didn't click call") audience.

## Step 5 — Meta Pixel (Facebook/Instagram remarketing)

1. Create/open Meta Business Suite at
   [business.facebook.com](https://business.facebook.com) → **Events
   Manager → Connect data sources → Web → Meta Pixel** → create one, name it
   "Emergency Pools." You'll get a Pixel ID (numeric).
2. In GTM: New Tag → search the template gallery for **Facebook Pixel**
   (community template) or add it as a **Custom HTML** tag with Meta's
   standard base-code snippet, pasting your Pixel ID → Trigger: **All
   Pages**.
3. Add a second Pixel tag firing the **Contact** standard event on the
   existing "Click - Phone Number Links" trigger already in GTM — that tells
   Meta which visitors actually tried to call, which sharpens its
   lookalike/remarketing targeting.
4. In Meta Ads Manager, build a Custom Audience of website visitors from the
   pixel, then a remarketing campaign against it.

## Step 6 — See *where* people hang up (heatmaps + recordings)

GA4 tells you which pages lose people; it won't show *why*. For that, add
**Microsoft Clarity** — free, no traffic cap, gives heatmaps and actual
session recordings.

1. Create a free account at [clarity.microsoft.com](https://clarity.microsoft.com)
   → add project "Emergency Pools" → copy the tracking code/Project ID.
2. In GTM: search the template gallery for **Microsoft Clarity**, or add it
   as a Custom HTML tag with Clarity's snippet → Trigger: **All Pages**.
3. After a few days of traffic, Clarity's recordings + rage-click/dead-click
   heatmaps will show exactly where visitors hesitate or bail — e.g., scroll
   past the call button, get stuck on a service page, or exit at a specific
   FAQ.

## Step 7 — Test, then publish

Each time you add a new tag (Meta Pixel, Clarity), the same pattern applies:
in GTM click **Preview**, browse the real site in the preview window, confirm
the new tag fires, then **Submit → Publish**. Nothing goes live until you
publish — GA4 and phone-click tracking are already published and running;
future additions follow this same test-then-publish rhythm.

## One compliance note

Both Google Ads and Meta require a visible privacy policy that discloses
use of cookies/tracking pixels once you're running remarketing. The site
doesn't have one yet — worth adding a simple `/privacy/` page before
Step 4/5 go live. Say the word and I'll draft one.

## Order of operations if you want the short version

~~GTM container → GA4 → phone-click event~~ (done) → link Google Ads to GA4
→ Meta Pixel + Contact event → Microsoft Clarity → privacy policy page →
preview and publish each new addition in GTM.
