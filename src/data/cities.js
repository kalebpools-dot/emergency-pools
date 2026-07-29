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
      'pool-filter-repair': {
        intro:
          'Sun City alone put hundreds of filters into service within a few years of each other, and our hard, limestone-fed water scales cartridge pleats and DE grids faster than the manufacturer’s general guidance assumes. Add Georgetown’s long, hot run season and filters here work harder than the same equipment in a milder climate.',
        local:
          'The pattern we see most in Georgetown’s older neighborhoods off Williams Drive: a sand or DE filter original to the pool, now decades old, with a multiport valve that has started sticking between settings. Cartridge systems in newer builds fare better but still need more frequent cleaning here than package literature suggests. We carry Hayward, Pentair, and Jandy cartridges and grids on the truck as a factory-authorized dealer.',
        faq: {
          q: 'Why does my filter need cleaning so much more often than the manual says?',
          a: 'Georgetown’s water is genuinely harder than most manufacturer guidance assumes. Mineral scale builds on cartridge pleats and DE grids faster here, so a cleaning interval that works in a milder-water region often needs to be cut down for Central Texas.',
        },
      },
      'pool-automation-plumbing': {
        intro:
          'Sun City’s gated layout makes app-based automation genuinely useful — residents who split time between Georgetown and elsewhere like being able to check and run their pool remotely rather than relying on a timer at the pad. We repair and retrofit automation systems and plumbing across Georgetown as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'The most common Georgetown call is a spa/pool valve that will not switch on command — usually the actuator, not the valve body, and a quick fix once diagnosed. In the older neighborhoods off Austin Avenue, we also see plumbing manifolds that were never set up for automation at all, which is a retrofit conversation rather than a repair.',
        faq: {
          q: 'Can Sun City gate staff let your tech in if I am not home?',
          a: 'Yes — give the gate our name and number when you book, Emergency Pools, (512) 764-9867, the same way you would for any other appointment, and the tech handles the rest.',
        },
      },
      'uv-ozone-sanitizer-repair': {
        intro:
          'Georgetown’s hard water is doubly hard on UV systems — the same minerals that scale filters also build up on the quartz sleeve around the UV bulb, blocking the light before the bulb itself has even reached the end of its rated life. We service UV and ozone systems across Georgetown as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'Sun City owners in particular lean toward UV and ozone systems, since they cut down on the hands-on chemical management a more chlorine-reliant pool demands. When chlorine demand creeps up despite normal dosing, a scaled sleeve or an expired bulb — not a chemistry mistake — is usually the actual cause.',
        faq: {
          q: 'My UV system is on but chlorine use has still gone up. Why?',
          a: 'Check the sleeve before assuming the bulb: Georgetown’s hard water scales the quartz sleeve around the bulb, which blocks UV output even when the bulb itself is fine. We check both during a service visit.',
        },
      },
      'pool-heat-pump-repair': {
        intro:
          'Georgetown’s winters are mild enough that a heat pump can realistically extend swim season well into spring and fall, which is part of why we install and repair more of them here every year. We service heat pumps across Georgetown as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'Sun City residents swimming on a daily routine are the most common heat-pump callers — a unit that used to hold a comfortable morning temperature and now cannot keep up is worth a diagnostic look at the compressor and refrigerant circuit before assuming it needs full replacement.',
        faq: {
          q: 'Will a heat pump actually keep up with year-round swimming in Georgetown?',
          a: 'For most of the year, yes — our winters are mild enough that a properly sized heat pump holds a comfortable swimming temperature. The coldest snaps may still need a boost, which is worth discussing before you buy based on your swim habits.',
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
      'pool-filter-repair': {
        intro:
          'Round Rock filter calls follow the same age split as pump calls: newer DE and cartridge systems in Teravista and Walsh Ranch versus older sand filters in the established neighborhoods off Gattis School and Sam Bass. Both fight the same hard water and long Texas run season underneath.',
        local:
          'The newer-build complaint is usually pressure climbing faster than expected on a cartridge system less than a few years old — often a cleaning-interval problem, not a defect, since our water scales pleats faster than manufacturer guidance assumes. On older sand filters, a stuck multiport valve is the most common culprit behind flow that never quite comes back after backwashing.',
        faq: {
          q: 'My newer cartridge filter is already losing pressure fast. Is that normal?',
          a: 'It can be — Central Texas water scales cartridge media faster than the mild-climate cleaning schedules printed in most manuals. If cleaning restores pressure reliably, that is normal here; if it does not, the media itself may need replacing.',
        },
      },
      'pool-automation-plumbing': {
        intro:
          'Round Rock’s newer subdivisions, Teravista and Walsh Ranch especially, tend to ship with Pentair or Hayward automation already installed, while the older neighborhoods off Sam Bass more often run on manual valves and timers. We repair and retrofit automation and plumbing across Round Rock as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'The most common automation call here is a panel or app that has lost communication with the equipment pad after a Wi-Fi router change or a power blip — usually a reset, not a hardware failure. On older plumbing, we occasionally find manifolds that were capped off during a past renovation and never properly reconnected, which shows up as one zone of the pool getting weak flow.',
        faq: {
          q: 'My automation stopped responding after we changed internet providers. Is that connected?',
          a: 'Very likely — most app-based systems need to be reconnected to a new network name or password after a router change. We can walk you through it by phone or handle it during a visit.',
        },
      },
      'uv-ozone-sanitizer-repair': {
        intro:
          'A growing share of new construction in Teravista and Walsh Ranch ships with a UV or ozone system already installed, which is different from the older parts of Round Rock where retrofit is more common. We service both across Round Rock as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'On newer builds, the most common issue is simply an expired UV bulb nobody flagged — the system still runs and looks normal, so nobody notices until chlorine demand quietly climbs. We check bulb hours against the manufacturer schedule rather than relying on how the unit looks.',
        faq: {
          q: 'How would I even know my UV bulb has expired if the unit still runs?',
          a: 'You mostly would not, by looking — bulb output fades before the bulb visibly fails, and the housing keeps running normally either way. Tracking install date against the rated service life is the only reliable way to know.',
        },
      },
      'pool-heat-pump-repair': {
        intro:
          'Round Rock’s newer, energy-conscious builds increasingly pair a variable-speed pump with a heat pump from the start, aiming to keep operating costs low year-round. We service heat pumps across Round Rock as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'The calls we get most are from owners who expected gas-heater speed from a heat pump and are surprised by the slower, steadier warm-up — that is normal operation, not a fault. When a heat pump genuinely underperforms its own history, airflow blockage around the unit or a refrigerant issue is the more likely explanation.',
        faq: {
          q: 'We just moved in and the heat pump seems slow. Is it broken?',
          a: 'Probably not — heat pumps warm a pool gradually over a day or more by design, unlike a gas heater. If it is running constantly with almost no temperature gain over that time, that is when it is worth a diagnostic look.',
        },
      },
    },
  },
  {
    slug: 'killeen',
    name: 'Killeen',
    state: 'TX',
    perService: {
      'pool-pump-repair': {
        intro:
          'Killeen runs on the same brutal Central Texas summer heat as the rest of I-35 country, and pool pumps here fail on the same predictable schedule — capacitors and bearings giving out from months of near-continuous run time. With Fort Cavazos anchoring the local economy, a lot of Killeen pools also sit behind rental properties that change hands often, which means deferred pump maintenance is common.',
        local:
          'If you are a landlord or property manager juggling multiple addresses, we get it — the shaft-spin test still tells us in thirty seconds whether a tenant’s "pool won’t turn on" call is a $30 part or a dead motor, so you are not guessing over the phone. We can also work directly with tenants on-site and bill the owner, which saves a step during a busy PCS season.',
        faq: {
          q: 'Can you work directly with my tenant and bill me separately?',
          a: 'Yes. Give us the property details and your contact info when you book, and we can diagnose and repair on-site with the tenant present while invoicing goes straight to you.',
        },
      },
      'green-pool-cleanup': {
        intro:
          'A lot of the green pools we see in Killeen have the same backstory: a family got orders and moved out, and the pool sat unattended for weeks before a new tenant or buyer noticed. Between PCS cycles at Fort Cavazos and a hot Central Texas summer, an untreated pool goes from cloudy to swamp faster than most owners expect.',
        local:
          'If you just took over a property — as a new owner, a landlord between tenants, or a PCS family moving in — do not shock blind. We test full water chemistry first, especially CYA, since previous owners’ years of stabilized chlorine tabs can lock chlorine out entirely. You get an honest recovery timeline on the first visit, whether that is a straightforward shock-and-brush job or a partial drain first.',
        faq: {
          q: 'We just moved into base housing nearby (or a rental) and the pool is green. What now?',
          a: 'A full water test comes first, especially stabilizer (CYA) — it tells us whether this is a normal shock-and-brush recovery or needs a partial drain before treatment even starts working. Either way you get the real plan and timeline at the first visit.',
        },
      },
      'pool-leak-repair': {
        intro:
          'Killeen sits on the same limestone-heavy Central Texas ground as the rest of the region, and seasonal ground movement shows up as slow leaks at skimmer throats, fittings, and plumbing penetrations — especially in older pools that have been through a few ownership changes.',
        local:
          'Before assuming the worst, run the numbers: peak Killeen summers can evaporate well over an inch of pool water a week on their own, and an autofill valve will happily mask a real leak behind a climbing water bill for months. We walk you through the bucket test by phone at no charge, and if it points to a real leak, dye and pressure testing find it without cutting into decking to search.',
        faq: {
          q: 'The water bill went up but the pool still looks full. Could it still be a leak?',
          a: 'Very possibly — an autofill hides water loss by quietly refilling the pool, so the level never looks low even while you are paying for the leak. Shutting the autofill off for 24 hours and watching the level against a bucket usually settles it.',
        },
      },
      'pool-filter-repair': {
        intro:
          'Killeen’s rental-heavy market means filters here often go a season or two between anyone actually checking them, since maintenance responsibility can get lost between tenant and owner. We service filters across Killeen as a factory-authorized dealer for Hayward, Pentair, and Jandy, with parts for all three usually on the truck.',
        local:
          'For landlords and property managers, the most efficient call is describing the symptom over the phone — high pressure, cloudy water despite chlorine — and letting us diagnose cartridge, DE, or sand issues on site without you needing to be there. We can invoice the owner while working directly with whoever is at the property.',
        faq: {
          q: 'Can you diagnose a filter problem without the owner being present?',
          a: 'Yes — give us the property details and owner contact info when you book, and we can work with a tenant or property manager on-site while invoicing goes straight to the owner.',
        },
      },
      'pool-automation-plumbing': {
        intro:
          'For Killeen owners dealing with deployments and PCS moves, remote automation is less a luxury and more a genuine need — being able to check on a property\'s pool from anywhere matters when you cannot swing by yourself. We install, retrofit, and repair automation and plumbing across Killeen as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'The most common call is an app or panel that has gone unresponsive after months of a property sitting unattended — often just a network or power-cycle issue once someone is finally on-site to check it, not a failed component. We also handle plumbing left in an unknown state by a previous owner or tenant.',
        faq: {
          q: 'I am deployed or PCSing and cannot check the pool myself. Can you help remotely?',
          a: 'We can diagnose automation issues and coordinate with a property manager, family member, or tenant on-site, and get you set up with remote monitoring so you can check your pool\'s status from anywhere going forward.',
        },
      },
      'uv-ozone-sanitizer-repair': {
        intro:
          'UV and ozone systems appeal to Killeen landlords for a practical reason: they reduce how closely someone needs to manage chlorine between visits, which matters when a property sits between tenants or an owner is stationed elsewhere. We service UV and ozone systems across Killeen as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'On properties that changed hands or tenants recently, we often find a UV bulb well past its rated life with nobody aware, since the housing keeps running and looks normal regardless. Checking install date against rated hours is standard on our first visit to any inherited or newly managed property.',
        faq: {
          q: 'The previous tenant never mentioned the UV system. How do I know if it still works?',
          a: 'A bulb well past its service life still looks and runs normally, so appearance will not tell you. We check the install date and hours against the manufacturer\'s rated life during a visit to give you a real answer.',
        },
      },
      'pool-heat-pump-repair': {
        intro:
          'Killeen’s mild winters make a heat pump a reasonable investment for owners who want a longer swim season without gas-heater running costs, and we are seeing more of them installed in newer construction around town. We service heat pumps across Killeen as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'On rental properties, the most common issue is a unit nobody has looked at in a while — airflow around the pad gets blocked by overgrowth or storage, quietly reducing performance in a way that looks like a failing unit but is really a maintenance gap. We check clearance first before assuming compressor trouble.',
        faq: {
          q: 'Our heat pump barely heats the pool anymore. What should we check first?',
          a: 'Airflow clearance around the unit is the first thing worth checking — anything blocking air intake can quietly cut performance over time. If clearance is fine and performance is still poor, that points toward the compressor or refrigerant circuit instead.',
        },
      },
    },
  },
  {
    slug: 'harker-heights',
    name: 'Harker Heights',
    state: 'TX',
    perService: {
      'pool-pump-repair': {
        intro:
          'Harker Heights has grown fast along the FM 2410 corridor, which means a real mix of pump ages — newer variable-speed systems in recently built subdivisions next to older single-speed motors in established neighborhoods closer to the Fort Cavazos gate. Both fail for the same underlying reason in a Central Texas summer: long daily run times with little rest.',
        local:
          'In the newer sections, the pump complaint is usually a variable-speed drive shutting itself down rather than a dead motor — that is the drive protecting itself, most often from a suction-side air leak or priming issue, and we check that before anyone talks replacement. In the older streets, it is more often a straightforward capacitor or bearing failure, and the shaft-spin test sorts that in under a minute on site.',
        faq: {
          q: 'My newer variable-speed pump keeps shutting off by itself — is it already broken?',
          a: 'Usually not. Modern drives are designed to cut power rather than run dry, so a self-stopping pump is often protecting itself from an air leak or priming problem upstream. We diagnose the cause instead of just swapping the pump.',
        },
      },
      'green-pool-cleanup': {
        intro:
          'Harker Heights green-pool calls cluster around two moments: a family moving for orders and leaving a pool untreated for a few weeks, or a stretch of summer heat that outpaces a maintenance schedule built for cooler months. Either way, algae takes hold fast once chlorine falls behind.',
        local:
          'Area lakes near Belton and Stillhouse Hollow are a favorite weekend spot, and swimsuits and pool toys that have been in lake water are a common way black algae gets introduced into a home pool. It roots into plaster where ordinary chlorine cannot reach it, so dark spots that brush off and return are worth calling about before they spread across the pool floor.',
        faq: {
          q: 'We were at the lake all weekend and now there are dark spots in the pool. Is that a problem?',
          a: 'It can be — that pattern is a classic sign of black algae hitching a ride in on lake-soaked gear. It needs targeted treatment and aggressive brushing rather than a normal shock dose, and starting early keeps the job small.',
        },
      },
      'pool-leak-repair': {
        intro:
          'Pools in Harker Heights span decades of construction, from older homes near the Fort Cavazos gate to newer builds off FM 2410, and the leak pattern tracks the age: older shells separate slowly at skimmers and fittings, while newer plumbing joints occasionally never fully sealed in the first couple of seasons.',
        local:
          'The tell that saves everyone time: does the pool lose water with the pump off (points to the shell or fittings) or only when it is running (points to a pressure-side plumbing leak)? Note which one you are seeing before you call — we confirm with dye and pressure testing and pinpoint the section before any ground gets opened.',
        faq: {
          q: 'The pool only drops water when the pump is running. What does that tell you?',
          a: 'That is a strong sign of a pressure-side plumbing leak — water being pushed out through a break underground rather than a shell leak. It is exactly the kind of thing pressure testing isolates quickly, often to a single section of pipe.',
        },
      },
      'pool-filter-repair': {
        intro:
          'Harker Heights filters split along the same lines as everything else here — newer cartridge and DE systems off FM 2410 versus older sand filters near the Fort Cavazos gate. We service all three types across Harker Heights as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'On the newer end of town, cartridge filters tend to need cleaning more often than owners expect, since our hard water scales pleats faster than mild-climate guidance assumes. Closer to the gate, older sand filters more often need a multiport valve rebuild than a full tank replacement — worth confirming before assuming the filter itself is done.',
        faq: {
          q: 'How do I tell if my sand filter needs a new valve or a whole new filter?',
          a: 'A valve that sticks between settings or will not seal fully in backwash mode is usually a rebuildable part on its own, separate from the tank and sand media. We check the valve first since it is the far cheaper fix when it is the actual cause.',
        },
      },
      'pool-automation-plumbing': {
        intro:
          'Harker Heights’ growth along FM 2410 means a lot of newer homes already have Pentair or Hayward automation installed from the builder, while older streets near the gate more often run manual equipment. We repair and retrofit automation and plumbing across Harker Heights as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'The most common call on newer systems is an app that will not connect after a router or provider change — usually a quick reset once we are on-site. On older plumbing near the gate, we sometimes find a spa valve that was manually capped years ago and never reconnected to automation when it was later added.',
        faq: {
          q: 'Can automation be added to an older pool that has never had it?',
          a: 'Yes — Hayward, Pentair, and Jandy automation systems can retrofit onto most existing plumbing and equipment. We look at what you have and recommend a system that works with it rather than requiring a full equipment replacement.',
        },
      },
      'uv-ozone-sanitizer-repair': {
        intro:
          'Weekend trips to Belton and Stillhouse Hollow mean a fair amount of organic and lake-water debris makes its way into Harker Heights pools, which raises chlorine demand beyond what a typical suburban pool sees. UV and ozone systems help offset that load — we service both across Harker Heights as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'When chlorine demand spikes after a weekend of heavy pool use, a working UV or ozone system should visibly ease it back down within a few days. If it does not, checking the bulb hours or ozone generator output — rather than adding more chlorine — is usually the faster fix.',
        faq: {
          q: 'Chlorine demand spikes every weekend after we use the pool a lot. Can UV help?',
          a: 'Yes, that is exactly the situation UV and ozone systems help with — they reduce the chlorine load your pool needs to handle heavy use. If your system already has one and demand still spikes, it is worth checking bulb life or generator output.',
        },
      },
      'pool-heat-pump-repair': {
        intro:
          'Harker Heights’ mild Central Texas winters make heat pumps a practical way to stretch swim season into spring and fall without gas-heater running costs, and newer construction along FM 2410 increasingly ships with one installed. We service heat pumps across Harker Heights as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'The most common issue we find isn’t the unit itself but its surroundings — new landscaping or fencing installed after the heat pump can restrict the airflow it needs to work efficiently. Checking clearance around the unit is the first step before assuming a compressor problem.',
        faq: {
          q: 'We landscaped recently and the heat pump seems weaker. Could that be related?',
          a: 'It could be — heat pumps need clear airflow around the unit to pull heat from the air efficiently. New fencing, plants, or storage placed too close can measurably reduce performance without the unit itself being damaged.',
        },
      },
    },
  },
  {
    slug: 'temple',
    name: 'Temple',
    state: 'TX',
    perService: {
      'pool-pump-repair': {
        intro:
          'Temple has expanded quickly with new subdivisions on the west side of town, alongside older, established neighborhoods closer to downtown — so pump calls range from newer Pentair and Hayward variable-speed systems to single-speed motors well past their expected life. Both fight the same long Central Texas run times every summer.',
        local:
          'On the older single-speed motors especially common in Temple’s established neighborhoods, a hum with no spin usually means a failed start capacitor — cheap and fast to fix. If the motor is otherwise sound but original to the pool, that failure is often the natural moment to move to a variable-speed replacement and cut the summer power bill going forward.',
        faq: {
          q: 'Is it worth upgrading to a variable-speed pump when the old one finally dies?',
          a: 'Often yes, especially on an older single-speed motor that ran full-time for years. The energy savings over a Central Texas run season can offset a meaningful share of the upgrade cost, and our factory-authorized dealer backing keeps it warranty-eligible.',
        },
      },
      'green-pool-cleanup': {
        intro:
          'Temple’s growth as a regional hub — anchored by the Baylor Scott & White medical campus — means a steady stream of new residents inheriting pools they did not maintain through the previous owner’s tenure. A green pool at closing, or one that got away from a busy household for a couple of weeks, is one of our most common calls here.',
        local:
          'If you just closed on a Temple home with a green pool, resist the urge to dump in shock before testing. Years of a previous owner’s stabilized chlorine tabs commonly push CYA high enough to lock chlorine out chemically, no matter how much you add. We test first, and if a partial drain has to happen before treatment can work, you hear that plan and price on the first visit.',
        faq: {
          q: 'We just bought a house in Temple and the pool is green. Where do we start?',
          a: 'With a full water test, especially stabilizer (CYA). New owners inherit whatever chemistry history came before them, and that single number usually decides whether this is a normal shock-and-brush recovery or needs a partial drain first.',
        },
      },
      'pool-leak-repair': {
        intro:
          'Temple sits on the same limestone-and-clay mix as the rest of the I-35 corridor, and ground movement between wet and dry stretches shows up in pools as slow separation at skimmer throats, return fittings, and tile lines — especially in the city’s older neighborhoods.',
        local:
          'Before assuming a leak, run the math: a Central Texas summer can evaporate well over an inch of pool water a week through evaporation alone, and an autofill valve will quietly hide a real leak behind a rising water bill in the meantime. Try the bucket test first — we will walk you through it by phone at no charge — and if it says leak, dye and pressure testing pinpoint it without opening up decking to search.',
        faq: {
          q: 'How do I know if it is really a leak and not just summer evaporation?',
          a: 'The bucket test settles it: put a bucket of water on the top step next to the pool. If the pool drops faster than the bucket over a couple of days, that is a real leak, not evaporation — and we can take it from there.',
        },
      },
      'pool-filter-repair': {
        intro:
          'Temple’s filter calls split by neighborhood age, same as everything else here — newer cartridge and DE systems in west Temple’s new subdivisions, older sand filters closer to downtown. We service all three types across Temple as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'Busy households near the Baylor Scott & White medical campus, often working irregular hospital shifts, tend to notice filter problems late simply because nobody had time to check the pressure gauge — by the time it is caught, cleaning alone sometimes is not enough and the media needs replacing. Checking pressure on a regular schedule catches it earlier and cheaper.',
        faq: {
          q: 'I do not have time to check my filter regularly. What is the risk of skipping it?',
          a: 'A filter running on climbing pressure for weeks works harder and wears out faster, and can let water quality slip without an obvious warning sign. If checking it yourself is not realistic, folding a filter check into a weekly or biweekly service visit solves that without adding to your plate.',
        },
      },
      'pool-automation-plumbing': {
        intro:
          'Temple’s new west-side subdivisions increasingly come with Pentair or Hayward automation from the builder, appealing to residents whose work schedules — especially around the Baylor Scott & White medical campus — do not leave much time for hands-on pool management. We repair and retrofit automation and plumbing across Temple as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'The most common call is straightforward: an app or panel that stopped responding after a network change, or a valve that will not switch on schedule. In Temple’s older downtown-area homes, we more often handle first-time automation retrofits onto plumbing that was never set up for it.',
        faq: {
          q: 'Can automation run my pool on a schedule if I work irregular hours?',
          a: 'That is exactly what it is built for — set schedules for filtration, cleaning cycles, and heating that run regardless of your work hours, with the app giving you a quick status check whenever you have a moment.',
        },
      },
      'uv-ozone-sanitizer-repair': {
        intro:
          'For Temple residents working demanding or irregular schedules around the Baylor Scott & White medical campus, UV and ozone systems appeal for the same reason automation does — less hands-on chemical management required to keep the water right. We service both across Temple as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'When chlorine demand creeps up in a Temple pool despite a UV or ozone system being installed, our hard water scaling the quartz sleeve is the most common cause we find, followed by a bulb simply past its rated life. Both are quick checks on a service visit.',
        faq: {
          q: 'I installed UV specifically to spend less time on pool chemistry. Is it working?',
          a: 'If chlorine demand has meaningfully eased since installation, yes. If it has crept back up, a scaled quartz sleeve or an expired bulb are the most common reasons — both are quick to check and correct.',
        },
      },
      'pool-heat-pump-repair': {
        intro:
          'Temple’s mild winters make heat pumps a practical choice for extending swim season, and new construction on the west side increasingly builds them in from the start rather than adding gas heat. We service heat pumps across Temple as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'For residents with unpredictable schedules around the medical campus, a heat pump paired with automation means the pool can hold a target temperature without anyone needing to manually start a heater before a rare free afternoon. When one underperforms, airflow clearance and refrigerant issues are the first two things we check.',
        faq: {
          q: 'Can I set a heat pump to just maintain a temperature automatically?',
          a: 'Yes — paired with an automation system, a heat pump can hold a target temperature on its own schedule, so the pool is ready when you have time rather than requiring you to plan ahead and turn it on manually.',
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
      'pool-filter-repair': {
        intro:
          'Cedar Park’s spring oak pollen hits filters as hard as it hits pumps — cartridges and DE grids packed with pollen and tassels lose flow fast, and owners often blame the pump when the filter is actually the bottleneck. We service filters across Cedar Park as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'If your filter pressure spikes every spring around the same time, that is pollen, not a failing filter — a thorough cleaning during pollen season, more frequent than the rest of the year, usually solves it without replacing anything. In shaded pools near the greenbelts, organic debris adds to that same seasonal load.',
        faq: {
          q: 'My filter pressure spikes every spring. Is that a sign I need a new filter?',
          a: 'Usually not — that is Cedar Park’s oak pollen season packing the filter media faster than normal. A more frequent cleaning schedule through spring typically resolves it without needing to replace the filter itself.',
        },
      },
      'pool-automation-plumbing': {
        intro:
          'Cedar Park’s mix of established neighborhoods like Buttercup Creek and newer builds near Ranch at Brushy Creek means both older manual plumbing and newer automated systems are common here. We repair and retrofit automation and plumbing across Cedar Park as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'Spring pollen causes an automation-adjacent problem worth knowing about: a packed skimmer or pump basket can trip a variable-speed drive\'s flow protection, which then shows up as an "automation problem" on the app when the actual cause is upstream. We check the whole flow path, not just the panel, before assuming a hardware fault.',
        faq: {
          q: 'My automation system is showing a flow error every spring. Is that the panel?',
          a: 'Probably not — Cedar Park\'s oak pollen season packs baskets and filters enough to trigger flow-protection errors on the panel even when the automation hardware itself is fine. Clearing baskets first is worth trying before assuming a panel fault.',
        },
      },
      'uv-ozone-sanitizer-repair': {
        intro:
          'Shaded pools under Cedar Park’s mature live oaks collect more organic debris than pools in full sun, which raises the chlorine demand needed to keep water clear. UV and ozone systems help offset that load — we service both across Cedar Park as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'On heavily shaded pools near the greenbelts, we recommend checking UV and ozone performance specifically during peak leaf-drop and pollen seasons, since that is when the organic debris load — and the chlorine demand it drives — peaks for the year.',
        faq: {
          q: 'Does a shaded pool need UV or ozone more than a sunny one?',
          a: 'It benefits more, generally — shaded pools collect more organic debris, which raises chlorine demand, and a working UV or ozone system offsets that without requiring more chemical. It is not required, but it pulls more weight in a shaded, debris-heavy pool.',
        },
      },
      'pool-heat-pump-repair': {
        intro:
          'Cedar Park’s shaded pools already run cooler than pools in full sun, which makes a heat pump a natural pairing for owners who want to extend the swim season further into spring and fall. We service heat pumps across Cedar Park as a factory-authorized dealer for Hayward, Pentair, and Jandy.',
        local:
          'On heavily shaded properties, a heat pump sometimes runs longer than expected simply because the pool starts cooler to begin with — that is normal, not a sign of trouble. Genuine underperformance is more often airflow blockage from nearby trees and greenbelt growth than a mechanical fault.',
        faq: {
          q: 'Does pool shade affect how well a heat pump works?',
          a: 'It affects run time more than performance — a shaded pool starts cooler, so the heat pump runs longer to reach the same temperature. That is expected behavior. Nearby trees blocking airflow to the unit itself is a separate issue worth checking if performance seems genuinely off.',
        },
      },
    },
  },
];
