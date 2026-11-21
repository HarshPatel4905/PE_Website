import { NewsCategory, NewsItem, NewsSectionRoute } from './types';

export const NEWS_CATEGORIES: NewsCategory[] = [
  'Polymer Market News',
  'Polyethylene Price Trends',
  'Global Petrochemical Industry',
  'Industrial Packaging Developments',
  'Flexible Packaging Innovation',
  'Manufacturing Technology',
  'Sustainability and Recycling',
  'Supply Chain and Logistics',
  'Australia Packaging Market',
  'International Trade and Regulation',
];

export const NEWS_ITEMS: NewsItem[] = [
  // 2026 Developments
  {
    slug: 'global-polyethylene-capacity-additions-margin-pressures-2026',
    title: 'Global Ethylene & Polyethylene Capacity Additions Shape Asian Export Pricing Dynamics',
    category: 'Polymer Market News',
    sectionRoute: 'polymer-market',
    originalPublishedDate: '2026-10-14',
    year: '2026',
    publisher: 'ICIS Chemical Business',
    sourceUrl: 'https://www.icis.com/explore/commodities/chemicals/polyethylene/',
    isHistoricalArchive: false,
    sourceReportingSummary:
      'ICIS market reporting highlights continued global polyethylene capacity expansion across Asia and North America, keeping regional operating rates competitive while naphtha feedstock volatility intermittently compresses integrated cracker margins.',
    flexoraCommentary:
      'For industrial film and bag buyers in Australia and India, ample base-resin availability supports steady supply of commodity LDPE and LLDPE grades, though specialty metallocene and high-ESCR grades remain sensitive to scheduled cracker maintenance turnarounds.',
    buyerRelevancePoints: [
      'Commodity LDPE/LLDPE lead times remain stable when planned 4–6 weeks ahead.',
      'Naphtha-to-ethylene margin swings still pass through to spot resin pricing on short notice.',
    ],
  },
  {
    slug: 'australia-packaging-reform-design-standards-2026',
    title: 'Australia Advances National Packaging Reform and Design-for-Recyclability Expectations',
    category: 'Australia Packaging Market',
    sectionRoute: 'sustainability-innovation',
    originalPublishedDate: '2026-09-22',
    year: '2026',
    publisher: 'Packaging News Australia',
    sourceUrl: 'https://www.packagingnews.com.au/',
    isHistoricalArchive: false,
    sourceReportingSummary:
      'Packaging News Australia reports ongoing industry alignment with federal packaging reform consultations, emphasising mono-material recyclability, clear material labelling, and reduced unnecessary packaging weight across commercial and industrial supply chains.',
    flexoraCommentary:
      'Industrial procurement teams supplying Australian manufacturing and building-product sites should review multi-material laminates and explore whether mono-material co-extruded PE films or downgauged LLDPE formulations can satisfy mechanical protection while simplifying end-of-life sorting.',
    buyerRelevancePoints: [
      'Mono-material PE designs simplify downstream commercial film recovery.',
      'Avoid vague "recyclable everywhere" claims—verify actual local commercial collection pathways.',
    ],
  },
  {
    slug: 'container-freight-reliability-asia-oceania-lanes-2026',
    title: 'Asia–Oceania Container Shipping Capacity and Transit Buffer Planning',
    category: 'Supply Chain and Logistics',
    sectionRoute: 'packaging-industry',
    originalPublishedDate: '2026-08-19',
    year: '2026',
    publisher: 'Reuters Maritime & Trade',
    sourceUrl: 'https://www.reuters.com/business/autos-transportation/',
    isHistoricalArchive: false,
    sourceReportingSummary:
      'Reuters trade coverage notes that shifting vessel alliance schedules and intermittent port congestion across Asian transshipment hubs continue to produce variable transit windows on Australia-bound and Indian Ocean container corridors.',
    flexoraCommentary:
      'Because flexible packaging is a critical line-stoppage item—an insulation or chemical plant cannot ship finished goods without bags or stretch hoods—buyers importing film or sacks should maintain disciplined safety stock and confirm vessel cut-off buffers per shipment.',
    buyerRelevancePoints: [
      'Factor transshipment buffer days into safety-stock reorder points.',
      'Optimise pallet footprints to maximise payload per 20 ft or 40 ft High-Cube container.',
    ],
  },
  {
    slug: 'fraunhofer-mono-material-barrier-film-research-2026',
    title: 'Fraunhofer Research Highlights Mono-Material Polyolefin Barrier Performance',
    category: 'Flexible Packaging Innovation',
    sectionRoute: 'manufacturing-technology',
    originalPublishedDate: '2026-06-11',
    year: '2026',
    publisher: 'Fraunhofer Institute (IVV)',
    sourceUrl: 'https://www.ivv.fraunhofer.de/en.html',
    isHistoricalArchive: false,
    sourceReportingSummary:
      'Fraunhofer researchers document ongoing progress in replacing mixed-polymer barrier structures with tailored polyolefin multi-layer architectures designed to preserve moisture and mechanical protection while remaining compatible with polyolefin recycling streams.',
    flexoraCommentary:
      'While specialised high-barrier films remain niche, the underlying engineering principle applies directly to industrial PE sourcing: 3-layer and 5-layer all-PE co-extrusion lets buyers tailor stiffness, puncture strength, and sealability without mixing incompatible polymers.',
    buyerRelevancePoints: [
      'All-PE co-extruded structures balance mechanical toughness and mono-polymer design.',
    ],
  },

  // 2025 Historical Industry Archive
  {
    slug: 'archive-2025-global-petrochemical-restructuring-icis',
    title: 'Industry Archive (2025): Global Petrochemical Restructuring and Regional PE Trade Flows',
    category: 'Global Petrochemical Industry',
    sectionRoute: 'polymer-market',
    originalPublishedDate: '2025-11-04',
    year: '2025',
    publisher: 'ICIS',
    sourceUrl: 'https://www.icis.com/explore/',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'ICIS coverage from late 2025 documented rationalisation of older, higher-cost European and East Asian crackers alongside rising export volumes from cost-advantaged Middle Eastern, North American, and expanded Asian petrochemical complexes.',
    flexoraCommentary:
      'Historical Industry Archive context: Structural shifts in where base ethylene and polyethylene pellets are produced directly influence which converting regions enjoy competitive virgin resin access for export films and industrial bags.',
    buyerRelevancePoints: [
      'Understanding resin origin economics helps benchmark realistic converter raw-material cost movements.',
    ],
  },
  {
    slug: 'archive-2025-lyondellbasell-circular-polymer-capacity',
    title: 'Industry Archive (2025): Expanding Mechanical and Advanced Recycled Polyolefin Supply',
    category: 'Sustainability and Recycling',
    sectionRoute: 'sustainability-innovation',
    originalPublishedDate: '2025-07-18',
    year: '2025',
    publisher: 'LyondellBasell',
    sourceUrl: 'https://www.lyondellbasell.com/en/news-events/',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'In 2025 corporate announcements, LyondellBasell detailed continued investment in mechanical sorting, washing, and compounding capacity for CirculenRecover and related recycled polyolefin grades intended for industrial and non-food packaging applications.',
    flexoraCommentary:
      'Historical Industry Archive context: As major resin producers expand industrial-grade recycled feedstocks, industrial buyers can increasingly test controlled PIR/PCR blends for thick utility sheeting, secondary shrouds, and non-critical bags—subject to strict gel and tensile testing.',
    buyerRelevancePoints: [
      'Consistent PCR compounding improves film processability over unwashed regrind.',
      'Always run trial rolls before specifying PCR in automated equipment.',
    ],
  },
  {
    slug: 'archive-2025-packaging-insights-stretch-hood-efficiency',
    title: 'Industry Archive (2025): Industrial Load Unitisation Trends Toward Elastic Stretch Hooding',
    category: 'Industrial Packaging Developments',
    sectionRoute: 'packaging-industry',
    originalPublishedDate: '2025-05-09',
    year: '2025',
    publisher: 'Packaging Insights',
    sourceUrl: 'https://www.packaginginsights.com/',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'Packaging Insights reported steady industrial adoption of automated stretch hooding systems across building-material, chemical, and palletised logistics operations seeking reduced film consumption per pallet and elimination of shrink-tunnel gas burners.',
    flexoraCommentary:
      'Historical Industry Archive context: Evaluating stretch hood films versus shrink hoods or multi-layer stretch wrap requires comparing total film weight per pallet, weather exposure, and existing plant capital equipment.',
    buyerRelevancePoints: [
      'Stretch hooding combines top-sheet weather proofing and 4-sided load stability in one film sleeve.',
    ],
  },
  {
    slug: 'archive-2025-polymerupdate-india-pe-demand-growth',
    title: 'Industry Archive (2025): India Infrastructure and Manufacturing Drive Industrial PE Film Demand',
    category: 'Polyethylene Price Trends',
    sectionRoute: 'polymer-market',
    originalPublishedDate: '2025-03-14',
    year: '2025',
    publisher: 'Polymerupdate',
    sourceUrl: 'https://www.polymerupdate.com/',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'Polymerupdate market notes from 2025 tracked robust domestic demand across India’s construction, packaging, agriculture, and industrial manufacturing sectors, alongside periodic import-parity shifts in LDPE and LLDPE film grades.',
    flexoraCommentary:
      'Historical Industry Archive context: India serves both as a rapidly expanding industrial packaging market and a major flexible film converting hub—making resin parity and converter quality discipline key factors in cross-border supply coordination.',
    buyerRelevancePoints: [
      'Strong domestic industrial activity influences converter lead times and resin allocation.',
    ],
  },

  // 2024 Historical Industry Archive
  {
    slug: 'archive-2024-reuters-red-sea-freight-polymer-delays',
    title: 'Industry Archive (2024): Maritime Route Rerouting Lengthens Asia–Europe & Intermodal Freight Times',
    category: 'Supply Chain and Logistics',
    sectionRoute: 'packaging-industry',
    originalPublishedDate: '2024-02-21',
    year: '2024',
    publisher: 'Reuters',
    sourceUrl: 'https://www.reuters.com/markets/commodities/',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'Reuters reported throughout early 2024 that vessel diversions away from the Red Sea added weeks to maritime transit schedules and triggered container equipment repositioning bottlenecks affecting chemicals, polymers, and manufactured goods.',
    flexoraCommentary:
      'Historical Industry Archive context: The 2024 shipping disruption underscored why procurement teams cannot rely on just-in-time single-source import schedules for essential industrial packaging consumables.',
    buyerRelevancePoints: [
      'Maintain dual-spec readiness and realistic ocean-transit inventory buffers.',
    ],
  },
  {
    slug: 'archive-2024-dow-exxonmobil-metallocene-downgauging',
    title: 'Industry Archive (2024): Advances in Metallocene LLDPE Enabling Film Downgauging',
    category: 'Manufacturing Technology',
    sectionRoute: 'manufacturing-technology',
    originalPublishedDate: '2024-06-27',
    year: '2024',
    publisher: 'Dow / ExxonMobil Technical Briefs',
    sourceUrl: 'https://www.exxonmobilchemical.com/en/products/polyethylene',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'Technical publications from leading resin suppliers including ExxonMobil and Dow in 2024 detailed how next-generation metallocene LLDPE grades paired with multi-layer co-extrusion enable 15–25% gauge reduction in heavy-duty sacks and stretch films without sacrificing dart impact.',
    flexoraCommentary:
      'Historical Industry Archive context: Downgauging remains one of the most practical engineering levers for lowering both packaging cost per unit and total plastic mass—provided converters possess co-extrusion control and buyers validate performance on line.',
    buyerRelevancePoints: [
      'Evaluate cost per bag or cost per m² rather than only resin price per kilogram.',
    ],
  },
  {
    slug: 'archive-2024-borealis-circular-polyolefin-traceability',
    title: 'Industry Archive (2024): Mass-Balance and Traceability Frameworks in European & Global PE',
    category: 'International Trade and Regulation',
    sectionRoute: 'sustainability-innovation',
    originalPublishedDate: '2024-09-10',
    year: '2024',
    publisher: 'Borealis / Packaging Dive',
    sourceUrl: 'https://www.packagingdive.com/',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'Industry reporting from Borealis and Packaging Dive in 2024 examined growing buyer demand for auditable recycled-content documentation, ISCC PLUS mass-balance frameworks, and clear separation between verified and unverified sustainability claims.',
    flexoraCommentary:
      'Historical Industry Archive context: Procurement teams should always request supplier batch traceability and third-party chain-of-custody records whenever recycled or mass-balance resin content is specified in tender documents.',
    buyerRelevancePoints: [
      'Require documentary chain-of-custody verification for any recycled-content specification.',
    ],
  },
  {
    slug: 'archive-2024-aust-packaging-covenant-industrial-wrap',
    title: 'Industry Archive (2024): Commercial Pallet Wrap & Industrial Film Recovery Initiatives in Australia',
    category: 'Australia Packaging Market',
    sectionRoute: 'sustainability-innovation',
    originalPublishedDate: '2024-11-12',
    year: '2024',
    publisher: 'Packaging News Australia',
    sourceUrl: 'https://www.packagingnews.com.au/',
    isHistoricalArchive: true,
    sourceReportingSummary:
      'Packaging News Australia reported on warehouse and distribution trials focused on keeping clean commercial LDPE/LLDPE pallet wraps separate from contaminated waste streams so recyclers can reprocess back-of-house commercial film.',
    flexoraCommentary:
      'Historical Industry Archive context: Clean, unprinted mono-material clear LLDPE pallet shrouds and wraps collected at distribution hubs have far higher commercial recycling viability than heavily inked or mixed-material laminates.',
    buyerRelevancePoints: [
      'Clean mono-material clear PE films preserve downstream B2B recycling value.',
    ],
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS_ITEMS.find((n) => n.slug === slug);
}

export function getNewsBySectionRoute(sectionRoute: NewsSectionRoute): NewsItem[] {
  return NEWS_ITEMS.filter((n) => n.sectionRoute === sectionRoute);
}
