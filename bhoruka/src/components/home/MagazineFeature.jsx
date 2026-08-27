import React from 'react';

// You can swap this with any relevant image for the "Cover" of your magazine
import coverImage from '../../assets/wind-imges/wind-bg.jpeg'; 

const MagazineFeature = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0a4275]/5 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ================= LEFT COLUMN: DIGITAL MAGAZINE MOCKUP ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-1000">
            {/* The Magazine Container with 3D Hover Effect */}
            <div className="group relative w-[280px] sm:w-[340px] h-[400px] sm:h-[480px] transition-transform duration-700 hover:-translate-y-4 hover:rotate-1 cursor-pointer">
              
              {/* Back pages (creates the illusion of thickness) */}
              <div className="absolute top-2 left-2 w-full h-full bg-white border border-slate-200 rounded-r-lg shadow-sm"></div>
              <div className="absolute top-1 left-1 w-full h-full bg-slate-50 border border-slate-200 rounded-r-lg shadow-md"></div>
              
              {/* Main Cover */}
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-r-lg shadow-2xl overflow-hidden border-l-[12px] border-[#0a4275] flex flex-col transition-all duration-500">
                
                {/* Top Image Section */}
                <div className="h-3/5 w-full relative overflow-hidden">
                  <img 
                    src={coverImage} 
                    alt="Green Power Magazine Cover" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Magazine Header Text */}
                  <div className="absolute top-6 right-6 text-right">
                    <p className="text-white font-bold tracking-[0.3em] text-xs uppercase mb-1">Quarterly</p>
                    <p className="text-blue-300 text-[10px] uppercase tracking-widest font-semibold">Vol. 42 • Issue 03</p>
                  </div>
                </div>

                {/* Bottom Text Section of Cover */}
                <div className="h-2/5 p-6 md:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0a4275] tracking-tighter leading-none mb-2">
                      GREEN POWER
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Bhoruka Power Corp.
                    </p>
                  </div>
                  <div className="w-12 h-1 bg-blue-500"></div>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: EDITORIAL TEXT ================= */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            <p className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
              Corporate Publication
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a4275] tracking-tight mb-6">
              Industry Insights & Updates
            </h2>
            <div className="w-20 h-1.5 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
              Stay informed with <strong className="font-semibold text-slate-800">GREEN POWER</strong>, Bhoruka's official quarterly magazine. Dive deep into the latest advancements in renewable technology, project milestones, and regulatory updates shaping the Indian energy sector.
            </p>
            
            <p className="text-base text-slate-500 mb-10 leading-relaxed">
              For over a decade, our editorial team has provided transparent reporting on our ESG initiatives, corporate social responsibility (CSR) programs, and operational achievements to keep our investors, partners, and communities connected to our mission.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#0a4275] text-white text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-sm shadow-md hover:shadow-xl">
                <span>Read Latest Issue</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>

              <button className="group inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-600 text-sm font-bold uppercase tracking-widest hover:border-[#0a4275] hover:text-[#0a4275] transition-all duration-300 rounded-sm shadow-sm">
                <svg className="w-5 h-5 mr-3 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MagazineFeature;