import React from 'react';
import data from "@/data.json";
import ItemsCarousel from '@/components/ItemsCarousel';
import { PRODUCTS_TYPES, ROUTES } from '@/constants';
import './style.css';

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Bienvenue chez BunnyCrochet</span>
          <h1>
            Des créations uniques
            <br />
            réalisées au crochet
          </h1>
          <p className="hero-subtitle">
            Peluches, décorations et patrons conçus avec passion
            pour apporter douceur et originalité à votre quotidien.
          </p>
          <div className="hero-actions">
            <a href="/creations" className="btn-primary">Voir les créations</a>
            <a href="/patrons" className="btn-secondary">Mes patrons</a>
          </div>
        </div>
      </section>

      <div className="section-block">
        <div className="section-header">
          <h2 className="section-title">Mes créations</h2>
          <p className="section-subtitle">Peluches, coussins et porte-clés faits main</p>
        </div>
        <ItemsCarousel items={data.creations} productType={PRODUCTS_TYPES.CREATION} />
        <div className="section-footer">
          <a href="/creations" className="section-link">Voir tout →</a>
        </div>
      </div>

      <div className="section-block">
        <div className="section-header">
          <h2 className="section-title">Mes patrons</h2>
          <p className="section-subtitle">Réalisez vos propres créations au crochet</p>
        </div>
        <ItemsCarousel items={data.patterns} productType={PRODUCTS_TYPES.PATTERN} />
        <div className="section-footer">
          <a href="/patrons" className="section-link">Voir tout →</a>
        </div>
      </div>

      <section className="advantages">
        <div className="advantage-card">
          <svg className="advantage-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <h3>Fait main</h3>
          <p>Chaque création est réalisée avec soin.</p>
        </div>
        <div className="advantage-card">
          <svg className="advantage-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
          <h3>Idéal à offrir</h3>
          <p>Un cadeau unique et original.</p>
        </div>
        <div className="advantage-card">
          <svg className="advantage-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
          </svg>
          <h3>Artisanal</h3>
          <p>Créations réalisées en France.</p>
        </div>
      </section>
    </div>
  );
}