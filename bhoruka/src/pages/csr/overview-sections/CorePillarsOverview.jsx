import React from 'react';
import { Link } from 'react-router-dom';

export default function CorePillarsOverview() {
  const pillars = [
    {
      title: 'Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      description: 'Sustainable development of the country is possible only through strong elementary education system. This means providing quality education in every part of the country especially in the remote corners that are totally neglected.',
      link: '/csr/education'
    },
    {
      title: 'Community',
      image: 'https://images.unsplash.com/photo-1593113514088-34f71a93e36e?auto=format&fit=crop&w=800&q=80',
      description: 'Socio-economic growth of the communities in the villages will bring national growth & prosperity. We take up comprehensive survey to find out economic condition, social status, health and education level & facilities available in the area.',
      link: '/csr/community'
    },
    {
      title: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      description: 'Health is yet another major concern of the rural people. Because of poor delivery system the govt\'s health schemes fail to reach the beneficiaries. Thus NGOs have greater role to play in creating healthy environment in the villages.',
      link: '/csr/health-environment'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Professional Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#0B4B94] uppercase mb-3">Our Core Initiatives</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Areas of Impact
          </h3>
          <div className="w-20 h-1 bg-[#0B4B94] mx-auto mt-6"></div>
        </div>

        {/* 3-Column Sharp Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            // Removed rounded classes, added relative positioning for the hover border
            <div 
              key={index} 
              className="bg-white shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              
              {/* Stylish Animated Bottom Border on Hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0B4B94] transition-all duration-500 group-hover:w-full"></div>

              {/* Full-bleed Sharp Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {pillar.description}
                </p>
                <Link 
                  to={pillar.link}
                  className="inline-flex items-center text-sm font-bold text-[#0B4B94] group-hover:text-blue-700 transition-colors mt-auto uppercase tracking-wide"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}