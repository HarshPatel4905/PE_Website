import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { TechnicalImage } from '../components/TechnicalImage';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Customer Requirement',
    detail: 'Capture load weight, product geometry, packing speed, sealing method, and destination climate.',
  },
  {
    step: '02',
    title: 'Technical Specification Review',
    detail: 'Translate operating constraints into micron gauge, resin family, COF, core ID, and seal geometry.',
  },
  {
    step: '03',
    title: 'Manufacturing-Partner Assessment',
    detail: 'Match technical needs with qualified partner extrusion, printing, and conversion capabilities.',
  },
  {
    step: '04',
    title: 'Material & Process Selection',
    detail: 'Confirm virgin or controlled PCR blends, mono vs. co-extrusion, and functional additives.',
  },
  {
    step: '05',
    title: 'Sample Development',
    detail: 'Coordinate trial rolls or converted bag samples for physical measurement and press verification.',
  },
  {
    step: '06',
    title: 'Customer Approval',
    detail: 'Validate trial performance on customer lines and lock Golden Sample tolerances before volume.',
  },
  {
    step: '07',
    title: 'Production Coordination',
    detail: 'Schedule commercial extrusion, printing, and bag conversion aligned to agreed lead times.',
  },
  {
    step: '08',
    title: 'Quality Inspection',
    detail: 'Coordinate dimensional, roll-weight, seal-integrity, and pre-shipment verification checks.',
  },
  {
    step: '09',
    title: 'Export Documentation',
    detail: 'Prepare commercial invoices, packing lists, ISPM-15 compliance records, and shipping documents.',
  },
  {
    step: '10',
    title: 'Shipment Coordination',
    detail: 'Coordinate container stowage, maritime freight booking, and receiving schedule updates.',
  },
];

const MANUFACTURING_PROCESSES = [
  {
    name: 'Resin Preparation & Dosing',
    desc: 'Base LDPE, LLDPE, mLLDPE, or HDPE pellets are gravimetrically dosed with slip, anti-block, UV (HALS), anti-static, or pigment masterbatches.',
  },
  {
    name: 'Blown-Film Extrusion',
    desc: 'Molten polymer passes through mono-layer or multi-layer spiral annular dies, expanding into a vertical film bubble for balanced biaxial orientation.',
  },
  {
    name: 'Film Cooling & Gauge Control',
    desc: 'External dual-lip air rings and Internal Bubble Cooling (IBC) solidify the melt uniformly to control frost-line height and cross-web gauge.',
  },
  {
    name: 'Haul-Off & Winding',
    desc: 'Collapsing frames flatten the tube into layflat or slit webs, passing over oscillating haul-offs and tension-tapered winders onto 76 mm or 152 mm cores.',
  },
  {
    name: 'Slitting & Rewinding',
    desc: 'Master jumbo webs are slit cleanly to exact customer roll widths, trimmed, and wound with splice flagging to match downstream machine OD limits.',
  },
  {
    name: 'Flexographic Printing',
    desc: 'Corona-treated films (≥38 dynes/cm) pass through stack or Central Impression (CI) flexographic presses for multi-colour branding and eye-marks.',
  },
  {
    name: 'Bag Conversion',
    desc: 'Tubular or gusseted webs are indexed through automated bag makers to produce loose bags, perforated rolls, wicketed packs, or pallet shrouds.',
  },
  {
    name: 'Heat Sealing & Venting',
    desc: 'Impulse or constant-heat bars create bottom, side, or twin heavy-duty welds alongside punched air-evacuation vents or micro-perforations.',
  },
  {
    name: 'In-Process Inspection',
    desc: 'Operators check micrometer thickness, width, gusset depth, print repeat registration, seal strength, and visual film cleanliness.',
  },
  {
    name: 'Export Packing & Palletisation',
    desc: 'Finished rolls and cartons are wrapped, corner-protected, batch-labelled, and strapped onto ISPM-15 export pallets for containerisation.',
  },
];

export function ManufacturingPage() {
  usePageMeta({
    title: 'Manufacturing & Supply Capabilities',
    description:
      'How FLEXORA coordinates specification review, qualified manufacturing-partner selection, extrusion and conversion workflows, inspection, and export delivery.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Manufacturing & Capabilities' }]}
        title="Manufacturing & Supply Coordination Workflow"
        subtitle="FLEXORA coordinates production with qualified flexible packaging manufacturing partners—matching your technical specification to capable extrusion, printing, and conversion equipment."
      />

      {/* Disclosure Banner */}
      <section className="py-10 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              Partner-Based Manufacturing Model
            </h2>
            <p className="text-sm sm:text-base text-[#172536]/85 leading-relaxed">
              FLEXORA does not claim to own extrusion lines, printing presses, or laboratories. Instead, we manage technical sourcing across qualified manufacturing partners whose actual equipment, die widths, layer configurations, and quality systems match your specific product requirements.
            </p>
            <p className="text-sm text-[#172536]/80 leading-relaxed">
              Actual production processes, tolerances, minimum order quantities, and lead times are always confirmed specifically with the designated manufacturing partner prior to order acceptance.
            </p>
          </div>
          <div className="lg:col-span-5">
            <TechnicalImage
              imageKey="hero_rolls"
              showCaption
              className="border border-[#DCE6EF]"
              imgClassName="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 10-Step Supply Process Diagram */}
      <section className="py-16 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#3977A8] mb-2">End-to-End Coordination</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102B46]">
              Ten-Stage Specification-to-Shipment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WORKFLOW_STEPS.map((item) => (
              <div key={item.step} className="bg-white border border-[#DCE6EF] p-5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#3977A8] tabular-nums">
                    Stage {item.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-[#102B46] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Possible Manufacturing Processes */}
      <section className="py-16 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              Core Partner Production Processes Coordinated
            </h2>
            <p className="mt-2 text-sm text-[#172536]/80">
              Depending on product architecture, partner facilities utilise subsets of the following industrial film extrusion and conversion operations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MANUFACTURING_PROCESSES.map((proc, idx) => (
              <div key={proc.name} className="bg-[#F5F8FB] border border-[#DCE6EF] p-6">
                <span className="font-mono text-xs text-[#3977A8] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-[#102B46]">{proc.name}</h3>
                <p className="mt-2 text-sm text-[#172536]/80 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/quality-assurance"
              className="px-5 py-3 text-sm font-semibold text-[#102B46] border border-[#DCE6EF] hover:border-[#3977A8] transition-colors"
            >
              Review Quality Assurance Framework
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors"
            >
              <span>Submit Technical Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
