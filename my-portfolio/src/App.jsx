import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import './assets/css/styles.css';

const App = () => {
  const [activePage, setActivePage] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.noModule = true;
    script2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <main>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        
        {/* Render all pages with conditional active class */}
        <AboutPage isActive={activePage === 'bản thân'}/>
        <ResumePage isActive={activePage === 'học vấn'} />
        <PortfolioPage isActive={activePage === 'portfolio'} />
        <BlogPage isActive={activePage === 'blog'} />
        <ContactPage isActive={activePage === 'liên hệ'} />
      </div>
    </main>
  );
};

export default App;