import React from 'react';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { visionValuesData as data } from '../../data/visionValuesData';
import defaultBg from '../../assets/images/hydro-des.jpg';

const VisionValuesQuality = () => {
  return (
    <CompanyPageLayout
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      bgImage={defaultBg}
    >
      <div className="space-y-32">

       {/* ================= 1. VISION (Split Image Layout - White Theme) ================= */}
        <section>
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(10,66,117,0.1)] border border-slate-100">
            {/* Text Side */}
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white relative overflow-hidden">
              
              {/* Very faint, premium blue background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  {/* Accent line and tag inverted to corporate blue */}
                  <span className="h-px w-8 bg-[#0a4275]"></span>
                  <span className="text-sm font-bold tracking-[0.25em] text-[#0a4275] uppercase">
                    {data.vision.tag}
                  </span>
                </div>
                {/* Vision statement text inverted to corporate blue */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#0a4275] leading-relaxed tracking-tight">
                  "{data.vision.statement}"
                </h2>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 h-72 lg:h-auto relative">
              <img 
                src={data.vision.image} 
                alt="Vision landscape" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= 2. CORE VALUES (Image Anchored Grid) ================= */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Context Section */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase block mb-3">
                {data.coreValues.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight mb-6">
                Our Guiding Principles
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed mb-8">
                {data.coreValues.intro}
              </p>
              
              {/* Decorative small visual cue */}
              <div className="h-48 rounded-2xl overflow-hidden relative shadow-inner hidden lg:block">
                <img src={defaultBg} alt="Operations" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4275] to-transparent mix-blend-multiply"></div>
              </div>
            </div>

            {/* Right Grid Section */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.coreValues.items.map((val, idx) => (
                  <div
                    key={idx}
                    className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#0a4275]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Hover Gradient line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#0a4275] transition-colors duration-300"></div>
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-200 text-blue-600 mb-6 group-hover:bg-[#0a4275] group-hover:text-white group-hover:border-[#0a4275] transition-colors duration-300 shadow-sm">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={val.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a4275] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-slate-600">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. QUALITY POLICY (Image & Document Layout) ================= */}
        <section className="pt-10 border-t border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight">
              {data.qualityPolicy.tag}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Operational Image Side */}
            <div className="relative h-80 lg:h-auto rounded-3xl overflow-hidden shadow-lg group">
              <img 
                src={data.qualityPolicy.image} 
                alt="Quality and Safety Engineering" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full mb-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">ISO Certified</span>
                </div>
                <h3 className="text-white text-xl font-medium tracking-wide">Committed to Zero-Harm Operations</h3>
              </div>
            </div>

            {/* Document Side */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-base text-slate-600 font-medium mb-8 leading-relaxed">
                  {data.qualityPolicy.intro}
                </p>

                <ul className="space-y-4 mb-10">
                  {data.qualityPolicy.commitments.map((item, idx) => (
                    <li key={idx} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-[#0a4275]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-sm text-slate-700 font-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sign-off */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#0a4275] tracking-tight uppercase">
                    {data.qualityPolicy.signOff.name}
                  </p>
                  <p className="text-xs text-slate-500 font-medium tracking-widest uppercase mt-1">
                    {data.qualityPolicy.signOff.entity}
                  </p>
                </div>
                {/* Visual Stamp */}
                <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-300 font-serif font-black italic">
                  B
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </CompanyPageLayout>
  );
};

export default VisionValuesQuality;