import { PRODUCTS_TYPES } from "@/constants";
import data from "@/data.json";

export function getAllProductsForAutocompletion() {
  const allProducts = [
    ...data.creations.map((item) => ({
      id: item.id,
      name: item.name,
      type: PRODUCTS_TYPES.CREATION,
      description: item.description,
  })),
    ...data.patterns.map((item) => ({
      id: item.id,
      name: item.name,
      type: PRODUCTS_TYPES.PATTERN,
      description: item.description,
    })),
  ];
  return allProducts;
}

export function getCategoriesFromProducts(productType) {
  const categoryList = [];
  const products = productType === PRODUCTS_TYPES.CREATION ? data.creations : data.patterns;
  products.forEach((product) => {
    product.categories.forEach((category) => {
      if (!categoryList.includes(category)) {
        categoryList.push(category);
      }
    });
  });
  return categoryList;
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents (é → e, à → a, etc.)
    .replace(/[^a-z0-9\s-]/g, '')    // remove special characters (parentheses, etc.)
    .trim()
    .replace(/\s+/g, '-')           // spaces → hyphens
    .replace(/-+/g, '-');           // collapse multiple hyphens
}