import { FormEvent, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { SpecificationEnquiryForm } from '../components/SpecificationEnquiryForm';

export function ContactPage() {
  usePageMeta({
    title: 'Contact Us & Specification Desk',
    description:
      'Discuss your industrial flexible packaging requirements with FLEXORA. Submit technical specifications, dimensions, volumes, and destination details.',
  });

  const [activeTab, setActiveTab] = useState<'specification' | 'general'>('specification');

  // General contact form state
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Australia');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generalRef, setGeneralRef] = useState<string | null>(null);

  const handleGeneralSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          email,
          country,
          subject,
          message,
          website_url: honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Unable to submit enquiry.');
      }
      setGeneralRef(data.referenceId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected submission error.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
        title="Discuss Your Packaging Requirements"
        subtitle="Submit a technical specification enquiry for sourcing assessment, trial coordination, or general commercial discussion across Australia, India, and international markets."
      />

      <section className="py-14 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-8 space-y-6" id="specification-form">
            <div className="inline-flex border border-[#DCE6EF] bg-white p-1">
              <button
                type="button"
                onClick={() => setActiveTab('specification')}
                className={`px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'specification'
                    ? 'bg-[#102B46] text-white'
                    : 'text-[#172536] hover:bg-[#F5F8FB]'
                }`}
              >
                Technical Specification Enquiry (14 Fields + File)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('general')}
                className={`px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'general'
                    ? 'bg-[#102B46] text-white'
                    : 'text-[#172536] hover:bg-[#F5F8FB]'
                }`}
              >
                General Commercial Discussion
              </button>
            </div>

            {activeTab === 'specification' ? (
              <SpecificationEnquiryForm />
            ) : (
              <div className="bg-white border border-[#DCE6EF] p-6 sm:p-8">
                {generalRef ? (
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#3977A8] shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h2 className="font-display text-lg font-bold text-[#102B46]">
                        Message Received
                      </h2>
                      <p className="text-sm text-[#172536]/80">
                        Reference ID: <span className="font-mono font-semibold">{generalRef}</span>. Thank you for contacting FLEXORA.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setGeneralRef(null);
                          setMessage('');
                        }}
                        className="mt-2 px-4 py-2 text-xs font-semibold border border-[#DCE6EF] text-[#102B46]"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleGeneralSubmit} className="space-y-5">
                    <h2 className="font-display text-xl font-bold text-[#102B46]">
                      General Commercial &amp; Sourcing Enquiry
                    </h2>
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>
                    {error && (
                      <div className="flex items-start gap-2.5 p-3.5 bg-[#F5F8FB] border border-[#3977A8] text-xs text-[#102B46]">
                        <AlertCircle className="w-4 h-4 text-[#3977A8] shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="gen-name" className="block text-xs font-semibold text-[#102B46] mb-1">
                          Name *
                        </label>
                        <input
                          id="gen-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="gen-company" className="block text-xs font-semibold text-[#102B46] mb-1">
                          Company *
                        </label>
                        <input
                          id="gen-company"
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="gen-email" className="block text-xs font-semibold text-[#102B46] mb-1">
                          Business Email *
                        </label>
                        <input
                          id="gen-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="gen-country" className="block text-xs font-semibold text-[#102B46] mb-1">
                          Country *
                        </label>
                        <input
                          id="gen-country"
                          type="text"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="gen-subject" className="block text-xs font-semibold text-[#102B46] mb-1">
                        Subject
                      </label>
                      <input
                        id="gen-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g., Manufacturing partner capability / Australia supply coordination"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="gen-msg" className="block text-xs font-semibold text-[#102B46] mb-1">
                        Message *
                      </label>
                      <textarea
                        id="gen-msg"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] disabled:opacity-60 transition-colors"
                    >
                      {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                      <span>{submitting ? 'Sending...' : 'Send Enquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Right Guidance Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#DCE6EF] p-6 space-y-4">
              <h2 className="font-display text-base font-bold text-[#102B46]">
                What Helps Expedite Technical Review
              </h2>
              <ul className="space-y-2.5 text-xs text-[#172536]/85 leading-relaxed">
                <li>• Exact product or bag dimensions (Width × Length + Gusset depth in mm)</li>
                <li>• Target micron thickness or current film sample weight</li>
                <li>• Polymer preference (LDPE, LLDPE, HDPE, or co-extrusion)</li>
                <li>• Packing equipment type (manual, VFFS/HFFS, compression baler, stretch hooder)</li>
                <li>• Core diameter (76 mm / 152 mm) &amp; max pallet/roll weight constraints</li>
                <li>• Destination port and desired Incoterms</li>
              </ul>
            </div>

            <div className="bg-white border border-[#DCE6EF] p-6 space-y-3">
              <h2 className="font-display text-base font-bold text-[#102B46]">
                Target Corridors &amp; Confidentiality
              </h2>
              <p className="text-xs text-[#172536]/80 leading-relaxed">
                Serving industrial procurement teams initially across <strong>Australia</strong> and <strong>India</strong>, with coordination capacity for New Zealand, Southeast Asia, the Middle East, and Europe.
              </p>
              <p className="text-xs text-[#172536]/75 leading-relaxed">
                Submitted technical drawings, artwork files, and commercial volumes are used strictly for evaluating partner feasibility and preparing your quotation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
