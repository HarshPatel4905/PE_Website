import { ProductCategory } from './types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'pe-films-jumbo-rolls',
    name: 'Polyethylene Films & Jumbo Rolls',
    shortTitle: 'PE Films & Jumbo Rolls',
    tagline: 'Mono-layer and co-extruded LDPE, LLDPE, and HDPE rolls engineered for industrial conversion and automated wrapping.',
    imageKey: 'pe_films',
    overview:
      'Polyethylene jumbo rolls and industrial sheeting form the foundational substrate for downstream packaging conversion, automated form-fill-seal lines, laminators, and surface protection workflows. FLEXORA coordinates sourcing across LDPE, LLDPE, HDPE, and tailored resin blends matched to machine tension, optical, and barrier requirements.',
    technicalScope: [
      'LDPE, LLDPE, mLLDPE, and HDPE resin formulations',
      'Mono-layer and 3-layer / 5-layer co-extruded film structures',
      'Plain, tinted, UV-stabilised, anti-static, or corona-treated surfaces',
      'Custom roll widths, outer diameters, roll weights, and 76 mm / 152 mm cores',
      'Flexographic surface or reverse printing compatibility',
    ],
    keyEvaluationParameters: [
      'Nominal thickness (µm) and cross-web gauge tolerance',
      'Melt Flow Index (MFI) and density matching machine line speed',
      'Coefficient of friction (COF) — high-slip, medium-slip, or non-slip',
      'Corona treatment level (dynes/cm) where printing or lamination is specified',
    ],
  },
  {
    slug: 'industrial-pe-bags',
    name: 'Industrial PE Bags & Sacks',
    shortTitle: 'Industrial PE Bags',
    tagline: 'Flat, gusseted, perforated, and heavy-duty polyethylene bags converted for bulk material containment and manufacturing lines.',
    imageKey: 'industrial_bags',
    overview:
      'Converted polyethylene bags and heavy-duty sacks protect dry powders, polymer granules, components, fasteners, and manufactured assemblies against moisture, dust, and transit abrasion. Specification-led sourcing ensures seal geometry, gusset expansion, and film toughness match filling weight and handling methods.',
    technicalScope: [
      'Flat open-mouth bags, side-gusseted bags, and bottom-gusseted sacks',
      'Bottom-weld, side-weld, and twin-seal heavy-duty configurations',
      'Perforated bags on roll or loose-packed in cartons/bales',
      'Up to multi-colour flexographic branding, batch coding, and handling warnings',
      'Air-venting micro-perforations or punched vent holes for compressible goods',
    ],
    keyEvaluationParameters: [
      'Internal bag dimensions (width × length) plus gusset depth',
      'Seal integrity under drop, compression, and thermal load',
      'Dart impact and tear resistance relative to product sharp edges or mass',
      'Slip and anti-block properties for manual or automated bag opening',
    ],
  },
  {
    slug: 'insulation-packaging',
    name: 'Insulation Packaging',
    shortTitle: 'Insulation Packaging',
    tagline: 'High-toughness compression bags, batt sleeves, and roll films designed for glass wool, rockwool, and mineral wool producers.',
    imageKey: 'insulation_batt_single',
    galleryImageKeys: ['insulation_batt_single', 'insulation_batt_pallet', 'insulation_pack'],
    overview:
      'Thermal and acoustic insulation products undergo high compression ratios during baling and continuous recovery stress throughout warehousing and multi-leg transport. Packaging films and bags must combine high tensile strength, controlled elastic recovery, puncture resilience, and reliable heat-seal strength.',
    technicalScope: [
      'Glass wool compression bags and multi-pack batt sleeves',
      'Rockwool and stone wool heavy-duty packaging bags and roll wraps',
      'High-modulus LLDPE / LDPE co-extruded compression structures',
      'High-opacity pigmented or clear high-clarity print-ready films',
      'Custom gusset geometry and precision vent-hole patterns for air evacuation',
    ],
    keyEvaluationParameters: [
      'Compression ratio and sustained hoop/seal stress resistance',
      'Puncture and tear resistance against fibrous mineral wool edges',
      'UV stabilisation for temporary outdoor construction-site storage',
      'Print registration and ink adhesion for brand and R-value labelling',
    ],
  },
  {
    slug: 'pallet-covers-stretch-hood',
    name: 'Pallet Covers & Stretch Hood Films',
    shortTitle: 'Pallet Covers & Hoods',
    tagline: 'Protective pallet top sheets, full shrouds, and tubular stretch hood films for unitised load stability and weather shielding.',
    imageKey: 'logistics_export',
    overview:
      'Unitised pallets moving through domestic distribution centres or intermodal export lanes face rain, UV exposure, dust, and load-shift forces. FLEXORA coordinates sourcing for conventional loose pallet covers, gusseted shroud bags, and machine-grade stretch hood films engineered for automated hooding equipment.',
    technicalScope: [
      'Pallet top sheets and bottom dust-barrier sheets (perforated on roll)',
      'Full-length gusseted PE pallet cover shrouds',
      'Co-extruded stretch hood films with high elastic holding force',
      'UV-stabilised formulations for outdoor yard storage',
      'Custom dimensions suited to Australian (1165 × 1165 mm), Euro, and ISO pallets',
    ],
    keyEvaluationParameters: [
      'Pallet footprint, stack height, and corner load profile',
      'Elastic recovery and holding force vs. shrink-fit requirements',
      'Seal strength along hood top weld during high-speed stretching',
      'Moisture barrier and UV duration target',
    ],
  },
  {
    slug: 'shrink-films',
    name: 'Shrink Films & Protective Packaging',
    shortTitle: 'Shrink Films',
    tagline: 'Biaxially and mono-axially oriented polyethylene shrink films for collation bundling, heavy unit loads, and transit protection.',
    imageKey: 'hero_rolls',
    overview:
      'Polyethylene shrink films conform tightly around irregular products, multipacks, building materials, and pallet loads when passed through heat tunnels or shrink frames. Controlled machine-direction (MD) and transverse-direction (TD) shrink ratios ensure uniform tension without distorting fragile goods.',
    technicalScope: [
      'Collated bundling shrink film for cans, cartons, and manufactured packs',
      'Heavy-duty pallet shrink hoods and industrial transit shrink film',
      'Balanced MD/TD or directional shrink ratios',
      'Slip-modified formulations to prevent film-to-film sticking in heat tunnels',
      'Clear, tinted, or printed protective transit films',
    ],
    keyEvaluationParameters: [
      'MD/TD free-shrink percentage at specified tunnel temperatures',
      'Shrink tension and cold-holding force after cooling',
      'Burn-through resistance and seal strength under heat load',
      'Thickness uniformity across film web width',
    ],
  },
  {
    slug: 'industrial-liners',
    name: 'Industrial Liners',
    shortTitle: 'Industrial Liners',
    tagline: 'Drum, carton, octabin, bulk container, and FIBC liners providing clean product isolation and moisture protection.',
    imageKey: 'industrial_bags',
    overview:
      'Industrial liners create an internal barrier between bulk powders, chemicals, resins, food-contact-adjacent dry ingredients (where formally specified), or pastes and their outer rigid or woven containers. Tailored liner geometry prevents bridging during discharge and lowers outer container contamination.',
    technicalScope: [
      '200 L / 205 L open-head and tight-head drum liners (flat or round-bottom)',
      'Carton, gaylord, and octabin box liners',
      '20 ft and 40 ft dry bulk sea-container liners (subject to spec confirmation)',
      'FIBC / bulk bag liners (tubular, form-fit, or spouted)',
      'Virgin resin, anti-static, or moisture-barrier multi-layer options',
    ],
    keyEvaluationParameters: [
      'Outer vessel internal geometry and filling/discharge spout arrangement',
      'Chemical compatibility and temperature resistance during hot-fill or ambient fill',
      'Weld strength under hydrostatic or bulk granular load',
      'Cleanliness and resin documentation requirements',
    ],
  },
  {
    slug: 'construction-films',
    name: 'Construction & Building Films',
    shortTitle: 'Construction Films',
    tagline: 'General-purpose builders film, concrete-curing sheets, temporary protection films, and specification-verified membrane substrates.',
    imageKey: 'hero_rolls',
    overview:
      'Construction and building supply chains consume large volumes of polyethylene sheeting for site protection, concrete slab underlay, temporary weather enclosures, and surface masking. FLEXORA clearly distinguishes general-purpose utility sheeting from engineered barrier membranes requiring formal regional standard compliance.',
    technicalScope: [
      'General-purpose builders film and site protection sheeting',
      'Concrete-curing and slab-underlay polyethylene sheets',
      'Temporary scaffolding, window, and joinery protective films',
      'Damp-proof membrane (DPM) substrates sourced strictly to verified project specifications',
      'High-impact black, natural, orange, or blue coded sheeting rolls',
    ],
    keyEvaluationParameters: [
      'Distinction between utility sheeting and AS 2870 / ASTM / EN regulated vapour barriers',
      'Impact and tear resistance on rough aggregate or concrete substrates',
      'Folded centre-fold or multi-fold roll widths for site handling',
      'UV exposure window during construction staging',
    ],
    complianceNote:
      'Important compliance distinction: General-purpose construction sheeting is distinct from regulated damp-proof membranes (DPM) or vapour retarders. Where statutory building codes (such as AS 2870 in Australia or regional equivalents) apply, formal product compliance testing and partner certification must be verified prior to order confirmation.',
  },
  {
    slug: 'agricultural-films',
    name: 'Agricultural Films',
    shortTitle: 'Agricultural Films',
    tagline: 'UV-stabilised greenhouse covers, mulch films, silage wraps, and protective horticultural sheeting.',
    imageKey: 'pe_films',
    overview:
      'Agricultural and horticultural polyethylene films operate under sustained solar UV radiation, wind uplift, temperature swings, and agrochemical contact. Sourcing focuses on additive stability, multi-layer mechanical strength, and controlled light transmission or opacity.',
    technicalScope: [
      'UV-stabilised greenhouse and polytunnel cladding films (200 µm range)',
      'Black, silver/black, and clear horticultural mulch films',
      'Silage bunker covers and stretch bale wrap substrates',
      'Anti-drip, diffused light, and thermal IR additive options',
      'Wide-width folded agricultural rolls for field deployment',
    ],
    keyEvaluationParameters: [
      'UV-stabiliser package (HALS) matched to target field service seasons and solar kLy',
      'Light transmission (PAR) and thermal retention properties for greenhouse films',
      'Puncture and tear resistance over soil beds or crop stubble',
      'Sulphur/chlorine agrochemical resistance where applicable',
    ],
  },
  {
    slug: 'pe-tubing-layflat-films',
    name: 'PE Tubing & Layflat Films',
    shortTitle: 'PE Tubing & Layflat',
    tagline: 'Continuous seamless polyethylene layflat tubing and gusseted tubular film rolls for flexible custom-length bag making.',
    imageKey: 'pe_films',
    overview:
      'Continuous PE layflat tubing allows industrial packers, engineering workshops, and manufacturers of long extruded profiles (pipes, timber, aluminium extrusions, textiles) to cut and heat-seal bags to exact product length on demand without stocking dozens of fixed bag SKUs.',
    technicalScope: [
      'Seamless blown-film layflat tubing (LDPE, LLDPE, HDPE)',
      'Gusseted continuous tubular rolls for bulky or square-profile parts',
      'Wide range of layflat widths from narrow sleeve tubing to wide industrial wraps',
      'Custom thickness from light dust protection to heavy-duty hardware sleeves',
      'Optional anti-static, VCI-compatible, or UV-tinted formulations',
    ],
    keyEvaluationParameters: [
      'Layflat width vs. product perimeter / cross-sectional diameter',
      'Compatibility with manual impulse sealers or continuous band sealers',
      'Roll outer diameter and weight for benchtop or floor dispenser stands',
      'Clarity for visual part identification vs. opaque protection',
    ],
  },
  {
    slug: 'custom-packaging',
    name: 'Custom Packaging & Conversion',
    shortTitle: 'Custom Packaging',
    tagline: 'Bespoke engineered polyethylene films, multi-colour flexographic print runs, special perforations, and custom-converted formats.',
    imageKey: 'polymer_pellets',
    overview:
      'When standard off-the-shelf packaging causes machine downtime, excessive scrap, or transit damage, FLEXORA coordinates custom specification development with qualified extrusion and conversion partners—translating your operational constraints into reproducible manufacturing specifications.',
    technicalScope: [
      'Bespoke co-extruded resin formulations tailored to specific mechanical targets',
      'Custom flexographic printing (surface or trap-printed) with Pantone matching',
      'Macro-ventilation, micro-perforation, wicketed, and tear-off roll formats',
      'Non-standard widths, deep side/bottom gussets, and multi-seal geometries',
      'Sample prototyping and trial-roll evaluation prior to volume commitment',
    ],
    keyEvaluationParameters: [
      'Minimum order quantity (MOQ) feasibility relative to extruder die & print cylinder setup',
      'Print artwork separation, barcode grading, and ink rub resistance',
      'Line trial feedback metrics (seal dwell time, jaw temperature, slip behaviour)',
      'Lead time for tooling, plates, sample approval, and export shipping',
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug);
}
