import React from 'react';
import { ArrowRight, IndianRupee, Users, TrendingUp } from 'lucide-react';
import { communityDevelopmentData as data } from '../../data/communityDevelopmentData';

// IMAGES
import image1 from '../../assets/images/csr-community/1.webp';
import image2 from '../../assets/images/csr-community/2.webp';
import image3 from '../../assets/images/csr-community/3.webp';

export default function CsrCommunity() {
  return (
    <div className="w-full bg-white font-sans text-slate-900 selection:bg-[#0B4B94] selection:text-white">
      
      {/* =========================================================================
          SECTION 1: OVERVIEW (IMAGE 1 LEFT, TEXT RIGHT)
      ========================================================================= */}
      <section className="w-full bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Image Box - Left */}
            <div className="lg:w-7/12 w-full">
              <img 
                src={image1} 
                alt="Community Development" 
                className="w-full h-full min-h-[400px] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </div>

            {/* Overlapping Text Box - Right */}
            <div className="lg:w-6/12 w-full bg-white p-10 lg:p-16 shadow-2xl z-10 lg:ml-[-8%] my-auto border border-slate-100 relative mt-10 lg:mt-0">
              <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-0"></div>
              
              <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase block mb-4">
                {data.overview.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
                {data.overview.title}
              </h2>
              <div className="w-8 h-1 bg-[#0B4B94] mb-8"></div>
              
              <p className="text-lg font-bold text-slate-800 leading-relaxed mb-6">
                {data.overview.description}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {data.overview.activitiesIntro}
              </p>

              <ul className="space-y-3">
                {data.overview.activitiesList.map((activity, index) => (
                  <li key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-[#0B4B94] mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-slate-700 font-medium group-hover:text-[#0B4B94] transition-colors duration-300">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SHG IMPACT (TEXT LEFT, IMAGE 2 RIGHT)
      ========================================================================= */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Overlapping Text Box - Left */}
            <div className="lg:w-6/12 w-full bg-white p-10 lg:p-16 shadow-2xl z-10 lg:mr-[-8%] my-auto border border-slate-100 relative order-2 lg:order-1 mt-10 lg:mt-0">
              <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase block mb-4">
                {data.shgImpact.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
                {data.shgImpact.title}
              </h2>
              <div className="w-8 h-1 bg-[#0B4B94] mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-10">
                {data.shgImpact.description}
              </p>

              <div className="flex gap-8 mb-10 border-t border-slate-200 pt-8">
                {data.shgImpact.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-extrabold text-[#0B4B94] tracking-tighter mb-2">{stat.value}</div>
                    <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              <h4 className="text-xs font-bold tracking-[0.2em] text-slate-900 uppercase mb-4">Skill Training Imparted</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.shgImpact.skillsList.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-[#0B4B94] mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Box - Right */}
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <img 
                src={image2} 
                alt="SHG Impact & Training" 
                className="w-full h-full min-h-[400px] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: RURAL EXCELLENCE (IMAGE 3 LEFT, TEXT RIGHT)
      ========================================================================= */}
      <section className="w-full bg-slate-50 py-16 lg:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Image Box - Left */}
            <div className="lg:w-7/12 w-full relative">
              <img 
                src={image3} 
                alt="Center for Rural Excellence" 
                className="w-full h-full min-h-[400px] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
              <div className="absolute bottom-0 left-0 bg-[#0B4B94] p-8 flex items-center gap-4">
                 <Users className="w-10 h-10 text-white" />
                 <div>
                   <div className="text-3xl font-extrabold text-white">{data.ruralExcellence.familiesInvolved}</div>
                   <div className="text-xs font-bold tracking-widest text-blue-200 uppercase">Families Involved</div>
                 </div>
              </div>
            </div>

            {/* Overlapping Text Box - Right */}
            <div className="lg:w-6/12 w-full bg-white p-10 lg:p-16 shadow-2xl z-10 lg:ml-[-8%] my-auto border border-slate-100 relative mt-10 lg:mt-0">
              <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-0"></div>
              
              <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase block mb-4">
                {data.ruralExcellence.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                {data.ruralExcellence.title}
              </h2>
              <h3 className="text-lg font-bold text-[#0B4B94] mb-8">
                {data.ruralExcellence.subtitle}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                {data.ruralExcellence.description}
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                {data.ruralExcellence.trainingAreas}
              </p>

              <div className="inline-flex items-center px-4 py-2 border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 tracking-wider">
                LOCATION: {data.ruralExcellence.location}
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </div>
  );
}