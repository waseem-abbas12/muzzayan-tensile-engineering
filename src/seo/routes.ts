// Single source of truth for every public URL of the site:
// path, page id, title, meta description and structured data.
// Used by the client router, the build-time prerenderer, sitemap.xml and llms.txt.
import {
  company,
  ceo,
  solutions,
  faqCategories,
  locations,
  offices,
  processSteps,
  engineeringFabrics,
} from '../data/siteData';

export const SITE_URL = 'https://www.muzzayantensileengineering.com';
export const DEFAULT_OG_IMAGE = '/images/hero.jpg';

export type PageId =
  | 'home'
  | 'solutions'
  | 'projects'
  | 'calculator'
  | 'engineering'
  | 'process'
  | 'locations'
  | 'about'
  | 'faq'
  | 'contact'
  | 'city'
  | 'serviceCity';

export interface RouteDef {
  path: string;
  page: PageId;
  cityKey?: string;
  serviceKey?: string;
  title: string;
  description: string;
  /** Breadcrumb label */
  label: string;
  ogImage?: string;
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
}

export const CITY_KEYS = ['lahore', 'islamabad', 'rawalpindi', 'karachi'] as const;
export const cityPath = (key: string) => `/car-parking-shades-${key}`;

const staticRoutes: RouteDef[] = [
  {
    path: '/',
    page: 'home',
    label: 'Home',
    title: 'Car Parking Shades & Tensile Structures in Pakistan | MTE',
    description:
      'Cantilever car parking shades, tensile membrane roofs & industrial steel sheds in Lahore, Islamabad, Rawalpindi & Karachi. 18+ years. Free site survey.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/solutions',
    page: 'solutions',
    label: 'Shade Solutions',
    title: 'Car Parking Shades, Tensile Roofs & Steel Sheds | MTE',
    description:
      'Cantilever parking shades, tensile membrane roofs, industrial & warehouse sheds, marquee canopies and pool shades — specs, fabrics and warranty.',
    ogImage: '/images/commercial.jpg',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/projects',
    page: 'projects',
    label: 'Projects',
    title: 'Tensile & Car Parking Shade Projects in Pakistan | MTE',
    description:
      '100+ completed tensile canopies, cantilever parking bays, pool shades and industrial sheds across Lahore, Islamabad, Rawalpindi and Karachi.',
    ogImage: '/images/project_cantilever_parking.jpg',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/cost-calculator',
    page: 'calculator',
    label: 'Cost Calculator',
    title: 'Car Parking Shade Cost Calculator (PKR per sq ft) | MTE',
    description:
      'Estimate the cost of a car parking shade or tensile canopy in PKR by size, bays and fabric — HDPE, Mehler PVC, Serge Ferrari PVDF or PTFE.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/engineering',
    page: 'engineering',
    label: 'Engineering',
    title: 'Tensile Fabric Specs: PVDF vs PVC vs PTFE vs HDPE | MTE',
    description:
      'Compare German Mehler, Serge Ferrari, HDPE, PTFE and ETFE membranes — weight, lifespan, UV block and warranty — plus our steel and FEA standards.',
    ogImage: '/images/detail.jpg',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/process',
    page: 'process',
    label: 'Our Process',
    title: 'How We Build Tensile Structures: Survey to Install | MTE',
    description:
      'Free site survey, 3D CAD & FEA design, CNC fabrication with hot-dip galvanizing, and calibrated on-site tensioning — the MTE delivery process.',
    priority: 0.6,
    changefreq: 'yearly',
  },
  {
    path: '/locations',
    page: 'locations',
    label: 'Locations',
    title: 'Car Parking Shades in Lahore, Islamabad & Karachi | MTE',
    description:
      'MTE engineering teams in Lahore, Islamabad, Rawalpindi and Karachi — local service areas, offices and current per-sq-ft shade rates.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/about',
    page: 'about',
    label: 'About',
    title: 'About MTE & Founder Engr. Muzzayan Rauf | Tensile Experts',
    description:
      '18+ years of structural steel and tensile membrane experience across Saudi Arabia and Pakistan. Meet our founder and engineering principles.',
    priority: 0.6,
    changefreq: 'yearly',
  },
  {
    path: '/faq',
    page: 'faq',
    label: 'Pricing & FAQs',
    title: 'Car Parking Shade Price & Tensile FAQs (Pakistan) | MTE',
    description:
      'Per-sq-ft rates, HDPE vs PVC vs PVDF, installation time, warranty and maintenance — clear answers on tensile shades and steel sheds in Pakistan.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    page: 'contact',
    label: 'Contact',
    title: 'Contact MTE | Free Site Survey for Car Parking Shades',
    description: `Call or WhatsApp ${company.phone} for a free site survey and quote on car parking shades, tensile roofs and steel sheds anywhere in Pakistan.`,
    priority: 0.7,
    changefreq: 'yearly',
  },
];

const cityRoutes: RouteDef[] = CITY_KEYS.map((key) => {
  const c = locations[key];
  return {
    path: cityPath(key),
    page: 'city' as const,
    cityKey: key,
    label: c.name,
    title: c.metaTitle,
    description: c.metaDescription,
    priority: 0.9,
    changefreq: 'monthly' as const,
  };
});

// Priority cities get dedicated service landing pages
export const PRIORITY_CITY_KEYS = ['lahore', 'islamabad'] as const;

export interface ServiceCityDef {
  key: string;
  solutionSlug: string;
  name: string;
  ogImage: string;
  title: (city: string) => string;
  description: (city: string) => string;
}

export const SERVICE_CITY_DEFS: ServiceCityDef[] = [
  {
    key: 'tensile-structures',
    solutionSlug: 'tensile-roofs',
    name: 'Tensile Structures',
    ogImage: '/images/commercial.jpg',
    title: (c) => `Tensile Structures ${c} | Membrane Roofs & Canopies | MTE`,
    description: (c) =>
      `Tensile membrane roofs, conical canopies, walkway and pool shades in ${c} — PVDF/PTFE fabric, FEA-designed steel, in-house fabrication. Free survey.`,
  },
  {
    key: 'industrial-sheds',
    solutionSlug: 'industrial-sheds',
    name: 'Industrial Steel Sheds',
    ogImage: '/images/project_industrial_warehouse.jpg',
    title: (c) => `Industrial Sheds ${c} | Factory & Warehouse Steel Sheds | MTE`,
    description: (c) =>
      `Pre-engineered factory, warehouse and dairy steel sheds in ${c}: portal frames, PU sandwich panels, crane runway beams. Turnkey design & erection.`,
  },
];

export const serviceCityPath = (serviceKey: string, cityKey: string) => `/${serviceKey}-${cityKey}`;

const serviceCityRoutes: RouteDef[] = PRIORITY_CITY_KEYS.flatMap((cityKey) =>
  SERVICE_CITY_DEFS.map((d) => {
    const cityName = locations[cityKey].name;
    return {
      path: serviceCityPath(d.key, cityKey),
      page: 'serviceCity' as const,
      cityKey,
      serviceKey: d.key,
      label: `${d.name} ${cityName}`,
      title: d.title(cityName),
      description: d.description(cityName),
      ogImage: d.ogImage,
      priority: 0.8,
      changefreq: 'monthly' as const,
    };
  })
);

export const routes: RouteDef[] = [...staticRoutes, ...cityRoutes, ...serviceCityRoutes];

/** Old hash links (#solutions) and legacy paths → canonical route */
export const legacyHashMap: Record<string, string> = {
  solutions: '/solutions',
  projects: '/projects',
  calculator: '/cost-calculator',
  engineering: '/engineering',
  process: '/process',
  locations: '/locations',
  about: '/about',
  faq: '/faq',
  contact: '/contact',
};

export const pathForPage = (page: PageId, cityKey?: string): string => {
  if (page === 'city' && cityKey) return cityPath(cityKey);
  if (page === 'serviceCity') return '/solutions';
  return staticRoutes.find((r) => r.page === page)?.path ?? '/';
};

export const normalizePath = (path: string) => {
  const p = path.split(/[?#]/)[0].replace(/\/+$/, '');
  return p === '' ? '/' : p.toLowerCase();
};

export const findRoute = (path: string): RouteDef | undefined =>
  routes.find((r) => r.path === normalizePath(path));

// ---------------------------------------------------------------------------
// Structured data (JSON-LD)
// ---------------------------------------------------------------------------

const abs = (p: string) => (p.startsWith('http') ? p : `${SITE_URL}${p}`);
const BUSINESS_ID = `${SITE_URL}/#business`;
const PHONE_E164 = `+${company.whatsapp}`;

const allFaqs = () => faqCategories.flatMap((c) => c.faqs);

function businessNode() {
  return {
    '@type': ['LocalBusiness', 'GeneralContractor'],
    '@id': BUSINESS_ID,
    name: company.name,
    alternateName: ['MTE', 'Muzzayan Tensile Engineering (MTE)', 'MTE Tensile'],
    url: `${SITE_URL}/`,
    logo: abs('/favicon-512x512.png'),
    image: [abs('/images/hero.jpg'), abs('/images/commercial.jpg'), abs('/images/project_cantilever_parking.jpg')],
    description:
      'Muzzayan Tensile Engineering (MTE) designs, fabricates and installs cantilever car parking shades, tensile membrane roofs, swimming pool canopies, marquee structures and industrial steel sheds across Pakistan.',
    slogan: company.tagline,
    telephone: PHONE_E164,
    email: company.email,
    priceRange: 'PKR 350–3,500 per sq ft',
    currenciesAccepted: 'PKR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DHA Phase 5 Commercial, Main Boulevard',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_E164,
        contactType: 'sales',
        areaServed: 'PK',
        availableLanguage: ['English', 'Urdu'],
      },
    ],
    areaServed: [
      ...['Lahore', 'Islamabad', 'Rawalpindi', 'Karachi', 'Faisalabad', 'Multan', 'Sialkot', 'Peshawar'].map((name) => ({
        '@type': 'City',
        name,
      })),
      { '@type': 'Country', name: 'Pakistan' },
    ],
    founder: { '@type': 'Person', name: ceo.name, jobTitle: ceo.title },
    department: PRIORITY_CITY_KEYS.map((k) => branchNode(k)),
    knowsAbout: [
      'Cantilever car parking shades',
      'Tensile membrane structures',
      'PVDF and PTFE architectural fabric',
      'Pre-engineered steel buildings',
      'Industrial and warehouse sheds',
      'Swimming pool shade structures',
      'Marquee and banquet canopies',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tensile & Steel Structures',
      itemListElement: solutions.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: `${SITE_URL}/solutions#${s.slug}` },
      })),
    },
  };
}

const BRANCH_ADDRESS: Record<string, { street: string; locality: string; region: string }> = {
  lahore: { street: 'DHA Phase 5 Commercial, Main Boulevard', locality: 'Lahore', region: 'Punjab' },
  islamabad: { street: 'F-8 Markaz', locality: 'Islamabad', region: 'Islamabad Capital Territory' },
};

function branchNode(key: string) {
  const c = locations[key];
  const a = BRANCH_ADDRESS[key];
  return {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#branch-${key}`,
    name: `${company.name} — ${c.name}`,
    url: abs(cityPath(key)),
    image: abs('/images/hero.jpg'),
    telephone: PHONE_E164,
    email: company.email,
    priceRange: 'PKR 350–3,500 per sq ft',
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.locality,
      addressRegion: a.region,
      addressCountry: 'PK',
    },
    areaServed: [{ '@type': 'City', name: c.name }, ...c.serviceAreas.map((x) => ({ '@type': 'Place', name: `${x}, ${c.name}` }))],
    parentOrganization: { '@id': BUSINESS_ID },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: company.name,
    alternateName: 'MTE Tensile',
    inLanguage: 'en-PK',
    publisher: { '@id': BUSINESS_ID },
  };
}

function breadcrumbNode(route: RouteDef) {
  const items: { name: string; url: string }[] = [{ name: 'Home', url: `${SITE_URL}/` }];
  if (route.page === 'city') items.push({ name: 'Locations', url: `${SITE_URL}/locations` });
  if (route.page === 'serviceCity' && route.cityKey)
    items.push({ name: locations[route.cityKey].name, url: abs(cityPath(route.cityKey)) });
  if (route.path !== '/') items.push({ name: route.label, url: abs(route.path) });
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(route.path)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

function webPageNode(route: RouteDef) {
  const type = ['faq', 'city', 'serviceCity'].includes(route.page) ? ['WebPage', 'FAQPage'] : route.page === 'about' ? 'AboutPage' : route.page === 'contact' ? 'ContactPage' : 'WebPage';
  return {
    '@type': type,
    '@id': `${abs(route.path)}#webpage`,
    url: abs(route.path),
    name: route.title,
    description: route.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': BUSINESS_ID },
    breadcrumb: { '@id': `${abs(route.path)}#breadcrumb` },
    primaryImageOfPage: abs(route.ogImage ?? DEFAULT_OG_IMAGE),
    inLanguage: 'en-PK',
  };
}

function serviceNodes() {
  return solutions.map((s) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/solutions#${s.slug}`,
    name: s.name,
    serviceType: s.name,
    description: s.desc,
    image: abs(s.image),
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'Country', name: 'Pakistan' },
    audience: { '@type': 'Audience', audienceType: s.idealFor },
  }));
}

function cityServiceNode(key: string) {
  const c = locations[key];
  return {
    '@type': 'Service',
    '@id': `${abs(cityPath(key))}#service`,
    name: `Car parking shades & tensile structures in ${c.name}`,
    serviceType: 'Car parking shades and tensile membrane structures',
    description: c.heroSub,
    provider: { '@id': (PRIORITY_CITY_KEYS as readonly string[]).includes(key) ? `${SITE_URL}/#branch-${key}` : BUSINESS_ID },
    areaServed: [{ '@type': 'City', name: c.name }, ...c.serviceAreas.map((a) => ({ '@type': 'Place', name: `${a}, ${c.name}` }))],
    offers: c.pricingGuide.map((p) => ({
      '@type': 'Offer',
      name: p.material,
      description: `${p.bestFor}. Lifespan ${p.durability}, warranty ${p.warranty}.`,
      priceCurrency: 'PKR',
      priceSpecification: (() => {
        const nums = p.priceRange.replace(/,/g, '').match(/\d+/g)?.map(Number) ?? [];
        return {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'PKR',
          minPrice: nums[0],
          maxPrice: nums[1] ?? nums[0],
          unitText: 'per square foot',
        };
      })(),
    })),
  };
}

export function cityFaqs(cityKey: string) {
  return locations[cityKey]?.faqs ?? [];
}

export function serviceCityFaqs(serviceKey: string, cityKey: string) {
  const def = SERVICE_CITY_DEFS.find((d) => d.key === serviceKey)!;
  const sol = solutions.find((x) => x.slug === def.solutionSlug)!;
  const c = locations[cityKey];
  const areas = c.serviceAreas.slice(0, 5).join(', ');
  const common = [
    {
      question: `Do you build ${def.name.toLowerCase()} in ${c.name}?`,
      answer: `Yes. ${company.name} designs, fabricates and installs ${sol.name.toLowerCase()} across ${c.name}, including ${areas}. Our engineers offer a free site survey anywhere in ${c.name}; call or WhatsApp ${company.phoneFormatted}.`,
    },
    {
      question: `How long does a ${def.name.toLowerCase().replace(/s$/, '')} project take in ${c.name}?`,
      answer: `It depends on size. After the free survey, design and approval drawings take a few days; fabrication is done in our own workshop and on-site erection follows. We confirm a written timeline with the quotation.`,
    },
  ];
  if (def.key === 'tensile-structures') {
    common.push({
      question: `Which fabric is best for a tensile structure in ${c.name}?`,
      answer: `For long-life architectural roofs we recommend PVDF membranes such as German Mehler or French Serge Ferrari (20–25+ years), or PTFE glass-fibre (30+ years). HDPE shade cloth is a budget option for residential and play areas. ${c.climateChallenge ?? ''}`.trim(),
    });
  } else {
    common.push({
      question: `What is included in an industrial steel shed in ${c.name}?`,
      answer: `${sol.desc} Typical scope: ${sol.features.slice(0, 4).join('; ')}.`,
    });
  }
  return common;
}

function faqEntities(list: { question: string; answer: string }[]) {
  return list.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }));
}

function serviceCityNode(route: RouteDef) {
  const def = SERVICE_CITY_DEFS.find((d) => d.key === route.serviceKey)!;
  const sol = solutions.find((x) => x.slug === def.solutionSlug)!;
  const c = locations[route.cityKey!];
  return {
    '@type': 'Service',
    '@id': `${abs(route.path)}#service`,
    name: `${def.name} in ${c.name}`,
    serviceType: sol.name,
    description: sol.desc,
    image: abs(def.ogImage),
    provider: { '@id': `${SITE_URL}/#branch-${route.cityKey}` },
    areaServed: [{ '@type': 'City', name: c.name }, ...c.serviceAreas.map((a) => ({ '@type': 'Place', name: `${a}, ${c.name}` }))],
  };
}

function faqNode(route: RouteDef) {
  return {
    '@id': `${abs(route.path)}#webpage`,
    mainEntity: allFaqs().map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

function personNode() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#founder`,
    name: ceo.name,
    jobTitle: ceo.title,
    description: ceo.intro,
    worksFor: { '@id': BUSINESS_ID },
  };
}

export function buildJsonLd(route: RouteDef) {
  const graph: Record<string, unknown>[] = [businessNode(), websiteNode(), webPageNode(route), breadcrumbNode(route)];
  if (route.page === 'solutions' || route.page === 'home') graph.push(...serviceNodes());
  if (route.page === 'city' && route.cityKey) {
    graph.push(cityServiceNode(route.cityKey));
    Object.assign(graph[2], { mainEntity: faqEntities(cityFaqs(route.cityKey)) });
  }
  if (route.page === 'serviceCity' && route.cityKey && route.serviceKey) {
    graph.push(serviceCityNode(route));
    Object.assign(graph[2], { mainEntity: faqEntities(serviceCityFaqs(route.serviceKey, route.cityKey)) });
  }
  if (route.page === 'about') graph.push(personNode());
  if (route.page === 'faq') {
    // merge FAQ entities into the WebPage/FAQPage node
    const page = graph[2] as Record<string, unknown>;
    Object.assign(page, faqNode(route));
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ---------------------------------------------------------------------------
// <head> tags
// ---------------------------------------------------------------------------

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function buildHeadHtml(route: RouteDef): string {
  const url = abs(route.path === '/' ? '/' : route.path);
  const img = abs(route.ogImage ?? DEFAULT_OG_IMAGE);
  const jsonLd = JSON.stringify(buildJsonLd(route)).replace(/</g, '\\u003c');
  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(company.name)}" />`,
    `<meta property="og:locale" content="en_PK" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:alt" content="${esc(route.label)} — ${esc(company.name)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
}

// ---------------------------------------------------------------------------
// sitemap.xml + llms.txt
// ---------------------------------------------------------------------------

export function buildSitemap(lastmod: string): string {
  const urls = routes
    .map(
      (r) =>
        `  <url>\n    <loc>${abs(r.path === '/' ? '/' : r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildLlmsTxt(): string {
  const lahore = locations.lahore;
  const lines: string[] = [];
  lines.push(`# ${company.name} (MTE)`, '');
  lines.push(
    `> ${company.name} (MTE) is a Pakistani engineering company that designs, fabricates and installs cantilever car parking shades, tensile membrane roofs, swimming pool and walkway shades, marquee/banquet canopies and pre-engineered industrial steel sheds. Head office in Lahore, with teams serving Islamabad, Rawalpindi, Karachi and the rest of Pakistan.`,
    ''
  );
  lines.push('## Key facts');
  lines.push(`- Experience: ${company.experienceYears} years (founder ${ceo.name}, ${ceo.title})`);
  lines.push(`- Projects completed: ${company.projectsCompleted}`);
  lines.push(`- Structural warranty: up to ${company.warrantyYears} years`);
  lines.push(`- Phone / WhatsApp: ${company.phoneFormatted}`);
  lines.push(`- Email: ${company.email}`);
  lines.push(`- Working hours: ${company.workingHours}`);
  lines.push(`- Offices: ${offices.map((o) => `${o.city} — ${o.address}`).join('; ')}`);
  lines.push('- Free site survey and quotation anywhere in Pakistan');
  lines.push('');
  lines.push('## Services');
  for (const s of solutions) {
    lines.push(`- **${s.name}**: ${s.desc} Ideal for: ${s.idealFor}`);
  }
  lines.push('');
  lines.push('## Indicative prices in Pakistan (PKR per sq ft, installed)');
  for (const p of lahore.pricingGuide) {
    lines.push(`- ${p.material}: ${p.priceRange} — lifespan ${p.durability}, warranty ${p.warranty}. Best for: ${p.bestFor}`);
  }
  lines.push('- Final price depends on span, number of bays, steel specification and site conditions; confirmed after a free site survey.');
  lines.push('');
  lines.push('## Fabrics');
  for (const f of engineeringFabrics) {
    lines.push(
      `- ${f.name} (${f.origin}): lifespan ${f.lifespan}, weight ${f.weight}, tensile strength ${f.tensile}, fire rating ${f.fire}. Uses: ${f.uses}. ${f.features}`
    );
  }
  lines.push('');
  lines.push('## Process');
  for (const st of processSteps) {
    lines.push(`- Step ${st.num} — ${st.title} (${st.duration}): ${st.desc}`);
  }
  lines.push('');
  lines.push('## Frequently asked questions');
  for (const f of allFaqs()) lines.push(`- **${f.question}** ${f.answer}`);
  lines.push('');
  lines.push('## Pages');
  for (const r of routes) lines.push(`- [${r.label}](${abs(r.path === '/' ? '/' : r.path)}): ${r.description}`);
  lines.push('');
  return lines.join('\n');
}
