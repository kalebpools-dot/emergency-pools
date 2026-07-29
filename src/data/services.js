// The five launch services. `hasCityPages: true` = gets a page per city at launch.
export const SERVICES = [
  {
    slug: 'pool-pump-repair',
    name: 'Pool pump repair',
    phrase: 'Emergency pool pump repair',
    problem: 'Pump humming, tripping the breaker, or dead silent',
    hasCityPages: true,
    hubIntro:
      'A dead pump is the one pool problem that gets worse by the hour. No circulation means no filtration and no chlorine distribution — in a Central Texas summer, that is a green pool by the weekend. We diagnose and repair pool pumps across Georgetown, Round Rock, and Cedar Park, and because we are backed by a factory-authorized Hayward, Pentair, and Jandy dealer, the common failure parts are usually already on the truck.',
    steps: [
      'You describe what the pump is doing — humming, clicking, silent, or shutting itself off. That alone narrows it down before we roll.',
      'On site, the tech runs the shaft-spin test: power off, spin the motor shaft by hand. Spins free but only hums under power? That is almost always the start capacitor — a fast, inexpensive fix. Gritty, stiff, or seized? Bearings or shaft seal, and we will tell you honestly whether a rebuild or a new motor is the smarter spend.',
      'Variable-speed pump shutting down on its own? Modern Pentair and Hayward drives cut power to protect themselves against dry-running. We check prime, suction-side air leaks, and drive fault codes before anyone talks about replacement.',
      'You get a straight quote on the spot. Approve it, and most repairs are finished the same visit.',
    ],
    faq: [
      {
        q: 'My pump hums but will not start. Is it dead?',
        a: 'Usually not. A hum with a free-spinning shaft points to a failed start capacitor, one of the cheapest and fastest pool repairs there is. It only means a dead motor when the shaft is seized.',
      },
      {
        q: 'Should I repair or replace the motor?',
        a: 'Our rule: if the wet end is sound and the motor is under 5–6 years old, a capacitor, seal, or bearing job makes sense. Older single-speed motors are often worth upgrading to variable-speed — the energy savings in Texas run seasons pay for the swap.',
      },
    ],
  },
  {
    slug: 'green-pool-cleanup',
    name: 'Green pool cleanup',
    phrase: 'Emergency green pool cleanup',
    problem: 'Pool turned green — or there is a party on the calendar',
    hasCityPages: true,
    hubIntro:
      'A green pool is a chemistry problem before it is a cleaning problem, and dumping shock into it without testing first is how people spend hundreds of dollars staying green. We recover green pools across Georgetown, Round Rock, and Cedar Park with a test-first process that tells you the real timeline on day one.',
    steps: [
      'We test before we treat — and the number that matters most is CYA (stabilizer). High CYA locks up chlorine so shock cannot work no matter how much you add. If CYA is the problem, the honest fix starts with a partial drain and refill, and we will say so up front.',
      'With chemistry corrected, we hit the algae hard: balanced shock dosing, brushing every surface, and running your filtration around the clock.',
      'Black algae gets special treatment. It roots into plaster and it usually arrives on swimsuits and floats that have been in the local lakes — we see the pattern constantly. It takes aggressive brushing and targeted treatment, not just chlorine.',
      'We give you the honest timeline: a typical green-to-clean recovery runs 3–7 days depending on how far gone it is. If you have an event coming, call early — we can compress the schedule with flocculant and extra visits, but nobody can safely clear a swamp overnight.',
    ],
    faq: [
      {
        q: 'Can you clear my pool before my party this weekend?',
        a: 'Sometimes — it depends on how green it is and what the CYA test says. Call with a photo and we will give you a real answer, not a sales answer. If it is achievable with floc and daily visits, we will lay out exactly what it takes.',
      },
      {
        q: 'Why did shocking my pool not work?',
        a: 'Nine times out of ten: high CYA from years of stabilized chlorine tabs. Once CYA climbs high enough, chlorine is chemically handcuffed. Testing costs a few minutes; guessing costs weeks.',
      },
    ],
  },
  {
    slug: 'pool-leak-repair',
    name: 'Pool leak repair',
    phrase: 'Pool leak detection & repair',
    problem: 'Water level dropping faster than it should',
    hasCityPages: true,
    hubIntro:
      'Losing water does not automatically mean losing money — a Central Texas summer can evaporate a surprising amount of pool on its own. The first job is proving whether you actually have a leak; the second is finding it without tearing anything up. We do both across Georgetown, Round Rock, and Cedar Park.',
    steps: [
      'Start with the bucket test — we will walk you through it on the phone for free. A bucket of water on the top step loses water to evaporation at the same rate as the pool. If the pool drops faster than the bucket, you have a real leak.',
      'On site, we isolate where: dye testing at fittings, skimmers, returns, and light niches finds shell and fixture leaks; pressure testing the plumbing finds underground line leaks.',
      'One thing homeowners miss: an autofill quietly masks a leak for months while your water bill pays for it. If you have autofill, shut it off for 24 hours and watch the level — that is often the first clue.',
      'Then we fix what we find — resealing fittings, skimmer repairs, or line repairs — with a clear quote before any work starts.',
    ],
    faq: [
      {
        q: 'How much water loss is normal in Texas?',
        a: 'Peak summer evaporation here can run a quarter inch a day or more — over an inch and a half a week — especially on windy days with warm water. Faster than that, or water loss in mild weather, deserves a bucket test.',
      },
      {
        q: 'Do you have to cut the deck to find a leak?',
        a: 'Almost never to find it. Dye and pressure testing locate leaks non-destructively. If a repair requires opening deck or turf, you will know exactly where and why before anything is touched.',
      },
    ],
  },
  {
    slug: 'pool-heater-repair',
    name: 'Pool heater repair',
    phrase: 'Emergency pool heater repair',
    problem: 'Heater will not fire — and the spa is cold',
    hasCityPages: false,
    hubIntro:
      'Most "dead heater" calls we run in Williamson County are not dead heaters. A pool heater refuses to fire when its safety interlocks are not satisfied — and the most common unsatisfied interlock is water flow. Before you price a new heater, let us check the cheap causes first.',
    steps: [
      'Flow first: a heater will not ignite without proof of water moving through it. A dirty filter, a low pump speed, or a failing pressure switch reads as "broken heater" when the heater itself is fine. On variable-speed systems, a schedule set too low for heater minimum flow is a five-minute fix.',
      'Scale second: Central Texas water is hard, and scale builds inside heat exchangers, choking flow and efficiency. We inspect and advise honestly on descaling versus exchanger replacement.',
      'Then the ignition chain: sensors, igniters, and boards, in diagnostic order — with parts access through our factory-authorized dealer backing for Hayward, Pentair, and Jandy units.',
      'Cold-snap season is our busy season. If a spring front is coming and the spa matters that week, call ahead — we prioritize by schedule, first booked, first served.',
    ],
    faq: [
      {
        q: 'My heater clicks but never lights. What is that?',
        a: 'Usually the ignition sequence starting and then aborting — commonly a flow/pressure switch, a dirty filter upstream, or a failing igniter. It is diagnosable in one visit and often repairable the same day.',
      },
      {
        q: 'Is it worth repairing an older heater?',
        a: 'Depends on the exchanger. If scale or corrosion has eaten the heat exchanger on a 10+ year unit, replacement usually wins. If the exchanger is healthy, ignition-chain repairs are very cost-effective.',
      },
    ],
  },
  {
    slug: 'pool-equipment-replacement',
    name: 'Pool equipment replacement',
    phrase: 'Same-day pool equipment replacement',
    problem: 'Filter, valve, automation, or pump beyond repair',
    hasCityPages: false,
    hubIntro:
      'When equipment is truly done, speed comes down to one thing: who can get the right part fastest. Emergency Pools is backed by a factory-authorized dealer for Hayward, Pentair, and Jandy — which means warranty-eligible equipment, direct parts access, and installs that do not wait on a middleman.',
    steps: [
      'We confirm the failure honestly first. A surprising share of "replace it" calls end as repairs — a relay swap on an automation panel, a multiport valve rebuild, a capacitor. You should never buy equipment you did not need.',
      'When replacement is right, we quote factory-authorized equipment with the manufacturer warranty intact — DIY-sourced or gray-market equipment often is not warranty-eligible, and that difference matters the day something fails.',
      'Common same-visit swaps: pump motors and wet ends, filter cartridges and grids, check valves, multiport valves, salt cells, and automation relays.',
      'Everything is installed to spec and tested under load before we leave, including verifying safety interlocks like heater flow protection.',
    ],
    faq: [
      {
        q: 'Can you match equipment to what I already have?',
        a: 'Yes — staying inside your existing ecosystem (Hayward, Pentair, or Jandy) keeps automation, warranties, and spare parts simple. As an authorized-dealer-backed operation we can source across all three.',
      },
      {
        q: 'Do you install equipment I bought online?',
        a: 'We can, but know the tradeoff first: many manufacturers void or reduce warranties on equipment not sold through authorized channels. We will tell you what your specific unit is worth installing.',
      },
    ],
  },
  {
    slug: 'pool-filter-repair',
    name: 'Pool filter repair',
    phrase: 'Pool filter repair & replacement',
    problem: 'Filter pressure too high, water still cloudy, or a cracked/leaking filter tank',
    hasCityPages: true,
    hubIntro:
      'The filter is the part of the system most people never think about until the water tells them something is wrong — climbing pressure, cloudy water despite normal chlorine, or a tank that is visibly cracked or weeping at a seam. We service and repair cartridge, DE, and sand filters across Georgetown, Round Rock, and Cedar Park, and as a factory-authorized dealer for Hayward, Pentair, and Jandy, the cartridges, grids, and valve parts for those systems are usually already on the truck.',
    steps: [
      'We start with the pressure gauge, compared against your filter\'s clean-water baseline — a high reading means restricted flow, and how high tells us whether this is a normal cleaning or something more.',
      'Cartridge filters get pulled and inspected for torn pleats or media so packed with debris that rinsing will not restore flow. DE and sand filters get checked at the manifold and multiport valve, since a cracked lateral or a valve stuck between settings can mimic a dirty-filter symptom exactly.',
      'Tank and O-ring seals get a visual and pressure check — the usual source of a filter that is quietly weeping water at the equipment pad.',
      'You get a straight answer on clean-vs-replace before anything is billed. Hayward, Pentair, and Jandy filters we service all take factory-authorized cartridges and parts, so a replacement stays warranty-eligible.',
    ],
    faq: [
      {
        q: 'How do I know if my filter needs cleaning or full replacement?',
        a: 'Pressure that drops back to normal after a good cleaning means the filter media is still doing its job. Pressure that climbs again within days, or a tank with visible cracking, usually means the media or the tank itself has reached the end of its service life.',
      },
      {
        q: 'Cartridge, DE, or sand — does it matter for Central Texas water?',
        a: 'All three work here, but our hard, mineral-heavy water scales cartridge pleats and DE grids faster than in softer-water regions, so filters get cleaned or backwashed a bit more often than the manufacturer\'s mild-climate guidance suggests.',
      },
    ],
  },
  {
    slug: 'pool-automation-plumbing',
    name: 'Pool automation & plumbing',
    phrase: 'Pool automation & plumbing repair',
    problem: 'Automation panel unresponsive, a valve not switching, or plumbing not routing water correctly',
    hasCityPages: true,
    hubIntro:
      'Automation and plumbing problems tend to look mysterious from the surface — a schedule that will not run, a valve that will not switch to the spa, water that is not reaching every return the way it used to — but they almost always trace back to a specific actuator, valve, or line. We repair automation systems and plumbing across Georgetown, Round Rock, and Cedar Park, and as a factory-authorized dealer for Hayward, Pentair, and Jandy, we work directly with all three brands\' control panels and app-based systems rather than treating any one as a specialty.',
    steps: [
      'We start at the control panel or app: what error, if any, is it showing, and does the schedule and manual override behave consistently? That narrows a software/programming issue from a hardware one before we touch equipment.',
      'Automated valve actuators get tested directly — a valve that will not switch is often the actuator motor or its connection to the panel, not the valve body itself.',
      'Plumbing gets checked at the manifold and any accessible unions for restricted or misrouted flow, which shows up as weak returns, an unbalanced spa/pool split, or equipment starved of water despite the pump running fine.',
      'Any programming changes or valve replacements get tested through a full cycle before we call it done — not just powered on, but actually switching and holding under real operation.',
    ],
    faq: [
      {
        q: 'My automation app shows the equipment as on, but nothing is running. What does that mean?',
        a: 'That is usually a communication problem between the app and the control panel rather than the equipment itself — a lost Wi-Fi connection, a panel that needs a reset, or a firmware issue. We check the panel directly rather than trusting the app\'s status alone.',
      },
      {
        q: 'Can you add automation to a pool that has never had it?',
        a: 'Yes — Hayward, Pentair, and Jandy all offer automation systems that retrofit onto existing plumbing and equipment. We\'ll look at what you already have and recommend the system that fits it without unnecessary replacement.',
      },
    ],
  },
  {
    slug: 'uv-ozone-sanitizer-repair',
    name: 'UV & ozone sanitizer repair',
    phrase: 'UV & ozone pool sanitizer repair',
    problem: 'UV or ozone sanitizer not reducing chlorine demand like it used to',
    hasCityPages: true,
    hubIntro:
      'UV and ozone systems are supplemental sanitizers — they cut down how much chlorine your pool needs and knock out chloramines that cause that "chlorine smell" people mistake for too much chlorine, rather than too little. When one stops pulling its weight, chlorine demand quietly climbs and nobody notices until they are buying more chemical than they used to. We service UV and ozone systems across Georgetown, Round Rock, and Cedar Park, and as a factory-authorized dealer for Hayward, Pentair, and Jandy, we carry replacement bulbs, sleeves, and ozone cells for the systems those brands sell.',
    steps: [
      'UV bulbs have a fixed service life regardless of how the system looks — we check bulb hours against the manufacturer\'s replacement interval first, since a system running on an expired bulb looks fine but is not actually sanitizing.',
      'The quartz sleeve around the bulb gets inspected for scaling — our hard Central Texas water builds mineral deposits on the sleeve faster than in softer-water regions, and a scaled sleeve blocks UV output even with a fresh bulb.',
      'Ozone systems get checked at the generator and injection point, confirming ozone is actually being produced and delivered into the plumbing, not just that the unit is powered on.',
      'We confirm the fix worked by watching chlorine demand over the following days — a properly functioning UV or ozone system should visibly ease how much chlorine the pool needs to hold a reading.',
    ],
    faq: [
      {
        q: 'How often does a UV bulb actually need replacing?',
        a: 'Most residential UV bulbs are rated for about one swim season of continuous use regardless of visible wear, since UV output degrades well before the bulb visibly fails. Replacing on the manufacturer\'s schedule, not by appearance, is what keeps the system working.',
      },
      {
        q: 'Does UV or ozone mean I do not need chlorine anymore?',
        a: 'No — both are supplemental. They reduce how much chlorine you need and improve water quality, but neither replaces a chlorine residual as your primary, ongoing sanitizer.',
      },
    ],
  },
  {
    slug: 'pool-heat-pump-repair',
    name: 'Pool heat pump repair',
    phrase: 'Pool heat pump repair',
    problem: 'Heat pump running but not heating, or not turning on at all',
    hasCityPages: true,
    hubIntro:
      'A pool heat pump fails differently than a gas heater — there is no pilot or ignition sequence to chase, because a heat pump moves heat from the air using a compressor and refrigerant, closer to how an AC unit works in reverse. Central Texas\'s mild winters actually suit heat pumps well, which is part of why we see more of them every year. We repair heat pumps across Georgetown, Round Rock, and Cedar Park, and as a factory-authorized dealer for Hayward, Pentair, and Jandy, we work on all three brands\' heat pump lines with warranty-eligible parts.',
    steps: [
      'Power and thermostat settings first — a unit that will not turn on at all is often a breaker, a set-point below the pool\'s actual temperature, or a safety lockout rather than a failed compressor.',
      'Airflow around the unit gets checked next. Heat pumps pull in ambient air to extract heat from it, and anything blocking airflow — fencing, plants, debris — can make a healthy unit underperform.',
      'If the unit runs but is not heating, we check the compressor and refrigerant circuit — this is specialized diagnostic work, not a homeowner check, since it involves sealed refrigerant components.',
      'We set honest expectations on speed: heat pumps warm a pool gradually over a day or more, not in the hour or two a gas heater can manage. A slow rise in temperature is normal operation, not a sign of a problem.',
    ],
    faq: [
      {
        q: 'Is a heat pump or gas heater better for a Central Texas pool?',
        a: 'Heat pumps cost less to run here specifically because our winters are mild enough for them to stay efficient most of the season, but they heat slowly. Gas heaters heat fast but cost more per hour to run. Many owners use a heat pump for baseline warmth and lean on other methods for a quick pre-swim boost.',
      },
      {
        q: 'My heat pump runs constantly but the water barely warms. Is that normal?',
        a: 'Some run time is expected — heat pumps work gradually. But if it is running most of the day with minimal temperature gain, that usually points to a refrigerant or compressor issue worth a diagnostic visit rather than more patience.',
      },
    ],
  },
];

export const CITY_SERVICES = SERVICES.filter((s) => s.hasCityPages);
