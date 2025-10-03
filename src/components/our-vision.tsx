import React from 'react';
import Navbar from './Navbar'; // adjust path if needed

const HeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/6 top-1/6 w-[48rem] h-[48rem] bg-orange-700 rounded-full blur-3xl opacity-40 animate-lightMove1 grainy" />
    <div className="absolute right-1/6 top-1/3 w-[48rem] h-[48rem] bg-blue-500 rounded-full blur-3xl opacity-30 animate-lightMove2 grainy" />
    <div className="absolute left-1/2 bottom-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-lightMove3 grainy" />
  </div>
);

const OurVision: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center bg-gray-900 overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2236] via-[#42281a] to-[#1a2236] opacity-70"></div>
        <div className="relative z-10 text-center w-full">
          <nav className="mb-4 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold text-blue-200">Our Vision</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Our Vision</h1>
        </div>
      </section>

      {/* Our Vision Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              At <strong>Madhyavarti</strong>, our vision is to create a transparent and inclusive
              marketplace that connects small, medium, and large vendors with the opportunities they deserve.
              We are building a free, easy-to-use mobile app that empowers vendors to access
              <strong> real-time market prices, industry trends, and wholesale deals</strong> — all in one place.
            </p>
            <p className="text-gray-700 mb-4">
              By providing updated price information and direct connections to various wholesale markets,
              we give vendors the independence to make informed decisions, negotiate smarter, and grow their
              businesses without limitations. Our platform also enables them to <strong>buy directly from us</strong>
              at their convenience, while keeping costs low with only a nominal service fee.
            </p>
            <p className="text-gray-700">
              We strive to be the trusted bridge between vendors and the market, helping them unlock new
              opportunities, stay competitive, and achieve long-term growth in an ever-changing business landscape.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img 
              src="/images/vision.png" // <-- update with your actual image path
              alt="Our Vision" 
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;
