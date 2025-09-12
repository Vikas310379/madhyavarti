import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const whatsappNumber = "+919813411633"; // Replace with actual WhatsApp number
  const defaultMessage = "Hi! I'm interested in learning more about your app.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {isTooltipVisible && (
          <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <div className="text-sm font-medium">Need help? Chat with us!</div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping group-hover:animate-none"></div>
        </button>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
          1
        </div>
      </div>

      {/* Alternative Chat Widget */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-white rounded-lg shadow-xl p-4 max-w-sm opacity-0 hover:opacity-100 transition-all duration-300 pointer-events-none hover:pointer-events-auto">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
              CS
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-lg p-3 mb-2">
                <p className="text-sm text-gray-800">
                  👋 Hi there! How can we help you today?
                </p>
              </div>
              <div className="text-xs text-gray-500">
                Customer Support • Usually replies in a few minutes
              </div>
            </div>
            <button 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setIsTooltipVisible(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
