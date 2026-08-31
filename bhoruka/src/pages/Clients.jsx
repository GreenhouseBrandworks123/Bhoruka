import React from "react";
import clientsBanner from "../assets/images/hydro-hero.jpg";

const distributionCompanies = [
  "Bangalore Electricity Supply Co Ltd., Bangalore",
  "Mangalore Electricity Supply Co Ltd., Mangalore",
  "Gulbarga Electricity Supply Co Ltd., Gulbarga",
  "Hubli Electricity Supply Co Ltd., Hubli",
  "Chamundeshwari Electricity Supply Corp. Ltd, Mysore",
  "Jodhpur Vidyut Vitran Nigam Ltd., Jaipur",
];

const industries = [
  "Bharath Earth Movers Ltd, KGF",
  "Bharath Earth Movers Ltd, Mysore",
  "Bharath Earth Movers Ltd, Bangalore",
  "Vignyan Industries Ltd., Tanikere",
  "Bhoruka Gases Ltd, Bangalore",
  "Bhoruka Aluminium Ltd, Mysore",
  "Wipro Ltd, Bangalore",
  "Sri Krishna Spinning & Weaving Mills Pvt Ltd, Bangalore",
  "Maris Spinners Ltd, Hunsur",
  "Cipla Ltd, Bangalore",
  "Jindal Aluminium Ltd, Bangalore",
  "Bharath Electronics Ltd, Bangalore",
  "Vijaya Steels Ltd, Bangalore",
  "Delhi Automotive Systems (P) Ltd",
  "H R Johnson India Ltd",
  "Hindustan Aeronautics Ltd",
  "Goetze India Ltd",
];

export default function Clients() {
  return (
    <main className="bg-white text-[#17395f]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative h-[300px] overflow-hidden sm:h-[340px]">

        <img
          src={clientsBanner}
          alt="Bhoruka Power"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#062c52]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-12">

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-200">
              Bhoruka Power
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Our clients
            </h1>

            <div className="mt-5 h-[2px] w-20 bg-blue-400" />

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B4B94]">
                Trusted Partnerships
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17395f] sm:text-4xl">
                Powering businesses
                <br />
                through reliable energy
              </h2>
            </div>

            <div>
              <p className="text-[17px] leading-8 text-[#526b86]">
                Bhoruka Power has built lasting relationships with leading
                organizations across the power distribution and industrial
                sectors. Our diverse client base reflects our commitment to
                dependable energy solutions and long-term partnerships.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATE DISTRIBUTION COMPANIES
      ====================================================== */}
      <section className="bg-[#f4f6f8]">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">

          {/* Section Heading */}
          <div className="mb-10 flex items-end justify-between border-b border-slate-300 pb-5">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B4B94]">
                Power Sector
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#17395f]">
                State Distribution Companies
              </h2>

            </div>

            <span className="hidden text-5xl font-bold text-slate-200 sm:block">
              01
            </span>

          </div>


          {/* Companies */}
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">

            {distributionCompanies.map((company, index) => (

              <div
                key={company}
                className="group flex items-center gap-5 border-b border-slate-200 py-5"
              >

                <span className="text-sm font-semibold text-[#0B4B94]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[16px] leading-6 text-[#405a76] transition-colors duration-200 group-hover:text-[#0B4B94]">
                  {company}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">

          {/* Section Heading */}
          <div className="mb-10 flex items-end justify-between border-b border-slate-200 pb-5">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B4B94]">
                Industrial Sector
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#17395f]">
                Industries
              </h2>

            </div>

            <span className="hidden text-5xl font-bold text-slate-100 sm:block">
              02
            </span>

          </div>


          {/* Industry List */}
          <div className="grid grid-cols-1 gap-x-14 md:grid-cols-2 lg:grid-cols-3">

            {industries.map((company, index) => (

              <div
                key={company}
                className="group flex min-h-[76px] items-center gap-4 border-b border-slate-200 py-4"
              >

                <span className="text-xs font-semibold text-[#0B4B94]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[15px] leading-6 text-[#405a76] transition-colors duration-200 group-hover:text-[#0B4B94]">
                  {company}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING SECTION
      ====================================================== */}
      <section className="bg-[#0B4B94]">

        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12">
 
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Our Commitment
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Strong partnerships. Reliable power.
              </h2>

            </div>

            <p className="max-w-xl text-[16px] leading-7 text-blue-100">
              We continue to partner with organizations that value
              dependable energy and a sustainable future.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}