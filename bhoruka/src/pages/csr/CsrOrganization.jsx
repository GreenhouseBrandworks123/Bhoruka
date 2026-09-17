import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { csrOrganizationData } from '../../data/csrOrganizationData';
import orgChartImage from '../../assets/images/orgChartImage.jpg';

export default function CsrOrganization({ data = csrOrganizationData }) {
  return (
    <div className="w-full bg-white font-sans text-slate-900 selection:bg-[#0B4B94] selection:text-white">

      {/* 1. ABOUT SECTION (Architectural Overlap) */}
      <section className="w-full bg-slate-50 py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center">

            {/* Image Box */}
            <div className="lg:w-7/12 w-full order-1">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Historical Bhoruka Welfare"
                className="w-full h-[500px] lg:h-[700px] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </div>

            {/* Overlapping Text Box */}
            <div className="lg:w-6/12 bg-white p-10 lg:p-16 shadow-2xl z-10 lg:ml-[-10%] relative mt-10 lg:mt-0 order-2 border border-slate-100">
              {/* Vertical Accent Line */}
              <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-0"></div>

              <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase block mb-4">
                {data.about.eyebrow}
              </span>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
                {data.about.title}
              </h2>

              <div className="w-8 h-1 bg-[#0B4B94] mb-8"></div>

              <div className="space-y-6">
                {data.about.paragraphs.map((para, index) => (
                  <p key={index} className={`leading-relaxed ${index === 0 ? 'text-lg font-bold text-slate-800' : 'text-slate-600'}`}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OBJECTIVES SECTION (Structural Grid) */}
      <section className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header (Split Architectural Layout) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-10">
            <div className="lg:w-6/12 relative">
              {/* Structural vertical accent */}
              <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-[-24px] lg:left-[-32px]"></div>
              
              <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase block mb-6">
                {data.objectives.eyebrow}
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1]">
                {data.objectives.title}
              </h2>
            </div>
            
            <div className="lg:w-5/12">
              {/* INCREASED: text-lg -> text-xl */}
              <p className="text-xl font-medium text-slate-600 leading-relaxed">
                {data.objectives.description}
              </p>
            </div>
          </div>

          {/* Interlocking Blueprint Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
            {data.objectives.list.map((objective, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-10 lg:p-14 border-b border-r border-slate-200 hover:bg-[#0B4B94] transition-colors duration-500 overflow-hidden flex flex-col justify-start min-h-[360px]"
              >
                {/* Massive Ghost Numbering */}
                <div className="absolute -bottom-8 -right-4 text-[150px] font-black text-slate-50 group-hover:text-white/10 leading-none transition-colors duration-500 z-0 pointer-events-none tracking-tighter">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Horizontal Accent Line */}
                  <div className="w-12 h-1 bg-[#0B4B94] group-hover:bg-white transition-colors duration-500 mb-8"></div>
                  
                  {/* INCREASED: text-2xl -> text-3xl */}
                  <h3 className="text-3xl font-extrabold text-slate-900 group-hover:text-white uppercase tracking-wide mb-6 transition-colors duration-500">
                    {objective.highlight}
                  </h3>
                  
                  {/* INCREASED: added text-lg */}
                  <p className="text-lg text-slate-600 group-hover:text-blue-50 leading-relaxed transition-colors duration-500">
                    {objective.text}
                  </p>
                </div>

                {/* Architectural Corner Crosshair (Top Right) */}
                <div className="absolute top-0 right-0 w-4 h-4 border-b border-l border-slate-200 group-hover:border-white/20 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 3. STRATEGY & REACH (Deep Contrast Box) */}
      {/* 3. COMBINED STRATEGY & GOVERNANCE MASTER SECTION */}
      <section className="w-full bg-white py-20 lg:py-32 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-20 lg:gap-32">
          
          {/* PART A: Strategy & Operational Footprint */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
            {/* Text Box Left */}
            <div className="lg:w-1/2 pr-0 lg:pr-16 relative">
              {/* Vertical Accent */}
              <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-[-24px] lg:left-[-32px]"></div>
              
              <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase block mb-4">
                {data.strategy.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                {data.strategy.title}
              </h2>
              <div className="w-8 h-1 bg-[#0B4B94] mb-8"></div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {data.strategy.description}
              </p>
            </div>

            {/* Lists Box Right */}
            <div className="lg:w-1/2 bg-slate-50 border border-slate-200 p-10 lg:p-12 flex flex-col sm:flex-row gap-10 shadow-sm relative overflow-hidden">
              {/* Subtle structural corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#0B4B94] m-3 opacity-20"></div>
              
              <div className="flex-1">
                <h4 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase mb-4 border-b border-slate-200 pb-2">Districts</h4>
                <ul className="space-y-3 mt-4">
                  {data.strategy.districts.map((district, index) => (
                    <li key={index} className="text-slate-700 font-bold">{district}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase mb-4 border-b border-slate-200 pb-2">Service Areas</h4>
                <ul className="space-y-3 mt-4">
                  {data.strategy.areasOfService.map((area, index) => (
                    <li key={index} className="text-slate-700 font-bold">{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PART B: Governance, Image & Awards (Architectural Overlap) */}
          <div className="flex flex-col lg:flex-row items-center relative">
            
            {/* Framed Image Left */}
            <div className="lg:w-7/12 w-full group relative z-0 order-2 lg:order-1 mt-10 lg:mt-0">
              <div className="bg-slate-50 p-6 lg:p-10 shadow-md border border-slate-200 relative overflow-hidden">
                {/* Interactive Corner Crosshairs */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#0B4B94] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4 pointer-events-none z-20"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#0B4B94] opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4 pointer-events-none z-20"></div>
                
                {/* Image */}
                <img 
                  src={orgChartImage} 
                  alt="Organization Chart" 
                  className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700 relative z-10"
                />
              </div>
            </div>

            {/* Overlapping Text Box Right */}
            <div className="lg:w-6/12 bg-white shadow-2xl z-10 lg:ml-[-8%] flex flex-col border border-slate-100 order-1 lg:order-2">
               
               {/* Governance Info */}
               <div className="p-10 lg:p-16 relative">
                  {/* Vertical Accent */}
                  <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-0"></div>
                  
                  <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase block mb-4">
                    {data.orgChart.eyebrow}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                    {data.orgChart.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-0">
                    {data.orgChart.description}
                  </p>
               </div>

               {/* Awards Highlight Box (Integrated into the bottom of the card) */}
               <div className="bg-[#0B4B94] p-10 lg:p-12 flex items-center gap-6 relative overflow-hidden">
                  <Award className="absolute -bottom-6 -right-6 w-40 h-40 text-white opacity-5" />
                  <Award className="w-12 h-12 text-white flex-shrink-0 relative z-10" />
                  <div className="relative z-10">
                     <span className="text-xs font-bold tracking-[0.2em] text-blue-200 uppercase block mb-2">
                       Awards & Achievements
                     </span>
                     <p className="text-xl font-bold text-white leading-snug">
                       {data.structureAndAwards.award}
                     </p>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}