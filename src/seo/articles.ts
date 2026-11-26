// Blog articles. Written for real buyers in Lahore, Islamabad and Rawalpindi.
// Facts about MTE (prices, specs, warranty, projects) come only from siteData.
import type { TopicDef } from './topics';
import { company, locations, faqCategories, solutions } from '../data/siteData';

const PUB = '2026-11-26';
const faq = (q: string) => faqCategories.flatMap((c) => c.faqs).find((f) => f.question === q);
const has = <T,>(xs: (T | undefined)[]) => xs.filter(Boolean) as T[];
const lhr = locations.lahore;
const isb = locations.islamabad;
const canti = solutions.find((s) => s.slug === 'cantilever')!;
const phone = company.phoneFormatted;

export const ARTICLES: TopicDef[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-designs',
    path: '/blog/car-parking-shade-designs-pakistan',
    label: 'Car Parking Shade Designs',
    title: 'Car Parking Shade Designs in Pakistan: 7 Types Explained | MTE',
    description:
      'Cantilever, double cantilever, butterfly, pyramid, conical, wall-mounted and 4-post car parking shades — how each works, where it fits and what it costs.',
    eyebrow: 'Guide · Designs',
    h1: 'Car Parking Shade Designs in Pakistan: 7 Types Explained',
    lead: 'There are seven common car parking shade designs in Pakistan: single cantilever, double cantilever, butterfly, pyramid, conical, wall-mounted and the traditional 4-post shed. For a house in DHA or Bahria Town the single cantilever is usually the best fit, because it leaves the front completely open; for large car parks the double cantilever or butterfly covers two rows of cars from one line of columns.',
    ogImage: '/images/project_cantilever_parking.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 7 },
    blocks: [
      {
        kind: 'section',
        h2: '1. Single cantilever shade',
        paras: [
          'All the columns stand at the back and the steel arm reaches forward over the cars. Nothing stands at the front, so you can open the doors fully and reverse in without worrying about a pole.',
          `This is the design we build most for homes and offices. Our standard arm is ${canti.specs.span.toLowerCase()}, with ${canti.specs.clearance.toLowerCase()}.`,
        ],
      },
      {
        kind: 'section',
        h2: '2. Double cantilever (T-type)',
        paras: [
          'One central line of columns with arms reaching out on both sides, so it shades two rows of cars that park facing each other. It is the usual choice for office car parks, hospitals, plazas and housing society parking.',
        ],
      },
      {
        kind: 'section',
        h2: '3. Butterfly (V-type)',
        paras: [
          'The fabric rises from the centre to both sides like open wings. It looks modern and sends rain water to the middle, where a gutter can collect it. Good for commercial frontage where looks matter.',
        ],
      },
      {
        kind: 'section',
        h2: '4. Pyramid and 5. Conical shades',
        paras: [
          'The fabric is pulled up to a high central point, giving a tent-like peak. Pyramid shades sit on a square grid; conical shades are round and give a softer look. Both work well over single bays, walkways, play areas and cafe seating.',
        ],
      },
      {
        kind: 'section',
        h2: '6. Wall-mounted shade',
        paras: [
          'Brackets fix the frame to an existing wall, so there are few or no columns on the ground. It suits narrow porches and side lanes, but only if the wall is strong enough to carry the load — an engineer should check it first.',
        ],
      },
      {
        kind: 'section',
        h2: '7. Traditional 4-post shed',
        paras: [
          'Four columns, one at each corner. It is the cheapest to build because it needs the least steel, but the front columns get in the way of car doors and turning. It makes sense on wide, open plots where space is not tight.',
        ],
      },
      {
        kind: 'compare',
        h2: 'Which design fits your site',
        headers: ['Design', 'Columns', 'Best for', 'Relative steel cost'],
        rows: [
          ['Single cantilever', 'Rear only', 'Homes, villas, office fronts', 'Higher'],
          ['Double cantilever', 'One central line', 'Two rows of cars, car parks', 'Medium'],
          ['Butterfly', 'One central line', 'Commercial frontage', 'Medium'],
          ['Pyramid / conical', 'Corners or centre', 'Single bays, walkways, play areas', 'Medium'],
          ['Wall-mounted', 'Wall brackets', 'Narrow porches, side lanes', 'Lower'],
          ['4-post', 'All four corners', 'Wide open plots, budget jobs', 'Lowest'],
        ],
      },
      {
        kind: 'section',
        h2: 'How to decide',
        items: [
          'Measure the space you have, including the gate opening and where the car doors swing.',
          'Decide whether you need full rain protection (PVC or PVDF) or only sun shade (HDPE).',
          'Check your society rules on setback and height before you finalise the design.',
          'Ask for a drawing that shows column positions before you pay an advance.',
        ],
        after: [`Not sure which design fits? Our engineers visit your site for free and suggest the right option. Call or WhatsApp ${phone}.`],
      },
      {
        kind: 'links',
        h2: 'Related',
        links: [
          ['/cantilever-car-parking-shades', 'Cantilever car parking shades'],
          ['/car-porch-shades', 'Car porch shades'],
          ['/car-parking-shade-price', 'Car parking shade price 2026'],
        ],
      },
    ],
    faqs: has([faq('Is a cantilever car parking shade better than a 4-post shed?'), faq('Can the design be custom?')]),
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-size',
    path: '/blog/car-parking-shade-size-guide',
    label: 'Car Parking Shade Size Guide',
    title: 'Car Parking Shade Size: 1, 2, 4 or 10 Cars (With Cost) | MTE',
    description:
      'How big should a car parking shade be? Typical sizes and square feet for 1, 2, 4 and 10 cars, with estimated cost in PKR for HDPE and PVC fabric.',
    eyebrow: 'Guide · Sizing',
    h1: 'Car Parking Shade Size Guide: How Big for 1, 2, 4 or 10 Cars?',
    lead: 'As a rule of thumb, plan about 3 m of width per car and 5.5 m of depth. That makes a 1-car shade roughly 180 sq ft, a 2-car shade about 330 sq ft, a 4-car shade about 650 sq ft and a 10-car double-row shade about 1,750 sq ft. Multiply the area by the rate for your fabric to get a first estimate.',
    ogImage: '/images/hero.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 5 },
    blocks: [
      {
        kind: 'section',
        h2: 'Start with the car, not the shade',
        paras: [
          'Most sedans in Pakistan are about 4.5–4.8 m long and 1.8 m wide; larger SUVs and double-cabin pickups are close to 5 m long. A shade must cover the full length, leave room to open the doors, and clear the roof of the tallest vehicle.',
          `Our standard cantilever arm is 5.5 m deep with 2.4 m front clearance, which covers SUVs and 4x4s comfortably.`,
        ],
      },
      {
        kind: 'compare',
        h2: 'Typical sizes and estimated cost',
        headers: ['Cars', 'Typical size', 'Area', 'HDPE (PKR 350–550/sq ft)', 'Mehler PVC (PKR 750–1,150/sq ft)'],
        rows: [
          ['1 car', '3 m × 5.5 m', '≈ 180 sq ft', '≈ 63,000 – 99,000', '≈ 135,000 – 207,000'],
          ['2 cars', '5.5 m × 5.5 m', '≈ 330 sq ft', '≈ 115,000 – 180,000', '≈ 250,000 – 380,000'],
          ['4 cars', '11 m × 5.5 m', '≈ 650 sq ft', '≈ 228,000 – 358,000', '≈ 488,000 – 748,000'],
          ['10 cars (double row)', '15 m × 11 m', '≈ 1,750 sq ft', '≈ 613,000 – 963,000', '≈ 1.3 – 2.0 million'],
        ],
      },
      {
        kind: 'section',
        h2: 'Why the real price can differ',
        paras: [
          'These figures use Lahore rates and simple rectangles. A real quote changes with the span, the steel, the foundation and extras such as lights or gutters. For example, a standard 2-car cantilever shade in Lahore usually lands between PKR 140,000 and 260,000 complete.',
        ],
        items: [
          'Longer cantilever arms need heavier steel.',
          'Sloped or soft ground needs bigger foundations.',
          'PVDF and PTFE fabrics cost more but last much longer.',
        ],
      },
      {
        kind: 'section',
        h2: 'Measure your space in 5 minutes',
        items: [
          'Measure the width available, wall to wall or edge to edge.',
          'Measure the depth from the back wall to where the car nose stops.',
          'Note the gate width and anything overhead: trees, wires, balconies.',
          'Take two or three photos and send them on WhatsApp with the measurements.',
        ],
        after: [`Send your measurements and photos to ${phone} and we will reply with a design suggestion and estimate.`],
      },
      { kind: 'links', h2: 'Related', links: [['/cost-calculator', 'Online cost calculator'], ['/car-parking-shade-price', 'Car parking shade price 2026'], ['/blog/car-parking-shade-designs-pakistan', '7 car parking shade designs']] },
    ],
    faqs: has([lhr.faqs?.find((f) => /cost/i.test(f.question)), faq('What information do I need to provide?')]),
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-materials',
    path: '/blog/tensile-vs-fiberglass-vs-polycarbonate-shades',
    label: 'Tensile vs Fiberglass vs Polycarbonate',
    title: 'Tensile vs Fiberglass vs Polycarbonate Car Shades | MTE',
    description:
      'Which car shade is better in Pakistan’s heat: tensile fabric, fiberglass or polycarbonate sheet? Heat, noise, lifespan, looks and cost compared honestly.',
    eyebrow: 'Guide · Materials',
    h1: 'Tensile Fabric vs Fiberglass vs Polycarbonate: Which Car Shade Is Better?',
    lead: 'For car parking in Lahore and Islamabad, tensile fabric (PVC or PVDF) is usually the better choice: it stays cooler underneath, is quiet in rain, and lasts 15–25 years. Fiberglass and polycarbonate sheets cost less up front and block rain completely, but they trap heat, can turn brittle and discoloured in strong sun, and are noisy in rain and hail.',
    ogImage: '/images/detail.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 6 },
    blocks: [
      {
        kind: 'compare',
        h2: 'Side-by-side comparison',
        headers: ['', 'Tensile fabric (PVC / PVDF)', 'Fiberglass sheet', 'Polycarbonate sheet'],
        rows: [
          ['Heat underneath', 'Cool — reflects much of the sun', 'Hot — traps heat', 'Hot unless tinted'],
          ['Rain noise', 'Quiet', 'Noisy', 'Noisy, loud in hail'],
          ['Lifespan', '15–20 years (PVC), 20–25+ (PVDF)', 'Fades and turns brittle in strong sun', 'Can yellow and crack over time'],
          ['Looks', 'Modern curved shapes', 'Flat, plain', 'Flat or curved, clear or tinted'],
          ['Up-front cost', 'Medium to high', 'Low', 'Low to medium'],
        ],
      },
      {
        kind: 'section',
        h2: 'Heat: the biggest difference in Pakistan',
        paras: [
          'In a Lahore summer the sun can push temperatures past 48°C. A light-coloured tensile membrane reflects a large share of that heat, so the car and the air under it stay noticeably cooler. Dark or clear sheets let the heat build up underneath, which is exactly what you are trying to avoid.',
        ],
      },
      {
        kind: 'section',
        h2: 'When sheets still make sense',
        paras: [
          'If you need a cheap, fully waterproof cover for a storage area, a workshop yard or a long walkway where looks do not matter, polycarbonate or metal sheet can be the practical choice. For homes, offices and anywhere people see it every day, tensile fabric usually wins over the life of the shade.',
        ],
      },
      { kind: 'links', h2: 'Related', links: [['/blog/pvc-vs-pvdf-vs-hdpe-tensile-fabric', 'PVC vs PVDF vs HDPE fabric'], ['/car-parking-shades-lahore', 'Car parking shades in Lahore'], ['/car-parking-shades-islamabad', 'Car parking shades in Islamabad']] },
    ],
    faqs: has([lhr.faqs?.find((f) => /fiberglass/i.test(f.question)), faq('Which is better for a parking shade: HDPE, PVC or PVDF?')]),
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-storms',
    path: '/blog/can-tensile-shades-survive-storms',
    label: 'Tensile Shades in Storms and Hail',
    title: 'Can Tensile Shades Survive Storms, Rain and Hail? | MTE',
    description:
      'How tensile car parking shades are designed for Pakistan’s storms, monsoon rain and hail — wind design, tensioning, drainage and what to ask your builder.',
    eyebrow: 'Guide · Weather',
    h1: 'Can Tensile Shades Survive Storms, Rain and Hail?',
    lead: 'Yes — a properly engineered tensile shade survives Pakistan’s storms, monsoon rain and hail. What matters is the design behind it: steel sized for the wind, fabric tensioned correctly so it does not flap, and a shape that sheds water instead of letting it pool. Our cantilever shades are designed for wind gusts up to 130 km/h.',
    ogImage: '/images/project_cantilever_parking.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 6 },
    blocks: has([
      {
        kind: 'section',
        h2: 'Why some shades fail in storms',
        items: [
          'Thin steel pipes and weak foundations that were never designed for wind uplift.',
          'Loose fabric that flaps, tears at the edges and pulls on the fittings.',
          'Flat shapes where rain water collects into a heavy pond and stretches the membrane.',
          'Cheap fittings that rust and snap after a few monsoons.',
        ],
      },
      {
        kind: 'section',
        h2: 'What a storm-proof design includes',
        items: [
          'Structural calculations for wind load on the steel and foundations.',
          'Hot-dip galvanized steel so rust does not weaken the frame over time.',
          'Fabric pre-stressed during installation, so it stays tight in gusts.',
          'Double-curved shapes and slopes that drain rain off the edges.',
        ],
      },
      lhr.climateChallenge ? { kind: 'section', h2: 'Lahore: heat, dust and monsoon', paras: [lhr.climateChallenge] } : undefined,
      isb.climateChallenge ? { kind: 'section', h2: 'Islamabad and Rawalpindi: rain, storms and hail', paras: [isb.climateChallenge] } : undefined,
      {
        kind: 'section',
        h2: 'Questions to ask your builder',
        items: ['What wind speed is the structure designed for?', 'Is the steel hot-dip galvanized?', 'How is the fabric tensioned, and will you re-tension it later?', 'Where does rain water go?'],
        after: [`We answer all four in writing with every quote. Call or WhatsApp ${phone}.`],
      },
    ]),
    faqs: has([isb.faqs?.find((f) => /hail/i.test(f.question)), faq('What happens if weather delays the installation?')]),
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-maintenance',
    path: '/blog/tensile-shade-maintenance-guide',
    label: 'Tensile Shade Maintenance',
    title: 'Tensile Shade Maintenance: Cleaning and Care Guide | MTE',
    description:
      'How to clean and look after a tensile car parking shade in Pakistan: washing dust, checking tension, rust spots and when to call for repair.',
    eyebrow: 'Guide · Care',
    h1: 'Tensile Shade Maintenance: A Simple Cleaning and Care Guide',
    lead: 'A tensile shade needs very little care: rinse the dust off with plain water two or three times a year, look at the fabric and fittings after big storms, and get the tension checked if the fabric starts to sag or flap. Small jobs done early stop expensive repairs later.',
    ogImage: '/images/detail.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 4 },
    blocks: [
      {
        kind: 'section',
        h2: 'Cleaning',
        items: [
          'Rinse with plain water using a soft brush or a hose; PVDF fabrics are largely washed clean by rain.',
          'Use only mild soap if needed. Never use bleach, thinner or petrol.',
          'Do not use a high-pressure jet close to the fabric or the seams.',
          'Clean after the dusty months and before the monsoon, when dirt sticks the most.',
        ],
      },
      {
        kind: 'section',
        h2: 'A quick check every few months',
        items: [
          'Is the fabric tight, or does it sag and hold water after rain?',
          'Any small cuts or worn edges near corners and fittings?',
          'Any rust spots on the steel, bolts or cables?',
          'Are the foundations and base plates firm and dry?',
        ],
      },
      {
        kind: 'section',
        h2: 'When to call for service',
        paras: [
          'Call your installer if the fabric is torn, if it flaps loudly in wind, or if water pools on top after rain. These are signs the tension or drainage needs attention. Fixing a small tear early costs a fraction of replacing a panel.',
          `We offer repairs, re-tensioning and fabric replacement, and assess shades built by other installers case by case. WhatsApp a photo to ${phone}.`,
        ],
      },
      { kind: 'links', h2: 'Related', links: [['/blog/how-long-does-a-tensile-shade-last', 'How long a tensile shade lasts'], ['/blog/can-tensile-shades-survive-storms', 'Tensile shades in storms and hail']] },
    ],
    faqs: has([faq('What maintenance does a tensile structure require?'), faq('Can you repair an existing structure?'), faq('Do you offer a warranty?')]),
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-approval',
    path: '/blog/car-shade-approval-dha-lda-cda',
    label: 'Car Shade Approval (DHA, LDA, CDA)',
    title: 'Do You Need DHA, LDA or CDA Approval for a Car Shade? | MTE',
    description:
      'What to check before building a car parking shade in DHA, Bahria Town, LDA or CDA areas: setbacks, height, boundary lines and the documents to prepare.',
    eyebrow: 'Guide · Rules',
    h1: 'Do You Need DHA, LDA or CDA Approval for a Car Parking Shade?',
    lead: 'It depends on your housing society and where the shade sits. Most societies allow a car shade inside your boundary wall and porch area, but they set rules on setback, height and appearance, and some ask for drawings first. Always confirm with your society office before building — rules change and differ between DHA, Bahria Town, LDA and CDA areas.',
    ogImage: '/images/hero.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 5 },
    blocks: [
      {
        kind: 'section',
        h2: 'What societies usually care about',
        items: [
          'The shade stays inside your plot boundary and does not hang over the road.',
          'Front and side setback lines from the building bylaws.',
          'Maximum height, so it does not block neighbours or look out of place.',
          'Colour and appearance on main boulevards and commercial areas.',
        ],
      },
      {
        kind: 'section',
        h2: 'Documents to keep ready',
        items: [
          'A site plan showing the shade footprint inside the boundary.',
          'Elevation drawing with height and column positions.',
          'Structural details for larger or commercial shades.',
          'Your ownership or tenancy papers if the office asks for them.',
        ],
      },
      {
        kind: 'section',
        h2: 'How we handle it',
        paras: [
          `${lhr.whyChoosePoints?.find((p) => /DHA/.test(p.title))?.desc ?? 'We design shades to respect society setback and height limits.'} We prepare the drawings you need and can guide you on what your society office is likely to ask for.`,
          'This article is general guidance, not legal advice. Your society’s current bylaws are the final word.',
        ],
      },
      { kind: 'links', h2: 'Related', links: [['/car-parking-shades-dha-lahore', 'Car parking shades in DHA Lahore'], ['/car-parking-shades-bahria-town', 'Car parking shades in Bahria Town']] },
    ],
    faqs: has([lhr.faqs?.find((f) => /DHA/.test(f.question))]),
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-peb',
    path: '/blog/peb-vs-conventional-steel-vs-rcc-sheds',
    label: 'PEB vs Conventional Steel vs RCC',
    title: 'PEB vs Conventional Steel vs RCC Sheds in Pakistan | MTE',
    description:
      'Pre-engineered steel buildings (PEB) vs conventional steel vs RCC for factories and warehouses: speed, span, cost, expansion and when each makes sense.',
    eyebrow: 'Guide · Industrial',
    h1: 'PEB vs Conventional Steel vs RCC: Which Is Best for Your Shed?',
    lead: 'For most factories, warehouses and dairy sheds in Pakistan, a pre-engineered steel building (PEB) is the fastest and most economical choice for wide, column-free spaces. Conventional steel suits irregular shapes and heavy custom loads, and RCC makes sense for multi-storey buildings or where fire separation and mass are needed.',
    ogImage: '/images/project_industrial_warehouse.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 6 },
    blocks: [
      {
        kind: 'compare',
        h2: 'Quick comparison',
        headers: ['', 'PEB', 'Conventional steel', 'RCC'],
        rows: [
          ['Build speed', 'Fastest — members made to size in the workshop', 'Medium', 'Slowest — formwork and curing'],
          ['Clear span', 'Wide, column-free bays', 'Wide, more custom', 'Limited without deep beams'],
          ['Steel use', 'Optimised, tapered sections', 'Standard sections, often heavier', 'Concrete and rebar'],
          ['Future expansion', 'Easy to extend', 'Possible', 'Difficult'],
          ['Best for', 'Factories, warehouses, dairy and poultry sheds', 'Complex shapes, heavy cranes', 'Multi-storey, heavy fire separation'],
        ],
      },
      {
        kind: 'section',
        h2: 'Why PEB is popular for warehouses',
        paras: [
          'In a PEB, each frame is designed for the exact loads it carries, and the members are cut, welded and drilled in the workshop. On site, the crew mainly bolts the frames together, so a shed goes up much faster than a concrete building, with fewer columns in the way of racks, trucks and machines.',
        ],
      },
      {
        kind: 'section',
        h2: 'What we include in an industrial shed',
        items: solutions.find((s) => s.slug === 'industrial-sheds')!.features,
      },
      { kind: 'links', h2: 'Related', links: [['/industrial-sheds', 'Industrial sheds in Pakistan'], ['/industrial-sheds-lahore', 'Industrial sheds in Lahore'], ['/industrial-sheds-islamabad', 'Industrial sheds in Islamabad']] },
    ],
    faqs: [],
  },

  // 8 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-dairy',
    path: '/blog/dairy-farm-shed-design-guide',
    label: 'Dairy Farm Shed Design',
    title: 'Dairy Farm Shed Design Guide for Pakistan | MTE',
    description:
      'How to plan a dairy farm shed in Punjab’s heat: orientation, roof height, ridge ventilation, roofing material, fans, drainage and steel structure.',
    eyebrow: 'Guide · Dairy & livestock',
    h1: 'Dairy Farm Shed Design Guide for Pakistan',
    lead: 'A good dairy shed in Punjab is built for heat first: an east–west orientation so the long sides avoid the low sun, a high roof with an open ridge so hot air escapes, insulated or reflective roofing, and space for fans and sprinklers. A steel frame gives wide, column-free space that is easy to clean and to extend.',
    ogImage: '/images/project_industrial_warehouse.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 6 },
    blocks: [
      {
        kind: 'section',
        h2: 'Five decisions that matter most',
        items: [
          'Orientation: run the long axis east–west to reduce direct sun on the animals.',
          'Height: a higher roof keeps hot air away from the animals; an open ridge lets it escape.',
          'Roofing: insulated sandwich panels or reflective sheet run far cooler than plain metal.',
          'Air and water: plan for fans, misting or sprinklers before the steel goes up.',
          'Floor and drainage: slopes and channels that make cleaning quick and keep floors dry.',
        ],
      },
      {
        kind: 'section',
        h2: 'Why a steel frame',
        paras: [
          'A steel portal frame gives wide spans with few columns, so feeding lanes and tractors move freely. Galvanized steel resists the damp, ammonia-heavy air of a cattle shed far better than untreated pipe, and the shed can be extended later by adding frames.',
        ],
      },
      {
        kind: 'section',
        h2: 'Plan before you build',
        paras: [
          `Every farm is different — herd size, breed, local wind and your budget all change the design. Our engineers visit the farm, suggest a layout and send a quotation with steel tonnage. Call or WhatsApp ${phone}.`,
        ],
      },
      { kind: 'links', h2: 'Related', links: [['/industrial-sheds', 'Industrial sheds'], ['/blog/peb-vs-conventional-steel-vs-rcc-sheds', 'PEB vs conventional steel vs RCC']] },
    ],
    faqs: [],
  },

  // 9 ─────────────────────────────────────────────────────────────
  {
    key: 'blog-commercial',
    path: '/blog/car-parking-shades-for-commercial-buildings',
    label: 'Parking Shades for Commercial Buildings',
    title: 'Car Parking Shades for Plazas, Hospitals & Societies | MTE',
    description:
      'A buyer’s checklist for commercial car parking shades: layout, double cantilever bays, fabric grade, lighting, drainage, approvals and a fair tender comparison.',
    eyebrow: 'Guide · Commercial',
    h1: 'Car Parking Shades for Plazas, Hospitals, Schools and Housing Societies',
    lead: 'For commercial car parks, the best value usually comes from double cantilever shades over two facing rows, PVC or PVDF fabric for full rain cover, and lighting and drainage planned from day one. Ask every bidder to quote the same fabric grade, steel specification and warranty, or the cheapest quote will often be the weakest shade.',
    ogImage: '/images/project_cantilever_parking.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 6 },
    blocks: [
      {
        kind: 'section',
        h2: 'Plan the layout first',
        items: [
          'Count bays and driving lanes; double cantilevers shade two rows from one column line.',
          'Keep columns out of turning paths and pedestrian routes.',
          'Leave clearance for SUVs, vans and, where needed, ambulances or delivery trucks.',
          'Plan where rain water will drain and where lights and cables will run.',
        ],
      },
      {
        kind: 'section',
        h2: 'Write a tender that compares like with like',
        items: [
          'Fabric brand and grade (for example Mehler PVC 900 GSM or PVDF).',
          'Steel section sizes, thickness and galvanizing.',
          'Design wind speed and who signs the structural design.',
          'Warranty in years, separately for fabric and steel.',
          'Programme: fabrication time, installation time, and working-hours limits on site.',
        ],
      },
      {
        kind: 'section',
        h2: 'Our commercial and institutional work',
        paras: [
          'We have built executive parking canopies, hospital entrance canopies and government shade structures in Lahore and Islamabad. See the projects page for sizes and photos.',
          `For a site visit and a tender-ready quotation, call or WhatsApp ${phone}.`,
        ],
      },
      { kind: 'links', h2: 'Related', links: [['/projects', 'Projects'], ['/cantilever-car-parking-shades', 'Cantilever car parking shades'], ['/blog/how-to-choose-a-tensile-shade-company', '10 checks before hiring']] },
    ],
    faqs: has([faq('Do you handle everything — design, fabrication and installation?'), faq('How long does it take to get a quote?')]),
  },

  // 10 ────────────────────────────────────────────────────────────
  {
    key: 'blog-what-is',
    path: '/blog/what-is-a-tensile-structure',
    label: 'What Is a Tensile Structure',
    title: 'What Is a Tensile Structure? Types, Uses and Cost | MTE',
    description:
      'A tensile structure is a roof made of fabric held in tension by steel. How it works, the main shapes, where it is used in Pakistan and what it costs.',
    eyebrow: 'Guide · Basics',
    h1: 'What Is a Tensile Structure?',
    lead: 'A tensile structure is a roof or shade made of fabric that is stretched tight between steel masts, arches or cables. The fabric carries load only through tension — like a drum skin — which lets it cover large areas with very little material. In Pakistan you see them over car parks, school play areas, pool decks, building entrances, marquees and stadiums.',
    ogImage: '/images/commercial.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 5 },
    blocks: [
      {
        kind: 'section',
        h2: 'How it works',
        paras: [
          'Flat fabric would sag and flap, so tensile structures use curved shapes. The fabric is curved in two directions at once — like a saddle — and pre-stressed during installation. That double curve keeps it stable in wind and lets rain run off.',
        ],
      },
      {
        kind: 'section',
        h2: 'Common shapes',
        items: ['Hypar (saddle): four corners, two high and two low.', 'Conical: fabric pulled up to a central ring or mast.', 'Barrel vault: fabric over a series of arches, good for long spans.', 'Cantilever: fabric on arms reaching out from rear columns, used for parking.'],
      },
      {
        kind: 'section',
        h2: 'Fabrics',
        paras: ['HDPE shade cloth is breathable and economical; PVC is waterproof; PVDF adds a self-cleaning top coat and a longer life; PTFE glass-fibre is used for landmark roofs that must last decades. See our fabric comparison for lifespans and prices.'],
      },
      {
        kind: 'section',
        h2: 'What it costs',
        paras: ['Installed tensile shades in Pakistan typically cost from about PKR 350 per sq ft for HDPE up to PKR 3,500 per sq ft for PTFE, depending on fabric, span and steel. Our price guide lists current rates by city.'],
      },
      { kind: 'links', h2: 'Related', links: [['/tensile-structures', 'Tensile structures in Pakistan'], ['/blog/pvc-vs-pvdf-vs-hdpe-tensile-fabric', 'Fabric comparison'], ['/car-parking-shade-price', 'Price guide 2026']] },
    ],
    faqs: has([faq('What materials do you use?'), faq('How much does a car parking shade cost in Pakistan?')]),
  },

  // 11 Urdu ───────────────────────────────────────────────────────
  {
    key: 'blog-urdu-price',
    path: '/blog/car-parking-shade-price-urdu',
    label: 'کار پارکنگ شیڈ کی قیمت',
    title: 'کار پارکنگ شیڈ کی قیمت 2026 — لاہور اور اسلام آباد | MTE',
    description:
      'لاہور، اسلام آباد اور راولپنڈی میں کار پارکنگ شیڈ اور ٹینسائل شیڈ کے ریٹ فی مربع فٹ — HDPE، PVC اور PVDF کپڑے کے حساب سے۔',
    eyebrow: 'رہنمائی · قیمت',
    h1: 'کار پارکنگ شیڈ کی قیمت 2026: لاہور اور اسلام آباد',
    lead: '2026 میں لاہور میں لگا ہوا کار پارکنگ شیڈ تقریباً 350 سے 550 روپے فی مربع فٹ (HDPE کپڑا)، 750 سے 1,150 روپے (جرمن Mehler PVC) اور 1,200 سے 1,850 روپے (PVDF) میں بنتا ہے۔ اسلام آباد میں ریٹ تھوڑے زیادہ ہیں۔ دو گاڑیوں کا عام کینٹی لیور شیڈ لاہور میں تقریباً 1,40,000 سے 2,60,000 روپے میں مکمل لگ جاتا ہے۔',
    ogImage: '/images/project_cantilever_parking.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    article: { published: PUB, updated: PUB, readMins: 4 },
    rtl: true,
    blocks: [
      { kind: 'cityPrices', h2: 'شہر کے حساب سے ریٹ (روپے فی مربع فٹ)', cities: ['lahore', 'islamabad', 'rawalpindi'] },
      {
        kind: 'section',
        h2: 'قیمت کن چیزوں پر منحصر ہے؟',
        items: [
          'کپڑے کی قسم: HDPE سستا اور ہوادار ہے مگر بارش روکتا نہیں؛ PVC اور PVDF مکمل واٹر پروف ہیں۔',
          'شیڈ کا سائز اور کینٹی لیور بازو کی لمبائی۔',
          'گاڑیوں کی تعداد اور ڈیزائن (سنگل، ڈبل یا دیوار والا)۔',
          'سٹیل کی موٹائی، گیلوانائزنگ اور پینٹ۔',
          'زمین کی حالت اور فاؤنڈیشن۔',
        ],
      },
      {
        kind: 'section',
        h2: 'مفت سائٹ سروے',
        paras: [`ہمارے انجینئر آپ کی جگہ پر آ کر مفت پیمائش کرتے ہیں اور ڈیزائن کے ساتھ تحریری قیمت دیتے ہیں۔ کال یا واٹس ایپ کریں: ${phone}`],
      },
      { kind: 'links', h2: 'مزید پڑھیں', links: [['/car-parking-shade-price', 'Car Parking Shade Price (English)'], ['/car-parking-shades-lahore', 'Car Parking Shades Lahore'], ['/car-parking-shades-islamabad', 'Car Parking Shades Islamabad']] },
    ],
    faqs: [
      {
        question: 'کیا HDPE شیڈ بارش روکتا ہے؟',
        answer: 'نہیں، HDPE کپڑا ہوادار ہوتا ہے اور دھوپ تو روکتا ہے مگر بارش کا پانی گزر جاتا ہے۔ اگر مکمل بارش سے بچاؤ چاہیے تو PVC یا PVDF کپڑا لگائیں۔',
      },
      {
        question: 'شیڈ لگنے میں کتنا وقت لگتا ہے؟',
        answer: 'گھریلو کینٹی لیور شیڈ عام طور پر ورکشاپ میں 5 سے 7 دن میں تیار ہوتا ہے اور سائٹ پر ایک دن میں لگ جاتا ہے۔',
      },
    ],
  },
];
