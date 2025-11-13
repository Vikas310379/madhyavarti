import React from 'react';
import { Download, UserPlus, Compass, ArrowRight } from 'lucide-react';

const FeatureTiles: React.FC = () => {
  const features = [
    {
      icon: Download,
      title: 'Download App',
      description: 'Get our app from App Store or Google Play. Quick setup, instant access to all features.',
      gradient: 'from-blue-500 to-blue-700',
      hoverGradient: 'hover:from-blue-600 hover:to-blue-800',
      cta: 'Download Now'
    },
    {
      icon: UserPlus,
      title: 'Register in App',
      description: 'Sign in using your mobile number. Then enter your details to personalize your experience.',
      gradient: 'from-green-500 to-green-700',
      hoverGradient: 'hover:from-green-600 hover:to-green-800',
      cta: 'Sign Up Today'
    },
    {
      icon: Compass,
      title: 'Explore All Features',
      description: 'Discover powerful tools designed to simplify your grocery and FMCG operations.',
      gradient: 'from-purple-500 to-purple-700',
      hoverGradient: 'hover:from-purple-600 hover:to-purple-800',
      cta: 'Explore Features'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of users who have transformed their workflow with our innovative mobile application
          </p>
        </div>

        {/* Feature Tiles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-8 h-8 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA Button */}
                <button className={`group/btn w-full bg-gradient-to-r ${feature.gradient} ${feature.hoverGradient} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center`}>
                  {feature.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to get started? It only takes a few minutes!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Try Free Demo
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
