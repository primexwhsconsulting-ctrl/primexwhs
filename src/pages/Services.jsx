import React from "react";
import servicesHero from "../assets/IMG-20260603-WA0011_LE_upscale_prime.jpg";
import serviceImage1 from "../assets/1.png";
import serviceImage2 from "../assets/2.png";
import serviceImage3 from "../assets/3.png";
import serviceImage4 from "../assets/4.png";
import serviceImage5 from "../assets/5.png";
import serviceImage6 from "../assets/6.png";
import serviceImage7 from "../assets/7.png";
import serviceImage8 from "../assets/8.png";
import serviceImage9 from "../assets/9.png";
import serviceImage10 from "../assets/10.png";
import serviceImage11 from "../assets/11.png";
import serviceImage12 from "../assets/12.png";
import serviceImage13 from "../assets/13.png";
import serviceImage14 from "../assets/14.png";

export default function Services({ setCurrentPage }) {
  const serviceImages = [
    serviceImage1,
    serviceImage2,
    serviceImage3,
    serviceImage4,
    serviceImage5,
    serviceImage6,
    serviceImage7,
    serviceImage8,
    serviceImage9,
    serviceImage10,
    serviceImage11,
    serviceImage12,
    serviceImage13,
    serviceImage14,
  ];

  const serviceList = [
    {
      title: "ISO 45001:2018 Management Systems",
      desc: "Development, implementation and improvement of Occupational Health and Safety Management Systems aligned with ISO 45001:2018.",
      icon: "📋",
    },
    {
      title: "Risk Management",
      desc: "Hazard identification, risk assessments, risk registers and risk control recommendations.",
      icon: "⚠️",
    },
    {
      title: "WHS Policies & Procedures",
      desc: "Development and review of workplace health and safety policies, procedures and work instructions.",
      icon: "📄",
    },
    {
      title: "Safe Work Method Statements (SWMS)",
      desc: "Preparation and review of SWMS for operational and high-risk activities.",
      icon: "🛡️",
    },
    {
      title: "Workplace Inspections",
      desc: "Routine workplace inspections with findings, recommendations and corrective actions.",
      icon: "🔍",
    },
    {
      title: "Incident Investigation",
      desc: "Incident investigation, root cause analysis and corrective action management.",
      icon: "🚨",
    },
    {
      title: "Internal Audits",
      desc: "Assessment of system implementation, identification of gaps and opportunities for improvement.",
      icon: "📊",
    },
    {
      title: "Contractor Management",
      desc: "Development and improvement of contractor management processes and systems.",
      icon: "👷",
    },
    {
      title: "Training Systems & Training Matrix Development",
      desc: "Training matrix development, competency tracking and induction management support.",
      icon: "🏫",
    },
    {
      title: "Document Control Systems",
      desc: "Documented record management systems to support effective implementation of ISO 45001 requirements.",
      icon: "🗄️",
    },
    {
      title: "Return to Work (RTW) & Injury Management",
      desc: "Development of Return to Work plans, suitable duties programs and support for workplace injury management.",
      icon: "🏥",
    },
    {
      title: "Emergency Management",
      desc: "Development and review of emergency plans, evacuation procedures and emergency preparedness arrangements.",
      icon: "🚪",
    },
    {
      title: "Safety Culture Improvement",
      desc: "Supporting worker consultation, participation and engagement to strengthen workplace safety culture.",
      icon: "🤝",
    },
    {
      title: "Ongoing WHS Support",
      desc: "Practical ongoing support to assist businesses maintain and continually improve their health and safety systems.",
      icon: "🔄",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-gray-100 bg-white overflow-hidden">
        {/* MOBILE — stacked: text first, image below */}
        <div className="lg:hidden">
          <div className="px-4 sm:px-6 py-10 flex flex-col space-y-5">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-primex-navy">
              Our <span className="text-primex-orange">Services</span>
            </h1>
            <div className="w-16 h-1 bg-primex-orange rounded-full"></div>
            <p className="text-base text-gray-800 leading-relaxed font-medium">
              Comprehensive workplace health and safety solutions tailored to
              your organization's unique operational needs.
            </p>
            <button
              onClick={() => setCurrentPage("contact")}
              className="self-start bg-primex-orange hover:bg-orange-600 text-white px-6 py-3 rounded text-base font-bold tracking-wide transition-colors cursor-pointer">
              Book a Free Consultation
            </button>
          </div>
          <img
            src={servicesHero}
            alt="Our Services"
            className="w-full h-auto block"
          />
        </div>

        {/* DESKTOP — full image with text card overlay */}
        <div className="hidden lg:block relative h-[120vh]">
          <img
            src={servicesHero}
            alt="Our Services"
            className="w-full h-full object-cover block"
          />
          <div className="absolute inset-0 flex items-start pt-12 xl:pt-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-md flex flex-col space-y-5">
                <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="text-primex-navy">Our</span>
                  <br />
                  <span className="text-primex-orange">Services</span>
                </h1>
                <div className="w-20 h-1 bg-primex-orange rounded-full"></div>
                <p className="text-base lg:text-lg text-gray-800 leading-relaxed font-medium">
                  Comprehensive workplace health and safety solutions tailored
                  to your organization's unique operational needs.
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="bg-primex-orange hover:bg-orange-600 text-white px-6 py-3 rounded text-base font-bold tracking-wide transition-colors cursor-pointer">
                    Book a Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primex-navy tracking-tight">
              Professional WHS Solutions
            </h2>
            <div className="w-12 h-1 bg-primex-teal rounded-full mx-auto"></div>
            <p className="text-base text-gray-600 font-medium">
              We provide expert guidance and practical implementation support
              across all aspects of Occupational Health and Safety.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((srv, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg border border-primex-orange/45 shadow-[0_12px_32px_rgba(255,122,0,0.16)] md:border-gray-150 md:shadow-sm md:hover:-translate-y-1 md:hover:border-primex-orange/60 md:hover:shadow-[0_18px_45px_rgba(255,122,0,0.22)] transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative overflow-hidden bg-[#f7fbff]">
                  <img
                    src={serviceImages[idx]}
                    alt={srv.title}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primex-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="w-12 h-1 bg-primex-orange rounded-full"></div>
                  <h3 className="text-lg font-bold text-primex-navy leading-snug font-display">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA section */}
      <section className="bg-white py-12 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primex-navy tracking-tight">
            Ready to Improve Your Workplace Safety?
          </h2>
          <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Contact us today for a free initial consultation to discuss how our
            services can be tailored to meet your compliance needs.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="w-full sm:w-auto bg-primex-orange hover:bg-orange-600 text-white px-8 py-3 rounded text-base font-bold tracking-wide transition-colors cursor-pointer">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
