import React from 'react';
import { CheckCircle, Zap, Shield, Users } from 'lucide-react';

const ImageTextSection: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together with your team in real-time'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 shadow-2xl">
              {/* Phone Mockup */}
              <div className="bg-gray-900 rounded-[2.5rem] p-4 mx-auto w-64 shadow-xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 relative">
                    {/* App Interface Mockup */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-8 h-8 bg-primary-500 rounded-lg" />
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full" />
                          <div className="w-6 h-6 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full" />
                            <div>
                              <div className="h-3 bg-gray-300 rounded w-20 mb-1" />
                              <div className="h-2 bg-gray-200 rounded w-16" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full" />
                            <div>
                              <div className="h-3 bg-gray-300 rounded w-24 mb-1" />
                              <div className="h-2 bg-gray-200 rounded w-20" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-500 rounded-full" />
                            <div>
                              <div className="h-3 bg-gray-300 rounded w-18 mb-1" />
                              <div className="h-2 bg-gray-200 rounded w-14" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Why Choose Our App
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Built for Modern
                <span className="text-primary-600"> Professionals</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our application combines cutting-edge technology with intuitive design to deliver 
                an unparalleled user experience. Whether you're managing projects, collaborating 
                with teams, or tracking progress, we've got you covered.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center">
              Learn More About Features
              <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
