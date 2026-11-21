import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { KNOWLEDGE_PILLARS } from '../cms/knowledge';
import { EDITORIAL_ARTICLES } from '../cms/articles';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';
import { RollCalculator } from '../components/RollCalculator';

export function KnowledgeCentrePage() {
  usePageMeta({
    title: 'Technical Knowledge Centre',
    description:
      'Industrial polyethylene engineering reference covering polymer resins, blown-film extrusion, micron/gauge conversion, mechanical properties, quality control, and roll weight calculation.',
  });

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Technical Knowledge Centre' }]}
        title="Technical Knowledge Centre"
        subtitle="Engineering reference documentation for procurement teams, packaging engineers, and manufacturing buyers working with polyethylene films and industrial flexible packaging."
      />

      {/* Quick Anchor Navigation */}
      <section className="py-5 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
          {KNOWLEDGE_PILLARS.map((pillar) => (
            <a
              key={pillar.id}
              href={`#${pillar.id}`}
              className="px-3.5 py-2 text-xs font-semibold bg-[#F5F8FB] border border-[#DCE6EF] text-[#102B46] hover:border-[#3977A8] transition-colors whitespace-nowrap"
            >
              {pillar.title}
            </a>
          ))}
          <a
            href="#roll-calculator"
            className="px-3.5 py-2 text-xs font-semibold bg-[#102B46] text-white hover:bg-[#3977A8] transition-colors whitespace-nowrap"
          >
            Roll Weight Calculator
          </a>
        </div>
      </section>

      {/* Five Technical Knowledge Pillars */}
      <section className="py-14 bg-[#F5F8FB] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {KNOWLEDGE_PILLARS.map((pillar, index) => {
            const linkedArticles = EDITORIAL_ARTICLES.filter((a) =>
              pillar.relatedArticleSlugs.includes(a.slug)
            );
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="bg-white border border-[#DCE6EF] p-6 sm:p-8 space-y-6 scroll-mt-24"
              >
                <div className="border-b border-[#DCE6EF] pb-4">
                  <span className="font-mono text-xs text-[#3977A8] tabular-nums">
                    Module {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-bold text-[#102B46]">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#172536]/80 max-w-3xl">{pillar.summary}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pillar.topics.map((topic) => (
                    <div key={topic.name} className="bg-[#F5F8FB] border border-[#DCE6EF] p-5 space-y-3">
                      <h3 className="font-display text-base font-bold text-[#102B46]">
                        {topic.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#172536]/85 leading-relaxed">
                        {topic.detail}
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#172536]/80 pt-2 border-t border-[#DCE6EF]">
                        {topic.technicalPoints.map((pt) => (
                          <li key={pt}>• {pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                  <span className="font-semibold text-[#102B46]">Related Deep-Dive Guides:</span>
                  {linkedArticles.map((art) => (
                    <Link
                      key={art.slug}
                      to={`/blog/${art.slug}`}
                      className="inline-flex items-center gap-1 font-medium text-[#3977A8] hover:underline"
                    >
                      <span>{art.title}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Roll Weight & Thickness Calculator */}
      <section id="roll-calculator" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RollCalculator />
        </div>
      </section>
    </div>
  );
}
