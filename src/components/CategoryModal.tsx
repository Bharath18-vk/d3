import React, { useEffect } from 'react';
import { X, ArrowRight, MessageCircle, Check } from 'lucide-react';
import type { CategoryItem } from '../types';
import { getWhatsAppLink } from '../config/siteConfig';

interface CategoryModalProps {
  category: CategoryItem | null;
  onClose: () => void;
  onOpenVisitModal: () => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  onClose,
  onOpenVisitModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-ivory text-espresso shadow-2xl border border-limestone-dark overflow-hidden my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-espresso/80 text-white rounded-full hover:bg-bronze transition-colors focus:outline-none"
          aria-label="Close Category Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Visual */}
          <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto min-h-[320px] bg-limestone overflow-hidden">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white font-sans text-[11px] tracking-widest uppercase bg-espresso/80 px-3 py-1">
              Category {category.number}
            </div>
          </div>

          {/* Right Column: Details & Inquiry */}
          <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-bronze text-xs font-sans tracking-widestPlus uppercase font-semibold">
                  Curated Showroom World
                </span>
              </div>

              <h3 id="category-modal-title" className="font-serif text-3xl sm:text-4xl text-espresso font-normal leading-tight mb-3">
                {category.title}
              </h3>

              <p className="font-serif text-base sm:text-lg text-bronze-dark italic font-light mb-6">
                {category.subtitle}
              </p>

              <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Elements explored */}
              <div className="mb-8">
                <span className="text-[10px] tracking-widest uppercase text-charcoal/60 font-sans font-semibold block mb-3">
                  Highlights & Form Factors
                </span>
                <div className="flex flex-wrap gap-2">
                  {category.featuredTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-limestone text-xs font-sans text-charcoal border border-limestone-dark/40 flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-bronze" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-limestone-dark/60 flex flex-col gap-3">
              <a
                href={getWhatsAppLink(category.inquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-bronze text-white text-xs uppercase tracking-widestPlus font-semibold flex items-center justify-center gap-2 hover:bg-bronze-dark transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire On WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenVisitModal();
                }}
                className="w-full py-3 border border-espresso text-espresso text-xs uppercase tracking-widestPlus font-medium hover:bg-espresso hover:text-white transition-colors"
              >
                Plan In-Person Showroom Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
