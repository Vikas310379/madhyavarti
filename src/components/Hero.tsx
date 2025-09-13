import React from "react";
import { Star } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slow diagonal gradient sweeps */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 animate-slowPan" />
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-900/20 via-transparent to-orange-900/20 animate-slowPan2" />

        {/* Subtle moving spotlight */}
        <div className="absolute w-[80rem] h-[80rem] rounded-full bg-white/5 blur-3xl animate-spotlight" />

        {/* Mesh / grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full text-gray-100 text-sm font-medium mb-8">
          <Star className="h-4 w-4 mr-2 text-yellow-400" />
          #1 Rated Mobile App
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-100 text-center mb-6">
          Grow Smarter with
          <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
            Madhyavarti
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 text-center mb-8 max-w-xl">
          A unified platform for grocery and FMCG businesses, connecting millers,
          distributors, and wholesalers, with access to mandi reports, market
          prices, commodity insights, and direct procurement.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all group"
          >
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 opacity-30 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition-all duration-700 animate-glow"></span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10 relative z-10"
            />
          </a>
          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all group"
          >
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 opacity-30 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition-all duration-700 animate-glow"></span>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-10 relative z-10"
            />
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 text-gray-300 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1M+</div>
            <div className="text-sm">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4.9★</div>
            <div className="text-sm">App Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-sm">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
