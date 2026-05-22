import React from 'react';
import { useLanguage } from '../helpers/i18n/context';

const pages = [
  { key: 'about', tKey: 'nav.about', icon: 'user' },
  { key: 'resume', tKey: 'nav.resume', icon: 'book-open' },
  { key: 'projects', tKey: 'nav.projects', icon: 'folder-open' },
  { key: 'blog', tKey: 'nav.blog', icon: 'book-open' },
  { key: 'contact', tKey: 'nav.contact', icon: 'paper-plane' },
];

const Navbar = ({ activePage, setActivePage }) => {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <div className="nav-wrap animate-in">
      {pages.map(page => (
        <button
          key={page.key}
          className={`nav-btn ${activePage === page.key ? 'active' : ''}`}
          onClick={() => setActivePage(page.key)}
        >
          {t(page.tKey)}
        </button>
      ))}
      <button
        className="nav-btn lang-toggle"
        onClick={toggleLang}
        title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
      >
        {lang === 'vi' ? 'EN' : 'VI'}
      </button>
    </div>
  );
};

export default Navbar;
