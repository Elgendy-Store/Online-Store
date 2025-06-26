import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Plus, Check } from 'lucide-react';
import { useBudget } from '../../context/BudgetContext';
import { getNewArrivals, getPromotionalItems, getBundles } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const { t } = useTranslation();
  const { addToBudget, isInBudget } = useBudget();
  
  const newArrivals = getNewArrivals().slice(0, 4);
  const promotionalItems = getPromotionalItems().slice(0, 4);
  const bundles = getBundles().slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const renderProductCard = (product: any) => {
    const inBudget = isInBudget(product.id);
    const discountedPrice = product.isPromotion && product.discount_value
      ? product.price - (product.price * (product.discount_value / 100))
      : null;

    return (
      <motion.div key={product.id} variants={itemVariants} className="h-full">
        <div className="card card-hover h-full flex flex-col">
          <Link to={`/products/${product.id}`} className="block overflow-hidden relative">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
          </Link>
          
          <div className="p-4 flex-grow flex flex-col">
            <Link to={`/products/${product.id}`} className="block">
              <h3 className="font-semibold text-lg mb-1 hover:text-primary-600 transition-colors">
                {product.name}
              </h3>
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
                  <>
                    <span className="line-through text-neutral-500 mr-2">{product.price} {t('egp')}</span>
                    <span className="font-bold text-lg text-primary-600">
                      {discountedPrice?.toFixed(2)} {t('egp')}
                    </span>
                  </>
                ) : (
                  <span className="font-bold text-lg">{product.price} {t('egp')}</span>
                )}
              </div>
              
              <button
                onClick={() => addToBudget(product)}
                className={`p-2 rounded-full transition-colors ${
                  inBudget
                    ? 'bg-success-100 text-success-700'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
                aria-label={inBudget ? t('removeFromBudget') : t('addToBudget')}
              >
                {inBudget ? <Check size={18} /> : <Plus size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderProductSection = (title: string, products: any[], linkTo: string) => {
    if (!products.length) return null;
    
    return (
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Link
            to={linkTo}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            عرض الكل
          </Link>
        </div>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map(renderProductCard)}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t('featuredProducts')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            اكتشف أحدث المنتجات والعروض المميزة في متجرنا
          </p>
        </div>
        
        {renderProductSection(t('newArrivals'), newArrivals, '/new-arrivals')}
        {renderProductSection(t('promotionalItems'), promotionalItems, '/promotions')}
        {renderProductSection(t('bundles'), bundles, '/bundles')}
      </div>
    </section>
  );
};

export default FeaturedProducts;