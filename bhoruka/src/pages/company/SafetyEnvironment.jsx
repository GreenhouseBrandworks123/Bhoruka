import React from 'react';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { safetyData as data } from '../../data/safetyData';

const SafetyEnvironment = () => {
  return (
    <CompanyPageLayout
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      bgImage={data.hero.image}
      imagePosition="object-center"
      gradientStyle="from-[#0a4275] via-[#0a4275]/80 to-transparent"
    >
      <div className="space-y-24 pb-16">

        {/* ================= 1. OHS & ENVIRONMENT (Split Layout) ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Occupational Health & Safety */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-sky-500"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">
                Zero Harm Culture
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0a4275] tracking-tight mb-6">
              {data.ohs.heading}
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-10">
              {data.ohs.description}
            </p>

            <div className="space-y-6">
              {data.ohs.highlights.map((highlight, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{highlight.title}</h4>
                    <p className="text-sm font-light text-slate-600 leading-relaxed">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Environmental Policy Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 md:p-12 h-full shadow-sm">
            <h2 className="text-3xl font-extrabold text-[#0a4275] tracking-tight mb-6">
              {data.environment.heading}
            </h2>
            <p className="text-slate-600 font-light leading-relaxed mb-8">
              {data.environment.description}
            </p>
            
            <ul className="space-y-5">
              {data.environment.policies.map((policy, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 font-light leading-relaxed text-sm md:text-base">
                    {policy}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
        </section>

        {/* ================= 2. INTEGRATED MANAGEMENT SYSTEM ================= */}
        <section>
          <div className="bg-[#0a4275] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl max-w-5xl mx-auto">
            {/* Soft decorative background circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <svg className="w-12 h-12 text-sky-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                {data.ims.heading}
              </h2>
              <div className="w-16 h-1 bg-sky-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-blue-50 font-light leading-relaxed text-lg">
                {data.ims.description}
              </p>
            </div>
          </div>
        </section>

        {/* ================= 3. CERTIFICATE GALLERY ================= */}
        <section className="pt-8 border-t border-slate-100">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-4 block">
              Official Documentation
            </span>
            <h2 className="text-3xl font-extrabold text-[#0a4275] tracking-tight">
              Certifications & Awards
            </h2>
          </div>

          {/* Masonry-style Grid for mixed image shapes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="group relative bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-64"
              >
                <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Tooltip on hover */}
                <div className="absolute -bottom-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300 pointer-events-none z-20">
                  <span className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded shadow-lg whitespace-nowrap">
                    {cert.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </CompanyPageLayout>
  );
};

export default SafetyEnvironment;