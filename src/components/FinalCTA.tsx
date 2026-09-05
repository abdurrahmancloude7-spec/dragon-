import React from 'react';
import { MessageCircle, Phone, Flame, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 bg-[#17201D] text-white relative overflow-hidden">
      {/* Background warm ember ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#BA3222]/20 via-[#194838]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Flame Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6">
          <Flame className="w-4 h-4 text-[#E74C3C] fill-current animate-bounce" />
          <span>DRAGON WOK MASTER</span>
        </div>

        {/* Primary Impact Headlines */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          FRESH FROM THE WOK.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-red-400">
            BIG ON FLAVOR.
          </span>
        </h2>

        {/* Location Subtitle */}
        <div className="flex items-center justify-center gap-2 text-stone-300 text-base sm:text-lg mb-10">
          <MapPin className="w-5 h-5 text-emerald-400" />
          <span className="font-medium">E-11, Islamabad</span>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={RESTAURANT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-[#194838] text-white hover:bg-[#12362A] border border-emerald-500/40 shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
            id="final-cta-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5 fill-current text-emerald-300" />
            <span>ORDER ON WHATSAPP</span>
          </a>

          <a
            href={RESTAURANT_INFO.telLink}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-white text-[#17201D] hover:bg-[#FAF8F5] shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
            id="final-cta-call-btn"
          >
            <Phone className="w-5 h-5 text-[#C0392B]" />
            <span>CALL NOW</span>
          </a>
        </div>

      </div>
    </section>
  );
};
