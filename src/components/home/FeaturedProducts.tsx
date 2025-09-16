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
  
  const featuredProducts = getNewArrivals()
    .concat(getPromotionalItems())
    .concat(getBundles())
    .filter((item, idx, arr) => arr.findIndex(p => p.id === item.id) === idx)
    .slice(0, 10); // Show up to 10 unique products


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
                                        <div className="flex items-baseline space-x-2 space-x-reverse">
                        <span className="line-through text-2xl font-semibold text-red-500">
                          {product.price}
                        </span>
                        <span className="text-2xl font-bold text-primary-600">
                          {discountedPrice?.toFixed(2)} {t('egp')}
                        </span>
                      </div>
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

  // Carousel logic
  const [scrollIndex, setScrollIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Responsive number of visible cards
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 5; // Desktop
    if (window.innerWidth >= 768) return 3; // Tablet
    return 2; // Mobile
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, featuredProducts.length - visibleCount);
  const scrollToIndex = (idx: number) => {
    setScrollIndex(Math.max(0, Math.min(idx, maxIndex)));
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector('[data-carousel-card]') as HTMLElement;
      if (card) {
        const scrollAmount = card.offsetWidth * idx;
        carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Arrow navigation handlers
  const handlePrev = () => scrollToIndex(scrollIndex - visibleCount);
  const handleNext = () => scrollToIndex(scrollIndex + visibleCount);

  // Touch/swipe support
  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let startX = 0, scrollLeft = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dx = e.touches[0].pageX - startX;
      carousel.scrollLeft = scrollLeft - dx;
    };
    carousel.addEventListener('touchstart', onTouchStart);
    carousel.addEventListener('touchmove', onTouchMove);
    return () => {
      carousel.removeEventListener('touchstart', onTouchStart);
      carousel.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // Keyboard accessibility
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{t('featuredProducts')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            اكتشف أحدث المنتجات والعروض المميزة في متجرنا
          </p>
        </div>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-30"
            onClick={handlePrev}
            disabled={scrollIndex === 0}
            aria-label="السابق"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            tabIndex={0}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {featuredProducts.map(product => (
              <div
                key={product.id}
                data-carousel-card
                className="min-w-[48vw] md:min-w-[32vw] lg:min-w-[24vw] max-w-xs snap-start flex-shrink-0"
              >
                {renderProductCard(product)}
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-30"
            onClick={handleNext}
            disabled={scrollIndex >= maxIndex}
            aria-label="التالي"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;