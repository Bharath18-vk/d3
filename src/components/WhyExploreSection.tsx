import React from 'react';
import { WHY_EXPLORE_POINTS } from '../data/showroomData';
import { siteConfig } from '../config/siteConfig';

export const WhyExploreSection: React.FC = () => {
  return (
    <section id="why-d3" className="py-28 md:py-36 bg-limestone text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-bold">
              06 — The Distinction
            </span>
            <span className="w-8 h-[1px] bg-bronze/40" />
            <span className="text-charcoal/60 text-xs font-sans tracking-widestPlus uppercase">
              Showroom Philosophy
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-espresso font-normal tracking-tight mb-6">
            Everything you need to imagine your next space.
          </h2>

          <p className="font-sans text-base md:text-lg text-charcoal/80 font-light leading-relaxed">
            D3 is conceived as an immersive architectural sanctuary where ideas, proportions, and real-world tactile materiality coalesce into clear design direction.
          </p>
        </div>

        {/* 4 Refined Editorial Points with Thin Dividers & Minimal Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-t border-b border-limestone-dark/60 py-12">
          {WHY_EXPLORE_POINTS.map((point) => (
            <div
              key={point.number}
              className="flex flex-col justify-between group p-2 transition-all duration-300"
            >
              <div>
                {/* Elegant Numbering */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl text-bronze/80 group-hover:text-bronze font-light transition-colors">
                    {point.number}
                  </span>
                  <span className="w-6 h-[1px] bg-bronze/30 group-hover:w-10 group-hover:bg-bronze transition-all duration-300" />
                </div>

                {/* Point Title */}
                <h3 className="font-serif text-2xl text-espresso font-normal mb-4 leading-snug group-hover:text-bronze-dark transition-colors">
                  {point.title}
                </h3>

                {/* Point Description */}
                <p className="font-sans text-xs md:text-sm text-charcoal/80 leading-relaxed font-normal mb-6">
                  {point.description}
                </p>
              </div>

              {/* Highlight Note */}
              {point.highlight && (
                <div className="pt-4 border-t border-limestone-dark/30 text-[11px] font-sans text-charcoal/60 italic">
                  {point.highlight}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Brand Manifesto Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-serif text-lg sm:text-xl italic text-charcoal/70">
            "A thoughtfully designed space does not just hold furniture — it frames how you start every morning and welcome every evening."
          </p>
          <span className="text-[10px] tracking-widestPlus uppercase text-bronze block mt-3 font-sans font-medium">
            {siteConfig.brand.name}
          </span>
        </div>

      </div>
    </section>
  );
};
