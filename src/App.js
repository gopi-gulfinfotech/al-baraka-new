import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import QHSEPage from './pages/QHSEPage';
import CareersPage from './pages/CareersPage';
import AwardsPage from './pages/AwardsPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  const location = useLocation();
  const { pathname } = location;
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div className="min-h-screen bg-ivory flex flex-col modern-shell">
      <div className="site-bg-orb site-bg-orb-a" aria-hidden="true" />
      <div className="site-bg-orb site-bg-orb-b" aria-hidden="true" />
      <div className="site-bg-orb site-bg-orb-c" aria-hidden="true" />
      <motion.div
        className="scroll-progress"
        style={{ scaleX: shouldReduce ? 0 : scrollScaleX, transformOrigin: '0% 50%' }}
        aria-hidden="true"
      />
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={shouldReduce ? false : { opacity: 0, y: 16, filter: 'blur(8px)' }}
            animate={shouldReduce ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={shouldReduce ? {} : { opacity: 0, y: -10, filter: 'blur(6px)' }}
            transition={{ duration: shouldReduce ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location} key={pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/qhse" element={<QHSEPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}
