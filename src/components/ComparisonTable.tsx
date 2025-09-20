import React from 'react';
import { useTranslation } from 'react-i18next';

interface ComparisonTableProps {
  productA: any;
  productB: any;
  activeTab: string;
}

const getRow = (label: string, a: any, b: any) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center py-2 border-b last:border-b-0" key={label}>
    <div className="font-medium text-neutral-700 md:text-center">{label}</div>
    <div className="md:text-center">{a ?? '—'}</div>
    <div className="md:text-center">{b ?? '—'}</div>
  </div>
);

const ComparisonTable: React.FC<ComparisonTableProps> = ({ productA, productB, activeTab }) => {
  const { t } = useTranslation();
  if (!productA) return null;

  // Helper to get safe values
  const get = (obj: any, key: string) => obj && obj[key] !== undefined ? obj[key] : '—';

  let rows: JSX.Element[] = [];
  switch (activeTab) {
    case 'overview':
      rows = [
        getRow(t('brand', 'Brand'), get(productA, 'brand'), get(productB, 'brand')),
        getRow(t('model', 'Model'), get(productA, 'model'), get(productB, 'model')),
        getRow(t('price', 'Price'), get(productA, 'price'), get(productB, 'price')),
        getRow(t('availability', 'Availability'), get(productA, 'isAvailable') ? t('inStock', 'In Stock') : t('outOfStock', 'Out of Stock'), get(productB, 'isAvailable') ? t('inStock', 'In Stock') : t('outOfStock', 'Out of Stock')),
      ]; break;
    case 'description':
      rows = [
        getRow(t('description', 'Description'), get(productA, 'description'), get(productB, 'description')),
      ]; break;
    case 'features':
      const maxLen = Math.max(
        (productA.features ? productA.features.length : 0),
        (productB?.features ? productB.features.length : 0)
      );
      rows = Array.from({ length: maxLen }).map((_, idx) =>
        getRow(
          `${t('feature', 'Feature')} ${idx + 1}`,
          productA.features?.[idx] ?? '—',
          productB?.features?.[idx] ?? '—'
        )
      );
      break;
    case 'specifications':
      const keys = Array.from(new Set([
        ...Object.keys(productA.specifications || {}),
        ...(productB?.specifications ? Object.keys(productB.specifications) : [])
      ]));
      rows = keys.map(key =>
        getRow(
          key,
          productA.specifications?.[key] ?? '—',
          productB?.specifications?.[key] ?? '—'
        )
      );
      break;
    case 'reviews':
      rows = [
        getRow(t('reviews', 'Reviews'), (productA.reviews || []).length, (productB?.reviews || []).length),
      ]; break;
    default:
      rows = [];
  }

  return (
    <section className="bg-white rounded-xl shadow p-4 md:p-8">
      <div className="overflow-x-auto">
        <div className="min-w-[400px] grid grid-cols-2 gap-4">
          {/* Product Cards */}
          <div className="rounded-lg shadow-md p-4 flex flex-col items-center">
            <img src={productA.images?.[0]} alt={productA.name} className="w-32 h-32 object-contain mb-2" />
            <div className="font-bold text-lg mb-1 text-center">{productA.name}</div>
          </div>
          {productB ? (
            <div className="rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={productB.images?.[0]} alt={productB.name} className="w-32 h-32 object-contain mb-2" />
              <div className="font-bold text-lg mb-1 text-center">{productB.name}</div>
            </div>
          ) : (
            <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-neutral-400 min-h-[120px]">
              {t('selectProductToCompare', 'Select a product to compare')}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 overflow-x-auto">
        <div className="min-w-[480px] grid grid-cols-3 sm:grid-cols-3 gap-2 border-t">
          <div className="font-bold text-neutral-900 text-center py-2">{t('property', 'Property')}</div>
          <div className="font-bold text-neutral-900 text-center py-2">{t('productA', 'Product A')}</div>
          <div className="font-bold text-neutral-900 text-center py-2">{t('productB', 'Product B')}</div>
        </div>
        <div className="min-w-[480px] divide-y grid grid-cols-1">
          {rows}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
