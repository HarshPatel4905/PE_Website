import { IndustrySector } from './types';

export interface KnowledgePillar {
  id: string;
  title: string;
  summary: string;
  topics: {
    name: string;
    detail: string;
    technicalPoints: string[];
  }[];
  relatedArticleSlugs: string[];
}

export const KNOWLEDGE_PILLARS: KnowledgePillar[] = [
  {
    id: 'polymer-materials',
    title: 'Polymer Materials',
    summary:
      'Resin families, density selection, virgin vs. recycled considerations, and functional additive masterbatches.',
    topics: [
      {
        name: 'LDPE, LLDPE & HDPE',
        detail:
          'Selecting between Low-Density (0.915–0.930 g/cm³), Linear Low-Density (C4/C6/C8 & metallocene), and High-Density (0.941–0.965 g/cm³) polyethylene dictates clarity, heat-seal window, stiffness, moisture barrier, and dart impact strength.',
        technicalPoints: [
          'LDPE: Best optical clarity, soft flexibility, widest heat-sealing window.',
          'LLDPE / mLLDPE: Highest puncture, tensile elongation, and tear toughness.',
          'HDPE: Highest stiffness, temperature tolerance, and lowest moisture vapour transmission.',
        ],
      },
      {
        name: 'Virgin vs. Recycled PE (PIR / PCR)',
        detail:
          'Post-Industrial Recycled (PIR) trim provides cleaner viscosity consistency than mixed Post-Consumer Recycled (PCR). Virgin skins in co-extruded structures preserve seal reliability.',
        technicalPoints: [
          'Melt Flow Index (MFI) variability must be controlled to prevent web instability.',
          'Food-contact or regulated medical applications strictly require verified virgin resin grades.',
        ],
      },
      {
        name: 'Additives & Masterbatch',
        detail:
          'Minor additive dosing (1–5%) fundamentally alters surface behaviour and environmental longevity.',
        technicalPoints: [
          'Slip (Erucamide / Oleamide) & Anti-block (Silica): Tune film-to-metal and film-to-film COF.',
          'UV Stabilisers (HALS): Protect outdoor construction, insulation, and greenhouse films.',
          'Anti-static & Pigments: Reduce dust attraction or provide opacity/UV shielding.',
        ],
      },
    ],
    relatedArticleSlugs: [
      'ldpe-vs-lldpe-vs-hdpe-industrial-buyers-guide',
      'virgin-resin-vs-recycled-polyethylene',
    ],
  },
  {
    id: 'film-manufacturing',
    title: 'Film Manufacturing',
    summary:
      'Extrusion processes, multi-layer co-extrusion, cooling dynamics, surface treatment, flexo printing, and bag conversion.',
    topics: [
      {
        name: 'Blown Film vs. Cast Film Extrusion',
        detail:
          'Blown film uses an annular die and air cooling to achieve balanced biaxial strength, whereas cast film extrudes onto chilled rollers for high gloss and thickness precision.',
        technicalPoints: [
          'Blow-Up Ratio (BUR) and Frost-Line Height govern MD/TD orientation.',
          'Co-extrusion (3-layer / 5-layer) combines distinct core toughness with engineered skin sealability.',
        ],
      },
      {
        name: 'Slitting, Printing & Bag Conversion',
        detail:
          'Master jumbo rolls undergo precision slitting, corona discharge treatment (≥38 dynes/cm) for flexographic ink anchorage, and automated heat-seal bag conversion.',
        technicalPoints: [
          'Bottom-weld bags maximise load strength; side-weld bags enable rapid lipped opening.',
          'Inline air-venting and micro-perforation support compressible or powdery fills.',
        ],
      },
    ],
    relatedArticleSlugs: [
      'how-polyethylene-film-is-manufactured',
      'blown-film-extrusion-explained',
      'how-flexographic-printing-works-on-pe-film',
    ],
  },
  {
    id: 'technical-properties',
    title: 'Technical Properties',
    summary:
      'Micron-to-gauge conversions, tensile yield, dart impact, tear propagation, seal strength, COF, and thickness variation.',
    topics: [
      {
        name: 'Micron, Mil & Gauge Units',
        detail:
          '1 mil = 25.4 µm = 100 gauge. Confirming whether tolerances apply to average roll yield or minimum point thickness prevents costly cross-border errors.',
        technicalPoints: [
          'Area Yield (m²/kg) = 1,000 ÷ (Thickness µm × Density g/cm³).',
          'Standard blown PE tolerance typically sits around ±8% to ±12% depending on width/gauge.',
        ],
      },
      {
        name: 'Mechanical & Surface Metrics',
        detail:
          'Evaluating tensile strength, elongation, dart drop impact (ASTM D1709), Elmendorf tear (ASTM D1922), seal peel strength, and Coefficient of Friction (COF).',
        technicalPoints: [
          'Hot-tack determines warm seal survival immediately upon heavy product drop.',
          'Low COF (~0.15–0.25) aids high-speed FFS forming collars; high COF (>0.40) stabilises stacked pallets.',
        ],
      },
    ],
    relatedArticleSlugs: [
      'understanding-micron-gauge-film-thickness',
      'what-determines-strength-of-plastic-film',
      'understanding-seal-strength-puncture-resistance',
    ],
  },
  {
    id: 'quality-control',
    title: 'Quality Control',
    summary:
      'Incoming resin checks, dimensional verification, roll weight, visual screening, seal integrity, batch traceability, and pre-shipment inspection.',
    topics: [
      {
        name: 'In-Process & Finished Inspection Framework',
        detail:
          'Quality assurance spans raw polymer certificate checks through micrometer gauge profiling, roll mass verification, visual gel/defect checks, and seal-integrity sampling.',
        technicalPoints: [
          'Cross-web micrometer profiling identifies gauge bands before slitting.',
          '4-layer gusset weld checks prevent corner delamination on heavy sacks.',
          'Batch lot traceability connects every pallet to its production run and resin lot.',
        ],
      },
    ],
    relatedArticleSlugs: [
      'quality-control-industrial-flexible-packaging',
      'what-international-buyers-check-pe-film-supplier',
    ],
  },
  {
    id: 'industrial-packaging',
    title: 'Industrial Packaging',
    summary:
      'Practical application guidance across bags, jumbo rolls, pallet covers, industrial liners, and insulation compression packs.',
    topics: [
      {
        name: 'Format & Protection Selection',
        detail:
          'Matching bag style (flat, gusseted, tubular), pallet shroud vs. stretch hood, and liner geometry to product mass, sharp edges, moisture sensitivity, and transport climate.',
        technicalPoints: [
          'ISPM-15 export palletisation and moisture-shielded container loading protect film quality in transit.',
          'Golden sample retention keeps recurring shipments consistent across production runs.',
        ],
      },
    ],
    relatedArticleSlugs: [
      'how-to-select-right-pe-packaging-bag',
      'how-to-specify-industrial-liners',
      'pallet-covers-vs-stretch-hood-films',
    ],
  },
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    slug: 'building-construction-materials',
    name: 'Building & Construction Materials',
    summary:
      'Protective sheeting, palletised weather hoods, shrink wraps, and heavy-duty sacks for cementitious mixes, timber, plasterboard, masonry, and site protection.',
    packagingChallenges: [
      'Outdoor yard UV exposure and heavy rain protection for palletised stock.',
      'High-abrasion edges on timber packs, steel lintels, and masonry units.',
      'Clear regulatory separation between utility site sheeting and code-compliant vapour membranes.',
    ],
    recommendedCategories: ['construction-films', 'pallet-covers-stretch-hood', 'shrink-films'],
    keyMaterialConsiderations: ['UV-stabilised LLDPE/LDPE blends', 'Puncture-resistant heavy-gauge shrouds (80–200 µm)'],
  },
  {
    slug: 'thermal-acoustic-insulation',
    name: 'Thermal & Acoustic Insulation',
    summary:
      'High-modulus compression bags, batt sleeves, and printed FFS baling films engineered for glass wool, rockwool, and mineral fibre manufacturers.',
    packagingChallenges: [
      'Sustained 3:1 to 6:1 compression recovery force stressing film walls and gusset seams.',
      'Fibrous edge abrasion and high-speed baler air-evacuation requirements.',
      'Multi-colour R-value and installation graphic registration under stretched dimensions.',
    ],
    recommendedCategories: ['insulation-packaging', 'pallet-covers-stretch-hood', 'pe-films-jumbo-rolls'],
    keyMaterialConsiderations: ['Co-extruded C6/C8 LLDPE + LDPE skins', 'Low-creep yield strength and calibrated vent patterns'],
  },
  {
    slug: 'manufacturing-engineering',
    name: 'Manufacturing & Engineering',
    summary:
      'Clean flat part bags, continuous layflat tubing, anti-static sleeves, and heavy-duty component sacks for metal fabrication, machinery, and OEM assembly.',
    packagingChallenges: [
      'Protecting machined surfaces from moisture, dust, and shop-floor corrosion.',
      'Variable part lengths requiring flexible cut-to-length tubing without excessive SKU sprawl.',
      'Sharp corners and oily residues demanding high puncture toughness.',
    ],
    recommendedCategories: ['industrial-pe-bags', 'pe-tubing-layflat-films', 'industrial-liners'],
    keyMaterialConsiderations: ['Virgin LDPE/LLDPE blends', 'Custom layflat tubing and anti-static additives'],
  },
  {
    slug: 'warehousing-logistics',
    name: 'Warehousing & Logistics',
    summary:
      'Pallet top/bottom covers, full shrouds, stretch hood films, and transit shrink films protecting unitised cargo across domestic and maritime corridors.',
    packagingChallenges: [
      'Preventing pallet load shift, condensation damage, and dust ingress during intermodal shipping.',
      'Maintaining barcode scannability through outer weather hoods.',
      'Minimising packaging tare weight and wrapping cycle time.',
    ],
    recommendedCategories: ['pallet-covers-stretch-hood', 'shrink-films', 'industrial-liners'],
    keyMaterialConsiderations: ['Elastic mLLDPE/EVA stretch hood co-extrusions', 'High-clarity UV-protected covers'],
  },
  {
    slug: 'agriculture-horticulture',
    name: 'Agriculture & Horticulture',
    summary:
      'UV-stabilised greenhouse cladding, horticultural mulch films, silage bunker covers, and heavy-duty sacks for growing media and feed.',
    packagingChallenges: [
      'Prolonged solar UV exposure, wind uplift, and diurnal temperature cycling.',
      'Agrochemical resistance (sulphur/chlorine) on greenhouse film formulations.',
      'Heavy moisture-barrier bagging for potting mixes, fertilisers, and seeds.',
    ],
    recommendedCategories: ['agricultural-films', 'industrial-pe-bags', 'pallet-covers-stretch-hood'],
    keyMaterialConsiderations: ['HALS UV-stabilised multi-layer LDPE/LLDPE/EVA', 'Anti-drip and thermal IR modifiers'],
  },
  {
    slug: 'industrial-distribution',
    name: 'Industrial Distribution & Wholesale',
    summary:
      'Consistent multi-SKU supply coordination across builders films, layflat tubing, bin/drum liners, and standard industrial bags for regional distributors.',
    packagingChallenges: [
      'Consolidating mixed container loads across core fast-moving SKUs.',
      'Private-label roll sleeving and standardised carton/pallet barcoding.',
      'Reliable lead-time planning across international shipping lanes.',
    ],
    recommendedCategories: ['industrial-pe-bags', 'pe-tubing-layflat-films', 'construction-films'],
    keyMaterialConsiderations: ['Standardised gauge/dimension tolerances', 'Export-ready retail/trade carton packing'],
  },
  {
    slug: 'packaging-converting',
    name: 'Packaging & Converting',
    summary:
      'Corona-treated LDPE, LLDPE, and HDPE master jumbo rolls for downstream printers, laminators, and specialty bag converters.',
    packagingChallenges: [
      'Maintaining tight gauge uniformity across wide webs for high-speed press registration.',
      'Sustaining reliable dyne treatment levels through maritime transit.',
      'Preventing roll telescoping and core deformation on 500 kg+ master reels.',
    ],
    recommendedCategories: ['pe-films-jumbo-rolls', 'custom-packaging'],
    keyMaterialConsiderations: ['Custom MFI/COF profiles', '76 mm / 152 mm heavy cores and corona-treated skins'],
  },
];
