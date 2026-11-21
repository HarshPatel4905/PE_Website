import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';

const SUSTAINABILITY_AREAS = [
  {
    title: '01. Material Efficiency',
    desc: 'Matching polymer grade and layer construction accurately to actual mechanical load prevents chronic over-ordering of excessive film mass.',
  },
  {
    title: '02. Technically Feasible Downgauging',
    desc: 'Where equipment and load safety allow, substituting metallocene LLDPE or co-extruded blends can reduce micron thickness while maintaining required dart and tensile performance.',
  },
  {
    title: '03. Packaging Waste Reduction',
    desc: 'Improving seal integrity, puncture resilience, and roll winding quality lowers transit damage—preventing far higher carbon waste from damaged manufactured goods.',
  },
  {
    title: '04. Recyclable-Design Considerations',
    desc: 'Replacing incompatible mixed-polymer laminates with single-family polyolefin designs supports cleaner downstream commercial sorting where infrastructure exists.',
  },
  {
    title: '05. Mono-Material Film Developments',
    desc: 'Multi-layer all-PE co-extrusion (combining LDPE, LLDPE, and HDPE grades) preserves functional performance without introducing non-PE barrier layers when not required.',
  },
  {
    title: '06. Controlled Recycled-Content Options',
    desc: 'Evaluating vetted PIR or PCR polyethylene blends for thicker non-food utility sheeting, secondary pallet covers, and non-critical bags where mechanically suitable.',
  },
  {
    title: '07. Production Scrap Management',
    desc: 'Working with manufacturing partners that segregate clean start-up and edge-trim regrind responsibly rather than discarding process trim.',
  },
  {
    title: '08. Packaging Optimisation',
    desc: 'Right-sizing bag dimensions, gusset depths, and pallet shroud drops eliminates excess overhang and improves container packing density.',
  },
  {
    title: '09. Material Traceability',
    desc: 'Requiring transparent resin lot records and chain-of-custody documentation whenever recycled content percentages are specified in buyer tenders.',
  },
  {
    title: '10. Lifecycle Considerations',
    desc: 'Evaluating packaging choices across resin production, freight weight, product-loss prevention, and practical local recovery pathways.',
  },
];

export function SustainabilityPage() {
  usePageMeta({
    title: 'Sustainability',
    description:
      'Pragmatic industrial packaging sustainability: material efficiency, downgauging, mono-material PE design, recycled content feasibility, and honest recyclability context.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Sustainability' }]}
        title="Practical Engineering for Resource-Efficient Industrial Packaging"
        subtitle="Focusing on measurable material efficiency, downgauging where technically sound, mono-material PE structures, and transparent end-of-life context."
      />

      <section className="py-14 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-display text-2xl font-bold text-[#102B46]">
            Honest Context on Recyclability &amp; Material Claims
          </h2>
          <p className="text-base text-[#172536]/85 leading-relaxed">
            FLEXORA avoids blanket claims that polyethylene packaging is automatically recyclable in every location or that using polyethylene alone makes a product sustainable. In practice, recyclability depends heavily on product design (clear unprinted mono-material vs. heavily inked or contaminated films), commercial back-of-house collection separation, and local mechanical or advanced recycling infrastructure in the destination market.
          </p>
          <p className="text-sm text-[#172536]/80 leading-relaxed">
            Our role is to help industrial buyers make technically sound, verifiable packaging improvements—such as eliminating over-thick gauges through co-extrusion, avoiding unnecessary mixed-material laminates, and testing controlled recycled content where mechanical tolerances permit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SUSTAINABILITY_AREAS.map((area) => (
              <div key={area.title} className="bg-white border border-[#DCE6EF] p-6">
                <h3 className="font-display text-base font-bold text-[#102B46]">{area.title}</h3>
                <p className="mt-2 text-sm text-[#172536]/80 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white border border-[#DCE6EF] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#172536]/85">
              Exploring a downgauging trial or mono-material PE conversion for your current packaging?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Discuss Material Optimisation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
