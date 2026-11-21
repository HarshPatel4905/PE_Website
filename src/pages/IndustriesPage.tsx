import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRY_SECTORS } from '../cms/knowledge';
import { PRODUCT_CATEGORIES } from '../cms/categories';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';

export function IndustriesPage() {
  usePageMeta({
    title: 'Industries We Serve',
    description:
      'Industrial flexible packaging solutions across construction materials, thermal insulation, manufacturing, logistics, agriculture, industrial distribution, and packaging converting.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries We Serve' }]}
        title="Multi-Sector Industrial Packaging Solutions"
        subtitle="FLEXORA supports procurement teams across seven core industrial sectors—matching polyethylene film properties, bag constructions, and export packing to sector-specific operating conditions."
      />

      <section className="py-16 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {INDUSTRY_SECTORS.map((sector, index) => (
            <article
              key={sector.slug}
              id={sector.slug}
              className="bg-white border border-[#DCE6EF] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-5 space-y-3">
                <span className="font-mono text-xs text-[#3977A8] tabular-nums">
                  Sector {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-2xl font-bold text-[#102B46]">{sector.name}</h2>
                <p className="text-sm text-[#172536]/85 leading-relaxed">{sector.summary}</p>
              </div>

              <div className="lg:col-span-4 space-y-3">
                <h3 className="font-display text-sm font-bold text-[#102B46]">
                  Key Packaging Requirements
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#172536]/80">
                  {sector.packagingChallenges.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
                <div className="pt-2">
                  <p className="text-xs font-semibold text-[#3977A8]">Material Focus</p>
                  <p className="text-xs text-[#172536]/80 mt-1">
                    {sector.keyMaterialConsiderations.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#DCE6EF] pt-4 lg:pt-0 lg:pl-6">
                <div>
                  <h3 className="font-display text-xs font-semibold text-[#3977A8] mb-3">
                    Relevant Product Categories
                  </h3>
                  <div className="space-y-2">
                    {sector.recommendedCategories.map((catSlug) => {
                      const cat = PRODUCT_CATEGORIES.find((c) => c.slug === catSlug);
                      if (!cat) return null;
                      return (
                        <Link
                          key={catSlug}
                          to={`/products/${cat.slug}`}
                          className="block text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
                        >
                          {cat.name} →
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
                >
                  <span>Discuss {sector.name} Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
