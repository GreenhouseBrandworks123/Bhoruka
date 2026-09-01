import React from 'react';

const EnergyStats = ({ stats }) => {
  if (!stats) return null;
  return (
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
  );
};

export default EnergyStats;