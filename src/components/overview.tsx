import React from 'react';
import Navbar from '../components/Navbar'; // adjust path if needed
import { ShoppingCart, Handshake, Package, TrendingUp, ShieldCheck, Users, Star } from "lucide-react";

// Hero background styling
const HeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/6 top-1/6 w-[48rem] h-[48rem] bg-orange-700 rounded-full blur-3xl opacity-40 animate-lightMove1 grainy" />
    <div className="absolute right-1/6 top-1/3 w-[48rem] h-[48rem] bg-blue-500 rounded-full blur-3xl opacity-30 animate-lightMove2 grainy" />
    <div className="absolute left-1/2 bottom-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-lightMove3 grainy" />
  </div>
);

const coreValues = [
  {
    title: "Customer First, Always",
    desc: "Our customers are at the heart of everything we do. We listen, adapt, and deliver products that meet your business needs seamlessly.",
    icon: ShoppingCart
  },
  {
    title: "Trust & Transparency",
    desc: "We believe in honest pricing, clear processes, and building long-term trust with every partner we serve.",
    icon: ShieldCheck
  },
  {
    title: "Impact Every Day",
    desc: "Every delivery, every order matters. We work to simplify your supply chain and make your business more efficient daily.",
    icon: Package
  },
  {
    title: "Think Beyond the Basket",
    desc: "We don’t just deliver products — we innovate to provide smarter solutions that help your business grow.",
    icon: TrendingUp
  },
  {
    title: "Do the Right Thing",
    desc: "Fair trade, ethical sourcing, and consistent quality are our non-negotiables — because your business deserves the best.",
    icon: Handshake
  },
  {
    title: "Together We Grow",
    desc: "Partnership drives progress. By uniting retailers, suppliers, and technology, we build a stronger ecosystem for all.",
    icon: Users
  }
];

function Overview() {
  return (
    <div>
      {/* Hero-style Header Section */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
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
        <div className="relative z-10 text-center px-4">
          {/* Breadcrumb */}
          <nav className="mb-4 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="font-semibold text-blue-200">Contact</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Overview
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl mx-auto">
             Our approach is grounded in a deep understanding of the B2B grocery ecosystem. We work closely with retailers, distributors, and suppliers to identify operational challenges and growth opportunities.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Core Values</h2>
          <p className="text-gray-700 mb-6">
            We break down barriers so teams can focus on what matters – providing trusted products their customers value.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-6">
              {coreValues.slice(0, 3).map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <value.icon className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-800">{value.title}</div>
                    <div className="text-gray-600 text-sm">{value.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {coreValues.slice(3).map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <value.icon className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-800">{value.title}</div>
                    <div className="text-gray-600 text-sm">{value.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl shadow border flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2">
            <img
              src="/images/approach.png"
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed md:leading-loose">
              Our approach is grounded in a deep understanding of the B2B FMCG ecosystem. We work closely with retailers, distributors, and suppliers to identify operational challenges and growth opportunities. Leveraging advanced technology, data-driven insights, and a robust logistics network, we deliver scalable solutions that streamline procurement, ensure supply reliability, and enhance efficiency. With a commitment to transparency, collaboration, and innovation, we empower businesses to build stronger supply chains and achieve sustainable growth.
            </p>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                Contact Us
              </a>
              <a
                href="/support"
                className="text-blue-700 px-5 py-2 rounded-lg font-semibold hover:underline transition"
              >
                Support Center &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview;
