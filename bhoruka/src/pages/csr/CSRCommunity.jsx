
import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import rajankollur from "../../assets/images/Rajankollur.jpg";
import shahapur from "../../assets/images/shahapur.jpg";
import shivpur from "../../assets/images/shivpur.jpg";
import madhavamantri from "../../assets/images/madhavamantri.jpeg";
import rangenahalli from "../../assets/images/Rangenahalli.webp";

const impactAreas = [
  {
    number: "01",
    title: "Education",
    description:
      "Creating access to quality education and better learning opportunities for children and communities in rural areas.",
    link: "/csr/education",
  },
  {
    number: "02",
    title: "Community Welfare",
    description:
      "Supporting rural communities through initiatives that strengthen social and economic well-being.",
    link: "/csr/community",
  },
  {
    number: "03",
    title: "Health & Environment",
    description:
      "Promoting healthier communities through awareness, healthcare initiatives and environmental responsibility.",
    link: "/csr/health-environment",
  },
  {
    number: "04",
    title: "Women Empowerment",
    description:
      "Enabling women to build greater financial independence through skills, enterprise and community programmes.",
    link: "/csr/women-empowerment",
  },
  {
    number: "05",
    title: "Skill Development",
    description:
      "Developing practical skills and creating pathways towards employment, entrepreneurship and self-reliance.",
    link: "/csr/skill-development",
  },
];

const impactStats = [
  {
    value: "3+",
    label: "English-medium schools",
  },
  {
    value: "5",
    label: "Rural government schools adopted",
  },
  {
    value: "100+",
    label: "Girls supported through residential education",
  },
  {
    value: "200+",
    label: "Self-help groups",
  },
];

const initiatives = [
  {
    image: shahapur,
    eyebrow: "Education",
    title: "Creating pathways through education",
    description:
      "From rural schools to educational support, Bhoruka's welfare initiatives focus on creating stronger foundations for the next generation.",
    link: "/csr/education",
  },
  {
    image: rajankollur,
    eyebrow: "Community",
    title: "Strengthening rural communities",
    description:
      "Community development programmes are designed around local needs, helping people build stronger and more sustainable livelihoods.",
    link: "/csr/community",
  },
  {
    image: shivpur,
    eyebrow: "People",
    title: "Investing in people",
    description:
      "Skill development, women's empowerment and community initiatives help create opportunities for greater self-reliance.",
    link: "/csr/skill-development",
  },
];

const principles = [
  {
    title: "People first",
    text: "Our CSR approach begins with understanding the needs of the communities around us.",
  },
  {
    title: "Long-term impact",
    text: "We focus on initiatives that build lasting capability rather than short-term assistance.",
  },
  {
    title: "Inclusive growth",
    text: "We work to create opportunities for children, women and rural communities.",
  },
];

export default function CSRCommunity() {
  return (
    <main className="bg-white text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#062d52]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={madhavamantri}
            alt="Bhoruka community initiative"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031f39] via-[#062d52]/90 to-[#062d52]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062d52] via-transparent to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-20 top-32 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-emerald-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Corporate Social Responsibility
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Powering progress
              <span className="block text-emerald-300">
                beyond energy.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              We believe meaningful growth goes beyond generating clean
              energy. It means creating opportunities, strengthening
              communities and building a more sustainable future for people.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/csr/education"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#062d52] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
              >
                Explore our impact
                <span className="text-lg">→</span>
              </Link>

              <a
                href="#our-approach"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Our approach
              </a>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/60 md:flex">
          <span className="h-px w-8 bg-white/40" />
          Discover
          <span className="h-px w-8 bg-white/40" />
        </div>
      </section>

      {/* =========================================================
          INTRO / APPROACH
      ========================================================= */}
      <section id="our-approach" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b4b94]">
                Our approach
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#062d52] sm:text-5xl">
                Creating meaningful change where it matters.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Bhoruka's social responsibility initiatives are rooted in a
                simple belief: sustainable development must include the
                communities that surround us. Our programmes focus on
                education, community development, health, environment,
                livelihood and empowerment.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-500">
                From supporting rural schools to strengthening self-help
                groups and creating opportunities for women and young people,
                our efforts are designed to encourage dignity, capability and
                long-term self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT AREAS
      ========================================================= */}
      <section className="bg-slate-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b4b94]">
              Our focus
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#062d52] sm:text-5xl">
              Five areas. One purpose.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our CSR programmes work across interconnected areas that help
              communities build stronger and more sustainable futures.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-5">
            {impactAreas.map((area) => (
              <Link
                key={area.number}
                to={area.link}
                className="group bg-white p-7 transition-all duration-300 hover:bg-[#062d52]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-widest text-slate-400 transition-colors group-hover:text-emerald-300">
                    {area.number}
                  </span>

                  <span className="text-xl text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-xl font-semibold text-[#062d52] transition-colors group-hover:text-white">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500 transition-colors group-hover:text-slate-300">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT STATS
      ========================================================= */}
      <section className="bg-[#062d52] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${
                  index !== 0
                    ? "border-t border-white/10 pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0"
                    : ""
                }`}
              >
                <p className="text-5xl font-semibold tracking-tight text-white lg:text-6xl">
                  {stat.value}
                </p>

                <p className="mt-3 max-w-[180px] text-sm leading-6 text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION FEATURE
      ========================================================= */}
      <section className="overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Image composition */}
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-emerald-100" />

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={shahapur}
                  alt="Bhoruka education initiative"
                  className="h-[560px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-7 -right-5 hidden rounded-2xl bg-white p-6 shadow-2xl sm:block">
                <p className="text-4xl font-semibold text-[#062d52]">
                  80%
                </p>
                <p className="mt-1 max-w-[130px] text-xs leading-5 text-slate-500">
                  Reported board examination results after programme
                  improvements
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b4b94]">
                Education
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#062d52] sm:text-5xl">
                Education can change the trajectory of a community.
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Bhoruka has placed education at the centre of its welfare
                initiatives, with a focus on improving access and learning
                opportunities for children in rural communities.
              </p>

              <p className="mt-5 leading-7 text-slate-500">
                Initiatives include English-medium schools, support for
                government-school infrastructure and programmes aimed at
                encouraging girls' education and participation.
              </p>

              <Link
                to="/csr/education"
                className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#0b4b94] pb-2 text-sm font-semibold text-[#0b4b94] transition-all hover:gap-5"
              >
                Discover our education initiatives
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY STORIES
      ========================================================= */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b4b94]">
                On the ground
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#062d52] sm:text-5xl">
                From initiatives to impact.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-slate-500">
              Our work is shaped by the needs of the communities we serve,
              with programmes designed to create practical and lasting
              outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {initiatives.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#062d52]">
                    {item.eyebrow}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold leading-tight text-[#062d52]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b4b94] transition-all group-hover:gap-4"
                  >
                    Explore initiative
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#062d52] py-24 lg:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-48 -left-32 h-96 w-96 rounded-full border border-emerald-300/10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Our philosophy
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Sustainable progress starts with people.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-slate-300">
                Clean energy powers a sustainable future. Strong communities
                make that future possible.
              </p>
            </div>

            <div className="divide-y divide-white/10">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid gap-5 py-7 sm:grid-cols-[80px_1fr]"
                >
                  <span className="text-sm font-semibold text-emerald-300">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-slate-400">
                      {principle.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CSR NAVIGATION
      ========================================================= */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-50 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b4b94]">
                Explore CSR
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-[#062d52] sm:text-5xl">
                Discover the work behind the impact.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Explore the different initiatives through which Bhoruka works
                with communities to create opportunities and strengthen
                livelihoods.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Education", "/csr/education"],
                ["Health & Environment", "/csr/health-environment"],
                ["Women Empowerment", "/csr/women-empowerment"],
                ["Skill Development", "/csr/skill-development"],
                ["Micro Credit", "/csr/micro-credit"],
                ["CSR Impact", "/csr/impact"],
                ["CSR Philosophy", "/csr/philosophy"],
                ["Gallery", "/csr/gallery"],
              ].map(([title, link]) => (
                <Link
                  key={title}
                  to={link}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-5 text-sm font-semibold text-[#062d52] transition-all duration-300 hover:border-[#0b4b94] hover:bg-[#062d52] hover:text-white"
                >
                  {title}

                  <span className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-emerald-300">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0b4b94] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src={rangenahalli}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Building a better tomorrow
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Creating stronger communities for a sustainable future.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Our responsibility extends beyond the energy we generate. It is
            reflected in the opportunities we create and the communities we
            help strengthen.
          </p>

          <Link
            to="/csr/impact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0b4b94] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
          >
            See our impact
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

