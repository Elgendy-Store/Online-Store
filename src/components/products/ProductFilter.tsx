import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';

interface ProductFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  onSortChange: (sort: string) => void;
  onDiscountFilterChange?: (showDiscounted: boolean) => void; // New prop for discount filter
  onFilterToggle?: () => void;
  isMobileFilterOpen?: boolean;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
  onSortChange,
  onDiscountFilterChange,
  onFilterToggle,
  isMobileFilterOpen,
}) => {
  const { t } = useTranslation();
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isSortOpen, setIsSortOpen] = useState(true);
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false); // State for discount filter

  const handlePriceSubmit = () => {
    onPriceChange(localMinPrice, localMaxPrice);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  const handleDiscountFilterChange = () => {
    const newValue = !showDiscountedOnly;
    setShowDiscountedOnly(newValue);
    if (onDiscountFilterChange) {
      onDiscountFilterChange(newValue);
    }
  };

  const resetPriceFilter = () => {
    setLocalMinPrice(0);
    setLocalMaxPrice(10000);
    onPriceChange(0, 10000);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isMobileFilterOpen ? 'block' : 'hidden md:block'}`}>
      {/* Mobile Filter Header */}
      {onFilterToggle && (
        <div className="md:hidden p-4 border-b border-neutral-200 flex justify-between items-center">
          <h3 className="font-semibold text-lg flex items-center">
            <Filter size={18} className="ml-2" />
            {t('filter')}
          </h3>
          <button 
            onClick={onFilterToggle}
            className="text-neutral-500 hover:text-neutral-700"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Price Range */}
      <div className="border-b border-neutral-200">
        <button 
          className="w-full p-4 flex justify-between items-center text-right font-medium"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <span>{t('priceRange')}</span>
          {isPriceOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {isPriceOpen && (
          <div className="p-4 pt-0">
            <div className="flex justify-between mb-4">
              <div className="w-[48%]">
                <label className="block text-sm text-neutral-600 mb-1">من</label>
                <input
                  type="number"
                  min="0"
                  value={localMinPrice}
                  onChange={(e) => setLocalMinPrice(Number(e.target.value))}
                  className="w-full border border-neutral-300 rounded-md p-2 text-neutral-800"
                />
              </div>
              <div className="w-[48%]">
                <label className="block text-sm text-neutral-600 mb-1">إلى</label>
                <input
                  type="number"
                  min="0"
                  value={localMaxPrice}
                  onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
                  className="w-full border border-neutral-300 rounded-md p-2 text-neutral-800"
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={resetPriceFilter}
                className="text-sm text-neutral-500 hover:text-neutral-700"
              >
                إعادة ضبط
              </button>
              
              <button
                onClick={handlePriceSubmit}
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 text-sm"
              >
                تطبيق
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Discount Filter */}
      <div className="border-b border-neutral-200">
        <div className="p-4">
          <label className="flex items-center text-right font-medium">
            <input
              type="checkbox"
              checked={showDiscountedOnly}
              onChange={handleDiscountFilterChange}
              className="mr-2"
            />
            {t('showDiscountedOnly')} {/* Add translation key if needed */}
          </label>
        </div>
      </div>

      {/* Sort Options */}
      <div className="border-b border-neutral-200">
        <button 
          className="w-full p-4 flex justify-between items-center text-right font-medium"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          <span>{t('sortBy')}</span>
          {isSortOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {isSortOpen && (
          <div className="p-4 pt-0">
            <select
              onChange={handleSortChange}
              className="w-full border border-neutral-300 rounded-md p-2 text-neutral-800"
            >
              <option value="newest">{t('newest')}</option>
              <option value="highest-rated">{t('highestRated')}</option>
              <option value="price-low-high">{t('lowestPrice')}</option>
              <option value="price-high-low">{t('highestPrice')}</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;