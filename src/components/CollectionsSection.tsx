import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { CATEGORIES } from '../data/showroomData';
import type { CategoryItem } from '../types';
import { getWhatsAppLink } from '../config/siteConfig';

interface CollectionsSectionProps {
  onSelectCategory: (category: CategoryItem) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-28 md:py-36 bg-limestone-light text-espresso relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-limestone-dark/60 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-bold">
                02 — Curated Worlds
              </span>
              <span className="w-8 h-[1px] bg-bronze/40" />
              <span className="text-charcoal/60 text-xs font-sans tracking-widestPlus uppercase">
                Discovery Categories
              </span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-6xl text-espresso font-normal tracking-tight">
              Find your inspiration.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-serif text-xl sm:text-2xl text-bronze-dark italic font-light mb-2">
              Every detail. Every texture. Every possibility.
            </p>
            <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed">
              Conceptual discovery environments curated to inspire your next architectural build, renovation, or home styling project.
            </p>
          </div>
        </div>

        {/* Editorial Asymmetrical Layout: Alternating Proportions & Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Item 1: Living Spaces (Wide, dominant top left - 7 cols) */}
          <div className="md:col-span-7 group cursor-pointer" onClick={() => onSelectCategory(CATEGORIES[0])}>
            <div className="relative aspect-[16/10] overflow-hidden bg-limestone shadow-lg mb-5">
              <img
                src={CATEGORIES[0].image}
                alt={CATEGORIES[0].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-espresso/80 backdrop-blur-sm text-ivory text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                {CATEGORIES[0].number}
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/90 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                <ArrowUpRight className="w-4 h-4 text-espresso group-hover:text-bronze" />
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-limestone-dark/40 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-1">
                  Living Architecture
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso group-hover:text-bronze transition-colors">
                  {CATEGORIES[0].title}
                </h3>
                <p className="text-xs text-charcoal/70 mt-1 max-w-md font-sans">
                  {CATEGORIES[0].subtitle}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-charcoal/40 group-hover:text-bronze transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Item 2: Bedroom & Comfort (Tall portrait top right - 5 cols) */}
          <div className="md:col-span-5 md:mt-12 group cursor-pointer" onClick={() => onSelectCategory(CATEGORIES[1])}>
            <div className="relative aspect-[4/5] overflow-hidden bg-limestone shadow-lg mb-5">
              <img
                src={CATEGORIES[1].image}
                alt={CATEGORIES[1].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-espresso/80 backdrop-blur-sm text-ivory text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                {CATEGORIES[1].number}
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/90 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                <ArrowUpRight className="w-4 h-4 text-espresso group-hover:text-bronze" />
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-limestone-dark/40 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-1">
                  Tactile Serenity
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso group-hover:text-bronze transition-colors">
                  {CATEGORIES[1].title}
                </h3>
                <p className="text-xs text-charcoal/70 mt-1 max-w-sm font-sans">
                  {CATEGORIES[1].subtitle}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-charcoal/40 group-hover:text-bronze transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Item 3: Kitchens & Dining (5 cols, left) */}
          <div className="md:col-span-5 group cursor-pointer" onClick={() => onSelectCategory(CATEGORIES[2])}>
            <div className="relative aspect-[4/5] overflow-hidden bg-limestone shadow-lg mb-5">
              <img
                src={CATEGORIES[2].image}
                alt={CATEGORIES[2].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-espresso/80 backdrop-blur-sm text-ivory text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                {CATEGORIES[2].number}
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/90 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                <ArrowUpRight className="w-4 h-4 text-espresso group-hover:text-bronze" />
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-limestone-dark/40 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-1">
                  Culinary Architecture
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso group-hover:text-bronze transition-colors">
                  {CATEGORIES[2].title}
                </h3>
                <p className="text-xs text-charcoal/70 mt-1 max-w-sm font-sans">
                  {CATEGORIES[2].subtitle}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-charcoal/40 group-hover:text-bronze transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Item 4: Lighting & Ambience (7 cols, right) */}
          <div className="md:col-span-7 group cursor-pointer" onClick={() => onSelectCategory(CATEGORIES[3])}>
            <div className="relative aspect-[16/10] overflow-hidden bg-limestone shadow-lg mb-5">
              <img
                src={CATEGORIES[3].image}
                alt={CATEGORIES[3].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-espresso/80 backdrop-blur-sm text-ivory text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                {CATEGORIES[3].number}
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/90 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                <ArrowUpRight className="w-4 h-4 text-espresso group-hover:text-bronze" />
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-limestone-dark/40 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-1">
                  Sculptural Illumination
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso group-hover:text-bronze transition-colors">
                  {CATEGORIES[3].title}
                </h3>
                <p className="text-xs text-charcoal/70 mt-1 max-w-md font-sans">
                  {CATEGORIES[3].subtitle}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-charcoal/40 group-hover:text-bronze transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Item 5: Surfaces & Materials (7 cols, left) */}
          <div className="md:col-span-7 group cursor-pointer" onClick={() => onSelectCategory(CATEGORIES[4])}>
            <div className="relative aspect-[16/10] overflow-hidden bg-limestone shadow-lg mb-5">
              <img
                src={CATEGORIES[4].image}
                alt={CATEGORIES[4].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-espresso/80 backdrop-blur-sm text-ivory text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                {CATEGORIES[4].number}
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/90 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                <ArrowUpRight className="w-4 h-4 text-espresso group-hover:text-bronze" />
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-limestone-dark/40 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-1">
                  Tactile Cladding & Marbles
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso group-hover:text-bronze transition-colors">
                  {CATEGORIES[4].title}
                </h3>
                <p className="text-xs text-charcoal/70 mt-1 max-w-md font-sans">
                  {CATEGORIES[4].subtitle}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-charcoal/40 group-hover:text-bronze transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Item 6: Décor & Finishing Touches (5 cols, right) */}
          <div className="md:col-span-5 md:mt-8 group cursor-pointer" onClick={() => onSelectCategory(CATEGORIES[5])}>
            <div className="relative aspect-[4/5] overflow-hidden bg-limestone shadow-lg mb-5">
              <img
                src={CATEGORIES[5].image}
                alt={CATEGORIES[5].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
              <div className="absolute top-6 left-6 bg-espresso/80 backdrop-blur-sm text-ivory text-[10px] tracking-widest uppercase px-3 py-1 font-sans">
                {CATEGORIES[5].number}
              </div>
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/90 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                <ArrowUpRight className="w-4 h-4 text-espresso group-hover:text-bronze" />
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-limestone-dark/40 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-1">
                  Artisanal Vignettes
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso group-hover:text-bronze transition-colors">
                  {CATEGORIES[5].title}
                </h3>
                <p className="text-xs text-charcoal/70 mt-1 max-w-sm font-sans">
                  {CATEGORIES[5].subtitle}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-charcoal/40 group-hover:text-bronze transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

        </div>

        {/* Note on Custom Showroom Offerings & WhatsApp Concierge */}
        <div className="mt-16 pt-8 border-t border-limestone-dark/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs text-charcoal/60 font-sans tracking-wide">
            * Showcase categories serve as design inspirations and can be tailored to the exact showroom catalog.
          </p>
          <a
            href={getWhatsAppLink("Hello D3 Showroom Concierge, I would like to inquire about the full collection catalog.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widestPlus font-semibold text-espresso hover:text-bronze transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-bronze" />
            <span>Enquire on WhatsApp About Catalog</span>
          </a>
        </div>
      </div>
    </section>
  );
};
