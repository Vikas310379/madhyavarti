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

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeatureTiles />
      <ImageTextSection />
      <BenefitsSection />
      <ClientSlider />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/overview" element={<Overview />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;