import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../cms/categories';

interface FooterProps {
  onOpenCookieSettings: () => void;
}

export function Footer({ onOpenCookieSettings }: FooterProps) {
  return (
    <footer className="bg-[#102B46] text-[#DCE6EF] border-t border-[#172536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand Positioning */}
          <div className="space-y-4">
            <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-white inline-block">
              FLEXORA
            </Link>
            <p className="text-sm text-[#DCE6EF]/85 leading-relaxed">
              Industrial Packaging. Global Perspective. Connecting industrial packaging requirements with qualified manufacturing capabilities through specification-led sourcing and export coordination.
            </p>
            <p className="text-xs text-[#DCE6EF]/65 leading-relaxed">
              Primary focus: Australia &amp; India, extending to international industrial corridors as verified supply requires.
            </p>
          </div>

          {/* Column 2: Product Portfolio */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">Product Portfolio</h3>
            <ul className="space-y-2 text-xs text-[#DCE6EF]/80">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  All Products &amp; Solutions
                </Link>
              </li>
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/products/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities & Supply */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">Capabilities &amp; Supply</h3>
            <ul className="space-y-2 text-xs text-[#DCE6EF]/80">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About FLEXORA
                </Link>
              </li>
              <li>
                <Link to="/manufacturing-capabilities" className="hover:text-white transition-colors">
                  Manufacturing &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link to="/quality-assurance" className="hover:text-white transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/global-supply-exports" className="hover:text-white transition-colors">
                  Global Supply &amp; Exports
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Technical Resources & Insights */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white mb-4">Knowledge &amp; Insights</h3>
            <ul className="space-y-2 text-xs text-[#DCE6EF]/80">
              <li>
                <Link to="/knowledge-centre" className="hover:text-white transition-colors">
                  Technical Knowledge Centre
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog &amp; Editorial Library
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News &amp; Insights Archive
                </Link>
              </li>
              <li>
                <Link to="/news/polymer-market" className="hover:text-white transition-colors">
                  Polymer Market News
                </Link>
              </li>
              <li>
                <Link to="/news/packaging-industry" className="hover:text-white transition-colors">
                  Packaging Industry News
                </Link>
              </li>
              <li>
                <Link to="/news/manufacturing-technology" className="hover:text-white transition-colors">
                  Manufacturing &amp; Technology
                </Link>
              </li>
              <li>
                <Link to="/news/sustainability-innovation" className="hover:text-white transition-colors">
                  Sustainability &amp; Innovation
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/contact" className="text-white font-semibold hover:underline">
                  Contact &amp; Specification Desk →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Policy Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#DCE6EF]/70">
          <p>
            © 2026 FLEXORA. Working brand name subject to final legal, trademark, and domain clearance. Technical figures presented on this website are illustrative only; final specifications are confirmed per order with qualified manufacturing partners.
          </p>
          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <button
              type="button"
              onClick={onOpenCookieSettings}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Cookie Preferences
            </button>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
