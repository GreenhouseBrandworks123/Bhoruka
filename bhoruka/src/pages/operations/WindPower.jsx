import React from "react";
import bgImage from "../../assets/wind-imges/wind-bg.jpeg";

export default function WindPowerPro() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-slate-900">
      <section className="relative h-screen min-h-[650px] overflow-hidden">

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={bgImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/wind-turbine.mp4" type="video/mp4" />
        </video>

        {/* LIGHT WHITE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-12 flex items-end pb-16">
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-5">
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0B192C] tracking-tight leading-[0.95]">
              Wind Power
            </h1>

            <p className="mt-7 max-w-xl text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              Harnessing the power of wind to deliver reliable, sustainable,
              and clean energy across India.
            </p>

          </div>
        </div>

      </section>
    </main>
  );
}