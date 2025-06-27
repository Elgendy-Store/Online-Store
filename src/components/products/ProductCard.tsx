import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Star, Plus, Check, Heart } from 'lucide-react';
import { Product } from '../../types/types';
import { useBudget } from '../../context/BudgetContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const { addToBudget, isInBudget } = useBudget();
  const [isAddedToBudget, setIsAddedToBudget] = useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleAddToBudget = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAddedToBudget) {
      addToBudget(product);
      setIsAddedToBudget(true);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  const discountedPrice = product.isPromotion && product.discount_value
    ? product.price - (product.price * (product.discount_value / 100))
    : null;

  return (
    <div className="card card-hover h-full flex flex-col">
      <Link to={`/products/${product.id}`} className="block overflow-hidden relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-[250px] h-[250px] object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
            جديد
          </span>
        )}
        {product.isPromotion && (
          <span className="absolute top-2 right-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
            عرض خاص
          </span>
        )}
        {product.isBundle && (
          <span className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
            باقة
          </span>
        )}
        <button
          onClick={handleLike}
          className={`absolute top-2 left-2 p-2 rounded-full transition-colors ${
            isLiked 
              ? 'bg-error-100 text-error-600' 
              : 'bg-white/80 text-neutral-400 hover:text-error-600'
          }`}
          aria-label={isLiked ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
        >
          <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </Link>
      
      <div className="p-4 flex-grow flex flex-col">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-semibold text-lg mb-1 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          {product.englishName && (
            <p className="text-neutral-500 text-sm mb-2">{product.englishName}</p>
          )}
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-secondary-500">
            <Star size={16} fill="currentColor" />
            <span className="mr-1 text-sm">{product.rating}</span>
          </div>
          <span className="text-neutral-500 text-sm mr-2">({product.reviewCount} تقييم)</span>
        </div>
        
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
          {product.description.substring(0, 80)}...
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="text-right">
            {product.isPromotion && product.discount_value && (
              <span className="block mb-1 bg-secondary-500 text-secondary-1000 text-base font-medium px-2 py-1 rounded-full">
                Sale -{product.discount_value}%
              </span>
            )}
            {product.isPromotion && product.discount_value ? (
              <div className="flex items-baseline justify-end space-x-2 space-x-reverse">
                <span className="font-bold text-lg text-primary-600">
                  {discountedPrice?.toFixed(2)} {t('egp')}
                </span>
                <span className="line-through text-md text-red-600 ml-2">
                  {product.price}
                </span>
              </div>
            ) : (
              <span className="font-bold text-lg">{product.price} {t('egp')}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToBudget}
            disabled={isAddedToBudget}
            className={`p-2 rounded-full transition-colors ${
              isAddedToBudget
                ? 'bg-success-100 text-success-700 cursor-not-allowed'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
            aria-label={isAddedToBudget ? 'تمت الإضافة بنجاح' : t('addToBudget')}
          >
            {isAddedToBudget ? <Check size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;