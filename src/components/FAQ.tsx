import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Users, ShoppingCart, Package, ShieldCheck, Handshake } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const HeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/6 top-1/6 w-[48rem] h-[48rem] bg-orange-700 rounded-full blur-3xl opacity-40 animate-lightMove1 grainy" />
    <div className="absolute right-1/6 top-1/3 w-[48rem] h-[48rem] bg-blue-500 rounded-full blur-3xl opacity-30 animate-lightMove2 grainy" />
    <div className="absolute left-1/2 bottom-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-lightMove3 grainy" />
  </div>
);

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

const faqCategories: { title: string; icon: React.ReactNode; items: FAQItem[] }[] = [
  {
    title: 'Account & Registration',
    icon: <Users className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'How do I create a new account?',
        answer: 'Click on the Sign Up button, fill in your business details, and verify your email.'
      },
      {
        question: 'Can I have multiple users per account?',
        answer: 'Yes, you can add multiple team members with varying permissions.'
      },
    ],
  },
  {
    title: 'Ordering & Payments',
    icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'How do I place an order?',
        answer: 'Browse products, add them to your cart, and complete checkout with your preferred payment method.'
      },
      {
        question: 'What payment options are available?',
        answer: 'We support net banking, credit/debit cards, UPI, and corporate invoicing for B2B partners.'
      },
    ],
  },
  {
    title: 'Delivery & Logistics',
    icon: <Package className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'What is the delivery time?',
        answer: 'Orders are processed within 24 hours and delivered within 2-4 business days depending on location.'
      },
      {
        question: 'Can I track my delivery?',
        answer: 'Yes, tracking links are shared via email and your dashboard.'
      },
    ],
  },
  {
    title: 'Trust & Support',
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'How do I reach support?',
        answer: 'Use our Contact Us page, WhatsApp button, or call the support number provided in your dashboard.'
      },
      {
        question: 'What if there is an issue with my order?',
        answer: 'Report the issue, and our support team will resolve it within 24-48 hours.'
      },
    ],
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero / Breadcrumb */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center bg-gray-900 overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2236] via-[#42281a] to-[#1a2236] opacity-70"></div>
        <div className="relative z-10 text-center w-full">
          <nav className="mb-4 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><span className="mx-2">/</span></li>
              <li className="font-semibold text-blue-200">FAQ</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Frequently Asked Questions</h1>
          <p className="text-gray-200 mt-2">Answers to the most common queries about our Madhyavarti grocery platform.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {faqCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              {category.icon} {category.title}
            </h2>
            <div className="space-y-2">
              {category.items.map((item, idx) => {
                const index = catIdx * 10 + idx; // unique index
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-4 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
                    >
                      <span className="font-medium">{item.question}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-blue-600" />}
                    </button>
                    {/* 👇 The fixed code for the answer panel */}
                    <div
                      className={`
                        text-gray-700 transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-96 py-3 px-4' : 'max-h-0'}
                      `}
                    >
                      {item.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
        <p className="mb-4">Contact our support team or start a chat via WhatsApp.</p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default FAQPage;