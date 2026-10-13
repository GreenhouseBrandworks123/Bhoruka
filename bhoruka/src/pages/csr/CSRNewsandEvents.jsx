
import React from 'react';
import { Link } from 'react-router-dom';

import communityImage from '../../assets/images/csr-community/1.webp';
import educationImage from '../../assets/images/edu-img-1.jpg';
import newsletterImage from '../../assets/newsletters-images/newsletter-jul-2011.jpg';
import aprilNewsletter from '../../assets/newsletters-images/newsletter-apr-2011.jpg';
import januaryNewsletter from '../../assets/newsletters-images/newsletter-jan-2011.jpg';
import octoberNewsletter from '../../assets/newsletters-images/newsletter-oct-2011.jpg';

const events = [
  {
    year: '2012',
    category: 'Community Development',
    title: 'Community Development Initiatives',
    description:
      'Bhoruka Welfare supports community development through programmes focused on social welfare and improving the quality of life in surrounding communities.',
    items: [
      'Community development and welfare activities.',
      'Support for educational opportunities and community wellbeing.',
      'Initiatives focused on improving access to essential services.',
    ],
  },
  {
    year: '2008',
    category: 'Community Development',
    title: 'Supporting Local Communities',
    description:
      'Community-focused activities aim to strengthen local participation and support sustainable development in surrounding villages.',
    items: [
      'Community welfare and development activities.',
      'Initiatives supporting education and local development.',
    ],
  },
  {
    year: '2006',
    category: 'Education & Healthcare',
    title: 'Education and Healthcare Initiatives',
    description:
      'Education and healthcare are important areas of community welfare, helping create opportunities and improve access to essential services.',
    items: [
      'Educational and community support activities.',
      'Healthcare awareness and community health initiatives.',
    ],
  },
];

const newsletters = [
  {
    title: 'Bhoruka Newsletter',
    date: 'April 2011',
    image: aprilNewsletter,
    href: '/pdfs/bhoruka-apr-2011.pdf',
  },
  {
    title: 'Bhoruka Newsletter',
    date: 'January 2011',
    image: januaryNewsletter,
    href: '/pdfs/bhoruka-jan-2011.pdf',
  },
  {
    title: 'Green Power Newsletter',
    date: 'October 2011',
    image: octoberNewsletter,
    href: '/pdfs/green-power-oct-2011.pdf',
  },
];

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-1 bg-[#0B4B94]" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B4B94]">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
        {title}
      </h2>
    </div>
  );
}

export default function CSRNewsandEvents() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* PAGE HEADER */}
      <section className="pt-16 lg:pt-36 pb-10 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="w-8 h-1 bg-[#0B4B94]" />

            <Link
              to="/csr-overview"
              className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 hover:text-[#0B4B94]"
            >
              Corporate Social Responsibility
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B4B94]">
              News & Events
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            News & Events
          </h1>

        </div>
      </section>

      {/* PRESS RELEASES AND NEWSLETTERS */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* LEFT: PRESS RELEASES */}
            <div>
              <SectionHeading
                eyebrow="Latest Highlights"
                title="Press Releases"
              />

              <article className="bg-white border border-slate-200 shadow-sm h-full lg:h-auto">

                <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-200">
                  <img
                    src={communityImage}
                    alt="Bhoruka community initiative"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B4B94] mb-4">
                    Press Release · July 2007
                  </p>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                    Bhoruka Charitable Trust
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-7">
                    Explore the history of Bhoruka's charitable work and its
                    commitment to supporting communities through social
                    welfare, education and healthcare initiatives.
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      From the archives
                    </span>
                  </div>

                </div>
              </article>
            </div>

            {/* RIGHT: NEWSLETTERS */}
            <div>
              <SectionHeading
                eyebrow="From Our Archives"
                title="Newsletters"
              />

              <div className="bg-white border border-slate-200 shadow-sm p-6 sm:p-8">

                {/* FEATURED NEWSLETTER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

                  <div className="overflow-hidden border border-slate-200 bg-slate-100">
                    <img
                      src={newsletterImage}
                      alt="Green Power Newsletter cover, July 2011"
                      className="w-full h-64 sm:h-72 object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-col">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B4B94] mb-3">
                      Featured Publication
                    </p>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                      Green Power
                    </h3>

                    <p className="text-sm text-slate-600 leading-7 mb-6">
                      Browse archived publications featuring company news,
                      updates and activities.
                    </p>

                    <a
                      href="/pdfs/green-power-jul-2011.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-center gap-3 self-start px-5 py-3 text-xs font-bold text-white bg-[#0B4B94] hover:bg-[#083870] uppercase tracking-widest transition-colors"
                    >
                      Read Newsletter

                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>

                    <p className="text-xs text-slate-500 mt-3">
                      Opens the newsletter PDF
                    </p>

                  </div>
                </div>

                {/* MORE NEWSLETTERS */}
                <div className="mt-8 pt-6 border-t border-slate-200">

                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-5">
                    More Publications
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {newsletters.map((newsletter) => (
                      <a
                        key={newsletter.date}
                        href={newsletter.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group border border-slate-200 bg-white hover:border-[#0B4B94] transition-colors"
                      >
                        <div className="h-32 overflow-hidden bg-slate-100">
                          <img
                            src={newsletter.image}
                            alt={`${newsletter.title} cover, ${newsletter.date}`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="p-3">
                          <p className="text-xs font-bold text-slate-800 leading-relaxed group-hover:text-[#0B4B94]">
                            {newsletter.title}
                          </p>

                          <span className="block text-xs text-slate-500 mt-2">
                            {newsletter.date}
                          </span>

                          <span className="block text-xs font-bold text-[#0B4B94] mt-3">
                            Read PDF ↗
                          </span>
                        </div>
                      </a>
                    ))}

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HISTORICAL EVENTS */}
      <section className="py-14 lg:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <SectionHeading
            eyebrow="Our History"
            title="Events & Community Initiatives"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* EVENT TIMELINE */}
            <div className="lg:col-span-8">
              <div className="relative border-l-2 border-slate-200 ml-3 md:ml-5">

                {events.map((event) => (
                  <article
                    key={event.year}
                    className="relative pl-7 md:pl-10 pb-12 last:pb-0"
                  >
                    <span className="absolute -left-[9px] top-1 w-4 h-4 bg-[#0B4B94] border-4 border-white ring-1 ring-[#0B4B94]" />

                    <span className="inline-block bg-[#0B4B94] text-white text-xs font-bold tracking-widest px-4 py-2 mb-5">
                      {event.year}
                    </span>

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B4B94] mb-2">
                      {event.category}
                    </p>

                    <h3 className="text-xl md:text-2xl font-extrabold mb-4">
                      {event.title}
                    </h3>

                    <p className="text-sm md:text-base leading-7 text-slate-600 mb-5">
                      {event.description}
                    </p>

                    <ul className="space-y-3">
                      {event.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 w-1.5 h-1.5 bg-[#0B4B94] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}

              </div>
            </div>

            {/* SUPPORTING IMAGE */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">

                <div className="relative border border-slate-200 p-2 bg-slate-50">
                  <div className="absolute left-2 top-2 bottom-2 w-1 bg-[#0B4B94] z-10" />

                  <img
                    src={educationImage}
                    alt="Education and community development"
                    loading="lazy"
                    className="w-full h-[300px] md:h-[400px] object-cover grayscale-[15%]"
                  />
                </div>

                <div className="bg-slate-50 border border-slate-200 border-t-0 p-6">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B4B94] mb-3">
                    Our Focus
                  </p>

                  <h3 className="text-xl font-extrabold mb-3">
                    Building Stronger Communities
                  </h3>

                  <p className="text-sm text-slate-600 leading-7">
                    Our social responsibility efforts focus on creating
                    opportunities through education, healthcare and
                    community development.
                  </p>

                  <Link
                    to="/csr-overview"
                    className="mt-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0B4B94] hover:underline"
                  >
                    Explore CSR Overview →
                  </Link>

                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CSR FOCUS AREAS */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <SectionHeading
            eyebrow="Our Commitment"
            title="Explore Our CSR Activities"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <Link
              to="/csr/education"
              className="group bg-white border border-slate-200 p-7 hover:border-[#0B4B94] hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4B94]">
                01 / Education
              </span>

              <h3 className="text-xl font-extrabold mt-4 mb-3 group-hover:text-[#0B4B94]">
                Education Initiatives
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                Learn about programmes that support education and learning
                opportunities.
              </p>

              <span className="block mt-6 text-[#0B4B94] font-bold">
                Explore Education →
              </span>
            </Link>

            <Link
              to="/csr/health-environment"
              className="group bg-white border border-slate-200 p-7 hover:border-[#0B4B94] hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4B94]">
                02 / Healthcare
              </span>

              <h3 className="text-xl font-extrabold mt-4 mb-3 group-hover:text-[#0B4B94]">
                Health & Environment
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                Discover community health, safety and environmental
                initiatives.
              </p>

              <span className="block mt-6 text-[#0B4B94] font-bold">
                Explore Initiatives →
              </span>
            </Link>

            <Link
              to="/csr/community"
              className="group bg-white border border-slate-200 p-7 hover:border-[#0B4B94] hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4B94]">
                03 / Community
              </span>

              <h3 className="text-xl font-extrabold mt-4 mb-3 group-hover:text-[#0B4B94]">
                Community Development
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                Explore activities supporting the communities around
                our operating regions.
              </p>

              <span className="block mt-6 text-[#0B4B94] font-bold">
                Explore Community →
              </span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
