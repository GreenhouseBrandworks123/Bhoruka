import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
              onClick={closeMobileMenu}
              aria-label="Bhoruka - Home"
            >
              <img
                src="/logo.png"
                alt="Bhoruka Logo"
                className="h-10 sm:h-12 max-w-[150px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative text-sm lg:text-base font-medium transition-colors duration-200 py-1 inline-block ${
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

            {/* Desktop CTA Button */}
            <div className="pl-2 border-l border-slate-200">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0B4B94] hover:bg-[#083870] active:bg-[#062954] rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B4B94]"
              >
                Contact Us
              </Link>
            </div>
          </nav>

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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
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