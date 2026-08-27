import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

/* ================= COMPANY DROPDOWN ================= */

const companyItems = [
  {
    name: 'Corporate Overview - BPCL',
    path: '/company/corporate-overview',
  },
  {
    name: 'Leadership',
    path: '/company/leadership',
  },
  {
    name: 'Mission Statement',
    path: '/company/mission-statement',
  },
  {
    name: 'Vision, Values & Quality Policy',
    path: '/company/vision-values-quality-policy',
  },
  {
    name: 'People',
    path: '/company/people',
  },
  {
    name: 'Awards and Achievements',
    path: '/company/awards-achievements',
  },
  {
    name: 'Safety & Environment',
    path: '/company/safety-environment',
  },
  {
    name: 'Statutory Report & Annual Returns',
    path: '/company/statutory-reports',
  },
];

/* ================= PROJECTS DROPDOWN ================= */

const projectItems = [
  {
    name: 'Hydro',
    path: '/hydro',
  },
  {
    name: 'Wind',
    path: '/wind',
  },
  {
    name: 'Solar',
    path: '/solar',
  },
];

/* ================= PRESS / MEDIA DROPDOWN ================= */

const pressMediaItems = [
  {
    name: 'Press/Media Contacts',
    path: '/press-media/contacts',
  },
  {
    name: 'Newsletters',
    path: '/press-media/newsletters',
  },
];

/* ================= DROPDOWN COMPONENT ================= */

function Dropdown({ name, items }) {
  return (
    <li className="relative group">
      <button
        type="button"
        className="
          relative
          flex
          items-center
          gap-1
          text-sm
          lg:text-base
          font-medium
          whitespace-nowrap
          text-slate-700
          hover:text-[#0B4B94]
          transition-colors
          duration-200
          py-1
          outline-none
        "
      >
        {name}

        {/* Arrow */}
        <svg
          className="
            w-3.5
            h-3.5
            transition-transform
            duration-200
            group-hover:rotate-180
          "
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>

        {/* Hover underline */}
        <span
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[2px]
            bg-[#0B4B94]
            rounded-full
            scale-x-0
            group-hover:scale-x-100
            transition-transform
            duration-200
            ease-out
            origin-left
          "
        />
      </button>

      {/* ================= DROPDOWN MENU ================= */}

      <div
        className="
          absolute
          top-full
          left-0
          pt-3
          invisible
          opacity-0
          translate-y-2
          group-hover:visible
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-200
          ease-out
          z-50
        "
      >
        <div
          className="
            bg-white
            min-w-[280px]
            rounded-lg
            border
            border-slate-200
            shadow-xl
            overflow-hidden
          "
        >
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                block
                px-5
                py-3
                text-sm
                text-slate-700
                font-medium
                border-b
                border-slate-100
                last:border-b-0
                hover:bg-blue-50
                hover:text-[#0B4B94]
                transition-colors
                duration-150
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}

/* ================= NAVBAR ================= */

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm transition-all duration-200">

      {/* ================= DESKTOP / MAIN CONTAINER ================= */}

      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6">

        <div className="relative flex items-center justify-between h-[84px]">

          {/* ================= LOGO ================= */}

          <div className="flex items-center -ml-2 sm:ml-0">

            <Link
              to="/"
              className="
                flex
                items-center
                group
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-600
                rounded-md
              "
              onClick={closeMobileMenu}
              aria-label="Bhoruka - Home"
            >
              <img
                src={logo}
                alt="Bhoruka Logo"
                className="
                  h-20
                  sm:h-24
                  max-w-[200px]
                  object-contain
                  transition-transform
                  duration-200
                  group-hover:scale-[1.02]
                "
              />
            </Link>

          </div>


          {/* =======================================================
              DESKTOP NAVIGATION
          ======================================================= */}

          <nav
            aria-label="Main Navigation"
            className="
              hidden
              md:flex
              items-center
              absolute
              left-1/2
              -translate-x-1/2
            "
          >

            <ul className="flex items-center space-x-6 lg:space-x-8">

              {/* ================= HOME ================= */}

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 py-1 inline-block group ${
                      isActive
                        ? 'text-[#0B4B94] font-semibold'
                        : 'text-slate-700 hover:text-[#0B4B94]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Home

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          w-full
                          h-[2px]
                          bg-[#0B4B94]
                          rounded-full
                          transition-transform
                          duration-200
                          ease-out
                          origin-left
                          ${
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>


              {/* ================= COMPANY ================= */}

              <Dropdown
                name="Company"
                items={companyItems}
              />


              {/* ================= PROJECTS ================= */}

              <Dropdown
                name="Projects"
                items={projectItems}
              />


              {/* ================= MARKETING ================= */}

              <li>
                <NavLink
                  to="/marketing"
                  className={({ isActive }) =>
                    `relative text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 py-1 inline-block group ${
                      isActive
                        ? 'text-[#0B4B94] font-semibold'
                        : 'text-slate-700 hover:text-[#0B4B94]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Marketing

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          w-full
                          h-[2px]
                          bg-[#0B4B94]
                          rounded-full
                          transition-transform
                          duration-200
                          ease-out
                          origin-left
                          ${
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>


              {/* ================= CLIENTS ================= */}

              <li>
                <NavLink
                  to="/clients"
                  className={({ isActive }) =>
                    `relative text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 py-1 inline-block group ${
                      isActive
                        ? 'text-[#0B4B94] font-semibold'
                        : 'text-slate-700 hover:text-[#0B4B94]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Clients

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          w-full
                          h-[2px]
                          bg-[#0B4B94]
                          rounded-full
                          transition-transform
                          duration-200
                          ease-out
                          origin-left
                          ${
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>


              {/* ================= CSR ================= */}

              <li>
                <NavLink
                  to="/csr"
                  className={({ isActive }) =>
                    `relative text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 py-1 inline-block group ${
                      isActive
                        ? 'text-[#0B4B94] font-semibold'
                        : 'text-slate-700 hover:text-[#0B4B94]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      CSR

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          w-full
                          h-[2px]
                          bg-[#0B4B94]
                          rounded-full
                          transition-transform
                          duration-200
                          ease-out
                          origin-left
                          ${
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>


              {/* ================= PRESS / MEDIA ================= */}

              <Dropdown
                name="Press/Media"
                items={pressMediaItems}
              />


              {/* ================= JOBS ================= */}

              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    `relative text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 py-1 inline-block group ${
                      isActive
                        ? 'text-[#0B4B94] font-semibold'
                        : 'text-slate-700 hover:text-[#0B4B94]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Jobs @ BPCL

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          w-full
                          h-[2px]
                          bg-[#0B4B94]
                          rounded-full
                          transition-transform
                          duration-200
                          ease-out
                          origin-left
                          ${
                            isActive
                              ? 'scale-x-100'
                              : 'scale-x-0 group-hover:scale-x-100'
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>

            </ul>

          </nav>


          {/* =======================================================
              RIGHT SIDE
          ======================================================= */}

          <div className="flex items-center">

            {/* ================= CONTACT BUTTON ================= */}

            <div className="hidden md:block">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  bg-[#0B4B94]
                  hover:bg-[#083870]
                  active:bg-[#062954]
                  rounded-lg
                  shadow-sm
                  hover:shadow
                  transition-all
                  duration-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-[#0B4B94]
                "
              >
                Contact Us
              </Link>

            </div>


            {/* ================= MOBILE HAMBURGER ================= */}

            <div className="flex md:hidden items-center">

              <button
                type="button"
                onClick={toggleMobileMenu}
                className="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  text-slate-700
                  hover:text-[#0B4B94]
                  hover:bg-slate-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-[#0B4B94]
                  transition-colors
                  duration-200
                "
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label={
                  isMobileMenuOpen
                    ? 'Close main menu'
                    : 'Open main menu'
                }
              >

                {isMobileMenuOpen ? (

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                ) : (

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                )}

              </button>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <div
        id="mobile-menu"
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          bg-white
          border-b
          border-slate-100
          ${
            isMobileMenuOpen
              ? 'max-h-[1000px] opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}
      >

        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">

          <ul className="flex flex-col space-y-1">

            {/* ================= MOBILE HOME ================= */}

            <li>

              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-[#0B4B94] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B4B94]'
                  }`
                }
              >
                Home
              </NavLink>

            </li>


            {/* ================= MOBILE COMPANY ================= */}

            <li>

              <button
                type="button"
                onClick={() => toggleMobileDropdown('company')}
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  text-base
                  font-medium
                  text-slate-700
                  hover:bg-slate-50
                  hover:text-[#0B4B94]
                "
              >

                Company

                <svg
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-200
                    ${
                      mobileDropdown === 'company'
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              {mobileDropdown === 'company' && (

                <div className="ml-4 mt-1 border-l-2 border-blue-100">

                  {companyItems.map((item) => (

                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="
                        block
                        px-4
                        py-2.5
                        text-sm
                        text-slate-600
                        hover:text-[#0B4B94]
                        hover:bg-blue-50
                      "
                    >
                      {item.name}
                    </Link>

                  ))}

                </div>

              )}

            </li>


            {/* ================= MOBILE PROJECTS ================= */}

            <li>

              <button
                type="button"
                onClick={() => toggleMobileDropdown('projects')}
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  text-base
                  font-medium
                  text-slate-700
                  hover:bg-slate-50
                  hover:text-[#0B4B94]
                "
              >

                Projects

                <svg
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-200
                    ${
                      mobileDropdown === 'projects'
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              {mobileDropdown === 'projects' && (

                <div className="ml-4 mt-1 border-l-2 border-blue-100">

                  {projectItems.map((item) => (

                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="
                        block
                        px-4
                        py-2.5
                        text-sm
                        text-slate-600
                        hover:text-[#0B4B94]
                        hover:bg-blue-50
                      "
                    >
                      {item.name}
                    </Link>

                  ))}

                </div>

              )}

            </li>


            {/* ================= MOBILE MARKETING ================= */}

            <li>

              <NavLink
                to="/marketing"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-[#0B4B94] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B4B94]'
                  }`
                }
              >
                Marketing
              </NavLink>

            </li>


            {/* ================= MOBILE CLIENTS ================= */}

            <li>

              <NavLink
                to="/clients"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-[#0B4B94] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B4B94]'
                  }`
                }
              >
                Clients
              </NavLink>

            </li>


            {/* ================= MOBILE CSR ================= */}

            <li>

              <NavLink
                to="/csr"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-[#0B4B94] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B4B94]'
                  }`
                }
              >
                CSR
              </NavLink>

            </li>


            {/* ================= MOBILE PRESS / MEDIA ================= */}

            <li>

              <button
                type="button"
                onClick={() => toggleMobileDropdown('press')}
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  text-base
                  font-medium
                  text-slate-700
                  hover:bg-slate-50
                  hover:text-[#0B4B94]
                "
              >

                Press/Media

                <svg
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-200
                    ${
                      mobileDropdown === 'press'
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              {mobileDropdown === 'press' && (

                <div className="ml-4 mt-1 border-l-2 border-blue-100">

                  {pressMediaItems.map((item) => (

                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="
                        block
                        px-4
                        py-2.5
                        text-sm
                        text-slate-600
                        hover:text-[#0B4B94]
                        hover:bg-blue-50
                      "
                    >
                      {item.name}
                    </Link>

                  ))}

                </div>

              )}

            </li>


            {/* ================= MOBILE JOBS ================= */}

            <li>

              <NavLink
                to="/jobs"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-blue-50 text-[#0B4B94] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B4B94]'
                  }`
                }
              >
                Jobs @ BPCL
              </NavLink>

            </li>

          </ul>


          {/* ================= MOBILE CONTACT ================= */}

          <div className="pt-4 mt-2 border-t border-slate-100">

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="
                block
                w-full
                text-center
                px-5
                py-3
                text-base
                font-semibold
                text-white
                bg-[#0B4B94]
                hover:bg-[#083870]
                active:bg-[#062954]
                rounded-lg
                shadow-sm
                transition-all
                duration-200
              "
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}