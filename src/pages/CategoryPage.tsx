import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Filter } from 'lucide-react';
import { getCategoryById } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { Product } from '../types/types';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const category = getCategoryById(id || '');
  const allCategoryProducts = getProductsByCategory(category?.name || '');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allCategoryProducts);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortOption, setSortOption] = useState('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      filterAndSortProducts();
    }
  }, [category, minPrice, maxPrice, sortOption, showDiscountedOnly, selectedSubcategory]);

  const filterAndSortProducts = () => {
    let filtered = allCategoryProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Filter by subcategory if selected
    if (selectedSubcategory && selectedSubcategory !== 'all') {
      filtered = filtered.filter((product) => {
        // Check if product subcategory matches or if it's in the selected subcategory's category
        return product.subcategory === selectedSubcategory || 
               product.categories.includes(selectedSubcategory);
      });
    }

    if (showDiscountedOnly) {
      filtered = filtered.filter((product) => product.isPromotion === true);
    }

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

  const handleSubcategoryChange = (subcategoryId: string | null) => {
    setSelectedSubcategory(subcategoryId);
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">القسم غير موجود</h1>
        <p>عذراً، القسم الذي تبحث عنه غير موجود.</p>
      </div>
    );
  }

  return (
    <main className="bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl mb-8 bg-gradient-to-r from-primary-900 to-primary-700 h-48 flex items-center">
          <div className="absolute inset-0">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
            />
          </div>
          <div className="relative z-10 text-white text-center w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
            {category.englishName && (
              <p className="text-primary-200">{category.englishName}</p>
            )}
          </div>
        </div>

        <div className="md:hidden mb-4">
          <button
            onClick={toggleMobileFilter}
            className="w-full bg-white rounded-lg shadow-md p-3 flex items-center justify-center text-primary-700 font-medium"
          >
            <Filter size={20} className="ml-2" />
            {t('filter')}
          </button>
        </div>

        {/* Subcategories Section */}
        {category?.subcategories && category.subcategories.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 overflow-x-auto">
              <button
                onClick={() => handleSubcategoryChange(null)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedSubcategory === null
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                الكل
              </button>
              {category.subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => handleSubcategoryChange(subcategory.name)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedSubcategory === subcategory.name
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  {subcategory.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 lg:w-1/5">
            {isMobileFilterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={toggleMobileFilter}>
                <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-white h-full" onClick={(e) => e.stopPropagation()}>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default CategoryPage;