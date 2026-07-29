# SEO Plan — emergencypools.com

> **Status update (2026-07-28):** The `/guides/` section and all 13 articles
> below have been written and are live on the temporary preview at
> https://emergency-pools-preview-2.vercel.app/guides/ — pushed to the
> `kalebpools-dot/emergency-pools` GitHub repo, not yet on the production
> domain (see the deploy-access gap noted elsewhere in this conversation).
> Sections 3–5 (article list and prompts) are kept below for reference and
> in case you want to regenerate or expand any article later.

Focus: **pool cleaning service** and **pool pump repair**, in that order.
Goal of this doc: (1) what to fix/build next for SEO, (2) the article list,
(3) copy-paste prompts so a lower-level AI can write the articles without
inventing facts about the business.

---

## 1. Where we stand (as of 2026-07-28)

Working in our favor already:

- 26 pre-rendered static pages, fast, mobile-friendly, no JS required to read.
- Unique per-city copy (Georgetown, Round Rock, Cedar Park, Killeen, Harker
  Heights, Temple) — not doorway-page boilerplate, which is what Google's
  post-2025 updates punish.
- LocalBusiness schema on every page, canonical URLs, sitemap auto-generated.
- GA4 + phone-click tracking live, so we can measure which content produces calls.

Gaps that matter, in priority order:

1. **DNS not pointed yet.** Until emergencypools.com resolves, Google is
   indexing nothing. Everything below assumes this happens first.
2. **No "pool cleaning service" page exists.** The site has *emergency green
   pool cleanup* — a rescue service. Nobody searching "pool cleaning service
   Georgetown" (recurring weekly cleaning, the bigger search volume) has a page
   to land on. This is the single biggest content gap given your stated focus.
3. **No Google Business Profile.** For "pool cleaning near me" searches, the
   map pack appears above all organic results. A GBP with the Georgetown
   service area is worth more than any article — it's the highest-leverage
   single action on this list.
4. **No Google Search Console.** Free, ~10 minutes: verify the domain, submit
   `https://emergencypools.com/sitemap-index.xml`, and get data on what
   queries actually bring people in (which should steer future articles).
5. **No blog/articles section.** The Astro site needs a `/guides/` section
   before the articles below have anywhere to live. I can scaffold this in
   about 15 minutes when the first batch of articles is ready.
6. **New-city pages aren't on the production site yet** (Killeen / Harker
   Heights / Temple are only on the preview). Also: those three cities aren't
   referenced from the homepage or county page, so once live they'll be
   weakly linked internally.

## 2. Order of operations

1. Point DNS at Namecheap (already queued — everything waits on this)
2. Create Google Business Profile → Georgetown-based service area business
3. Verify Google Search Console → submit sitemap
4. Add a **Pool cleaning service** page (money page, not a blog post) + city
   variants — this mirrors the existing service/city template
5. Scaffold `/guides/` section in Astro
6. Publish articles in the priority order below, 1–2 per week (steady beats
   burst — a 12-article dump on a brand-new domain looks synthetic)
7. Watch Search Console after ~4 weeks; write follow-ups where impressions
   are high but clicks are low

## 3. Article list (priority order)

Cluster A — pool cleaning (primary focus):

| # | Working title | Target query |
|---|---------------|--------------|
| 1 | How much does pool cleaning cost in Central Texas? (2026 pricing guide) | pool cleaning cost georgetown tx |
| 2 | How often should your pool be cleaned in a Texas summer? | how often pool cleaning texas |
| 3 | Why is my pool green even though the pump runs? | pool green pump running |
| 4 | Why shocking your pool didn't work (the CYA problem) | pool shock not working |
| 5 | Black algae in Texas pools: why it comes back and what actually kills it | black algae pool texas |
| 6 | Cloudy pool water: the 5 causes and the order to check them | cloudy pool water fix |
| 7 | Opening a neglected pool: what a green-to-clean recovery really involves | green pool recovery cost |

Cluster B — pump repair (secondary focus):

| # | Working title | Target query |
|---|---------------|--------------|
| 8 | Pool pump humming but not starting: what it means and what it costs | pool pump humming not starting |
| 9 | Pool pump tripping the breaker: diagnosis order | pool pump tripping breaker |
| 10 | Variable-speed vs single-speed pool pumps in Texas: real payback math | variable speed pool pump worth it texas |
| 11 | Why variable-speed pumps shut themselves off (and why that's good) | variable speed pump keeps stopping |
| 12 | How long should a pool pump run per day in Central Texas? | pool pump run time texas |
| 13 | Pool pump repair vs replacement: the 5–6 year rule | pool pump repair or replace |

Each article's job is NOT to rank for "pool cleaning georgetown" — the service
pages do that. Articles catch the earlier, problem-aware searches and funnel
readers to the service pages and the phone number.

## 4. Master prompt (paste once as the system/first message)

```
You are a content writer for Emergency Pools (emergencypools.com), an
urgent-response pool repair and cleaning company in Central Texas.

BUSINESS FACTS — use only these, never invent others:
- Name: Emergency Pools
- Phone: (512) 764-9867 (link as tel:+15127649867)
- Service area: Georgetown, Round Rock, and Cedar Park TX (primary);
  Killeen, Harker Heights, and Temple TX (Bell County expansion);
  Leander, Hutto, Pflugerville, Taylor, Liberty Hill (on availability)
- Response promise: technician within 24 hours — often same-day
- Pricing policy: a standard service call fee covers the trip and full
  diagnosis; the fee is credited toward the repair if the customer hires us.
  DO NOT state specific dollar amounts for our services — we don't publish
  prices. Industry-average price ranges for context are fine if clearly
  labeled as industry averages.
- Backing: backed by the PF Pool Care family — factory-authorized dealer
  for Hayward, Pentair, and Jandy
- Hours: Mon–Fri 8am–6pm, weekends on-call

VOICE:
- Plainspoken expert. Short sentences. No hype, no exclamation marks.
- Honest to a fault: if the cheap fix is likely, say so. The brand promise
  is "the truth gets to you fast."
- Central Texas specifics beat generic advice: limestone-hard water, high
  CYA from trichlor tabs, brutal summer evaporation, oak pollen in spring,
  black algae from lake gear (Lake Georgetown, Belton, Stillhouse Hollow).

STRUCTURE for every article:
- H1 = the title
- Opening paragraph answers the search query directly in 2–3 sentences
  (this is what wins the featured snippet), THEN expands
- H2 sections, one idea each; use a numbered list for any diagnosis order
- One "When to call a pro" H2 near the end — honest about what's DIY-safe
  (testing water, cleaning a skimmer basket) vs not (electrical, anything
  under pressure, drain/acid work)
- End with a short FAQ: 3 questions, formatted as H3 question + paragraph
  answer (this feeds FAQ rich results)
- 900–1,400 words. Do not pad.
- Include exactly one call-to-action mid-article and one at the end,
  mentioning the phone number and the 24-hour response promise
- Suggest 2–3 internal links inline where natural, using ONLY these paths:
  /pool-pump-repair/  /green-pool-cleanup/  /pool-leak-repair/
  /pool-heater-repair/  /pool-equipment-replacement/
  (+ city versions like /pool-pump-repair/georgetown/)

DELIVERABLE per article, in this order:
1. Meta title (≤60 chars, includes target query naturally)
2. Meta description (≤155 chars, includes phone number)
3. URL slug (lowercase, hyphens)
4. The article in Markdown

RULES:
- Never fabricate statistics, studies, or customer stories
- Never quote specific prices for Emergency Pools services
- Never promise same-day service unconditionally — it's "often same-day"
- Never disparage named competitors
- No em-dash abuse, no "In conclusion", no "It's important to note"
```

## 5. Per-article prompts (paste one at a time after the master prompt)

**Article 1**
```
Write the article: "How much does pool cleaning cost in Central Texas? (2026 pricing guide)"
Target query: pool cleaning cost georgetown tx
Angle: People search cost before they search a company name. Give honest
industry-average ranges for weekly cleaning, one-time cleanups, and
green-pool recovery (clearly labeled as industry averages, not our prices).
Explain what makes the price move: pool size, condition, CYA level, whether
equipment works. Explain our credited service-call-fee model as the
alternative to guessing from a price table.
Internal links: /green-pool-cleanup/ and /pool-pump-repair/
```

**Article 2**
```
Write the article: "How often should your pool be cleaned in a Texas summer?"
Target query: how often should pool be cleaned texas
Angle: Generic advice says weekly; explain why Central Texas heat, evaporation,
and debris load compress that. Cover what "cleaning" actually includes
(chemistry, brushing, baskets, filter pressure) and the failure pattern we
see: one skipped week in July becomes a green pool. Seasonal calendar:
spring pollen, summer heat, fall leaves.
Internal links: /green-pool-cleanup/
```

**Article 3**
```
Write the article: "Why is my pool green even though the pump runs?"
Target query: pool green but pump is running
Angle: Circulation isn't sanitation. Walk the real causes in check order:
chlorine demand outpacing supply, high CYA locking chlorine, dead spots from
clogged filter or low run time, phosphate load. Bust the myth that a running
pump means the pool is "working."
Internal links: /green-pool-cleanup/ and /pool-pump-repair/
```

**Article 4**
```
Write the article: "Why shocking your pool didn't work (the CYA problem)"
Target query: shocked pool still green / pool shock not working
Angle: Our highest-conviction topic. Years of trichlor tabs push CYA so high
chlorine is chemically handcuffed — more shock just wastes money. Explain
CYA in plain English (sunscreen that eventually blocks the medicine), the
chlorine-to-CYA ratio concept, why the honest fix is often a partial drain.
This article should feel like the reader finally got the answer nobody else
would give them.
Internal links: /green-pool-cleanup/
```

**Article 5**
```
Write the article: "Black algae in Texas pools: why it comes back and what actually kills it"
Target query: black algae in pool won't go away
Angle: It roots into plaster; normal shock can't reach it. The Central Texas
vector: swimsuits and floats from area lakes (Lake Georgetown, Belton,
Stillhouse Hollow). Why brushing technique matters more than chemical
quantity, and why early treatment is a small job while late treatment isn't.
Internal links: /green-pool-cleanup/
```

**Article 6**
```
Write the article: "Cloudy pool water: the 5 causes and the order to check them"
Target query: cloudy pool water causes
Angle: A diagnosis-order article: (1) filter condition/run time, (2) chemistry
imbalance, (3) early algae, (4) high calcium from our limestone water,
(5) fine debris after storms. Give the reader a decision path, not a list of
20 maybes.
Internal links: /green-pool-cleanup/ and /pool-equipment-replacement/
```

**Article 7**
```
Write the article: "Opening a neglected pool: what a green-to-clean recovery really involves"
Target query: how to clean a neglected green pool
Angle: For new homeowners and landlords who inherited a swamp. Set honest
expectations: test first (CYA decides everything), 3–7 day typical timeline,
why "drain it and start over" is sometimes right and sometimes dangerous
(hydrostatic pressure). Mention we serve new-build areas and PCS-heavy
markets like Killeen where inherited pools are common.
Internal links: /green-pool-cleanup/ and /green-pool-cleanup/killeen/
```

**Article 8**
```
Write the article: "Pool pump humming but not starting: what it means and what it costs"
Target query: pool pump humming not turning on
Angle: The hum-with-free-shaft = start capacitor story — one of the cheapest
repairs in pool service, and most people fear the worst. Explain the
shaft-spin test conceptually (and the safety line: power off at the breaker
first; if you're not comfortable, don't). Seized shaft = bearings/seal, and
that's the honest repair-vs-replace fork.
Internal links: /pool-pump-repair/ and /pool-equipment-replacement/
```

**Article 9**
```
Write the article: "Pool pump tripping the breaker: diagnosis order"
Target query: pool pump keeps tripping breaker
Angle: Check order: overloaded circuit / weak breaker, moisture in
connections, failing motor drawing high amps, short in wiring. Be very clear
this is the article where "when to call a pro" comes early — 240V and water
don't mix. Position the diagnostic visit as the safe path.
Internal links: /pool-pump-repair/
```

**Article 10**
```
Write the article: "Variable-speed vs single-speed pool pumps in Texas: real payback math"
Target query: variable speed pool pump worth it
Angle: Long Texas run seasons make the energy math better here than the
national average. Walk through the payback logic with clearly-labeled
example numbers (kWh assumptions stated, not invented savings claims).
Federal efficiency rules already pushed the market this way — frame it as
"when your single-speed dies, this is the decision you'll face."
Internal links: /pool-pump-repair/ and /pool-equipment-replacement/
```

**Article 11**
```
Write the article: "Why variable-speed pumps shut themselves off (and why that's good)"
Target query: variable speed pool pump keeps shutting off
Angle: The pump is protecting itself — usually from a suction-side air leak,
prime loss, or a packed basket. Replacing the pump doesn't fix the cause.
Walk the checks in order: water level, skimmer/pump baskets, lid o-ring,
fault codes. This article converts well because the reader is mid-panic
about a pump they think just died.
Internal links: /pool-pump-repair/ and /pool-leak-repair/
```

**Article 12**
```
Write the article: "How long should a pool pump run per day in Central Texas?"
Target query: how long to run pool pump texas
Angle: The one-turnover-per-day principle, adjusted for Texas: longer in
summer, why 6 hours is usually too little here in July, how variable-speed
changes the answer (run longer at low speed for less money). Include the
spring-pollen caveat from oak-heavy areas like Cedar Park.
Internal links: /pool-pump-repair/ and /pool-pump-repair/cedar-park/
```

**Article 13**
```
Write the article: "Pool pump repair vs replacement: the 5–6 year rule"
Target query: repair or replace pool pump
Angle: Our stated rule: sound wet end + motor under 5–6 years = repair makes
sense; older single-speed = usually worth upgrading. Explain why warranty
eligibility through authorized channels matters (gray-market equipment often
isn't covered). Honest framing: we sell both outcomes, so we have no reason
to push either.
Internal links: /pool-pump-repair/ and /pool-equipment-replacement/
```

## 6. QA checklist before publishing anything the AI writes

- [ ] No invented prices for Emergency Pools services
- [ ] No invented statistics or "studies show"
- [ ] Phone number correct: (512) 764-9867
- [ ] Internal links point at real paths (list in master prompt)
- [ ] "Often same-day," never guaranteed same-day
- [ ] Opening paragraph directly answers the query (snippet test)
- [ ] Reads like the existing site pages, not like AI filler
- [ ] Meta title ≤60 chars, meta description ≤155 chars
