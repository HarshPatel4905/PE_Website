import { Link, useParams } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { getNewsBySlug } from '../cms/news';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';

export function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = getNewsBySlug(slug || '');

  usePageMeta({
    title: item ? item.title : 'Industry Briefing',
    description: item
      ? item.sourceReportingSummary
      : 'FLEXORA polymer and flexible packaging industry briefing.',
  });

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#102B46]">News Briefing Not Found</h1>
        <Link to="/news" className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#102B46]">
          Return to News Archive
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'News & Insights', to: '/news' },
          { label: item.category, to: `/news/${item.sectionRoute}` },
        ]}
        title={item.title}
        subtitle={`Original Publisher: ${item.publisher} · Published: ${item.originalPublishedDate}${
          item.isHistoricalArchive ? ' · Historical Industry Archive' : ''
        }`}
      />

      <article className="py-14 bg-[#F5F8FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white border border-[#DCE6EF] p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="font-display text-lg font-bold text-[#102B46]">
                Original Source Reporting Summary
              </h2>
              <p className="mt-2.5 text-base text-[#172536]/85 leading-relaxed">
                {item.sourceReportingSummary}
              </p>
              <div className="mt-4">
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3977A8] hover:underline"
                >
                  <span>Read Original Source at {item.publisher}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DCE6EF]">
              <h2 className="font-display text-lg font-bold text-[#102B46]">
                FLEXORA Procurement &amp; Buyer Commentary
              </h2>
              <p className="mt-2.5 text-base text-[#172536]/85 leading-relaxed">
                {item.flexoraCommentary}
              </p>

              <div className="mt-5 bg-[#F5F8FB] border border-[#DCE6EF] p-5">
                <h3 className="font-display text-sm font-bold text-[#102B46] mb-2">
                  Why This Matters for Packaging Buyers
                </h3>
                <ul className="space-y-2 text-sm text-[#172536]/85">
                  {item.buyerRelevancePoints.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102B46] hover:text-[#3977A8]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News &amp; Insights Archive</span>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors"
            >
              Discuss Supply Planning
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
