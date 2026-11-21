import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { EDITORIAL_ARTICLES, getArticleBySlug } from '../cms/articles';
import { PRODUCT_CATEGORIES } from '../cms/categories';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHeader } from '../components/PageHeader';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  usePageMeta({
    title: article ? article.title : 'Technical Buyer Guide',
    description: article
      ? article.summary
      : 'Industrial flexible packaging technical guide by FLEXORA.',
  });

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold text-[#102B46]">Article Not Found</h1>
        <Link to="/blog" className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#102B46]">
          Browse All 20 Guides
        </Link>
      </div>
    );
  }

  const relatedCategories = PRODUCT_CATEGORIES.filter((c) =>
    article.relatedProductCategories.includes(c.slug)
  );
  const currentIndex = EDITORIAL_ARTICLES.findIndex((a) => a.slug === article.slug);
  const nextArticle =
    currentIndex >= 0 && currentIndex + 1 < EDITORIAL_ARTICLES.length
      ? EDITORIAL_ARTICLES[currentIndex + 1]
      : EDITORIAL_ARTICLES[0];

  return (
    <div>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog & Resources', to: '/blog' },
          { label: article.category },
        ]}
        title={article.title}
        subtitle={`${article.category} · Published ${article.publishedDate} · ${article.readTime}`}
      />

      <article className="py-14 bg-[#F5F8FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 bg-white border border-[#DCE6EF] p-6 sm:p-10 space-y-8">
            <div className="bg-[#F5F8FB] border border-[#DCE6EF] p-5">
              <h2 className="font-display text-sm font-bold text-[#102B46] mb-2.5">
                Key Technical Takeaways
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#172536]/85">
                {article.keyTakeaways.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#102B46]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-base text-[#172536]/85 leading-relaxed">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 pt-2 text-sm text-[#172536]/85">
                    {section.bullets.map((b) => (
                      <li key={b} className="leading-relaxed">
                        • {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="pt-6 border-t border-[#DCE6EF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102B46] hover:text-[#3977A8]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All 20 Technical Guides</span>
              </Link>
              {nextArticle && (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3977A8] hover:underline"
                >
                  <span>Next: {nextArticle.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#DCE6EF] p-6 space-y-4">
              <h3 className="font-display text-base font-bold text-[#102B46]">
                Related Product Families
              </h3>
              <div className="space-y-2.5">
                {relatedCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/products/${cat.slug}`}
                    className="block p-3 bg-[#F5F8FB] border border-[#DCE6EF] hover:border-[#3977A8] text-xs font-semibold text-[#102B46] transition-colors"
                  >
                    {cat.name} →
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#102B46] text-white p-6 space-y-3">
              <h3 className="font-display text-base font-bold">Need Application Guidance?</h3>
              <p className="text-xs text-[#DCE6EF]/85 leading-relaxed">
                Share your product dimensions, fill weight, and sealing equipment to review specification options.
              </p>
              <Link
                to="/contact"
                className="inline-block px-4 py-2.5 text-xs font-semibold bg-white text-[#102B46] hover:bg-[#DCE6EF] transition-colors"
              >
                Discuss Requirements
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
