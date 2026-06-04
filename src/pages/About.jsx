import React from "react";
import aboutHero from "../assets/IMG-20260603-WA0010_LE_upscale_prime.jpg";
import serviceAreas from "../assets/service-areas.png";

export default function About({ setCurrentPage }) {
  const coreValues = [
    {
      title: "Integrity",
      desc: "We act honestly, ethically and professionally in all our dealings, ensuring trust is at the core of our partnerships.",
      icon: (
        <svg
          className="w-6 h-6 text-primex-teal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Safety",
      desc: "We believe every worker deserves to return home safe at the end of every day. Safety is our primary mission.",
      icon: (
        <svg
          className="w-6 h-6 text-primex-teal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      desc: "We strive to deliver high-quality services and professional solutions that exceed industry standards.",
      icon: (
        <svg
          className="w-6 h-6 text-primex-teal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Partnership",
      desc: "We work collaboratively with clients to understand their business needs and build lasting relationships.",
      icon: (
        <svg
          className="w-6 h-6 text-primex-teal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Improvement",
      desc: "We promote ongoing improvement in workplace health and safety performance through constant evaluation.",
      icon: (
        <svg
          className="w-6 h-6 text-primex-teal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION — text left, image right, CTA below */}
      <section
        className="relative min-h-[560px] md:min-h-[680px] bg-cover bg-center border-b border-gray-100 overflow-hidden"
        style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Two-column row */}
          <div className="max-w-xl">
            {/* LEFT: Text */}
            <div className="flex flex-col space-y-7">
              <span className="text-primex-orange text-sm font-bold uppercase tracking-widest">
                {/* About */}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="text-primex-navy">Primex WHS</span>
                <br />
                <span className="text-primex-orange">Consulting</span>
              </h1>
              <div className="w-20 h-1 bg-primex-orange rounded-full"></div>
              <div className="space-y-5 text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                <p>
                  Primex WHS Consulting is a Victoria-based Workplace Health and
                  Safety consultancy focused on helping businesses develop
                  practical Occupational Health and Safety Management Systems
                  aligned with ISO 45001:2018.
                </p>
                <p>
                  We understand the operational challenges faced by
                  manufacturing, warehousing, logistics, food production,
                  automotive, workshop, cleaning and labour hire businesses.
                </p>
                <p>
                  Our goal is to help organisations establish practical systems
                  that support safer workplaces and continual improvement while
                  remaining simple, effective and suitable for day-to-day
                  operations.
                </p>
                <p>
                  We provide on-site consulting services throughout Victoria and
                  remote consulting services to businesses across Australia.
                </p>
              </div>
            </div>

            {/* RIGHT: Image — full uncropped */}
          </div>

          {/* Orange CTA button centered below the two columns */}
          <div className="mt-12">
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-primex-orange hover:bg-orange-600 text-white px-8 py-3 rounded text-base font-bold tracking-wide transition-colors cursor-pointer inline-block">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-gray-50 py-12 md:py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-150 space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="p-2 bg-teal-50 rounded text-primex-teal">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-primex-navy font-display">
                  Our Vision
                </h2>
              </div>
              <p className="text-base text-gray-700 font-medium italic border-l-4 border-primex-teal pl-3.5 leading-relaxed">
                "To be a trusted WHS consulting partner for Australian
                businesses by delivering practical, effective and sustainable
                safety management systems that help create safer workplaces and
                support continuous improvement."
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-150 space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="p-2 bg-teal-50 rounded text-primex-teal">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-primex-navy font-display">
                  Our Mission
                </h2>
              </div>
              <p className="text-base text-gray-700 font-medium italic border-l-4 border-primex-teal pl-3.5 leading-relaxed">
                "To help businesses build strong safety cultures through
                practical ISO 45001-based management systems, risk management
                and ongoing WHS support."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primex-navy tracking-tight inline-block relative pb-3">
              Our Core Values
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-primex-teal rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg border border-gray-150 space-y-3.5">
                <div className="p-2.5 bg-white rounded inline-block border border-gray-100">
                  {val.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primex-navy font-display">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[#f7fbff] py-12 md:py-16 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={serviceAreas}
            alt="Service areas: Victoria on-site WHS consulting and Australia-wide remote WHS support"
            className="block w-full h-auto"
          />
        </div>
      </section>

      {/* Ready to build safer workplace */}
      <section className="bg-white py-12 text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primex-navy tracking-tight">
            Ready to build a safer workplace?
          </h2>
          <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Contact us today for a free initial consultation. Let's discuss how
            we can create a practical safety management system for your
            business.
          </p>
          <div className="pt-1">
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-primex-orange hover:bg-orange-600 text-white px-8 py-3.5 rounded text-base font-bold tracking-wide transition-colors cursor-pointer inline-block">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
