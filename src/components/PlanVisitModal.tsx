import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PlanVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlanVisitModal: React.FC<PlanVisitModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [preferredDay, setPreferredDay] = useState('This Weekend');
  const [selectedInterest, setSelectedInterest] = useState('Full Home Curation');
  const [guests, setGuests] = useState('1 - 2 Guests');

  if (!isOpen) return null;

  const interests = [
    'Living Spaces',
    'Full Home Curation',
    'Kitchen & Dining',
    'Primary Bedroom Suite',
    'Surfaces & Material Boards',
    'Lighting Architecture',
  ];

  const handleConfirmViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello D3 Showroom Concierge!%0A%0AI would like to plan a visit:%0A• Name: ${encodeURIComponent(name || 'Guest')}%0A• Preferred Time: ${encodeURIComponent(preferredDay)}%0A• Focus: ${encodeURIComponent(selectedInterest)}%0A• Party Size: ${encodeURIComponent(guests)}%0A%0APlease let me know the best time to visit.`;
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-modal-title"
    >
      <div className="relative w-full max-w-xl bg-ivory text-espresso p-6 sm:p-10 shadow-2xl border border-limestone-dark">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-charcoal/60 hover:text-espresso transition-colors"
          aria-label="Close Plan Visit Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-bronze" />
            <span className="text-[10px] tracking-widestPlus uppercase text-bronze font-sans font-semibold">
              Showroom Experience Concierge
            </span>
          </div>
          <h3 id="visit-modal-title" className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
            Plan Your Showroom Visit
          </h3>
          <p className="font-sans text-xs sm:text-sm text-charcoal/70 mt-2 leading-relaxed">
            Experience complete rooms, tactile materials, and spatial lighting in person. Reserve a guided walk or simply drop in.
          </p>
        </div>

        {/* Visit Preference Form */}
        <form onSubmit={handleConfirmViaWhatsApp} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-charcoal/80 font-sans mb-2 font-medium">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Advait Sharma"
              className="w-full px-4 py-3 bg-white border border-limestone-dark text-espresso placeholder:text-charcoal/40 text-sm font-sans focus:outline-none focus:border-bronze"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-charcoal/80 font-sans mb-2 font-medium">
              What spaces are you exploring?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  onClick={() => setSelectedInterest(interest)}
                  className={`text-left px-3.5 py-2.5 text-xs font-sans border transition-all ${
                    selectedInterest === interest
                      ? 'bg-espresso text-ivory border-espresso font-medium'
                      : 'bg-white border-limestone-dark text-charcoal/80 hover:border-bronze'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/80 font-sans mb-2 font-medium">
                Preferred Timing
              </label>
              <select
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-limestone-dark text-espresso text-sm font-sans focus:outline-none focus:border-bronze"
              >
                <option value="Today / Tomorrow">Today / Tomorrow</option>
                <option value="This Weekend">This Weekend</option>
                <option value="Upcoming Weekday">Upcoming Weekday</option>
                <option value="Next Weekend">Next Weekend</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/80 font-sans mb-2 font-medium">
                Accompanying Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-limestone-dark text-espresso text-sm font-sans focus:outline-none focus:border-bronze"
              >
                <option value="Solo (1 Person)">Solo (1 Person)</option>
                <option value="1 - 2 Guests">1 - 2 Guests</option>
                <option value="Family / 3+ Guests">Family / 3+ Guests</option>
                <option value="With Architect / Interior Designer">With Architect / Interior Designer</option>
              </select>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-4 bg-limestone/50 border border-limestone text-xs text-charcoal/70 flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
            <span>
              Direct coordination via WhatsApp ensures immediate confirmation with our showroom host.
            </span>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-4 bg-bronze text-white text-xs uppercase tracking-widestPlus font-semibold flex items-center justify-center gap-2 hover:bg-bronze-dark transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm Via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-4 border border-limestone-dark text-charcoal/70 text-xs uppercase tracking-widest font-sans hover:text-espresso transition-colors"
            >
              Close
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-6 pt-4 border-t border-limestone flex items-center justify-between text-[11px] text-charcoal/50 font-sans">
          <span>{siteConfig.contact.phoneDisplay}</span>
          <span>{siteConfig.contact.openingHours[0].hours}</span>
        </div>
      </div>
    </div>
  );
};
