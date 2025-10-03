import React from 'react';
import { TrendingUp, Clock, Target, Globe, Handshake, Square, SquareCheckBig, Waypoints } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const leftBenefits = [
    {
      icon: TrendingUp,
      title: 'All Nearby Mandi Updates in One Place',
      description: 'Stay informed with real-time mandi price updates and market trends, all consolidated in a single platform. Our app ensures you never miss critical price changes, helping you make smarter buying and selling decisions.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Handshake,
      title: 'Direct Connections with Verified Partners',
      description: 'We connect you directly with trusted distributors, dealers, suppliers, and wholesalers. This eliminates unnecessary middlemen, reduces costs, and builds long-term business relationships.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  const rightBenefits = [
    {
      icon: SquareCheckBig,
      title: 'Transparent Deals at Mandi Prices',
      description: 'With Madhyavarti, you can access the same prices available in local mandis — right from your mobile. No hidden charges, no inflated costs, just fair pricing and reliable transactions at your fingertips.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Waypoints,
      title: 'End-to-End Logistics & Backend Support',
      description: 'When you make a deal through Madhyavarti, we go beyond pricing by providing logistics, delivery, and backend support. Our goal is to make your transactions seamless and hassle-free from start to finish.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const BenefitCard: React.FC<{
    icon: any;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    index: number;
  }> = ({ icon: IconComponent, title, description, color, bgColor, index }) => (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className={`${bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className={`h-8 w-8 ${color}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Decorative Number */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {index + 1}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            App Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Madhyavarti Will
            <span className="text-primary-600"> Transform Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with mandi prices, make smart deals, and manage everything easily through one powerful app.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {leftBenefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                color={benefit.color}
                bgColor={benefit.bgColor}
                index={index}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightBenefits.map((benefit, index) => (
              <BenefitCard
                key={index + 2}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                color={benefit.color}
                bgColor={benefit.bgColor}
                index={index + 2}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience These Benefits?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their workflow. 
            Start your free trial today and see the difference in just 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
