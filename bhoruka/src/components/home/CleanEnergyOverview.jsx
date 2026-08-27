import React from 'react';
import { Link } from 'react-router-dom';

// We will use your existing hydro image as a beautiful placeholder for the legacy section.
import legacyImage from '../../assets/images/hydro-des.jpg'; 

const CleanEnergyOverview = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Subtle Architectural Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0a4275 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual/Image Container */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1 relative">
            
            {/* Decorative Offset Backdrop (Creates a premium frame effect) */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-slate-100 rounded-sm z-0 hidden md:block"></div>
            
            <div className="relative rounded-sm overflow-hidden shadow-xl h-80 md:h-[500px] z-10 group">
              <img 
                src={legacyImage}
                alt="Bhoruka Power pioneering clean energy" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-1000 ease-out"
              />
              
              {/* Premium color overlay that intensifies on hover */}
              <div className="absolute inset-0 bg-[#0a4275]/10 group-hover:bg-[#0a4275]/20 mix-blend-multiply transition-colors duration-700"></div>
              
              {/* Floating Certification Badge (Fades in on hover) */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-4 rounded-sm shadow-2xl flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Certified Excellence</p>
                  <p className="text-sm font-bold text-[#0a4275]">ISO 9001 • 14001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center">
            
            {/* Elegant Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-blue-500"></div>
              <p className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
                Est. 1986
              </p>
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-[#0a4275] mb-8 font-extrabold tracking-tight leading-[1.15]">
              Pioneering India's Private Renewable Sector
            </h2>
            
            {/* Indented Key Highlight Paragraph */}
            <div className="relative pl-6 mb-8 border-l-2 border-slate-200">
              <p className="text-xl text-slate-800 leading-relaxed font-medium">
                Bhoruka Power Corporation Limited (BPCL) is the first company in the Indian private sector to successfully commission a hydro-power station in the post-independence era.
              </p>
            </div>
            
            <p className="text-base lg:text-lg text-slate-600 mb-10 leading-relaxed font-light">
              Today, as an ISO 9001, 14001, and OHSAS 18001 certified organization, we have grown into a world-class leader in the renewable energy space. From pioneering run-of-the-river mini-hydel projects to developing large-scale solar parks and high-yield wind corridors, our 40+ year journey is defined by a unique mix of engineering intellect, deep industry experience, and an unwavering commitment to a carbon-free future.
            </p>

            {/* Premium Call to Action */}
            <div>
              <Link 
                to="/about"
                className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a4275] text-white text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-sm shadow-md hover:shadow-xl"
              >
                <span>Read Our Story</span>
                {/* Expanding accent line inside the button */}
                <span className="w-6 h-px bg-white/50 group-hover:bg-white group-hover:w-10 transition-all duration-300"></span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default CleanEnergyOverview;