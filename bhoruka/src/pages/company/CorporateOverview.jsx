import React from 'react';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { corporateOverviewData as data } from '../../data/corporateOverviewData';
import corpBg from '../../assets/images/hydro-des.jpg';

const VerticalIcon = ({ type }) => {
  switch (type) {
    case 'Hydro Power Generation':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case 'Wind Energy Assets':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
      );
    case 'Solar Photovoltaic Parks':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

const CorporateOverview = () => {
  return (
    <CompanyPageLayout
      title={data?.hero?.title}
      subtitle={data?.hero?.subtitle}
      bgImage={corpBg}
    >
      {/* ALL CONTENT MUST BE INSIDE THIS WRAPPER */}
      
      {/* ================= SECTION 1: NARRATIVE & SNAPSHOT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-28">
        <div className="lg:col-span-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase">
              Corporate Heritage
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a4275] tracking-tight leading-tight mb-8">
            {data?.narrative?.title}
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
            {data?.narrative?.content?.map((paragraph, index) => (
              <p 
                key={index}
                className={index === 0 ? "font-normal text-slate-800 text-lg md:text-xl leading-relaxed border-l-2 border-blue-500/40 pl-6 my-6" : "font-light"}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-100">
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0a4275]">1986</p>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Pioneering Year</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0a4275]">Multi-Tech</p>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Integrated Assets</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#0a4275]">Triple ISO</p>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Certified Operations</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 sticky top-28">
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-8 border border-slate-200/80 shadow-[0_10px_30px_-15px_rgba(10,66,117,0.08)]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0a4275] via-blue-500 to-sky-400"></div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-[#0a4275] tracking-tight">Corporate Snapshot</h3>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <ul className="space-y-5">
              {data?.quickFacts?.map((fact, index) => (
                <li key={index} className="flex flex-col space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">{fact.label}</span>
                  <span className="text-sm font-semibold text-slate-800 break-words">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: TRI-VERTICAL PORTFOLIO ================= */}
      <div className="pt-20 border-t border-slate-100 mb-28">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase">Operational Scope</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight">
            Multi-Technology Energy Verticals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.verticals?.map((vertical) => (
            <div key={vertical.id} className="group relative bg-white border border-slate-200/90 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/30 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-sky-400 transition-all duration-300"></div>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0a4275] flex items-center justify-center group-hover:bg-[#0a4275] group-hover:text-white transition-colors duration-300">
                    <VerticalIcon type={vertical.title} />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 bg-slate-100 text-slate-600 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    {vertical.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a4275] mb-3 tracking-tight">{vertical.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{vertical.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 3: STRATEGIC PILLARS (Clean White Theme) ================= */}
      <div className="pt-20 pb-10 border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-4 block">
            Guiding Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight">
            Core Operational Pillars
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.strategicPillars?.map((pillar, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white border border-slate-200 rounded-2xl p-10 hover:shadow-[0_20px_40px_-15px_rgba(10,66,117,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-blue-500 transition-colors duration-500"></div>
              
              <div className="absolute -bottom-6 -right-4 text-[10rem] font-black text-slate-50 group-hover:text-blue-50/50 transition-colors duration-500 z-0 select-none pointer-events-none leading-none">
                {idx + 1}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50/80 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  0{idx + 1}
                </div>
                
                <h3 className="text-xl font-bold text-[#0a4275] mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </CompanyPageLayout>
  );
};

export default CorporateOverview;