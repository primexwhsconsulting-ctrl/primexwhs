import React, { useState } from 'react';

export default function SafeImage({ src, alt, className = '', iconType = 'generic' }) {
  const [error, setError] = useState(false);

  const getIcon = () => {
    switch (iconType) {
      case 'safety-officer':
        return (
          <svg className="w-20 h-20 text-white opacity-85" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Person with hard hat / safety icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3h6v2H9z" />
          </svg>
        );
      case 'practical':
        return (
          <svg className="w-20 h-20 text-white opacity-85" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Hard hat or tools icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        );
      case 'industry':
        return (
          <svg className="w-20 h-20 text-white opacity-85" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Factory / Industry icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'iso':
        return (
          <svg className="w-20 h-20 text-white opacity-85" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Seal / Quality badge */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case 'dashboard':
        return (
          <svg className="w-20 h-20 text-white opacity-85" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Chart / Dashboard icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-20 h-20 text-white opacity-85" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Clipboard / Safety report */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
    }
  };

  const getGradient = () => {
    switch (iconType) {
      case 'safety-officer':
        return 'from-primex-navy to-primex-teal';
      case 'practical':
        return 'from-primex-teal to-cyan-800';
      case 'industry':
        return 'from-slate-700 to-primex-navy';
      case 'iso':
        return 'from-primex-navy to-cyan-900';
      case 'dashboard':
        return 'from-cyan-950 to-primex-teal';
      default:
        return 'from-gray-700 to-gray-900';
    }
  };

  const getLabel = () => {
    switch (iconType) {
      case 'safety-officer': return 'Safety Professional Photo';
      case 'practical': return 'Practical Solutions Setup';
      case 'industry': return 'Industrial & Manufacturing Focus';
      case 'iso': return 'ISO 45001 Certification Standard';
      case 'dashboard': return 'Digital Safety Dashboard';
      default: return 'Primex Visual Asset';
    }
  };

  if (!error && src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} object-cover w-full h-full`}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <div className={`${className} bg-gradient-to-br ${getGradient()} flex flex-col items-center justify-center p-8 relative overflow-hidden group`}>
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
      
      {/* Animated accent circle */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primex-orange rounded-full opacity-10 blur-xl group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full opacity-5 blur-xl group-hover:scale-125 transition-transform duration-700" />

      {/* Main icon */}
      <div className="z-10 transform group-hover:scale-110 transition-transform duration-300">
        {getIcon()}
      </div>
      
      {/* Informative text label */}
      <span className="z-10 mt-4 text-white font-display text-sm tracking-wider font-semibold uppercase opacity-90 text-center px-4">
        {getLabel()}
      </span>
      <span className="z-10 mt-1.5 text-xs text-white opacity-60 text-center font-sans">
        Place your image file in src/assets
      </span>
    </div>
  );
}
