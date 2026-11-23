import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'The Mall Experience', href: '#the-mall' },
    { label: 'Curated Collections', href: '#collections' },
    { label: 'The Art of Living', href: '#art-of-living' },
    { label: 'Material Library', href: '#materials' },
    { label: 'Inspiration Journal', href: '#inspiration' },
    { label: 'Showroom Location', href: '#visit' },
  ];

  return (
    <footer className="relative bg-espresso text-ivory pt-24 pb-12 overflow-hidden border-t border-white/10">
      
      {/* Oversized Background D3 Typographic Watermark (Luxury Editorial Magazine feel) */}
      <div className="absolute -top-12 right-0 select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="font-serif text-[28vw] font-bold leading-none text-white block">
          D3
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Tier: Brand Headline & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-ivory">
                <span className="font-serif text-xl font-medium">D3</span>
              </div>
              <span className="text-xs uppercase tracking-widestPlus text-bronze font-sans font-semibold">
                {siteConfig.brand.name}
              </span>
            </div>

            <p className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight mb-6">
              {siteConfig.brand.footerStatement}
            </p>

            <p className="font-sans text-xs sm:text-sm text-white/60 max-w-lg leading-relaxed">
              A physical sanctuary dedicated to high-end interior architecture, bespoke furnishings, curated textures, and inspiring room-scale settings.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widestPlus text-bronze font-sans font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-bronze" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widestPlus text-bronze font-sans font-semibold mb-6">
              Showroom Inquiries
            </h4>
            <div className="space-y-4 text-xs sm:text-sm font-sans text-white/70">
              <p>
                <span className="text-white/40 block text-[10px] uppercase tracking-widest mb-0.5">Concierge Desk</span>
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-white hover:text-bronze transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>

              <p>
                <span className="text-white/40 block text-[10px] uppercase tracking-widest mb-0.5">WhatsApp Host</span>
                <a
                  href={getWhatsAppLink(siteConfig.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start Live Inquiry</span>
                </a>
              </p>

              <div className="pt-2">
                <span className="text-white/40 block text-[10px] uppercase tracking-widest mb-2">Social Journal</span>
                <div className="flex items-center gap-4 text-xs">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-bronze transition-colors uppercase tracking-wider"
                  >
                    Instagram
                  </a>
                  <span>•</span>
                  <a
                    href={siteConfig.social.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-bronze transition-colors uppercase tracking-wider"
                  >
                    Pinterest
                  </a>
                  <span>•</span>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-bronze transition-colors uppercase tracking-wider"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright, Back to top, and Concept Disclaimer */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50 font-sans">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {siteConfig.brand.name}. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-white/30">Premium Digital Showroom Concept</span>
          </div>

          <button
            onClick={scrollToTop}
            className="text-white/70 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-[11px]"
          >
            <span>Back To Top</span>
            <span className="text-bronze">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
