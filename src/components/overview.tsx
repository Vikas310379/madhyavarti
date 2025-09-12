import React from 'react';
import Navbar from '../components/Navbar'; // adjust path if needed
import Footer from '../components/Footer'; // adjust path if needed
import WhatsAppButton from '../components/WhatsAppButton';

// Hero background styling from Hero.tsx
const HeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/6 top-1/6 w-[48rem] h-[48rem] bg-orange-700 rounded-full blur-3xl opacity-40 animate-lightMove1 grainy" />
    <div className="absolute right-1/6 top-1/3 w-[48rem] h-[48rem] bg-blue-500 rounded-full blur-3xl opacity-30 animate-lightMove2 grainy" />
    <div className="absolute left-1/2 bottom-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-lightMove3 grainy" />
  </div>
);

const coreValues = [
  {
    title: "Customers First",
    desc: "Putting customers first is our mantra. We prioritise your needs, delivering tailored IT solutions with a smile."
  },
  {
    title: "Act With Integrity",
    desc: "Integrity is the heart of our operations. We uphold the highest ethical standards, ensuring trust in every IT endeavour."
  },
  {
    title: "Make a Difference Every Day",
    desc: "Every day, we're dedicated to making a positive impact. Our IT solutions drive meaningful change in your business."
  },
  {
    title: "Think Big",
    desc: "We embrace bold ideas and foster innovation, thinking big to create IT solutions that propel your business forward."
  },
  {
    title: "Do the right thing",
    desc: "Doing right is our commitment. We make ethical choices, always prioritising what's best for our clients and their IT needs."
  },
  {
    title: "Stronger united",
    desc: "Together, we're stronger. We unite expertise, teamwork, and technology to fortify your IT infrastructure for lasting success."
  }
];

function Overview() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner with background and breadcrumbs */}
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
              <li className="font-semibold text-blue-200">Overview</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Company Overview</h1>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Core values</h2>
          <p className="text-gray-700 mb-6">
            We break down barriers so teams can focus on what matters – working together to create products their customers love.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-6">
              {coreValues.slice(0, 3).map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
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
                  <span className="text-blue-600 text-2xl">✓</span>
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
              src="/images/approach.jpg"
              alt="Our Approach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-6">
              Our approach is rooted in a client-centric philosophy. We begin by thoroughly understanding your unique business needs and objectives. Then, we tailor comprehensive solutions, harnessing the latest technologies, to empower your success. We believe in transparency, collaboration, and adaptability to ensure your digital journey is exceptional.
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

      {/* Footer */}
      <Footer />
      
       {/* WhatsAppButton */}
      <WhatsAppButton />
    </div>
   );
 
}

export default Overview;
