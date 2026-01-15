
import React from 'react';
import { Review } from '../types';

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Kathy Alexander',
      location: 'Sunshine Coast',
      rating: 5,
      comment: "Pat was very efficient and worked quickly through disconnecting my old kitchen appliances to replace with new ones. He was happy to add in some small electrical jobs as well. Would highly recommend for work on the coast. Kathy",
      date: '3 months ago'
    },
    {
      id: '2',
      name: 'Sea Oracle',
      location: 'Sunshine Coast',
      rating: 5,
      comment: "Pat has been looking after all of my family's electrical needs ever since we moved to The Sunshine Coast. He is honest, reliable, knowledgeable, trustworthy and always does a great job.",
      date: '5 years ago'
    },
    {
      id: '3',
      name: 'Kathryn Carlisle',
      location: 'Local Guide',
      rating: 5,
      comment: "Pat is brilliant. Timely and very accommodating. Calls the electrical problem what it is and provides the right solution. Thanks Pat.",
      date: '6 years ago'
    }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Header */}
      <section className="bg-black py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Customer Testimonials</h1>
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map(star => (
              <svg key={star} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xl font-black text-yellow-400 uppercase tracking-widest">Highly Trusted Professionals on the Coast</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 border-4 border-black p-10 rounded-3xl shadow-xl relative group">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black text-4xl shadow-lg border-4 border-black group-hover:scale-110 transition-transform">
                "
              </div>
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-black fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-black font-bold text-lg leading-relaxed mb-8 italic">"{review.comment}"</p>
              <div className="border-t-2 border-black/10 pt-6">
                <p className="font-black text-black uppercase tracking-widest">{review.name}</p>
                <div className="flex justify-between text-xs font-black text-slate-500 uppercase tracking-widest mt-1">
                  <span>{review.location}</span>
                  <span className="text-yellow-600">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="bg-yellow-400 mx-4 sm:mx-8 lg:mx-auto max-w-5xl rounded-3xl p-16 text-center text-black shadow-2xl border-4 border-black">
        <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Had a great experience?</h3>
        <p className="text-black/80 mb-10 max-w-2xl mx-auto font-bold text-lg leading-relaxed">
          Local businesses thrive on word of mouth. If Pat has done a great job for you, please consider leaving a review on Google.
        </p>
        <button className="bg-black text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-slate-900 transition-all uppercase tracking-widest shadow-xl">
          Review on Google
        </button>
      </section>
    </div>
  );
};

export default Reviews;
