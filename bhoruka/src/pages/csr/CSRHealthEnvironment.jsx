import React from 'react';

export default function CSRHealthEnvironment({
  breadcrumb = "CORPORATE SOCIAL RESPONSIBILITY / HEALTH & ENVIRONMENT",
  pageTitle = "HEALTH & ENVIRONMENT",
  heroSection = {
    eyebrow: "HEALTH & ENVIRONMENTAL INITIATIVES",
    title: "Bhoruka Netralaya & Healthcare Outreach",
    description: "Bhoruka Netralaya was opened on 17th April 2008. The first batch of 22 patients picked up from camp underwent cataract surgery. Health is a major concern of rural communities where inadequate delivery systems limit access to government health schemes, making NGO intervention critical.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
  },
  initiativesSection = {
    eyebrow: "OUR ACTION PLAN",
    title: "Core Initiatives",
    cards: [
      {
        tag: "MEDICAL CAMPS",
        title: "Periodical Health Check-ups",
        description: "Bhoruka conducts periodical health check-up camps including eye check-ups, cancer detection, gynecology, pediatric care, and general health screenings, referring patients to specialty hospitals.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
      },
      {
        tag: "ECOLOGY & SANITATION",
        title: "Smokeless Choolas & Village Adoption",
        description: "In Hemmige, villagers receive smokeless choolas and training in health and hygiene with Zilla Panchayat support. Nilsoge village has been adopted as a model village for sanitation and hygiene.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
      },
      {
        tag: "EYE HOSPITAL",
        title: "Gulburga Eye Hospital Project",
        description: "An ambitious eye hospital project in Gulburga by Vikassanum Education and Welfare Trust, designed to scale from 2,000 to 10,000 annual cataract and specialized operations.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  impactSection = {
    eyebrow: "MEASURABLE IMPACT",
    title: "Key Achievements",
    metrics: [
      {
        value: "2,000+",
        label: "INITIAL CAPACITY",
        results: "Annual cataract operations targeted at the Gulburga Eye Hospital facility."
      },
      {
        value: "10,000",
        label: "SCALING TARGET",
        results: "Projected annual surgeries including complex procedures within five years."
      },
      {
        value: "22",
        label: "FIRST BATCH",
        results: "Initial group of camp patients successfully treated with cataract surgery."
      },
      {
        value: "100%",
        label: "COMMUNITY COMMITMENT",
        results: "Dedicated outreach across rural clusters for preventive health and hygiene."
      }
    ]
  }
}) {
  return (
    <div className="w-full bg-white font-sans text-slate-700 antialiased selection:bg-slate-900 selection:text-white">
      
      {/* BREADCRUMB & PAGE TITLE BANNER */}
      <section className="w-full bg-white pt-8 pb-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">
            {breadcrumb}
          </p>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {pageTitle}
          </h1>
          <div className="w-10 h-1 bg-slate-900 mt-3"></div>
        </div>
      </section>

      {/* HERO SECTION: SPLIT LAYOUT */}
      <section className="w-full bg-white py-10 lg:py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase block mb-2">
                {heroSection.eyebrow}
              </span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                {heroSection.title}
              </h2>
              <div className="w-8 h-1 bg-slate-900 mb-4"></div>
              <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                {heroSection.description}
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 h-[300px] lg:h-[360px] relative border border-slate-200 overflow-hidden">
              <img 
                src={heroSection.image} 
                alt="Bhoruka Netralaya and Healthcare" 
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CORE INITIATIVES SECTION */}
      <section className="w-full bg-slate-50 py-10 lg:py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase block mb-2">
              {initiativesSection.eyebrow}
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
              {initiativesSection.title}
            </h2>
            <div className="w-8 h-1 bg-slate-900 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiativesSection.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 flex flex-col relative group hover:border-slate-900 transition-all duration-300"
              >
                <div className="w-1.5 h-full bg-slate-900 absolute top-0 left-0"></div>
                
                {/* Card Image */}
                <div className="h-48 w-full overflow-hidden border-b border-slate-200">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {card.title}
                  </h3>
                  <div className="w-6 h-0.5 bg-slate-900 mb-3"></div>
                  <p className="text-slate-600 text-xs lg:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* KEY ACHIEVEMENTS SECTION */}
      <section className="w-full bg-white py-10 lg:py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase block mb-2">
              {impactSection.eyebrow}
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
              {impactSection.title}
            </h2>
            <div className="w-8 h-1 bg-slate-900 mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactSection.metrics.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 p-6 relative"
              >
                <div className="w-1.5 h-full bg-slate-900 absolute top-0 left-0"></div>
                <div className="text-2xl lg:text-3xl font-black text-slate-900 mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {item.label}
                </div>
                <div className="w-6 h-0.5 bg-slate-900 mb-2"></div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.results}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BACK TO OVERVIEW BAR */}
      <section className="w-full bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <a 
            href="/csr-overview" 
            className="group inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 uppercase tracking-widest transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>Back to CSR Overview</span>
          </a>
        </div>
      </section>

    </div>
  );
}