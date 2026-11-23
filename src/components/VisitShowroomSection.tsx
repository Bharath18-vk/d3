import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, Navigation, MessageCircle } from 'lucide-react';
import { SHOWROOM_VISIT_IMAGE } from '../data/showroomData';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

interface VisitShowroomSectionProps {
  onOpenVisitModal: () => void;
}

export const VisitShowroomSection: React.FC<VisitShowroomSectionProps> = ({ onOpenVisitModal }) => {
  return (
    <section id="visit" className="py-28 md:py-36 bg-ivory text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid: Left Architectural Visual, Right Location & Conversion Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Striking Showroom Destination Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden bg-espresso shadow-2xl">
              <img
                src={SHOWROOM_VISIT_IMAGE}
                alt="D3 The Grand Interior Mall Flagship Showroom Destination"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-espresso/90 backdrop-blur-md p-6 border-l-2 border-bronze text-ivory">
                <span className="text-[10px] tracking-widestPlus uppercase text-bronze font-sans block mb-1">
                  Destination Showroom
                </span>
                <p className="font-serif text-2xl font-light text-white leading-snug">
                  Experience full spatial scale, natural daylight, and custom textures.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-white/60 font-sans">
                  <span>Valet & Parking Available</span>
                  <span>•</span>
                  <span>Private Material Lounges</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b border-l border-bronze/40 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Copy, CTAs, and Location Module */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-bold">
                07 — Invitation
              </span>
              <span className="w-8 h-[1px] bg-bronze/40" />
              <span className="text-charcoal/60 text-xs font-sans tracking-widestPlus uppercase">
                Showroom Experience
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-6xl text-espresso font-normal tracking-tight leading-[1.1] mb-6">
              Your next inspiration<br />
              <span className="italic font-light text-bronze-dark">is waiting.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-base md:text-lg text-charcoal/80 font-normal leading-relaxed mb-8">
              Step into D3 The Grand Interior Mall and explore a world of possibilities for your home.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onOpenVisitModal}
                className="px-8 py-4 bg-espresso text-ivory text-xs md:text-sm font-sans font-semibold tracking-widestPlus uppercase hover:bg-bronze hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
              >
                <span>Plan Your Visit</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-bronze group-hover:text-white" />
              </button>

              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-charcoal text-espresso text-xs md:text-sm font-sans font-medium tracking-widestPlus uppercase hover:bg-limestone transition-colors flex items-center justify-center gap-3"
              >
                <Navigation className="w-4 h-4 text-bronze" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Editable Location Module with Placeholders */}
            <div className="bg-limestone-light border border-limestone-dark/60 p-6 sm:p-8 space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bronze/10 text-bronze flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-espresso mb-1">
                    Showroom Location
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-charcoal/80 leading-relaxed">
                    {siteConfig.contact.addressDisplay}
                  </p>
                  <p className="text-xs font-sans text-charcoal/60">
                    {siteConfig.contact.addressArea}, {siteConfig.contact.cityState}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-limestone-dark/30">
                <div className="w-8 h-8 rounded-full bg-bronze/10 text-bronze flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-espresso mb-1">
                    Showroom Hours
                  </h4>
                  {siteConfig.contact.openingHours.map((schedule, idx) => (
                    <div key={idx} className="text-xs sm:text-sm font-sans text-charcoal/80 flex items-center justify-between gap-6">
                      <span className="text-charcoal/70">{schedule.days}:</span>
                      <span className="font-medium text-espresso">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4 pt-4 border-t border-limestone-dark/30">
                <div className="w-8 h-8 rounded-full bg-bronze/10 text-bronze flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-espresso mb-1">
                    Showroom Inquiries & Concierge
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-1">
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="text-xs sm:text-sm font-sans font-medium text-espresso hover:text-bronze transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <a
                      href={getWhatsAppLink(siteConfig.whatsappMessages.planVisit)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-bronze hover:text-bronze-dark transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Showroom Host</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Note on Easy Update */}
            <div className="mt-4 text-[10px] text-charcoal/50 font-sans tracking-wide">
              * Showroom address, timings, and phone lines are linked to the central config for immediate official updating.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
