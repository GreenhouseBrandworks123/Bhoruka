import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Hydro', path: '/hydro' },
  { name: 'Solar', path: '/solar' },
  { name: 'Wind', path: '/wind' },
  { name: 'CSR', path: '/csr' },
  { name: 'About Us', path: '/about' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm transition-all duration-200">
      {/* Removed horizontal padding container here so the layout can touch the absolute edges if desired, or kept responsive via px */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-[84px]">
          
          {/* Logo Section (Increased size & pushed fully left) */}
          <div className="flex items-center -ml-2 sm:ml-0">
            <Link 
              to="/" 
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
              onClick={closeMobileMenu}
              aria-label="Bhoruka - Home"
            >
              <img
                src={logo}
                alt="Bhoruka Logo"
                className="h-20 sm:h-24 max-w-[200px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (Absolute Centered) */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-200 py-1 inline-block ${
                        isActive
                          ? 'text-[#0B4B94] font-semibold'
                          : 'text-slate-700 hover:text-[#0B4B94]'
                      } group`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#0B4B94] rounded-full transition-transform duration-200 ease-out origin-left ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button & Mobile Hamburger Section (Right) */}
          <div className="flex items-center">
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0B4B94] hover:bg-[#083870] active:bg-[#062954] rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B4B94]"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#0B4B94] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0B4B94] transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-100 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          <ul className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-blue-50 text-[#0B4B94] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B4B94]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-4 mt-2 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-[#0B4B94] hover:bg-[#083870] active:bg-[#062954] rounded-lg shadow-sm transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}