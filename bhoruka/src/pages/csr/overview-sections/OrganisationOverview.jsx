import React from 'react';
import { Link } from 'react-router-dom';

import organisationImg from '../../../assets/images/csr/csr-organisation.avif';

export default function OrganisationOverview() {
  return (
    // Changed to slate-50 so the overlapping white text box pops out
    <section className="w-full py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="flex flex-col lg:flex-row items-center">
          
          {/* 
            Overlapping Text Box 
            On desktop, it takes up 40% of the width and physically overlaps the image to the right (lg:mr-[-8%])
            It uses sharp corners, a deep shadow, and a solid blue accent bar on the left edge.
          */}
          <div className="w-full lg:w-5/12 bg-white p-10 md:p-14 border border-slate-200 shadow-2xl shadow-slate-200/50 relative z-10 lg:mr-[-8%] mb-8 lg:mb-0">
            
            {/* Architectural left border accent */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0B4B94]"></div>

            <h3 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase mb-4">
              Bhoruka Welfare
            </h3>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              The Driving Force <br className="hidden lg:block"/> Behind Our Impact
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed mb-10">
              Rooted in the philosophy of inclusive growth, the Bhoruka Welfare organization has been the cornerstone of our social initiatives for decades. We collaborate directly with grassroots NGOs, medical professionals, and local leaders to ensure our resources reach those who need them most.
            </p>

            {/* Sharp button with hover animation */}
            <Link 
              to="/csr/organisation" 
              className="group inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] transition-all duration-300 uppercase tracking-widest shadow-md"
            >
              Meet The Team
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* 
            Image Side 
            Massive, sharp, full-bleed height container. 
            Takes up the remaining width and sits perfectly behind the text box.
          */}
          <div className="w-full lg:w-7/12 h-[450px] lg:h-[650px] relative z-0 border border-slate-200">
            <img 
              src={organisationImg} 
              alt="Bhoruka CSR Organisation Team" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle gradient overlay to ensure the image doesn't wash out the screen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
}