import React from 'react';

const CompanyPageLayout = ({ title, subtitle, bgImage, children }) => {
  return (
    <div className="w-full font-sans overflow-x-hidden bg-white">
      
      {/* Reusable Hero Banner */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage || '/default-bg.jpg'})` }}
        />
        
        {/* Deep Corporate Blue Overlay */}
        <div className="absolute inset-0 bg-[#0a4275]/85 mix-blend-multiply"></div>
        
        {/* Standardized Header Text */}
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-blue-100 font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Dynamic Page Content Injected Here */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {children}
      </div>
      
    </div>
  );
};

export default CompanyPageLayout;