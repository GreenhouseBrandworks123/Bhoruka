// src/pages/csr/overview-sections/CommitmentIntro.jsx
import React from 'react';
import commitmentImg from '../../../assets/images/csr/csr-commitment.webp';




export default function CommitmentIntro() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Frame: Sharp, bordered container holding both text and image */}
        <div className="flex flex-col lg:flex-row items-stretch border border-slate-200 shadow-sm bg-white">
          
          {/* Text Side (Left) */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
            {/* Subtle top accent line to add structure */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0B4B94]"></div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Our Commitment <br className="hidden lg:block"/> to Society
            </h2>
            
            {/* Impactful Lead-in Statement */}
            <h4 className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-6">
              For decades, Bhoruka has operated with a simple yet powerful philosophy: corporate growth and social responsibility must go hand in hand.
            </h4>
            
            <div className="w-12 h-1 bg-slate-300 mb-6"></div>
            
            {/* Standard Description */}
            <p className="text-base text-slate-600 leading-relaxed">
              Our Corporate Social Responsibility (CSR) wing focuses on driving tangible, sustainable change in the regions where we operate. From advancing rural education and delivering essential healthcare, to spearheading environmental conservation and grassroots community development, we are dedicated to creating a more equitable future.
            </p>
          </div>

          {/* Image Side (Right) - Sharp edges, full bleed */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative border-t lg:border-t-0 lg:border-l border-slate-200">
            {/* Replace this src with your actual image path when ready! */}
            <img 
              src={commitmentImg} 
              alt="Bhoruka Commitment to Society"
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
}