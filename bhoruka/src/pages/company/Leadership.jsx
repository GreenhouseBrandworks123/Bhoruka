import React from 'react';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { leadershipData as data } from '../../data/leadershipData';

// Reusable UI Card for Leadership Members
const ProfileCard = ({ member }) => (
  <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(10,66,117,0.12)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col group relative">
    
    {/* Clean Image Container with Fallback */}
    <div className="w-full h-72 bg-slate-50 border-b border-slate-100 relative overflow-hidden flex-shrink-0">
      {member.image ? (
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
          <svg className="w-24 h-24 transform group-hover:scale-110 transition-transform duration-700 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.313 0-10 1.671-10 5v3h20v-3c0-3.329-6.687-5-10-5z" />
          </svg>
        </div>
      )}
    </div>

    {/* Profile Content */}
    <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
      <span className="text-[11px] font-bold tracking-widest text-sky-500 uppercase mb-2 block">
        {member.designation}
      </span>
      
      <h3 className="text-2xl font-bold text-[#0a4275] mb-4 tracking-tight">
        {member.name}
      </h3>
      
      <div className="w-8 h-1 bg-blue-100 mb-6 group-hover:bg-blue-500 transition-colors duration-500"></div>
      
      <p className="text-slate-600 text-sm leading-relaxed font-light flex-grow mb-6">
        {member.bio}
      </p>

      {/* NEW: Committee Badges */}
      {member.committees && (
        <div className="pt-5 mt-auto border-t border-slate-100 flex flex-wrap gap-2">
          {member.committees.map((committee, idx) => (
            <span key={idx} className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md">
              {committee}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Leadership = () => {
  return (
    <CompanyPageLayout
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      // Using a premium Unsplash image for a highly professional corporate feel
      bgImage="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2574&auto=format&fit=crop"
    >
      
      {/* ================= SECTION 1: EXECUTIVE PERSPECTIVE (Simple & Professional) ================= */}
      <div className="mb-24 bg-white border border-slate-200 rounded-xl p-8 md:p-14 shadow-sm relative">
        {/* Crisp top corporate accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#0a4275] rounded-t-xl"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Delicate Quote Icon */}
          <div className="flex justify-center mb-8 text-blue-600/10">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* The Core Message */}
          <blockquote className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed mb-10">
            "{data.executiveMessage.quote}"
          </blockquote>
          
          {/* Clean Attribution */}
          <div className="inline-block border-t border-slate-100 pt-6">
            <p className="text-base font-bold text-[#0a4275] tracking-tight mb-1">
              {data.executiveMessage.author}
            </p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
              {data.executiveMessage.authorTitle}
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: BOARD OF DIRECTORS ================= */}
      <div className="mb-24">
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-px w-8 bg-sky-500"></span>
          <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">Governance</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight mb-12">
          Board of Directors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.boardOfDirectors.map(member => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* ================= SECTION 3: EXECUTIVE MANAGEMENT ================= */}
      <div className="mb-24 pt-16 border-t border-slate-100">
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-px w-8 bg-sky-500"></span>
          <span className="text-xs font-bold tracking-[0.25em] text-sky-500 uppercase">Operations</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight mb-12">
          Executive Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
          {data.executiveManagement.map(member => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* ================= SECTION 4: GOVERNANCE FRAMEWORK ================= */}
      <div className="pt-20 border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight mb-4">
            Corporate Governance
          </h2>
          <p className="text-slate-500 font-light">
            Our leadership operates under a strict framework designed to maximize transparency, mitigate operational risk, and ensure sustainable expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.governancePillars.map((pillar, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-6">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-[#0a4275] mb-3">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </CompanyPageLayout>
  );
};

export default Leadership;