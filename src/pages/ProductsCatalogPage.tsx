import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { PRODUCT_CATEGORIES } from '../cms/categories';
import { PRODUCTS } from '../cms/products';
import { TechnicalImage } from '../components/TechnicalImage';

export function ProductsCatalogPage() {
  usePageMeta({
    title: 'Products & Solutions',
    description:
      'Explore FLEXORA industrial polyethylene packaging categories: jumbo rolls, heavy-duty PE bags, insulation compression bags, stretch hoods, shrink films, liners, and custom conversion.',
  });

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCat = selectedCategory === 'all' || product.categorySlug === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        product.name.toLowerCase().includes(q) ||
        product.summary.toLowerCase().includes(q) ||
        product.resinOptions.some((r) => r.toLowerCase().includes(q)) ||
        product.typicalApplications.some((a) => a.toLowerCase().includes(q))
      );
    });
  }, [query, selectedCategory]);

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products & Solutions' }]}
        title="Industrial Flexible Packaging Portfolio"
        subtitle="All products are available for specification-led sourcing, supply coordination, or custom development subject to confirmed manufacturing-partner capabilities."
      />

      {/* Category Directory */}
      <section className="py-14 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-[#102B46] mb-6">
            Browse by Packaging Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="border border-[#DCE6EF] bg-[#F5F8FB] hover:border-[#3977A8] p-4 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-sm font-bold text-[#102B46]">{cat.shortTitle}</h3>
                  <p className="mt-1.5 text-xs text-[#172536]/75 line-clamp-2">{cat.tagline}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#3977A8]">
                  <span>Category Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filterable Product Specification Profiles */}
      <section className="py-16 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#DCE6EF]">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#102B46]">
                Technical Product Profiles
              </h2>
              <p className="mt-1 text-sm text-[#172536]/75">
                Filter by category or search by resin grade (LDPE, LLDPE, HDPE), application, or product format.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-[#172536]/50 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search films, bags, liners, LDPE..."
                  aria-label="Search products"
                  className="pl-9 pr-4 py-2.5 text-sm bg-white border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none w-full sm:w-64"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by product category"
                className="px-3.5 py-2.5 text-sm bg-white border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
              >
                <option value="all">All Categories</option>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-[#DCE6EF] p-10 text-center space-y-3">
              <p className="font-display text-lg font-bold text-[#102B46]">
                No matching product profiles found
              </p>
              <p className="text-sm text-[#172536]/75 max-w-md mx-auto">
                Need a custom film width, gauge, or converted bag not listed here? Submit your technical parameters directly.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors"
              >
                Discuss Custom Specification
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const category = PRODUCT_CATEGORIES.find((c) => c.slug === product.categorySlug);
                return (
                  <article
                    key={product.slug}
                    className="bg-white border border-[#DCE6EF] flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-[4/3] overflow-hidden border-b border-[#DCE6EF]">
                        <TechnicalImage imageKey={product.imageKey} className="w-full h-full" />
                      </div>
                      <div className="p-6">
                        <div className="text-xs text-[#3977A8] font-medium mb-2">
                          <span>{category?.shortTitle}</span>
                          <span aria-hidden="true"> · </span>
                          <span>{product.resinOptions.join(' / ')}</span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-[#102B46] leading-snug">
                          <Link
                            to={`/products/${product.categorySlug}/${product.slug}`}
                            className="hover:text-[#3977A8] transition-colors"
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-2.5 text-sm text-[#172536]/80 leading-relaxed">
                          {product.summary}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 border-t border-[#DCE6EF] flex items-center justify-between">
                      <Link
                        to={`/products/${product.categorySlug}/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
                      >
                        <span>Full Technical Specification</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
