
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative flex items-center justify-center overflow-hidden rounded-full border border-black bg-yellow-400 shadow-sm`}>
    <svg className="w-4/5 h-4/5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20,8c0-2.2-1.8-4-4-4c-1.5,0-2.8,0.8-3.5,2.1C12.3,5.4,12,5,11.5,4.7C11,4.4,10.3,4.3,9.7,4.6C8.8,5,8.4,6.2,8.8,7.3 c0.1,0.3,0.3,0.6,0.5,0.8L8.1,10.6C8,10.8,7.8,11,7.5,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.5c0.3,0,0.5,0.2,0.6,0.4l0.7,1.4 c0.3,0.5,0.8,0.8,1.4,0.8h1.4l0.8,2.3c0.2,0.5,0.7,0.8,1.2,0.8h2c0.7,0,1.2-0.5,1.2-1.2l-0.2-1.5l1.6-1.6c0.3-0.3,0.5-0.7,0.5-1.1 l0-1l2.5-1.5C19.7,10.4,20,9.3,20,8z" 
        fill="white" 
      />
      <path 
        d="M13,8.5l-2.5,3.5h1.5l-1,3l3-4h-1.5l1-2.5" 
        fill="black" 
      />
    </svg>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-16 pb-8 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
              <span className="text-xl font-black text-white uppercase tracking-tighter leading-tight">Pat Murphy Electrical</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Locally owned and operated in Caloundra since 1988. Delivering high-quality electrical solutions to the Sunshine Coast for over 35 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-black text-xs mb-6 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-sm font-black uppercase tracking-widest">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-yellow-500">Free Quote</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-yellow-400 font-black text-xs mb-6 uppercase tracking-widest">Business Hours</h3>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">8:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sat - Sun</span>
                <span className="text-slate-600">Closed</span>
              </li>
              <li className="pt-2">
                <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">24/7 Emergency Line Open</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-yellow-400 font-black text-xs mb-6 uppercase tracking-widest">Contact Info</h3>
            <ul className="space-y-5 text-sm font-bold">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="uppercase text-xs tracking-widest">Little Mountain, QLD 4551</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <div className="flex flex-col">
                  <a href="tel:0411790549" className="hover:text-white transition-colors text-white font-black text-lg">0411 790 549</a>
                  <a href="tel:0754915986" className="hover:text-white transition-colors text-xs opacity-50 uppercase tracking-widest">(07) 5491 5986</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:patmurphy@people.net.au" className="hover:text-white transition-colors text-xs font-black uppercase tracking-widest">patmurphy@people.net.au</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-center">
          <p>&copy; {new Date().getFullYear()} Pat Murphy Electrical. All rights reserved. Sunshine Coast's Reliable Sparky Since 1988.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
