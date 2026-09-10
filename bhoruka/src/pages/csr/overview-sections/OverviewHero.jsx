import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT YOUR WEBP HERO IMAGE
import mainHeroImg from '../../../assets/images/csr/csr-main-hero.webp';

export default function OverviewHero() {
  return (
    <section className="relative w-full h-[65vh] min-h-[500px] flex items-center overflow-hidden border-b border-slate-200">
      
      {/* Background Image & Neutral Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={mainHeroImg} 
          alt="Bhoruka CSR Overview" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent" />
      </div>

      {/* 
        UPDATED WRAPPER: 
        Removed the max-width constraint. It now spans the full width of the browser.
        Using px-6 to px-24 to give it a clean, professional margin off the exact left edge.
      */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 text-white">
        
        <div className="max-w-3xl">
          
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
            Corporate Social Responsibility
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            Driving Change,<br />Uplifting Communities.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed mb-10">
            For over three decades, our Corporate Social Responsibility initiatives have been at the heart of our mission. We are dedicated to creating a more equitable and sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-[#0B4B94] bg-white hover:bg-slate-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Explore Our Impact
            </button>
            <Link 
              to="/csr/factsheet" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-lg shadow-sm transition-all duration-200"
            >
              View Fact Sheet
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}