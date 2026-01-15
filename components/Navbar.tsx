
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative flex items-center justify-center overflow-hidden rounded-full border-2 border-black bg-yellow-400 shadow-md`}>
    <img src="/logo.png" alt="Pat Murphy Electrical Logo" className="w-full h-full object-cover" />
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <Logo className="w-12 h-12 transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-black tracking-tighter leading-none uppercase">Pat Murphy</span>
                <span className="text-xs font-black text-yellow-600 tracking-widest uppercase">Electrical</span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-black uppercase tracking-widest transition-colors duration-200 ${isActive(link.path)
                    ? 'text-yellow-600 border-b-2 border-yellow-400'
                    : 'text-black hover:text-yellow-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-black text-yellow-400 px-6 py-2.5 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-md active:scale-95"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-slate-100 focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-black animate-in slide-in-from-top duration-300`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-black uppercase tracking-widest ${isActive(link.path)
                  ? 'text-yellow-600 bg-yellow-50'
                  : 'text-black hover:bg-slate-50'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-black text-yellow-400 px-3 py-4 rounded-md font-black uppercase tracking-widest mt-4 shadow-sm"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
