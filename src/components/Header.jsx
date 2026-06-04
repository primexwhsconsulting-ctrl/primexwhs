import React, { useState } from "react";
import logo from "../assets/logo.png"; // Ens ure this path is correct for your project structure

export default function Header({ currentPage = "home", setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => setCurrentPage("home")}>
            {!logoError ? (
              <img
                className="h-12 md:h-20 w-auto object-contain"
                src={logo}
                alt="Primex WHS Consulting"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded bg-primex-navy flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-primex-navy font-display">
                    PRIMEX
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 -mt-1">
                    WHS Consulting
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation - Reset to standard size */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`text-base font-semibold tracking-wide transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-primex-teal border-b-2 border-primex-teal"
                      : "text-primex-navy hover:text-primex-teal"
                  }`}
                  id={`nav-link-${link.id}`}>
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button - Standard size and Orange color */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setCurrentPage("contact")}
              id="cta-book-consultation"
              className="bg-primex-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide transition-colors cursor-pointer">
              Book a Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-primex-navy hover:text-primex-teal hover:bg-gray-50 focus:outline-none"
              aria-expanded="false"
              id="mobile-menu-btn">
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2.5 rounded text-base font-semibold ${
                    isActive
                      ? "bg-gray-50 text-primex-teal"
                      : "text-primex-navy hover:bg-gray-50 hover:text-primex-teal"
                  }`}>
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-gray-100 px-3">
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primex-orange hover:bg-orange-600 text-white text-center py-2.5 rounded text-base font-bold cursor-pointer block">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
