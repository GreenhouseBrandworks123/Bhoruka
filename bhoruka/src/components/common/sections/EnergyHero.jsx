import React from 'react';

const EnergyHero = ({ hero }) => {
  if (!hero) return null;
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        {hero.bgVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={hero.bgImage}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={hero.bgVideo} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.bgImage})` }} 
          />
        )}
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
  );
};

export default EnergyHero;