import React from 'react';
import { useTranslation } from 'react-i18next';
import { getAllProducts } from '../../data/products';
import ProductCard from '../products/ProductCard';
import Carousel from '../Carousel';

const StorageDevicesSection: React.FC = () => {
  const { t } = useTranslation();
  const allProducts = getAllProducts();
  // Filter by subcategory
  const storageProducts = allProducts.filter(
    (p) => p.subcategory === 'كروت تخزين' || p.subcategory === 'فلاشة تخزين'
  );

  return (
    <section id="storage-devices" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">كروت الميموري والفلاشات</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من كروت الميموري والفلاشات بأفضل الأسعار والجودة، مناسبة لجميع احتياجات التخزين.
          </p>
        </div>
        <Carousel
          items={storageProducts}
          renderItem={(product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )}
          autoScroll={false}
          interval={10000}
        />
      </div>
    </section>
  );
};

export default StorageDevicesSection;
