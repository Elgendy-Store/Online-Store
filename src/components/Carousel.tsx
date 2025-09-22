'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoScroll?: boolean;
  interval?: number;
}

export default function Carousel<T>({
  items,
  renderItem,
  autoScroll = true,
  interval = 3000,
}: CarouselProps<T>) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Handle auto-scroll
  useEffect(() => {
    if (!autoScroll || items.length <= 1) return;

    const id = setInterval(() => {
      setScrollIndex((prev) => {
        if (prev >= items.length - 1) return 0;
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(id);
  }, [autoScroll, interval, items.length]);

  // Scroll effect
  useEffect(() => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector('[data-carousel-card]') as HTMLElement;
    if (card) {
      const style = window.getComputedStyle(card);
      const gap = parseInt(style.marginRight || '16'); // flex gap fallback
      const scrollAmount = (card.offsetWidth + gap) * scrollIndex;

      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [scrollIndex]);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector('[data-carousel-card]') as HTMLElement;
    if (card) {
      const style = window.getComputedStyle(card);
      const gap = parseInt(style.marginRight || '16');
      const step = card.offsetWidth + gap;

      if (direction === 'left') {
        setScrollIndex((prev) => (prev <= 0 ? items.length - 1 : prev - 1));
        carouselRef.current.scrollBy({ left: -step, behavior: 'smooth' });
      } else {
        setScrollIndex((prev) => (prev >= items.length - 1 ? 0 : prev + 1));
        carouselRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            data-carousel-card
            className="w-full max-w-[250px] md:max-w-[270px] lg:max-w-[270px] snap-start flex-shrink-0 flex flex-col justify-stretch px-2"
            tabIndex={-1}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
