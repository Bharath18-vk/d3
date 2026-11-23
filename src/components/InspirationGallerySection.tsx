import React, { useState, useMemo } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/showroomData';
import type { GalleryItem } from '../types';
import { ImageLightbox } from './ImageLightbox';

export const InspirationGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Living', 'Dining & Kitchen', 'Bedroom', 'Architectural Details'];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="inspiration" className="py-28 md:py-36 bg-ivory text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-bold">
                05 — Editorial Journal
              </span>
              <span className="w-8 h-[1px] bg-bronze/40" />
              <span className="text-charcoal/60 text-xs font-sans tracking-widestPlus uppercase">
                Spatial Portfolios
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-espresso font-normal tracking-tight">
              Spaces worth dreaming about.
            </h2>
          </div>

          <p className="font-sans text-xs md:text-sm text-charcoal/70 max-w-sm leading-relaxed">
            Click any interior vignette to expand architectural photography in full fidelity, inspect proportions, and inquire with our design team.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-6 mb-12 border-b border-limestone-dark/40 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-widestPlus px-4 py-2 transition-all duration-300 font-sans whitespace-nowrap ${
                  isActive
                    ? 'bg-espresso text-ivory font-semibold shadow-sm'
                    : 'text-charcoal/70 hover:text-espresso hover:bg-limestone'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry-Style Grid with Varied Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            let colSpan = 'md:col-span-4';
            let aspectClass = 'aspect-[4/3]';

            if (index % 5 === 0) {
              colSpan = 'md:col-span-8';
              aspectClass = 'aspect-[16/9] md:aspect-[16/10]';
            } else if (index % 5 === 1) {
              colSpan = 'md:col-span-4';
              aspectClass = 'aspect-[3/4] md:aspect-[4/5]';
            } else if (index % 5 === 2) {
              colSpan = 'md:col-span-5';
              aspectClass = 'aspect-[4/3]';
            } else if (index % 5 === 3) {
              colSpan = 'md:col-span-7';
              aspectClass = 'aspect-[16/10]';
            }

            return (
              <div
                key={item.id}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => setLightboxItem(item)}
              >
                <div className={`relative ${aspectClass} overflow-hidden bg-limestone shadow-md`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest uppercase font-sans bg-white/20 backdrop-blur-md px-2.5 py-1">
                        {item.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center shadow-lg">
                        <Eye className="w-4 h-4 text-espresso" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-widest text-bronze uppercase block mb-1">
                        {item.mood}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom minimal caption in normal view */}
                <div className="pt-3 flex items-baseline justify-between border-b border-limestone-dark/30 pb-2">
                  <div>
                    <h4 className="font-serif text-lg text-espresso group-hover:text-bronze transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-sans text-charcoal/60 uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal/30 group-hover:text-bronze transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={lightboxItem}
        items={filteredItems}
        onClose={() => setLightboxItem(null)}
        onNavigate={(newItem) => setLightboxItem(newItem)}
      />
    </section>
  );
};
