// EmblaCarousel.jsx
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EmblaCarousel = ({ items = [], renderItem, autoPlay = true, autoPlaySpeed = 3000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps'
  });

  const [isHovered, setIsHovered] = useState(false);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoPlay || !emblaApi || isHovered) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlaySpeed);

    setAutoPlayInterval(interval);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [emblaApi, autoPlay, autoPlaySpeed, isHovered]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    };
  }, [autoPlayInterval]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[350px] w-full pr-6 flex-shrink-0"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-8 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-green-600 hover:border-green-600 transition-all duration-200 flex items-center justify-center"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-8 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:text-green-600 hover:border-green-600 transition-all duration-200 flex items-center justify-center"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default EmblaCarousel;
