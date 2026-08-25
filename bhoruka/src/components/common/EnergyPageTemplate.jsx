import React, { useRef } from 'react';

const EnergyPageTemplate = ({ hero, about, stats, benefits, projects, energyName }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.bgImage})` }} 
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl text-[#0a4275] mb-6 font-bold tracking-tight">
                {about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {about.paragraph1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {about.paragraph2}
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl relative h-80 md:h-[400px]">
                <img 
                  src={about.image} 
                  alt={`About ${energyName} energy`} 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT CAROUSEL SECTION */}
      <section className="py-20 bg-slate-50"> 
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="mb-16">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">Our Portfolio</p>
            <h2 className="text-4xl font-bold text-[#0a4275] tracking-tight mb-6">
              Operational {energyName.charAt(0).toUpperCase() + energyName.slice(1)} Projects
            </h2>
            <div className="w-20 h-1 bg-blue-500"></div>
          </div>

          <div className="relative group">
            {/* Left Arrow */}
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white p-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 text-[#0a4275] hover:bg-blue-50 hover:scale-110 transition-all focus:outline-none hidden md:flex"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Scrollable Track */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
              
              {projects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col shrink-0 snap-start w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
                  <div className="h-56 w-full overflow-hidden bg-gray-100">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider mb-3 space-x-2">
                      <span className="text-blue-600">{project.capacity}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-500 text-truncate">{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a4275] mb-3">{project.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                    <div className="mt-auto">
                      <button className="flex items-center text-[#0a4275] font-semibold text-sm hover:text-blue-600 transition-colors group">
                        View project details 
                        <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white p-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 text-[#0a4275] hover:bg-blue-50 hover:scale-110 transition-all focus:outline-none hidden md:flex"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-24">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">Our Track Record</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a4275] tracking-tight">
              Proven capacity. Measurable impact.
            </h2>
            <div className="w-20 h-1 bg-blue-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-3">
                  {stat.icon}
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{stat.tag}</p>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-[#0a4275] mb-4">{stat.value}</h2>
                <h3 className="text-2xl text-[#0a4275] mb-4">{stat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-24">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">Your Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a4275] tracking-tight">
              Sustainable. Reliable. Efficient.
            </h2>
            <div className="w-20 h-1 bg-blue-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-[#0070c0] mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl text-[#0a4275] font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default EnergyPageTemplate;