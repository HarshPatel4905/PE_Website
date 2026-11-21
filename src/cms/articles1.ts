import { EditorialArticle } from './types';

export const ARTICLES_PART_1: EditorialArticle[] = [
  {
    slug: 'ldpe-vs-lldpe-vs-hdpe-industrial-buyers-guide',
    number: 1,
    title: "LDPE vs LLDPE vs HDPE: A Complete Industrial Buyer's Guide",
    category: 'Polymer Materials',
    publishedDate: 'November 18, 2026',
    readTime: '7 min read',
    summary:
      'A structural and mechanical comparison of Low-Density, Linear Low-Density, and High-Density Polyethylene resins to help industrial procurement teams avoid over-specifying gauge or mis-matching film toughness.',
    keyTakeaways: [
      'LDPE offers optical clarity, broad heat-seal windows, and soft drape—ideal for shrink films and light covers.',
      'LLDPE delivers superior dart impact, puncture resistance, and tensile elongation, enabling thinner gauges on heavy loads.',
      'HDPE provides the highest stiffness and moisture-vapour barrier per micron, though with lower tear-propagation resistance.',
    ],
    sections: [
      {
        heading: '1. Molecular Architecture Dictates Film Behaviour',
        paragraphs: [
          'Although LDPE, LLDPE, and HDPE all share the same ethylene monomer backbone, differences in polymer chain branching alter crystallinity, density, melting temperature, and mechanical performance. For an industrial packaging buyer, treating "polyethylene" as a single interchangeable commodity leads directly to split seams, machine jams, or unnecessary material spend.',
          'Low-Density Polyethylene (LDPE, density roughly 0.915–0.930 g/cm³) is produced via high-pressure free-radical polymerisation, creating numerous long and short side branches. These branches prevent chains from packing tightly together, producing an amorphous, flexible, transparent film with an exceptionally forgiving heat-sealing window.',
          'Linear Low-Density Polyethylene (LLDPE, density roughly 0.915–0.940 g/cm³) uses short, uniform comonomer branches (typically butene C4, hexene C6, or octene C8) along a linear backbone. That uniform branching allows chains to entangle tightly under stress, giving LLDPE dramatically higher tensile strength, puncture resistance, and elongation than LDPE at equal thickness.',
          'High-Density Polyethylene (HDPE, density roughly 0.941–0.965 g/cm³) has minimal branching. Chains pack into dense crystalline domains, yielding high stiffness, crisp handling, elevated heat resistance, and the lowest moisture vapour transmission rate (MVTR) of the three families.',
        ],
      },
      {
        heading: '2. Comparing Key Industrial Selection Criteria',
        paragraphs: [
          'Procurement engineers evaluate polyethylene resins across five operational parameters: puncture/dart impact, tensile stiffness, seal initiation temperature (SIT), optical clarity, and moisture barrier. No single resin wins every category, which is why co-extrusion and resin blending are widely used.',
        ],
        bullets: [
          'Puncture & Dart Impact: LLDPE (especially C6/C8 and metallocene mLLDPE) outperforms LDPE and HDPE, making it essential for sharp-edged hardware, mineral wool compression bags, and stretch hoods.',
          'Optical Clarity & Gloss: Virgin LDPE and mLLDPE blends deliver high see-through clarity; standard high-stalk HDPE appears translucent-frosted.',
          'Stiffness & Machinability: HDPE stands upright on bag-filling chutes at thin gauges (15–30 µm), whereas LDPE/LLDPE at the same gauge feels limp and requires higher thickness for structural stand-up.',
          'Moisture Barrier: HDPE provides noticeably lower MVTR per micron than LDPE or LLDPE—valued in dry chemical, hygroscopic resin, and moisture-sensitive liner specifications.',
          'Heat Sealing Window: LDPE seals easily at lower jaw temperatures and tolerates slight contamination or temperature drift; HDPE requires higher seal temperatures and tighter dwell control.',
        ],
      },
      {
        heading: '3. Blending and Co-Extrusion in Modern Sourcing',
        paragraphs: [
          'In practice, few demanding industrial films rely on 100% pure LDPE today. Blending 20–40% LLDPE into LDPE boosts puncture resilience without sacrificing bubble stability on mono-layer blown-film lines. On 3-layer or 5-layer co-extrusion lines, converters place high-strength C6/C8 LLDPE in the core while using tailored LDPE/mLLDPE outer skins to achieve fast low-temperature sealing and controlled slip.',
          'When requesting quotations, buyers should avoid specifying "virgin PE" without defining whether stiffness, optical clarity, or puncture toughness governs failure risk. Sharing the packed weight, sharp-corner profile, storage temperature, and sealing hardware allows partners to propose the most cost-effective resin architecture.',
        ],
      },
    ],
    relatedProductCategories: ['pe-films-jumbo-rolls', 'industrial-pe-bags', 'insulation-packaging'],
  },
  {
    slug: 'how-polyethylene-film-is-manufactured',
    number: 2,
    title: 'How Polyethylene Film Is Manufactured',
    category: 'Film Manufacturing',
    publishedDate: 'November 18, 2026',
    readTime: '6 min read',
    summary:
      'From resin pellet feeding and gravimetric dosing to annular blown-film dies, air-ring cooling, corona treatment, and precision slitting.',
    keyTakeaways: [
      'Most industrial PE packaging films are produced via blown-film extrusion rather than cast extrusion.',
      'Melt temperature, blow-up ratio (BUR), and frost-line height directly control MD/TD strength balance.',
      'Inline corona treatment, gusseting, and tension-controlled winding prepare jumbo rolls for downstream printing or conversion.',
    ],
    sections: [
      {
        heading: '1. Resin Preparation and Gravimetric Dosing',
        paragraphs: [
          'Manufacturing begins at the hopper stage, where virgin or vetted recycled polyethylene granules are blended with functional masterbatches—such as slip agents, anti-block mineral additives, UV stabilisers (HALS), anti-static agents, or colour pigments. Modern extrusion lines rely on gravimetric loss-in-weight feeders to maintain exact additive percentages rather than volumetric guesswork.',
        ],
      },
      {
        heading: '2. Extrusion Melting and Annular Die Forming',
        paragraphs: [
          'Inside the heated extruder barrel, a rotating precision screw conveys, compresses, and melts the polymer granules through shear friction and external barrel heaters. Screen packs at the breaker plate filter out unmelted gels or contaminants before the homogeneous melt enters the spiral mandrel annular die.',
          'For multi-layer co-extruded films, two, three, or five separate extruders feed concentric channels inside a single co-extrusion die head, merging distinct polymer layers cleanly without interfacial turbulence.',
        ],
      },
      {
        heading: '3. Bubble Expansion, Frost Line, and Cooling',
        paragraphs: [
          'As the molten polymer tube exits the circular die vertically upward (or downward in water-quench lines), compressed internal air inflates the tube to a target diameter. The ratio of final bubble diameter to die diameter—the Blow-Up Ratio (BUR)—determines transverse-direction (TD) molecular orientation.',
          'Simultaneously, a high-velocity air ring cools the outside of the bubble. The vertical distance from the die lip to where the clear melt solidifies into a frosty or semi-crystalline film is called the frost-line height. Maintaining symmetrical airflow prevents thick-and-thin gauge bands around the bubble circumference.',
        ],
      },
      {
        heading: '4. Collapsing, Surface Treatment, and Winding',
        paragraphs: [
          'Once cooled, the cylindrical bubble passes through an A-frame collapsing board and rubber nip rollers, flattening into a double-layer layflat tube. Gusseting boards can tuck the edges inward here to form side gussets, or rotary slitting knives can trim the edges to produce two flat single-wound webs.',
          'If downstream flexographic printing or lamination is required, the film passes through an inline corona treater that raises surface tension (measured in dynes/cm) for reliable ink wetting. Finally, surface or centre winders build jumbo rolls under tapered tension to prevent telescoping during sea freight.',
        ],
      },
    ],
    relatedProductCategories: ['pe-films-jumbo-rolls', 'pe-tubing-layflat-films'],
  },
  {
    slug: 'understanding-micron-gauge-film-thickness',
    number: 3,
    title: 'Understanding Micron, Gauge and Film Thickness',
    category: 'Technical Properties',
    publishedDate: 'November 17, 2026',
    readTime: '5 min read',
    summary:
      'Converting cleanly between microns (µm), millimetres, mils, and North American gauge units—plus why resin density matters just as much as thickness.',
    keyTakeaways: [
      '1 mil = 25.4 microns = 100 gauge; 100 microns = 0.10 mm = ~3.94 mils.',
      'Nominal thickness alone never guarantees strength: a 70 µm mLLDPE co-ex film can outperform a 100 µm standard LDPE film.',
      'Always evaluate thickness tolerance (±%) alongside minimum-point vs. average-weight measurement methods.',
    ],
    sections: [
      {
        heading: '1. Global Thickness Units Explained',
        paragraphs: [
          'International packaging procurement crosses regions that use three distinct thickness notations: microns (µm) across Australia, India, Europe, and Asia; mils (thousandths of an inch) in North America; and traditional "gauge" (hundredths of a mil). Misinterpreting "100 gauge" (25.4 µm) as "100 micron" (0.10 mm) is one of the most expensive specification errors in cross-border purchasing.',
        ],
        bullets: [
          '1 micron (µm) = 0.001 mm = 0.03937 mils = 3.937 gauge',
          '25.4 microns = 0.0254 mm = 1.0 mil = 100 gauge',
          '50 microns = 0.050 mm ≈ 1.97 mils ≈ 197 gauge',
          '100 microns = 0.100 mm ≈ 3.94 mils ≈ 394 gauge',
          '200 microns = 0.200 mm ≈ 7.87 mils ≈ 787 gauge',
        ],
      },
      {
        heading: '2. Average Gauge vs. Point-to-Point Tolerance',
        paragraphs: [
          'Blown-film extrusion naturally exhibits slight cross-web thickness variation caused by die tolerances, melt viscosity gradients, and air-ring cooling symmetry. Standard commercial blown PE tolerances typically fall within ±8% to ±12% depending on film width and gauge, though tighter tolerances are achievable on modern automatic-gauge-control (AGC) lines.',
          'Buyers should clarify in their technical specification whether quoted thickness refers to average roll yield thickness or strict minimum-point thickness—especially in moisture-barrier or compression applications where a single thin band initiates tearing.',
        ],
      },
      {
        heading: '3. Why Thickness Alone Does Not Equal Performance',
        paragraphs: [
          'Historically, industrial buyers ordered thicker LDPE film whenever bags tore in transit. Modern metallocene LLDPE and multi-layer co-extrusion allow downgauging—reducing micron thickness by 15–30% while maintaining or increasing dart impact and tensile yield. Evaluating yield (m²/kg) alongside mechanical test targets prevents paying for excess polymer mass.',
        ],
      },
    ],
    relatedProductCategories: ['pe-films-jumbo-rolls', 'construction-films', 'industrial-pe-bags'],
  },
  {
    slug: 'how-to-calculate-weight-pe-film-roll',
    number: 4,
    title: 'How to Calculate the Weight of a PE Film Roll',
    category: 'Technical Properties',
    publishedDate: 'November 17, 2026',
    readTime: '5 min read',
    summary:
      'Step-by-step mass, length, and yield equations for single-wound sheeting, centre-folded webs, and seamless layflat tubing rolls.',
    keyTakeaways: [
      'Net Film Weight (kg) = Width (m) × Length (m) × Thickness (µm) × Density (g/cm³) ÷ 1,000.',
      'For double-wall layflat tubing or centre-folded rolls, multiply single-wall thickness by 2 (or add gusset circumference).',
      'Always add paperboard core weight separately when verifying gross roll handling limits.',
    ],
    sections: [
      {
        heading: '1. The Core Roll Weight Formula',
        paragraphs: [
          'Accurate roll weight calculations let procurement teams compare supplier quotes fairly (price per kg vs. price per roll), verify receiving scale deliveries, and confirm crane or pallet-jack load limits. Because polyethylene floats on water, its solid density is slightly under 1.0 g/cm³—commonly estimated at 0.923 g/cm³ for LDPE/LLDPE and 0.950 g/cm³ for HDPE (pigmented mineral-filled films run higher, around 0.96–1.05 g/cm³ depending on CaCO₃/TiO₂ loading).',
          'For a single-layer flat film sheet (SWS): Net Weight (kg) = Width (m) × Length (m) × Thickness (µm) × Density (g/cm³) ÷ 1,000.',
          'Example: A 1.2 m wide single-wound LDPE roll, 500 m long, at 80 µm thickness with density 0.923 g/cm³ weighs: 1.2 × 500 × 80 × 0.923 ÷ 1,000 = 44.30 kg net film weight.',
        ],
      },
      {
        heading: '2. Accounting for Layflat Tubing and Gussets',
        paragraphs: [
          'When calculating weight for seamless layflat tubing or centre-folded film, remember that each metre of roll length contains two film walls (front and back). Therefore, multiply the single-wall micron thickness by 2.',
          'For gusseted tubing, calculate total unfolded perimeter: Total Unfolded Width (m) = 2 × (Layflat Width + Total Gusset Depth) ÷ 1,000 (when inputs are in mm). Then apply the single-wall thickness formula using that full unfolded perimeter.',
        ],
      },
      {
        heading: '3. Checking Gross Weight and Area Yield',
        paragraphs: [
          'Area yield (m²/kg) equals 1,000 ÷ (Thickness in µm × Density in g/cm³). An 80 µm LDPE film yields roughly 13.54 m² per kilogram. Always confirm whether supplier quotes list net film weight or gross weight (including the 76 mm or 152 mm heavy-wall cardboard core and end plugs).',
        ],
      },
    ],
    relatedProductCategories: ['pe-films-jumbo-rolls', 'pe-tubing-layflat-films'],
  },
  {
    slug: 'virgin-resin-vs-recycled-polyethylene',
    number: 5,
    title: 'Virgin Resin vs Recycled Polyethylene',
    category: 'Polymer Materials',
    publishedDate: 'November 16, 2026',
    readTime: '6 min read',
    summary:
      'Evaluating mechanical consistency, contamination thresholds, PIR vs. PCR sources, and when recycled polyethylene is technically appropriate.',
    keyTakeaways: [
      'Post-industrial recycled (PIR) trim regrind offers much tighter viscosity and cleanliness than mixed post-consumer resin (PCR).',
      'Recycled PE suits thick non-food utility sheeting, secondary pallet covers, and non-critical liners.',
      'High-speed automated FFS lines, thin gauges (<35 µm), and high-stress compression bags typically demand virgin or co-extruded virgin-skin structures.',
    ],
    sections: [
      {
        heading: '1. Understanding PIR vs. PCR Feedstocks',
        paragraphs: [
          'Not all recycled polyethylene behaves identically. Post-Industrial Recycled (PIR) resin originates from clean factory edge-trim, start-up film, or single-stream converter offcuts whose polymer family and additive history are well documented. Post-Consumer Recycled (PCR) resin comes from recovered commercial stretch wrap, agricultural films, or household packaging that underwent sorting, washing, and re-pelletisation.',
          'While PCR reduces virgin fossil feedstock demand and supports circularity targets, residual moisture, paper fibres, incompatible polypropylene traces, or oxidised gel particles can introduce pinhole defects and inconsistent melt flow index (MFI) if not tightly filtered and compounded.',
        ],
      },
      {
        heading: '2. Where Recycled PE Works Well—and Where It Fails',
        paragraphs: [
          'In thicker films (typically 80–250 µm) such as black builders sheeting, general-purpose trash/scrap liners, or opaque pallet shrouds, 30–100% controlled PIR/PCR blends can deliver reliable service when mechanical tolerances allow moderate gauge safety margins.',
          'Conversely, thin-gauge films (<35 µm), high-clarity display packaging, food-contact liners, and high-creep insulation compression bags are vulnerable to gel-initiated tearing and seal contamination from mixed PCR. In co-extruded films, placing vetted recycled content strictly in the encapsulated middle core layer while keeping virgin resin on outer sealing skins offers a practical engineering compromise.',
        ],
      },
    ],
    relatedProductCategories: ['construction-films', 'industrial-pe-bags', 'custom-packaging'],
  },
  {
    slug: 'what-determines-strength-of-plastic-film',
    number: 6,
    title: 'What Determines the Strength of a Plastic Film?',
    category: 'Technical Properties',
    publishedDate: 'November 16, 2026',
    readTime: '6 min read',
    summary:
      'Why "strong film" means different things across tensile yield, dart impact, Elmendorf tear, and creep resistance—and how processing shifts those properties.',
    keyTakeaways: [
      'Film strength is multi-dimensional: tensile strength, impact resistance, and tear propagation measure distinct failure modes.',
      'Blow-up ratio (BUR) and draw-down ratio (DDR) govern directional balance between MD and TD.',
      'Co-extrusion allows combining stiff outer skins with tough, crack-arresting core layers.',
    ],
    sections: [
      {
        heading: '1. Five Distinct Mechanical Failure Modes',
        paragraphs: [
          'Procurement teams often ask simply for a "stronger film", yet two films with identical tensile break values can behave oppositely on a packing floor. Understanding which mechanical mechanism triggers field failure prevents mis-directed thickness increases.',
        ],
        bullets: [
          'Tensile Strength at Yield: Governs whether a bag stretches permanently under load (crucial for compressed insulation packs and stretch hoods).',
          'Dart Drop Impact (ASTM D1709): Measures resistance to sudden blunt-force shock—for example, dropping a 25 kg resin sack onto concrete.',
          'Elmendorf Tear Resistance (ASTM D1922): Measures how easily a small nick propagates into a catastrophic split.',
          'Slow Puncture Resistance: Measures resistance against sharp wood splinters, pallet nails, or metal corners.',
          'Creep Resistance: Measures gradual stretching over weeks or months under constant outward pressure.',
        ],
      },
      {
        heading: '2. Extrusion Orientation and Polymer Choice',
        paragraphs: [
          'During blown-film extrusion, pulling the bubble upward too aggressively relative to radial expansion aligns chains heavily along the Machine Direction (MD), leaving Transverse Direction (TD) tear resistance vulnerable—producing films that "zipper" lengthwise from any small edge nick. Balancing Blow-Up Ratio and frost-line height, alongside using C6/C8 LLDPE or metallocene co-polymers, creates isotropic toughness across both directions.',
        ],
      },
    ],
    relatedProductCategories: ['insulation-packaging', 'industrial-pe-bags', 'pallet-covers-stretch-hood'],
  },
  {
    slug: 'how-to-select-right-pe-packaging-bag',
    number: 7,
    title: 'How to Select the Right PE Packaging Bag',
    category: 'Industrial Packaging',
    publishedDate: 'November 15, 2026',
    readTime: '6 min read',
    summary:
      'A systematic 6-step specification checklist covering contents geometry, fill weight, sealing equipment, ambient environment, and palletisation.',
    keyTakeaways: [
      'Size bag width and length from loaded 3D volume plus sealing headspace—never flat product dimensions alone.',
      'Match film thickness and resin blend to drop-height energy and sharp-edge puncture risk.',
      'Specify slip/anti-block levels and vent holes based on operator handling and automated filling speed.',
    ],
    sections: [
      {
        heading: '1. Map the Product Profile and Loading Method',
        paragraphs: [
          'Start with the physical nature of the goods: free-flowing granules/powders, rigid rectangular cartons, sharp metal hardware, or compressible fibrous batts. Free-flowing products conform to the bag and require accurate gusset volume; rigid boxes require perimeter clearance of at least 20–30 mm plus extra length for folding or heat sealing.',
        ],
      },
      {
        heading: '2. Match Sealing Method and Surface Additives',
        paragraphs: [
          'If operators manually open bags, specify moderate anti-block additive so inner walls do not cling together by static or vacuum. If filled bags are stacked high on pallets, avoid excessive high-slip external coatings that cause stacks to slide off in transit. Where bags are filled rapidly with dusty powders or bulky batts, specify strategically positioned air-evacuation pinholes or punched vents.',
        ],
      },
    ],
    relatedProductCategories: ['industrial-pe-bags', 'industrial-liners', 'insulation-packaging'],
  },
  {
    slug: 'buyers-guide-industrial-jumbo-rolls',
    number: 8,
    title: "A Buyer's Guide to Industrial Jumbo Rolls",
    category: 'Industrial Packaging',
    publishedDate: 'November 15, 2026',
    readTime: '6 min read',
    summary:
      'Avoiding unwinder bottlenecks, telescoping defects, and core failures when specifying master PE jumbo rolls for conversion or automated lines.',
    keyTakeaways: [
      'Always verify maximum roll OD, core ID (76 mm vs. 152 mm), and crane/shaft weight rating before ordering.',
      'Specify unwind direction, treated-side orientation (in/out), and splice allowance per roll.',
      'Insist on core strength matching heavy 400–800 kg roll weights during maritime freight.',
    ],
    sections: [
      {
        heading: '1. Mechanical Compatibility With Unwind Equipment',
        paragraphs: [
          'Buying heavy jumbo rolls lowers changeover frequency and scrap loss, but only if your receiving line can physically mount and brake them. Confirm maximum roll outer diameter (OD), shaft diameter (76 mm vs. 152 mm core), maximum chuck weight, and whether web tension control handles heavy-inertia starts and stops.',
        ],
      },
      {
        heading: '2. Winding Quality, Splices, and Core Protection',
        paragraphs: [
          'Poorly tension-profiled jumbo rolls develop telescoping (inner layers sliding sideways like a telescope) or blocking (layers sticking together under high wrap pressure in warm shipping containers). Buyers should confirm maximum permitted splices per roll, clear splice flagging, and reinforced heavy-wall cores with protective end-cradles for sea freight.',
        ],
      },
    ],
    relatedProductCategories: ['pe-films-jumbo-rolls', 'custom-packaging'],
  },
  {
    slug: 'packaging-requirements-glass-wool-rockwool-insulation',
    number: 9,
    title: 'Packaging Requirements for Glass Wool and Rockwool Insulation',
    category: 'Industrial Packaging',
    publishedDate: 'November 14, 2026',
    readTime: '7 min read',
    summary:
      'Engineering compression packaging films and gusseted bags that survive 3:1 to 6:1 baling compression, fibrous abrasion, and outdoor construction staging.',
    keyTakeaways: [
      'Insulation films experience continuous sustained hoop and seal stress—high-creep LDPE alone will balloon or split.',
      'Co-extruded C6/C8 LLDPE + LDPE blends balance low creep, puncture resilience, and reliable twin-bar weld strength.',
      'Precision air-vent holes and 6–12 month UV stabilisation are critical for baling speed and site storage.',
    ],
    sections: [
      {
        heading: '1. The Physics of Compression Baling',
        paragraphs: [
          'Thermal glass wool and acoustic rockwool batts contain mostly trapped air, making un-compressed transport economically unviable. High-speed hydraulic balers compress stacked batts to a fraction of their free height and ram them into gusseted PE bags or tubular sleeves. The moment the ram retracts, stored elastic energy transfers directly onto the polyethylene walls and side/bottom heat seals.',
        ],
      },
      {
        heading: '2. Preventing Seal Creep, Puncture, and UV Embrittlement',
        paragraphs: [
          'Two failure modes dominate insulation packaging: gradual tensile creep (causing bundles to swell beyond pallet dimensions in warm warehouses) and gusset-corner seal delamination. Multi-layer co-extrusion combining high-yield metallocene/hexene LLDPE cores with clean LDPE sealing skins prevents both failures while accommodating crisp flexographic R-value branding.',
          'Because packs frequently sit outdoors on residential or commercial build sites before roof installation, UV-stabiliser masterbatch matched to regional solar intensity protects film integrity until installation.',
        ],
      },
    ],
    relatedProductCategories: ['insulation-packaging', 'pallet-covers-stretch-hood'],
  },
  {
    slug: 'how-to-specify-industrial-liners',
    number: 10,
    title: 'How to Specify Industrial Liners',
    category: 'Industrial Packaging',
    publishedDate: 'November 14, 2026',
    readTime: '6 min read',
    summary:
      'Matching liner geometry, resin purity, and discharge spouts to 200 L drums, octabins, gaylord cartons, and woven FIBC bulk bags.',
    keyTakeaways: [
      'Liner circumference must match or slightly exceed the outer rigid/woven container circumference so the outer container—not the film—carries load tension.',
      'Select round-bottom drum liners for viscous pastes and pump-out lines to avoid trapped corner pockets.',
      'Confirm filling temperature, static-dissipative requirements, and moisture barrier expectations before quoting.',
    ],
    sections: [
      {
        heading: '1. The Golden Rule of Liner Sizing',
        paragraphs: [
          'An industrial liner is a barrier, not a structural vessel. If a liner is slightly too narrow or too short for its drum, octabin, or FIBC, the weight of the filled powder or paste suspends on the polyethylene seams rather than transferring to the rigid outer wall—causing catastrophic seam tearing during filling or transit.',
          'Always allow adequate circumference plus 150–250 mm of vertical excess for cuff fold-over, gooseneck tying, or heat sealing.',
        ],
      },
      {
        heading: '2. Drum, Box, and FIBC Configurations',
        paragraphs: [
          'For 200 L drums, flat open-top liners work well for dry solids, whereas contour round-bottom or pleated liners prevent follower-plate snagging during viscous pumping. For woven PP FIBCs, form-fit baffled or spouted liners anchored with weld-tabs prevent liner collapse during high-speed bottom discharge.',
        ],
      },
    ],
    relatedProductCategories: ['industrial-liners', 'industrial-pe-bags'],
  },
];
