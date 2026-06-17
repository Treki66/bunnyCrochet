import React from 'react';
import data from "@/data.json";
import { ProductsPage } from './ProductsPage';
import { PRODUCTS_TYPES } from '@/constants';

export function PatternsPage() {
  const products = data.patterns;
  return (
    <ProductsPage
      title='Mes patrons'
      subtitle='Patrons au crochet en format PDF, disponibles en téléchargement immédiat.\nChaque patron inclut les instructions étape par étape, les abréviations et les conseils de montage, conçus pour les crocheteurs de tous niveaux'
      products={products}
      breadcrumbsList={['Accueil', 'Patrons']}
      productType={PRODUCTS_TYPES.PATTERN}
    />
  );
}