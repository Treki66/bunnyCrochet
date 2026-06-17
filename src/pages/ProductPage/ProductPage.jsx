import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import data from "@/data.json";
import Breadcrumbs from "@/components/Breadcrumbs";
import ItemsCarousel from "@/components/ItemsCarousel";
import { PRODUCTS_TYPES, ROUTES } from "@/constants";
import AccordionItem from "@/components/AccordionItem";
import { slugify } from '@/utils';
import "./style.css";

const Arrow = ({ direction, onClick, disabled }) => (
  <button
    className={`custom-gallery-arrow ${direction}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "left" ? "Précédent" : "Suivant"}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === "left"
        ? <path d="M19 12H5M12 5l-7 7 7 7"/>
        : <path d="M5 12h14M12 5l7 7-7 7"/>
      }
    </svg>
  </button>
);

const ALL_LABEL = 'Tout';

export default function ProductPage({ productType }) {
  const { slug } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLabel, setActiveLabel] = useState(ALL_LABEL);

  const products = productType === PRODUCTS_TYPES.CREATION ? data.creations : data.patterns;
  const product = products.find((p) => slugify(p.name) === slug);

  if (!product) {
    return (
      <div className="product-notfound">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p className="product-notfound-title">Produit introuvable</p>
        <p className="product-notfound-subtitle">
          Le produit que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Link
          to={productType === PRODUCTS_TYPES.CREATION ? ROUTES.CREATIONS : ROUTES.PATTERNS}
          className="product-notfound-btn"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          {productType === PRODUCTS_TYPES.CREATION ? 'Voir les créations' : 'Voir les patrons'}
        </Link>
      </div>
    );
  }

  const carouselProducts = products.filter((p) =>
    p.id !== product.id &&
    p.categories.some((category) => product.categories.includes(category))
  );

  const allImages = useMemo(() => product.images.map((image) => ({
    original: image.image,
    thumbnail: image.image,
    label: image.label,
  })), [product.images]);

  const uniqueLabels = useMemo(() => {
    const labels = product.images
      .map((img) => img.label)
      .filter(Boolean);
    return [...new Set(labels)];
  }, [product.images]);

  const filteredImages = useMemo(() => {
    if (activeLabel === ALL_LABEL) return allImages;
    return allImages.filter((img) => img.label === activeLabel);
  }, [activeLabel, allImages]);

  const handleLabelClick = (label) => {
    setActiveLabel(label);
    setCurrentIndex(0);
  };

  const showLabelFilter = uniqueLabels.length > 1;

  return (
    <div className="product-page">
      <Breadcrumbs
        locations={["Accueil", productType === PRODUCTS_TYPES.CREATION ? "Créations" : "Patrons", product.name]}
      />

      <div className="product-content">
        <div className="product-images">
          {showLabelFilter && (
            <div className="gallery-label-filters">
              <span className="gallery-label-hint">Voir les photos pour :</span>
              <div className="gallery-label-tags">
                <button
                  className={`gallery-label-tag ${activeLabel === ALL_LABEL ? 'active' : ''}`}
                  onClick={() => handleLabelClick(ALL_LABEL)}
                >
                  {ALL_LABEL}
                </button>
                {uniqueLabels.map((label) => (
                  <button
                    key={label}
                    className={`gallery-label-tag ${activeLabel === label ? 'active' : ''}`}
                    onClick={() => handleLabelClick(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
          <ImageGallery
            key={activeLabel}
            items={filteredImages}
            showPlayButton={false}
            showFullscreenButton={false}
            startIndex={0}
            onSlide={(index) => setCurrentIndex(index)}
            renderLeftNav={(onClick, disabled) => (
              <Arrow direction="left" onClick={onClick} disabled={disabled} />
            )}
            renderRightNav={(onClick, disabled) => (
              <Arrow direction="right" onClick={onClick} disabled={disabled} />
            )}
            renderCustomControls={() =>
              filteredImages[currentIndex] && filteredImages[currentIndex].label && (
                <div className="image-label">{filteredImages[currentIndex].label}</div>
              )
            }
          />
        </div>

        <div className="product-info">
          {product.badge && (
            <span
              className="product-badge"
              style={{ color: product.badge.color, borderColor: product.badge.color }}
            >
              {product.badge.text}
            </span>
          )}

          <h1 className="product-title">{product.name}</h1>

          {product.categories && product.categories.length > 0 && (
            <div className="product-categories">
              {product.categories.map((category) => (
                <span key={category} className="product-category-tag">
                  {category}
                </span>
              ))}
            </div>
          )}

          <div className="product-sizes-list">
            {product.sizes && Object.entries(product.sizes).map(([size, price]) => (
              <div key={size} className="product-size-row">
                <span className="product-size-name">{size}</span>
                <span className="product-size-price">{price} €</span>
              </div>
            ))}
          </div>

          {product.description && (
            <p className="product-description">{product.description}</p>
          )}

          {productType === PRODUCTS_TYPES.CREATION &&
            <div className="product-custom-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>
                Les couleurs de laine sont personnalisables selon vos envies.{' '}
                <Link to={`${ROUTES.YARN_GUIDE_PAGE}#couleurs`} className="product-custom-colors-link">
                  Voir les couleurs disponibles →
                </Link>
              </span>
            </div>
            }

          <div className="product-accordion">
            {product.informations && product.informations.map((info) => (
              <AccordionItem key={info.title} title={info.title}>
                <ul className="product-info-list">
                  {info.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>

      {carouselProducts.length > 0 && (
        <section className="related-products">
          <div className="related-products-header">
            <h2>Vous aimerez aussi ...</h2>
          </div>
          <ItemsCarousel items={carouselProducts} productType={productType} />
        </section>
      )}
    </div>
  );
}