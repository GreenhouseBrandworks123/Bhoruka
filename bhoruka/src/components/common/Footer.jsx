import React from "react";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#f4f6f8] text-[#17395f]">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 items-start">

          {/* ================= COMPANY ================= */}
          <div className="flex flex-col items-start">

            <img
              src={logo}
              alt="Bhoruka Power"
              className="w-[190px] h-[110px] object-contain object-left"
            />

            <p className="mt-3 max-w-[300px] text-[#405a76] text-[17px] leading-7">
              Powering a sustainable future through reliable Hydro, Wind and
              Solar energy.
            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="pt-1">

            <h3 className="text-[22px] font-semibold leading-[110px] text-[#17395f] -mt-[40px] mb-[10px]">
              Quick Links
            </h3>

            <ul className="space-y-2 text-[17px]">

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
          <div className="pt-1">

            <h3 className="text-[22px] font-semibold leading-[110px] text-[#17395f] -mt-[40px] mb-[10px]">
              Our Energy
            </h3>

            <ul className="space-y-2 text-[17px]">

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
          <div className="pt-1">

            <h3 className="text-[22px] font-semibold leading-[110px] text-[#17395f] -mt-[40px] mb-[10px]">
              Get in Touch
            </h3>

            <div className="space-y-2 text-[17px] text-[#405a76] leading-7">

              <p>Bhoruka Power Corporation Limited</p>

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


      {/* BOTTOM FOOTER */}
      <div className="border-t border-slate-300">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            <p className="text-[#526b86] text-[16px]">
              © {new Date().getFullYear()} Bhoruka Power Corporation Limited.
              All Rights Reserved.
            </p>

            <div className="flex gap-8 text-[16px]">

              <a
                href="/privacy-policy"
                className="text-[#244d78] hover:text-[#0b2f57]"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-[#244d78] hover:text-[#0b2f57]"
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