// Content for hub / topic landing pages. All facts come from siteData (prices, specs,
// projects, FAQs) so the site never contradicts itself.
import { solutions, locations, faqCategories, projects, company, engineeringFabrics } from '../data/siteData';

export type TopicBlock =
  | { kind: 'text'; h2: string; paras: string[] }
  | { kind: 'bullets'; h2: string; intro?: string; items: string[] }
  | { kind: 'solution'; slug: string; h2: string }
  | { kind: 'cityPrices'; h2: string; intro?: string; cities: string[] }
  | { kind: 'compare'; h2: string; headers: string[]; rows: string[][] }
  | { kind: 'projects'; h2: string; items: { title: string; image: string; place: string; area: string; description: string }[] }
  | { kind: 'links'; h2: string; links: [string, string][] }
  | { kind: 'section'; h2: string; paras?: string[]; items?: string[]; after?: string[] };

export interface TopicDef {
  key: string;
  path: string;
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ogImage: string;
  solutionSlug?: string;
  breadcrumbParent?: [string, string];
  blocks: TopicBlock[];
  faqs: { question: string; answer: string }[];
  /** Blog articles: show byline + Article schema */
  article?: { published: string; updated: string; readMins: number };
  rtl?: boolean;
}

const sol = (slug: string) => solutions.find((s) => s.slug === slug)!;
const faqByQ = (q: string) => faqCategories.flatMap((c) => c.faqs).find((f) => f.question === q);
const pick = <T,>(xs: (T | undefined)[]) => xs.filter(Boolean) as T[];

const cityLinks = (prefix: string, keys: string[], noun: string): [string, string][] =>
  keys.map((k) => [`/${prefix}-${k}`, `${noun} in ${locations[k].name}`]);

const projectCards = (filter: (p: (typeof projects)[number]) => boolean) =>
  projects.filter(filter).map((p) => ({ title: p.title, image: p.image, place: p.city, area: p.area, description: p.description }));

const lahore = locations.lahore;
const lahoreCostFaq = lahore.faqs?.find((f) => /cost/i.test(f.question));
const dhaFaq = lahore.faqs?.find((f) => /DHA/.test(f.question));
const bylaws = lahore.whyChoosePoints?.find((p) => /DHA/.test(p.title));

const PRICE_FAQ = 'How much does a car parking shade cost in Pakistan?';
const AFFECTS_FAQ = 'What affects the price of a tensile shade structure?';
const CANTI_FAQ = 'Is a cantilever car parking shade better than a 4-post shed?';
const FABRIC_FAQ = 'Which is better for a parking shade: HDPE, PVC or PVDF?';

export const TOPICS: TopicDef[] = [
  {
    key: 'car-parking-shade-price',
    path: '/car-parking-shade-price',
    label: 'Car Parking Shade Price',
    title: 'Car Parking Shade Price in Pakistan 2026 (Per Sq Ft) | MTE',
    description:
      '2026 car parking shade rates per sq ft in Lahore, Islamabad, Rawalpindi and Karachi — HDPE, Mehler PVC, PVDF and PTFE — and what changes the price.',
    eyebrow: 'Price guide 2026',
    h1: 'Car Parking Shade Price in Pakistan (2026)',
    lead: `In 2026 an installed car parking shade from ${company.name} costs about PKR 350–600 per sq ft with HDPE shade cloth, PKR 750–1,200 with German Mehler PVC and PKR 1,200–1,900 with PVDF fabric, depending on the city. ${lahoreCostFaq ? 'A standard 2-car cantilever shade in Lahore typically costs PKR 140,000–260,000 complete with fabrication, foundation and installation.' : ''}`,
    ogImage: '/images/project_cantilever_parking.jpg',
    solutionSlug: 'cantilever',
    blocks: [
      {
        kind: 'cityPrices',
        h2: 'Rates per square foot by city',
        intro: 'Indicative installed rates, including structural steel, fabric, paint finish and on-site tensioning. Final prices are confirmed after a free site survey.',
        cities: ['lahore', 'islamabad', 'rawalpindi', 'karachi'],
      },
      {
        kind: 'bullets',
        h2: 'What changes the price',
        items: [
          'Fabric grade: HDPE shade cloth, German Mehler PVC, Serge Ferrari PVDF or PTFE glass-fibre membrane.',
          'Covered area and cantilever span — longer spans need heavier steel sections.',
          'Number of car bays and the layout (single row, double row, wall-mounted).',
          'Steel specification and finish: hot-dip galvanizing, primer and PU paint.',
          'Foundation and site conditions, including sloped or uneven ground.',
          'Extras such as LED lighting or rainwater gutters.',
        ],
      },
      {
        kind: 'text',
        h2: 'How to get an exact quote',
        paras: [
          `Use the online cost calculator for a first estimate, then book a free site survey. Our engineers measure the site, propose a design and send a written quotation. Call or WhatsApp ${company.phoneFormatted}.`,
        ],
      },
      {
        kind: 'links',
        h2: 'City price pages',
        links: [...cityLinks('car-parking-shades', ['lahore', 'islamabad', 'rawalpindi', 'karachi'], 'Car parking shades'), ['/cost-calculator', 'Cost calculator']],
      },
    ],
    faqs: pick([faqByQ(PRICE_FAQ), faqByQ(AFFECTS_FAQ), lahoreCostFaq, faqByQ(FABRIC_FAQ)]),
  },
  {
    key: 'cantilever-car-parking-shades',
    path: '/cantilever-car-parking-shades',
    label: 'Cantilever Car Parking Shades',
    title: 'Cantilever Car Parking Shades: Lahore & Islamabad | MTE',
    description:
      'Cantilever car parking shades with no front poles: 5.5 m standard arm, 2.4 m clearance, PVDF fabric, galvanized steel. Lahore, Islamabad, Rawalpindi, Karachi.',
    eyebrow: 'No front columns',
    h1: 'Cantilever Car Parking Shades',
    lead: `${sol('cantilever').desc}`,
    ogImage: '/images/hero.jpg',
    solutionSlug: 'cantilever',
    breadcrumbParent: ['/car-parking-shades', 'Car Parking Shades'],
    blocks: [
      { kind: 'solution', slug: 'cantilever', h2: 'Specifications and features' },
      {
        kind: 'compare',
        h2: 'Cantilever vs 4-post parking shade',
        headers: ['', 'Cantilever shade', '4-post shed'],
        rows: [
          ['Columns', 'All at the rear', 'Front and rear'],
          ['Front access', 'Completely open — no door dings', 'Front columns obstruct parking'],
          ['Turning and bay use', 'Full use of every bay', 'Columns reduce usable width'],
          ['Steel cost', 'Higher (counter-balanced arm)', 'Lower'],
          ['Best for', 'Villas in DHA and Bahria Town, offices, plazas', 'Budget or wide open plots'],
        ],
      },
      {
        kind: 'projects',
        h2: 'Cantilever projects',
        items: projectCards((p) => /cantilever/i.test(p.title + p.description)),
      },
      { kind: 'links', h2: 'Cantilever shades in your city', links: cityLinks('car-parking-shades', ['lahore', 'islamabad', 'rawalpindi', 'karachi'], 'Cantilever car parking shades') },
    ],
    faqs: pick([faqByQ(CANTI_FAQ), dhaFaq, lahoreCostFaq, faqByQ(FABRIC_FAQ)]),
  },
  {
    key: 'car-parking-shades-dha-lahore',
    path: '/car-parking-shades-dha-lahore',
    label: 'DHA Lahore',
    title: 'Car Parking Shades in DHA Lahore | Cantilever & Porch | MTE',
    description:
      'Cantilever car parking and porch shades for DHA Lahore Phase 1–9 & Raya, designed to DHA setback and height rules. Head office in DHA Phase 5. Free survey.',
    eyebrow: 'DHA Lahore · Phase 1–9 & Raya',
    h1: 'Car Parking Shades in DHA Lahore',
    lead: `${company.name} designs and installs cantilever car parking shades, porch canopies and driveway shades for homes and commercial buildings across DHA Lahore Phase 1–9 and Raya. Our Lahore head office is in DHA Phase 5 Commercial, so site surveys in DHA are free and quick.`,
    ogImage: '/images/project_cantilever_parking.jpg',
    solutionSlug: 'cantilever',
    breadcrumbParent: ['/car-parking-shades-lahore', 'Lahore'],
    blocks: pick<TopicBlock>([
      bylaws ? { kind: 'text', h2: bylaws.title, paras: [bylaws.desc] } : undefined,
      {
        kind: 'projects',
        h2: 'Our work in DHA',
        items: [
          ...projectCards((p) => /DHA/.test(p.title + p.description)),
          ...(lahore.localProjects ?? [])
            .filter((p) => /DHA/.test(p.location))
            .map((p) => ({ title: p.title, image: p.image, place: p.location, area: p.area, description: p.description })),
        ],
      },
      { kind: 'cityPrices', h2: 'Car parking shade rates in DHA Lahore', intro: 'Same rates as the rest of Lahore, per square foot, installed:', cities: ['lahore'] },
      { kind: 'solution', slug: 'cantilever', h2: 'Cantilever shade specifications' },
      {
        kind: 'links',
        h2: 'Also in Lahore',
        links: [
          ['/car-parking-shades-lahore', 'Car parking shades in Lahore'],
          ['/tensile-structures-lahore', 'Tensile structures in Lahore'],
          ['/cantilever-car-parking-shades', 'Cantilever car parking shades'],
          ['/car-parking-shade-price', 'Car parking shade price guide'],
        ],
      },
    ]),
    faqs: pick([dhaFaq, lahoreCostFaq, faqByQ(CANTI_FAQ)]),
  },
  {
    key: 'car-parking-shades',
    path: '/car-parking-shades',
    label: 'Car Parking Shades',
    title: 'Car Parking Shades in Pakistan | Cantilever & Tensile | MTE',
    description:
      'Cantilever, porch and commercial car parking shades in Lahore, Islamabad, Rawalpindi and Karachi. HDPE, PVC and PVDF fabrics, galvanized steel, free survey.',
    eyebrow: 'Car parking shades',
    h1: 'Car Parking Shades in Pakistan',
    lead: `${company.name} designs, fabricates and installs car parking shades for homes, offices, plazas, hospitals and government buildings across Pakistan — from single-car porch shades to multi-bay cantilever canopies.`,
    ogImage: '/images/project_cantilever_parking.jpg',
    solutionSlug: 'cantilever',
    blocks: [
      { kind: 'links', h2: 'Car parking shades by city', links: [...cityLinks('car-parking-shades', ['lahore', 'islamabad', 'rawalpindi', 'karachi'], 'Car parking shades'), ['/car-parking-shades-dha-lahore', 'Car parking shades in DHA Lahore']] },
      { kind: 'solution', slug: 'cantilever', h2: 'Cantilever car parking shades' },
      { kind: 'cityPrices', h2: 'Prices per square foot', cities: ['lahore', 'islamabad'] },
      {
        kind: 'projects',
        h2: 'Parking shade projects',
        items: projectCards((p) => /parking|driveway|cantilever/i.test(p.title)),
      },
      { kind: 'links', h2: 'Guides', links: [['/car-parking-shade-price', 'Car parking shade price 2026'], ['/cantilever-car-parking-shades', 'Cantilever vs 4-post shades'], ['/engineering', 'PVC vs PVDF vs HDPE fabric']] },
    ],
    faqs: pick([faqByQ(PRICE_FAQ), faqByQ(CANTI_FAQ), faqByQ(FABRIC_FAQ)]),
  },
  {
    key: 'tensile-structures',
    path: '/tensile-structures',
    label: 'Tensile Structures',
    title: 'Tensile Structures Pakistan | Membrane Roofs & Canopies | MTE',
    description:
      'Tensile membrane roofs, entrance canopies, pool and walkway shades and marquee structures in Pakistan. PVDF and PTFE fabric, FEA-designed steel, free survey.',
    eyebrow: 'Tensile membrane structures',
    h1: 'Tensile Structures in Pakistan',
    lead: `${sol('tensile-roofs').desc}`,
    ogImage: '/images/commercial.jpg',
    solutionSlug: 'tensile-roofs',
    blocks: [
      { kind: 'links', h2: 'Tensile structures by city', links: [...cityLinks('tensile-structures', ['lahore', 'islamabad', 'rawalpindi'], 'Tensile structures')] },
      { kind: 'solution', slug: 'tensile-roofs', h2: 'Tensile membrane roofs and canopies' },
      { kind: 'solution', slug: 'pool-canopies', h2: 'Swimming pool and walkway shades' },
      { kind: 'solution', slug: 'marquee-canopies', h2: 'Marquee and banquet tensile canopies' },
      {
        kind: 'projects',
        h2: 'Tensile projects',
        items: projectCards((p) => /canopy|membrane|roof|walkway|pool/i.test(p.title)),
      },
    ],
    faqs: pick([faqByQ(FABRIC_FAQ), faqByQ(AFFECTS_FAQ)]),
  },
  {
    key: 'industrial-sheds',
    path: '/industrial-sheds',
    label: 'Industrial Sheds',
    title: 'Industrial Sheds in Pakistan | Factory & Warehouse Sheds | MTE',
    description:
      'Pre-engineered factory, warehouse and dairy steel sheds in Pakistan: portal frames, PU sandwich panels, crane runway beams. Turnkey design and erection.',
    eyebrow: 'Pre-engineered steel buildings',
    h1: 'Industrial Steel Sheds in Pakistan',
    lead: `${sol('industrial-sheds').desc}`,
    ogImage: '/images/project_industrial_warehouse.jpg',
    solutionSlug: 'industrial-sheds',
    blocks: [
      { kind: 'links', h2: 'Industrial sheds by city', links: cityLinks('industrial-sheds', ['lahore', 'islamabad', 'rawalpindi'], 'Industrial sheds') },
      { kind: 'solution', slug: 'industrial-sheds', h2: 'Specifications and scope' },
      {
        kind: 'bullets',
        h2: 'Types of industrial sheds we build',
        items: [
          'Factory and manufacturing sheds with rigid portal frames and crane runway beams',
          'Storage warehouses and distribution centres with clear-span bays',
          'Dairy farm sheds with ridge ventilation and polycarbonate daylighting',
          'Insulated buildings with PU sandwich panels or prepainted GI sheet roofing',
        ],
      },
      {
        kind: 'text',
        h2: 'From survey to erection',
        paras: [
          'Every shed starts with a free site survey. Our engineers prepare the structural design to British Standard BS 5950 and AISC, with seismic and wind loads checked against the Pakistan Building Code.',
          'Steel members are fabricated in our own workshop, then erected on site by our crews, so one team is responsible from drawings to handover.',
        ],
      },
      {
        kind: 'text',
        h2: 'Industrial shed cost',
        paras: [
          `Shed prices depend on covered area, clear span, eave height, crane loads and the roofing and cladding system (PPGI sheet or PU sandwich panels). After a free site survey our engineers send a detailed quotation with steel tonnage and specifications. Call or WhatsApp ${company.phoneFormatted}.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'What is included in an industrial steel shed from MTE?',
        answer: `${sol('industrial-sheds').desc} Typical scope: ${sol('industrial-sheds').features.slice(0, 4).join('; ')}.`,
      },
      {
        question: 'Do you build industrial sheds outside Lahore?',
        answer: `Yes. We design and erect factory, warehouse and dairy sheds across Pakistan, with dedicated pages for Lahore, Islamabad and Rawalpindi. Call or WhatsApp ${company.phoneFormatted} for a free site survey.`,
      },
    ],
  },
];

const rwp = locations.rawalpindi;
const bahriaFaq = rwp.faqs?.find((f) => /Bahria/.test(f.question));
const rwp2CarFaq = rwp.faqs?.find((f) => /2-car/.test(f.question));
const MAINT_FAQ = 'What maintenance does a tensile structure require?';
const WARRANTY_FAQ = 'Do you offer a warranty?';
const INSTALL_FAQ = 'How long does installation take?';
const QUOTE_FAQ = 'How do I get a quote?';
const HDPE_PVC_FAQ = 'How do I choose between HDPE and PVC?';
const fiberglassFaq = lahore.faqs?.find((f) => /fiberglass/i.test(f.question));
const hailFaq = locations.islamabad.faqs?.find((f) => /hail/i.test(f.question));

export const MORE_TOPICS: TopicDef[] = [
  {
    key: 'car-porch-shades',
    path: '/car-porch-shades',
    label: 'Car Porch Shades',
    title: 'Car Porch Shades for Homes in Lahore & Islamabad | MTE',
    description:
      'Tensile car porch shades for 1–4 cars: cantilever or post-supported, HDPE, PVC or PVDF fabric, galvanized steel. Rates per sq ft and a free site survey.',
    eyebrow: 'Residential car porch',
    h1: 'Car Porch Shades for Homes',
    lead: `A car porch shade from ${company.name} keeps one to four cars out of the sun and rain with a tensile fabric roof on a galvanized steel frame. For most homes we recommend a cantilever design, so no front poles block the gate or car doors; HDPE shade cloth suits budget porches and German Mehler PVC or PVDF suits waterproof, long-life porches.`,
    ogImage: '/images/hero.jpg',
    solutionSlug: 'cantilever',
    breadcrumbParent: ['/car-parking-shades', 'Car Parking Shades'],
    blocks: [
      { kind: 'cityPrices', h2: 'Car porch shade rates', intro: 'Installed rates per square foot. HDPE is the usual choice for a residential porch; PVC and PVDF are fully waterproof.', cities: ['lahore', 'islamabad'] },
      { kind: 'solution', slug: 'cantilever', h2: 'Cantilever porch shade specifications' },
      { kind: 'projects', h2: 'Residential porch and driveway work', items: projectCards((p) => p.type === 'Residential' && /driveway|villa|porch/i.test(p.title)) },
      { kind: 'links', h2: 'Related', links: [['/cantilever-car-parking-shades', 'Cantilever car parking shades'], ['/car-parking-shade-price', 'Car parking shade price'], ['/car-parking-shades-dha-lahore', 'Car parking shades in DHA Lahore'], ['/car-parking-shades-bahria-town', 'Car parking shades in Bahria Town']] },
    ],
    faqs: pick([lahoreCostFaq, rwp2CarFaq, faqByQ(HDPE_PVC_FAQ), faqByQ(CANTI_FAQ)]),
  },
  {
    key: 'car-parking-shades-bahria-town',
    path: '/car-parking-shades-bahria-town',
    label: 'Bahria Town',
    title: 'Car Parking Shades in Bahria Town Lahore & Islamabad | MTE',
    description:
      'Cantilever car parking and porch shades in Bahria Town Lahore, Bahria Town Islamabad/Rawalpindi (Phase 1–8, Safari Valley) built to Bahria setback rules.',
    eyebrow: 'Bahria Town · Lahore & Islamabad/Rawalpindi',
    h1: 'Car Parking Shades in Bahria Town',
    lead: `${company.name} installs cantilever car parking shades and porch canopies in Bahria Town Lahore and in Bahria Town Islamabad/Rawalpindi, from Phase 1 to Phase 8 and Safari Valley. Free site surveys are available in both cities.`,
    ogImage: '/images/project_cantilever_parking.jpg',
    solutionSlug: 'cantilever',
    breadcrumbParent: ['/car-parking-shades', 'Car Parking Shades'],
    blocks: pick<TopicBlock>([
      bylaws ? { kind: 'text', h2: bylaws.title, paras: [bylaws.desc] } : undefined,
      { kind: 'cityPrices', h2: 'Rates in Bahria Town', intro: 'Bahria Town Lahore follows Lahore rates; Bahria Town Islamabad/Rawalpindi follows Rawalpindi rates.', cities: ['lahore', 'rawalpindi'] },
      { kind: 'solution', slug: 'cantilever', h2: 'Cantilever shade specifications' },
      { kind: 'links', h2: 'City pages', links: [['/car-parking-shades-lahore', 'Car parking shades in Lahore'], ['/car-parking-shades-islamabad', 'Car parking shades in Islamabad'], ['/car-parking-shades-rawalpindi', 'Car parking shades in Rawalpindi'], ['/car-porch-shades', 'Car porch shades']] },
    ]),
    faqs: pick([bahriaFaq, rwp2CarFaq, lahoreCostFaq, faqByQ(CANTI_FAQ)]),
  },
  {
    key: 'swimming-pool-shades',
    path: '/swimming-pool-shades',
    label: 'Swimming Pool & Walkway Shades',
    title: 'Swimming Pool Shades & Walkway Canopies in Pakistan | MTE',
    description:
      'Tensile swimming pool shades and covered walkways: 95%+ UV block, stainless fittings for chlorinated air, HDPE or PVDF fabric. Lahore, Islamabad, Rawalpindi.',
    eyebrow: 'Pools · Walkways · Entrances',
    h1: 'Swimming Pool Shades and Walkway Canopies',
    lead: `${sol('pool-canopies').desc}`,
    ogImage: '/images/luxury_pool.jpg',
    solutionSlug: 'pool-canopies',
    breadcrumbParent: ['/tensile-structures', 'Tensile Structures'],
    blocks: [
      { kind: 'solution', slug: 'pool-canopies', h2: 'Specifications and features' },
      { kind: 'projects', h2: 'Pool and walkway projects', items: projectCards((p) => /pool|walkway|entrance/i.test(p.title)) },
      { kind: 'cityPrices', h2: 'Rates per square foot', cities: ['lahore', 'islamabad'] },
      { kind: 'links', h2: 'By city', links: cityLinks('tensile-structures', ['lahore', 'islamabad', 'rawalpindi'], 'Tensile structures') },
    ],
    faqs: pick([faqByQ(FABRIC_FAQ), faqByQ(MAINT_FAQ), faqByQ(INSTALL_FAQ)]),
  },
  {
    key: 'tensile-marquee-structures',
    path: '/tensile-marquee-structures',
    label: 'Tensile Marquee Structures',
    title: 'Tensile Marquee & Banquet Hall Structures in Pakistan | MTE',
    description:
      'Permanent tensile marquee and banquet canopies for marriage lawns: pillar-free floors, blockout PVDF, HVAC and chandelier load points. Lahore and Islamabad.',
    eyebrow: 'Marriage lawns · Banquet halls',
    h1: 'Tensile Marquee and Banquet Structures',
    lead: `${sol('marquee-canopies').desc}`,
    ogImage: '/images/commercial.jpg',
    solutionSlug: 'marquee-canopies',
    breadcrumbParent: ['/tensile-structures', 'Tensile Structures'],
    blocks: [
      { kind: 'solution', slug: 'marquee-canopies', h2: 'Specifications and features' },
      { kind: 'links', h2: 'By city', links: cityLinks('tensile-structures', ['lahore', 'islamabad', 'rawalpindi'], 'Tensile structures') },
    ],
    faqs: pick([faqByQ(FABRIC_FAQ), faqByQ(QUOTE_FAQ), faqByQ(WARRANTY_FAQ)]),
  },
  {
    key: 'padel-court-shades',
    path: '/padel-court-shades',
    label: 'Padel Court Shades',
    title: 'Padel Court Shades & Sports Arena Roofs in Pakistan | MTE',
    description:
      'Covered padel courts and multi-sport arena roofs: clear-span steel arch trusses with weatherproof tensile membrane. 1,800 m² Lahore arena built. Free survey.',
    eyebrow: 'Padel · Futsal · Multi-sport',
    h1: 'Padel Court Shades and Sports Arena Roofs',
    lead: `${company.name} covers padel courts and multi-sport arenas with clear-span structural steel arch trusses and weatherproof tensile membrane, so play continues through summer sun and monsoon rain. Our largest sports roof so far is a 1,800 m² padel and multi-sport arena in Lahore.`,
    ogImage: '/images/project_sports_arena.jpg',
    solutionSlug: 'tensile-roofs',
    breadcrumbParent: ['/tensile-structures', 'Tensile Structures'],
    blocks: [
      { kind: 'projects', h2: 'Sports roof project', items: projectCards((p) => /padel|sport|arena/i.test(p.title)) },
      { kind: 'solution', slug: 'tensile-roofs', h2: 'Long-span tensile roof specifications' },
      { kind: 'links', h2: 'By city', links: cityLinks('tensile-structures', ['lahore', 'islamabad', 'rawalpindi'], 'Tensile structures') },
    ],
    faqs: pick([faqByQ(FABRIC_FAQ), faqByQ(INSTALL_FAQ), faqByQ(QUOTE_FAQ)]),
  },
  // ---------------- Blog ----------------
  {
    key: 'blog',
    path: '/blog',
    label: 'Blog',
    title: 'Tensile Shade & Car Parking Shade Guides | MTE Blog',
    description: 'Practical guides on car parking shade prices, fabrics, lifespan and choosing a tensile shade company in Pakistan.',
    eyebrow: 'Guides',
    h1: 'Guides: Car Parking Shades and Tensile Structures',
    lead: 'Plain answers to the questions clients in Lahore, Islamabad and Rawalpindi ask most, written by our engineering team.',
    ogImage: '/images/detail.jpg',
    blocks: [
      {
        kind: 'links',
        h2: 'Articles',
        links: [
          ['/car-parking-shade-price', 'Car Parking Shade Price in Pakistan (2026)'],
          ['/blog/pvc-vs-pvdf-vs-hdpe-tensile-fabric', 'PVC vs PVDF vs HDPE: Which Tensile Fabric Should You Choose?'],
          ['/blog/how-long-does-a-tensile-shade-last', 'How Long Does a Tensile Shade Last in Pakistan?'],
          ['/blog/how-to-choose-a-tensile-shade-company', 'How to Choose a Tensile Shade Company: 10 Checks'],
          ['/cantilever-car-parking-shades', 'Cantilever vs 4-Post Car Parking Shades'],
          ['/blog/car-parking-shade-designs-pakistan', 'Car Parking Shade Designs: 7 Types Explained'],
          ['/blog/car-parking-shade-size-guide', 'Car Parking Shade Size Guide (1, 2, 4, 10 Cars)'],
          ['/blog/tensile-vs-fiberglass-vs-polycarbonate-shades', 'Tensile vs Fiberglass vs Polycarbonate'],
          ['/blog/can-tensile-shades-survive-storms', 'Can Tensile Shades Survive Storms and Hail?'],
          ['/blog/tensile-shade-maintenance-guide', 'Tensile Shade Maintenance Guide'],
          ['/blog/car-shade-approval-dha-lda-cda', 'Do You Need DHA, LDA or CDA Approval?'],
          ['/blog/car-parking-shades-for-commercial-buildings', 'Parking Shades for Plazas, Hospitals & Societies'],
          ['/blog/what-is-a-tensile-structure', 'What Is a Tensile Structure?'],
          ['/blog/peb-vs-conventional-steel-vs-rcc-sheds', 'PEB vs Conventional Steel vs RCC'],
          ['/blog/dairy-farm-shed-design-guide', 'Dairy Farm Shed Design Guide'],
          ['/blog/car-parking-shade-price-urdu', 'کار پارکنگ شیڈ کی قیمت 2026 (اردو)'],
        ],
      },
    ],
    faqs: [],
  },
  {
    key: 'blog-fabrics',
    article: { published: '2026-11-26', updated: '2026-11-26', readMins: 5 },
    path: '/blog/pvc-vs-pvdf-vs-hdpe-tensile-fabric',
    label: 'PVC vs PVDF vs HDPE',
    title: 'PVC vs PVDF vs HDPE Tensile Fabric: Which Is Best? | MTE',
    description: 'Compare HDPE, PVC, PVDF and PTFE shade fabrics: lifespan, waterproofing, weight, fire rating and price per sq ft in Pakistan.',
    eyebrow: 'Guide · Fabrics',
    h1: 'PVC vs PVDF vs HDPE: Which Tensile Fabric Should You Choose?',
    lead: 'HDPE is the cheapest and breathable but not waterproof (7–10 years); PVC is fully waterproof and lasts 15–20 years; PVDF adds a self-cleaning top coat and lasts 20–25+ years; PTFE glass-fibre lasts 30+ years for landmark roofs. For most homes HDPE or PVC is enough; for offices, plazas and premium villas PVDF is the best long-term value.',
    ogImage: '/images/detail.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    blocks: [
      {
        kind: 'compare',
        h2: 'Fabric comparison',
        headers: ['Fabric', 'Origin', 'Lifespan', 'Weight', 'Fire rating', 'Typical uses'],
        rows: engineeringFabrics.map((f) => [f.name, f.origin, f.lifespan, f.weight, f.fire, f.uses]),
      },
      { kind: 'cityPrices', h2: 'Price per square foot by fabric (Lahore)', cities: ['lahore'] },
      {
        kind: 'bullets',
        h2: 'Which fabric for which job',
        items: [
          'Budget car porch, garden or play area where some rain can pass through: HDPE shade cloth.',
          'Home or office parking that must stay dry: German Mehler PVC.',
          'Commercial plazas, premium villas and anything you want to look new for 20+ years: PVDF.',
          'Stadiums, airports and landmark roofs: PTFE glass-fibre membrane.',
        ],
      },
    ],
    faqs: pick([faqByQ(FABRIC_FAQ), faqByQ(HDPE_PVC_FAQ), fiberglassFaq]),
  },
  {
    key: 'blog-lifespan',
    article: { published: '2026-11-26', updated: '2026-11-26', readMins: 5 },
    path: '/blog/how-long-does-a-tensile-shade-last',
    label: 'How Long Does a Tensile Shade Last',
    title: 'How Long Does a Tensile Shade Last in Pakistan? | MTE',
    description: 'Tensile shade lifespan by fabric — HDPE 7–10 years, PVC 15–20, PVDF 25+, PTFE 30+ — and how heat, UV, dust and monsoon affect it in Lahore and Islamabad.',
    eyebrow: 'Guide · Lifespan',
    h1: 'How Long Does a Tensile Shade Last in Pakistan?',
    lead: 'A well-built tensile shade lasts 7–10 years with HDPE shade cloth, 15–20 years with PVC, 25+ years with PVDF and 30+ years with PTFE. The steel frame lasts much longer than the fabric when it is hot-dip galvanized and painted, so at the end of the fabric life you usually replace only the membrane.',
    ogImage: '/images/detail.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    blocks: pick<TopicBlock>([
      { kind: 'cityPrices', h2: 'Lifespan and warranty by fabric', intro: 'Lifespan, warranty and installed rate for each fabric grade in Lahore:', cities: ['lahore'] },
      lahore.climateChallenge ? { kind: 'text', h2: "What Lahore's climate does to a shade", paras: [lahore.climateChallenge] } : undefined,
      locations.islamabad.climateChallenge ? { kind: 'text', h2: "Islamabad and Rawalpindi: storms and hail", paras: [locations.islamabad.climateChallenge] } : undefined,
      {
        kind: 'bullets',
        h2: 'How to make a shade last longer',
        items: [
          'Choose galvanized steel with a proper paint system, not plain painted pipe.',
          'Pick the fabric grade for the job — HDPE will not last like PVDF.',
          'Keep the fabric correctly tensioned; loose fabric flaps and wears in storms.',
          'Wash dust off the membrane with plain water; avoid harsh chemicals.',
          'Repair small tears early before wind makes them bigger.',
        ],
      },
    ]),
    faqs: pick([faqByQ(MAINT_FAQ), faqByQ(WARRANTY_FAQ), hailFaq]),
  },
  {
    key: 'blog-choose-company',
    article: { published: '2026-11-26', updated: '2026-11-26', readMins: 5 },
    path: '/blog/how-to-choose-a-tensile-shade-company',
    label: 'How to Choose a Tensile Shade Company',
    title: 'How to Choose a Tensile Shade Company in Pakistan: 10 Checks',
    description: 'Ten checks before you hire a car parking shade or tensile structure company in Lahore or Islamabad: fabric brand, steel spec, warranty, site survey and more.',
    eyebrow: 'Guide · Buying checklist',
    h1: 'How to Choose a Tensile Shade Company: 10 Checks',
    lead: 'Before you pay an advance for a car parking shade or tensile structure, check these ten things. They separate a shade that lasts 20 years from one that sags, leaks or rusts in two.',
    ogImage: '/images/project_cantilever_parking.jpg',
    breadcrumbParent: ['/blog', 'Blog'],
    blocks: [
      {
        kind: 'bullets',
        h2: 'The 10 checks',
        items: [
          '1. Fabric brand and grade written on the quotation (for example Mehler PVC 900 GSM or Serge Ferrari PVDF), not just "imported fabric".',
          '2. Steel specification: pipe size, schedule or thickness, and whether it is hot-dip galvanized.',
          '3. A free site visit with measurements before the final price.',
          '4. A drawing or 3D design showing column positions, height and clearance.',
          '5. A written warranty, separately for fabric and for steel, with what it excludes.',
          '6. Their own workshop, or who fabricates the steel.',
          '7. Real projects you can visit or see with location and size, not stock photos.',
          '8. Wind and rain design: ask what wind speed the structure is designed for.',
          '9. A clear payment schedule tied to fabrication and installation stages.',
          '10. After-sales service: who re-tensions or repairs the fabric later.',
        ],
      },
      {
        kind: 'text',
        h2: 'Questions to ask on the first call',
        paras: [
          'What fabric and steel will you use, and can you write both on the quote? How long will fabrication and installation take? What does the warranty cover? Can I see a recent project near my area?',
          `${company.name} answers all of these in writing with every quotation. Call or WhatsApp ${company.phoneFormatted} for a free site survey.`,
        ],
      },
    ],
    faqs: pick([faqByQ(QUOTE_FAQ), faqByQ(WARRANTY_FAQ), faqByQ('Do you visit the site before quoting?')]),
  },
];

import { ARTICLES } from './articles';
export const ALL_TOPICS: TopicDef[] = [...TOPICS, ...MORE_TOPICS, ...ARTICLES];
export const findTopic = (key?: string) => ALL_TOPICS.find((t) => t.key === key);
