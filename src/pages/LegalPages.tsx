import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';

export function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description:
      'FLEXORA privacy policy governing business enquiry submissions, technical file attachments, and cookie controls.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
        title="Privacy Policy"
        subtitle="How FLEXORA collects, uses, and protects business contact and technical specification data submitted through this website."
      />
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-[#172536]/85 leading-relaxed">
          <p>
            <strong>1. Scope &amp; Purpose:</strong> FLEXORA collects business contact details, product specifications, and optional technical attachments solely when voluntarily submitted via our specification enquiry and contact forms for the purpose of evaluating packaging supply feasibility and responding to B2B enquiries.
          </p>
          <p>
            <strong>2. Confidentiality of Technical Files:</strong> Drawings, artwork files, dimensional sheets, and purchasing requirements shared through our enquiry forms are handled confidentially and shared only with relevant internal sourcing personnel or vetted manufacturing partners strictly as needed to assess technical capability and pricing.
          </p>
          <p>
            <strong>3. Cookie &amp; Storage Controls:</strong> We use minimal essential storage to support enquiry submission reliability and remember your consent choices. Optional usage analytics remain disabled unless explicitly enabled through the Cookie Preferences control.
          </p>
          <p>
            <strong>4. Data Access &amp; Deletion:</strong> Business contacts may request review, correction, or deletion of submitted enquiry records at any time through our Contact Desk.
          </p>
        </div>
      </section>
    </div>
  );
}

export function TermsConditionsPage() {
  usePageMeta({
    title: 'Terms & Conditions',
    description:
      'Website terms of use, illustrative technical data disclaimers, and commercial transaction terms notice for FLEXORA.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
        title="Terms &amp; Conditions of Use"
        subtitle="Important legal notices regarding illustrative technical specifications, brand clearance, and formal commercial agreements."
      />
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-[#172536]/85 leading-relaxed">
          <p>
            <strong>1. Working Brand Notice:</strong> FLEXORA is a working brand name subject to final legal, trademark, and domain clearance.
          </p>
          <p>
            <strong>2. Illustrative Technical Data:</strong> Film thicknesses, roll dimensions, resin grades, and specification tables published on this website are illustrative reference examples only. They do not constitute guaranteed performance warranties, certified test reports, or regulatory compliance approvals. Final product specifications, tolerances, testing obligations, Incoterms, and delivery commitments are governed exclusively by written commercial contracts and order confirmations issued with the customer and manufacturing partner.
          </p>
          <p>
            <strong>3. External News Archive Attribution:</strong> News summaries from 2024, 2025, and 2026 cite external industry publishers via summary and direct source links. Copyrighted third-party articles remain the property of their respective publishers.
          </p>
        </div>
      </section>
    </div>
  );
}
