import { useState, useMemo, useEffect } from 'react';
import ItemCard from '@/components/ItemCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCategoriesFromProducts } from '@/utils';
import "./style.css";

const everyItemName = 'Tout';
const ITEMS_PER_PAGE = 12;

const SORT_OPTIONS = [
  { value: 'default', label: 'Par défaut' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'name-asc', label: 'A → Z' },
  { value: 'name-desc', label: 'Z → A' },
];

function getMinPrice(product) {
  if (!product.sizes) return 0;
  return Math.min(...Object.values(product.sizes));
}

function getPageNumbers(current, total) {
  const pages = [];
  const range = 1;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - range && i <= current + range)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }
  return pages;
}

export function ProductsPage({
  title,
  subtitle,
  products,
  breadcrumbsList,
  productType,
}) {
  const categories = getCategoriesFromProducts(productType);
  categories.unshift(everyItemName);

  const [activeFilter, setActiveFilter] = useState(everyItemName);
  const [activeSort, setActiveSort] = useState('default');
  const [sortOpen, setSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = activeFilter === everyItemName
      ? products
      : products.filter((p) => p.categories && p.categories.includes(activeFilter));

    switch (activeSort) {
      case 'price-asc':
        return [...result].sort((a, b) => getMinPrice(a) - getMinPrice(b));
      case 'price-desc':
        return [...result].sort((a, b) => getMinPrice(b) - getMinPrice(a));
      case 'name-asc':
        return [...result].sort((a, b) => a.name.localeCompare(b.name, 'fr'));
      case 'name-desc':
        return [...result].sort((a, b) => b.name.localeCompare(a.name, 'fr'));
      default:
        return result;
    }
  }, [activeFilter, activeSort, products]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  // Reset to page 1 whenever filter or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, activeSort]);

  // Clamp current page if filtering reduces total pages
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === activeSort)?.label;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="creations-page">
      <div className="products-hero">
        <Breadcrumbs locations={breadcrumbsList} />
        <h1 className="products-title">{title}</h1>
        <p className="products-subtitle">{subtitle.replace(/\\n/g, "\n")}</p>
      </div>

      <div className="products-toolbar">
        <span className="products-count">
          {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
        </span>

        <div className="products-filters">
          {categories.map((filter) => (
            <button
              key={filter}
              className={`filter-tag ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="products-sort">
          <button
            className={`sort-btn ${sortOpen ? 'open' : ''}`}
            onClick={() => setSortOpen(!sortOpen)}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="15" y2="12"/>
              <line x1="3" y1="18" x2="9" y2="18"/>
            </svg>
            {activeSortLabel}
            <svg className="sort-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {sortOpen && (
            <div className="sort-dropdown">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  className={`sort-option ${activeSort === option.value ? 'active' : ''}`}
                  onClick={() => { setActiveSort(option.value); setSortOpen(false); }}
                >
                  {option.label}
                  {activeSort === option.value && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="products-container">
        {paginatedProducts.map((product, index) => (
          <ItemCard
            key={`${activeFilter}-${activeSort}-${currentPage}-${product.id}`}
            images={product.images}
            name={product.name}
            promotion={product.promotion}
            badge={product.badge}
            sizes={product.sizes}
            type={productType}
            style={{ animationDelay: `${index * 40}ms` }}
          />
        ))}
        {filteredProducts.length === 0 && (
          <div className="products-empty">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            <p className="products-empty-title">Aucun produit trouvé</p>
            <p className="products-empty-subtitle">Aucun produit ne correspond à la catégorie sélectionnée.</p>
            <button className="products-empty-reset" onClick={() => setActiveFilter(everyItemName)}>
              Voir tous les produits
            </button>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-arrow"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Page précédente"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {getPageNumbers(currentPage, totalPages).map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="pagination-ellipsis">…</span>
            ) : (
              <button
                key={page}
                className={`pagination-page ${page === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            )
          ))}

          <button
            className="pagination-arrow"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Page suivante"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}