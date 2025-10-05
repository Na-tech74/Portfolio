// components/Navbar.jsx
import React from 'react';

const Navbar = ({ activePage, setActivePage }) => {
  const pages = ['Bản thân', 'Học vấn', 'Portfolio', 'Blog', 'Liên hệ'];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map(page => (
          <li key={page} className="navbar-item">
            <button 
              className={`navbar-link ${activePage === page.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActivePage(page.toLowerCase())}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;