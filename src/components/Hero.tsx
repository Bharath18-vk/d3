import React from 'react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import { HERO_IMAGE } from '../data/showroomData';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenVisitModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVisitModal }) => {
  const handleScrollToCollections = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#collections');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-end pb-16 md:pb-24 pt-32 overflow-hidden bg-espresso">
      {/* Background Architectural Image with Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="D3 The Grand Interior Mall — Luxury Architectural Living Space with warm sunlight"
          className="w-full h-full object-cover object-center scale-105 animate-[subtleZoom_20s_ease-out_forwards]"
          loading="eager"
        />
        {/* Multilayered refined gradients for legibility while keeping photographic natural beauty */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/30 to-transparent" />
        <div className="absolute inset-0 bg-espresso/20 mix-blend-multiply" />
      </div>

      {/* Decorative Architectural Grid Markers */}
      <div className="absolute top-28 left-8 md:left-12 z-10 hidden sm:flex items-center gap-3 text-white/70">
        <Compass className="w-3.5 h-3.5 text-bronze animate-pulse" />
        <span className="text-[10px] tracking-widestPlus uppercase font-sans">
          Curated Architectural Destination • Est. Vision
        </span>
      </div>

      <div className="absolute top-28 right-8 md:right-12 z-10 hidden md:block text-right text-white/60">
        <span className="text-[10px] tracking-widestPlus uppercase font-sans">
          Contemporary Indian Living • Editorial Showcase
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          {/* Small Elegant Top Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-bronze" />
            <span className="text-bronze text-xs md:text-sm font-sans tracking-widestPlus uppercase font-semibold">
              {siteConfig.brand.name}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.08] tracking-tight mb-8 drop-shadow-sm text-balance">
            Spaces that inspire.<br />
            <span className="italic font-light text-limestone">Living that elevates.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/85 font-light max-w-2xl leading-relaxed mb-10 tracking-wide">
            {siteConfig.brand.supportingCopy}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
            <a
              href="#collections"
              onClick={handleScrollToCollections}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-espresso text-xs md:text-sm font-sans font-semibold tracking-widestPlus uppercase hover:bg-bronze hover:text-white transition-all duration-300 shadow-xl group"
            >
              <span>Explore The Collection</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={onOpenVisitModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/40 text-white text-xs md:text-sm font-sans font-medium tracking-widestPlus uppercase hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm group"
            >
              <span>Visit Our Showroom</span>
              <span className="w-1.5 h-1.5 rounded-full bg-bronze transition-transform duration-300 group-hover:scale-150" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Architectural Location Detail & Scroll Indicator */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white/60 text-xs font-sans">
          <div className="flex items-center gap-3 tracking-widest uppercase text-[11px]">
            <span className="w-2 h-2 rounded-full bg-bronze/80 inline-block animate-ping" />
            <span className="text-white/80 font-medium">Flagship Interior Destination</span>
            <span className="text-white/40">•</span>
            <span>Private Consultations & Walk-Ins Welcome</span>
          </div>

          <a
            href="#the-mall"
            className="flex items-center gap-2 tracking-widestPlus uppercase text-[10px] text-white/70 hover:text-white transition-colors group"
          >
            <span>Scroll To Discover</span>
            <ArrowDown className="w-3.5 h-3.5 text-bronze transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
