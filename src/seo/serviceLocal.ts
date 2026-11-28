// City-specific content for the service × city landing pages, so each page says
// something true and useful about that city instead of swapping the city name.

export interface ServiceLocal {
  description: string;
  lead: string;
  needsTitle: string;
  needs: string[];
  usesTitle: string;
  uses: string;
  areaFilter?: RegExp;
  faqs: { question: string; answer: string }[];
}

const LAHORE_WS = 'Salman Park, Ashiana Road, Bank Stop, Ferozepur Road, Lahore';
const ISB_WS = 'G-12/4, near Suzuki Stop, Islamabad';

export const SERVICE_LOCAL: Record<string, Record<string, ServiceLocal>> = {
  'tensile-structures': {
    lahore: {
      description:
        'Tensile membrane roofs for Lahore schools, mosques, plazas and rooftops, built at our Ferozepur Road workshop. Heat proof, waterproof fabric. Free survey.',
      lead: `Most tensile work in Lahore is shade for places where people actually stand: school assembly areas, mosque courtyards, restaurant rooftops, hospital walkways and plaza drop-offs. We cut, weld and paint every frame at our own workshop (${LAHORE_WS}), so the steel never travels far and the same team that builds it installs it.`,
      needsTitle: 'What a Lahore site needs from a tensile roof',
      needs: [
        'Heat first. June afternoons regularly cross 45°C, so we use light, high-reflectance PVC or PVDF fabric and keep enough height under the roof for hot air to escape.',
        'Monsoon run-off. July and August downpours are heavy and short. The shape needs real slope so water never ponds, and drainage points are planned together with the foundations.',
        'Smog and dust. From November the city’s dust settles on everything. Top-lacquered PVDF rinses clean in the rain or with a hose, where cheaper fabric stays grey.',
        'Approvals. In DHA, Bahria Town and LDA schemes, permanent structures are checked against setback and height rules. We prepare the drawings for this before fabrication.',
      ],
      usesTitle: 'Where we usually build in Lahore',
      uses:
        'School and college courtyards, mosque sahn shades, food courts and rooftop restaurants in Gulberg and Johar Town, walkway canopies for hospitals and offices, padel and futsal courts, and long-span parking covers for plazas and housing society markets.',
      faqs: [
        {
          question: 'Is your tensile workshop in Lahore?',
          answer: `Yes. Our head office and permanent workshop are at ${LAHORE_WS}. Fabrication happens there and our own crew installs on site.`,
        },
        {
          question: 'Can a tensile roof go on an existing rooftop in Lahore?',
          answer:
            'Usually, yes. The fabric is light, but the posts and anchors pass wind load into the slab and columns, so our engineer checks the existing structure during the free survey before proposing a design.',
        },
      ],
    },
    islamabad: {
      description:
        'Tensile roofs and canopies in Islamabad from our G-12/4 workshop, designed for heavy rain, hail and Margalla wind. Heat proof, waterproof fabric. Free survey.',
      lead: `Islamabad asks different things of a tensile roof than Lahore does. Summers are milder, but rain is heavier, spring hail is a real risk and gusts come down off the Margalla Hills. Our Islamabad workshop at ${ISB_WS} builds for the capital, so the steelwork and installation crew are local.`,
      needsTitle: 'What an Islamabad site needs from a tensile roof',
      needs: [
        'Hail and heavy rain. We tension the fabric harder and use steeper shapes so hail and water slide off instead of collecting.',
        'Wind off the hills. Frames and anchors are sized for gusts, which matters most on open plots in the outer sectors and on farmhouses.',
        'CDA and society rules. Designs stay clean and low-key to suit CDA sectors, DHA Islamabad and Bahria Town, and we prepare drawings wherever approval is needed.',
        'Winter. PVDF stays flexible in the cold, while some plastic sheets turn brittle and crack.',
      ],
      usesTitle: 'Where we usually build in Islamabad',
      uses:
        'Office and embassy drop-off canopies, farmhouse parking in Chak Shahzad and Park Road, school courtyards, restaurant terraces and walkway covers, plus parking shades for homes across the F, E and G sectors.',
      faqs: [
        {
          question: 'Where is your Islamabad workshop?',
          answer: `At ${ISB_WS}. Surveys, fabrication and installation for Islamabad and Rawalpindi are handled from there.`,
        },
        {
          question: 'Do you install during Islamabad’s rainy season?',
          answer:
            'Yes. Fabrication continues in the workshop, and site work is scheduled around dry days because new foundations need a few dry days to set before the frame goes up.',
        },
      ],
    },
    rawalpindi: {
      description:
        'Tensile roofs, porch and shopfront canopies in Rawalpindi, served from our nearby Islamabad workshop (G-12/4). Heat proof, waterproof fabric. Free survey.',
      lead: `We don’t have a separate office in Rawalpindi. Sites here are served from our Islamabad workshop at ${ISB_WS}, which is close enough that surveys, fabrication and installation run on the same schedule as our Islamabad jobs.`,
      needsTitle: 'What a Rawalpindi site needs from a tensile roof',
      needs: [
        'Older buildings. In Saddar, Cantt and the older markets, roof slabs and walls vary a lot, so we check what the posts will be fixed to before designing.',
        'Approvals. Cantonment Board areas, Bahria Town and DHA Rawalpindi each have their own rules for permanent structures. We provide drawings for the owner’s application.',
        'Monsoon and dust. Strong monsoon showers and dust from construction-heavy areas call for good slope and fabric that cleans easily.',
      ],
      usesTitle: 'Where we usually build in Rawalpindi',
      uses:
        'House porches in Bahria Town and DHA Rawalpindi, shopfront canopies in Saddar and Commercial Market, school play areas, marquee and wedding hall entrances, and gate canopies for housing societies.',
      faqs: [
        {
          question: 'Do you have an office in Rawalpindi?',
          answer: `No. Rawalpindi is served from our Islamabad workshop at ${ISB_WS}. The survey is still free and the same team fabricates and installs.`,
        },
        {
          question: 'Do I need approval for a canopy in a Cantonment area?',
          answer:
            'Often, yes, especially for permanent structures facing the road or above a set height. We prepare the drawings and can help with the application, but the approval is issued by the Cantonment Board or society.',
        },
      ],
    },
  },
  'industrial-sheds': {
    lahore: {
      description:
        'Pre-engineered factory, warehouse and dairy sheds in Lahore, fabricated at our Ferozepur Road workshop near the Kot Lakhpat industrial belt. Free survey.',
      lead: `Lahore is Punjab’s largest industrial market, and most of our shed work here is factories, warehouses and farm sheds on the city’s edges. Steel members are fabricated at our workshop (${LAHORE_WS}), close to the Ferozepur Road and Kot Lakhpat industrial belt, and trucked to site for erection.`,
      needsTitle: 'What a Lahore shed needs',
      needs: [
        'Heat inside the shed. A plain metal roof in a Lahore summer turns a factory into an oven. Insulated PU sandwich panels, ridge ventilators and good eave height make a measurable difference for workers and stock.',
        'Wide clear spans. Portal frames let you run production lines and forklifts without internal columns in the way.',
        'Expansion later. We design end walls and connections so the shed can be extended when the business grows.',
        'Approvals. Inside industrial estates the estate management approves the drawings; elsewhere it is usually the LDA or the local authority.',
      ],
      usesTitle: 'Where we usually build in Lahore',
      uses:
        'Units in Sundar Industrial Estate and Quaid-e-Azam Industrial Estate (Kot Lakhpat), factories along Multan Road, Raiwind Road and Sheikhupura Road, cold stores and warehouses, and dairy and poultry sheds on the outskirts.',
      areaFilter: /industrial|estate|sundar|raiwind/i,
      faqs: [
        {
          question: 'Can you extend an existing factory shed in Lahore?',
          answer:
            'Yes. We survey the existing columns, rafters and foundations, then design the extension to match them so the new bay joins cleanly to the old one.',
        },
        {
          question: 'Insulated panels or plain sheet for a Lahore warehouse?',
          answer:
            'For anything with people working inside or heat-sensitive stock, insulated PU sandwich panels are worth it in Lahore’s summer. Plain PPGI sheet suits open storage and vehicle sheds.',
        },
      ],
    },
    islamabad: {
      description:
        'Warehouses, workshops, cold stores and farm sheds in Islamabad, fabricated at our G-12/4 workshop. Designed for rain, hail and wind. Free survey.',
      lead: `Islamabad’s industry is small and tightly zoned, mainly the I-9 and I-10 industrial areas, with warehousing and farms around the city. So most of our sheds here are warehouses, workshops, cold stores and dairy sheds rather than heavy factories. They are fabricated at our Islamabad workshop (${ISB_WS}).`,
      needsTitle: 'What an Islamabad shed needs',
      needs: [
        'Rain and hail. Roof slope, gutters and downpipes are sized for heavy rain, and roof sheet thickness is chosen with hail in mind.',
        'Wind bracing. Open plots on the city’s edges see strong gusts, so bracing and anchor bolts are designed for them.',
        'Zoning. CDA allows industrial buildings only in designated areas, so we confirm the plot’s permitted use before design.',
      ],
      usesTitle: 'Where we usually build around Islamabad',
      uses:
        'Workshops and stores in I-9 and I-10, warehouses on the city outskirts, and dairy, poultry and equipment sheds on farms around Islamabad and the Rawalpindi district.',
      areaFilter: /industrial|i-9|i-10/i,
      faqs: [
        {
          question: 'Do you build sheds outside Islamabad city limits?',
          answer: `Yes. From our workshop at ${ISB_WS} we build across the surrounding areas and the Rawalpindi district, and anywhere else in Pakistan by arrangement.`,
        },
        {
          question: 'Can you build a cold storage shed in Islamabad?',
          answer:
            'Yes. We build the steel structure and enclose it with insulated PU sandwich panels; the refrigeration system is installed by your cooling contractor to fit our design.',
        },
      ],
    },
    rawalpindi: {
      description:
        'Industrial and dairy sheds in Rawalpindi, Rawat and the GT Road corridor, fabricated at our nearby Islamabad workshop (G-12/4). Free site survey.',
      lead: `Industrial shed work around Rawalpindi is centred on Rawat, the GT Road corridor and the farms along Adyala and Chakri Roads. We don’t have a separate Rawalpindi office: these sheds are fabricated at our Islamabad workshop (${ISB_WS}) and erected by our own crew.`,
      needsTitle: 'What a Rawalpindi shed needs',
      needs: [
        'Farm sheds that breathe. Dairy and poultry sheds need ventilation, height and easy-to-clean floors as much as a roof.',
        'Heavy-duty bays. Workshops and warehouses on GT Road often need wide doors and clear height for trucks.',
        'Rust protection. Animal sheds and open sites are hard on steel, so members are primed and painted, or galvanized where needed.',
      ],
      usesTitle: 'Where we usually build around Rawalpindi',
      uses:
        'Units in the Rawat industrial area, warehouses and workshops on GT Road, and dairy, poultry and equipment sheds on farms along Adyala Road, Chakri Road and the Rawalpindi outskirts.',
      areaFilter: /industrial|rawat|adyala/i,
      faqs: [
        {
          question: 'Do you build dairy sheds near Rawalpindi?',
          answer:
            'Yes. We design dairy sheds around the herd size, with roof height and ventilation for summer and space for feeding and cleaning lanes. See our dairy farm shed guide for the details.',
        },
        {
          question: 'Is there an MTE office in Rawalpindi?',
          answer: `No. Rawalpindi projects are run from our Islamabad workshop at ${ISB_WS}. The survey is free.`,
        },
      ],
    },
  },
};

export const getServiceLocal = (serviceKey: string, cityKey: string): ServiceLocal | undefined =>
  SERVICE_LOCAL[serviceKey]?.[cityKey];
