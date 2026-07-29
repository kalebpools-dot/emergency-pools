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
];

export const CITY_SERVICES = SERVICES.filter((s) => s.hasCityPages);
