import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { EDITORIAL_ARTICLES } from '../cms/articles';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';

const BLOG_CATEGORIES = [
  'All Categories',
  'Polymer Materials',
  'Film Manufacturing',
  'Technical Properties',
  'Quality Control',
  'Industrial Packaging',
  'Market & Logistics',
];

export function BlogPage() {
  usePageMeta({
    title: 'Blog & Editorial Library',
    description:
      'Twenty technical buyer guides covering LDPE/LLDPE/HDPE resins, blown-film extrusion, roll weight calculations, quality control, and export logistics.',
  });

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EDITORIAL_ARTICLES.filter((art) => {
      const catMatch =
        selectedCategory === 'All Categories' || art.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        art.title.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.keyTakeaways.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, selectedCategory]);

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Blog & Resources' }]}
        title="Industrial Packaging Editorial Library"
        subtitle="Practical, specification-driven buyer guides written for procurement managers, packaging engineers, and industrial operations teams."
      />

      <section className="py-10 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold border transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#102B46] text-white border-[#102B46]'
                    : 'bg-[#F5F8FB] text-[#172536] border-[#DCE6EF] hover:border-[#3977A8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative shrink-0">
            <Search className="w-4 h-4 text-[#172536]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 20 buyer guides..."
              aria-label="Search editorial articles"
              className="pl-9 pr-4 py-2 text-sm bg-white border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none w-full sm:w-64"
            />
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="bg-white border border-[#DCE6EF] p-10 text-center">
              <p className="font-display text-base font-bold text-[#102B46]">
                No articles match your search
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('All Categories');
                }}
                className="mt-3 px-4 py-2 text-xs font-semibold text-[#102B46] border border-[#DCE6EF]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <article
                  key={art.slug}
                  className="bg-white border border-[#DCE6EF] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#172536]/65 mb-2.5">
                      <span>{art.category}</span>
                      <span className="font-mono tabular-nums">
                        #{String(art.number).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-[#102B46] leading-snug">
                      <Link to={`/blog/${art.slug}`} className="hover:text-[#3977A8] transition-colors">
                        {art.title}
                      </Link>
                    </h2>
                    <p className="mt-2.5 text-sm text-[#172536]/80 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#DCE6EF] flex items-center justify-between text-xs">
                    <span className="text-[#172536]/65">
                      {art.publishedDate} · {art.readTime}
                    </span>
                    <Link
                      to={`/blog/${art.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#102B46] hover:text-[#3977A8]"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
