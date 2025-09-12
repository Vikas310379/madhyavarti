import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Smartphone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false); // 💡 New state for mobile submenu
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSubMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Closes mobile menu and its submenu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileSubMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      submenu: [
        { name: 'Overview', href: '/overview' },
        { name: 'Our Vision', href: '/our-vision' },
      ],
    },
    { name: 'Features', href: '/features' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isAboutActive = ['/overview', '/our-vision'].includes(activePath);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Madhyavarti
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                      className={`text-sm font-medium transition-colors hover:text-primary-500 flex items-center ${
                        isAboutActive
                          ? 'text-primary-500 border-b-2 border-primary-500'
                          : isScrolled
                          ? 'text-gray-700'
                          : 'text-white/90'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          isSubMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isSubMenuOpen && (
                      <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors ${
                              activePath === subItem.href
                                ? 'text-primary-500 font-bold'
                                : ''
                            }`}
                            onClick={() => setIsSubMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                      activePath === item.href
                        ? 'text-primary-500 border-b-2 border-primary-500'
                        : isScrolled
                        ? 'text-gray-700'
                        : 'text-white/90'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <button className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-primary-600 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsMobileSubMenuOpen(false); // 💡 Reset mobile submenu state when main menu is toggled
              }}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)} // 💡 Use separate state
                      className={`w-full text-left block text-gray-700 hover:text-primary-500 font-medium transition-colors flex items-center justify-between ${
                        isAboutActive ? 'text-primary-500 font-bold' : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isMobileSubMenuOpen ? 'rotate-180' : '' // 💡 Use separate state
                        }`}
                      />
                    </button>
                    {isMobileSubMenuOpen && ( // 💡 Use separate state
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block text-gray-600 hover:text-primary-500 transition-colors ${
                              activePath === subItem.href
                                ? 'text-primary-500 font-bold'
                                : ''
                            }`}
                            onClick={closeMobileMenu} // 💡 Use a single function to close both menus
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block text-gray-700 hover:text-primary-500 font-medium transition-colors ${
                      activePath === item.href ? 'text-primary-500 font-bold' : ''
                    }`}
                    onClick={closeMobileMenu} // 💡 Use a single function to close the menu
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full font-medium hover:from-primary-600 hover:to-primary-800 transition-all duration-300 shadow-lg">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;