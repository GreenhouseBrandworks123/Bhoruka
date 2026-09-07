import React from 'react';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { missionData as data } from '../../data/missionData';
import missionBg from '../../assets/images/hydro-des.jpg'; 

const MissionStatement = () => {
  return (
    <CompanyPageLayout
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      bgImage={missionBg}
    >
      <div className="space-y-32">

        {/* ================= SECTION 1: THE VISION (Cinematic Overlay) ================= */}
        <section>
          <div className="relative overflow-hidden rounded-3xl h-[400px] flex items-center justify-center shadow-xl group">
            <img 
              src={data.vision.image} 
              alt="Corporate Vision" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a4275]/95 via-[#0a4275]/80 to-transparent"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-10 md:px-16 w-full text-left">
              <span className="text-xs font-bold tracking-[0.3em] text-sky-400 uppercase mb-4 block">
                {data.vision.heading}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-white leading-tight tracking-tight max-w-3xl">
                "{data.vision.statement}"
              </h2>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: THE MISSION (Sticky Image Layout) ================= */}
        <section>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left: Sticky Image Anchor */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-28">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="h-px w-8 bg-sky-500"></span>
                  <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
                    Strategic Focus
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight mb-4">
                  {data.mission.heading}
                </h2>
                <p className="text-slate-600 font-light text-lg">
                  {data.mission.intro}
                </p>
              </div>
              
              {/* Feature Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg h-80 relative">
                <img 
                  src={data.mission.image} 
                  alt="Mission Execution" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0a4275]/20 mix-blend-multiply"></div>
              </div>
            </div>

            {/* Right: Scrollable Grid of Pillars */}
            <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.mission.pillars.map((pillar) => (
                <div 
                  key={pillar.id} 
                  className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-400 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col"
                >
                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-[#0a4275] transition-colors duration-300"></div>

                  {/* Watermark Number */}
                  <div className="absolute -bottom-2 -right-2 text-7xl font-black text-slate-50 group-hover:text-blue-50/60 transition-colors duration-500 pointer-events-none select-none z-0">
                    {pillar.id}
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <span className="text-xs font-bold text-sky-500 mb-3 block tracking-wider">
                      DIRECTIVE {pillar.id}
                    </span>
                    <h3 className="text-xl font-bold text-[#0a4275] mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* ================= SECTION 3: CORE VALUES (Simple & Professional) ================= */}
        <section className="pt-20 pb-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            
            {/* Clean Centered Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0a4275] tracking-tight mb-4">
                {data.coreValues.heading}
              </h2>
              <div className="w-12 h-1 bg-sky-500 mx-auto"></div>
            </div>

            {/* Minimalist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.coreValues.items.map((value, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center p-6 bg-white border border-slate-200 rounded-lg hover:border-[#0a4275] hover:shadow-sm transition-all duration-300"
                >
                  {/* Subtle Icon */}
                  <div className="flex-shrink-0 text-[#0a4275] mr-5">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                    </svg>
                  </div>
                  
                  {/* Crisp Text */}
                  <span className="text-base font-semibold text-slate-800 tracking-wide">
                    {value.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </CompanyPageLayout>
  );
};

export default MissionStatement;