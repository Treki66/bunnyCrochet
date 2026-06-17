import { Link } from "react-router-dom";
import { ROUTES_NAMES } from "@/constants";
import "./style.css";

export default function Breadcrumbs({ locations = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Fil d'Ariane">
      {locations.map((location, index) => {
        const isLast = index === locations.length - 1;
        const path = ROUTES_NAMES[location];
        return (
          <span key={location} className="breadcrumb-item">
            {isLast ? (
              <span className="breadcrumb-current">{location}</span>
            ) : (
              <Link to={path} className="breadcrumb-link">{location}</Link>
            )}
            {!isLast && (
              <svg className="breadcrumb-separator" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            )}
          </span>
        );
      })}
    </nav>
  );
}