import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INTRO_IMAGE } from '../data/showroomData';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const IntroducingSection: React.FC = () => {
  return (
    <section id="the-mall" className="relative py-28 md:py-36 bg-ivory text-espresso overflow-hidden">
      {/* Subtle architectural background line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none border-x border-limestone/50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-bold">
                01 — Concept
              </span>
              <span className="w-6 h-[1px] bg-bronze/40" />
              <span className="text-charcoal/60 text-xs font-sans tracking-widestPlus uppercase">
                A World of Interiors
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso font-normal leading-[1.12] tracking-tight mb-8 text-balance">
              More than a mall.<br />
              <span className="italic font-light text-bronze-dark">
                A destination for the way you live.
              </span>
            </h2>

            {/* Body */}
            <p className="font-sans text-base md:text-lg text-charcoal/80 font-normal leading-relaxed mb-10 max-w-xl">
              Explore a thoughtfully curated world of interiors, materials, furnishings and design possibilities — bringing inspiration for every corner of your home into one destination.
            </p>

            {/* Editorial Feature Breakdown / Decorative Numbering */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-limestone mb-10">
              <div>
                <span className="font-serif text-2xl text-bronze block mb-1">01</span>
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-espresso mb-1">
                  Spatial Vision
                </h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                  Real room-scale settings that let you experience flow, light, and proportions.
                </p>
              </div>

              <div>
                <span className="font-serif text-2xl text-bronze block mb-1">02</span>
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-espresso mb-1">
                  Tactile Harmony
                </h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                  Natural stones, hardwoods, bouclé, and metals in true daylight.
                </p>
              </div>

              <div>
                <span className="font-serif text-2xl text-bronze block mb-1">03</span>
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-espresso mb-1">
                  Design Guidance
                </h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                  A dedicated concierge to help translate ideas into coherent home spaces.
                </p>
              </div>
            </div>

            {/* WhatsApp Link / Inquiry */}
            <div className="flex items-center gap-6">
              <a
                href={getWhatsAppLink(siteConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widestPlus font-semibold text-espresso hover:text-bronze transition-colors group"
              >
                <span>Enquire About The Showroom</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-bronze" />
              </a>
              <span className="text-limestone-dark">/</span>
              <span className="text-[11px] font-sans tracking-wider text-charcoal/60 uppercase">
                Flagship Concept Experience
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Photograph with Asymmetrical Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image Frame with Luxury Border Accent */}
              <div className="relative aspect-[4/5] overflow-hidden bg-limestone shadow-[0_20px_50px_rgba(37,34,31,0.08)]">
                <img
                  src={INTRO_IMAGE}
                  alt="D3 The Grand Interior Mall Experience — Architectural contemporary home interior"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Offset Decorative Architectural Card */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-espresso text-ivory p-6 md:p-8 max-w-xs shadow-2xl border-l-2 border-bronze hidden sm:block">
                <p className="text-[10px] tracking-widestPlus uppercase text-bronze mb-2 font-medium">
                  Showroom Philosophy
                </p>
                <p className="font-serif text-lg italic leading-snug text-ivory/95">
                  "Architecture is not just the envelope — it is the life lived inside every texture."
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] tracking-widest text-white/50 uppercase">
                  <span>D3 Editorial</span>
                  <span>Vol. 01</span>
                </div>
              </div>

              {/* Corner fine line accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-bronze/40 pointer-events-none hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
