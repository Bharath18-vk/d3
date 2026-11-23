import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ART_OF_LIVING_IMAGE } from '../data/showroomData';

interface ArtOfLivingSectionProps {
  onOpenVisitModal: () => void;
}

export const ArtOfLivingSection: React.FC<ArtOfLivingSectionProps> = ({ onOpenVisitModal }) => {
  return (
    <section id="art-of-living" className="relative w-full py-36 md:py-48 bg-espresso text-ivory overflow-hidden">
      {/* Background Cinematic Image with Fixed Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={ART_OF_LIVING_IMAGE}
          alt="The Art of Living — Architectural luxury home framing natural sunlight"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105"
          loading="lazy"
        />
        {/* Soft editorial gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-transparent to-espresso/80" />
      </div>

      {/* Decorative Editorial Framing Lines */}
      <div className="absolute top-12 left-12 right-12 bottom-12 border border-white/10 pointer-events-none hidden md:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Editorial Subtitle */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-bronze" />
          <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-bold">
            03 — The Art of Living
          </span>
          <span className="w-8 h-[1px] bg-bronze" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.06] tracking-tight mb-10 text-balance">
          Designed around the<br />
          <span className="italic font-light text-limestone-light">feeling of home.</span>
        </h2>

        {/* Short Statement */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory/90 font-light italic max-w-3xl leading-relaxed mb-8">
          "Your home is more than a space. It's a reflection of the way you live, the things you love, and the moments you make."
        </p>

        {/* Secondary description */}
        <p className="font-sans text-xs sm:text-sm text-white/70 max-w-xl font-normal tracking-wide leading-relaxed mb-12">
          From the warmth of natural sunlight grazing hand-hewn oak to the quiet gravitas of solid travertine, D3 brings together architectural grandeur and intimate comfort under one roof.
        </p>

        {/* Action Button */}
        <button
          onClick={onOpenVisitModal}
          className="inline-flex items-center gap-3 px-8 py-4 bg-bronze text-white text-xs md:text-sm font-sans font-semibold tracking-widestPlus uppercase hover:bg-bronze-dark transition-all duration-300 shadow-2xl group"
        >
          <span>Experience It In Person</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Fine Editorial Footnote */}
        <div className="mt-16 flex items-center gap-4 text-white/40 text-[10px] tracking-widestPlus uppercase">
          <span>Atmosphere</span>
          <span>•</span>
          <span>Proportion</span>
          <span>•</span>
          <span>Permanence</span>
        </div>
      </div>
    </section>
  );
};
