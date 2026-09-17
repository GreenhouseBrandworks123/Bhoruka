import React from 'react';
import { Link } from 'react-router-dom';

// 1. IMPORT YOUR LOCAL COVER IMAGES HERE (From src/assets/newsletters-images)
import cover1 from '../../../assets/newsletters-images/newsletter-oct-2011.jpg';
import cover2 from '../../../assets/newsletters-images/newsletter-jul-2011.jpg';
import cover3 from '../../../assets/newsletters-images/newsletter-apr-2011.jpg';
import cover4 from '../../../assets/newsletters-images/newsletter-jan-2011.jpg';

export default function NewslettersOverview() {
  
  // 2. LINK YOUR DATA (Images use the imported variables, PDFs use the public path)
  const newsletters = [
    {
      title: "Green Power",
      date: "October 2011",
      cover: cover1, 
      file: "/pdfs/green-power-oct-2011.pdf" // Points directly to the public folder
    },
    {
      title: "Green Power",
      date: "July 2011",
      cover: cover2,
      file: "/pdfs/green-power-jul-2011.pdf" 
    },
    {
      title: "Bhoruka Impact",
      date: "April 2011",
      cover: cover3,
      file: "/pdfs/bhoruka-apr-2011.pdf"
    },
    {
      title: "Bhoruka Impact",
      date: "January 2011",
      cover: cover4,
      file: "/pdfs/bhoruka-jan-2011.pdf"
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-[#0B4B94]"></div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase">
              Publications
            </h3>
            <div className="w-8 h-[2px] bg-[#0B4B94]"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight max-w-2xl">
            CSR Newsletters
          </h2>
        </div>

        {/* 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {newsletters.map((item, index) => (
            // Sharp bordered card container
            <div key={index} className="flex flex-col bg-white border border-slate-200 group">
              
              {/* Cover Image Wrapper - Grayscale cinematic effect */}
              <div className="relative h-[350px] lg:h-[400px] w-full overflow-hidden border-b border-slate-200 bg-slate-100 p-0">
                <img 
                  src={item.cover} 
                  alt={`${item.title} Newsletter`} 
                  className="w-full h-full object-cover shadow-sm grayscale-[15%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Text & Download Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-extrabold text-slate-900 mb-1 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm font-semibold text-[#0B4B94] tracking-wider mb-6">
                  {item.date}
                </p>

                {/* Secondary Sharp Button (Specifically for file downloads) */}
                <a 
                  href={item.file} 
                  download
                  className="mt-auto flex items-center justify-center w-full py-3 border border-slate-200 bg-slate-50 text-slate-900 hover:bg-[#0B4B94] hover:text-white hover:border-[#0B4B94] transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                >
                  Download PDF
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Main Section CTA */}
        <div className="flex justify-center border-t border-slate-200 pt-16">
          <Link 
            to="/csr/newsletters" 
            className="group inline-flex items-center justify-center px-10 py-4 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] transition-all duration-300 uppercase tracking-widest shadow-sm"
          >
            View All Newsletters
            <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}