import React from 'react';
import { Smartphone, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@madhyavartithebroker_08' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Section 1: Company Info */}
          <div>
            <div className="flex items-center space-x-1">
          <div className="p-2 rounded-lg">
          <img src="/images/madhyavarti.png" alt="Custom icon" className="h-10 w-10 text-white" />
          </div>
              <span className="text-xl font-bold">Madhyavarti</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A unified platform for grocery and FMCG businesses, 
              connecting millers, distributors, and wholesalers, 
              with access to mandi reports, 
              market prices, commodity insights, and direct procurement.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>hello@madhyavarti.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+91 9211301229</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>Gurgaon - 122004, Haryana</span>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {quickLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                {quickLinks.slice(3).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            <h4 className="text-md font-semibold mt-8 mb-4">Legal</h4>
            <div className="space-y-3">
              {legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Section 3: Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and get the latest updates about new features, 
              product releases, and exclusive offers delivered right to your inbox.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                <button className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-md font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-gray-800 p-3 rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Madhyavarti. All rights reserved. Built with ❤️ for innovation.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>Made with React & Tailwind CSS</span>
            <span>•</span>
            <span>Version 2.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
