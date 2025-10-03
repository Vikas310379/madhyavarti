import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-200 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-pink-200 rounded-full opacity-15 blur-3xl pointer-events-none"></div>

      <div className="relative w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
          Madhyavarti-A Unified Platform for Grocery and FMCG Businesses
        </h2>

        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed md:leading-loose">
          In today’s competitive marketplace, grocery and FMCG (Fast-Moving Consumer Goods) 
          businesses need more than just traditional supply chains — they need 
          <strong> transparency, real-time insights, and trusted connections</strong>. 
          At <strong>Madhyavarti</strong>, we provide a unified digital platform that empowers 
          millers, distributors, wholesalers, and retailers to grow and stay competitive.
        </p>

        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed md:leading-loose">
          Our platform connects all stakeholders in the grocery and FMCG sector, creating a seamless 
          ecosystem where trade becomes easier, faster, and more efficient. By bringing millers, 
          distributors, and wholesalers together, we eliminate unnecessary middle layers, reduce costs, 
          and enable smarter business decisions backed by reliable data.
        </p>

        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed md:leading-loose">
          One of our key features is <strong>access to mandi reports and real-time market prices</strong>, 
          ensuring vendors of every size stay updated with the latest commodity trends. 
          Whether tracking groceries, agricultural produce, or FMCG products, our app provides 
          accurate and timely insights that help businesses negotiate better deals and stay ahead.
        </p>

        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed md:leading-loose">
          We also offer <strong>direct procurement at mandi-equivalent prices</strong>, giving vendors 
          independence, profitability, and trust in every transaction. With a free, user-friendly mobile 
          application, even small vendors gain access to market trends, pricing, and procurement opportunities.
        </p>

        <p className="text-gray-900 font-semibold text-sm md:text-base leading-relaxed md:leading-loose">
          At Madhyavarti, we bridge the gap between businesses and opportunities, ensuring 
          <strong> information, efficiency, and growth for everyone</strong>.
        </p>

        {/* Bottom Divider */}
        <hr className="mt-12 border-gray-300" />
      </div>
    </section>
  );
};

export default Intro;
