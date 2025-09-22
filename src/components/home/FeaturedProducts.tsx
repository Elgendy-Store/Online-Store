import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBudget } from '../../context/BudgetContext';
import { getNewArrivals, getPromotionalItems, getBundles } from '../../data/products';
import ProductCard from '../products/ProductCard';
import Carousel from '../Carousel';

const FeaturedProducts: React.FC<{autoplay?: boolean; autoplayInterval?: number}> = ({ autoplay = true, autoplayInterval = 100000 }) => {
  const { t } = useTranslation();
  useBudget(); // ProductCard uses context directly

  const featuredProducts = getNewArrivals()
    .concat(getPromotionalItems())
    .concat(getBundles())
    .filter((item, idx, arr) => arr.findIndex(p => p.id === item.id) === idx)
    .slice(0, 10);

  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t('featuredProducts')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            اكتشف أحدث المنتجات والعروض المميزة في متجرنا
          </p>
        </div>
        <Carousel
          items={featuredProducts}
          renderItem={(product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )}
          autoScroll={autoplay}
          interval={autoplayInterval}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;