
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Residential',
      description: 'Your home is your sanctuary. We ensure your family is safe with modern electrical solutions and fast repairs.',
      services: [
        'Complete Home Rewiring',
        'Stove & Hot Water Repairs',
        'Kitchen & Bathroom Renovations',
        'Smoke Alarm Installation & Testing',
        'Safety Switch (RCD) Upgrades',
        'Ceiling Fan Installation',
        'LED Lighting & Automation',
        'New Home Electrical Design'
      ],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Commercial',
      description: 'Business continuity depends on reliable power. We provide proactive maintenance for Sunshine Coast firms.',
      services: [
        'Office & Retail Fit-outs',
        'Exit & Emergency Lighting',
        'Real Estate Maintenance Services',
        'Body Corporate Contracts',
        'Carpark & Security Lighting',
        'Test & Tag Compliance',
        'Scheduled Maintenance Audits',
        'Resort Maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Industrial',
      description: 'Heavy duty solutions for heavy duty operations. Expert fault finding and machinery maintenance.',
      services: [
        '3-Phase Power Distribution',
        'Pump & Electric Motors',
        'Industrial Building Maintenance',
        'Fault Locations & Repairs',
        'Medical Equipment Power',
        'Sports Floodlighting',
        'Underground Cabling',
        'Design and Construct'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const fullList = [
    "3 phase power", "Additions", "After-hours services", "Alterations", "Body corporate", "Carparks", 
    "Ceiling fans", "Design and construct", "Electrical testing and verification", "Energex tariff metering",
    "Energy-efficient solutions", "Exit and emergency lighting", "Fault locations and repairs", 
    "Industrial buildings and maintenance", "LED lighting", "Lighting", "Medical equipment", 
    "Money-saving solutions", "Motion detectors", "New homes", "New kitchens", "New switchboards", 
    "Offices", "Pump and electric motors", "Real estate maintenance services", "Renovations", 
    "Resort maintenance", "Retail", "Rewires", "Safety switches", "Security lighting", "Smoke alarms", 
    "Sports floodlighting", "Stove and hot water repairs", "Underground cabling", "Workplace test and tag"
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-black py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">High-Quality Services</h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg font-medium leading-relaxed">
            We provide a full range of electrical services for residential, commercial and industrial properties across the Sunshine Coast. 
            <span className="block mt-4 text-yellow-400 font-black uppercase tracking-widest">ON-SITE INSPECTIONS AND FREE QUOTES.</span>
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-24 space-y-32">
        {serviceCategories.map((cat, idx) => (
          <div key={cat.title} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <h2 className="text-yellow-600 font-black uppercase tracking-widest text-sm mb-4">Sunshine Coast Specialists</h2>
                <h3 className="text-4xl font-extrabold text-black mb-6 uppercase tracking-tight">{cat.title} Expertise</h3>
                <p className="text-slate-900 text-lg mb-10 leading-relaxed font-medium">{cat.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {cat.services.map(s => (
                    <div key={s} className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <span className="font-bold text-black uppercase text-xs tracking-wider">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg"
                  >
                    <span>Request Quote</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-yellow-400 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform"></div>
                  <img src={cat.image} alt={cat.title} className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] border-2 border-black" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Comprehensive List Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-yellow-400 mb-4 uppercase tracking-tighter">Full Capability Checklist</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Every job handled with 35+ years of experience.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fullList.map((service, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                <span className="text-xs font-black uppercase tracking-widest text-slate-100">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-black mb-8 uppercase tracking-tighter">Ready to Schedule?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-black text-white px-12 py-5 rounded-xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl uppercase tracking-widest">
              Start My Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
