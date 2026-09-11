import React from 'react';
import { Link } from 'react-router-dom';
import organisationImg from '../../../assets/images/csr/csr-organisation.avif';

export default function OrganisationOverview() {
  return (
    <section className="w-full bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
      
      {/* 100% Viewport Width Grid - Zero Artificial Margins */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[600px]">
        
        {/* Left Side: Content & Clear Section Hierarchy (Col 1-7) */}
        <div className="lg:col-span-6 xl:col-span-5 px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
          
          {/* Section Marker / Corporate Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono font-bold text-[#0B4B94] tracking-widest uppercase">
              02 / Governance & Structure
            </span>
            <div className="h-px w-12 bg-slate-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Bhoruka Welfare Organisation
          </h2>
          
          <h3 className="text-lg font-semibold text-[#0B4B94] mb-6">
            The operational cornerstone behind our grassroots initiatives.
          </h3>
          
          <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-xl">
            Rooted in the philosophy of inclusive growth, the organisation serves as the direct implementation bridge between corporate stewardship and local community needs. We coordinate on-ground surveys, resource deployment, and partner with regional institutions to ensure long-term, self-sustaining progress.
          </p>

          {/* Sharp Action Bar */}
          <div>
            <Link 
              to="/csr/organisation" 
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] uppercase tracking-widest transition-colors shadow-sm"
            >
              Meet The Leadership Team
              <svg className="w-4 h-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Side: Full-Bleed Sharp Photo (Col 7-12) */}
        <div className="lg:col-span-6 xl:col-span-7 relative min-h-[400px] lg:min-h-full w-full border-t lg:border-t-0 lg:border-l border-slate-200">
          <img 
            src={organisationImg} 
            alt="Bhoruka CSR Organisation Team" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
          />
        </div>

      </div>
    </section>
  );
}