import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight } from 'lucide-react';
import type { GalleryItem } from '../types';
import { getWhatsAppLink } from '../config/siteConfig';

interface ImageLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  }, [currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top Bar: Controls */}
      <div className="flex items-center justify-between z-20 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-semibold">
            D3 Editorial Gallery
          </span>
          <span className="text-white/40">•</span>
          <span className="text-white/70 text-xs font-sans tracking-widest">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Center Image Presentation */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-3 bg-espresso/80 hover:bg-bronze text-white border border-white/10 rounded-full transition-all duration-300 focus:outline-none group shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <div className="relative max-h-full max-w-5xl overflow-hidden rounded-none shadow-2xl border border-white/10">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] w-auto object-contain mx-auto transition-transform duration-500"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-3 bg-espresso/80 hover:bg-bronze text-white border border-white/10 rounded-full transition-all duration-300 focus:outline-none group shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Bottom Bar: Detailed Caption & WhatsApp Conversion */}
      <div className="z-20 pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-bronze text-[11px] font-sans tracking-widestPlus uppercase">
              {item.category}
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white/60 text-xs font-sans tracking-wide">
              {item.mood}
            </span>
          </div>
          <h3 className="font-serif text-2xl text-white font-normal">
            {item.title}
          </h3>
          <p className="font-sans text-xs text-white/70 max-w-2xl mt-1">
            {item.caption}
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <a
            href={getWhatsAppLink(`Hello D3 Showroom, I am interested in discussing the interior style shown in: "${item.title}" (${item.category}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-bronze text-white text-xs font-sans font-semibold tracking-widestPlus uppercase hover:bg-bronze-dark transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire On WhatsApp About This Look</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
