import React from 'react';

const ClientSlider: React.FC = () => {
  // Mock client logos - in real implementation, these would be actual logo images
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateIO', logo: 'IO' },
    { name: 'FutureWorks', logo: 'FW' },
    { name: 'DataSync', logo: 'DS' },
    { name: 'CloudBase', logo: 'CB' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'SmartSoft', logo: 'SS' },
    { name: 'ProTech', logo: 'PT' },
    { name: 'DigitalFlow', logo: 'DF' },
    { name: 'AppMaster', logo: 'AM' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of companies that rely on our platform for their success
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Sliding Container */}
          <div className="flex animate-slide">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 group cursor-pointer"
                style={{ minWidth: '120px' }}
              >
                <div className="bg-gray-50 rounded-xl p-6 h-20 flex items-center justify-center group-hover:bg-primary-50 group-hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100">
                  {/* Logo Placeholder */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-1 group-hover:from-primary-500 group-hover:to-primary-700 transition-all duration-300">
                      {client.logo}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "This app has revolutionized how our team collaborates. The intuitive interface 
              and powerful features have increased our productivity by 40% in just three months."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">John Smith</div>
                <div className="text-gray-600 text-sm">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
