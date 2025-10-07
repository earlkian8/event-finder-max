import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Info, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/events');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setActivePath(path);
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return activePath === path || (path !== '/' && activePath.startsWith(path));
  };

  const navItems = [
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/venues', label: 'Venues', icon: MapPin },
    { path: '/about', label: 'About', icon: Info }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-indigo-700 text-white transition-all duration-300 ${
        isScrolled ? 'shadow-xl py-3' : 'shadow-lg py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to={'/'}
              className="text-2xl font-bold hover:scale-105 transition-transform duration-200 flex items-center gap-2 focus:outline-none"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <Sparkles className="w-5 h-5 text-indigo-700" />
              </div>
              <span className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                SpotMax
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link to={path}>
                    <button
                        onClick={() => handleNavClick(path)}
                        className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                            isActive(path)
                            ? 'bg-white text-indigo-700 shadow-md'
                            : 'text-indigo-100 hover:bg-indigo-600 hover:shadow-sm'
                        }`}
                        >
                        <Icon className={`w-4 h-4 transition-transform duration-200 ${
                            isActive(path) ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-6'
                        }`} />
                        {label}
                        {!isActive(path) && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-3/4" />
                        )}
                        </button>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-indigo-600 active:bg-indigo-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-in spin-in-90 duration-200" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col space-y-2 pb-4">
              {navItems.map(({ path, label, icon: Icon }, index) => (
                        <Link
                            to={path}
                            onClick={() => handleNavClick(path)}
                            style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                isActive(path)
                                ? 'bg-white text-indigo-700 shadow-md scale-105'
                                : 'text-indigo-100 hover:bg-indigo-600 hover:translate-x-2 hover:shadow-sm active:scale-95'
                            }`}
                            >
                            <Icon className="w-5 h-5" />
                            {label}
                            {isActive(path) && (
                                <span className="ml-auto w-2 h-2 bg-indigo-700 rounded-full animate-pulse" />
                            )}
                        </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;