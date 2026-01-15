
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide uppercase text-yellow-400">Trusted Since 1988</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight uppercase tracking-tighter">
              Sunshine Coast <span className="text-yellow-400">Experts.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
              Over 35 years of industry know-how addressing your electrical concerns quickly and safely. 
              <span className="block mt-2 text-white font-bold">Free Quotes & On-Site Inspections.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl hover:shadow-yellow-400/20 text-center uppercase tracking-widest"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:0411790549" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>Call 0411 790 549</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Floating Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-4 gap-8">
            <div className="flex flex-col border-r border-white/10">
              <span className="text-yellow-400 text-3xl font-black">35+</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Years Experience</span>
            </div>
            <div className="flex flex-col border-r border-white/10">
              <span className="text-yellow-400 text-3xl font-black">24/7</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Emergency Service</span>
            </div>
            <div className="flex flex-col border-r border-white/10">
              <span className="text-yellow-400 text-3xl font-black">FREE</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">On-Site Quotes</span>
            </div>
            <div className="flex flex-col">
              <span className="text-yellow-400 text-3xl font-black">Local</span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Caloundra Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solving All Electrical Issues Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-2">Industry Know-How</h2>
              <h3 className="text-4xl font-extrabold text-black mb-6 uppercase tracking-tight">Solving All Your Electrical Issues</h3>
              <p className="text-slate-900 text-lg leading-relaxed mb-6">
                Electricity plays a big role in keeping your home running smoothly. When something goes wrong or you don't have the lights or outlets you need, you want an experienced electrician to help solve the problems.
              </p>
              <p className="text-slate-900 text-lg leading-relaxed mb-8">
                At Pat Murphy Electrical, we have decades of industry know-how so that we can address any of your concerns quickly. From minor repairs to complex industrial maintenance, we have the tools and expertise to handle it all.
              </p>
              <Link to="/about" className="text-yellow-600 font-bold hover:text-yellow-700 underline decoration-2 underline-offset-4 uppercase tracking-widest text-sm">Learn about our history &raquo;</Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-black text-white p-8 rounded-2xl shadow-sm">
                <div className="text-yellow-400 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">Fast Response</h4>
                <p className="text-slate-400 text-sm">We address concerns quickly to restore your power and peace of mind.</p>
              </div>
              <div className="bg-yellow-400 text-black p-8 rounded-2xl shadow-sm mt-8">
                <div className="text-black mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.48V12.5"/></svg>
                </div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">Safety Experts</h4>
                <p className="text-black/70 text-sm font-medium">Rigorous testing and verification for every installation we perform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-black mb-6 uppercase tracking-tight">Our High-Quality Services</h3>
            <p className="max-w-2xl mx-auto text-slate-700 leading-relaxed font-medium">
              No matter if you need a stove or hot water repair or you want to add LED lighting to your home, our electricians can help. 
              We easily meet your needs in no time at all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Residential', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { title: 'Commercial', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { title: 'Industrial', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
            ].map((item, idx) => (
              <Link to="/services" key={idx} className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-yellow-400 hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-black rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  <svg className="w-8 h-8 text-yellow-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-2xl font-extrabold mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-600 mb-6 font-medium">Comprehensive {item.title.toLowerCase()} repairs, maintenance, and new installations.</p>
                <span className="text-yellow-600 font-black flex items-center space-x-2 uppercase text-sm tracking-widest">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 flex flex-wrap pointer-events-none">
          {Array.from({length: 20}).map((_, i) => (
            <svg key={i} className="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Schedule Your Service Today</h2>
          <p className="text-yellow-400 text-xl mb-10 font-black bg-white/5 inline-block px-8 py-3 rounded-full uppercase tracking-widest">
            FREE ON-SITE INSPECTIONS AND QUOTES
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-yellow-400 text-black px-12 py-5 rounded-xl font-black text-xl hover:bg-yellow-500 transition-all shadow-xl uppercase tracking-widest">
              Get My Free Quote
            </Link>
            <a href="tel:0411790549" className="bg-white text-black px-12 py-5 rounded-xl font-black text-xl hover:bg-slate-100 transition-all shadow-xl uppercase tracking-widest">
              Call 0411 790 549
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
