import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useBudget } from '../context/BudgetContext';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { BudgetItem } from '../types/types';

const BudgetPage: React.FC = () => {
  const { t } = useTranslation();
  const { budgetItems, updateQuantity, removeFromBudget, clearBudget, getTotalBudget } = useBudget();

  if (budgetItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-neutral-800">{t('myBudget')}</h1>
        <p className="text-lg text-neutral-500 mb-6">{t('emptyBudget')}</p>
        <Link
          to="/categories/1"
          className="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors duration-200"
        >
          {t('browseProducts')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-neutral-800">{t('myBudget')}</h1>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-100">
        {budgetItems.map((item: BudgetItem) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between py-6 border-b border-neutral-200 last:border-b-0"
          >
            <div className="flex items-center space-x-6">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded-lg border border-neutral-200"
              />
              <div>
                <Link
                  to={`/products/${item.product.id}`}
                  className="text-lg font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.product.name}
                </Link>
                <p className="text-sm text-neutral-500 mt-1">
                  {item.product.price} {t('egp')} / {t('unit')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-neutral-100 rounded-full p-1">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  aria-label={t('decreaseQuantity')}
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-medium text-neutral-800">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-200 transition-colors duration-200"
                  aria-label={t('increaseQuantity')}
                >
                  <Plus size={18} />
                </button>
              </div>
              <button
                onClick={() => removeFromBudget(item.product.id)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-error-600 hover:bg-error-100 transition-colors duration-200"
                aria-label={t('removeFromBudget')}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8">
          <p className="text-xl font-semibold text-neutral-800">
            {t('totalBudget')}: {getTotalBudget()} {t('egp')}
          </p>
          <p className="text-sm text-neutral-500 mt-2">{t('budgetEstimation')}</p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6 space-y-4 sm:space-y-0">
            <button
              onClick={clearBudget}
              className="bg-error-600 text-white px-6 py-3 rounded-full font-medium hover:bg-error-700 transition-colors duration-200"
            >
              {t('clearBudget')}
            </button>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors duration-200 text-center"
            >
              {t('contactToPurchase')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;