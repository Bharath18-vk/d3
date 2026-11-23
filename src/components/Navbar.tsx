import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

interface NavbarProps {
  onOpenVisitModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisitModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Mall', href: '#the-mall' },
    { label: 'Collections', href: '#collections' },
    { label: 'Art of Living', href: '#art-of-living' },
    { label: 'Materials', href: '#materials' },
    { label: 'Inspiration', href: '#inspiration' },
    { label: 'Visit', href: '#visit' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(37,34,31,0.06)] border-b border-limestone'
            : 'bg-gradient-to-b from-espresso/80 via-espresso/40 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Wordmark / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="D3 The Grand Interior Mall Home"
          >
            <div className={`relative flex items-center justify-center w-10 h-10 border transition-all duration-300 ${
              isScrolled 
                ? 'border-espresso text-espresso group-hover:border-bronze group-hover:bg-espresso group-hover:text-ivory' 
                : 'border-white/60 text-white group-hover:border-white group-hover:bg-white group-hover:text-espresso'
            }`}>
              <span className="font-serif text-xl font-medium tracking-tight">D3</span>
              <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-bronze rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className={`font-serif text-lg tracking-wider font-semibold transition-colors duration-300 leading-tight ${
                isScrolled ? 'text-espresso' : 'text-white'
              }`}>
                D3
              </span>
              <span className={`text-[9px] tracking-widestPlus uppercase font-sans transition-colors duration-300 ${
                isScrolled ? 'text-charcoal/70' : 'text-white/80'
              }`}>
                The Grand Interior Mall
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widestPlus font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors duration-300 ${
                  isScrolled
                    ? 'text-charcoal hover:text-bronze'
                    : 'text-white/90 hover:text-white'
                } group`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-bronze transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getWhatsAppLink(siteConfig.whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-1.5 text-[11px] tracking-widest uppercase font-medium px-3.5 py-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-charcoal hover:text-bronze' 
                  : 'text-white/90 hover:text-white'
              }`}
              title="Quick WhatsApp Inquiry"
            >
              <MessageCircle className="w-3.5 h-3.5 text-bronze" />
              <span>Enquire</span>
            </a>

            <button
              onClick={onOpenVisitModal}
              className={`relative text-xs tracking-widestPlus uppercase font-semibold px-5 py-2.5 transition-all duration-500 overflow-hidden group ${
                isScrolled
                  ? 'bg-espresso text-ivory hover:bg-bronze hover:text-white'
                  : 'bg-white text-espresso hover:bg-bronze hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Plan Your Visit
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors focus:outline-none ${
              isScrolled ? 'text-espresso' : 'text-white'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-espresso/95 backdrop-blur-xl text-ivory transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <p className="text-[10px] tracking-widestPlus uppercase text-bronze font-medium">
            Digital Showroom Navigation
          </p>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-3xl font-light tracking-wide text-ivory hover:text-bronze transition-colors flex items-center justify-between border-b border-white/10 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans text-bronze tracking-widest">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVisitModal();
            }}
            className="w-full bg-bronze text-white text-xs uppercase tracking-widestPlus font-medium py-3.5 text-center flex items-center justify-center gap-2 hover:bg-bronze-dark transition-colors"
          >
            <span>Plan Your Showroom Visit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppLink(siteConfig.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-white/20 text-ivory text-xs uppercase tracking-widestPlus font-medium py-3 text-center flex items-center justify-center gap-2 hover:border-bronze hover:text-bronze transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-bronze" />
            <span>Direct WhatsApp Concierge</span>
          </a>

          <div className="text-[11px] text-white/50 tracking-wider text-center pt-2">
            {siteConfig.brand.name} • Flagship Interior Destination
          </div>
        </div>
      </div>
    </>
  );
};
