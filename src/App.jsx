import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Automatically scroll to top of page when changing view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 bg-white">
      {/* Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
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
