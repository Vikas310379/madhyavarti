import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Users, ShoppingCart, Package, ShieldCheck, Handshake, Phone, Globe, DollarSign } from 'lucide-react';
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
  answer: string | React.ReactNode;
}

const faqCategories: { title: string; icon: React.ReactNode; items: FAQItem[] }[] = [
  {
    title: 'Platform & Services',
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'Who can benefit from this platform?',
        answer: 'Retailers, Wholesalers, Distributors, Millers, Traders, FMCG businesses, Hotels & Restaurants, Caterers, and Tuck Shops/Canteens.'
      },
      {
        question: 'What services do you provide?',
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <li>Save time and make smarter decisions with reliable insights.</li>
            <li>Get accurate information from major markets and mandis.</li>
            <li>Build direct networks with leading brands.</li>
            <li>Connect with distributors and wholesalers directly.</li>
            <li>Stay updated with the latest commodity news and business updates.</li>
            <li>Purchase grocery & FMCG products at competitive prices.</li>
          </ul>
        )
      },
      {
        question: 'How do mandi reports help my business?',
        answer: 'Mandi reports provide daily updates on prices, demand, and supply trends across different markets. This helps you plan purchases, control costs, and negotiate effectively.'
      },
      {
        question: 'How do I stay updated with commodity and mandi news?',
        answer: 'We regularly share mandi tezi (market movements), price alerts, and commodity news to keep you ahead in the business.'
      },
    ],
  },
  {
    title: 'Account & Onboarding',
    icon: <Users className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'Is there any registration fee?',
        answer: 'No, registration is free of cost.'
      },
      {
        question: 'How do I join the platform?',
        answer: 'Simply register with your business details. Provide shop details and pincode, and once verified, you’ll get access to mandi reports, supplier contacts, and product purchase options.'
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
        question: 'What payment methods are accepted?',
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <li>Bank Transfer (NEFT / RTGS / IMPS)</li>
            <li>UPI Payments</li>
            <li>Online Payment Gateway</li>
          </ul>
        )
      },
      {
        question: 'Is my payment secure?',
        answer: 'Absolutely. All transactions are processed through secure banking channels and trusted payment gateways with encryption to keep your data safe.'
      },
      {
        question: 'Do you provide credit facilities?',
        answer: 'In select cases, we may provide short-term trade credit to support business growth.'
      },
    ],
  },
  {
    title: 'Product & Quality',
    icon: <Handshake className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'What type of grocery items are available?',
        answer: (
          <ul className="list-disc list-inside space-y-2">
            <li>Grains, pulses, flours, spices, and dry fruits</li>
            <li>Packaged foods, snacks, beverages</li>
            <li>Edible oils, sugar, salt, and condiments</li>
            <li>Cleaning and household essentials</li>
          </ul>
        )
      },
      {
        question: 'What about the quality of products listed on the app?',
        answer: 'All products on our platform are sourced from verified millers, distributors, and wholesalers. We ensure that only genuine, high-quality grocery and FMCG items are listed. Additionally, all items comply with FSSAI rules and regulations, so you can trade with complete confidence.'
      },
      {
        question: 'Can I buy in small quantities?',
        answer: 'Our platform is B2B and bulk-focused. The minimum order value is ₹3,000, ensuring wholesale pricing and better margins for businesses.'
      },
      {
        question: 'Do you provide contact details of suppliers?',
        answer: 'Yes. You get direct access to millers, distributors, and wholesalers, ensuring trustworthy and profitable business connections.'
      },
      {
        question: 'Do you provide assistance in choosing the right products?',
        answer: 'Yes. Our team shares recommendations based on demand trends, mandi prices, and product availability to help you make better purchase decisions.'
      },
    ],
  },
  {
    title: 'Logistics & Support',
    icon: <Package className="w-5 h-5 text-blue-600" />,
    items: [
      {
        question: 'What is the delivery time?',
        answer: 'Delivery is usually completed within 2–3 working days after order confirmation.'
      },
      {
        question: 'Is self-lifting available?',
        answer: 'Yes, self-lifting is available without any additional delivery charges.'
      },
      {
        question: 'Is there customer support available in local languages?',
        answer: 'Yes. Our support team can assist in regional languages to make your experience easier and more comfortable.'
      },
      {
        question: 'How can I contact customer support?',
        answer: 'You can reach us via 📞 Phone, 📧 Email, or 💬 WhatsApp/Chat support. Our team is ready to assist with registration, orders, mandi reports, and supplier connections.'
      },
    ],
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('');
  
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Create an observer to track which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold to determine when to highlight
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to create a URL-friendly slug from the title
  const toSlug = (title: string) => title.toLowerCase().replace(/\s/g, '-').replace(/&/g, 'and');
  
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

      {/* Main content layout with side menu */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Side Menu (Sticky on Desktop) */}
        <aside className="hidden lg:block lg:w-1/4 sticky top-28 h-fit self-start p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-4">CATEGORIES</h3>
          <nav className="flex flex-col space-y-2">
            {faqCategories.map((category) => {
              const slug = toSlug(category.title);
              return (
                <a
                  key={slug}
                  href={`#${slug}`}
                  className={`
                    flex items-center gap-2 p-2 rounded-lg text-gray-600 transition-colors
                    hover:bg-gray-100 hover:text-blue-600
                    ${activeCategory === slug ? 'font-bold text-blue-600 bg-gray-100' : ''}
                  `}
                >
                  {category.icon}
                  <span>{category.title}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* FAQ Content (Main Column) */}
        <div className="w-full lg:w-3/4 **scroll-smooth**">
          <div>
            {faqCategories.map((category, catIdx) => {
              const slug = toSlug(category.title);
              return (
                <div 
                  key={catIdx} 
                  className="mb-8"
                  ref={el => {sectionRefs.current[catIdx] = el;}}
                  id={slug}
                >
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
              );
            })}
          </div>
        </div>
      </div>

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