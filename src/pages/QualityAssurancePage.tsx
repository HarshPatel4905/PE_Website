import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { TechnicalImage } from '../components/TechnicalImage';

const QA_FRAMEWORK = [
  {
    title: '01. Raw Material Documentation',
    detail:
      'Reviewing resin supplier grade sheets and Melt Flow Index (MFI) / density references matching the agreed polymer formulation.',
  },
  {
    title: '02. Approved Product Specifications',
    detail:
      'Locking written dimensional, micron, resin, slip, print, and packing criteria prior to production scheduling.',
  },
  {
    title: '03. Thickness & Dimension Checks',
    detail:
      'Micrometer cross-web thickness profiling alongside roll width, bag length, and gusset symmetry measurements.',
  },
  {
    title: '04. Roll-Weight Verification',
    detail:
      'Confirming net film weight versus gross palletised weight against calculated theoretical yield tolerances.',
  },
  {
    title: '05. Visual Defect Inspection',
    detail:
      'Screening film rolls and converted bags for unmelted gels, pinholes, die lines, ink smear, telescoping, or edge nicks.',
  },
  {
    title: '06. Seal & Bag-Integrity Checks',
    detail:
      'Evaluating bottom/side heat welds—including 4-layer gusset transition zones—for consistent fusion without burn-off.',
  },
  {
    title: '07. Relevant Mechanical Testing',
    detail:
      'Coordinating partner mechanical checks (such as tensile strength, elongation, dart drop impact, or tear resistance) where specified per order.',
  },
  {
    title: '08. Batch Identification',
    detail:
      'Ensuring roll cores, cartons, and export pallets carry traceable lot/batch numbers tied to the production run.',
  },
  {
    title: '09. Packing Inspection',
    detail:
      'Verifying protective outer roll wrapping, corner guards, moisture shielding, strapping tension, and ISPM-15 pallet condition.',
  },
  {
    title: '10. Pre-Shipment Checks',
    detail:
      'Reviewing pre-dispatch quantities, container loading cleanliness, and photographic stowage records prior to vessel departure.',
  },
  {
    title: '11. Documentation Review',
    detail:
      'Checking alignment across Commercial Invoice, Packing List, Bill of Lading, Certificates of Origin, and agreed quality records.',
  },
];

export function QualityAssurancePage() {
  usePageMeta({
    title: 'Quality Assurance',
    description:
      'FLEXORA coordinated quality assurance framework: raw material documentation, dimensional checks, seal verification, batch traceability, and pre-shipment inspection.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Quality Assurance' }]}
        title="Order-Specific Quality Coordination Framework"
        subtitle="Inspection scope, testing parameters, and acceptance criteria are agreed upfront for each customer specification and verified with the assigned manufacturing partner."
      />

      <section className="py-14 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              Discipline Across Every Order Stage
            </h2>
            <p className="text-base text-[#172536]/85 leading-relaxed">
              Consistent industrial packaging relies on clear tolerances agreed before extrusion starts—not informal assumptions. FLEXORA coordinates a structured eleven-point quality checklist across partner production and export dispatch.
            </p>
            <p className="text-sm text-[#172536]/80 leading-relaxed">
              Transparency note: FLEXORA does not claim to operate an accredited testing laboratory, hold independent ISO certifications, or issue third-party approvals in its own name. Where formal certifications or third-party pre-shipment inspections (such as SGS/Intertek) are required by a buyer, those arrangements are verified against genuine documentary evidence from the relevant partner or inspection agency.
            </p>
          </div>
          <div className="lg:col-span-5">
            <TechnicalImage
              imageKey="polymer_pellets"
              showCaption
              className="border border-[#DCE6EF]"
              imgClassName="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#102B46] mb-8">
            Eleven-Point Coordinated Quality Scope
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {QA_FRAMEWORK.map((item) => (
              <div key={item.title} className="bg-white border border-[#DCE6EF] p-6">
                <h3 className="font-display text-base font-bold text-[#102B46]">{item.title}</h3>
                <p className="mt-2.5 text-sm text-[#172536]/80 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white border border-[#DCE6EF] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[#172536]/85">
              Need specific ASTM/ISO test references or third-party inspection protocols included in your procurement tender?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Specify QA Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
