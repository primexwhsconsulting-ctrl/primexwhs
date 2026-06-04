import React, { useState } from "react";
import contactHero from "../assets/IMG-20260603-WA0009_LE_upscale_prime.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    industry: "",
    employeeRange: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.fullName,
          company: formData.companyName,
          email: formData.emailAddress,
          phone: formData.phoneNumber,
          industry: formData.industry,
          employees: formData.employeeRange,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section
        className="relative min-h-[520px] md:min-h-[650px] bg-cover bg-center border-b border-gray-100 overflow-hidden"
        style={{ backgroundImage: `url(${contactHero})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-primex-navy">
              Let's Discuss Your
              <span className="block text-primex-orange">
                Health &amp; Safety
              </span>
              Requirements
            </h1>
            <div className="w-20 h-1 bg-primex-orange rounded-full mt-6 mb-8"></div>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium max-w-lg">
              Whether you need assistance developing an ISO 45001 management
              system, reviewing your current safety processes or improving
              workplace health and safety performance, we would be pleased to
              discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & ENQUIRY FORM */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Details Cards */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              {/* Contact Details Card */}
              <div className="bg-white p-6 rounded-lg border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primex-teal" />
                <h2 className="text-lg font-bold text-primex-navy font-display">
                  CONTACT DETAILS
                </h2>

                <div className="space-y-3">
                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-gray-50 text-primex-teal rounded mt-0.5 border border-gray-100">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                        EMAIL US
                      </span>
                      <a
                        href="mailto:info@primexwhs.com.au"
                        className="text-base font-bold text-primex-teal hover:underline break-all">
                        info@primexwhs.com.au
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-gray-50 text-primex-teal rounded mt-0.5 border border-gray-100">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                        OUR OFFICE
                      </span>
                      <p className="text-base font-bold text-primex-navy leading-snug">
                        Melbourne, Victoria, Australia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Coverage Card */}
              <div className="bg-white p-6 rounded-lg border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primex-teal" />
                <h2 className="text-lg font-bold text-primex-navy font-display">
                  SERVICE COVERAGE
                </h2>

                <div className="space-y-3">
                  {/* On-Site */}
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      ON-SITE SERVICES
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-primex-teal" />
                      <span className="text-base font-bold text-primex-navy">
                        Victoria
                      </span>
                    </div>
                  </div>

                  {/* Remote */}
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      REMOTE SERVICES
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-primex-teal" />
                      <span className="text-base font-bold text-primex-navy">
                        Australia Wide
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-lg border border-gray-150 shadow-sm">
              <div className="space-y-1.5 mb-6">
                <h2 className="text-2xl font-bold text-primex-navy font-display">
                  SEND US AN ENQUIRY
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                  Complete the form below and one of our consultants will reach
                  out within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 text-teal-900 rounded p-6 text-center space-y-3">
                  <svg
                    className="w-12 h-12 text-primex-teal mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-sm font-medium text-teal-850">
                    Thank you for reaching out. A consultant from Primex WHS
                    Consulting will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primex-teal font-bold hover:underline text-sm cursor-pointer">
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="fullName"
                        className="text-sm font-bold text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-base focus:ring-1 focus:ring-primex-teal focus:border-primex-teal outline-none text-gray-800"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="companyName"
                        className="text-sm font-bold text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your Organization"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-base focus:ring-1 focus:ring-primex-teal focus:border-primex-teal outline-none text-gray-800"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="emailAddress"
                        className="text-sm font-bold text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        required
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-base focus:ring-1 focus:ring-primex-teal focus:border-primex-teal outline-none text-gray-800"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="phoneNumber"
                        className="text-sm font-bold text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+61 400 000 000"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-base focus:ring-1 focus:ring-primex-teal focus:border-primex-teal outline-none text-gray-800"
                      />
                    </div>

                    {/* Industry */}
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="industry"
                        className="text-sm font-bold text-gray-700">
                        Industry
                      </label>
                      <input
                        type="text"
                        name="industry"
                        id="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        placeholder="e.g. Manufacturing"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-base focus:ring-1 focus:ring-primex-teal focus:border-primex-teal outline-none text-gray-800"
                      />
                    </div>

                    {/* Employee Range */}
                    <div className="flex flex-col space-y-1">
                      <label
                        htmlFor="employeeRange"
                        className="text-sm font-bold text-gray-700">
                        Number of Employees
                      </label>
                      <input
                        type="text"
                        name="employeeRange"
                        id="employeeRange"
                        required
                        value={formData.employeeRange}
                        onChange={handleChange}
                        placeholder="e.g. 10 - 49"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-base focus:ring-1 focus:ring-primex-teal focus:border-primex-teal outline-none text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your health & safety requirements..."
                      className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-base focus:ring-1 focus:ring-primex-teal focus:border-primex-teal outline-none text-gray-800"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      id="submit-enquiry"
                      disabled={loading}
                      className="w-full bg-primex-orange hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded text-base tracking-wide transition-colors cursor-pointer text-center">
                      {loading ? "Sending..." : "Submit Enquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
