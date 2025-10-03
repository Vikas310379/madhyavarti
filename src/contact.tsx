import React from 'react';
import ContactForm from './components/ContactForm';
import { Star } from 'lucide-react';

function Contact() {
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
            Contact Us
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl mx-auto">
            Get in touch with us for inquiries, support, or partnership opportunities. 
            We’re here to help grocery and FMCG businesses grow smarter with Madhyavarti.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <div className="py-12 px-4 bg-gray-50 min-h-[60vh] flex justify-center items-start">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
