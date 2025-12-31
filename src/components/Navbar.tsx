import { useState, useEffect } from 'react';
import { Hotel, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Rooms', page: 'rooms' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <Hotel className="h-8 w-8 text-amber-600" strokeWidth={1.5} />
            <span className="text-2xl font-serif font-semibold text-gray-900">
              Comfern Hotel
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === link.page
                    ? 'text-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('rooms')}
              className="bg-amber-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors duration-200"
            >
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === link.page
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('rooms');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full bg-amber-600 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-amber-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
