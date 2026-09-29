import React, { useState } from 'react';
import { factSheetData } from '../../data/factSheetData';

export default function CSRFactsheet() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate high-level summary metrics dynamically
  const totalBeneficiaries = factSheetData.reduce((acc, cat) => {
    return (
      acc +
      cat.items.reduce((itemAcc, item) => {
        const val = parseInt(item.beneficiaries.replace(/,/g, ''), 10) || 0;
        return itemAcc + val;
      }, 0)
    );
  }, 0);

  const totalPrograms = factSheetData.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );

  // Filter categories & items based on active tab and search term
  const filteredCategories = factSheetData
    .map((categoryGroup) => {
      if (activeTab !== 'all' && categoryGroup.id !== activeTab) {
        return null;
      }

      const matchingItems = categoryGroup.items.filter((item) => {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesSchemes = item.schemes.some((scheme) =>
          scheme.toLowerCase().includes(query)
        );
        return matchesTitle || matchesSchemes;
      });

      if (matchingItems.length === 0) return null;

      return {
        ...categoryGroup,
        items: matchingItems,
      };
    })
    .filter(Boolean);

  return (
    <div className="w-full bg-white text-slate-900 font-sans antialiased selection:bg-[#0B4B94] selection:text-white">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO / HEADER SECTION (With Unsplash Visual)       */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Metrics */}
            <div className="lg:col-span-7">
              {/* Architectural Eyebrow */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-1 bg-[#0B4B94]"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase">
                  CSR Factsheet & Operational Report
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                MEASURABLE IMPACT.
                <br />
                STRUCTURAL CHANGE.
              </h1>

              <p className="text-sm lg:text-base text-slate-600 font-normal leading-relaxed mb-10">
                Comprehensive data metrics detailing social interventions,
                educational footprint, healthcare delivery, and community
                empowerment performance indicators across all targeted operational
                regions.
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div className="relative pl-5 border-l-2 border-[#0B4B94]">
                  <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {totalBeneficiaries.toLocaleString()}+
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mt-1">
                    Total Beneficiaries
                  </div>
                </div>
                <div className="relative pl-5 border-l-2 border-[#0B4B94]">
                  <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {totalPrograms}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mt-1">
                    Core Initiatives
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 relative pl-5 border-l-2 border-[#0B4B94]">
                  <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    100%
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mt-1">
                    Peak Success Metric
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Unsplash Feature Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative p-2 bg-white border border-slate-200 shadow-xl">
                <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-0 z-20"></div>
                <div className="h-80 lg:h-[420px] w-full relative overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
                    alt="Community Development Impact"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent p-6 pt-12">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase block">
                      Field Execution
                    </span>
                    <p className="text-xs font-bold text-white tracking-wider uppercase mt-1">
                      Direct Interventions Across Rural Sectors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. FILTER & CONTROLS TOOLBAR                         */}
      {/* ---------------------------------------------------- */}
      <section className="sticky top-0 z-30 w-full bg-slate-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Sector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-[#0B4B94] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                All Sectors
              </button>
              {factSheetData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === cat.id
                      ? 'bg-[#0B4B94] text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="SEARCH SCHEMES OR TARGETS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-bold tracking-wider uppercase px-4 py-3 pl-10 focus:outline-none focus:border-[#0B4B94] placeholder:text-slate-400"
              />
              <svg
                className="w-4 h-4 text-slate-500 absolute left-3 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-900 font-bold uppercase"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. FACTSHEET DATA DISPLAY GRID                       */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
          {filteredCategories.length === 0 ? (
            <div className="bg-white border border-slate-200 p-12 text-center shadow-sm">
              <div className="w-8 h-1 bg-[#0B4B94] mx-auto mb-4"></div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase mb-2">
                Query Result
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900">
                No matching records found
              </h3>
              <p className="text-slate-600 mt-2 text-sm">
                Try adjusting your search criteria or clearing selected sector filters.
              </p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchTerm('');
                }}
                className="mt-6 inline-flex items-center px-8 py-4 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] uppercase tracking-widest transition-all duration-300"
              >
                Reset Controls
              </button>
            </div>
          ) : (
            filteredCategories.map((group) => (
              <div key={group.id} className="space-y-8">
                {/* Section Title */}
                <div className="border-b-2 border-slate-900 pb-4 flex items-end justify-between">
                  <div>
                    <div className="w-8 h-1 bg-[#0B4B94] mb-3"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#0B4B94] uppercase">
                      Sector Breakdown
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 uppercase tracking-tight mt-1">
                      {group.category}
                    </h2>
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase hidden sm:block">
                    {group.items.length} Target Segment
                    {group.items.length > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                    >
                      {/* Vertical Accent Line (Left Edge) */}
                      <div className="w-1.5 h-full bg-[#0B4B94] absolute top-0 left-0 z-10"></div>

                      <div>
                        {/* Sector Card Image Header */}
                        <div className="relative h-40 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                          <img
                            src={
                              group.id === 'education'
                                ? 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600'
                                : group.id === 'healthcare'
                                ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
                                : 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600'
                            }
                            alt={item.title}
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-200 px-2.5 py-1 text-[9px] font-bold tracking-widest text-slate-900 uppercase">
                            {group.category}
                          </div>
                        </div>

                        {/* Title Header */}
                        <div className="p-6 pb-4 pl-8">
                          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase block mb-1">
                            Target Group
                          </span>
                          <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight group-hover:text-[#0B4B94] transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        {/* Schemes List */}
                        <div className="p-6 pt-0 pl-8 mb-4">
                          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase block mb-3 border-b border-slate-100 pb-1">
                            Implemented Schemes
                          </span>
                          <ul className="space-y-2.5">
                            {item.schemes.map((scheme, sIdx) => (
                              <li
                                key={sIdx}
                                className="text-xs font-medium text-slate-600 leading-relaxed flex items-start"
                              >
                                <span className="inline-block w-1.5 h-1.5 bg-[#0B4B94] mt-1.5 mr-2.5 shrink-0"></span>
                                <span>{scheme}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Performance Indicators */}
                      <div className="mt-auto border-t border-slate-100 bg-slate-50 p-6 pl-8 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase block">
                            Beneficiaries
                          </span>
                          <span className="text-lg lg:text-xl font-extrabold text-slate-900 mt-0.5 block">
                            {item.beneficiaries}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase block">
                            Success Metric
                          </span>
                          <span className="text-lg lg:text-xl font-extrabold text-[#0B4B94] mt-0.5 block">
                            {item.success}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}