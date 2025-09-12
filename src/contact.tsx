import React from 'react';
import ContactForm from './components/ContactForm';

// Replace with your actual banner image path
const bannerImage = '/images/contact-banner.jpg';

function Contact() {
  return (
    <div>
      {/* Banner Section with Hero Background */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Animated Moving Lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/6 top-1/6 w-[48rem] h-[48rem] bg-orange-700 rounded-full blur-3xl opacity-40 animate-lightMove1 grainy" />
          <div className="absolute right-1/6 top-1/3 w-[48rem] h-[48rem] bg-blue-500 rounded-full blur-3xl opacity-30 animate-lightMove2 grainy" />
          <div className="absolute left-1/2 bottom-1/4 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-lightMove3 grainy" />
        </div>
        {/* Banner Image */}
        <img
          src={bannerImage}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2236] via-[#42281a] to-[#1a2236] opacity-70"></div>
        {/* Breadcrumb and Title */}
        <div className="relative z-10 text-center w-full">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Contact Us</h1>
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