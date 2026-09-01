import React from 'react';

const EnergyBenefits = ({ benefits }) => {
  if (!benefits) return null;
  return (
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
  );
};

export default EnergyBenefits;