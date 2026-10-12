
import React from 'react';
import { Link } from 'react-router-dom';

import galleryImg1 from '../../../assets/images/csr-gallery/csr-gallery-1.webp';
import galleryImg2 from '../../../assets/images/csr-gallery/csr-gallery-2.webp';
import galleryImg3 from '../../../assets/images/csr-gallery/csr-gallery-3.webp';
import galleryImg4 from '../../../assets/images/csr-gallery/csr-gallery-4.webp';

export default function GalleryOverview() {
  const images = [galleryImg1, galleryImg2, galleryImg3, galleryImg4];

  const impactAreas = [
    'Education',
    'Healthcare',
    'Community Development',
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row border-t border-slate-200">

      {/* Left Content Panel */}
      <div className="w-full lg:w-1/2 bg-white py-20 px-8 sm:px-16 lg:px-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">

        <div className="max-w-2xl ml-auto lg:mr-8 xl:mr-16">

          {/* Section Label */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-1 bg-[#0B4B94]" />

            <h3 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase">
              Our Social Impact
            </h3>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Our Impact at a Glance
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Our commitment to social responsibility goes beyond clean energy.
            Through education, healthcare and community development, we work
            towards improving lives and supporting sustainable growth in the
            communities around us.
          </p>

          {/* Impact Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {impactAreas.map((area) => (
              <div
                key={area}
                className="border-l-2 border-[#0B4B94] pl-3 py-2"
              >
                <p className="text-sm font-bold text-slate-800 leading-snug">
                  {area}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Link
              to="/csr-organization"
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] transition-all duration-300 uppercase tracking-widest shadow-sm"
            >
              Explore Our CSR Initiatives

              <svg
                className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Right Image Grid — Preserves Existing Design */}
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
              alt={`Bhoruka CSR initiative ${index + 1}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
