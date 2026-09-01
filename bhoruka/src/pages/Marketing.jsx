import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import windImage from "../assets/images/wind.webp";

export default function Marketing() {
  return (
    <main className="bg-white text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden">

        <img
          src={windImage}
          alt="Bhoruka renewable energy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/55"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-12 flex items-center">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-[3px] bg-blue-500"></span>
              <span className="text-blue-300 font-semibold uppercase tracking-[0.2em] text-sm">
                Bhoruka Power
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Marketing
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
              Reliable power solutions delivered directly to customers
              across Karnataka.
            </p>

          </div>

        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="grid lg:grid-cols-[0.8fr_1.5fr] gap-12 lg:gap-20">

            {/* Left heading */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Power Marketing
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#17395f] leading-tight">
                Powering customers with
                <span className="text-[#0B4B94]"> reliable energy</span>
              </h2>

              <div className="mt-6 w-16 h-1 bg-[#0B4B94] rounded-full"></div>

            </div>


            {/* Right content */}
            <div className="text-slate-600 text-lg leading-8">

              <p>
                Bhoruka Power sells power directly to customers located
                anywhere in the State of Karnataka. The power is transmitted
                with the help of existing transmission lines belonging to
                KPTCL (Karnataka Power Transmission Corporation Ltd.)
                through Wheeling & Banking Arrangement.
              </p>

              <p className="mt-6">
                Our power solutions are designed to support customers who
                require dependable electricity for their operations while
                contributing towards a cleaner and more sustainable energy
                future.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#f5f8fc] py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Approach
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#17395f]">
              Simple. Reliable. Sustainable.
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              We connect customers with dependable renewable power through
              an established transmission network.
            </p>

          </div>


          <div className="mt-12 grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">

              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B4B94]">
                <MapPin size={24} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#17395f]">
                Serving Karnataka
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Power can be supplied directly to customers located across
                Karnataka.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">

              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B4B94]">
                <ArrowRight size={24} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#17395f]">
                Direct Power Supply
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                We work with customers who require reliable power for their
                energy requirements.
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">

              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B4B94]">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v18" />
                  <path d="M5 8h14" />
                  <path d="M5 16h14" />
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#17395f]">
                Wheeling & Banking
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Power is transmitted using existing KPTCL transmission
                infrastructure through a Wheeling & Banking arrangement.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BULK CONSUMER ================= */}
      <section className="py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="bg-[#0B4B94] rounded-3xl overflow-hidden">

            <div className="grid lg:grid-cols-[1.4fr_0.8fr]">

              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-14">

                <span className="text-blue-200 text-sm font-semibold uppercase tracking-[0.2em]">
                  Bulk Consumers
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                  Looking for reliable power?
                </h2>

                <p className="mt-5 text-blue-100 text-lg leading-8 max-w-2xl">
                  If you are a bulk consumer of power and would like more
                  details on how you can meet your power requirements through
                  Bhoruka Power, get in touch with our team.
                </p>

                <a
                  href="mailto:anandsingh@bhorukapower.com"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-[#0B4B94] font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Contact Our Team
                  <ArrowRight size={18} />
                </a>

              </div>
              {/* Right side */}
              <div className="bg-[#083d79] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">

                <h3 className="text-2xl font-semibold text-white">
                  Interested in our power solutions?
                </h3>

                <p className="mt-4 text-blue-100 leading-7">
                  Reach out to us for more information about our power
                  supply and requirements.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="bg-[#f5f8fc] py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Get In Touch
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#17395f]">
                Contact our marketing team
              </h2>

              <p className="mt-5 text-slate-600 text-lg leading-8 max-w-xl">
                For enquiries regarding power requirements, bulk consumption
                and other marketing-related information, please contact us.
              </p>

            </div>


            {/* Contact card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-sm">

              <h3 className="text-2xl font-semibold text-[#17395f]">
                Bhoruka Power Corporation Limited
              </h3>

              <div className="mt-7 space-y-5">

                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-[#0B4B94]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-[#17395f]">
                      Registered Office
                    </p>

                    <p className="mt-1 text-slate-600 leading-6">
                      Hitananda II, 48, Lavelle Road,
                      <br />
                      Bangalore - 560001
                    </p>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-[#0B4B94]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-[#17395f]">
                      Phone
                    </p>

                    <a
                      href="tel:+918022272271"
                      className="mt-1 block text-slate-600 hover:text-[#0B4B94]"
                    >
                      +91 - 80 - 2227 2271 / 72
                    </a>
                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-[#0B4B94]">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-[#17395f]">
                      Email
                    </p>

                    <a
                      href="mailto:anandsingh@bhorukapower.com"
                      className="mt-1 block text-[#0B4B94] hover:underline break-all"
                    >
                      anandsingh@bhorukapower.com
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="py-12">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200 rounded-2xl p-7 sm:p-8">

            <div>
              <h3 className="text-xl font-semibold text-[#17395f]">
                Have a power requirement?
              </h3>

              <p className="mt-1 text-slate-600">
                Talk to the Bhoruka Power team today.
              </p>
            </div>

            <a
              href="mailto:anandsingh@bhorukapower.com"
              className="inline-flex items-center gap-2 shrink-0 px-6 py-3 bg-[#0B4B94] text-white font-semibold rounded-lg hover:bg-[#083870] transition-colors"
            >
              Enquire Now
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}