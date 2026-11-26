// Content for hub / topic landing pages. All facts come from siteData (prices, specs,
// projects, FAQs) so the site never contradicts itself.
import { solutions, locations, faqCategories, projects, company } from '../data/siteData';

export type TopicBlock =
  | { kind: 'text'; h2: string; paras: string[] }
  | { kind: 'bullets'; h2: string; intro?: string; items: string[] }
  | { kind: 'solution'; slug: string; h2: string }
  | { kind: 'cityPrices'; h2: string; intro?: string; cities: string[] }
  | { kind: 'compare'; h2: string; headers: string[]; rows: string[][] }
  | { kind: 'projects'; h2: string; items: { title: string; image: string; place: string; area: string; description: string }[] }
  | { kind: 'links'; h2: string; links: [string, string][] };

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

export const findTopic = (key?: string) => TOPICS.find((t) => t.key === key);
