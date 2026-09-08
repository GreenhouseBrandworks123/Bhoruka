import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import hydroImage from "../assets/images/hydro-hero.jpg";
import solarImage from "../assets/images/solar-hero.avif";
import windImage from "../assets/images/wind.webp";
import madhavamantri from "../assets/images/madhavamantri.jpeg";
import rajankollur from "../assets/images/Rajankollur.jpg";
import shahapur from "../assets/images/shahapur.jpg";

export default function AboutUs() {
  return (
    <main className="bg-white text-slate-800">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative min-h-[520px] flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={hydroImage}
            alt="Bhoruka renewable energy"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#062d52]/95 via-[#0b4b94]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-24">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
              Bhoruka Power Corporation Limited
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Powering Progress
              <span className="block text-blue-200">
                Responsibly.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-blue-50 leading-8 max-w-2xl">
              Building a sustainable energy future through renewable power,
              engineering excellence and responsible development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/hydro"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-[#0B4B94] font-semibold hover:bg-blue-50 transition"
              >
                Explore Our Projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition"
              >
                Get in Touch
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative">

              <div className="absolute -left-5 -bottom-5 w-40 h-40 bg-blue-50 rounded-2xl -z-10" />

              <img
                src={madhavamantri}
                alt="Bhoruka Power project"
                className="w-full h-[430px] object-cover rounded-2xl shadow-xl"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">

                <div className="flex items-center gap-4">

                  <img
                    src={logo}
                    alt="Bhoruka Power"
                    className="w-20 h-14 object-contain"
                  />

                  <div>
                    <p className="text-sm text-slate-500">
                      Renewable Energy
                    </p>

                    <p className="font-semibold text-[#17395f]">
                      Engineering • Generation • Sustainability
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Content */}
            <div>

              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0B4B94]">
                About Bhoruka Power
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#17395f] leading-tight">
                Experience, engineering and renewable energy expertise.
              </h2>

              <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-600">

                <p>
                  Bhoruka Power Corporation Limited is a renewable energy
                  company with a strong presence in power generation and
                  renewable energy development.
                </p>

                <p>
                  The company established its position by taking an early
                  leadership role in small hydro power and has continued to
                  build capabilities across renewable energy technologies.
                </p>

                <p>
                  Bhoruka Power combines engineering knowledge, project
                  management capability and operational experience to develop
                  and operate reliable power projects.
                </p>

              </div>

              <div className="mt-8">

                <Link
                  to="/company/corporate-overview"
                  className="inline-flex items-center gap-2 text-[#0B4B94] font-semibold hover:gap-3 transition-all"
                >
                  Discover our corporate story
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="bg-[#f4f7fa] border-y border-slate-200">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            <div className="py-10 lg:py-12 px-5 text-center border-r border-slate-200">
              <p className="text-3xl sm:text-4xl font-bold text-[#0B4B94]">
                1986
              </p>

              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Established
              </p>
            </div>

            <div className="py-10 lg:py-12 px-5 text-center lg:border-r border-slate-200">
              <p className="text-3xl sm:text-4xl font-bold text-[#0B4B94]">
                100+
              </p>

              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Renewable Energy Projects
              </p>
            </div>

            <div className="py-10 lg:py-12 px-5 text-center border-r border-t lg:border-t-0 border-slate-200">
              <p className="text-3xl sm:text-4xl font-bold text-[#0B4B94]">
                3
              </p>

              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Core Energy Verticals
              </p>
            </div>

            <div className="py-10 lg:py-12 px-5 text-center border-t lg:border-t-0 border-slate-200">
              <p className="text-3xl sm:text-4xl font-bold text-[#0B4B94]">
                35+
              </p>

              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Years of Experience
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR ENERGY
      ========================================================= */}

      <section className="py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-12">

            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0B4B94]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#17395f]">
              Renewable energy across three powerful verticals.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our renewable energy portfolio brings together the natural
              power of water, wind and sunlight.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-7">

            {/* HYDRO */}
            <Link
              to="/hydro"
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={hydroImage}
                  alt="Hydro Power"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-white/80 text-sm">
                    Renewable Energy
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Hydro Power
                  </h3>
                </div>

              </div>

              <div className="p-6">

                <p className="text-slate-600 leading-7">
                  Harnessing the power of flowing water through efficient
                  and responsible hydroelectric generation.
                </p>

                <span className="inline-block mt-4 text-[#0B4B94] font-semibold">
                  Explore Hydro →
                </span>

              </div>

            </Link>


            {/* WIND */}
            <Link
              to="/wind"
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={windImage}
                  alt="Wind Power"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-white/80 text-sm">
                    Renewable Energy
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Wind Power
                  </h3>
                </div>

              </div>

              <div className="p-6">

                <p className="text-slate-600 leading-7">
                  Turning India's wind resources into dependable,
                  clean electricity for a sustainable future.
                </p>

                <span className="inline-block mt-4 text-[#0B4B94] font-semibold">
                  Explore Wind →
                </span>

              </div>

            </Link>


            {/* SOLAR */}
            <Link
              to="/solar"
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={solarImage}
                  alt="Solar Power"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-white/80 text-sm">
                    Renewable Energy
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    Solar Power
                  </h3>
                </div>

              </div>

              <div className="p-6">

                <p className="text-slate-600 leading-7">
                  Capturing the power of sunlight to create clean and
                  sustainable electricity.
                </p>

                <span className="inline-block mt-4 text-[#0B4B94] font-semibold">
                  Explore Solar →
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>

 {/* =========================================================
    OUR APPROACH
========================================================= */}

<section className="bg-white py-12 lg:py-16">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0B4B94] mb-4">
          Our Approach
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#17395f] leading-[1.15] tracking-tight">
          Building long-term value through responsible energy.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#4b6b8a] leading-8 max-w-lg">
          Our approach combines technical excellence with environmental
          responsibility, safety and a commitment to the communities around
          our projects.
        </p>

        <Link
          to="/company/vision-values-quality-policy"
          className="inline-flex items-center justify-center mt-8 px-6 py-3.5 rounded-lg bg-[#0B4B94] text-white font-semibold hover:bg-[#083b75] transition"
        >
          Our Vision & Values
        </Link>

      </div>



      {/* RIGHT CARDS */}
      <div className="grid sm:grid-cols-2 gap-5">

        {/* CARD 1 */}
        <div className="p-6 rounded-2xl bg-[#f5f9fd] border border-[#d9e6f2] shadow-sm hover:shadow-md transition">

          <div className="w-11 h-11 rounded-xl bg-[#0B4B94] flex items-center justify-center text-white mb-5 shadow-sm">

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"
              />
            </svg>

          </div>

          <h3 className="text-xl font-semibold text-[#17395f]">
            Innovation
          </h3>

          <p className="mt-3 text-[#4b6b8a] leading-7">
            Embracing technology and better ways of delivering
            renewable energy solutions.
          </p>

        </div>


        {/* CARD 2 */}
        <div className="p-6 rounded-2xl bg-[#f5f9fd] border border-[#d9e6f2] shadow-sm hover:shadow-md transition">

          <div className="w-11 h-11 rounded-xl bg-[#0B4B94] flex items-center justify-center text-white mb-5 shadow-sm">

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
              />
            </svg>

          </div>

          <h3 className="text-xl font-semibold text-[#17395f]">
            Safety
          </h3>

          <p className="mt-3 text-[#4b6b8a] leading-7">
            Keeping safe operations and healthy workplaces at the
            heart of our projects.
          </p>

        </div>


        {/* CARD 3 */}
        <div className="p-6 rounded-2xl bg-[#f5f9fd] border border-[#d9e6f2] shadow-sm hover:shadow-md transition">

          <div className="w-11 h-11 rounded-xl bg-[#0B4B94] flex items-center justify-center text-white mb-5 shadow-sm">

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19h16M6 16V8m6 8V5m6 11v-5"
              />
            </svg>

          </div>

          <h3 className="text-xl font-semibold text-[#17395f]">
            Excellence
          </h3>

          <p className="mt-3 text-[#4b6b8a] leading-7">
            Developing engineering and project-management
            capabilities for dependable performance.
          </p>

        </div>


        {/* CARD 4 */}
        <div className="p-6 rounded-2xl bg-[#f5f9fd] border border-[#d9e6f2] shadow-sm hover:shadow-md transition">

          <div className="w-11 h-11 rounded-xl bg-[#0B4B94] flex items-center justify-center text-white mb-5 shadow-sm">

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s8-4.5 8-10V5l-8-3-8 3v6c0 5.5 8 10 8 10z"
              />
            </svg>

          </div>

          <h3 className="text-xl font-semibold text-[#17395f]">
            Sustainability
          </h3>

          <p className="mt-3 text-[#4b6b8a] leading-7">
            Creating value while caring for the environment and
            communities where we operate.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      
      {/* =========================================================
          PEOPLE + LEADERSHIP
      ========================================================= */}

      <section className="bg-[#f4f7fa] py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* PEOPLE */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">

              <span className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0B4B94]">
                Our People
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[#17395f]">
                People are our competitive advantage.
              </h2>

              <p className="mt-5 text-slate-600 leading-8">
                Bhoruka's engineering, project management and operational
                teams form an important part of its ability to execute
                renewable energy projects and meet future challenges.
              </p>

              <Link
                to="/company/people"
                className="inline-flex mt-7 text-[#0B4B94] font-semibold"
              >
                Meet our people →
              </Link>

            </div>


            {/* LEADERSHIP */}
            <div className="bg-[#0B4B94] rounded-2xl p-8 lg:p-10 shadow-sm">

              <span className="text-sm uppercase tracking-[0.2em] font-semibold text-blue-200">
                Leadership
              </span>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Experience that drives our direction.
              </h2>

              <p className="mt-5 text-blue-100/80 leading-8">
                Strong leadership and industry experience have helped
                Bhoruka identify opportunities early and build a
                sustained presence in renewable energy.
              </p>

              <Link
                to="/company/leadership"
                className="inline-flex mt-7 text-white font-semibold"
              >
                Meet our leadership →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED PROJECTS
      ========================================================= */}

      <section className="py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">

            <div>

              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#0B4B94]">
                Our Projects
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#17395f]">
                Renewable projects built for performance.
              </h2>

            </div>

            <Link
              to="/hydro"
              className="text-[#0B4B94] font-semibold whitespace-nowrap"
            >
              View all projects →
            </Link>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="group relative h-[330px] overflow-hidden rounded-2xl">

              <img
                src={rajankollur}
                alt="Rajankollur project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="text-sm text-blue-200">
                  HYDRO POWER
                </span>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  Rajankollur
                </h3>

              </div>

            </div>


            <div className="group relative h-[330px] overflow-hidden rounded-2xl">

              <img
                src={shahapur}
                alt="Shahapur project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="text-sm text-blue-200">
                  HYDRO POWER
                </span>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  Shahapur
                </h3>

              </div>

            </div>


            <div className="group relative h-[330px] overflow-hidden rounded-2xl">

              <img
                src={solarImage}
                alt="Solar power project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="text-sm text-blue-200">
                  SOLAR POWER
                </span>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  Solar Energy
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MISSION / VISION CTA
      ========================================================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[#062d52]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-blue-300">
              Looking Ahead
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Creating sustainable value for generations to come.
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100/80 max-w-3xl">
              Our vision is to continue building a respected renewable
              energy business while creating sustainable value for our
              stakeholders, employees, communities and the environment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/company/mission-statement"
                className="px-6 py-3.5 rounded-lg bg-white text-[#0B4B94] font-semibold hover:bg-blue-50 transition"
              >
                Our Mission
              </Link>

              <Link
                to="/company/vision-values-quality-policy"
                className="px-6 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition"
              >
                Vision & Values
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}