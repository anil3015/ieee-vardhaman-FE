// EmblaCarousel.jsx
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EmblaCarousel = ({ items = [], renderItem }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[350px] w-full pr-4 flex-shrink-0"
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
