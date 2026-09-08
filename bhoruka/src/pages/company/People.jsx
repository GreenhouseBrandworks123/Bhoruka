import React from 'react';
import { Link } from 'react-router-dom';
import CompanyPageLayout from '../../components/company/CompanyPageLayout';
import { peopleData as data } from '../../data/peopleData';
import defaultBg from '../../assets/images/people/people-hero.jpg';

const People = () => {
  return (
    <CompanyPageLayout
      title={data.hero.title}
      subtitle={data.hero.subtitle}
      bgImage={defaultBg}
    >
      <div className="space-y-32">

        {/* ================= 1. THE OVERLAP HEADER (Editorial Style) ================= */}
        <section className="relative pt-8">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* Floating Text Card */}
            <div className="w-full lg:w-5/12 z-10 lg:-mr-16 relative">
              <div className="bg-white p-10 md:p-14 border border-slate-100 shadow-[0_30px_60px_-15px_rgba(10,66,117,0.1)] rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-10 bg-sky-500"></span>
                  <span className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase">
                    Growth & Excellence
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a4275] tracking-tight mb-6 leading-tight">
                  {data.intro.heading}
                </h2>
                <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
                  {data.intro.description}
                </p>
              </div>
            </div>

            {/* Large Feature Image */}
            <div className="w-full lg:w-7/12 h-[400px] md:h-[550px] z-0 mt-8 lg:mt-0">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm relative">
                <img 
                  src={data.intro.image} 
                  alt="Bhoruka Team Culture" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
        </section>

        {/* ================= 2. CORE POLICIES (Tall Vertical Cards) ================= */}
        <section>
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a4275] tracking-tight mb-4">
              Commitment to Our 250-Strong Team
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.pillars.map((pillar) => (
              <div 
                key={pillar.id} 
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:border-[#0a4275]/30 hover:shadow-xl transition-all duration-500 flex flex-col group relative overflow-hidden h-full"
              >
                {/* Watermark Number */}
                <div className="absolute top-4 right-4 text-6xl font-black text-slate-200/50 group-hover:text-blue-50 transition-colors duration-500 pointer-events-none select-none">
                  {pillar.id}
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#0a4275] mb-8 group-hover:bg-[#0a4275] group-hover:text-white group-hover:border-[#0a4275] transition-colors duration-300 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon} />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-4 group-hover:text-[#0a4275] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 font-light text-sm leading-relaxed mt-auto">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Bottom interactive line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0a4275] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. LARGE PORTRAIT TESTIMONIALS ================= */}
        <section className="pt-24 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-3 block">
                Voices of Bhoruka
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a4275] tracking-tight">
                Hear From Our People
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {data.testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(10,66,117,0.1)] transition-all duration-500 hover:border-blue-200"
              >
                {/* Massive Image Container */}
                <div className="w-full h-72 lg:h-80 overflow-hidden relative bg-slate-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content Container */}
                <div className="p-8 lg:p-10 flex flex-col flex-grow relative bg-white">
                  
                  {/* Overlapping Interactive Quote Icon */}
                  <div className="absolute -top-6 right-8 w-12 h-12 bg-[#0a4275] text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 group-hover:bg-sky-500 transition-all duration-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Name and Role */}
                  <div className="mb-6 border-b border-slate-100 pb-6">
                    <h4 className="text-xl font-bold text-[#0a4275] mb-1">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 font-bold tracking-wider uppercase">{testimonial.role}</p>
                  </div>
                  
                  {/* The Quote */}
                  <p className="text-slate-600 font-light leading-relaxed text-base mt-auto">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. CLEAN CTA BOX ================= */}
        <section>
          <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center">
            <h2 className="text-3xl font-extrabold text-[#0a4275] tracking-tight mb-4">
              To work with us, click here
            </h2>
            <p className="text-slate-500 font-light text-base mb-8 max-w-xl leading-relaxed">
              Join a 250-strong team of visionaries, engineers, and operators committed to providing sustainable energy for a better tomorrow.
            </p>
            <Link 
              to="/jobs" 
              className="inline-flex items-center justify-center px-10 py-4 bg-[#0a4275] text-white text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              Explore Careers
            </Link>
          </div>
        </section>

      </div>
    </CompanyPageLayout>
  );
};

export default People;