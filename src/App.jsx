import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PRODUCTS_TYPES, ROUTES } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import HomePage from '@/pages/HomePage';
import { CreationsPage, PatternsPage } from '@/pages/ProductsPage';
import ProductPage from '@/pages/ProductPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AnimatedPage from '@/pages/AnimatedPage';
import TermsOfUse from '@/pages/TermsOfUse';
import LegalNotice from '@/pages/LegalNotice';
import YarnGuidePage from '@/pages/YarnGuidePage';
import './style.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);
  return null;
}

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="pageContent">
        <AnimatedPage key={location.pathname}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.CREATIONS} element={<CreationsPage />} />
            <Route path={ROUTES.PATTERNS} element={<PatternsPage />} />
            <Route path={`${ROUTES.CREATION}/:slug`} element={<ProductPage productType={PRODUCTS_TYPES.CREATION} />} />
            <Route path={`${ROUTES.PATTERN}/:slug`} element={<ProductPage productType={PRODUCTS_TYPES.PATTERN} />} />
            <Route path={ROUTES.CONDITIONS_UTILISATION} element={<TermsOfUse />} />
            <Route path={ROUTES.MENTIONS_LEGALES} element={<LegalNotice />} />
            <Route path={ROUTES.YARN_GUIDE_PAGE} element={<YarnGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatedPage>
      </div>
      <ScrollToTopButton/>
      <ScrollToHash />
      <Footer />
    </>
  );
}

export default App;