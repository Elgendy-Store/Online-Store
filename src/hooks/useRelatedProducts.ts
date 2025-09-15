import { useMemo } from 'react';
import { Product } from '../types/types';

interface RelatedProductsOptions {
  priceFilter?: boolean;
  maxProducts?: number;
}

export const useRelatedProducts = (
  currentProduct: Product,
  allProducts: Product[],
  options: RelatedProductsOptions = { priceFilter: true, maxProducts: 6 }
) => {
  const { priceFilter = true, maxProducts = 6 } = options;

  const relatedProducts = useMemo(() => {
    const others = allProducts.filter(p => p.id !== currentProduct.id);

    let filtered: Product[] = [];

    // 1. Strictly match subcategory if it exists
    if (currentProduct.subcategory) {
      filtered = others.filter(p => p.subcategory === currentProduct.subcategory);
    }

    // 2. If no subcategory or no matches, fallback to same category
    if (!currentProduct.subcategory || filtered.length === 0) {
      filtered = others.filter(p =>
        p.categories.some(cat => currentProduct.categories.includes(cat))
      );
    }

    // 3. Apply price filter only if there are still *too many* results

    // 4. Limit to maxProducts
    return filtered.slice(0, maxProducts);
  }, [currentProduct, allProducts, priceFilter, maxProducts]);

  return relatedProducts;
};

