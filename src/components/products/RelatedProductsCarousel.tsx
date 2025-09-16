import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../products/ProductCard';
import { useRelatedProducts } from '../../hooks/useRelatedProducts';
import { getAllProducts } from '../../data/products'; // لو عندك function بيرجع كل المنتجات

interface RelatedProductsCarouselProps {
  product: any;
}

const RelatedProductsCarousel: React.FC<RelatedProductsCarouselProps> = ({ product }) => {
  const { t } = useTranslation();
  const allProducts = getAllProducts(); // أو لو بتجيب المنتجات من context/props
  const relatedProducts = useRelatedProducts(product, allProducts, { maxProducts: 8 });

  const [scrollIndex, setScrollIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Responsive visible count
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    return 2;
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, relatedProducts.length - visibleCount);
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

  if (!relatedProducts.length) return null;

  return (
    <section className="py-8">
      <div className="flex items-center mb-4 px-2">
        <h2 className="text-xl font-bold">{t('relatedProducts')}</h2>
      </div>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-30"
          onClick={handlePrev}
          disabled={scrollIndex === 0}
          aria-label="Previous"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          tabIndex={0}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {relatedProducts.map(rp => (
            <div
              key={rp.id}
              data-carousel-card
              className="min-w-[48vw] md:min-w-[32vw] lg:min-w-[24vw] max-w-xs snap-start flex-shrink-0"
            >
              <ProductCard product={rp} />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-30"
          onClick={handleNext}
          disabled={scrollIndex >= maxIndex}
          aria-label="Next"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
};

export default RelatedProductsCarousel;
