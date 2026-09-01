import React from 'react';

const EnergyAbout = ({ about, energyName }) => {
  if (!about) return null;
  return (
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
  );
};

export default EnergyAbout;