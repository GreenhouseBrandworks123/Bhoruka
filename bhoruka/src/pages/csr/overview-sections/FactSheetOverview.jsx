import React from 'react';
import { Link } from 'react-router-dom';

export default function FactSheetOverview() {
  return (
    // Full-bleed edge-to-edge container
    <section className="w-full flex flex-col lg:flex-row border-t border-slate-200">
      
      {/* 
        Image Side (Left) - Spans 50% of the screen
      */}
      <div className="w-full lg:w-1/2 h-[400px] lg:min-h-[700px] relative">
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80" 
          alt="Bhoruka Impact Fact Sheet" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* 
        Content Side (Right) - Changed to pure bg-white for a bright, clean look
      */}
      <div className="w-full lg:w-1/2 bg-white py-20 px-8 sm:px-16 lg:px-24 flex flex-col justify-center">
        
        {/* Constrained inner width for readability */}
        <div className="max-w-2xl">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-1 bg-[#0B4B94]"></div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase">
              Measurable Impact
            </h3>
          </div>
          
          <h2 className="text-3xl lg:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Fact Sheet Overview
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-14">
            We believe in transparency and measurable outcomes. Our holistic approach to CSR ensures that every initiative across education, community development, and healthcare delivers a high-success yield to thousands of beneficiaries.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">
            
            {/* Metric 1 */}
            <div className="relative pt-4 border-t border-slate-200">
              <div className="absolute top-0 left-0 w-1/2 h-[2px] bg-[#0B4B94]"></div>
              <h4 className="text-3xl lg:text-4xl font-extrabold text-[#0B4B94] mb-2">3,800+</h4>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Student <br/>Beneficiaries</p>
            </div>

            {/* Metric 2 */}
            <div className="relative pt-4 border-t border-slate-200">
              <div className="absolute top-0 left-0 w-1/2 h-[2px] bg-[#0B4B94]"></div>
              <h4 className="text-3xl lg:text-4xl font-extrabold text-[#0B4B94] mb-2">200+</h4>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Self Help <br/>Groups</p>
            </div>

            {/* Metric 3 */}
            <div className="relative pt-4 border-t border-slate-200">
              <div className="absolute top-0 left-0 w-1/2 h-[2px] bg-[#0B4B94]"></div>
              <h4 className="text-3xl lg:text-4xl font-extrabold text-[#0B4B94] mb-2">100%</h4>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">RCH Program <br/>Success</p>
            </div>

          </div>

          {/* Sharp CTA Button - Changed to Bhoruka Blue */}
          <div>
            <Link 
              to="/csr/factsheet" 
              className="group inline-flex items-center justify-center px-10 py-4 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] transition-all duration-300 uppercase tracking-widest"
            >
              View Complete Fact Sheet
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}