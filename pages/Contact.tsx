
import React, { useState } from 'react';
import { QuoteFormData, GeminiResponse } from '../types';
import { analyzeQuoteRequest } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'Residential',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<GeminiResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Map external form field names back to internal state
    let stateKey = name;
    if (name === 'full name') stateKey = 'name';
    if (name === 'service required') stateKey = 'serviceType';
    if (name === 'message') stateKey = 'description';

    setFormData(prev => ({ ...prev, [stateKey]: value }));
  };

  const handleAiAnalyze = async () => {
    if (!formData.description || formData.description.length < 10) return;
    setIsAnalyzing(true);
    try {
      const result = await analyzeQuoteRequest(formData);
      setAiAnalysis(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mojjvnel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "full name": formData.name,
          "email": formData.email,
          "phone": formData.phone,
          "address": formData.address,
          "service required": formData.serviceType,
          "message": formData.description,
          "ai_summary": aiAnalysis ? aiAnalysis.summary : "Not requested",
          "ai_urgency": aiAnalysis ? aiAnalysis.estimatedUrgency : "N/A",
          "ai_recommendation": aiAnalysis ? aiAnalysis.recommendation : "N/A"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: 'Residential',
          description: ''
        });
        setAiAnalysis(null);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      alert("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-black py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Get in Touch</h1>
          <p className="text-yellow-400 font-black tracking-widest uppercase">FREE QUOTES & ON-SITE INSPECTIONS</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Details Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-black mb-10 uppercase tracking-tighter">Office Info</h2>
                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-yellow-400 shadow-xl">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-500 uppercase text-xs tracking-widest mb-1">Direct Lines</h4>
                      <p className="text-2xl font-black text-black uppercase tracking-tight">0411 790 549</p>
                      <p className="text-slate-900 font-bold">(07) 5491 5986</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-yellow-400 shadow-xl">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-500 uppercase text-xs tracking-widest mb-1">Business Hours</h4>
                      <p className="text-lg font-black text-black uppercase">Mon - Fri: 8am - 5pm</p>
                      <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Weekends: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-yellow-400 shadow-xl">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-500 uppercase text-xs tracking-widest mb-1">Address</h4>
                      <p className="text-lg font-black text-black uppercase">Little Mountain, QLD 4551</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-400 rounded-3xl p-10 text-black shadow-2xl relative overflow-hidden group border-4 border-black">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">24/7 Emergency</h3>
                <p className="mb-10 font-bold leading-relaxed text-lg">Electrical emergency? Our rapid response team is on call 24 hours a day to keep your family and business safe.</p>
                <a href="tel:0411790549" className="inline-block bg-black text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-900 transition-colors shadow-lg uppercase tracking-widest">Call Now</a>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-black overflow-hidden">
              <div className="bg-black p-8 flex items-center justify-between">
                <span className="text-white font-black uppercase tracking-widest">Free Quote Request</span>
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase">AI Check</span>
              </div>

              {isSuccess ? (
                <div className="p-12 text-center animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-black">
                    <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Request Sent</h2>
                  <p className="text-slate-900 mb-10 font-bold text-lg leading-relaxed">Thanks for reaching out. We will contact you shortly to arrange your free inspection.</p>
                  <button onClick={() => setIsSuccess(false)} className="bg-black text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest">New Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} method="POST" className="p-10 space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Your Name</label>
                      <input type="text" required name="full name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:border-yellow-400 outline-none transition-all font-bold" placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Phone</label>
                      <input type="tel" required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:border-yellow-400 outline-none transition-all font-bold" placeholder="Mobile preferred" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Email</label>
                      <input type="email" required name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:border-yellow-400 outline-none transition-all font-bold" placeholder="Email address" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Property Type</label>
                      <select name="service required" value={formData.serviceType} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:border-yellow-400 outline-none transition-all font-black uppercase tracking-widest text-sm">
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Other / Emergency">Other / Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Site Address</label>
                    <input type="text" required name="address" value={formData.address} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:border-yellow-400 outline-none transition-all font-bold" placeholder="Where is the work located?" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Work Required</label>
                      <button type="button" onClick={handleAiAnalyze} disabled={isAnalyzing || formData.description.length < 10} className="text-[10px] font-black text-yellow-600 hover:text-yellow-700 disabled:opacity-30 flex items-center space-x-1 uppercase tracking-widest">
                        <svg className={`w-3 h-3 ${isAnalyzing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.726 2.18a2 2 0 001.177 2.455l.944.377a2 2 0 002.454-1.178l.727-2.179a2 2 0 00-1.207-2.445z" /></svg>
                        <span>{isAnalyzing ? 'Analyzing...' : 'Technical Review'}</span>
                      </button>
                    </div>
                    <textarea required name="message" value={formData.description} onChange={handleChange} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:border-yellow-400 outline-none transition-all h-40 resize-none font-bold" placeholder="Please provide details of what you need help with..."></textarea>
                  </div>

                  {aiAnalysis && (
                    <div className="p-6 bg-yellow-400 rounded-2xl border-4 border-black animate-in slide-in-from-top duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${aiAnalysis.estimatedUrgency === 'High' ? 'bg-red-600 text-white' : 'bg-black text-yellow-400'}`}>Urgency: {aiAnalysis.estimatedUrgency}</span>
                      </div>
                      <p className="text-sm text-black font-extrabold mb-3">"{aiAnalysis.summary}"</p>
                      <p className="text-[10px] text-black/70 font-black uppercase tracking-widest">Note: {aiAnalysis.recommendation}</p>
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-5 rounded-xl font-black text-xl shadow-xl hover:shadow-yellow-400/30 transition-all disabled:opacity-50 uppercase tracking-tighter border-2 border-black">
                    {isSubmitting ? 'Submitting...' : 'Send Quote Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
