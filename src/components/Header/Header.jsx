import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants';
import SearchBar from '@/components/form';
import { getAllProductsForAutocompletion } from '@/utils';
import './style.css';

export default function Header() {
  const currentLocation = useLocation().pathname;
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const data = getAllProductsForAutocompletion();

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: ROUTES.CREATIONS, label: 'Mes créations' },
    { to: ROUTES.PATTERNS, label: 'Mes patrons' },
    { to: ROUTES.YARN_GUIDE_PAGE, label: 'Guide des matières' },
    { to: ROUTES.CONTACT, label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <button
          className="header-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`burger-line ${menuOpen ? 'open' : ''}`} />
        </button>

        <Link to={ROUTES.HOME} className="header-logo" onClick={closeMenu}>
          <span className="appTitle">BunnyCrochet</span>
        </Link>

        <div className="header-search">
          <SearchBar
            placeholder="Chercher une création / patron…"
            value={search}
            onChange={setSearch}
            data={data}
          />
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={currentLocation === item.to ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={currentLocation === item.to ? 'mobile-nav-link active' : 'mobile-nav-link'}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}