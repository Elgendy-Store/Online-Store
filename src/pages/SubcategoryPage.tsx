import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Filter } from 'lucide-react';
import { getProductsBySubcategory } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { Product } from '../types/types';
import { categories as allCategories } from '../data/categories'; // ✅ استبدلت require بـ import
import '../styles/subcategory-btn.css';

const SubcategoryPage: React.FC = () => {
  const { subcategoryName } = useParams<{ subcategoryName: string }>();
  const { t } = useTranslation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortOption, setSortOption] = useState('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);

  useEffect(() => {
    if (subcategoryName) {
      filterAndSortProducts();
    }
    // eslint-disable-next-line
  }, [subcategoryName, minPrice, maxPrice, sortOption, showDiscountedOnly]);

  const filterAndSortProducts = () => {
    let products = getProductsBySubcategory(subcategoryName || '');
    let filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    if (showDiscountedOnly) {
      filtered = filtered.filter((product) => product.isPromotion === true);
    }
    switch (sortOption) {
      case 'newest':
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime()
        );
        break;
      case 'highest-rated':
        filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'price-low-high':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(filtered);
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
  };

  const handleDiscountFilterChange = (showDiscounted: boolean) => {
    setShowDiscountedOnly(showDiscounted);
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <main className="bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl mb-8 bg-gradient-to-r from-primary-900 to-primary-700 h-48 flex flex-col items-center justify-center">
          <div className="absolute inset-0" />
          {/* ✅ عرض صورة القسم الفرعي لو متاحة */}
          {(() => {
            let subcatImg = '';
            for (const cat of allCategories) {
              const sub = cat.subcategories?.find(
                (s: any) =>
                  s.name === subcategoryName ||
                  s.englishName === subcategoryName
              );
              if (sub && sub.image) {
                subcatImg = sub.image;
                break;
              }
            }
            return subcatImg ? (
              <img
                src={subcatImg}
                alt={subcategoryName}
                className="w-16 h-16 object-contain rounded-full bg-white border mb-2 z-10"
              />
            ) : null;
          })()}
          <div className="relative z-10 text-white text-center w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{subcategoryName}</h1>
          </div>
        </div>

        {/* ✅ زرار الفلتر في الموبايل */}
        <div className="md:hidden mb-4">
          <button
            onClick={toggleMobileFilter}
            className="w-full md:w-auto bg-primary-600 md:bg-white text-white md:text-primary-700 rounded-full md:rounded-lg shadow-lg md:shadow-md px-6 py-3 md:p-3 flex items-center justify-center font-bold md:font-medium text-base md:text-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <Filter size={20} className="ml-2" />
            {t('filter')}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 lg:w-1/5">
            {isMobileFilterOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
                onClick={toggleMobileFilter}
              >
                <div
                  className="absolute inset-y-0 right-0 max-w-sm w-full bg-white h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ProductFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceChange={handlePriceChange}
                    onSortChange={handleSortChange}
                    onDiscountFilterChange={handleDiscountFilterChange}
                    onFilterToggle={toggleMobileFilter}
                    isMobileFilterOpen={isMobileFilterOpen}
                  />
                </div>
              </div>
            )}
            <div className="hidden md:block">
              <ProductFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onPriceChange={handlePriceChange}
                onSortChange={handleSortChange}
                onDiscountFilterChange={handleDiscountFilterChange}
              />
            </div>
          </div>

          <div className="md:w-3/4 lg:w-4/5">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">لا توجد منتجات</h3>
                <p className="text-neutral-600">
                  لا توجد منتجات تطابق معايير البحث. يرجى تعديل المعايير والمحاولة مرة أخرى.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SubcategoryPage;
