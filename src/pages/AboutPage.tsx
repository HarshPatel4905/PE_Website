import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { TechnicalImage } from '../components/TechnicalImage';

export function AboutPage() {
  usePageMeta({
    title: 'About FLEXORA',
    description:
      'Learn how FLEXORA connects industrial packaging requirements with qualified manufacturing partners through specification-led sourcing, technical coordination, and export supply management.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About FLEXORA' }]}
        title="Specification-Led Industrial Packaging Supply & Coordination"
        subtitle="FLEXORA is a developing international industrial flexible packaging sourcing, supply, and export business focused on polyethylene (PE) films and polymer-based industrial packaging solutions."
      />

      <section className="py-16 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              Connecting Industrial Requirements with Qualified Manufacturing Capability
            </h2>
            <p className="text-base text-[#172536]/85 leading-relaxed">
              Industrial buyers—from insulation manufacturers and construction-material producers to chemical packers and wholesale distributors—depend on flexible packaging that performs reliably on high-speed equipment and throughout multi-leg transit. Yet sourcing across borders often breaks down when commercial intermediaries lack polymer fluency or when factories operate without export-grade specification discipline.
            </p>
            <p className="text-base text-[#172536]/85 leading-relaxed">
              FLEXORA is structured to bridge that gap. Rather than claiming to own extrusion plants or laboratories, our operating model centres on working directly with qualified manufacturing partners—translating customer application constraints into clear resin, film-construction, quality-inspection, and export-packing specifications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {[
                {
                  title: 'Technical Material Fluency',
                  desc: 'Practical grounding across LDPE, LLDPE, mLLDPE, HDPE, co-extruded layers, slip/COF behaviour, and conversion tolerances.',
                },
                {
                  title: 'Specification-Led Sourcing',
                  desc: 'Every enquiry begins with load mechanics, line speed, sealing method, and shipping environment before selecting a partner line.',
                },
                {
                  title: 'Quality & Inspection Discipline',
                  desc: 'Coordinating raw material documentation, dimensional verification, seal checks, and pre-shipment inspections per order.',
                },
                {
                  title: 'Long-Term B2B Relationships',
                  desc: 'Built to support recurring multi-container industrial procurement across Australia, India, and international corridors.',
                },
              ].map((pillar) => (
                <div key={pillar.title} className="bg-[#F5F8FB] border border-[#DCE6EF] p-5">
                  <h3 className="font-display text-sm font-bold text-[#102B46]">{pillar.title}</h3>
                  <p className="mt-2 text-xs text-[#172536]/80 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <TechnicalImage
              imageKey="pe_films"
              showCaption
              className="border border-[#DCE6EF]"
              imgClassName="w-full aspect-[4/3] object-cover"
            />

            <div className="bg-[#F5F8FB] border border-[#DCE6EF] p-6 space-y-3">
              <h3 className="font-display text-base font-bold text-[#102B46]">
                Transparency &amp; Claims Policy
              </h3>
              <p className="text-xs text-[#172536]/80 leading-relaxed">
                FLEXORA does not claim owned manufacturing facilities, extrusion machinery, in-house testing laboratories, or third-party certifications. Production equipment, capacity, and compliance documentation are verified specifically with the assigned manufacturing partner for each customer programme.
              </p>
              <p className="text-xs text-[#172536]/70">
                Note: FLEXORA is a working brand name subject to final legal, trademark, and domain clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              Explore Our Supply &amp; Quality Frameworks
            </h2>
            <p className="mt-2 text-sm text-[#172536]/80">
              Review how partner assessments, sample sign-offs, and export documentation are coordinated.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/manufacturing-capabilities"
              className="px-5 py-3 text-sm font-semibold text-[#102B46] bg-white border border-[#DCE6EF] hover:border-[#3977A8] transition-colors"
            >
              Manufacturing &amp; Capabilities
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors"
            >
              <span>Discuss Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
