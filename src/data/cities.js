// Each city carries UNIQUE copy per service. This is what keeps 9 templated pages
// from reading as 9 copies of one page — Google's post-2025 updates punish that.
export const CITIES = [
  {
    slug: 'georgetown',
    name: 'Georgetown',
    state: 'TX',
    perService: {
      'pool-pump-repair': {
        intro:
          'Georgetown is where our trucks start the day, so pump calls here get the fastest response we offer. From Sun City to Berry Creek to the older pools off Williams Drive, we see the same pattern: hard, limestone-heavy water and long summer run times that chew through motor bearings and capacitors on a schedule you can almost set a watch by.',
        local:
          'Sun City deserves its own mention — thousands of pools built in waves, which means their original single-speed pumps age out in waves too. If yours is humming, tripping breakers, or just louder than it used to be, the shaft-spin test tells us in thirty seconds whether you need a $30-class part or a motor. Many Sun City owners use a pump failure as the moment to move to variable-speed and cut the power bill for good.',
        faq: {
          q: 'Do you service Sun City and gated communities?',
          a: 'Every day. Give the gate our name and number when you book — Emergency Pools, (512) 764-9867 — and the tech handles the rest.',
        },
      },
      'green-pool-cleanup': {
        intro:
          'A green pool in Georgetown usually has a backstory, and we have heard most of them: a pump that quietly died during a vacation week, a chlorinator that ran empty in July, or stabilizer that crept up for years until the chlorine stopped working. Whatever the cause, recovery starts with a test kit, not a bucket of shock.',
        local:
          'One Georgetown-specific pattern worth knowing: black algae showing up late summer in pools that never had it before. It hitchhikes in on swimsuits, floats, and toys that have been in Lake Georgetown, then roots into plaster where ordinary chlorine cannot reach it. If you see dark spots that brush off and come right back, call before it spreads — black algae is a targeted-treatment job, and the earlier we start, the shorter it runs.',
        faq: {
          q: 'My pool turned green while I was out of town. How fast can you start?',
          a: 'We aim to have a tech testing your water within 24 hours of your call, often same-day. The first visit sets the chemistry plan and the honest timeline.',
        },
      },
      'pool-leak-repair': {
        intro:
          'Georgetown sits on limestone, and pools here move with it. Seasonal soil shift around older shells — especially in neighborhoods built in the 80s and 90s off Austin Avenue and Williams Drive — shows up as hairline separation at skimmers, fittings, and tile lines that leaks a little, then a lot.',
        local:
          'Before you assume the worst: peak Georgetown summers evaporate well over an inch of water a week on their own, and an autofill will hide a real leak behind a rising water bill. Run the bucket test first — we will talk you through it by phone at no charge. If the test says leak, our dye and pressure testing finds it without cutting your deck open to look.',
        faq: {
          q: 'My water bill jumped but the pool looks full. Leak?',
          a: 'Classic autofill masking. Shut the autofill off for 24 hours and watch the level against a bucket on the top step. If the pool outdrops the bucket, call us — that is a real leak, found early.',
        },
      },
    },
  },
  {
    slug: 'round-rock',
    name: 'Round Rock',
    state: 'TX',
    perService: {
      'pool-pump-repair': {
        intro:
          'Round Rock pump calls split into two very different jobs. In Teravista, Walsh Ranch, and the newer builds, it is variable-speed Pentair and Hayward systems throwing drive faults or shutting down on dry-run protection. In the established neighborhoods off Gattis School and Sam Bass, it is single-speed motors finally giving up after a decade of Texas summers.',
        local:
          'The variable-speed calls deserve a warning: a VS pump that keeps shutting itself off is protecting itself, usually from a suction-side air leak or a prime problem — replacing the pump does not fix the cause. We check fault codes, lid o-rings, and suction plumbing before anyone spends real money. And if the motor is genuinely done, our authorized-dealer backing means the replacement is warranty-eligible and usually on the truck within a day.',
        faq: {
          q: 'My variable-speed pump keeps stopping on its own. Is it broken?',
          a: 'More often it is doing its job — modern drives cut out to avoid running dry. The fix is usually upstream: prime, suction air leaks, or a clogged basket. We diagnose the cause instead of selling you a pump.',
        },
      },
      'green-pool-cleanup': {
        intro:
          'Round Rock green pools cluster around two moments: move-ins and equipment failures. A house off Brushy Creek changes hands, the pool sat minimally maintained through the sale, and the new owner inherits a swamp — or a pump or chlorinator quietly failed in June and nobody noticed until the water did.',
        local:
          'If you just bought the house, do not shock blind. Years of trichlor tabs from the previous owner often mean sky-high CYA, and at that level chlorine is chemically locked out — the green will drink every bag you throw at it. Our first visit tests everything, and if the honest answer is a partial drain and refill before treatment, we say it on day one and price the whole recovery up front.',
        faq: {
          q: 'We just moved in and the pool is green. Where do we start?',
          a: 'With a full water test — especially CYA. New owners inherit the previous owner\u2019s chemistry, and the test tells us whether this is a straightforward shock-and-brush recovery or a drain-first job. Either way you get the real plan and timeline at the first visit.',
        },
      },
      'pool-leak-repair': {
        intro:
          'Round Rock\u2019s clay-heavy soils east of I-35 swell and shrink with the rain cycle, and pools feel it. The leaks we chase here are most often at the plumbing penetrations — where pipes meet the shell — and at skimmer throats that have separated a hair from the deck moving around them.',
        local:
          'Underground line leaks are the sneaky ones: the pool holds fine with the pump off but drops when it runs (pressure-side leak), or loses prime and pulls air (suction-side). That on/off pattern is diagnostic gold — note it before you call and you have already done half the isolation. We confirm with pressure testing and pinpoint the section before any ground is opened.',
        faq: {
          q: 'The pool only loses water when the pump runs. What does that mean?',
          a: 'That points at a pressure-side plumbing leak rather than the shell — water being pushed out through a break underground. It is exactly what pressure testing isolates, and often the repair is far more contained than people fear.',
        },
      },
    },
  },
  {
    slug: 'cedar-park',
    name: 'Cedar Park',
    state: 'TX',
    perService: {
      'pool-pump-repair': {
        intro:
          'Cedar Park pumps fight a two-front war: the same brutal summer run times as everywhere in Central Texas, plus the spring oak pollen load that neighborhoods like Buttercup Creek and Ranch at Brushy Creek know too well. Pollen and oak tassels pack skimmer baskets and pump strainers, starve the pump of water, and cook seals and bearings ahead of schedule.',
        local:
          'If your pump died in April or May, there is a decent chance it ran dry-starved behind a packed basket first. The shaft-spin test still sorts capacitor from bearings in seconds, and if the wet end survived, the fix can be modest. Either way we will check the whole suction path — a repaired pump feeding through the same choked line just fails again.',
        faq: {
          q: 'Why do pool pumps seem to die every spring here?',
          a: 'Oak pollen season. Packed skimmer and strainer baskets restrict flow, pumps cavitate and overheat, and marginal seals and bearings finish dying. Spring pump failures in Cedar Park are usually flow-starvation injuries.',
        },
      },
      'green-pool-cleanup': {
        intro:
          'Shade is Cedar Park\u2019s blessing and its algae problem. Pools tucked against the greenbelts and under mature live oaks run cooler and prettier — and they also collect organic debris that feeds algae while the shade slows the chlorine\u2019s work. Add one missed week of maintenance in July and green happens fast.',
        local:
          'Shaded, debris-fed pools respond well to our recovery process, but they are also the pools where high CYA hides longest — owners compensate for chronic algae pressure with extra tabs, and the stabilizer quietly stacks up. We test first, treat second, and if the water needs a partial drain before shock can work, you hear it at the first visit, not after three failed treatments.',
        faq: {
          q: 'My shaded pool turns green every summer. Can that cycle be broken?',
          a: 'Usually yes — it is chemistry plus filtration runtime, not fate. Correct CYA, right-size the chlorine feed for the debris load, extend filter run times through the hot months, and the annual green week stops being annual.',
        },
      },
      'pool-leak-repair': {
        intro:
          'Cedar Park leak calls come to us two ways: a water level visibly dropping in Buttercup Creek or Anderson Mill West, or a water bill that crept up for months while an autofill quietly covered the evidence. Both start the same place — proving the leak is real with a bucket test before anyone spends money.',
        local:
          'The neighborhoods here span 90s builds to brand new, and the leak profile follows the age: older shells leak at fittings, skimmers, and light niches; newer pools more often have a plumbing joint that never quite sealed or shifted in the first few seasons. Dye testing and pressure testing sort one from the other in a single visit, non-destructively.',
        faq: {
          q: 'Is a leaking light fixture dangerous?',
          a: 'The leak itself is a water-loss problem, not a shock hazard when equipment is properly bonded and code-compliant — but a wet niche is worth a professional look for both reasons. Dye testing at the niche confirms it fast, and the repair is routine.',
        },
      },
    },
  },
];
