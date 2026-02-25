import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Navigation';
import Home from './pages/Home';
import CardMachines from './pages/CardMachines';
import Pricing from './pages/Pricing';
import IndustryRestaurants from './pages/IndustryRestaurants';
import Partners from './pages/Partners';
import BlogArticle from './pages/BlogArticle';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card-machines" element={<CardMachines />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/industries/restaurants" element={<IndustryRestaurants />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blog/how-to-switch-payment-provider-uk" element={<BlogArticle />} />
            {/* Fallback to home for demo purposes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
