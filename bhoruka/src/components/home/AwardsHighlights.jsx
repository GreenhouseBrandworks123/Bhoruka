import React from 'react';
import { Link } from 'react-router-dom';

const AwardsHighlights = () => {
  // We select the top 4 highlights from your data for the Home Page teaser
  const topAwards = [
    {
      id: 1,
      category: "Global Standards",
      title: "Integrated Management Systems",
      organization: "Bureau Veritas & ICS",
      description: "Awarded ISO 9001, ISO 14001, and OHSAS 18001 for Quality, Environment, and Occupational Health & Safety.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      category: "Sustainability",
      title: "Significant Achievement in Sustainable Dev.",
      organization: "CII-ITC",
      description: "Recognized with the prestigious CII-ITC Sustainability Award for outstanding commitment to green energy.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      category: "Social Impact",
      title: "Corporate Social Responsibility Award",
      organization: "TERI (The Energy and Resources Institute)",
      description: "Honored for exceptional initiatives in community development and corporate social responsibility.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      category: "Operational Safety",
      title: "Best Safety Performance (Uttama Suraksha)",
      organization: "National Safety Council & Greentech",
      description: "Multiple-time recipient of top honors for outstanding achievements in plant safety management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m10 5c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
              Recognition & Accolades
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a4275] tracking-tight mb-6">
              An Award-Winning Legacy
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 mb-6"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              For over four decades, Bhoruka Power has been consistently recognized by national and international bodies for our unwavering commitment to quality, safety, and environmental stewardship.
            </p>
          </div>
          
          {/* Top Right Desktop Button (Hides on Mobile) */}
          <div className="hidden md:block">
            <Link 
              to="/company/awards-achievements"
              className="group inline-flex items-center text-[#0a4275] font-bold uppercase tracking-widest text-sm hover:text-blue-600 transition-colors"
            >
              View All Awards
              <span className="ml-2 w-8 h-px bg-[#0a4275] group-hover:bg-blue-600 group-hover:w-12 transition-all duration-300"></span>
            </Link>
          </div>
        </div>

        {/* ================= AWARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topAwards.map((award) => (
            <div 
              key={award.id} 
              className="bg-white rounded-sm border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-500">
                {award.icon}
              </div>
              
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">
                {award.category}
              </p>
              
              <h3 className="text-lg font-bold text-[#0a4275] mb-2 leading-tight">
                {award.title}
              </h3>
              
              <p className="text-xs font-semibold text-slate-400 mb-4 pb-4 border-b border-slate-100">
                {award.organization}
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed font-light flex-grow">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MOBILE BOTTOM BUTTON ================= */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/company/awards-achievements"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0a4275] text-white text-sm font-bold uppercase tracking-widest rounded-sm shadow-md"
          >
            View All Awards
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AwardsHighlights;