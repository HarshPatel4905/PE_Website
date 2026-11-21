import { ProductItem, ProductSpecRow } from './types';

function buildStandardSpecRows(overrides: Partial<Record<string, [string, string]>>): ProductSpecRow[] {
  const defaults: [string, string, string][] = [
    ['Material grade', 'Virgin LDPE / LLDPE / HDPE blend (or verified PCR blend)', 'Confirmed per resin datasheet and end-use requirement'],
    ['Resin type', 'Low-Density / Linear Low-Density / High-Density Polyethylene', 'Tailored to stiffness, puncture, and seal-temperature targets'],
    ['Film thickness (microns)', '25 µm – 200 µm (Illustrative range)', 'Tolerance typically ±8% to ±10% depending on gauge & partner line'],
    ['Width', '200 mm – 2,400 mm (Illustrative range)', 'Single-wound, centre-folded, or gusseted configurations'],
    ['Length', 'Custom roll length or cut-to-length (e.g., 100 m – 2,000 m)', 'Calculated to match roll outer diameter and weight limits'],
    ['Bag dimensions', 'Custom width × length (when converted)', 'Not applicable to continuous roll formats'],
    ['Gusset dimensions', 'Side or bottom gusset 50 mm – 600 mm (optional)', 'Matched to product depth or pallet footprint'],
    ['Roll weight', '15 kg – 800 kg (Illustrative range)', 'Manual handling rolls vs. crane/hoist machine jumbo rolls'],
    ['Core diameter', '76 mm (3") or 152 mm (6") heavy-duty paperboard core', 'Confirmed for unwinding shaft compatibility'],
    ['Colour', 'Natural clear, opaque white, black, blue, or custom tint', 'Masterbatch dosage confirmed for opacity & UV needs'],
    ['Printing', 'Plain unprinted or flexographic print (1–6+ colours)', 'Corona treatment required where surface printing is specified'],
    ['Surface treatment', 'Untreated or Corona treated (≥ 38 dynes/cm target)', 'Specified when printing, bonding, or tape adhesion is required'],
    ['Seal configuration', 'Bottom weld, side weld, twin heavy-duty weld, or continuous tube', 'Dependent on bag format and fill weight'],
    ['Packing quantity', 'Roll-per-pallet or carton/bale count per specification', 'Optimised for container utilisation and warehouse handling'],
    ['Pallet configuration', 'Heat-treated ISPM-15 export timber or plastic pallets', 'Wrapped, corner-protected, and strapped for sea/road freight'],
    ['Application requirements', 'Moisture barrier, dust exclusion, unitisation, or compression', 'Evaluated against storage duration, UV, and handling environment'],
  ];

  return defaults.map(([parameter, illustrativeRange, notes]) => {
    const ov = overrides[parameter];
    return {
      parameter,
      illustrativeRange: ov ? ov[0] : illustrativeRange,
      notes: ov ? ov[1] : notes,
    };
  });
}

export const PRODUCTS: ProductItem[] = [
  // 1. PE Films & Jumbo Rolls
  {
    slug: 'ldpe-lldpe-industrial-jumbo-rolls',
    categorySlug: 'pe-films-jumbo-rolls',
    name: 'LDPE & LLDPE Industrial Film Jumbo Rolls',
    shortLabel: 'LDPE / LLDPE Jumbo Rolls',
    resinOptions: ['LDPE', 'LLDPE', 'mLLDPE Co-Extruded'],
    summary:
      'High-consistency blown polyethylene jumbo rolls engineered for downstream bag conversion, FFS lines, lamination, and automated industrial wrapping.',
    imageKey: 'pe_films',
    overview:
      'LDPE and LLDPE industrial jumbo rolls serve as primary conversion stock and high-volume machine-feed film across packaging, building-product, and manufacturing facilities. FLEXORA coordinates partner extrusion specifications to balance sealability, puncture toughness, optical clarity, and roll-winding tension.',
    whatItIs:
      'A continuous web of monolayer or co-extruded polyethylene film wound onto heavy-duty cores in large roll diameters for continuous industrial processing or secondary slitting and bag making.',
    howManufactured:
      'Manufactured via blown-film extrusion where melted polymer pellets pass through an annular die, expand with internal air pressure into a vertical bubble, cool via an air ring, collapse through nip rollers, and wind onto precision cores under controlled tension.',
    availableMaterials: [
      'Virgin Low-Density Polyethylene (LDPE) for clarity, softness, and broad heat-seal window',
      'Linear Low-Density Polyethylene (LLDPE / C4, C6, C8) for high tensile strength and puncture resistance',
      'Metallocene LLDPE (mLLDPE) blends for downgauged toughness and low seal-initiation temperature',
      'Post-industrial or post-consumer recycled PE blends where application tolerances permit',
    ],
    constructionOptions: [
      'Mono-layer single-wound sheeting (SWS)',
      '3-layer A-B-A or A-B-C co-extruded structures',
      'Centre-folded (CF) or J-folded wide webs',
      'High-slip, medium-slip, or low-slip (non-slip) surface profiles',
    ],
    specifications: buildStandardSpecRows({
      'Material grade': ['Virgin LDPE / LLDPE / mLLDPE co-extrusion', 'Melt Flow Index (MFI) matched to extrusion and sealing lines'],
      'Film thickness (microns)': ['25 µm – 200 µm (Illustrative range)', 'Thickness uniformity targeted across full web width'],
      'Width': ['400 mm – 2,200 mm (Illustrative range)', 'Custom slit widths available across partner slitting lines'],
      'Bag dimensions': ['Not applicable (continuous roll stock)', 'Supplied as flat sheet, centre-fold, or gusseted web'],
      'Roll weight': ['80 kg – 800 kg per jumbo roll (Illustrative)', 'Matched to customer unwind hoist capacity'],
      'Core diameter': ['76 mm (3") or 152 mm (6") reinforced paperboard core', 'Optional core extension or flush trim'],
      'Seal configuration': ['Continuous film web (unsealed)', 'Formulated for impulse, hot-bar, or FFS sealing downstream'],
    }),
    typicalApplications: [
      'Vertical and horizontal Form-Fill-Seal (VFFS / HFFS) industrial lines',
      'Downstream slitting, printing, and custom bag conversion',
      'Automated protective wrapping of panels, boards, and manufactured sheets',
      'Lamination substrate for multi-material industrial composites',
    ],
    industryUseCases: [
      { industry: 'Packaging & Converting', useCase: 'Master jumbo rolls supplied to converters for high-speed bag making or flexographic print runs.' },
      { industry: 'Building Materials', useCase: 'Automated wrapping film for timber mouldings, plasterboard edges, and extruded profiles.' },
      { industry: 'Manufacturing', useCase: 'Clean protective interleave or continuous line-feed overwrap for fabricated components.' },
    ],
    performanceCharacteristics: [
      'High tear propagation resistance when LLDPE-rich formulations are selected',
      'Predictable coefficient of friction (COF) tuned to prevent web wander on high-speed rollers',
      'Clean, low-gel extrusion profile reducing seal pinholes and web breaks',
    ],
    availableCustomisation: [
      'UV inhibitor (HALS) packages for outdoor staging',
      'Anti-static masterbatch for dust-sensitive or electronics-adjacent lines',
      'Single-side or double-side corona treatment (target dyne level specified per print/lamination system)',
      'Custom tinting, opaque pigmentation, and edge-trim slitting',
    ],
    qualityInspectionParameters: [
      'Micrometer gauge profiling across left, centre, and right web positions',
      'Roll width, core ID, outer diameter, and net roll weight verification',
      'Visual inspection for telescoping, gauge bands, gels, or edge nicks',
      'Dyne test pen verification where corona treatment is specified',
    ],
    packagingAndLogistics: [
      'Individual jumbo rolls wrapped in protective PE outer cover with core plugs where required',
      'Horizontal cradle packing or vertical eye-to-sky palletisation depending on roll width',
      'ISPM-15 compliant export pallets secured for 20 ft or 40 ft container loading',
    ],
    howBuyersSelect: [
      'Confirm maximum roll weight and outer diameter your unwind stand and lifting hoist can safely handle.',
      'Specify exact COF requirement (high slip for fast FFS forming collars vs. non-slip for stable pallet stacking).',
      'Determine whether downstream printing or adhesive bonding requires corona treatment and confirm minimum dyne retention window.',
    ],
    commonBuyerMistakes: [
      'Ordering standard LDPE without LLDPE reinforcement for heavy or sharp-edged automated packing lines.',
      'Overlooking core wall thickness on 500 kg+ jumbo rolls, resulting in crushed cores during sea freight.',
      'Failing to specify unwind direction and print-side orientation (inner vs. outer surface) prior to extrusion.',
    ],
    faqs: [
      {
        question: 'Can FLEXORA coordinate multi-layer co-extruded jumbo rolls?',
        answer: 'Yes. Subject to confirmed manufacturing-partner line availability, 3-layer and 5-layer co-extruded structures can be specified to combine a tough LLDPE core with lower-temperature LDPE/mLLDPE sealing skins.',
      },
      {
        question: 'Are these specifications guaranteed off-the-shelf?',
        answer: 'No. Values shown are illustrative ranges. Final tolerances, resin grades, and roll build parameters are confirmed in writing with the designated manufacturing partner before order release.',
      },
    ],
    relatedProductSlugs: ['hdpe-high-stiffness-film-rolls', 'printed-pe-film-rolls'],
    relatedArticleSlugs: ['ldpe-vs-lldpe-vs-hdpe-industrial-buyers-guide', 'buyers-guide-industrial-jumbo-rolls', 'how-to-calculate-weight-pe-film-roll'],
  },
  {
    slug: 'hdpe-high-stiffness-film-rolls',
    categorySlug: 'pe-films-jumbo-rolls',
    name: 'HDPE High-Stiffness Industrial Film Rolls',
    shortLabel: 'HDPE Film Rolls',
    resinOptions: ['HDPE', 'HMW-HDPE'],
    summary:
      'High-modulus, moisture-barrier HDPE film rolls offering crisp stiffness, chemical resistance, and downgauging potential for industrial liners and interleaves.',
    imageKey: 'pe_films',
    overview:
      'High-Density Polyethylene (HDPE) film rolls deliver superior tensile strength at thinner gauges, lower moisture vapour transmission rates (MVTR), and stiffer machine handling compared to LDPE. Suitable for sheeting, interleaf rolls, and moisture-barrier conversion.',
    whatItIs:
      'A high-crystallinity blown polyethylene film roll characterised by translucent frosted clarity, high tensile modulus, and strong resistance to oils, greases, and moisture vapour.',
    howManufactured:
      'Produced on dedicated high-stalk blown-film extrusion lines engineered for high-molecular-weight HDPE (HMW-HDPE), balancing machine-direction and transverse-direction molecular orientation.',
    availableMaterials: ['High-Molecular-Weight HDPE (HMW-HDPE)', 'Medium-density / HDPE blend for balanced tear resistance'],
    constructionOptions: ['Mono-layer high-stalk HDPE', 'Co-extruded HDPE / LLDPE composite for improved puncture resilience'],
    specifications: buildStandardSpecRows({
      'Material grade': ['Virgin HMW-HDPE / MDPE blend', 'Selected for moisture barrier and high tensile yield'],
      'Film thickness (microns)': ['15 µm – 100 µm (Illustrative range)', 'Allows thinner gauge vs. LDPE for equivalent tensile stiffness'],
      'Width': ['300 mm – 1,800 mm (Illustrative range)', 'Available flat, gusseted, or perforated on roll'],
      'Bag dimensions': ['Not applicable (roll format)', 'Convertible into high-strength thin liners and sheets'],
      'Roll weight': ['20 kg – 450 kg (Illustrative)', 'Telescoping-resistant controlled wind tension'],
    }),
    typicalApplications: [
      'Moisture-barrier sheet interleaving between building panels or metal sheets',
      'Thin-gauge industrial dust covers and surface separators',
      'Conversion into stiff-mouth carton liners and heavy-duty bags',
    ],
    industryUseCases: [
      { industry: 'Chemical & Material Manufacturing', useCase: 'Moisture-sensitive intermediate sheet separation and chemical-resistant drum lining stock.' },
      { industry: 'Building Materials', useCase: 'Lightweight moisture barrier underlays and timber pack weather interleaves.' },
    ],
    performanceCharacteristics: [
      'Superior moisture vapour barrier compared to equivalent-thickness LDPE',
      'High tensile modulus supporting thin-gauge material efficiency',
      'Higher heat-distortion tolerance than standard low-density grades',
    ],
    availableCustomisation: [
      'Micro-embossed or matte finish for controlled release',
      'Perforated-on-roll tear-off sheets',
      'Custom pigmentation (natural frosted, white, blue, or black)',
    ],
    qualityInspectionParameters: [
      'Gauge consistency across film web',
      'Dart impact and Elmendorf tear checks where specified',
      'Roll edge alignment and core concentricity checks',
    ],
    packagingAndLogistics: [
      'Protective outer sleeve per roll to prevent edge bruising',
      'Palletised with top cap boards and strapping for export transit',
    ],
    howBuyersSelect: [
      'Evaluate whether you need stiffness and moisture barrier (favouring HDPE) or high dart impact and stretch recovery (favouring LLDPE).',
      'Check sealer dwell temperature: HDPE requires higher sealing temperatures than LDPE.',
    ],
    commonBuyerMistakes: [
      'Switching directly from LDPE to HDPE on existing sealing equipment without adjusting jaw temperature.',
      'Underestimating notch-tear sensitivity of pure HDPE when sharp-cornered hardware is packed.',
    ],
    faqs: [
      {
        question: 'When should a buyer select HDPE over LDPE?',
        answer: 'Select HDPE when moisture barrier, higher stiffness, thinner gauge efficiency, or higher temperature tolerance is the priority, and sharp-object puncture is secondary.',
      },
    ],
    relatedProductSlugs: ['ldpe-lldpe-industrial-jumbo-rolls', 'drum-box-octabin-liners'],
    relatedArticleSlugs: ['ldpe-vs-lldpe-vs-hdpe-industrial-buyers-guide', 'understanding-micron-gauge-film-thickness'],
  },
  {
    slug: 'printed-pe-film-rolls',
    categorySlug: 'pe-films-jumbo-rolls',
    name: 'Custom Printed Polyethylene Film Rolls',
    shortLabel: 'Printed PE Film Rolls',
    resinOptions: ['LDPE', 'LLDPE', 'Co-Ex PE'],
    summary:
      'Flexographically printed PE film rolls combining brand identification, safety warnings, and batch traceability with engineered film performance.',
    imageKey: 'pe_films',
    overview:
      'Printed polyethylene film rolls allow manufacturers and automated packaging lines to combine product protection with high-contrast brand graphics, regulatory handling symbols, barcodes, and R-value or grade markings in a single pass.',
    whatItIs:
      'Corona-treated mono-layer or co-extruded polyethylene roll stock printed via flexographic press prior to slitting and rewinding.',
    howManufactured:
      'Extruded PE film undergoes inline corona discharge treatment to elevate surface energy, followed by CI (central impression) or stack flexographic printing with solvent- or water-based inks matched to PE substrates.',
    availableMaterials: ['Opaque white-pigmented LDPE/LLDPE', 'High-clarity transparent LDPE/mLLDPE', 'Co-extruded white/black opaque barrier film'],
    constructionOptions: ['Surface-printed film (with optional overprint varnish)', 'Co-extruded outer white print skin over tough LLDPE core'],
    specifications: buildStandardSpecRows({
      'Printing': ['1 to 6+ colour flexographic printing (Illustrative)', 'Line work, process CMYK, barcodes, and repeat-length marks'],
      'Surface treatment': ['Corona treated ≥ 38–42 dynes/cm at time of printing', 'Ensures ink anchorage and rub resistance'],
      'Film thickness (microns)': ['35 µm – 160 µm (Illustrative range)', 'Adequate stiffness required for stable print registration'],
    }),
    typicalApplications: [
      'Automated FFS bagging for insulation, resin, aggregates, and horticultural substrates',
      'Branded pallet shrink hoods and industrial collation bundling film',
      'Printed safety and hazard-warning construction wraps',
    ],
    industryUseCases: [
      { industry: 'Thermal Insulation', useCase: 'High-opacity printed FFS batt sleeves carrying product R-value tables and installation graphics.' },
      { industry: 'Construction Products', useCase: 'Branded weather-shielding wraps for plasterboard, timber, and bagged dry mixes.' },
    ],
    performanceCharacteristics: [
      'Scuff-resistant ink systems selected for palletised export handling',
      'Consistent print repeat pitch and eye-mark registration for automated photo-eye sensors',
    ],
    availableCustomisation: [
      'Photo-eye registration marks (black/contrast bars) positioned to machine specification',
      'UV-resistant ink pigments for outdoor storage',
      'Pantone spot colour matching and matte/gloss overprint varnishes',
    ],
    qualityInspectionParameters: [
      'Tape-adhesion (cross-hatch / Scotch tape) ink retention check',
      'Repeat-length dimensional verification across 10+ print repeats',
      'Visual colour consistency against approved artwork proof',
    ],
    packagingAndLogistics: [
      'Roll-by-roll protective wrapping and clean pallet labelling by batch and artwork version',
    ],
    howBuyersSelect: [
      'Confirm your packaging machine print repeat length, eye-mark colour/size, and unwind orientation (copy readable head-first or foot-first).',
    ],
    commonBuyerMistakes: [
      'Approving digital PDF artwork without specifying print cylinder repeat length or photo-eye sensor zone.',
      'Under-specifying ink scuff resistance for rough automated diverters or long sea-freight vibration.',
    ],
    faqs: [
      {
        question: 'Does FLEXORA support artwork coordination and cylinder proofing?',
        answer: 'Yes. FLEXORA coordinates technical artwork specifications, eye-mark placement, and digital or wet-proof sign-offs between buyer and printing partner prior to cylinder engraving.',
      },
    ],
    relatedProductSlugs: ['ldpe-lldpe-industrial-jumbo-rolls', 'glass-wool-rockwool-insulation-bags'],
    relatedArticleSlugs: ['how-flexographic-printing-works-on-pe-film', 'understanding-packaging-specifications-export-logistics'],
  },

  // 2. Industrial PE Bags & Sacks
  {
    slug: 'heavy-duty-gusseted-pe-sacks',
    categorySlug: 'industrial-pe-bags',
    name: 'Heavy-Duty Gusseted Industrial PE Bags & Sacks',
    shortLabel: 'Gusseted PE Sacks',
    resinOptions: ['LLDPE', 'LDPE/LLDPE Co-Ex'],
    summary:
      'Side-gusseted and heavy-duty flat polyethylene sacks built for 10 kg–50 kg bulk granules, powders, hardware, and industrial assemblies.',
    imageKey: 'industrial_bags',
    overview:
      'Heavy-duty gusseted PE bags provide square-profile expansion inside cartons or standalone stackable containment for dense industrial goods. Co-extruded LLDPE blends protect weld zones against drop impact and pallet compression.',
    whatItIs:
      'Tubular blown-film bags featuring symmetrical side pleats (gussets) and reinforced bottom heat seals, enabling boxy three-dimensional filling.',
    howManufactured:
      'Tubular PE film is folded along both edges during blown-film collapse to create side gussets, then fed into heavy-duty bag-conversion machines for precision cutting and high-dwell bottom welding.',
    availableMaterials: ['Heavy-duty LLDPE / LDPE co-extruded film', 'Virgin or industrial-grade recycled PE blends (non-food)'],
    constructionOptions: ['Side-gusseted bottom-weld sack', 'Twin-seal reinforced heavy sack', 'Open-mouth or micro-perforated air-release format'],
    specifications: buildStandardSpecRows({
      'Film thickness (microns)': ['60 µm – 200 µm (Illustrative range)', 'Selected by bag fill weight and drop-height exposure'],
      'Bag dimensions': ['Width 300–900 mm × Length 450–1,400 mm (Illustrative)', 'Tailored to fill volume and headspace for top sealing'],
      'Gusset dimensions': ['75 mm – 300 mm total side gusset depth (Illustrative)', 'Expands to fit cartons, crates, or pallet footprints'],
      'Seal configuration': ['Heavy-duty impulse or heated-bar bottom weld', 'Optional 4-layer gusset fold weld check'],
    }),
    typicalApplications: [
      'Bulk polymer pellets, masterbatch, mineral fillers, and dry industrial chemicals',
      'Fasteners, castings, and machined metal components',
      'Carton-lining and moisture-sealed export unit packing',
    ],
    industryUseCases: [
      { industry: 'Manufacturing & Engineering', useCase: 'Heavy-gauge bags containing sharp-edged stamped parts or oily machined assemblies.' },
      { industry: 'Industrial Distribution', useCase: 'Uniform 20 kg–25 kg weather-resistant outer sacks for wholesale hardware and compound distribution.' },
    ],
    performanceCharacteristics: [
      'High dart impact resistance preventing bottom blowout during drop handling',
      'Clean square stacking geometry once filled and heat-sealed or stitched',
    ],
    availableCustomisation: [
      'Anti-slip embossing on outer bag face to stabilise stacked pallets',
      'Punched breather holes or micro-perforations for powder de-aeration',
      'Multi-colour flexographic hazard, weight, and SKU printing',
    ],
    qualityInspectionParameters: [
      'Seal strength check across both 2-layer centre and 4-layer gusset overlap zones',
      'Internal dimension and gusset symmetry verification',
      'Visual defect screening for incomplete seals or film pinholes',
    ],
    packagingAndLogistics: [
      'Packed flat in numbered bundles inside corrugated cartons or wrapped export bales',
      'Carton labels detailing SKU, dimensions, gauge, and batch number',
    ],
    howBuyersSelect: [
      'Measure filled product volume plus allow 150–200 mm extra bag length for top heat sealing or gooseneck tying.',
      'Pay special attention to the 4-layer gusset overlap weld, where under-heated sealers often leave weak corners.',
    ],
    commonBuyerMistakes: [
      'Specifying total perimeter incorrectly by forgetting to account for open gusset expansion.',
      'Using thin flat-seal bags for dense sharp granular material without puncture-resistant LLDPE.',
    ],
    faqs: [
      {
        question: 'Can heavy-duty gusseted bags be supplied on continuous perforated rolls?',
        answer: 'Yes. Depending on bag dimensions and thickness, gusseted or flat industrial bags can be converted either loose in cartons/bales or perforated on dispenser rolls.',
      },
    ],
    relatedProductSlugs: ['flat-perforated-industrial-pe-bags', 'glass-wool-rockwool-insulation-bags'],
    relatedArticleSlugs: ['choosing-between-flat-gusseted-tubular-bags', 'how-to-select-right-pe-packaging-bag', 'understanding-seal-strength-puncture-resistance'],
  },
  {
    slug: 'flat-perforated-industrial-pe-bags',
    categorySlug: 'industrial-pe-bags',
    name: 'Flat, Custom-Size & Perforated PE Bags',
    shortLabel: 'Flat & Perforated Bags',
    resinOptions: ['LDPE', 'LLDPE', 'HDPE'],
    summary:
      'Versatile flat open-mouth, wicketed, and perforated-on-roll polyethylene bags converted to custom dimensions for assembly lines and clean component packing.',
    imageKey: 'industrial_bags',
    overview:
      'Flat and perforated PE bags streamline manual and semi-automated packing stations where speed of bag opening, visual part verification, and dust/moisture protection are essential.',
    whatItIs:
      'Two-wall flat polyethylene bags manufactured from seamless tubing or folded sheeting, supplied loose-packed, wicketed on wire frames, or wound as tear-off perforated rolls.',
    howManufactured:
      'Blown tubular or centre-folded PE film passes through side-weld or bottom-weld bag conversion lines, with optional inline perforation wheels, air-vent punches, or wicket stacking.',
    availableMaterials: ['High-clarity virgin LDPE', 'Tough LLDPE/LDPE blend', 'Stiff thin-gauge HDPE'],
    constructionOptions: ['Bottom-weld seamless tube bag', 'Side-weld bag with lip / flap', 'Perforated bag-on-roll', 'Wicketed bag stack'],
    specifications: buildStandardSpecRows({
      'Film thickness (microns)': ['25 µm – 150 µm (Illustrative range)', 'Lightweight dust covers to heavy part bags'],
      'Bag dimensions': ['Width 100–1,200 mm × Length 150–2,000 mm (Illustrative)', 'Tailored to specific part or carton dimensions'],
      'Gusset dimensions': ['None (flat profile)', 'See gusseted sacks for 3D box expansion'],
      'Seal configuration': ['Bottom weld (3 mm skirt) or side weld with optional 25–50 mm lip', 'Perforated tear line where supplied on roll'],
    }),
    typicalApplications: [
      'Spare parts, electronics sub-assemblies, and hardware kitting',
      'Clean intermediate work-in-progress (WIP) component storage',
      'Apparel, textile, and light manufactured goods packing',
    ],
    industryUseCases: [
      { industry: 'Manufacturing & Engineering', useCase: 'Perforated-on-roll benchtop bags protecting machined components from shop-floor dust and humidity.' },
      { industry: 'Warehousing & Logistics', useCase: 'Printed SKU and barcode-labelled flat bags for spare-parts fulfilment.' },
    ],
    performanceCharacteristics: [
      'Controlled internal anti-block additive ensuring fast manual or blower-assisted opening',
      'Clean tear-off perforation strength calibrated so bags separate cleanly without tearing the bottom seal',
    ],
    availableCustomisation: [
      'Anti-static pink or clear additives',
      '6 mm–8 mm air-escape vent holes to eliminate trapped air pillows during carton packing',
      'Write-on white stripe panels for manual batch/part marking',
    ],
    qualityInspectionParameters: [
      'Bag width, length, and lip tolerance checks',
      'Perforation tear-force verification on roll formats',
      'Bottom/side seal integrity inspection',
    ],
    packagingAndLogistics: [
      'Inner poly-wrapped packs inside rigid corrugated master cartons or roll dispensers',
    ],
    howBuyersSelect: [
      'Add at least 20–30 mm clearance to product width + thickness so operators can insert parts quickly without stressing side seams.',
    ],
    commonBuyerMistakes: [
      'Measuring product width flat without adding product height/thickness, resulting in bags too tight to slide over parts.',
      'Forgetting anti-block specification on thin high-clarity LDPE bags, causing slow operator bag opening.',
    ],
    faqs: [
      {
        question: 'What is the difference between bottom-weld and side-weld flat bags?',
        answer: 'Bottom-weld bags are made from continuous tubing and provide higher strength for heavier contents; side-weld bags are folded and cut cleanly at the edges, often featuring an extended top lip for easier manual or wicketed loading.',
      },
    ],
    relatedProductSlugs: ['heavy-duty-gusseted-pe-sacks', 'seamless-pe-layflat-tubing'],
    relatedArticleSlugs: ['choosing-between-flat-gusseted-tubular-bags', 'how-to-select-right-pe-packaging-bag'],
  },

  // 3. Insulation Packaging
  {
    slug: 'glass-wool-rockwool-insulation-bags',
    categorySlug: 'insulation-packaging',
    name: 'Glass Wool & Rockwool Insulation Packaging Bags',
    shortLabel: 'Insulation Compression Bags',
    resinOptions: ['High-Modulus LLDPE', 'Co-Ex LDPE/LLDPE'],
    summary:
      'High-tensile compression bags and batt sleeves engineered to contain compressed mineral wool, glass wool, and rockwool insulation without seal creep or puncture.',
    imageKey: 'insulation_batt_single',
    galleryImageKeys: ['insulation_batt_single', 'insulation_batt_pallet', 'insulation_pack'],
    overview:
      'Insulation manufacturers compress batts and blankets significantly during packaging to optimise warehouse density and truckload freight economics. Packaging bags must withstand continuous outbound expansion pressure, rough fibrous edges, automated baler ram forces, and outdoor building-site handling.',
    whatItIs:
      'Heavy-duty gusseted or flat co-extruded polyethylene compression bags, sleeves, and automated baling film designed specifically for compressible thermal and acoustic insulation products.',
    howManufactured:
      'Produced via multi-layer co-extruded blown film extrusion combining high-strength metallocene/hexene LLDPE core layers with tough sealable LDPE skin layers, followed by heavy-duty twin-weld conversion and precision air-vent punching.',
    availableMaterials: [
      'High-modulus hexene/octene LLDPE + LDPE co-extrusion',
      'UV-stabilised formulations for construction-yard weather exposure',
      'High-opacity pigmented or clear high-clarity resin blends',
    ],
    constructionOptions: [
      'Pre-made side-gusseted compression batt bags (for manual or semi-auto balers)',
      'Tubular gusseted film rolls for automated compression baling lines',
      'Roll-pack insulation sleeves with carry handles or reinforced grab zones',
    ],
    specifications: buildStandardSpecRows({
      'Material grade': ['Co-extruded LLDPE / mLLDPE / LDPE compression formulation', 'Tuned for low creep under sustained compression force'],
      'Film thickness (microns)': ['55 µm – 140 µm (Illustrative range)', 'Depends on compression ratio, batt density, and bundle mass'],
      'Bag dimensions': ['Custom matched to compressed bale height × width × length', 'Calculated from uncompressed vs. compressed recovery curve'],
      'Gusset dimensions': ['150 mm – 450 mm deep side gussets (Illustrative)', 'Matches square/rectangular compressed batt pack geometry'],
      'Seal configuration': ['Reinforced high-dwell flat weld or twin-bar bottom seal', 'Positioned to avoid peak corner shear stress'],
      'Printing': ['1–6 colour flexographic printing (brand, R-value, thickness, safety icons)', 'High-opacity ink coverage over clear or tinted film'],
    }),
    typicalApplications: [
      'Compressed glass wool ceiling and wall insulation batt packs',
      'High-density rockwool / stone wool acoustic and fire-rated slab packs',
      'Rolled mineral wool blanket compression sleeves and master multipack shrouds',
    ],
    industryUseCases: [
      { industry: 'Thermal & Acoustic Insulation', useCase: 'Primary compression bags resisting 3:1 to 6:1 compression expansion forces throughout warehousing and container transport.' },
      { industry: 'Building Supply Distribution', useCase: 'UV-stabilised master weather packs allowing temporary jobsite staging before installation.' },
    ],
    performanceCharacteristics: [
      'Low tensile creep and high yield strength preventing bag ballooning over months of warehousing',
      'High puncture and tear propagation resistance against abrasive mineral wool fibres',
      'Calibrated air-evacuation vent patterns allowing rapid ram compression without trapping air pockets',
    ],
    availableCustomisation: [
      'Custom vent hole layout (diameter and position to match baling platen)',
      'UV-stabiliser package (e.g., 3–12 months target outdoor exposure note)',
      'Anti-slip exterior coating for safer high-stacked pallet loads',
    ],
    qualityInspectionParameters: [
      'Tensile strength at yield and break (MD & TD) per partner spec',
      'Dart impact and Elmendorf tear resistance checks',
      'Seal peel/burst integrity across gusset folds',
      'Dimensional check against compressed bale tolerance',
    ],
    packagingAndLogistics: [
      'Pre-made bags stacked flat in moisture-protected bales or cartons; baler rolls wrapped on heavy cores',
      'Export palletised for container delivery to insulation manufacturing plants',
    ],
    howBuyersSelect: [
      'Provide exact compressed bundle dimensions (L × W × H), product density (kg/m³), and baler ram speed rather than uncompressed batt size.',
      'Align vent-hole placement with your baler chute so trapped air escapes cleanly during the compression stroke.',
    ],
    commonBuyerMistakes: [
      'Specifying pure LDPE instead of LLDPE-reinforced co-extrusion, leading to gradual bag stretching and split side-seals in warm warehouses.',
      'Omitting UV stabilisation when insulation packs sit outdoors on construction sites prior to installation.',
    ],
    faqs: [
      {
        question: 'Can FLEXORA supply both pre-made compression bags and automated baler film rolls?',
        answer: 'Yes. Depending on your plant equipment, we coordinate both converted gusseted compression bags and continuous tubular/flat rolls for automated FFS baling lines.',
      },
    ],
    relatedProductSlugs: ['pallet-stretch-hood-films', 'printed-pe-film-rolls'],
    relatedArticleSlugs: ['packaging-requirements-glass-wool-rockwool-insulation', 'understanding-seal-strength-puncture-resistance'],
  },

  // 4. Pallet Covers & Stretch Hood Films
  {
    slug: 'pallet-stretch-hood-films',
    categorySlug: 'pallet-covers-stretch-hood',
    name: 'Pallet Covers, Shrouds & Stretch Hood Films',
    shortLabel: 'Pallet Covers & Stretch Hoods',
    resinOptions: ['LLDPE', 'LDPE', 'EVA/mLLDPE Co-Ex'],
    summary:
      'Unit-load protective pallet shrouds, perforated top/bottom covers, and elastic co-extruded stretch hood films for five-sided weather and stability protection.',
    imageKey: 'logistics_export',
    overview:
      'Pallet covers and stretch hood films safeguard unitised goods against moisture, dust, pilferage, and load shifting without requiring multi-layer manual strapping or wasteful hand wrapping.',
    whatItIs:
      'Gusseted tubular polyethylene hoods and flat perforated top/bottom sheets engineered either to drape loosely over a pallet (pallet covers), shrink via heat (shrink hoods), or stretch elastically over the load using automated hooding arms (stretch hood film).',
    howManufactured:
      'Co-extruded blown film extrusion using elastic metallocene LLDPE and EVA copolymers (for stretch hoods) or standard LDPE/LLDPE blends (for loose covers), wound as continuous gusseted tubing or perforated-on-roll converted shrouds.',
    availableMaterials: ['Elastic mLLDPE/EVA multi-layer co-extrusion (Stretch Hood)', 'LDPE/LLDPE weather-shield film (Pallet Covers)'],
    constructionOptions: ['Perforated top/bottom sheets on roll', 'Gusseted pallet shroud bags', 'Continuous tubular stretch hood reel'],
    specifications: buildStandardSpecRows({
      'Material grade': ['3-layer / 5-layer mLLDPE + EVA elastic co-extrusion (hood) or LDPE (cover)', 'Formulated for puncture recovery over pallet corners'],
      'Film thickness (microns)': ['40 µm – 150 µm (Illustrative range)', 'Stretch hoods typically 60–120 µm depending on load weight'],
      'Bag dimensions': ['Sized to Australian (1165×1165 mm), Euro (800×1200 mm), or ISO (1000×1200 mm) pallets', 'Custom shroud drop height to 2,400 mm+'],
      'Gusset dimensions': ['Full side gussets matching pallet depth', 'Sized with controlled stretch allowance for hooding machines'],
      'Seal configuration': ['Heavy-duty top cross-weld (hoods) or flat perforated sheet', 'Top seal engineered to survive biaxial hood-arm stretching'],
    }),
    typicalApplications: [
      'Unitised bagged cement, chemicals, resin, and dry building materials',
      'Outdoor-staged bricks, pavers, insulation packs, and timber pallets',
      'Export sea-freight unit loads requiring clean five-sided dust and condensation shielding',
    ],
    industryUseCases: [
      { industry: 'Building & Construction Materials', useCase: 'Five-sided waterproof stretch hoods keeping bagged mortar and insulation dry in open yards.' },
      { industry: 'Warehousing & Logistics', useCase: 'Perforated pallet top and bottom sheets isolating cartons from damp timber pallets and overhead dust.' },
    ],
    performanceCharacteristics: [
      'High horizontal and vertical holding force with stretch hoods—no open-flame shrink equipment required',
      'High puncture resilience across sharp pallet corners and strapping buckles',
    ],
    availableCustomisation: [
      'UV-stabilised formulations for prolonged outdoor yard storage',
      'High-clarity transparent finish for barcode scanning through the hood',
      'Opaque white/black/blue hoods for security or solar heat reflection',
    ],
    qualityInspectionParameters: [
      'Elastic recovery and tensile holding-force verification (for stretch hoods)',
      'Top weld integrity under pull tension',
      'Gusset symmetry and perforation tear-force consistency',
    ],
    packagingAndLogistics: [
      'Delivered on palletised rolls (continuous hood reels or perforated cover rolls) ready for dispenser or hooder mounting',
    ],
    howBuyersSelect: [
      'Distinguish clearly between loose protective covers, heat-shrink hoods, and machine-applied stretch hoods—each uses a different polymer formulation and sizing math.',
    ],
    commonBuyerMistakes: [
      'Ordering standard shrink hood film for a mechanical stretch-hooder, causing film tearing on the stretching fingers.',
      'Forgetting to include pallet wooden deck overhang when calculating shroud perimeter.',
    ],
    faqs: [
      {
        question: 'Can stretch hood films eliminate the need for pallet top sheets?',
        answer: 'Yes. Because a stretch hood or full pallet shroud covers the top and all four sides in one continuous sleeve, it typically replaces both stretch wrap and a separate top sheet.',
      },
    ],
    relatedProductSlugs: ['pe-pallet-shrink-film', 'glass-wool-rockwool-insulation-bags'],
    relatedArticleSlugs: ['pallet-covers-vs-stretch-hood-films', 'understanding-packaging-specifications-export-logistics'],
  },

  // 5. Shrink Films
  {
    slug: 'pe-pallet-shrink-film',
    categorySlug: 'shrink-films',
    name: 'Industrial PE Shrink Film & Collation Bundling Film',
    shortLabel: 'PE Shrink & Bundling Film',
    resinOptions: ['LDPE', 'LDPE/LLDPE Co-Ex'],
    summary:
      'Controlled MD/TD shrink-ratio polyethylene films engineered for heat tunnels, collation multipacks, and heavy palletised transit protection.',
    imageKey: 'hero_rolls',
    overview:
      'Polyethylene shrink film provides tight, conformable unitisation for heavy or irregularly shaped industrial packs, beverage/chemical multipacks, and pallet loads processed through gas or electric shrink tunnels.',
    whatItIs:
      'A blown polyethylene film produced with intentional molecular orientation during extrusion so that when reheated above its softening point, it contracts tightly around the enclosed load.',
    howManufactured:
      'Extruded via blown-film process using tailored blow-up ratios (BUR) and draw-down ratios (DDR) to establish predictable machine-direction and transverse-direction shrink percentages.',
    availableMaterials: ['High-shrink LDPE resin grades', 'LDPE / LLDPE co-extruded blends combining high shrink tension with puncture strength'],
    constructionOptions: ['Flat single-wound bundling roll', 'Centre-folded shrink film', 'Gusseted shrink hood tubing'],
    specifications: buildStandardSpecRows({
      'Material grade': ['Controlled-orientation LDPE / LLDPE blend', 'Low gel count for burn-through prevention in shrink tunnels'],
      'Film thickness (microns)': ['35 µm – 180 µm (Illustrative range)', 'Light collation (35–70 µm) vs. heavy pallet shrink (100–180 µm)'],
      'Width': ['250 mm – 2,200 mm (Illustrative range)', 'Matched to product bundle width plus overhang'],
      'Bag dimensions': ['Roll format or custom shrink hood bag', 'Shrink allowance calculated from product geometry'],
      'Surface treatment': ['Controlled slip/anti-block formulation', 'Prevents film fusing to inner primary PE bags inside heat tunnel'],
    }),
    typicalApplications: [
      'Collation bundling of cartons, cans, bottles, and building hardware packs',
      'Heat-shrink pallet hooding for refractory bricks, glass containers, and bagged goods',
      'Transit protection of long timber, aluminium, and composite profiles',
    ],
    industryUseCases: [
      { industry: 'Construction & Building Products', useCase: 'Heavy-gauge shrink bundling keeping long extrusion packs rigid during crane and forklift handling.' },
      { industry: 'Manufacturing', useCase: 'Automated tunnel collation reducing corrugated outer-case usage.' },
    ],
    performanceCharacteristics: [
      'Balanced shrink tension maintaining load rigidity after cooling',
      'High burn-through resistance inside hot-air or infrared shrink tunnels',
    ],
    availableCustomisation: [
      'Custom MD:TD shrink ratio tuning (e.g., high MD for sleeve-wrap tunnels vs. balanced biaxial shrink)',
      'UV protection and surface printing (logos, batch barcodes)',
    ],
    qualityInspectionParameters: [
      'Free-shrink percentage test in oil bath or calibrated oven (MD & TD)',
      'Thickness variation and optical haze/clarity verification',
      'Anti-stick separation check when shrinking over PE-wrapped items',
    ],
    packagingAndLogistics: [
      'Wound onto reinforced cores, palletised with end-board protection to avoid edge deformation',
    ],
    howBuyersSelect: [
      'Match film shrink ratio (biaxial vs. mono-directional) to your tunnel type: sleeve wrappers need strong MD shrink, while full hoods need balanced MD/TD shrink.',
    ],
    commonBuyerMistakes: [
      'Shrinking standard PE over another PE primary bag without an anti-stick / differential-melt formulation, causing layers to weld together in the tunnel.',
    ],
    faqs: [
      {
        question: 'How does PE shrink film differ from POF (polyolefin) retail shrink film?',
        answer: 'Industrial PE shrink film is thicker (typically 35–180 µm) and engineered for structural load-holding strength on heavy packs and pallets, whereas thin cross-linked POF (12–25 µm) is mainly used for lightweight retail boxes.',
      },
    ],
    relatedProductSlugs: ['pallet-stretch-hood-films', 'ldpe-lldpe-industrial-jumbo-rolls'],
    relatedArticleSlugs: ['what-determines-strength-of-plastic-film', 'pallet-covers-vs-stretch-hood-films'],
  },

  // 6. Industrial Liners
  {
    slug: 'drum-box-octabin-liners',
    categorySlug: 'industrial-liners',
    name: 'Drum, Carton, Octabin & FIBC Industrial Liners',
    shortLabel: 'Drum, Box & FIBC Liners',
    resinOptions: ['Virgin LDPE', 'LLDPE', 'HDPE', 'Co-Ex Barrier'],
    summary:
      'Clean virgin-resin and specialty barrier liners tailored for 200 L drums, octabins, gaylord cartons, and woven FIBC bulk bags.',
    imageKey: 'industrial_bags',
    overview:
      'Industrial liners provide a clean, moisture-tight internal barrier inside rigid steel/plastic drums, corrugated octabins, and woven polypropylene FIBCs. Proper liner geometry prevents corner bridging, lowers vessel cleaning costs, and protects sensitive powders and liquids.',
    whatItIs:
      'Precision-sized flat, gusseted, round-bottom, or form-fit spouted polyethylene liners manufactured from controlled virgin resins.',
    howManufactured:
      'Blown from virgin polyethylene in clean production environments and converted via heavy-duty straight or contour heat-sealing into flat, gusseted, circular-base, or spouted FIBC configurations.',
    availableMaterials: ['Virgin LDPE (flexible tear-resistant)', 'Virgin LLDPE (puncture & cold-temperature tough)', 'Co-extruded EVOH/PA moisture/oxygen barrier blends where formally required'],
    constructionOptions: ['Flat open-top drum liner (200 L / 205 L)', 'Round-bottom / pleated drum liner', 'Gusseted carton & octabin liner', 'Tubular or form-fit FIBC liner with fill/discharge spouts'],
    specifications: buildStandardSpecRows({
      'Material grade': ['Virgin polyethylene resin (food-contact grade available subject to supplier documentation)', 'Anti-static / conductive variants available to spec'],
      'Film thickness (microns)': ['40 µm – 200 µm (Illustrative range)', 'Single-layer or heavy multi-ply construction'],
      'Bag dimensions': ['Sized to 200 L drums (~940 × 1,500 mm), octabins, or FIBC internal profile', 'Allowance included for cuff fold-over'],
      'Seal configuration': ['Double-sealed flat weld, contour round-bottom, or welded neck spout', 'Leak-tested seal validation criteria agreed per order'],
    }),
    typicalApplications: [
      'Fine industrial chemicals, pigments, resins, and masterbatch compounds',
      'Adhesives, greases, coatings, and viscous pastes in 200 L drums',
      'Hygienic isolation inside reusable octabins and woven PP bulk bags (FIBCs)',
    ],
    industryUseCases: [
      { industry: 'Chemical & Material Manufacturing', useCase: 'Virgin LDPE drum liners allowing clean product discharge and drum reuse without solvent washdowns.' },
      { industry: 'Packaging & Converting', useCase: 'Moisture-barrier octabin liners protecting hygroscopic polymer pellets during maritime transit.' },
    ],
    performanceCharacteristics: [
      'Eliminates direct product contact with outer steel, fibreboard, or woven PP surfaces',
      'High tear resistance during mechanical pneumatic or gravity discharge',
    ],
    availableCustomisation: [
      'Round-bottom drum geometry eliminating trapped material corners',
      'Tab-lock or glue-tab attachments for FIBC form-fit retention',
      '20 ft and 40 ft dry bulk sea-container liner configurations',
    ],
    qualityInspectionParameters: [
      'Resin batch traceability and virgin resin documentation',
      'Weld continuity and hydrostatic/air-inflation leak sampling where specified',
      'Dimensional check against vessel internal diameter and height',
    ],
    packagingAndLogistics: [
      'Individually folded or supplied on perforated rolls inside sealed clean outer cartons',
    ],
    howBuyersSelect: [
      'Specify outer drum/octabin/FIBC internal dimensions AND filling/discharge temperature before choosing resin thickness.',
      'For viscous pastes or pump-out applications, select round-bottom or pleated liners to prevent liner suction-collapse.',
    ],
    commonBuyerMistakes: [
      'Using standard flat-bottom bags inside 200 L round drums, causing pinched corners that burst during filling or trap residue.',
    ],
    faqs: [
      {
        question: 'Can FLEXORA source anti-static liners for powder handling?',
        answer: 'Yes. Subject to partner capability and explicit static-dissipative requirements, anti-static additive PE liners can be specified—always confirm exact surface resistivity expectations.',
      },
    ],
    relatedProductSlugs: ['heavy-duty-gusseted-pe-sacks', 'hdpe-high-stiffness-film-rolls'],
    relatedArticleSlugs: ['how-to-specify-industrial-liners', 'virgin-resin-vs-recycled-polyethylene'],
  },

  // 7. Construction Films
  {
    slug: 'builders-film-construction-sheeting',
    categorySlug: 'construction-films',
    name: 'Construction PE Sheeting, Protection & Curing Films',
    shortLabel: 'Construction PE Films',
    resinOptions: ['LDPE', 'LLDPE', 'Recycled PE Blend'],
    summary:
      'Heavy-duty builders sheeting, concrete-curing film, temporary site enclosures, and specification-verified damp-proof membrane substrates.',
    imageKey: 'hero_rolls',
    overview:
      'Construction sites require rugged, wide-width polyethylene sheeting for slab curing, aggregate separation, weather containment, and surface protection. FLEXORA maintains a strict technical boundary between general-purpose utility sheeting and regulated structural vapour membranes.',
    whatItIs:
      'Wide-width folded polyethylene sheeting rolls formulated for high impact resistance, puncture tolerance over compacted sub-bases, and convenient unrolling on active construction sites.',
    howManufactured:
      'Blown in wide tubular or multi-fold widths (commonly 2 m to 6 m unfolded) using tough virgin or controlled recycled PE blends with carbon black or colour-coded masterbatch.',
    availableMaterials: ['Heavy-duty LDPE / LLDPE blends', 'Controlled recycled polyethylene formulations for non-structural utility sheeting', 'Virgin resin specs where formal standard testing applies'],
    constructionOptions: ['Centre-folded or multi-folded wide-width rolls', 'Black, natural, orange, or blue coded sheeting'],
    specifications: buildStandardSpecRows({
      'Material grade': ['Utility recycled-blend PE OR virgin resin per compliance tier', 'Clearly separated by project regulatory class'],
      'Film thickness (microns)': ['50 µm – 300 µm (Illustrative range)', 'Standard 200 µm heavy-duty builders range illustrated'],
      'Width': ['1,000 mm – 6,000 mm unfolded (supplied folded to 1 m–2 m)', 'Compact roll width for jobsite transport'],
      'Length': ['25 m – 100 m per handy roll (Illustrative)', 'Manageable roll weights for site crews'],
      'Bag dimensions': ['Not applicable (folded continuous sheeting)', 'Flat unfolded sheet geometry'],
    }),
    typicalApplications: [
      'Concrete moisture-retention curing blankets and slab separation',
      'Temporary scaffolding weather curtains, roof tarping, and window/joinery protection',
      'General-purpose site dust containment and material cover sheeting',
    ],
    industryUseCases: [
      { industry: 'Building & Construction', useCase: 'Tough 200 µm site protection sheets shielding finished floors and facades during fit-out.' },
    ],
    performanceCharacteristics: [
      'High puncture and tear resistance against gravel, formwork edges, and foot traffic',
      'Compact multi-fold roll format simplifying transport on flatbeds and hoists',
    ],
    availableCustomisation: [
      'Custom roll lengths, colours, and private-label outer roll sleeving for hardware/builder distributors',
      'Flame-retardant additive options where specified and supported by partner test documentation',
    ],
    qualityInspectionParameters: [
      'Thickness check at multiple fold creases and flat panels',
      'Roll unfolded width and length verification',
      'Visual pinhole screening on barrier-critical orders',
    ],
    packagingAndLogistics: [
      'Bundled rolls palletised vertically or horizontally with protective outer wrapping for distributor warehousing',
    ],
    howBuyersSelect: [
      'Verify first whether your project requires simple general-purpose builders sheeting or a code-certified damp-proof membrane (e.g., AS 2870 high-impact vapour barrier in Australia).',
    ],
    commonBuyerMistakes: [
      'Purchasing general-purpose recycled utility builders film for regulated under-slab damp-proof membrane applications without verifying statutory impact and vapour compliance.',
    ],
    faqs: [
      {
        question: 'Does FLEXORA distinguish between utility sheeting and regulated DPM?',
        answer: 'Yes. Utility site-protection sheeting and formally tested damp-proof membranes are treated as distinct product specifications. Where regional building standards apply, compliance testing and partner documentation must be explicitly confirmed prior to order.',
      },
    ],
    relatedProductSlugs: ['pallet-stretch-hood-films', 'seamless-pe-layflat-tubing'],
    relatedArticleSlugs: ['understanding-micron-gauge-film-thickness', 'virgin-resin-vs-recycled-polyethylene'],
  },

  // 8. Agricultural Films
  {
    slug: 'uv-greenhouse-mulch-silage-films',
    categorySlug: 'agricultural-films',
    name: 'UV-Stabilised Greenhouse, Mulch & Silage Films',
    shortLabel: 'Agricultural PE Films',
    resinOptions: ['UV-LDPE', 'LLDPE/EVA Co-Ex'],
    summary:
      'Multi-layer UV-stabilised agricultural polyethylene films engineered for protected cropping, soil moisture management, and silage preservation.',
    imageKey: 'pe_films',
    overview:
      'Agricultural and horticultural films endure intense solar UV radiation, wind uplift, and temperature cycling across one or multiple growing seasons. Partner formulations incorporate UV stabilisers, thermal modifiers, and multi-layer mechanical reinforcement.',
    whatItIs:
      'Wide-width monolayer or multi-layer co-extruded agricultural polyethylene films tailored for tunnel cladding, soil mulching, or anaerobic forage sealing.',
    howManufactured:
      'Wide-width blown-film extrusion with precision gravimetric dosing of hindered amine light stabilisers (HALS), UV absorbers, EVA thermal resins, and anti-drip/anti-fog packages.',
    availableMaterials: ['Virgin LDPE/LLDPE/EVA multi-layer blends', 'Black/white or silver/black co-extruded mulch grades'],
    constructionOptions: ['3-layer / 5-layer wide greenhouse cladding (folded rolls)', 'Thin high-strength mulch rolls', 'Oxygen-barrier bunker/silage covers'],
    specifications: buildStandardSpecRows({
      'Material grade': ['Virgin UV-stabilised LDPE / LLDPE / EVA co-extrusion', 'Additive package calibrated to target solar kLy exposure'],
      'Film thickness (microns)': ['20 µm – 220 µm (Illustrative range)', 'Mulch (20–50 µm) vs. Greenhouse & Silage (120–220 µm)'],
      'Width': ['1,000 mm – 12,000 mm unfolded (folded for shipping)', 'Tailored to tunnel hoop spacing or raised bed width'],
      'Bag dimensions': ['Not applicable (wide roll format)', 'Supplied folded on heavy-duty cores'],
    }),
    typicalApplications: [
      'Commercial polytunnel and greenhouse roof/sidewall cladding',
      'Row-crop horticultural mulch for weed suppression and soil temperature control',
      'Dairy and livestock silage bunker covers',
    ],
    industryUseCases: [
      { industry: 'Agriculture & Horticulture', useCase: 'Multi-season UV-stabilised tunnel films balancing diffused PAR light transmission with wind-load tear resistance.' },
    ],
    performanceCharacteristics: [
      'Retained elongation and tensile strength under sustained UV exposure',
      'Optional anti-drip surface behaviour reducing condensation droplet burn on crops',
    ],
    availableCustomisation: [
      'Anti-drip, light-diffusing, and infrared thermal retention additives',
      'Custom width and pre-punched planting-hole spacing on mulch rolls',
    ],
    qualityInspectionParameters: [
      'Additive masterbatch dosing verification and batch traceability',
      'Dart impact, tear resistance, and roll unfolded width verification',
    ],
    packagingAndLogistics: [
      'Heavy folded rolls wrapped in UV-opaque protective outer packaging to prevent pre-installation UV degradation',
    ],
    howBuyersSelect: [
      'Specify local annual solar radiation (kLy), target service seasons, and whether sulphur/chlorine agrochemical sprays contact the film.',
    ],
    commonBuyerMistakes: [
      'Applying sulphur-based greenhouse fungicides without specifying sulphur-resistant HALS UV packages, which rapidly embrittles standard UV films.',
    ],
    faqs: [
      {
        question: 'Why does agricultural film thickness vary so widely between mulch and greenhouse covers?',
        answer: 'Single-season mulch films sit flat on soil and use thin downgauged LLDPE (20–40 µm) to minimise material volume, whereas suspended greenhouse roofs endure wind uplift and hail impact, typically requiring 150–200 µm multi-layer structures.',
      },
    ],
    relatedProductSlugs: ['builders-film-construction-sheeting', 'ldpe-lldpe-industrial-jumbo-rolls'],
    relatedArticleSlugs: ['blown-film-extrusion-explained', 'what-determines-strength-of-plastic-film'],
  },

  // 9. PE Tubing & Layflat Films
  {
    slug: 'seamless-pe-layflat-tubing',
    categorySlug: 'pe-tubing-layflat-films',
    name: 'Seamless PE Layflat Tubing & Gusseted Tubular Rolls',
    shortLabel: 'PE Layflat Tubing',
    resinOptions: ['LDPE', 'LLDPE', 'HDPE'],
    summary:
      'Continuous unprinted or printed polyethylene layflat tubing enabling on-demand custom-length bagging for pipes, extrusions, textiles, and variable parts.',
    imageKey: 'pe_films',
    overview:
      'Polyethylene layflat tubing eliminates the cost of holding dozens of fixed-length bag SKUs when packaging variable-length products. Operators pull the required length off a dispenser, cut, and impulse-seal both ends.',
    whatItIs:
      'A continuous extruded sleeve of polyethylene wound flat onto a core with no bottom or side seams—only two continuous folded edges.',
    howManufactured:
      'Extruded via blown-film process where the cylindrical film bubble is collapsed directly through the nip rollers and wound onto a roll without edge slitting.',
    availableMaterials: ['High-clarity virgin LDPE', 'Puncture-resistant LLDPE blend', 'Stiff thin HDPE', 'Anti-static or VCI-compatible grades'],
    constructionOptions: ['Flat seamless layflat tube', 'Side-gusseted continuous tubular roll', 'Pre-perforated continuous sleeve'],
    specifications: buildStandardSpecRows({
      'Film thickness (microns)': ['30 µm – 200 µm (Illustrative range)', 'Light dust sleeve to heavy hardware tubing'],
      'Width': ['50 mm – 1,500 mm layflat width (Illustrative range)', 'Circumference equals 2 × layflat width'],
      'Bag dimensions': ['Continuous user-cut length', 'Eliminates fixed bag length limits'],
      'Seal configuration': ['Seamless extruded tube (no side seams)', 'User-sealed on impulse or constant-heat band sealer'],
    }),
    typicalApplications: [
      'Packaging long aluminium, PVC, steel, and timber extrusions',
      'Rolled carpets, textiles, hoses, and coiled cabling',
      'Low-volume / high-mix industrial spare parts packing stations',
    ],
    industryUseCases: [
      { industry: 'Manufacturing & Engineering', useCase: 'Benchtop and automated tubing dispensers cutting exact-fit moisture sleeves for hydraulic hoses and shafts.' },
    ],
    performanceCharacteristics: [
      'Zero side-weld seam failure risk because tube walls are continuously extruded',
      'Reduces SKU inventory complexity across variable-length manufacturing lines',
    ],
    availableCustomisation: [
      'Continuous repeat print (brand, safety warnings, recycle symbol)',
      'UV tinting, blue/black opacity, or anti-static additives',
    ],
    qualityInspectionParameters: [
      'Layflat width tolerance and fold-edge uniformity',
      'Gauge consistency around full 360° bubble circumference',
    ],
    packagingAndLogistics: [
      'Dispenser-ready hand rolls (10–25 kg) boxed individually or bulk palletised',
    ],
    howBuyersSelect: [
      'Calculate minimum layflat width using: (Product Width + Product Height + 25 mm clearance) for rectangular items, or (π × Diameter / 2 + 25 mm) for round items.',
    ],
    commonBuyerMistakes: [
      'Confusing layflat width with product diameter—a 100 mm diameter pipe needs at least ~175 mm layflat width, not 100 mm.',
    ],
    faqs: [
      {
        question: 'Can layflat tubing be supplied with side gussets?',
        answer: 'Yes. Continuous gusseted tubing allows bulky square or cylindrical products to sit neatly inside an expanded rectangular sleeve.',
      },
    ],
    relatedProductSlugs: ['flat-perforated-industrial-pe-bags', 'ldpe-lldpe-industrial-jumbo-rolls'],
    relatedArticleSlugs: ['choosing-between-flat-gusseted-tubular-bags', 'how-to-calculate-weight-pe-film-roll'],
  },

  // 10. Custom Packaging & Conversion
  {
    slug: 'bespoke-engineered-pe-packaging',
    categorySlug: 'custom-packaging',
    name: 'Bespoke Engineered PE Films & Custom Conversion',
    shortLabel: 'Custom PE Packaging',
    resinOptions: ['Tailored LDPE/LLDPE/HDPE/mLLDPE'],
    summary:
      'Application-engineered polyethylene films, custom die widths, multi-colour flexo prints, specialised perforations, and trial-validated custom bag formats.',
    imageKey: 'polymer_pellets',
    overview:
      'Standard packaging frequently forces compromises on line speed, waste rate, or transit protection. FLEXORA coordinates end-to-end custom specification development—translating operational requirements into custom resin blends, die widths, sealing layers, and conversion tooling.',
    whatItIs:
      'Specification-led bespoke packaging solutions co-developed with qualified extrusion and conversion partners following technical review and sample trial validation.',
    howManufactured:
      'Custom resin compounding, multi-layer co-extrusion, precision slitting, CI flexographic printing, and specialised bag/liner conversion tailored to approved engineering drawings.',
    availableMaterials: ['Multi-layer custom mLLDPE / LDPE / HDPE architectures', 'Verified PCR-content blends where technically viable'],
    constructionOptions: ['Custom-engineered jumbo roll', 'Bespoke gusseted/wicketed/perforated bag', 'Multi-colour branded industrial film'],
    specifications: buildStandardSpecRows({
      'Material grade': ['Engineered to target COF, SIT, dart impact, and barrier profile', 'Documented in customer-approved specification sheet'],
      'Film thickness (microns)': ['18 µm – 250 µm (Illustrative range)', 'Downgauging studies coordinated where technically feasible'],
      'Width': ['Custom slit or tubular width to customer drawing', 'Matched to machine throat or pallet dimensions'],
      'Printing': ['Custom multi-colour flexographic artwork & variable batch fields', 'Formal digital & press-proof approval workflow'],
    }),
    typicalApplications: [
      'Replacing failing or over-thick incumbent packaging on high-speed lines',
      'Consolidating multiple bag SKUs into optimised co-extruded standards',
      'Private-label distributor ranges requiring consistent custom branding',
    ],
    industryUseCases: [
      { industry: 'Packaging Procurement Teams', useCase: 'Consolidating imported film and bag specifications across multiple manufacturing sites with uniform quality criteria.' },
    ],
    performanceCharacteristics: [
      'Engineered specifically around customer machinery jaw temperatures, speed, and load weight',
      'Trial-roll sign-off before commercial volume commitment',
    ],
    availableCustomisation: [
      'Resin architecture, slip/anti-block levels, UV/anti-static packages, micro-perforation, and custom palletisation',
    ],
    qualityInspectionParameters: [
      'Custom Golden Sample retention and agreed Certificate of Analysis (CoA) parameter checklist per batch',
    ],
    packagingAndLogistics: [
      'Tailored export packing, pallet sizing, and container stowage plan matched to receiving warehouse racking',
    ],
    howBuyersSelect: [
      'Share current film sample details, machine model/speed, failure modes observed today, and annualised volume so partners can engineer an optimal trial spec.',
    ],
    commonBuyerMistakes: [
      'Focusing solely on per-kilogram price without evaluating downgauging yield (square metres per kilogram) and line stoppage costs.',
    ],
    faqs: [
      {
        question: 'What is the typical pathway for a custom packaging project?',
        answer: 'FLEXORA follows a structured workflow: Technical Specification Review → Partner Matching → Sample / Trial Roll Development → Customer Line Approval → Production & Pre-Shipment Inspection → Export Delivery.',
      },
    ],
    relatedProductSlugs: ['ldpe-lldpe-industrial-jumbo-rolls', 'printed-pe-film-rolls'],
    relatedArticleSlugs: ['what-international-buyers-check-pe-film-supplier', 'quality-control-industrial-flexible-packaging'],
  },
];

export function getProductsByCategory(categorySlug: string): ProductItem[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
