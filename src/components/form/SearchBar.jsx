import { useState } from "react";
import { Link } from 'react-router-dom';
import { PRODUCTS_TYPES, ROUTES } from "@/constants";
import { slugify } from "@/utils";
import "./style.css";

function normalize(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function highlightText(text, query) {
  if (!query) return text;

  const normalizedText = normalize(text);
  const normalizedQuery = normalize(query);

  const parts = [];
  let lastIndex = 0;

  let searchIndex = normalizedText.indexOf(normalizedQuery, lastIndex);
  while (searchIndex !== -1) {
    if (searchIndex > lastIndex) {
      parts.push(text.slice(lastIndex, searchIndex));
    }
    parts.push(
      <span key={searchIndex} className="search_highlight">
        {text.slice(searchIndex, searchIndex + normalizedQuery.length)}
      </span>
    );
    lastIndex = searchIndex + normalizedQuery.length;
    searchIndex = normalizedText.indexOf(normalizedQuery, lastIndex);
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function SearchBar({ placeholder, value, onChange, data }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const filtered = data.filter((item) =>
    normalize(item.name).includes(normalize(value))
  );

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
    setOpen(true);
  };

  return (
    <div className={`search ${mobileOpen ? 'mobile-open' : ''}`}>
      <button
        type="button"
        className="search_toggle"
        onClick={handleMobileToggle}
        aria-label={mobileOpen ? "Fermer la recherche" : "Ouvrir la recherche"}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
      </button>
      <div className="search_container">
        <svg className="search_icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <input
          className="search_input"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => { onChange(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
        />
        {open && value && filtered.length > 0 && (
          <div className="search_dropdown">
            {filtered.map((item) => (
              <Link
                key={item.id}
                to={`${item.type === PRODUCTS_TYPES.CREATION ? ROUTES.CREATION : ROUTES.PATTERN}/${slugify(item.name)}`}
                className="search_item"
                onClick={() => { onChange(''); setOpen(false); setMobileOpen(false); }}
                title={item.description}
              >
                <svg className="search_item_icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
                <span>{highlightText(item.name, value)}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}