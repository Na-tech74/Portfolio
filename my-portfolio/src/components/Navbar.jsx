import React from 'react';

const pages = [
  { key: 'bản thân', label: 'Bản thân', icon: 'user' },
  { key: 'học vấn', label: 'Học vấn', icon: 'book-open' },
  { key: 'portfolio', label: 'Portfolio', icon: 'folder-open' },
  { key: 'blog', label: 'Blog', icon: 'book-open' },
  { key: 'liên hệ', label: 'Liên hệ', icon: 'paper-plane' },
];

const Navbar = ({ activePage, setActivePage }) => (
  <div className="nav-wrap animate-in">
    {pages.map(page => (
      <button
        key={page.key}
        className={`nav-btn ${activePage === page.key ? 'active' : ''}`}
        onClick={() => setActivePage(page.key)}
      >
        {page.label}
      </button>
    ))}
  </div>
);

export default Navbar;
