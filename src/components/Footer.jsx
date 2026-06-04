import React, { useState } from "react";
import logo from "../assets/logo.png";
export default function Footer({ setCurrentPage }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-200 items-start">
          {/* Brand Column */}
          <div className="flex flex-col space-y-3 items-start text-left">
            <div
              className="flex-shrink-0 flex items-center justify-start cursor-pointer"
              onClick={() => setCurrentPage("home")}>
              {!logoError ? (
                <img
                  className="h-20 md:h-28 w-auto object-contain"
                  src={logo}
                  alt="Primex WHS Consulting"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded bg-primex-navy flex items-center justify-center text-white font-bold text-base">
                    P
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold tracking-tight text-primex-navy font-display">
                      PRIMEX
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-gray-500 -mt-1">
                      WHS Consulting
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* <p className="text-gray-600 text-sm font-medium">
              Practical Health & Safety Solutions
            </p> */}
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col md:items-center">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Contact Info
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-1.5 font-semibold">
                    Location:
                  </span>
                  Melbourne, Victoria, Australia
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 mr-1.5 font-semibold">
                    Email:
                  </span>
                  <a
                    href="mailto:info@primexwhs.com.au"
                    className="text-primex-teal hover:underline font-semibold">
                    info@primexwhs.com.au
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col md:items-end">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>On-Site Services: Victoria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Remote Services: Australia Wide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 flex justify-center items-center text-gray-500 text-xs font-medium">
          <p>Copyright © 2026 Primex WHS Consulting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
