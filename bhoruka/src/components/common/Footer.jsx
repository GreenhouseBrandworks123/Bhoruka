import React from "react";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#f4f6f8] text-[#17395f]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-7">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-7 items-start">

          {/* ================= COMPANY ================= */}
          <div className="flex flex-col items-start">
            <div className="w-[180px] h-[75px] flex items-center overflow-visible">
              <img
                src={logo}
                alt="Bhoruka Power"
                className="w-[180px] h-[180px] object-contain scale-[1.0] origin-left"
              />
            </div>

            <p className="mt-3 max-w-[280px] text-[#405a76] text-[16px] leading-6">
              Powering a sustainable future through reliable Hydro, Wind and
              Solar energy.
            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-[21px] font-semibold text-[#17395f] mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-[16px]">

              <li>
                <a
                  href="/"
                  className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/csr"
                  className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
                >
                  CSR
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* ================= OUR ENERGY ================= */}
          <div>

            <h3 className="text-[21px] font-semibold text-[#17395f] mb-4">
              Our Energy
            </h3>

            <ul className="space-y-2 text-[16px]">

              <li>
                <a
                  href="/hydro"
                  className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
                >
                  Hydro Power
                </a>
              </li>

              <li>
                <a
                  href="/solar"
                  className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
                >
                  Solar Power
                </a>
              </li>

              <li>
                <a
                  href="/wind"
                  className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
                >
                  Wind Power
                </a>
              </li>

            </ul>

          </div>


          {/* ================= GET IN TOUCH ================= */}
          <div>

            <h3 className="text-[21px] font-semibold text-[#17395f] mb-4">
              Get in Touch
            </h3>

            <div className="space-y-2 text-[16px] text-[#405a76] leading-6">

              <p>
                Bhoruka Power Corporation Limited
              </p>

              <p>
                Sustainable Energy for a Better Tomorrow.
              </p>

              <a
                href="mailto:info@bhorukapower.com"
                className="block text-[#244d78] hover:text-[#0b2f57] transition-colors"
              >
                info@bhorukapower.com
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-slate-300">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-4">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

            <p className="text-[#526b86] text-[15px] text-center sm:text-left">
              © {new Date().getFullYear()} Bhoruka Power Corporation Limited.
              All Rights Reserved.
            </p>

            <div className="flex gap-6 text-[15px]">

              <a
                href="/privacy-policy"
                className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-[#244d78] hover:text-[#0b2f57] transition-colors"
              >
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}