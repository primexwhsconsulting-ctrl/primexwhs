import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // Optional element id to scroll to after a navigation (e.g. the contact form)
  const [scrollTarget, setScrollTarget] = useState(null);
  const lastPage = useRef(currentPage);

  // Scroll to a requested element when set, otherwise to the top on page change
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setScrollTarget(null);
      lastPage.current = currentPage;
      return;
    }
    if (lastPage.current !== currentPage) {
      window.scrollTo(0, 0);
      lastPage.current = currentPage;
    }
  }, [currentPage, scrollTarget]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} setScrollTarget={setScrollTarget} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} setScrollTarget={setScrollTarget} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} setScrollTarget={setScrollTarget} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 bg-white">
      {/* Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setScrollTarget={setScrollTarget} />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      {/* Footer Area */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
