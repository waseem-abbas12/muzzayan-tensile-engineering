// Long-form, page-specific guide sections for the highest-value keyword pages.
// Rendered by <PageGuide path=…/>; the FAQs are merged into each page's visible
// FAQ list and FAQPage schema. No prices anywhere (business rule).

export interface GuideSection {
  h2: string;
  paras?: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
}
export interface PageGuideDef {
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
}

const PHONE = '0302 4001063';
const LHR_WS = 'Salman Park, Ashiana Road, Bank Stop, Ferozepur Road, Lahore';
const ISB_WS = 'G-12/4, near Suzuki Stop, Islamabad';

export const GUIDES: Record<string, PageGuideDef> = {
  '/car-parking-shades-lahore': {
    sections: [
      {
        h2: 'Types of car parking shades we build in Lahore',
        paras: [
          'Every Lahore site is different: a one-kanal house in DHA, a 5-marla house in Johar Town, a plaza on MM Alam Road and a society market all need a different kind of car shed. These are the designs we make most often, all fabricated at our Ferozepur Road workshop.',
        ],
        bullets: [
          'Cantilever car parking shade: the frame stands at the back, so there are no poles at the front of the car. Best for driveways and plazas where doors must open freely.',
          'Pole parking shed (4-post or 2-post): the simplest and strongest layout for open lawns, farmhouses and large parking lots.',
          'Wall mounted car shade: the fabric is fixed to your boundary or house wall, so no space is lost in narrow driveways and small porches.',
          'Car porch shade: a neat canopy over the porch of a house, matched to the front elevation.',
          'Double-side (butterfly) parking shade: one central row of columns covering cars on both sides, used for offices, hospitals and housing society parking.',
          'Multi-bay commercial parking sheds: long runs of shade for plazas, factories, schools and showrooms.',
        ],
        links: [
          { label: 'Cantilever car parking shades', href: '/cantilever-car-parking-shades' },
          { label: 'Car porch and wall mounted shades', href: '/car-porch-shades' },
          { label: 'Design ideas', href: '/blog/car-parking-shade-designs-pakistan' },
        ],
      },
      {
        h2: 'Which car shed suits your Lahore house?',
        bullets: [
          'Kanal and 2-kanal houses in DHA, Bahria Town, Lake City and Valencia: a cantilever shade along the driveway keeps the front clear and looks clean against modern elevations.',
          '5 to 10 marla houses in Johar Town, Wapda Town, Model Town and Gulberg: a wall mounted or compact cantilever shade fits where poles would block the car door.',
          'Plazas and offices on Main Boulevard, MM Alam Road and Ferozepur Road: double-side or multi-bay parking sheds cover more cars per column.',
          'Factories and warehouses in Sundar, Kot Lakhpat and along Raiwind and Multan Road: heavy-duty pole parking sheds for staff cars, bikes and loading vehicles.',
          'Schools, hospitals and mosques: long walkway-style shades that cover parking and the path to the building together.',
        ],
      },
      {
        h2: 'Why fabric, not metal sheet, for Lahore’s summer',
        paras: [
          'A metal or fiberglass roof absorbs the sun and radiates heat onto the car. Our international-grade tensile fabric reflects most of the sunlight instead, so the space underneath stays noticeably cooler. The fabric is heat proof and waterproof, it is quiet in monsoon rain, and it is designed for up to 20 years of service with basic care.',
          'Lahore’s smog season also matters: top-lacquered fabric sheds dust in the rain, so it keeps its colour longer than cheap cloth.',
        ],
        links: [
          { label: 'Tensile vs fiberglass vs polycarbonate', href: '/blog/tensile-vs-fiberglass-vs-polycarbonate-shades' },
          { label: 'How long a tensile shade lasts', href: '/blog/how-long-does-a-tensile-shade-last' },
        ],
      },
      {
        h2: 'How a car parking shade project runs in Lahore',
        bullets: [
          `Call or WhatsApp ${PHONE}. We book a free site survey anywhere in Lahore.`,
          'Our engineer measures the site, checks the wall, slab or ground where the frame will sit, and discusses designs and fabric colours with you.',
          'You receive a written quotation with the design. In DHA, Bahria Town and LDA schemes we prepare drawings for approval if needed.',
          `The steel frame is cut, welded and painted at our workshop (${LHR_WS}).`,
          'Our own team installs it on site. A standard residential shade is usually installed in a day.',
        ],
        links: [
          { label: 'DHA, LDA and CDA approval guide', href: '/blog/car-shade-approval-dha-lda-cda' },
          { label: 'Car parking shades in DHA Lahore', href: '/car-parking-shades-dha-lahore' },
          { label: 'Car parking shades in Bahria Town', href: '/car-parking-shades-bahria-town' },
        ],
      },
      {
        h2: 'What to check before you hire any car shade company in Lahore',
        bullets: [
          'Fabric brand and grade written in the quotation, not just “PVC”.',
          'Steel pipe size and thickness, and how the frame is painted or galvanized against rust.',
          'Foundation details: how deep, and how it is anchored to your wall or ground.',
          'Who fabricates: a company with its own workshop controls the welding and finish.',
          'Warranty on fabric and on steel, given in writing.',
        ],
        links: [{ label: 'How to choose a tensile shade company', href: '/blog/how-to-choose-a-tensile-shade-company' }],
      },
    ],
    faqs: [
      {
        question: 'Lahore mein car parking shade kitne din mein lag jata hai?',
        answer:
          'Site survey ke baad design final hote hi frame hamari Ferozepur Road workshop mein tayyar hota hai, aur ghar ka aam shade site par aksar ek din mein lag jata hai. Sahi waqt survey ke baad quotation mein likh kar dete hain.',
      },
      {
        question: 'Wall mounted car shade aur pole parking shed mein kya farq hai?',
        answer:
          'Wall mounted shade aap ki deewar ke saath fix hota hai, is liye tang driveway mein jagah bachti hai. Pole parking shed apne poles par khara hota hai aur khuli jagah, lawn ya bari parking ke liye behtar hai.',
      },
      {
        question: 'Do you cover all areas of Lahore?',
        answer:
          'Yes. We work across Lahore, including DHA, Bahria Town, Gulberg, Johar Town, Model Town, Lake City, Valencia, Wapda Town, Cantt and the industrial areas, with a free site survey everywhere.',
      },
    ],
  },

  '/car-parking-shades-islamabad': {
    sections: [
      {
        h2: 'Types of car parking shades we build in Islamabad',
        paras: [
          `All Islamabad shades are fabricated at our own workshop at ${ISB_WS}, and installed by the same team. The most requested designs in the capital are:`,
        ],
        bullets: [
          'Cantilever car parking shade with no front poles, for houses in the F, E and G sectors and for office drop-offs.',
          'Pole parking shed for farmhouses in Chak Shahzad, Park Road and Bani Gala, and for large open parking.',
          'Wall mounted car shade for narrow driveways where a pole would block the car door.',
          'Car porch shade designed to match the front elevation, popular in DHA Islamabad and Bahria Town.',
          'Double-side and multi-bay parking sheds for offices, hospitals, schools and housing societies.',
        ],
        links: [
          { label: 'Cantilever car parking shades', href: '/cantilever-car-parking-shades' },
          { label: 'Car porch and wall mounted shades', href: '/car-porch-shades' },
        ],
      },
      {
        h2: 'Built for Islamabad weather: rain, hail and Margalla wind',
        paras: [
          'Islamabad gets heavier rain than Lahore and occasional spring hail, and gusts come down off the Margalla Hills. We give the fabric a proper slope and higher tension so water and hail slide off instead of collecting, and size the frame and anchors for wind.',
          'The fabric is international grade, heat proof and waterproof, and designed for up to 20 years of service. Unlike fiberglass sheet, it does not crack in winter cold or under hail.',
        ],
        links: [{ label: 'Can tensile shades survive storms?', href: '/blog/can-tensile-shades-survive-storms' }],
      },
      {
        h2: 'Which shade suits your Islamabad property?',
        bullets: [
          'F-6, F-7, F-8, F-10 and F-11 houses: a slim cantilever or wall mounted shade that keeps the elevation clean.',
          'E-7, E-11, G-10, G-11, G-13 and G-15: compact cantilever or 2-post shades for one or two cars.',
          'DHA Islamabad and Bahria Town: porch and cantilever designs drawn to suit society rules.',
          'Gulberg Greens, Chak Shahzad and Park Road farmhouses: pole parking sheds for several cars, tractors and SUVs.',
          'Blue Area offices, I-9 and I-10 industrial units: multi-bay parking and loading-area shades.',
        ],
      },
      {
        h2: 'CDA and society approvals',
        paras: [
          'In CDA sectors, DHA Islamabad and Bahria Town, a permanent structure in front of the house can need permission and must respect setback and height rules. We design within these rules and prepare drawings when an application is needed.',
        ],
        links: [{ label: 'DHA, LDA and CDA approval guide', href: '/blog/car-shade-approval-dha-lda-cda' }],
      },
    ],
    faqs: [
      {
        question: 'Islamabad mein aap ki workshop kahan hai?',
        answer: `Hamari Islamabad workshop ${ISB_WS} par hai. Islamabad aur Rawalpindi ka survey, fabrication aur installation yahin se hota hai.`,
      },
      {
        question: 'Kya car parking shade Islamabad ki barish aur olay (hail) bardasht kar leta hai?',
        answer:
          'Ji haan. Fabric ko sahi dhalwan aur zyada tension ke saath lagaya jata hai taake pani aur olay ruk na sakein, aur fabric waterproof hai. Fiberglass ki tarah olon se toot ta nahi.',
      },
      {
        question: 'Do you install car shades in Rawalpindi too?',
        answer:
          'Yes. Rawalpindi, including Bahria Town, DHA Rawalpindi, Cantt, Saddar and Chaklala, is served from our Islamabad workshop with a free site survey.',
      },
    ],
  },

  '/car-parking-shades-rawalpindi': {
    sections: [
      {
        h2: 'Car parking sheds for Rawalpindi homes, shops and societies',
        paras: [
          `Rawalpindi projects are run from our Islamabad workshop at ${ISB_WS}, close enough for quick surveys and installation by our own crew.`,
        ],
        bullets: [
          'Bahria Town Phase 1–8 and DHA Rawalpindi: cantilever and porch shades designed to suit society rules.',
          'Saddar, Commercial Market and Satellite Town: shopfront and parking canopies for shops and plazas.',
          'Westridge, Chaklala and Askari housing: wall mounted shades for tighter driveways.',
          'Adyala Road, Chakri Road and GT Road: pole parking sheds for farmhouses, marquees and workshops.',
        ],
        links: [
          { label: 'Car parking shades in Bahria Town', href: '/car-parking-shades-bahria-town' },
          { label: 'Tensile structures in Rawalpindi', href: '/tensile-structures-rawalpindi' },
          { label: 'Industrial sheds in Rawalpindi', href: '/industrial-sheds-rawalpindi' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Rawalpindi mein car shed ka survey free hai?',
        answer: `Ji haan. Rawalpindi mein kahin bhi site survey free hai. Call ya WhatsApp karein: ${PHONE}.`,
      },
    ],
  },

  '/industrial-sheds-lahore': {
    sections: [
      {
        h2: 'Industrial sheds we build in Lahore',
        bullets: [
          'Factory sheds with wide clear spans for production lines, machines and overhead cranes.',
          'Warehouse sheds with high eaves, large doors and racking-friendly layouts.',
          'PEB (pre-engineered) steel buildings designed to use only as much steel as the loads need.',
          'Dairy and cattle sheds with height and ventilation for Lahore’s summer.',
          'Cold storage and insulated sheds with PU sandwich panels.',
          'Parking and loading-bay sheds for trucks, staff cars and bikes.',
        ],
        links: [
          { label: 'PEB vs conventional steel vs RCC', href: '/blog/peb-vs-conventional-steel-vs-rcc-sheds' },
          { label: 'Dairy farm shed design guide', href: '/blog/dairy-farm-shed-design-guide' },
          { label: 'All industrial sheds', href: '/industrial-sheds' },
        ],
      },
      {
        h2: 'What decides the cost of an industrial shed in Lahore',
        paras: [
          'We don’t publish rates because two sheds of the same size can need very different steel. The quotation depends on:',
        ],
        bullets: [
          'Covered area, clear span (width without columns) and eave height.',
          'Crane loads, mezzanine floors or heavy equipment hanging from the roof.',
          'Roof and wall cladding: plain PPGI sheet or insulated PU sandwich panels.',
          'Soil and foundation design, and whether old foundations can be reused.',
          'Doors, ventilators, skylights, gutters and any expansion planned later.',
        ],
      },
      {
        h2: 'How a shed project runs',
        bullets: [
          'Free site survey and discussion of your process, machines and stock.',
          'Structural design and drawings, ready for estate or authority approval.',
          `Fabrication at our Lahore workshop (${LHR_WS}), close to the Ferozepur Road and Kot Lakhpat industrial belt.`,
          'Foundations, erection, cladding and finishing on site by our own team.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Lahore mein factory shed ya warehouse shed ka quotation kaise milta hai?',
        answer: `Pehle free site survey hota hai jis mein area, span, height aur aap ki zaroorat dekhi jati hai. Phir design ke saath likhit quotation milta hai. Call ya WhatsApp: ${PHONE}.`,
      },
      {
        question: 'Do you build PEB steel buildings in Lahore?',
        answer:
          'Yes. We design and fabricate pre-engineered steel buildings for factories, warehouses and cold stores in Lahore and across Punjab, with fabrication at our Ferozepur Road workshop.',
      },
    ],
  },

  '/industrial-sheds-islamabad': {
    sections: [
      {
        h2: 'Industrial and farm sheds we build around Islamabad',
        bullets: [
          'Warehouses and stores in I-9, I-10 and on the city outskirts.',
          'Workshops with wide doors and clear height for vehicles and machinery.',
          'Cold storage sheds enclosed with insulated PU sandwich panels.',
          'Dairy, poultry and equipment sheds on farms around Islamabad and the Rawalpindi district.',
          'Steel structures for schools, sports halls and parking.',
        ],
        links: [
          { label: 'Industrial sheds in Rawalpindi', href: '/industrial-sheds-rawalpindi' },
          { label: 'Dairy farm shed design guide', href: '/blog/dairy-farm-shed-design-guide' },
        ],
      },
      {
        h2: 'What decides the cost of a shed in Islamabad',
        bullets: [
          'Area, span, eave height and roof slope.',
          'Roof sheet thickness chosen with rain and hail in mind, or insulated panels.',
          'Wind bracing and anchor bolts for open plots.',
          'Foundations for the soil on your plot.',
        ],
        paras: [`Every quotation follows a free site survey. Our Islamabad workshop is at ${ISB_WS}.`],
      },
    ],
    faqs: [
      {
        question: 'Islamabad ke bahar bhi shed banate hain?',
        answer:
          'Ji haan. Islamabad ke ird gird, Rawalpindi district aur Pakistan mein kahin bhi shed bana sakte hain. Survey ke liye 0302 4001063 par rabta karein.',
      },
    ],
  },

  '/tensile-structures-lahore': {
    sections: [
      {
        h2: 'Tensile structures we build in Lahore',
        bullets: [
          'Car parking shades and long-span parking sheds.',
          'School assembly and play-area shades.',
          'Mosque courtyard (sahn) shades.',
          'Rooftop restaurant, café and food court canopies.',
          'Swimming pool shades for homes, clubs and hotels.',
          'Walkway and entrance canopies for hospitals, offices and plazas.',
          'Tensile marquee structures for wedding venues.',
          'Padel, futsal and sports court shades.',
        ],
        links: [
          { label: 'Swimming pool shades', href: '/swimming-pool-shades' },
          { label: 'Tensile marquee structures', href: '/tensile-marquee-structures' },
          { label: 'Padel court shades', href: '/padel-court-shades' },
        ],
      },
      {
        h2: 'Choosing the right fabric',
        paras: [
          'For most Lahore projects we recommend a coated PVC or PVDF membrane: heat proof, waterproof and designed for up to 20 years. HDPE shade cloth is a lighter, breathable option for play areas and nurseries, but it is not waterproof. We show you samples during the survey.',
        ],
        links: [{ label: 'PVC vs PVDF vs HDPE fabric', href: '/blog/pvc-vs-pvdf-vs-hdpe-tensile-fabric' }],
      },
    ],
    faqs: [
      {
        question: 'Tensile shed aur tensile structure mein kya farq hai?',
        answer:
          'Dono ek hi cheez ke naam hain: steel frame par khinch kar lagaya gaya fabric. Log chhoti cheez (car shade, porch) ko aksar \"tensile shed\" kehte hain aur bare roof ya canopy ko \"tensile structure\".',
      },
    ],
  },

  '/tensile-structures-islamabad': {
    sections: [
      {
        h2: 'Tensile structures we build in Islamabad',
        bullets: [
          'Office, embassy and hotel drop-off canopies.',
          'Farmhouse parking and outdoor event shades.',
          'School courtyards and play areas.',
          'Restaurant terraces and rooftop canopies.',
          'Swimming pool shades and walkway covers.',
          'Padel and sports court canopies.',
        ],
        links: [
          { label: 'Car parking shades in Islamabad', href: '/car-parking-shades-islamabad' },
          { label: 'Padel court shades', href: '/padel-court-shades' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Is tensile fabric suitable for Islamabad winters?',
        answer:
          'Yes. Coated PVC and PVDF membranes stay flexible in the cold and shed rain and hail when they are properly sloped and tensioned.',
      },
    ],
  },

  '/car-parking-shades': {
    sections: [
      {
        h2: 'Car parking shade types compared',
        bullets: [
          'Cantilever: no front poles, cleanest look, needs strong foundations at the back.',
          'Pole parking (2-post or 4-post): simple, strong and easy to extend for more cars.',
          'Wall mounted: fixed to a wall, saves space in narrow driveways.',
          'Car porch canopy: designed around the front elevation of a house.',
          'Double-side (butterfly): one row of columns covering cars on both sides.',
          'Multi-bay commercial: long shaded rows for plazas, offices, hospitals and factories.',
        ],
      },
      {
        h2: 'Where we work',
        paras: [
          `Our head office and workshop are on Ferozepur Road, Lahore, and our second workshop is at ${ISB_WS}. We install car parking shades across Pakistan.`,
        ],
        links: [
          { label: 'Car parking shades Lahore', href: '/car-parking-shades-lahore' },
          { label: 'Car parking shades Islamabad', href: '/car-parking-shades-islamabad' },
          { label: 'Car parking shades Rawalpindi', href: '/car-parking-shades-rawalpindi' },
          { label: 'Car parking shades Karachi', href: '/car-parking-shades-karachi' },
        ],
      },
      {
        h2: 'Size planning',
        paras: [
          'As a rule of thumb, plan about 3 m of width and 5.5 m of depth per car (roughly 180 sq ft), a little more for SUVs. Leave extra width where doors open next to a wall or pole. Our size guide explains layouts for 1, 2, 4 and 10 cars.',
        ],
        links: [{ label: 'Car parking shade size guide', href: '/blog/car-parking-shade-size-guide' }],
      },
    ],
    faqs: [
      {
        question: 'Car parking shade ka fabric kitne saal chalta hai?',
        answer:
          'Hamara international fabric heat proof aur waterproof hai aur theek dekh bhaal ke saath takreeban 20 saal tak chalne ke liye banaya gaya hai.',
      },
    ],
  },

  '/car-parking-shade-price': {
    sections: [
      {
        h2: 'Why we quote after a site survey',
        paras: [
          'A rate per square foot sounds simple, but two shades of the same size can cost very differently. A cantilever needs heavier steel and deeper foundations than a 4-post shade; a wall mounted shade depends on the wall it is fixed to; and fabric grades differ in life and colour fastness. A free survey lets us price your exact site, so the quotation does not change halfway through the job.',
        ],
      },
      {
        h2: 'How to compare two quotations fairly',
        bullets: [
          'Same covered area? Check length and width, not only the number of cars.',
          'Same fabric? Compare the brand, grade and colour, not just the word “PVC”.',
          'Same steel? Compare pipe sizes, thickness and paint or galvanizing.',
          'Foundations and civil work included or extra?',
          'Installation, transport and approval drawings included?',
          'Warranty on fabric and on steel, in writing.',
        ],
        links: [
          { label: 'Get a free survey', href: '/contact' },
          { label: 'Urdu guide', href: '/blog/car-parking-shade-price-urdu' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Car parking shade ki qeemat kin cheezon par depend karti hai?',
        answer:
          'Area, design (cantilever, pole ya wall mounted), fabric ki quality, steel ki motai aur foundation par. Isi liye hum free survey ke baad likhit quotation dete hain.',
      },
    ],
  },

  '/cantilever-car-parking-shades': {
    sections: [
      {
        h2: 'Where a cantilever shade makes sense',
        bullets: [
          'Driveways where front poles would block the car door or the gate.',
          'Plaza and office drop-offs where cars turn in and out all day.',
          'Houses with modern elevations where a clean look matters.',
          'Parking along a boundary wall, with the frame at the back.',
        ],
        paras: [
          'Because all the load is carried from one side, a cantilever needs stronger steel and a properly designed foundation. Our engineer checks the ground or slab during the free survey before we propose the design.',
        ],
        links: [
          { label: 'Cantilever shades in Lahore', href: '/car-parking-shades-lahore' },
          { label: 'Cantilever shades in Islamabad', href: '/car-parking-shades-islamabad' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Cantilever shade mein aage pole kyun nahi hota?',
        answer:
          'Cantilever ka poora frame peeche ki taraf mazboot columns aur foundation par khara hota hai, aur fabric aage ki taraf hawa mein latka hota hai. Is liye gari ke aage koi pole nahi aata.',
      },
    ],
  },

  '/car-porch-shades': {
    sections: [
      {
        h2: 'Wall mounted vs free-standing porch shades',
        paras: [
          'A wall mounted car porch shade is fixed to the house or boundary wall with brackets, so it needs no poles in a narrow driveway. A free-standing porch shade has its own posts and suits open fronts or where the wall cannot take the load. We check the wall during the survey and recommend the safer option.',
        ],
        links: [
          { label: 'Car porch shades in Lahore', href: '/car-parking-shades-lahore' },
          { label: 'Car porch shades in Islamabad', href: '/car-parking-shades-islamabad' },
        ],
      },
    ],
    faqs: [
      {
        question: 'Kya 5 marla ghar mein car porch shade lag sakta hai?',
        answer:
          'Ji haan. Chhote gharon mein aksar wall mounted shade lagaya jata hai jo deewar ke saath fix hota hai aur driveway mein jagah nahi gherta.',
      },
    ],
  },

  '/car-parking-shades-dha-lahore': {
    sections: [
      {
        h2: 'Designs that suit DHA Lahore houses',
        bullets: [
          'Kanal houses: a cantilever shade along the driveway, so the front stays open.',
          'Corner plots: L-shaped or two-sided shades following the boundary wall.',
          '10-marla houses: compact cantilever or wall mounted shades.',
          'Commercial areas: multi-bay parking for offices and shops.',
        ],
        paras: [
          `Our Lahore workshop on Ferozepur Road (${LHR_WS}) is a short drive from the DHA phases, so surveys and installation are quick.`,
        ],
        links: [{ label: 'Approval guide for DHA', href: '/blog/car-shade-approval-dha-lda-cda' }],
      },
    ],
    faqs: [],
  },

  '/car-parking-shades-bahria-town': {
    sections: [
      {
        h2: 'Bahria Town Lahore, Islamabad and Rawalpindi',
        paras: [
          'Bahria Town Lahore is served from our Ferozepur Road workshop, and Bahria Town Islamabad and Rawalpindi from our G-12/4 Islamabad workshop. Designs are kept within the society’s rules for front structures.',
        ],
        links: [
          { label: 'Car parking shades Lahore', href: '/car-parking-shades-lahore' },
          { label: 'Car parking shades Rawalpindi', href: '/car-parking-shades-rawalpindi' },
        ],
      },
    ],
    faqs: [],
  },

  '/industrial-sheds': {
    sections: [
      {
        h2: 'Types of industrial sheds',
        bullets: [
          'Factory sheds with clear spans and crane beams.',
          'Warehouse and logistics sheds.',
          'PEB (pre-engineered) steel buildings.',
          'Dairy, cattle and poultry sheds.',
          'Cold storage and insulated sheds.',
          'Parking, loading-bay and equipment sheds.',
        ],
        links: [
          { label: 'Industrial sheds Lahore', href: '/industrial-sheds-lahore' },
          { label: 'Industrial sheds Islamabad', href: '/industrial-sheds-islamabad' },
          { label: 'Industrial sheds Rawalpindi', href: '/industrial-sheds-rawalpindi' },
        ],
      },
      {
        h2: 'What decides the cost',
        bullets: [
          'Area, clear span and eave height.',
          'Crane and equipment loads.',
          'Plain PPGI sheet or insulated sandwich panels.',
          'Foundations and soil.',
          'Doors, ventilation, skylights and gutters.',
        ],
        paras: ['We quote after a free site survey, with the design and steel specifications in writing.'],
      },
    ],
    faqs: [
      {
        question: 'Industrial shed kitne arse mein ban jata hai?',
        answer:
          'Ye size par depend karta hai. Survey aur design ke baad steel workshop mein tayyar hota hai aur phir site par khara kiya jata hai. Likhit timeline quotation ke saath milti hai.',
      },
    ],
  },

  '/tensile-structures': {
    sections: [
      {
        h2: 'Where tensile structures are used',
        bullets: [
          'Car parking shades and porches.',
          'Schools, mosques and hospitals.',
          'Restaurants, rooftops and food courts.',
          'Swimming pools, padel and sports courts.',
          'Marquees, event venues and walkways.',
        ],
        links: [
          { label: 'Tensile structures Lahore', href: '/tensile-structures-lahore' },
          { label: 'Tensile structures Islamabad', href: '/tensile-structures-islamabad' },
          { label: 'Tensile structures Rawalpindi', href: '/tensile-structures-rawalpindi' },
          { label: 'What is a tensile structure?', href: '/blog/what-is-a-tensile-structure' },
        ],
      },
    ],
    faqs: [],
  },
};

export const getGuide = (path: string): PageGuideDef | undefined => GUIDES[path];
export const guideFaqs = (path: string) => GUIDES[path]?.faqs ?? [];
