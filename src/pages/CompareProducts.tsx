import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getProductsBySubcategory } from '../data/products';
import ComparisonTable from '../components/ComparisonTable';
import '../styles/compare-btn.css';

const TABS = [
  { key: 'overview', labelKey: 'details' },
  { key: 'description', labelKey: 'description' },
  { key: 'features', labelKey: 'features' },
  { key: 'specifications', labelKey: 'specifications' },
  { key: 'reviews', labelKey: 'ratings' },
];

import { useTranslation } from 'react-i18next';

const CompareProducts: React.FC = () => {
  const { t } = useTranslation();
  const { productId1, productId2 } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [productA, setProductA] = useState<any | null>(null);
  const [productB, setProductB] = useState<any | null>(null);
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    if (productId1) {
      const prodA = getProductById(productId1);
      setProductA(prodA);
      if (prodA) {
        setOptions(getProductsBySubcategory(prodA.subcategory || '').filter((p: any) => p.id !== prodA.id));
      }
    }
    if (productId2) {
      setProductB(getProductById(productId2));
    } else {
      setProductB(null);
    }
  }, [productId1, productId2]);

  const handleSelectProductB = (id: string) => {
    navigate(`/compare/${productA.id}/${id}`);
  };


  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">{t('compareProducts', 'Compare Products')}</h1>
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-5xl">
          <div role="tablist" aria-label="Comparison Tabs" className="flex border-b mb-4 overflow-x-auto sticky top-0 bg-white z-10">
            {TABS.map(tab => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                tabIndex={activeTab === tab.key ? 0 : -1}
                className={`px-4 py-2 font-medium focus:outline-none transition-all ${activeTab === tab.key ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={e => {
                  if (e.key === 'ArrowRight') {
                    setActiveTab(TABS[(TABS.findIndex(t => t.key === activeTab) + 1) % TABS.length].key);
                  } else if (e.key === 'ArrowLeft') {
                    setActiveTab(TABS[(TABS.findIndex(t => t.key === activeTab) - 1 + TABS.length) % TABS.length].key);
                  }
                }}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!productA ? (
        <div className="text-center py-8">{t('productNotFound', 'Product not found.')}</div>
      ) : (
        <>
          {/* If no productB selected, show product cards grid. If productB is selected, hide grid and only show comparison UI. */}
          {!productB ? (
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Current Product Card */}
              <div className="md:w-1/3 w-full">
                <div className="bg-white rounded-xl shadow p-4 sticky top-4">
                  <h2 className="text-lg font-semibold mb-4 text-center">{t('currentProduct', 'Current Product')}</h2>
                  <div className="flex flex-col items-center">
                    <img src={productA.images[0]} alt={productA.name} className="w-32 h-32 object-cover rounded mb-2" />
                    <div className="text-center">
                      <div className="font-bold text-lg mb-1">{productA.name}</div>
                      <div className="text-primary-700 font-semibold mb-1">{productA.price} {t('egp', 'EGP')}</div>
                      <div className="text-neutral-500 text-sm">{productA.description?.slice(0, 60)}...</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Grid of subcategory product cards */}
              <div className="md:w-2/3 w-full">
                <h2 className="text-lg font-semibold mb-4 text-center">{t('selectProductToCompare', 'Select a product to compare')}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {options.length === 0 ? (
                    <div className="col-span-full text-center text-neutral-500">{t('noProductsInSubcategory', 'No products found in this subcategory.')}</div>
                  ) : (
                    options.map((p) => (
                      <div key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <img src={p.images[0]} alt={p.name} className="w-24 h-24 object-cover rounded mb-2" />
                        <div className="font-bold text-base mb-1 text-center">{p.name}</div>
                        <div className="text-primary-700 font-semibold mb-1">{p.price} {t('egp', 'EGP')}</div>
                        <button
                          className="compare-btn mt-2 w-full sm:w-auto"
                          onClick={() => handleSelectProductB(p.id)}
                        >
                          {t('compareWithThisProduct', 'Compare with this product')}
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ) : (
            // Comparison section: only show the two products and sticky tabs above table
            <div className="mt-8">
              <ComparisonTable productA={productA} productB={productB} activeTab={activeTab} />
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default CompareProducts;
