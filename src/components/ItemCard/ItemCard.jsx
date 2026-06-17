import { useState } from 'react';
import { Link } from "react-router-dom";
import { PRODUCTS_TYPES, ROUTES } from "@/constants";
import { slugify } from '@/utils';
import "./style.css";

export default function ItemCard({ images, name, badge, sizes, type, style }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = images.length > 0 && !imgError;

  return (
    <Link
      to={`${type === PRODUCTS_TYPES.CREATION ? ROUTES.CREATION : ROUTES.PATTERN}/${slugify(name)}`}
      className="card-link"
      style={style}
    >
      <div className="card">
        <div className="card_image_wrapper">
          {hasImage ? (
            <>
              <img
                src={images[0].image}
                alt={name}
                className="card_image"
                onError={() => setImgError(true)}
              />
              <div
                className="card_hover_image"
                style={{ backgroundImage: `url(${images.length >= 2 ? images[1].image : images[0].image})` }}
              />
            </>
          ) : (
            <div className="card_image_placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              <span>Photo bientôt disponible</span>
            </div>
          )}
          {badge && (
            <div className="card_badge" style={{ color: badge.color, border: "1px solid " + badge.color }}>
              {badge.text}
            </div>
          )}
        </div>

        <div className="card_content">
          <h2 className="card_title">{name}</h2>
          <div className="card_sizes">
            {sizes &&
              Object.entries(sizes).map(([size, price]) => (
                <div key={size} className="card_size_item">
                  <span>{size}</span>
                  <span className="card_size_item_price">{price}€</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}