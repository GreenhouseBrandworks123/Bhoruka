import React from 'react';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { missionData as data } from '../../data/missionData';

// Reusing your existing background for visual consistency across company pages
import missionBg from '../../assets/images/hydro-des.jpg'; 

const MissionStatement = () => {
  return (
    <CompanyPageLayout
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      bgImage={missionBg}
    >
      
      {/* ================= SECTION 1: THE VISION ================= */}
      <div className="mb-24 bg-white border border-slate-200 rounded-2xl p-10 md:p-16 text-center shadow-sm relative overflow-hidden">
        {/* Subtle top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0a4275]"></div>
        
        <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-6 block">
          {data.vision.heading}
        </span>
        
        {/* Watermark Quote Icon */}
        <div className="flex justify-center mb-6 text-slate-100">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 leading-relaxed max-w-4xl mx-auto tracking-tight">
          "{data.vision.statement}"
        </h2>
      </div>

      {/* ================= SECTION 2: THE MISSION ================= */}
      <div className="mb-28">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-px w-8 bg-sky-500"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
              Actionable Directives
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight mb-6">
            {data.mission.heading}
          </h2>
          <p className="text-slate-600 font-light text-lg">
            {data.mission.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.mission.pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-[#0a4275] hover:shadow-[0_20px_40px_-15px_rgba(10,66,117,0.1)] transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              {/* Dynamic hover accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#0a4275] transition-colors duration-300"></div>

              {/* Decorative Numbering */}
              <div className="absolute -bottom-4 -right-4 text-[8rem] font-black text-slate-50 group-hover:text-blue-50/60 transition-colors duration-500 pointer-events-none select-none leading-none z-0">
                {pillar.id}
              </div>
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-[#0a4275] mb-4 tracking-tight">
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

      {/* ================= SECTION 3: CORE VALUES ================= */}
      <div className="pt-20 border-t border-slate-100 pb-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-4 block">
            Guiding Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight mb-4">
            Core Values
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.coreValues.map((value, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                </svg>
              </div>
              <span className="text-sm md:text-base font-bold text-[#0a4275] tracking-wide">
                {value.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </CompanyPageLayout>
  );
};

export default MissionStatement;