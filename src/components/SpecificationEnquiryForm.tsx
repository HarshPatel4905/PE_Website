import { ChangeEvent, FormEvent, useState } from 'react';
import { CheckCircle2, FileUp, Loader2, AlertCircle } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../cms/categories';

interface SpecificationEnquiryFormProps {
  defaultCategory?: string;
  defaultProductName?: string;
  compactHeader?: boolean;
}

interface SubmissionSuccess {
  referenceId: string;
  receivedAt: string;
  company: string;
  productCategory: string;
  attachmentName: string | null;
}

export function SpecificationEnquiryForm({
  defaultCategory = '',
  defaultProductName = '',
  compactHeader = false,
}: SpecificationEnquiryFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Australia');
  const [productCategory, setProductCategory] = useState(
    defaultCategory || PRODUCT_CATEGORIES[0].name
  );
  const [intendedApplication, setIntendedApplication] = useState(
    defaultProductName ? `Enquiry regarding ${defaultProductName}` : ''
  );
  const [requiredMaterial, setRequiredMaterial] = useState('To be recommended');
  const [thickness, setThickness] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [quantity, setQuantity] = useState('');
  const [destination, setDestination] = useState('');
  const [targetDeliveryDate, setTargetDeliveryDate] = useState('');
  const [technicalRequirements, setTechnicalRequirements] = useState('');
  const [attachment, setAttachment] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<SubmissionSuccess | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) {
      setError('Attachment exceeds the 5 MB limit. Please select a smaller file.');
      setAttachment(null);
      return;
    }
    setError(null);
    setAttachment(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('company', company);
      formData.append('email', email);
      formData.append('country', country);
      formData.append('productCategory', productCategory);
      formData.append('intendedApplication', intendedApplication);
      formData.append('requiredMaterial', requiredMaterial);
      formData.append('thickness', thickness);
      formData.append('dimensions', dimensions);
      formData.append('quantity', quantity);
      formData.append('destination', destination);
      formData.append('targetDeliveryDate', targetDeliveryDate);
      formData.append('technicalRequirements', technicalRequirements);
      formData.append('website_url', honeypot);
      if (attachment) {
        formData.append('attachment', attachment);
      }

      const response = await fetch('/api/enquiries', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to submit enquiry. Please check required fields.');
      }

      setSuccess({
        referenceId: data.referenceId,
        receivedAt: data.receivedAt,
        company: data.summary?.company || company,
        productCategory: data.summary?.productCategory || productCategory,
        attachmentName: data.summary?.attachmentName || null,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected submission error.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white border border-[#DCE6EF] p-8">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-7 h-7 text-[#3977A8] shrink-0 mt-0.5" />
          <div className="space-y-3">
            <p className="text-xs font-semibold text-[#3977A8]">Specification Enquiry Logged</p>
            <h3 className="font-display text-xl font-bold text-[#102B46]">
              Thank you. Your technical enquiry has been received.
            </h3>
            <p className="text-sm text-[#172536]/80 leading-relaxed">
              Reference ID: <span className="font-mono font-semibold text-[#102B46]">{success.referenceId}</span> · Company: {success.company} · Category: {success.productCategory}
              {success.attachmentName ? ` · Attached file: ${success.attachmentName}` : ''}
            </p>
            <p className="text-xs text-[#172536]/70 leading-relaxed">
              Our sourcing team will review your dimensional, resin, and delivery parameters and coordinate partner capability verification prior to formal quotation.
            </p>
            <button
              type="button"
              onClick={() => {
                setSuccess(null);
                setAttachment(null);
                setTechnicalRequirements('');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-[#102B46] border border-[#DCE6EF] hover:bg-[#F5F8FB] transition-colors"
            >
              Submit Another Specification
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm text-[#172536] bg-white border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none transition-colors';
  const labelClass = 'block text-xs font-semibold text-[#102B46] mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#DCE6EF] p-6 sm:p-8 space-y-6">
      {!compactHeader && (
        <div className="border-b border-[#DCE6EF] pb-5">
          <h3 className="font-display text-xl font-bold text-[#102B46]">
            Technical Specification Enquiry
          </h3>
          <p className="mt-1.5 text-sm text-[#172536]/80">
            Provide target film or bag dimensions, polymer grade, volume, and destination port so we can evaluate partner capability and confirm feasibility.
          </p>
        </div>
      )}

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url">Website URL</label>
        <input
          id="website_url"
          name="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {error && (
        <div className="flex items-start gap-3 p-4 bg-[#F5F8FB] border border-[#3977A8] text-sm text-[#102B46]">
          <AlertCircle className="w-5 h-5 text-[#3977A8] shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="spec-name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="spec-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Procurement / Engineering Contact"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-company" className={labelClass}>
            Company Name *
          </label>
          <input
            id="spec-company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Registered business entity"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-email" className={labelClass}>
            Business Email *
          </label>
          <input
            id="spec-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-country" className={labelClass}>
            Country *
          </label>
          <select
            id="spec-country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={inputClass}
          >
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Singapore">Singapore</option>
            <option value="Malaysia">Malaysia</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="Other International">Other International</option>
          </select>
        </div>

        <div>
          <label htmlFor="spec-category" className={labelClass}>
            Product Category *
          </label>
          <select
            id="spec-category"
            required
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            className={inputClass}
          >
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="spec-application" className={labelClass}>
            Intended Application
          </label>
          <input
            id="spec-application"
            type="text"
            value={intendedApplication}
            onChange={(e) => setIntendedApplication(e.target.value)}
            placeholder="e.g., Glass wool compression, 25 kg resin sacks, pallet hooding"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-material" className={labelClass}>
            Required Material / Resin
          </label>
          <select
            id="spec-material"
            value={requiredMaterial}
            onChange={(e) => setRequiredMaterial(e.target.value)}
            className={inputClass}
          >
            <option value="To be recommended">To be recommended based on application</option>
            <option value="Virgin LDPE">Virgin LDPE</option>
            <option value="Virgin LLDPE / mLLDPE">Virgin LLDPE / mLLDPE</option>
            <option value="Co-Extruded LDPE / LLDPE">Co-Extruded LDPE / LLDPE</option>
            <option value="HDPE / HMW-HDPE">HDPE / HMW-HDPE</option>
            <option value="Controlled Recycled PE Blend (Non-Food)">Controlled Recycled PE Blend (Non-Food)</option>
          </select>
        </div>

        <div>
          <label htmlFor="spec-thickness" className={labelClass}>
            Target Thickness (Microns / Gauge)
          </label>
          <input
            id="spec-thickness"
            type="text"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            placeholder="e.g., 80 µm (or tolerance band)"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-dimensions" className={labelClass}>
            Width &amp; Dimensions (mm)
          </label>
          <input
            id="spec-dimensions"
            type="text"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
            placeholder="e.g., 1200 mm roll width, or 600×900 + 150 mm gusset"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-quantity" className={labelClass}>
            Order Quantity or Monthly Requirement
          </label>
          <input
            id="spec-quantity"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g., 1 × 20ft FCL trial, or 18 MT / month"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-destination" className={labelClass}>
            Destination Port / City
          </label>
          <input
            id="spec-destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g., Melbourne, Sydney, Brisbane, Nhava Sheva"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="spec-delivery" className={labelClass}>
            Target Delivery Date
          </label>
          <input
            id="spec-delivery"
            type="date"
            value={targetDeliveryDate}
            onChange={(e) => setTargetDeliveryDate(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="spec-notes" className={labelClass}>
          Technical Requirements &amp; Packing Notes
        </label>
        <textarea
          id="spec-notes"
          rows={4}
          value={technicalRequirements}
          onChange={(e) => setTechnicalRequirements(e.target.value)}
          placeholder="Include core diameter (76 mm / 152 mm), slip/COF needs, printing colours, UV exposure, vent holes, or Incoterms preference (FOB / CIF / DAP)."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="spec-file" className={labelClass}>
          Attach Technical Specification, Drawing, or Artwork (Optional, max 5 MB)
        </label>
        <div className="flex items-center gap-4 border border-dashed border-[#DCE6EF] bg-[#F5F8FB] p-4">
          <FileUp className="w-5 h-5 text-[#3977A8] shrink-0" />
          <div className="flex-1 min-w-0">
            <input
              id="spec-file"
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg"
              onChange={handleFileChange}
              className="block w-full text-xs text-[#172536] file:mr-4 file:py-1.5 file:px-3 file:border file:border-[#DCE6EF] file:text-xs file:font-semibold file:bg-white file:text-[#102B46] hover:file:bg-[#DCE6EF]/30"
            />
            <p className="mt-1 text-[11px] text-[#172536]/65">
              Accepted formats: PDF, DOCX, XLSX, CSV, TXT, PNG, JPG (max 5 MB).
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-[#172536]/70">
          All commercial and technical submissions are treated confidentially.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] disabled:opacity-60 transition-colors whitespace-nowrap shrink-0"
        >
          {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
          <span>{submitting ? 'Submitting Specification...' : 'Submit Specification Enquiry'}</span>
        </button>
      </div>
    </form>
  );
}
