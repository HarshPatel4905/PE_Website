import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getProductBySlug, PRODUCTS } from '../cms/products';
import { getCategoryBySlug } from '../cms/categories';
import { EDITORIAL_ARTICLES } from '../cms/articles';
import { SiteImageKey } from '../cms/images';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { TechnicalImage } from '../components/TechnicalImage';
import { SpecificationEnquiryForm } from '../components/SpecificationEnquiryForm';

export function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  const product = getProductBySlug(productSlug || '');
  const category = getCategoryBySlug(categorySlug || product?.categorySlug || '');
  const [activeImageKey, setActiveImageKey] = useState<SiteImageKey>(
    product?.imageKey || 'pe_films'
  );

  useEffect(() => {
    if (product) {
      setActiveImageKey(product.imageKey);
    }
  }, [product]);

  usePageMeta({
    title: product ? product.name : 'Product Specification',
    description: product
      ? product.summary
      : 'Detailed industrial polyethylene packaging specification.',
  });

  if (!product || !category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#102B46]">
          Product Specification Not Found
        </h1>
        <Link
          to="/products"
          className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#102B46]"
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter((p) => product.relatedProductSlugs.includes(p.slug));
  const relatedArticles = EDITORIAL_ARTICLES.filter((a) =>
    product.relatedArticleSlugs.includes(a.slug)
  );

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: category.shortTitle, to: `/products/${category.slug}` },
          { label: product.shortLabel },
        ]}
        title={product.name}
        subtitle={product.summary}
      />

      {/* 1. Product Overview, 2. What It Is, 3. How Manufactured, 4. Available Materials, 5. Construction */}
      <section className="py-14 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold text-[#102B46]">1. Product Overview</h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#172536]/85 leading-relaxed">
                {product.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#F5F8FB] border border-[#DCE6EF] p-5">
                <h3 className="font-display text-sm font-bold text-[#102B46]">
                  2. What the Product Is
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#172536]/80 leading-relaxed">
                  {product.whatItIs}
                </p>
              </div>
              <div className="bg-[#F5F8FB] border border-[#DCE6EF] p-5">
                <h3 className="font-display text-sm font-bold text-[#102B46]">
                  3. How It Is Manufactured
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#172536]/80 leading-relaxed">
                  {product.howManufactured}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
                  4. Available Material Types
                </h3>
                <ul className="space-y-2 text-sm text-[#172536]/85">
                  {product.availableMaterials.map((mat) => (
                    <li key={mat}>• {mat}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
                  5. Construction &amp; Material Options
                </h3>
                <ul className="space-y-2 text-sm text-[#172536]/85">
                  {product.constructionOptions.map((opt) => (
                    <li key={opt}>• {opt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <TechnicalImage
              imageKey={activeImageKey}
              showCaption
              className="border border-[#DCE6EF]"
              imgClassName="w-full aspect-[4/3] object-cover"
            />
            {product.galleryImageKeys && product.galleryImageKeys.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.galleryImageKeys.map((imgKey) => (
                  <button
                    key={imgKey}
                    type="button"
                    onClick={() => setActiveImageKey(imgKey)}
                    aria-label={`View ${imgKey.replaceAll('_', ' ')}`}
                    className={`border transition-colors overflow-hidden ${
                      activeImageKey === imgKey
                        ? 'border-[#102B46] ring-2 ring-[#3977A8]/40'
                        : 'border-[#DCE6EF] opacity-80 hover:opacity-100'
                    }`}
                  >
                    <TechnicalImage
                      imageKey={imgKey}
                      className="aspect-[4/3]"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="bg-[#F5F8FB] border border-[#DCE6EF] p-5 space-y-2">
              <p className="text-xs font-semibold text-[#3977A8]">Resin Options</p>
              <p className="text-sm font-semibold text-[#102B46]">
                {product.resinOptions.join(' · ')}
              </p>
              <a
                href="#specification-enquiry"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
              >
                <span>Jump to Specification Enquiry Form →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technical Specification Table (All 16 parameters) */}
      <section className="py-14 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              6. Technical Specifications (Illustrative Parameter Framework)
            </h2>
            <p className="mt-2 text-sm text-[#172536]/80 max-w-3xl">
              Values below are illustrative examples showing how parameters are structured. Actual tolerances, resin grades, test results, and partner certifications must be confirmed specifically for each order with the assigned manufacturing partner.
            </p>
          </div>

          <div className="bg-white border border-[#DCE6EF] overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#102B46] text-white text-xs">
                  <th className="py-3.5 px-4 font-semibold">Parameter</th>
                  <th className="py-3.5 px-4 font-semibold">Illustrative Specification Range</th>
                  <th className="py-3.5 px-4 font-semibold">Technical &amp; Sourcing Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE6EF] text-xs sm:text-sm">
                {product.specifications.map((row) => (
                  <tr key={row.parameter} className="hover:bg-[#F5F8FB]/70">
                    <td className="py-3 px-4 font-semibold text-[#102B46] whitespace-nowrap">
                      {row.parameter}
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-[#172536] tabular-nums">
                      {row.illustrativeRange}
                    </td>
                    <td className="py-3 px-4 text-[#172536]/80">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Typical Applications, 8. Industry Use Cases, 9. Performance, 10. Customisation, 11. QC, 12. Logistics */}
      <section className="py-14 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-[#DCE6EF] p-6">
            <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
              7. Typical Industrial Applications
            </h3>
            <ul className="space-y-2 text-sm text-[#172536]/85">
              {product.typicalApplications.map((app) => (
                <li key={app}>• {app}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[#DCE6EF] p-6">
            <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
              8. Industry-Specific Use Cases
            </h3>
            <ul className="space-y-3 text-sm text-[#172536]/85">
              {product.industryUseCases.map((uc) => (
                <li key={uc.industry}>
                  <span className="font-semibold text-[#102B46]">{uc.industry}: </span>
                  <span>{uc.useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#DCE6EF] p-6">
            <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
              9. Performance Characteristics
            </h3>
            <ul className="space-y-2 text-sm text-[#172536]/85">
              {product.performanceCharacteristics.map((perf) => (
                <li key={perf}>• {perf}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[#DCE6EF] p-6">
            <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
              10. Available Customisation
            </h3>
            <ul className="space-y-2 text-sm text-[#172536]/85">
              {product.availableCustomisation.map((cust) => (
                <li key={cust}>• {cust}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[#DCE6EF] p-6">
            <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
              11. Quality Inspection Parameters
            </h3>
            <ul className="space-y-2 text-sm text-[#172536]/85">
              {product.qualityInspectionParameters.map((qc) => (
                <li key={qc}>• {qc}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[#DCE6EF] p-6">
            <h3 className="font-display text-base font-bold text-[#102B46] mb-3">
              12. Packaging &amp; Logistics Considerations
            </h3>
            <ul className="space-y-2 text-sm text-[#172536]/85">
              {product.packagingAndLogistics.map((log) => (
                <li key={log}>• {log}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 13. Selection Guidance, 14. Common Mistakes, 15. Technical FAQs */}
      <section className="py-14 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-white border border-[#DCE6EF] p-6 space-y-6">
            <div>
              <h3 className="font-display text-lg font-bold text-[#102B46] mb-3">
                13. How Buyers Should Select the Correct Specification
              </h3>
              <ul className="space-y-2.5 text-sm text-[#172536]/85">
                {product.howBuyersSelect.map((tip) => (
                  <li key={tip}>• {tip}</li>
                ))}
              </ul>
            </div>
            <div className="pt-5 border-t border-[#DCE6EF]">
              <h3 className="font-display text-lg font-bold text-[#102B46] mb-3">
                14. Common Buyer Mistakes to Avoid
              </h3>
              <ul className="space-y-2.5 text-sm text-[#172536]/85">
                {product.commonBuyerMistakes.map((mistake) => (
                  <li key={mistake}>• {mistake}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#DCE6EF] p-6">
            <h3 className="font-display text-lg font-bold text-[#102B46] mb-4">
              15. Technical FAQs
            </h3>
            <div className="divide-y divide-[#DCE6EF]">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                  <h4 className="font-display text-sm font-bold text-[#102B46]">{faq.question}</h4>
                  <p className="mt-1.5 text-sm text-[#172536]/80 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 16. Specification Enquiry Form */}
      <section id="specification-enquiry" className="py-16 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-xs font-semibold text-[#3977A8]">16. Direct Specification Desk</p>
            <h2 className="font-display text-2xl font-bold text-[#102B46]">
              Request Specification Review for {product.shortLabel}
            </h2>
          </div>
          <SpecificationEnquiryForm
            defaultCategory={category.name}
            defaultProductName={product.name}
            compactHeader
          />
        </div>
      </section>

      {/* 17. Related Products & 18. Related Educational Articles */}
      <section className="py-14 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display text-lg font-bold text-[#102B46] mb-4">
              17. Related Packaging Solutions
            </h3>
            <div className="space-y-3">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/products/${rel.categorySlug}/${rel.slug}`}
                  className="block bg-white border border-[#DCE6EF] hover:border-[#3977A8] p-4 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-[#102B46]">
                      {rel.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#3977A8]" />
                  </div>
                  <p className="mt-1 text-xs text-[#172536]/75">{rel.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-[#102B46] mb-4">
              18. Related Technical Articles
            </h3>
            <div className="space-y-3">
              {relatedArticles.map((art) => (
                <Link
                  key={art.slug}
                  to={`/blog/${art.slug}`}
                  className="block bg-white border border-[#DCE6EF] hover:border-[#3977A8] p-4 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-[#102B46]">
                      {art.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#3977A8]" />
                  </div>
                  <p className="mt-1 text-xs text-[#172536]/75">{art.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
