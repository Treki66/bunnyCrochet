import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-brand">BunnyCrochet</span>
        <p className="footer-copy">© 2026 — Fait main avec ❤️</p>
        <nav className="footer-nav">
          <Link to={ROUTES.CONDITIONS_UTILISATION}>Conditions générales d'utilisation</Link>
          <Link to={ROUTES.MENTIONS_LEGALES}>Mentions légales</Link>
        </nav>
      </div>
    </footer>
  );
}