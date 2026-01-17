import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HyperPublic from './pages/HyperPublic';
import Karaoke from './pages/Karaoke';
import Hostbar from './pages/Hostbar';
import ShirtsRoom from './pages/ShirtsRoom';
import KimonoRoom from './pages/KimonoRoom';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// ScrollToTop component to ensure pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bundang-hyperpub-guide" element={<HyperPublic />} />
          <Route path="/bundang-karaoke-guide" element={<Karaoke />} />
          <Route path="/bundang-hostbar-guide" element={<Hostbar />} />
          <Route path="/bundang-shirtsroom-guide" element={<ShirtsRoom />} />
          <Route path="/bundang-kimono-room-guide" element={<KimonoRoom />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback for old anchors or direct links */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
