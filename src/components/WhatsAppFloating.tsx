import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Luxury Tooltip Bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-espresso text-ivory px-4 py-2.5 shadow-2xl border border-bronze/30 text-xs font-sans transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="tracking-wide">Chat with Showroom Concierge</span>
      </div>

      {/* Floating Button */}
      <a
        href={getWhatsAppLink(siteConfig.whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-espresso text-ivory rounded-full shadow-[0_10px_30px_rgba(37,34,31,0.25)] border border-bronze/40 hover:bg-bronze hover:border-bronze hover:text-white transition-all duration-300 focus:outline-none"
        aria-label="Chat with D3 The Grand Interior Mall on WhatsApp"
      >
        {/* Subtle breathing ring */}
        <span className="absolute inset-0 rounded-full border border-bronze/50 animate-ping opacity-25 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 text-bronze group-hover:text-white transition-colors duration-300" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-espresso" />
      </a>
    </div>
  );
};
