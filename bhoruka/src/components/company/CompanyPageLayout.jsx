import React from 'react';

const CompanyPageLayout = ({ title, subtitle, bgImage, children }) => {
  return (
    <div className="w-full font-sans bg-white text-slate-800">
      
      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[45vh] min-h-[380px] flex items-center overflow-hidden bg-slate-900">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage || '/default-bg.jpg'})` }} 
        />
        
        {/* Brand Corporate Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a4275] via-[#0a4275]/85 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-sky-400 uppercase mb-3">
              Company
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <div className="w-16 h-1 bg-blue-500 mb-6"></div>
            
            {subtitle && (
              <p className="text-base md:text-lg text-slate-200 font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        {children}
      </main>

    </div>
  );
};

export default CompanyPageLayout;