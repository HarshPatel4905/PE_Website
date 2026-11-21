import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { TechnicalImage } from '../components/TechnicalImage';

const EXPORT_WORKFLOW = [
  {
    step: '01',
    title: 'Export Enquiry Management',
    desc: 'Capture destination port, receiving warehouse pallet constraints, target Incoterms, and monthly demand profile.',
  },
  {
    step: '02',
    title: 'Product Specification Review',
    desc: 'Confirm film gauge, dimensions, resin grade, core ID, and regulatory classification for the destination jurisdiction.',
  },
  {
    step: '03',
    title: 'Supplier Coordination',
    desc: 'Align production slots, export packing rules, and container load-plan targets with qualified manufacturing partners.',
  },
  {
    step: '04',
    title: 'Sample Approval',
    desc: 'Courier representative film swatches, bag samples, or trial reels for physical verification prior to bulk booking.',
  },
  {
    step: '05',
    title: 'Production Planning',
    desc: 'Track extrusion, printing, and conversion milestones against agreed vessel cut-off windows.',
  },
  {
    step: '06',
    title: 'Quality Documentation',
    desc: 'Compile batch identification, dimensional/weight checks, and any agreed order-specific inspection sheets.',
  },
  {
    step: '07',
    title: 'Export Packing',
    desc: 'Confirm moisture-shielded roll wrapping, edge protection, and ISPM-15 heat-treated or plastic export pallets.',
  },
  {
    step: '08',
    title: 'Shipping Coordination',
    desc: 'Coordinate 20 ft / 40 ft High-Cube container stuffing, vessel booking, and Bill of Lading issuance.',
  },
  {
    step: '09',
    title: 'Commercial Documentation',
    desc: 'Verify accuracy across Commercial Invoice, Packing List, HS Codes, Certificates of Origin, and packing declarations.',
  },
  {
    step: '10',
    title: 'Delivery Planning',
    desc: 'Provide shipment milestone updates through port arrival and customs clearance handover.',
  },
];

export function GlobalSupplyPage() {
  usePageMeta({
    title: 'Global Supply & Exports',
    description:
      'FLEXORA international export coordination workflow covering Australia, India, and expanding global industrial corridors.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Global Supply & Exports' }]}
        title="International Supply & Export Coordination"
        subtitle="Structured cross-border coordination connecting industrial buyers in Australia, India, and expanding international markets with verified packaging manufacturing partners."
      />

      <section className="py-14 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              Target Geography &amp; Transaction Transparency
            </h2>
            <p className="text-base text-[#172536]/85 leading-relaxed">
              FLEXORA is building its initial supply focus around industrial buyers in <strong>Australia</strong> and <strong>India</strong>, with planned expansion into New Zealand, Southeast Asia, the Middle East, Europe, and other international markets where technically and commercially suitable.
            </p>
            <p className="text-sm text-[#172536]/80 leading-relaxed">
              Every international transaction has distinct compliance needs—for example, strict timber biosecurity rules (ISPM-15 / clean container declarations) for Australian arrivals, or specific customs HS and Certificate of Origin requirements across bilateral trade corridors. Incoterms (EXW, FOB, CIF, DAP, or DDP where supported), freight rates, customs clearance responsibilities, and transit schedules are confirmed explicitly per order.
            </p>
          </div>
          <div className="lg:col-span-6">
            <TechnicalImage
              imageKey="logistics_export"
              showCaption
              className="border border-[#DCE6EF]"
              imgClassName="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#102B46] mb-8">
            Ten-Step Export Supply Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EXPORT_WORKFLOW.map((item) => (
              <div key={item.step} className="bg-white border border-[#DCE6EF] p-5">
                <span className="font-mono text-xs font-semibold text-[#3977A8] tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-sm font-bold text-[#102B46]">{item.title}</h3>
                <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white border border-[#DCE6EF] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#172536]/85">
              Planning a container-load trial or recurring monthly import schedule? Share your destination port and target Incoterms.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Discuss Export Supply</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
