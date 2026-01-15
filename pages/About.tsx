
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-black py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">Our Story</h1>
          <p className="text-yellow-400 font-black tracking-widest uppercase">Sunshine Coast Electricians Since 1988</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-black uppercase">
                35+ Years in Business
              </div>
              <h2 className="text-4xl font-extrabold text-black leading-tight uppercase tracking-tight">
                Pat Murphy Electrical: A Legacy of Excellence in Caloundra.
              </h2>
              <p className="text-slate-900 text-lg leading-relaxed font-medium">
                Founded in 1988, Pat Murphy Electrical has been a cornerstone of the Sunshine Coast electrical industry for over three and a half decades. 
                What started as a small local operation in Caloundra has grown into a trusted name known for reliability and unwavering safety standards.
              </p>
              <p className="text-slate-900 text-lg leading-relaxed font-medium">
                Despite our growth, the business remains under the same original ownership. This continuity is the heartbeat of our company, 
                ensuring that every client receives the same level of care and professional integrity that defined us back in the 80s.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                <div>
                  <h4 className="text-3xl font-black text-black">1988</h4>
                  <p className="text-yellow-600 font-black text-sm uppercase tracking-widest">Established</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-black">Local</h4>
                  <p className="text-yellow-600 font-black text-sm uppercase tracking-widest">Owned & Operated</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-black">
                 <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" alt="Electrical maintenance heritage" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-8 left-8">
                   <p className="text-yellow-400 text-2xl font-black uppercase tracking-tighter">Generations of Trust.</p>
                 </div>
               </div>
               <div className="bg-black p-10 rounded-3xl text-white">
                 <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-yellow-400">Our Core Values</h3>
                 <ul className="space-y-6">
                   <li className="flex items-start space-x-4">
                     <span className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center text-black font-black text-sm">1</span>
                     <p className="text-slate-300 font-medium"><span className="text-white font-bold block uppercase text-sm tracking-wider mb-1">Honesty</span> Upfront pricing and transparent advice on every single job.</p>
                   </li>
                   <li className="flex items-start space-x-4">
                     <span className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center text-black font-black text-sm">2</span>
                     <p className="text-slate-300 font-medium"><span className="text-white font-bold block uppercase text-sm tracking-wider mb-1">Reliability</span> We respect your time. If we say we'll be there, we'll be there.</p>
                   </li>
                   <li className="flex items-start space-x-4">
                     <span className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center text-black font-black text-sm">3</span>
                     <p className="text-slate-300 font-medium"><span className="text-white font-bold block uppercase text-sm tracking-wider mb-1">Safety First</span> We never compromise on technical standards or Australian regulations.</p>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise section */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter text-black">Our Promise to the Sunshine Coast</h2>
          <blockquote className="text-2xl italic text-black font-extrabold leading-relaxed mb-8">
            "We aren't just electricians; we're part of this community. When we work in your home or business, 
            we treat it with the same respect we'd show our own. That's been the Murphy way since day one."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-2 w-16 bg-black"></div>
            <span className="font-black text-black uppercase tracking-widest text-lg">Pat Murphy, Founder & Owner</span>
            <div className="h-2 w-16 bg-black"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
