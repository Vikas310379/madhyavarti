import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureTiles from './components/FeatureTiles';
import StatsSection from './components/StatsSection';
import ImageTextSection from './components/ImageTextSection';
import BenefitsSection from './components/BenefitsSection';
import ClientSlider from './components/ClientSlider';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Contact from './contact';
import Overview from './components/overview';
import FAQ from './components/FAQ';
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeatureTiles />
      <ImageTextSection />
      <BenefitsSection />
      <ClientSlider />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        <WhatsAppButton /> {/* 👈 Now global, shows on every page */}
      </div>
    </Router>
  );
}

export default App;
