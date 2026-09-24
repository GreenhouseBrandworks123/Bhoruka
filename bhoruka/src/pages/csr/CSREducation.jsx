// src/pages/csr/CSREducation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT YOUR DATA
import { educationIntro, educationPrograms, educationAchievements } from '../../data/educationData';

// 2. IMPORT YOUR 3 LOCAL IMAGES (For the Core Initiatives)
import eduImg1 from '../../assets/images/edu-img-1.jpg';
import eduImg2 from '../../assets/images/edu-img-2.jpg';
import eduImg3 from '../../assets/images/edu-img-3.jpg';

export default function CSREducation() {
  
  // Arrays linking your local images to the grids
  const programImages = [eduImg1, eduImg2, eduImg3];

  return (
    // Removed the pt-24 from the main wrapper, moving it to the new header
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* --- NEW PAGE HEADER --- */}
      <section className="w-full pt-28 lg:pt-36 pb-8 lg:pb-12 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#0B4B94]"></div>
            <Link to="/csr" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#0B4B94] transition-colors">
              Corporate Social Responsibility
            </Link>
            <span className="text-xs font-bold text-slate-400">/</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B4B94]">
              Education
            </span>
          </div>
          
          {/* Main Page Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight uppercase">
            Education
          </h1>
          
        </div>
      </section>

      {/* 1. EDITORIAL INTRO (Split-Frame using your exact data) */}
      <section className="w-full pb-16 md:pb-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch border border-slate-200 shadow-xl bg-white">
            
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0B4B94]"></div>
              
              <h3 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase mb-4">
                {educationIntro.eyebrow}
              </h3>
              
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                {educationIntro.heading}
              </h2>
              
              <div className="w-12 h-1 bg-slate-300 mb-8"></div>
              
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                {educationIntro.paragraph1}
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                {educationIntro.paragraph2}
              </p>
            </div>

            <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80" 
                alt="Bhoruka Education Initiatives"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 opacity-90"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 3 INITIATIVES */}
      <section className="w-full py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#0B4B94] uppercase mb-3">Our Action Plan</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Core Initiatives
            </h3>
            <div className="w-20 h-1 bg-[#0B4B94] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {educationPrograms.map((program, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group relative overflow-hidden">
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0B4B94] transition-all duration-500 group-hover:w-full z-10"></div>

                <div className="relative h-64 overflow-hidden border-b border-slate-200 bg-slate-200 shrink-0">
                  <img 
                    src={programImages[index]} 
                    alt={program.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[15%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-white text-slate-900 text-[10px] font-extrabold uppercase tracking-widest py-1.5 px-3 border border-slate-200 shadow-sm">
                    {program.label}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase">{program.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {program.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ACHIEVEMENTS FACT SHEET */}
      <section className="w-full py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col mb-16 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-[#0B4B94]"></div>
            
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase mt-6 mb-4">
              Measurable Impact
            </h3>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Key Achievements
            </h2>
            
            <div className="w-12 h-1 bg-slate-300 mb-8"></div>
            
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Our interventions focus heavily on accountability. By partnering directly with the government and local trusts, we ensure measurable, long-term progress across all adopted institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {educationAchievements.map((achievement, index) => (
              <div key={index} className="bg-white border border-slate-200 p-8 flex flex-col relative group hover:border-[#0B4B94] transition-colors duration-300 shadow-sm hover:shadow-md">
                
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-[#0B4B94] transition-colors duration-300"></div>
                
                <h4 className="text-4xl lg:text-3xl xl:text-4xl font-extrabold text-[#0B4B94] mb-4 break-words tracking-tight">
                  {achievement.metric}
                </h4>
                
                <div className="w-8 h-[2px] bg-slate-200 mb-4"></div>
                
                <p className="text-sm text-slate-900 uppercase tracking-widest font-bold mb-3">
                  {achievement.label}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {achievement.description}
                </p>
                
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. RETURN CTA */}
      <section className="w-full py-16 bg-slate-900 flex justify-center border-t border-slate-800">
        <Link 
          to="/csr-overview" 
          className="group inline-flex items-center justify-center px-10 py-4 text-xs font-bold text-slate-900 bg-white hover:bg-[#0B4B94] hover:text-white transition-all duration-300 uppercase tracking-widest shadow-sm"
        >
          <svg className="w-4 h-4 mr-3 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to CSR Overview
        </Link>
      </section>

    </div>
  );
}