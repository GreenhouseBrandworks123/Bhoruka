import React, { useRef } from 'react';

const EnergyProjects = ({ projects, energyName }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!projects || projects.length === 0) return null;

  return (
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
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white p-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 text-[#0a4275] hover:bg-blue-50 hover:scale-110 transition-all focus:outline-none hidden md:flex"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

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
  );
};

export default EnergyProjects;