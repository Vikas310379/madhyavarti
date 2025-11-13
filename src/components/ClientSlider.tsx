import React from 'react';

const ClientSlider: React.FC = () => {
  const clients = [
    { name: 'Adani', logo: '/logos/Adani.jpg' },
    { name: 'Ajanta', logo: '/logos/Ajanta.jpg' },
    { name: 'Amul', logo: '/logos/Amul.jpg' },
    { name: 'AWL', logo: '/logos/Awl.jpg' },
    { name: 'Bikaji', logo: '/logos/Bikaji.jpg' },
    { name: 'Bikano', logo: '/logos/Bikano.jpg' },
    { name: 'Cargill', logo: '/logos/Cargill.jpg' },
    { name: 'Catch', logo: '/logos/Catch.jpg' },
    { name: 'Cremica', logo: '/logos/Cremica.jpg' },
    { name: 'Daawat', logo: '/logos/Daawat.jpg' },
    { name: 'Dabar', logo: '/logos/dabar.jpg' },
    { name: 'Delmonte', logo: '/logos/Delmonte.jpg' },
    { name: 'Dr. Oetker', logo: '/logos/Dr. Oetker.jpg' },
    { name: 'Emami (Best choice)', logo: '/logos/Emami (Best choice).jpg' },
    

  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          
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
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 object-contain"
                  />
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
