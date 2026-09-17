import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT YOUR LOCAL BHORUKA IMAGES HERE
import galleryImg1 from '../../../assets/images/csr-gallery/csr-gallery-1.webp';
import galleryImg2 from '../../../assets/images/csr-gallery/csr-gallery-2.webp';
import galleryImg3 from '../../../assets/images/csr-gallery/csr-gallery-3.webp';
import galleryImg4 from '../../../assets/images/csr-gallery/csr-gallery-4.webp';
export default function GalleryOverview() {
  const images = [galleryImg1, galleryImg2, galleryImg3, galleryImg4];

  return (
    // True edge-to-edge container (no max-width), mirroring the FactSheet design
    <section className="w-full flex flex-col lg:flex-row border-t border-slate-200">
      
      {/* 
        Content Side (Left) - Spans exactly 50% of the screen width on desktop.
        Alternating to bg-white to contrast with the FactSheet's bg-slate-50.
      */}
      <div className="w-full lg:w-1/2 bg-white py-20 px-8 sm:px-16 lg:px-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
        
        {/* Constrain the text width inside the half-screen so it stays highly readable */}
        <div className="max-w-2xl ml-auto lg:mr-8 xl:mr-16">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-1 bg-[#0B4B94]"></div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase">
              Visual Impact
            </h3>
          </div>
          
          <h2 className="text-3xl lg:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Moments of Change
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            A glimpse into our initiatives on the ground. See the faces, communities, and real-world impact of our dedication to inclusive growth and sustainable development across all our operating regions.
          </p>

          {/* Locked-in Standard CTA Button */}
          <div>
            <Link 
              to="/csr/gallery" 
              className="group inline-flex items-center justify-center px-10 py-4 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] transition-all duration-300 uppercase tracking-widest shadow-sm"
            >
              Explore Full Gallery
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* 
        Image Grid Side (Right) - Spans exactly 50% of the screen width on desktop.
        Stretches to the absolute right edge of the browser screen.
      */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-0 bg-slate-100">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`relative h-[250px] lg:h-[350px] xl:h-[400px] overflow-hidden group 
              ${index === 0 ? 'border-b border-r border-slate-200' : ''}
              ${index === 1 ? 'border-b border-slate-200' : ''}
              ${index === 2 ? 'border-r border-slate-200' : ''}
            `}
          >
            <img 
              src={src} 
              alt={`Bhoruka CSR Impact ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

