import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { TechnicalImage } from '../components/TechnicalImage';
import { PRODUCT_CATEGORIES } from '../cms/categories';
import { PRODUCTS } from '../cms/products';
import { INDUSTRY_SECTORS, KNOWLEDGE_PILLARS } from '../cms/knowledge';
import { NEWS_ITEMS } from '../cms/news';
import { EDITORIAL_ARTICLES } from '../cms/articles';

const SUPPLY_STEPS = [
  'Customer Requirement',
  'Technical Specification Review',
  'Manufacturing-Partner Assessment',
  'Material & Process Selection',
  'Sample Development',
  'Customer Approval',
  'Production Coordination',
  'Quality Inspection',
  'Export Documentation',
  'Shipment Coordination',
];

const QUALITY_CHECKLIST = [
  'Raw material & resin documentation',
  'Customer-approved product specifications',
  'Cross-web thickness & dimension checks',
  'Roll-weight verification',
  'Visual defect & gel screening',
  'Seal & bag-integrity verification',
  'Agreed mechanical testing coordination',
  'Batch & lot identification',
  'Export packing & pallet inspection',
  'Pre-shipment verification checks',
  'Commercial & shipping documentation review',
];

export function HomePage() {
  usePageMeta({
    title: 'FLEXORA — Industrial Flexible Packaging & Polymer Solutions',
    description:
      'FLEXORA connects industrial buyers with flexible packaging manufacturing capabilities through specification-led sourcing, technical coordination, and export-focused supply management.',
  });

  const featuredNews = NEWS_ITEMS.slice(0, 4);
  const featuredArticles = EDITORIAL_ARTICLES.slice(0, 4);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-[#102B46] text-white border-b border-[#172536]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-wider text-[#DCE6EF]/80 mb-4">
                Industrial Packaging. Global Perspective.
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight leading-[1.1] text-white">
                Industrial Packaging Solutions. Built Around Your Requirements.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#DCE6EF]/90 leading-relaxed max-w-2xl">
                FLEXORA connects industrial buyers with suitable flexible packaging manufacturing capabilities through specification-led sourcing, technical coordination and export-focused supply management.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#102B46] bg-white hover:bg-[#DCE6EF] transition-colors whitespace-nowrap"
                >
                  <span>Discuss Your Packaging Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white border border-white/30 hover:border-white hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  Explore Our Products
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <div className="relative h-full min-h-[280px] border border-white/15 bg-[#172536]">
                <TechnicalImage
                  imageKey="hero_rolls"
                  priority
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-[11px] text-[#DCE6EF]/65">
                Illustrative industrial packaging visual — polyethylene jumbo rolls staged for export distribution.
              </p>
            </div>
          </div>

          {/* Core Positioning Strip below Hero Split */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-semibold text-[#DCE6EF]/70">Core Material Focus</p>
              <p className="mt-1 text-sm font-semibold text-white">LDPE · LLDPE · HDPE · Co-Extruded Films</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#DCE6EF]/70">Supply Architecture</p>
              <p className="mt-1 text-sm font-semibold text-white">Qualified Manufacturing-Partner Network</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#DCE6EF]/70">Primary Target Corridors</p>
              <p className="mt-1 text-sm font-semibold text-white">Australia &amp; India · International Markets</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#DCE6EF]/70">Engagement Approach</p>
              <p className="mt-1 text-sm font-semibold text-white">Specification-Led · Trial-Validated Supply</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Category Overview */}
      <section className="py-16 lg:py-20 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#3977A8] mb-2">Product Portfolio</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight">
                Engineered Polyethylene &amp; Polymer Packaging Families
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#172536]/80 leading-relaxed">
                All product families are coordinated for sourcing or custom specification development subject to confirmed manufacturing-partner capabilities.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102B46] hover:text-[#3977A8] whitespace-nowrap shrink-0"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <Link
                key={category.slug}
                to={`/products/${category.slug}`}
                className={`group bg-white border border-[#DCE6EF] hover:border-[#3977A8] transition-colors flex flex-col justify-between p-6 ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-xs text-[#3977A8] tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#3977A8] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#102B46] group-hover:text-[#3977A8] transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#172536]/80 leading-relaxed">
                    {category.tagline}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#DCE6EF] text-xs text-[#172536]/70">
                  {category.technicalScope[0]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industrial Applications */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#3977A8] mb-2">Industrial Applications</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight">
              Built for Conversion Lines, Heavy Handling, and Intermodal Transit
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="border border-[#DCE6EF] bg-[#F5F8FB] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden border-b border-[#DCE6EF]">
                <TechnicalImage imageKey="pe_films" className="w-full h-full" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#102B46]">
                    Jumbo Rolls &amp; Line-Feed Substrates
                  </h3>
                  <p className="mt-2 text-sm text-[#172536]/80 leading-relaxed">
                    Mono-layer and co-extruded PE film rolls tailored for VFFS/HFFS lines, downstream slitting, flexographic printing, and automated wrapping.
                  </p>
                </div>
                <Link
                  to="/products/pe-films-jumbo-rolls"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
                >
                  <span>Explore PE Films &amp; Jumbo Rolls</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="border border-[#DCE6EF] bg-[#F5F8FB] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden border-b border-[#DCE6EF]">
                <TechnicalImage imageKey="insulation_batt_single" className="w-full h-full" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#102B46]">
                    Insulation Compression &amp; Batt Bags
                  </h3>
                  <p className="mt-2 text-sm text-[#172536]/80 leading-relaxed">
                    High-yield LLDPE/LDPE gusseted compression bags with clear viewing panels and print bands for glass wool and rockwool batts, plus heavy-duty sacks and drum/octabin liners.
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#DCE6EF] pt-4">
                  <TechnicalImage
                    imageKey="insulation_batt_pallet"
                    className="border border-[#DCE6EF] aspect-[4/3]"
                  />
                  <TechnicalImage
                    imageKey="insulation_pack"
                    className="border border-[#DCE6EF] aspect-[4/3]"
                  />
                </div>
                <Link
                  to="/products/insulation-packaging"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
                >
                  <span>Explore Insulation Packaging</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="border border-[#DCE6EF] bg-[#F5F8FB] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden border-b border-[#DCE6EF]">
                <TechnicalImage imageKey="logistics_export" className="w-full h-full" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#102B46]">
                    Unit-Load &amp; Weather Shielding
                  </h3>
                  <p className="mt-2 text-sm text-[#172536]/80 leading-relaxed">
                    Elastic stretch hood films, pallet shrouds, shrink hoods, and builders sheeting designed to protect palletised cargo in open yards and sea freight.
                  </p>
                </div>
                <Link
                  to="/products/pallet-covers-stretch-hood"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
                >
                  <span>Explore Pallet Covers &amp; Hoods</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Specification Matters */}
      <section className="py-16 lg:py-20 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-semibold text-[#3977A8]">Engineering Discipline</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight">
                Why Technical Specification Determines Packaging Reliability
              </h2>
              <p className="text-sm sm:text-base text-[#172536]/85 leading-relaxed">
                Treating industrial polyethylene as an undifferentiated commodity introduces costly failure modes: split gusset welds, web breaks on high-speed FFS lines, crushed roll cores in container freight, or excessive resin gauge inflating unit cost.
              </p>
              <p className="text-sm sm:text-base text-[#172536]/85 leading-relaxed">
                FLEXORA coordinates procurement around verified technical parameters—resin density and melt flow index, co-extruded layer architecture, coefficient of friction (COF), seal initiation temperature, and export pallet geometry—before matching orders to capable manufacturing partners.
              </p>
              <div className="pt-2">
                <Link
                  to="/products/bespoke-engineered-pe-packaging"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102B46] hover:text-[#3977A8]"
                >
                  <span>Review Custom Specification Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Resin & Layer Matching',
                  body: 'Balancing LDPE sealability, LLDPE/mLLDPE dart impact, and HDPE moisture-barrier stiffness.',
                },
                {
                  title: 'Micron & Tolerance Control',
                  body: 'Clarifying nominal vs. minimum-point gauge expectations and cross-web uniformity.',
                },
                {
                  title: 'Machinability & COF',
                  body: 'Calibrating slip, anti-block, corona dyne levels, and core strength to unwind equipment.',
                },
                {
                  title: 'Export Pallet Economics',
                  body: 'Aligning roll outer diameters and ISPM-15 pallet footprints to container payload limits.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-[#DCE6EF] p-5">
                  <h3 className="font-display text-sm font-bold text-[#102B46]">{item.title}</h3>
                  <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Supply & Coordination Process */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#3977A8] mb-2">Supply Coordination Model</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight">
                From Technical Requirement to Verified Export Delivery
              </h2>
              <p className="mt-3 text-sm text-[#172536]/80 leading-relaxed">
                FLEXORA operates through qualified manufacturing partners rather than claiming owned extrusion plants—managing technical translation, partner assessment, sample validation, inspection, and export logistics under one disciplined workflow.
              </p>
            </div>
            <Link
              to="/manufacturing-capabilities"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102B46] hover:text-[#3977A8] whitespace-nowrap shrink-0"
            >
              <span>Explore Process Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SUPPLY_STEPS.map((step, i) => (
              <div key={step} className="border border-[#DCE6EF] bg-[#F5F8FB] p-4">
                <span className="font-mono text-xs font-semibold text-[#3977A8] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 font-display text-sm font-bold text-[#102B46] leading-snug">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quality Assurance Approach */}
      <section className="py-16 lg:py-20 bg-[#102B46] text-white border-b border-[#172536]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-[#DCE6EF]/75 mb-2">Quality Framework</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Structured Quality Coordination for Every Order
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#DCE6EF]/85 leading-relaxed">
                Inspection scope, testing methods, and acceptance tolerances are agreed explicitly per order and product specification prior to production—never assumed after goods ship.
              </p>
              <div className="mt-6">
                <TechnicalImage
                  imageKey="polymer_pellets"
                  showCaption
                  className="border border-white/15"
                  imgClassName="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="mt-6">
                <Link
                  to="/quality-assurance"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#DCE6EF]"
                >
                  <span>Read Full Quality Assurance Framework</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {QUALITY_CHECKLIST.map((item, idx) => (
                <div
                  key={item}
                  className="border border-white/15 bg-[#172536]/60 p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-[#DCE6EF]/70 tabular-nums mt-0.5">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-white leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Industries Served & 8. Global Supply */}
      <section className="py-16 lg:py-20 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-semibold text-[#3977A8] mb-2">Multi-Sector Reach</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight">
                  Industries We Serve
                </h2>
              </div>
              <Link
                to="/industries"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102B46] hover:text-[#3977A8]"
              >
                <span>View Sector Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INDUSTRY_SECTORS.map((sector) => (
                <div key={sector.slug} className="bg-white border border-[#DCE6EF] p-5">
                  <h3 className="font-display text-base font-bold text-[#102B46]">{sector.name}</h3>
                  <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">{sector.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#DCE6EF] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold text-[#3977A8]">Global Supply &amp; Exports</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight">
                Primary Focus Across Australia &amp; India, Built for International Corridors
              </h2>
              <p className="text-sm sm:text-base text-[#172536]/80 leading-relaxed">
                FLEXORA focuses initially on serving industrial buyers across Australia and India while establishing supply readiness for New Zealand, Southeast Asia, the Middle East, Europe, and additional international markets where technically and commercially viable.
              </p>
              <p className="text-xs text-[#172536]/70">
                Incoterms, biosecurity pallet requirements (such as ISPM-15), customs documentation, and ocean freight schedules are confirmed transparently per transaction.
              </p>
              <div className="pt-2">
                <Link
                  to="/global-supply-exports"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102B46] hover:text-[#3977A8]"
                >
                  <span>Explore Export Coordination Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-xs">
              {[
                { region: 'Australia', note: 'Primary Target Market' },
                { region: 'India', note: 'Primary Target Market' },
                { region: 'New Zealand & SE Asia', note: 'Expansion Corridor' },
                { region: 'Middle East & Europe', note: 'Expansion Corridor' },
              ].map((loc) => (
                <div key={loc.region} className="bg-[#F5F8FB] border border-[#DCE6EF] p-4">
                  <p className="font-display text-sm font-bold text-[#102B46]">{loc.region}</p>
                  <p className="mt-1 text-[#172536]/70">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Technical Knowledge Centre Preview */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#3977A8] mb-2">Engineering Reference</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46] tracking-tight">
                Technical Knowledge Centre
              </h2>
              <p className="mt-3 text-sm text-[#172536]/80">
                Practical polymer science, extrusion fundamentals, mechanical property definitions, quality control workflows, and an interactive roll-weight calculator for procurement teams.
              </p>
            </div>
            <Link
              to="/knowledge-centre"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102B46] hover:text-[#3977A8] whitespace-nowrap shrink-0"
            >
              <span>Open Knowledge Centre</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {KNOWLEDGE_PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                to={`/knowledge-centre#${pillar.id}`}
                className="border border-[#DCE6EF] bg-[#F5F8FB] hover:border-[#3977A8] p-5 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-[#102B46]">{pillar.title}</h3>
                  <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">{pillar.summary}</p>
                </div>
                <span className="mt-4 text-xs font-semibold text-[#3977A8]">Read Guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Latest Verified Industry News & 11. Featured Technical Articles */}
      <section className="py-16 lg:py-20 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* News Archive Preview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-end justify-between gap-4 border-b border-[#DCE6EF] pb-4">
              <div>
                <p className="text-xs font-semibold text-[#3977A8] mb-1">Market Intelligence</p>
                <h2 className="font-display text-2xl font-bold text-[#102B46]">
                  Industry News &amp; Archive
                </h2>
              </div>
              <Link to="/news" className="text-xs font-semibold text-[#102B46] hover:text-[#3977A8] whitespace-nowrap">
                All News →
              </Link>
            </div>
            <div className="space-y-4">
              {featuredNews.map((item) => (
                <article key={item.slug} className="bg-white border border-[#DCE6EF] p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#172536]/65 mb-2">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.publisher}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{item.originalPublishedDate}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#102B46] leading-snug">
                    <Link to={`/news/item/${item.slug}`} className="hover:text-[#3977A8] transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">
                    {item.sourceReportingSummary}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <Link to={`/news/item/${item.slug}`} className="font-semibold text-[#102B46] hover:text-[#3977A8]">
                      Read Commentary →
                    </Link>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#3977A8] hover:underline"
                    >
                      <span>Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Featured Technical Articles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-end justify-between gap-4 border-b border-[#DCE6EF] pb-4">
              <div>
                <p className="text-xs font-semibold text-[#3977A8] mb-1">Editorial Library</p>
                <h2 className="font-display text-2xl font-bold text-[#102B46]">
                  Technical Buyer Guides
                </h2>
              </div>
              <Link to="/blog" className="text-xs font-semibold text-[#102B46] hover:text-[#3977A8] whitespace-nowrap">
                All 20 Guides →
              </Link>
            </div>
            <div className="space-y-4">
              {featuredArticles.map((art) => (
                <article key={art.slug} className="bg-white border border-[#DCE6EF] p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#172536]/65 mb-2">
                    <span>{art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#102B46] leading-snug">
                    <Link to={`/blog/${art.slug}`} className="hover:text-[#3977A8] transition-colors">
                      {art.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">{art.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Contact Enquiry Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102B46] text-white p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <p className="text-xs font-semibold text-[#DCE6EF]/75">Specification &amp; Sourcing Desk</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Ready to Review a Packaging Specification or Trial Requirement?
              </h2>
              <p className="text-sm sm:text-base text-[#DCE6EF]/85 max-w-2xl leading-relaxed">
                Share your target dimensions, micron thickness, resin preference, volume, and destination port. We evaluate capability across qualified manufacturing partners and outline a clear trial-to-supply pathway.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#102B46] bg-white hover:bg-[#DCE6EF] transition-colors whitespace-nowrap"
              >
                <span>Discuss Your Packaging Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#172536]/65">
            Active catalogue currently spans {PRODUCT_CATEGORIES.length} product categories and {PRODUCTS.length} technical specification profiles.
          </p>
        </div>
      </section>
    </div>
  );
}
