import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

export default function NotFoundPage() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <span className="notfound-code">404</span>
        <h1 className="notfound-title">Page introuvable</h1>
        <p className="notfound-text">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="notfound-button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}