import React from "react";

// Import assets properly for Vite bundling
import homeHerobg from "../assets/Home-Page.png";

export default function Home({ setCurrentPage }) {
  const industries = [
    "Manufacturing",
    "Logistics & Transport",
    "Automotive Operations",
    "Heavy Machinery & Equipment",
    "Education & Training",
    "Warehousing & Distribution",
    "Food & Drink Manufacturing",
    "Workshops & Engineering",
    "Processing Plants",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="border-b border-gray-100 bg-white overflow-hidden">
        {/* MOBILE / TABLET — stacked: text first, image below */}
        <div className="lg:hidden">
          <div className="px-6 sm:px-10 py-10 sm:py-12 flex flex-col space-y-4">
            <h1 className="hero-title text-primex-navy">
              Health & Safety Solutions for
              <span className="block text-primex-orange">Businesses</span>
            </h1>
            <div className="w-20 h-1 bg-primex-orange rounded-full"></div>
            <div className="space-y-3 lead-text">
              <p>
                Helping businesses develop effective Occupational Health &
                Safety Management Systems that improve safety performance,
                manage workplace risks and support continual improvement.
              </p>
              <p>
                We provide on-site WHS consulting services throughout Victoria
                and remote consulting services across Australia.
              </p>
            </div>
            <div>
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-primex-orange hover:bg-orange-600 text-white px-6 py-3 rounded text-base font-bold tracking-wide transition-colors cursor-pointer">
                Book a Free Consultation
              </button>
            </div>
          </div>
          <img
            src={homeHerobg}
            alt="Workplace safety management — risk assessment, compliance and continuous improvement"
            className="w-full h-auto block"
          />
        </div>

        {/* DESKTOP — full-bleed background with overlaid text */}
        <div
          className="hidden lg:block relative h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeHerobg})` }}>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl pl-28 pr-8 flex flex-col space-y-4">
              <h1 className="hero-title text-primex-navy">
                Health & Safety Solutions for
                <span className="block text-primex-orange">Businesses</span>
              </h1>
              <div className="w-20 h-1 bg-primex-orange rounded-full"></div>
              <div className="space-y-3 lead-text">
                <p>
                  Helping businesses develop effective Occupational Health &
                  Safety Management Systems that improve safety performance,
                  manage workplace risks and support continual improvement.
                </p>
                <p>
                  We provide on-site WHS consulting services throughout Victoria
                  and remote consulting services across Australia.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="bg-primex-orange hover:bg-orange-600 text-white px-6 py-3 rounded text-base font-bold tracking-wide transition-colors cursor-pointer">
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES WE SUPPORT */}
      <section className="bg-gray-50 py-12 md:py-20 border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Headline */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
              <h2 className="section-title leading-tight">
                Industries We Support
              </h2>
              <div className="w-12 h-1 bg-primex-teal rounded-full mb-1"></div>
              <p className="body-text">
                We support business owners, managers and key stakeholders to
                develop, implement and maintain practical OHS/WHS systems. Our
                services cover industries from small and medium enterprises
                through to established manufacturing, commercial and industrial
                operations.
              </p>
            </div>

            {/* Right Industry Grid */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {industries.map((ind, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2.5 py-0.5">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-primex-teal"></span>
                    </span>
                    <span className="text-base text-gray-700 font-semibold">
                      {ind}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE PRIMEX WHS CONSULTING — text-only card grid */}
      <section className="bg-gray-50 py-12 md:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="eyebrow mb-2">
              Why Choose Us
            </p>
            <h2 className="section-title inline-block relative pb-3">
              WHY CHOOSE PRIMEX WHS CONSULTING
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-primex-teal rounded-full"></span>
            </h2>
          </div>

          {/* 5-card grid: 3 on top row, 2 centered on bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Practical Solutions */}
            <div className="bg-white rounded-lg border border-primex-orange/45 shadow-[0_12px_32px_rgba(255,122,0,0.16)] md:border-gray-150 md:shadow-sm md:hover:-translate-y-1 md:hover:border-primex-orange/60 md:hover:shadow-[0_18px_45px_rgba(255,122,0,0.22)] transition-all duration-300 p-7 flex flex-col space-y-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-teal-50 border border-teal-100">
                <svg
                  className="w-6 h-6 text-primex-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="card-title">
                Practical Solutions
              </h3>
              <p className="card-text">
                We develop practical Workplace Health and Safety Management
                Systems that are simple to implement and suitable for day-to-day
                business operations.
              </p>
            </div>

            {/* Card 2: Industry Experience */}
            <div className="bg-white rounded-lg border border-primex-orange/45 shadow-[0_12px_32px_rgba(255,122,0,0.16)] md:border-gray-150 md:shadow-sm md:hover:-translate-y-1 md:hover:border-primex-orange/60 md:hover:shadow-[0_18px_45px_rgba(255,122,0,0.22)] transition-all duration-300 p-7 flex flex-col space-y-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-teal-50 border border-teal-100">
                <svg
                  className="w-6 h-6 text-primex-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="card-title">
                Industry Experience
              </h3>
              <p className="card-text">
                We understand the operational challenges faced by manufacturing,
                warehousing, logistics, food production and industrial
                businesses.
              </p>
            </div>

            {/* Card 3: ISO 45001 Focus */}
            <div className="bg-white rounded-lg border border-primex-orange/45 shadow-[0_12px_32px_rgba(255,122,0,0.16)] md:border-gray-150 md:shadow-sm md:hover:-translate-y-1 md:hover:border-primex-orange/60 md:hover:shadow-[0_18px_45px_rgba(255,122,0,0.22)] transition-all duration-300 p-7 flex flex-col space-y-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-teal-50 border border-teal-100">
                <svg
                  className="w-6 h-6 text-primex-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="card-title">
                ISO 45001 Focus
              </h3>
              <p className="card-text">
                Our services are focused on developing, implementing and
                improving Occupational Health and Safety Management Systems
                aligned with ISO 45001:2018.
              </p>
            </div>
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:max-w-2xl md:mx-auto">
            {/* Card 4: Client-Focused Approach */}
            <div className="bg-white rounded-lg border border-primex-orange/45 shadow-[0_12px_32px_rgba(255,122,0,0.16)] md:border-gray-150 md:shadow-sm md:hover:-translate-y-1 md:hover:border-primex-orange/60 md:hover:shadow-[0_18px_45px_rgba(255,122,0,0.22)] transition-all duration-300 p-7 flex flex-col space-y-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-teal-50 border border-teal-100">
                <svg
                  className="w-6 h-6 text-primex-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="card-title">
                Client-Focused Approach
              </h3>
              <p className="card-text">
                We work closely with our clients to understand their operations
                and provide practical support tailored to their business needs.
              </p>
            </div>

            {/* Card 5: Continuous Improvement */}
            <div className="bg-white rounded-lg border border-primex-orange/45 shadow-[0_12px_32px_rgba(255,122,0,0.16)] md:border-gray-150 md:shadow-sm md:hover:-translate-y-1 md:hover:border-primex-orange/60 md:hover:shadow-[0_18px_45px_rgba(255,122,0,0.22)] transition-all duration-300 p-7 flex flex-col space-y-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-teal-50 border border-teal-100">
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
              </div>
              <h3 className="card-title">
                Continuous Improvement
              </h3>
              <p className="card-text">
                We help organisations identify opportunities to strengthen
                safety performance through structured and sustainable
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. READY TO IMPROVE BANNER */}
      <section className="bg-gray-50 py-12 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="section-title">
            Ready to Improve Your Workplace Health & Safety?
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Contact Primex WHS Consulting today to discuss your requirements.
          </p>
          <div className="pt-1">
            <button
              onClick={() => setCurrentPage("contact")}
              id="bottom-cta-contact-us"
              className="bg-primex-orange hover:bg-orange-600 text-white px-8 py-3 rounded text-base font-bold tracking-wide transition-colors cursor-pointer inline-block">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
