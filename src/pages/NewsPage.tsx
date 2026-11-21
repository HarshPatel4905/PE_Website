import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { NEWS_CATEGORIES, NEWS_ITEMS } from '../cms/news';
import { NewsSectionRoute } from '../cms/types';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';

interface NewsPageProps {
  sectionRoute?: NewsSectionRoute;
}

const SECTION_META: Record<
  NewsSectionRoute,
  { title: string; subtitle: string }
> = {
  'polymer-market': {
    title: 'Polymer Market News',
    subtitle:
      'Resin supply trends, ethylene cracker economics, and global petrochemical developments tracked for industrial PE buyers.',
  },
  'packaging-industry': {
    title: 'Packaging Industry News',
    subtitle:
      'Industrial flexible packaging demand, load unitisation, and maritime supply chain logistics coverage.',
  },
  'manufacturing-technology': {
    title: 'Manufacturing & Technology News',
    subtitle:
      'Co-extrusion advancements, metallocene downgauging, and barrier polyolefin research developments.',
  },
  'sustainability-innovation': {
    title: 'Sustainability & Innovation News',
    subtitle:
      'Australian packaging reform, commercial film recovery, circular polyolefins, and traceability frameworks.',
  },
};

export function NewsPage({ sectionRoute }: NewsPageProps) {
  const [selectedYear, setSelectedYear] = useState<'all' | '2026' | '2025' | '2024'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const meta = sectionRoute
    ? SECTION_META[sectionRoute]
    : {
        title: 'News & Industry Intelligence Archive',
        subtitle:
          'Curated polymer market developments, manufacturing technology updates, and historical 2024–2025 industry archive sourced from recognised publications with FLEXORA buyer commentary.',
      };

  usePageMeta({
    title: meta.title,
    description: meta.subtitle,
  });

  const filteredNews = useMemo(() => {
    return NEWS_ITEMS.filter((item) => {
      if (sectionRoute && item.sectionRoute !== sectionRoute) return false;
      if (selectedYear !== 'all' && item.year !== selectedYear) return false;
      if (!sectionRoute && selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      return true;
    }).sort((a, b) => b.originalPublishedDate.localeCompare(a.originalPublishedDate));
  }, [sectionRoute, selectedYear, selectedCategory]);

  return (
    <div>
      <PageHeader
        breadcrumbs={
          sectionRoute
            ? [
                { label: 'Home', to: '/' },
                { label: 'News & Insights', to: '/news' },
                { label: meta.title },
              ]
            : [{ label: 'Home', to: '/' }, { label: 'News & Insights' }]
        }
        title={meta.title}
        subtitle={meta.subtitle}
      />

      {/* Section Sub-Navigation + Archive Transparency Notice */}
      <section className="py-6 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/news"
              className={`px-3.5 py-2 text-xs font-semibold border transition-colors whitespace-nowrap ${
                !sectionRoute
                  ? 'bg-[#102B46] text-white border-[#102B46]'
                  : 'bg-[#F5F8FB] text-[#172536] border-[#DCE6EF] hover:border-[#3977A8]'
              }`}
            >
              All Insights &amp; Archive
            </Link>
            {(Object.keys(SECTION_META) as NewsSectionRoute[]).map((routeKey) => (
              <Link
                key={routeKey}
                to={`/news/${routeKey}`}
                className={`px-3.5 py-2 text-xs font-semibold border transition-colors whitespace-nowrap ${
                  sectionRoute === routeKey
                    ? 'bg-[#102B46] text-white border-[#102B46]'
                    : 'bg-[#F5F8FB] text-[#172536] border-[#DCE6EF] hover:border-[#3977A8]'
                }`}
              >
                {SECTION_META[routeKey].title}
              </Link>
            ))}
          </div>

          <p className="text-xs text-[#172536]/75 leading-relaxed">
            Industry Archive Notice: Entries from 2024 and 2025 are maintained as an external industry reference archive with original publication dates, publisher attribution, and source links—distinct from FLEXORA’s operating history. Each summary clearly separates external reporting from FLEXORA procurement commentary.
          </p>
        </div>
      </section>

      {/* Date & Category Filters + Articles */}
      <section className="py-12 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-1 p-1 bg-white border border-[#DCE6EF] w-fit">
              {(['all', '2026', '2025', '2024'] as const).map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                    selectedYear === yr
                      ? 'bg-[#102B46] text-white'
                      : 'text-[#172536] hover:bg-[#F5F8FB]'
                  }`}
                >
                  {yr === 'all' ? 'All Years' : yr}
                </button>
              ))}
            </div>

            {!sectionRoute && (
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter news by category"
                className="px-3.5 py-2 text-xs font-medium bg-white border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
              >
                <option value="all">All 10 Industry Categories</option>
                {NEWS_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            )}
          </div>

          {filteredNews.length === 0 ? (
            <div className="bg-white border border-[#DCE6EF] p-8 text-center">
              <p className="text-sm text-[#172536]/80">
                No entries match the selected year and category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNews.map((item) => (
                <article
                  key={item.slug}
                  className="bg-white border border-[#DCE6EF] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#172536]/65 mb-2">
                      <span className="font-semibold text-[#3977A8]">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.publisher}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{item.originalPublishedDate}</span>
                      {item.isHistoricalArchive && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Industry Archive</span>
                        </>
                      )}
                    </div>

                    <h2 className="font-display text-lg font-bold text-[#102B46] leading-snug">
                      <Link to={`/news/item/${item.slug}`} className="hover:text-[#3977A8] transition-colors">
                        {item.title}
                      </Link>
                    </h2>

                    <div className="mt-4 space-y-3 text-sm text-[#172536]/85">
                      <div>
                        <p className="text-xs font-semibold text-[#102B46]">Source Reporting Summary</p>
                        <p className="mt-1 text-xs leading-relaxed">{item.sourceReportingSummary}</p>
                      </div>
                      <div className="pt-2 border-t border-[#DCE6EF]">
                        <p className="text-xs font-semibold text-[#3977A8]">FLEXORA Procurement Commentary</p>
                        <p className="mt-1 text-xs leading-relaxed">{item.flexoraCommentary}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#DCE6EF] flex items-center justify-between text-xs">
                    <Link
                      to={`/news/item/${item.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#102B46] hover:text-[#3977A8]"
                    >
                      <span>Full Briefing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#3977A8] hover:underline"
                    >
                      <span>Original Source ({item.publisher})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
