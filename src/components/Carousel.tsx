import React, {
  useRef, useEffect, useState, useCallback, ReactNode, KeyboardEvent
} from 'react';
import { useAutoplayCarousel } from '../hooks/useAutoplayCarousel';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, idx: number) => ReactNode;
  autoplay?: boolean;
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  pauseOnTouch?: boolean;
  visibleSlides?: {
    mobile: number;
    tablet: number;
    desktop: number;
    wide?: number;
  };
  ariaLabel?: string;
  className?: string;
}

function getVisibleSlides(visibleSlides: CarouselProps<any>["visibleSlides"]) {
  if (typeof window === 'undefined') return 1;
  const width = window.innerWidth;
  if (visibleSlides?.wide && width >= 1536) return visibleSlides.wide;
  if (width >= 1024) return visibleSlides?.desktop ?? 5;
  if (width >= 768) return visibleSlides?.tablet ?? 3;
  return visibleSlides?.mobile ?? 2;
}

export function Carousel<T>({
  items,
  renderItem,
  autoplay = true,
  autoplayInterval = 2000,
  pauseOnHover = true,
  pauseOnFocus = true,
  pauseOnTouch = true,
  visibleSlides = { mobile: 2, tablet: 3, desktop: 5 },
  ariaLabel = 'Carousel',
  className = '',
}: CarouselProps<T>) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(getVisibleSlides(visibleSlides));
  const [scrollIndex, setScrollIndex] = useState(0);

  // Responsive visible slides
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleSlides(visibleSlides));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleSlides]);

  const maxIndex = Math.max(0, items.length - visibleCount);

  // Carousel autoplay logic
  const {
    paused,
    setPaused,
    notifyManualNav,
    bindPauseHandlers,
    timerRef,
  } = useAutoplayCarousel({
    enabled: autoplay,
    interval: autoplayInterval,
    pauseOnHover,
    pauseOnFocus,
    pauseOnTouch,
    resetOnManualNav: true,
  });

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || paused) return;
    timerRef.current = setTimeout(() => {
      setScrollIndex((prev) => {
        if (prev >= maxIndex) return 0; // Infinite loop
        return prev + visibleCount;
      });
    }, autoplayInterval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoplay, paused, scrollIndex, visibleCount, maxIndex, autoplayInterval, timerRef]);

  // Scroll to the right position
  const scrollToIndex = useCallback((idx: number) => {
    setScrollIndex(Math.max(0, Math.min(idx, maxIndex)));
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector('[data-carousel-card]') as HTMLElement;
      if (card) {
        const scrollAmount = card.offsetWidth * idx;
        carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, [maxIndex]);

  // Manual nav handlers
  const handlePrev = useCallback(() => {
    notifyManualNav();
    scrollToIndex(scrollIndex - visibleCount);
  }, [scrollIndex, visibleCount, scrollToIndex, notifyManualNav]);

  const handleNext = useCallback(() => {
    notifyManualNav();
    scrollToIndex(scrollIndex + visibleCount);
  }, [scrollIndex, visibleCount, scrollToIndex, notifyManualNav]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  }, [handlePrev, handleNext]);

  // Touch/swipe support
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let startX = 0, scrollLeft = 0, isSwiping = false;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
      isSwiping = true;
      setPaused(true);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isSwiping) return;
      const dx = e.touches[0].pageX - startX;
      carousel.scrollLeft = scrollLeft - dx;
    };
    const onTouchEnd = (e: TouchEvent) => {
      isSwiping = false;
      setTimeout(() => setPaused(false), 700);
      // Snap to closest slide
      const card = carousel.querySelector('[data-carousel-card]') as HTMLElement;
      if (card) {
        const idx = Math.round(carousel.scrollLeft / card.offsetWidth);
        setScrollIndex(Math.max(0, Math.min(idx, maxIndex)));
      }
    };
    carousel.addEventListener('touchstart', onTouchStart, { passive: true });
    carousel.addEventListener('touchmove', onTouchMove, { passive: false });
    carousel.addEventListener('touchend', onTouchEnd);
    return () => {
      carousel.removeEventListener('touchstart', onTouchStart);
      carousel.removeEventListener('touchmove', onTouchMove);
      carousel.removeEventListener('touchend', onTouchEnd);
    };
  }, [maxIndex]);

  // Bind pause handlers (hover, focus, touch)
  useEffect(() => {
    return bindPauseHandlers(carouselRef.current);
  }, [bindPauseHandlers]);

  // Ensure scroll position updates when index changes
  useEffect(() => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector('[data-carousel-card]') as HTMLElement;
      if (card) {
        const scrollAmount = card.offsetWidth * scrollIndex;
        carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, [scrollIndex]);

  return (
    <section
      className={`relative w-full ${className}`}
      role="region"
      aria-label={ariaLabel}
    >
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-30"
        onClick={handlePrev}
        disabled={scrollIndex === 0}
        aria-controls="carousel-track"
        aria-label="Previous items"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div
        ref={carouselRef}
        id="carousel-track"
        className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory focus:outline-none"
        tabIndex={0}
        style={{ WebkitOverflowScrolling: 'touch' }}
        onKeyDown={handleKeyDown}
        aria-live="polite"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            data-carousel-card
            className="min-w-[48vw] md:min-w-[32vw] lg:min-w-[24vw] max-w-xs snap-start flex-shrink-0"
            tabIndex={-1}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 disabled:opacity-30"
        onClick={handleNext}
        disabled={scrollIndex >= maxIndex}
        aria-controls="carousel-track"
        aria-label="Next items"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
      </button>
    </section>
  );
}

export default Carousel;
