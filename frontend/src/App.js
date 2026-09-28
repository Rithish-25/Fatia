import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Members from './pages/Members/Members';
import HonouraryMembers from './pages/HonouraryMembers/HonouraryMembers';
import Board from './pages/Board/Board';
import PastTermsBoard from './pages/PastTermsBoard/PastTermsBoard';
import Events from './pages/Events/Events';
import Fair from './pages/Fair/Fair';
import FairYearPage from './pages/FairYearPage/FairYearPage';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ExecutiveLoader from './components/ExecutiveLoader/ExecutiveLoader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <ExecutiveLoader onComplete={() => setLoading(false)} />}

      <Router>
        <ScrollToTop />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            opacity: loading ? 0 : 1,
            transform: loading ? 'translateY(16px)' : 'translateY(0)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <Header />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/honorary" element={<HonouraryMembers />} />
              <Route path="/honorary-members" element={<HonouraryMembers />} />
              <Route path="/board" element={<Board />} />
              <Route path="/board/past-terms" element={<PastTermsBoard />} />
              <Route path="/board/past" element={<PastTermsBoard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/fair" element={<Fair />} />
              <Route path="/fair/:year" element={<FairYearPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
