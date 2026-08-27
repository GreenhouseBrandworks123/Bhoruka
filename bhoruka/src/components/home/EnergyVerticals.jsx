import React from 'react';
import { Link } from 'react-router-dom';

// Import your images 
import hydroImg from '../../assets/images/hydro-hero.jpg'; 
import solarImg from '../../assets/images/solar-des.webp'; 
import windImg from '../../assets/wind-imges/wind-bg.jpeg'; 

const EnergyVerticals = () => {
  const verticals = [
    {
      id: "hydro",
      title: "Hydro Power",
      description: "Run-of-the-river and mini-hydel schemes maximizing continuous energy output with minimal ecological displacement.",
      image: hydroImg,
      link: "/hydro",
      // Tailwind classes passed as full strings for dynamic rendering
      accentLine: "bg-blue-600",
      textHover: "group-hover:text-blue-600",
      iconHover: "group-hover:bg-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: "solar",
      title: "Solar Power",
      description: "Utility-scale photovoltaic parks and distributed generation systems engineered for resilient, high-yield performance.",
      image: solarImg,
      link: "/solar",
      accentLine: "bg-yellow-500",
      textHover: "group-hover:text-yellow-600",
      iconHover: "group-hover:bg-yellow-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: "wind",
      title: "Wind Power",
      description: "Advanced aerodynamic turbine arrays situated in high-yield corridors for steady baseload and peak generation.",
      image: windImg,
      link: "/wind",
      accentLine: "bg-teal-500",
      textHover: "group-hover:text-teal-600",
      iconHover: "group-hover:bg-teal-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
            Core Operations
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a4275] tracking-tight mb-6">
            Powering the Future
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Delivering clean, reliable, and scalable renewable energy across India through three dedicated technology verticals.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {verticals.map((vertical) => (
            <div key={vertical.id} className="group relative flex flex-col items-center">
              
              {/* Image Container */}
              <div className="relative w-full h-80 overflow-hidden rounded-sm shadow-md">
                <img 
                  src={vertical.image} 
                  alt={vertical.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000 ease-in-out"
                />
                {/* Dark overlay that fades slightly on hover */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
              </div>
              
              {/* Overlapping Floating Text Box */}
              <div className="relative -mt-20 w-[90%] bg-white p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 rounded-sm z-10 flex flex-col h-72">
                
                {/* Animated Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 ${vertical.accentLine} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>

                {/* Title & Icon Row */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold text-slate-800 transition-colors duration-300 ${vertical.textHover}`}>
                    {vertical.title}
                  </h3>
                  
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 ${vertical.iconHover} group-hover:text-white transition-all duration-500 shadow-sm`}>
                    {vertical.icon}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                  {vertical.description}
                </p>
                
                {/* Call to Action Link */}
                <Link 
                  to={vertical.link}
                  className={`inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-400 ${vertical.textHover} transition-colors duration-300 mt-auto`}
                >
                  Explore Operations
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EnergyVerticals;