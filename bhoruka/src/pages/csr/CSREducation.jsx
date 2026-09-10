import React from 'react';
import { Link } from 'react-router-dom';

export default function EducationOverview() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="order-1 h-64 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg relative">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80" 
              alt="Bhoruka Education Initiatives" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2">
            <h2 className="text-xs font-bold tracking-widest text-[#0B4B94] uppercase mb-2">Empowering Minds</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">Education</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Sustainable development begins with quality education. We focus on building strong elementary systems, upgrading rural school infrastructure, and providing essential digital resources in neglected regions to empower the next generation.
            </p>
            <Link 
              to="/csr/education" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B4B94] bg-white border border-blue-200 hover:bg-blue-50 rounded-lg transition-colors shadow-sm"
            >
              Explore Educational Impact
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}