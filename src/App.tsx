import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsCatalogPage } from './pages/ProductsCatalogPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { QualityAssurancePage } from './pages/QualityAssurancePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { GlobalSupplyPage } from './pages/GlobalSupplyPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { KnowledgeCentrePage } from './pages/KnowledgeCentrePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, TermsConditionsPage } from './pages/LegalPages';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [cookieModalOpen, setCookieModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F5F8FB] text-[#172536]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsCatalogPage />} />
            <Route path="/products/:categorySlug" element={<CategoryPage />} />
            <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
            <Route path="/manufacturing-capabilities" element={<ManufacturingPage />} />
            <Route path="/quality-assurance" element={<QualityAssurancePage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/global-supply-exports" element={<GlobalSupplyPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/polymer-market" element={<NewsPage sectionRoute="polymer-market" />} />
            <Route path="/news/packaging-industry" element={<NewsPage sectionRoute="packaging-industry" />} />
            <Route path="/news/manufacturing-technology" element={<NewsPage sectionRoute="manufacturing-technology" />} />
            <Route path="/news/sustainability-innovation" element={<NewsPage sectionRoute="sustainability-innovation" />} />
            <Route path="/news/item/:slug" element={<NewsDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/knowledge-centre" element={<KnowledgeCentrePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer onOpenCookieSettings={() => setCookieModalOpen(true)} />
        <CookieConsent
          forceOpen={cookieModalOpen}
          onCloseForce={() => setCookieModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
