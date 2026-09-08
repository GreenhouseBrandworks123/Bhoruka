import React from 'react';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { awardsData as data } from '../../data/awardsData';

const AwardsAchievements = () => {
  return (
    <CompanyPageLayout
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      bgImage={data.hero.image}
    >
      <div className="space-y-32 pb-16">

        {/* ================= 1. THE GOLD STANDARD (Image + Hairline Grid) ================= */}
        <section className="pt-8">
          <div className="flex flex-col lg:flex-row bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm gap-px">
            
            {/* Left Side: Feature Image Card */}
            <div className="w-full lg:w-5/12 relative bg-[#0a4275] p-10 md:p-14 flex flex-col justify-center min-h-[400px]">
              <div className="absolute inset-0 z-0">
                 <img 
                   src={data.certifications.image} 
                   alt="Certifications Background" 
                   className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a4275] via-[#0a4275]/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-8 bg-sky-400"></span>
                  <span className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase">
                    The Baseline
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                  {data.certifications.heading}
                </h2>
                <p className="text-blue-100 font-light text-base leading-relaxed">
                  {data.certifications.description}
                </p>
              </div>
            </div>

            {/* Right Side: The Premium Hairline Grid */}
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200">
              {data.certifications.items.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-white p-8 hover:bg-slate-50 transition-colors duration-500 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-[#0a4275]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-600 bg-sky-50 px-2.5 py-1 rounded-sm border border-sky-100">
                      {cert.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 tracking-tight leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed text-sm mt-auto">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= 2. THEMATIC AWARDS (Corporate Ledger Rows) ================= */}
        <section className="pt-16 border-t border-slate-100">
          
          <div className="mb-20">
            <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-4 block">
              Historical Record
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a4275] tracking-tight">
              Trophies & Accolades
            </h2>
          </div>

          <div className="space-y-24">
            {data.awardCategories.map((category, idx) => (
              <div key={idx} className="relative">
                
                {/* Clean, authoritative category header */}
                <div className="flex items-center gap-5 border-b-2 border-[#0a4275] pb-6 mb-2">
                  <div className="text-[#0a4275]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a4275] tracking-tight">
                    {category.theme}
                  </h3>
                </div>

                {/* Ledger-style full-width rows */}
                <div className="flex flex-col">
                  {category.awards.map((award, awardIdx) => (
                    <div 
                      key={awardIdx}
                      className="group flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8 py-8 border-b border-slate-200 hover:bg-slate-50 transition-colors duration-300 px-4 lg:px-6 -mx-4 lg:-mx-6 cursor-default"
                    >
                      {/* Year Column */}
                      <div className="lg:w-1/6 shrink-0 pt-1">
                        <span className="text-sm font-bold text-sky-600 tracking-wider">
                          {award.year}
                        </span>
                      </div>
                      
                      {/* Title & Org Column */}
                      <div className="lg:w-2/6 shrink-0">
                        <h4 className="text-xl font-bold text-slate-800 leading-tight mb-2 group-hover:text-[#0a4275] transition-colors">
                          {award.title}
                        </h4>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                          {award.organization}
                        </p>
                      </div>
                      
                      {/* Description Column */}
                      <div className="lg:w-3/6">
                        <p className="text-slate-600 font-light leading-relaxed text-[15px]">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </section>

      </div>
    </CompanyPageLayout>
  );
};

export default AwardsAchievements;