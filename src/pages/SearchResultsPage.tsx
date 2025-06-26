import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Filter, Search, X } from 'lucide-react';
import { searchProducts } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { Product } from '../types/types';

const SearchResultsPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const allSearchResults = searchProducts(query);
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allSearchResults);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortOption, setSortOption] = useState('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false); // New state for discount filter

  useEffect(() => {
    setFilteredProducts(searchProducts(query));
  }, [query]);

  useEffect(() => {
    filterAndSortProducts();
  }, [minPrice, maxPrice, sortOption, showDiscountedOnly]); // Include showDiscountedOnly

  const filterAndSortProducts = () => {
    let filtered = allSearchResults.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Apply discount filter based on isPromotion
    if (showDiscountedOnly) {
      filtered = filtered.filter((product) => product.isPromotion === true);
    }

    // Sort products
    switch (sortOption) {
      case 'newest':
        filtered = [...filtered].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'highest-rated':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
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
        {/* Search Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center">
            <Search size={24} className="text-primary-600 ml-3" />
            <div>
              <h1 className="text-2xl font-bold mb-1">نتائج البحث</h1>
              <p className="text-neutral-600">
                {filteredProducts.length} نتيجة لـ "{query}"
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={toggleMobileFilter}
            className="w-full bg-white rounded-lg shadow-md p-3 flex items-center justify-center text-primary-700 font-medium"
          >
            <Filter size={20} className="ml-2" />
            {t('filter')}
          </button>
        </div>

        {/* Products and Filter */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="md:w-1/4 lg:w-1/5">
            {/* Mobile Filter Overlay */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={toggleMobileFilter}>
                <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-white h-full" onClick={(e) => e.stopPropagation()}>
                  <ProductFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceChange={handlePriceChange}
                    onSortChange={handleSortChange}
                    onDiscountFilterChange={handleDiscountFilterChange} // Pass the new callback
                    onFilterToggle={toggleMobileFilter}
                    isMobileFilterOpen={isMobileFilterOpen}
                  />
                </div>
              </div>
            )}
            
            {/* Desktop Filter */}
            <div className="hidden md:block">
              <ProductFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onPriceChange={handlePriceChange}
                onSortChange={handleSortChange}
                onDiscountFilterChange={handleDiscountFilterChange} // Pass the new callback
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
                <p className="text-neutral-600 mb-6">
                  لم نتمكن من العثور على أي منتجات تطابق بحثك "{query}". يرجى تجربة كلمات بحث أخرى.
                </p>
                <button
                  onClick={() => {
                    setSearchParams({});
                  }}
                  className="btn btn-primary"
                >
                  العودة للمنتجات
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchResultsPage;