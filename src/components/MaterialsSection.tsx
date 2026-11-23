import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { MATERIALS } from '../data/showroomData';
import type { MaterialItem } from '../types';
import { getWhatsAppLink } from '../config/siteConfig';

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIALS[0]);

  return (
    <section id="materials" className="py-28 md:py-36 bg-charcoal text-ivory relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#9B8060_0.75px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-bold">
              04 — Materiality
            </span>
            <span className="w-8 h-[1px] bg-bronze/40" />
            <span className="text-white/60 text-xs font-sans tracking-widestPlus uppercase">
              Tactile Library
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight mb-6">
            Beauty lives in the details.
          </h2>

          <p className="font-sans text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
            Explore the textures, tones and finishing touches that bring a space together. An art-directed material palette celebrating natural stone, fluted timbers, woven linens, and brushed bronze.
          </p>
        </div>

        {/* Material Board Composition: Left Active Macro Feature, Right Grid of Tactile Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Active Featured Material Card (Left 6 Cols) */}
          <div className="lg:col-span-6 bg-espresso/70 border border-white/10 p-6 md:p-8 backdrop-blur-sm shadow-2xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-espresso mb-6 border border-white/10">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-espresso/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] tracking-widest uppercase text-bronze font-sans">
                {selectedMaterial.category}
              </div>
              <div className="absolute bottom-4 right-4 bg-espresso/90 backdrop-blur-md px-3 py-1 text-[11px] font-sans text-white/80">
                Specification: {selectedMaterial.finish}
              </div>
            </div>

            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {selectedMaterial.name}
              </h3>
              <div
                className="w-5 h-5 rounded-full border border-white/30 shadow-sm"
                style={{ backgroundColor: selectedMaterial.colorSwatch || '#9B8060' }}
                title="Tone Swatch"
              />
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
              {selectedMaterial.description}
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-[11px] font-sans text-white/50 uppercase tracking-widest">
                Physical Samples Available In Showroom
              </div>
              <a
                href={getWhatsAppLink(`Hello D3, I would like to inquire about availability and specs for ${selectedMaterial.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widestPlus font-semibold text-bronze hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire On WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Material Board List (Right 6 Cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <p className="text-[11px] font-sans text-bronze tracking-widestPlus uppercase mb-2 font-medium">
              Select Texture To Inspect Details
            </p>

            {MATERIALS.map((mat, idx) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-4 md:p-5 border cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-espresso border-bronze shadow-lg translate-x-1'
                      : 'bg-espresso/40 border-white/10 hover:border-white/30 hover:bg-espresso/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 overflow-hidden border border-white/20 flex-shrink-0 relative">
                      <img
                        src={mat.image}
                        alt={mat.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] tracking-widest uppercase text-bronze font-sans">
                          0{idx + 1} • {mat.category}
                        </span>
                      </div>
                      <h4 className={`font-serif text-lg md:text-xl transition-colors ${
                        isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}>
                        {mat.name}
                      </h4>
                      <span className="text-[11px] font-sans text-white/50 block">
                        Finish: {mat.finish}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] uppercase tracking-widest font-sans hidden sm:block ${
                      isSelected ? 'text-bronze' : 'text-white/30 group-hover:text-white/60'
                    }`}>
                      {isSelected ? 'Active' : 'Inspect'}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? 'text-bronze translate-x-0.5 -translate-y-0.5' : 'text-white/30 group-hover:text-white'
                    }`} />
                  </div>
                </div>
              );
            })}

            <div className="mt-4 p-5 border border-bronze/30 bg-bronze/5 flex items-center justify-between">
              <div>
                <h5 className="font-serif text-base text-ivory">Custom Material Swatch Boards</h5>
                <p className="font-sans text-xs text-white/60 mt-0.5">
                  Over 400+ stone, timber, veneer and fabric specimens on display.
                </p>
              </div>
              <a
                href={getWhatsAppLink("Hello, I would like to schedule a Material Board review session at D3.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-bronze text-white text-[11px] font-sans font-semibold uppercase tracking-widest hover:bg-bronze-dark transition-colors whitespace-nowrap ml-4"
              >
                Schedule Session
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
