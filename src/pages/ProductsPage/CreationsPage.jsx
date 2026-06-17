import React from 'react';
import data from "@/data.json";
import { ProductsPage } from './ProductsPage';
import { PRODUCTS_TYPES } from '@/constants';

export function CreationsPage() {
  const products = data.creations;
  return (
    <ProductsPage
      title='Mes créations'
      subtitle='Toutes mes créations au crochet, réalisées avec amour, et adaptées aux enfants.\nPeluches, coussins et porte-clés entièrement faits main, disponibles en plusieurs tailles, matières et couleurs.'
      products={products}
      breadcrumbsList={['Accueil', 'Créations']}
      productType={PRODUCTS_TYPES.CREATION}
    />
  );
}