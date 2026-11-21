import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../cms/categories';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (prefix: string) =>
    prefix === '/' ? location.pathname === '/' : location.pathname.startsWith(prefix);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#DCE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          onClick={closeAll}
          className="font-display text-xl font-extrabold tracking-tight text-[#102B46] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3977A8]"
        >
          FLEXORA
        </Link>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#172536]"
        >
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('products')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to="/products"
              onClick={closeAll}
              className={`inline-flex items-center gap-1 py-5 whitespace-nowrap shrink-0 transition-colors hover:text-[#3977A8] ${
                isActive('/products') ? 'text-[#102B46] font-semibold' : ''
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </Link>
            {openDropdown === 'products' && (
              <div className="absolute left-0 top-full w-[540px] bg-white border border-[#DCE6EF] shadow-lg p-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
                <div className="col-span-2 pb-2 mb-1 border-b border-[#DCE6EF] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#3977A8]">Product Portfolio</span>
                  <Link
                    to="/products"
                    onClick={closeAll}
                    className="text-xs font-semibold text-[#102B46] hover:underline"
                  >
                    View All Solutions →
                  </Link>
                </div>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/products/${cat.slug}`}
                    onClick={closeAll}
                    className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Capabilities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('capabilities')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to="/manufacturing-capabilities"
              onClick={closeAll}
              className={`inline-flex items-center gap-1 py-5 whitespace-nowrap shrink-0 transition-colors hover:text-[#3977A8] ${
                isActive('/manufacturing-capabilities') ||
                isActive('/quality-assurance') ||
                isActive('/global-supply-exports') ||
                isActive('/sustainability')
                  ? 'text-[#102B46] font-semibold'
                  : ''
              }`}
            >
              <span>Capabilities</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </Link>
            {openDropdown === 'capabilities' && (
              <div className="absolute left-0 top-full w-64 bg-white border border-[#DCE6EF] shadow-lg p-4 flex flex-col gap-2">
                <Link
                  to="/manufacturing-capabilities"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Manufacturing &amp; Capabilities
                </Link>
                <Link
                  to="/quality-assurance"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Quality Assurance
                </Link>
                <Link
                  to="/global-supply-exports"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Global Supply &amp; Exports
                </Link>
                <Link
                  to="/sustainability"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Sustainability
                </Link>
              </div>
            )}
          </div>

          {/* Industries */}
          <Link
            to="/industries"
            onClick={closeAll}
            className={`py-5 whitespace-nowrap shrink-0 transition-colors hover:text-[#3977A8] ${
              isActive('/industries') ? 'text-[#102B46] font-semibold' : ''
            }`}
          >
            Industries
          </Link>

          {/* Knowledge Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('knowledge')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to="/knowledge-centre"
              onClick={closeAll}
              className={`inline-flex items-center gap-1 py-5 whitespace-nowrap shrink-0 transition-colors hover:text-[#3977A8] ${
                isActive('/knowledge-centre') || isActive('/blog') || isActive('/about')
                  ? 'text-[#102B46] font-semibold'
                  : ''
              }`}
            >
              <span>Knowledge</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </Link>
            {openDropdown === 'knowledge' && (
              <div className="absolute left-0 top-full w-64 bg-white border border-[#DCE6EF] shadow-lg p-4 flex flex-col gap-2">
                <Link
                  to="/knowledge-centre"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Technical Knowledge Centre
                </Link>
                <Link
                  to="/blog"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Blog &amp; Editorial Library
                </Link>
                <Link
                  to="/about"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  About FLEXORA
                </Link>
              </div>
            )}
          </div>

          {/* Insights Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('insights')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to="/news"
              onClick={closeAll}
              className={`inline-flex items-center gap-1 py-5 whitespace-nowrap shrink-0 transition-colors hover:text-[#3977A8] ${
                isActive('/news') ? 'text-[#102B46] font-semibold' : ''
              }`}
            >
              <span>Insights</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </Link>
            {openDropdown === 'insights' && (
              <div className="absolute right-0 top-full w-64 bg-white border border-[#DCE6EF] shadow-lg p-4 flex flex-col gap-2">
                <Link
                  to="/news"
                  onClick={closeAll}
                  className="text-xs font-semibold text-[#102B46] hover:text-[#3977A8] py-1.5 border-b border-[#DCE6EF]"
                >
                  All News &amp; Insights
                </Link>
                <Link
                  to="/news/polymer-market"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Polymer Market News
                </Link>
                <Link
                  to="/news/packaging-industry"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Packaging Industry News
                </Link>
                <Link
                  to="/news/manufacturing-technology"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Manufacturing &amp; Technology
                </Link>
                <Link
                  to="/news/sustainability-innovation"
                  onClick={closeAll}
                  className="text-xs font-medium text-[#172536] hover:text-[#3977A8] py-1.5"
                >
                  Sustainability &amp; Innovation
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            onClick={closeAll}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3977A8]"
          >
            Discuss Requirements
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#102B46] border border-[#DCE6EF] hover:bg-[#F5F8FB] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#DCE6EF] bg-white max-h-[82vh] overflow-y-auto px-4 py-6 space-y-6">
          <div>
            <p className="text-xs font-semibold text-[#3977A8] mb-2">Products &amp; Solutions</p>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/products" onClick={closeAll} className="text-sm font-semibold text-[#102B46] py-1">
                All Products Overview
              </Link>
              {PRODUCT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  onClick={closeAll}
                  className="text-sm text-[#172536] py-1 pl-2 border-l border-[#DCE6EF]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#3977A8] mb-2">Supply &amp; Capabilities</p>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/manufacturing-capabilities" onClick={closeAll} className="text-sm text-[#172536] py-1">
                Manufacturing &amp; Capabilities
              </Link>
              <Link to="/quality-assurance" onClick={closeAll} className="text-sm text-[#172536] py-1">
                Quality Assurance
              </Link>
              <Link to="/industries" onClick={closeAll} className="text-sm text-[#172536] py-1">
                Industries We Serve
              </Link>
              <Link to="/global-supply-exports" onClick={closeAll} className="text-sm text-[#172536] py-1">
                Global Supply &amp; Exports
              </Link>
              <Link to="/sustainability" onClick={closeAll} className="text-sm text-[#172536] py-1">
                Sustainability
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#3977A8] mb-2">Knowledge &amp; Insights</p>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/knowledge-centre" onClick={closeAll} className="text-sm text-[#172536] py-1">
                Technical Knowledge Centre
              </Link>
              <Link to="/blog" onClick={closeAll} className="text-sm text-[#172536] py-1">
                Blog &amp; Editorial Library
              </Link>
              <Link to="/news" onClick={closeAll} className="text-sm text-[#172536] py-1">
                News &amp; Insights Archive
              </Link>
              <Link to="/about" onClick={closeAll} className="text-sm text-[#172536] py-1">
                About FLEXORA
              </Link>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={closeAll}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#102B46] hover:bg-[#3977A8] transition-colors"
            >
              Discuss Your Packaging Requirements
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
