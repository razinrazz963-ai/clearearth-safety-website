import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingActions } from './components/common/FloatingActions';

// Modular Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Approvals } from './pages/Approvals';
import { Services } from './pages/Services';
import { InspectionCertification } from './pages/InspectionCertification';
import { AssessmentTraining } from './pages/AssessmentTraining';
import { Instrumentation } from './pages/Instrumentation';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/inspection-certification" element={<InspectionCertification />} />
            <Route path="/services/assessment-training" element={<AssessmentTraining />} />
            <Route path="/services/instrumentation" element={<Instrumentation />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
