import React, { useState, useEffect, useRef } from 'react';

// --- MINIMAL ANIMATION COMPONENT ---
// This handles the numbers dynamically increasing from 0 to the target
const AnimatedNumber = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Detects when the user scrolls to this exact section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const duration = 2500; // 2.5 seconds duration for a satisfying count-up effect

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth slowdown at the end of the counting
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-black text-[#0a4275] tracking-tight mb-3">
      {count}
      <span className="text-blue-600">{suffix}</span>
    </div>
  );
};

// --- MAIN COMPONENT ---
const StatsCounter = () => {
  const statsData = [
    {
      id: 1,
      endValue: 40,
      suffix: "+",
      label: "Years of Excellence",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      endValue: 150,
      suffix: "+",
      label: "Installed Capacity (MW)",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      endValue: 20,
      suffix: "+",
      label: "Operational Facilities",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 4,
      endValue: 2,
      suffix: "M+",
      label: "Tons of CO2 Mitigated",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      
      {/* Very subtle architectural dot pattern for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0a4275 1.5px, transparent 0)', backgroundSize: '48px 48px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ================= NEW TITLE SECTION ================= */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
            Our Impact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a4275] tracking-tight mb-6">
            Bhoruka by the Numbers
          </h2>
          <div className="w-20 h-1.5 bg-blue-500"></div>
        </div>

        {/* ================= DATA GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {statsData.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center text-center group ${index !== 0 ? 'pt-12 md:pt-0' : ''}`}
            >
              {/* Soft Icon Wrapper */}
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-500 shadow-sm">
                {stat.icon}
              </div>
              
              {/* The Animated Number (Increases from 0) */}
              <AnimatedNumber end={stat.endValue} suffix={stat.suffix} />
              
              {/* Label */}
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsCounter;