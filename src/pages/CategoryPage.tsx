import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { getCategoryBySlug, PRODUCT_CATEGORIES } from '../cms/categories';
import { getProductsByCategory } from '../cms/products';
import { SiteImageKey } from '../cms/images';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { TechnicalImage } from '../components/TechnicalImage';
import { SpecificationEnquiryForm } from '../components/SpecificationEnquiryForm';

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug || '');
  const categoryProducts = getProductsByCategory(categorySlug || '');
  const [activeImageKey, setActiveImageKey] = useState<SiteImageKey>(
    category?.imageKey || 'pe_films'
  );

  useEffect(() => {
    if (category) {
      setActiveImageKey(category.imageKey);
    }
  }, [category]);

  usePageMeta({
    title: category ? category.name : 'Product Category',
    description: category
      ? category.tagline
      : 'FLEXORA industrial flexible packaging category specifications.',
  });

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#102B46]">Category Not Found</h1>
        <p className="text-sm text-[#172536]/80">
          The requested product category does not exist. Browse our active portfolio below.
        </p>
        <Link
          to="/products"
          className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#102B46]"
        >
          Back to All Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: category.name },
        ]}
        title={category.name}
        subtitle={category.tagline}
      />

      {/* Category Overview & Scope */}
      <section className="py-14 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#102B46]">Category Overview</h2>
              <p className="mt-3 text-base text-[#172536]/85 leading-relaxed">{category.overview}</p>
            </div>

            {category.complianceNote && (
              <div className="bg-[#F5F8FB] border border-[#3977A8] p-5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#3977A8] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#102B46] leading-relaxed">
                  {category.complianceNote}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#F5F8FB] border border-[#DCE6EF] p-5">
                <h3 className="font-display text-sm font-bold text-[#102B46] mb-3">
                  Sourcing &amp; Construction Scope
                </h3>
                <ul className="space-y-2 text-xs text-[#172536]/85">
                  {category.technicalScope.map((item) => (
                    <li key={item} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F8FB] border border-[#DCE6EF] p-5">
                <h3 className="font-display text-sm font-bold text-[#102B46] mb-3">
                  Key Specification Parameters
                </h3>
                <ul className="space-y-2 text-xs text-[#172536]/85">
                  {category.keyEvaluationParameters.map((item) => (
                    <li key={item} className="leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <TechnicalImage
              imageKey={activeImageKey}
              showCaption
              className="border border-[#DCE6EF]"
              imgClassName="w-full aspect-[4/3] object-cover"
            />
            {category.galleryImageKeys && category.galleryImageKeys.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {category.galleryImageKeys.map((imgKey) => (
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
          </div>
        </div>
      </section>

      {/* Products in this Category */}
      <section className="py-14 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#102B46] mb-6">
            Detailed Product Specifications in {category.shortTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <article key={product.slug} className="bg-white border border-[#DCE6EF] p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#3977A8] font-medium mb-2">
                    {product.resinOptions.join(' · ')}
                  </p>
                  <h3 className="font-display text-lg font-bold text-[#102B46]">
                    <Link
                      to={`/products/${category.slug}/${product.slug}`}
                      className="hover:text-[#3977A8] transition-colors"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm text-[#172536]/80 leading-relaxed">
                    {product.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE6EF]">
                  <Link
                    to={`/products/${category.slug}/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
                  >
                    <span>View Complete 18-Point Technical Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Enquiry Form */}
      <section className="py-16 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpecificationEnquiryForm defaultCategory={category.name} />
        </div>
      </section>

      {/* Other Categories Strip */}
      <section className="py-12 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-base font-bold text-[#102B46] mb-4">
            Other Packaging Categories
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {PRODUCT_CATEGORIES.filter((c) => c.slug !== category.slug).map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="px-3.5 py-2 text-xs font-medium bg-white border border-[#DCE6EF] text-[#102B46] hover:border-[#3977A8] transition-colors"
              >
                {cat.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
