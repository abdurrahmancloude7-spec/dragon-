import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingActionBar: React.FC = () => {
  return (
    <div
      id="floating-mobile-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8E1D5] p-3 px-4 shadow-2xl flex items-center gap-3"
    >
      <a
        href={RESTAURANT_INFO.telLink}
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold border border-[#D6CDBF] text-[#19221F] bg-white hover:bg-stone-50 transition-colors shadow-2xs"
        id="mobile-float-call-btn"
      >
        <Phone className="w-3.5 h-3.5 text-[#C0392B]" />
        <span>CALL NOW</span>
      </a>

      <a
        href={RESTAURANT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold bg-[#194838] text-white hover:bg-[#12362A] transition-colors shadow-md"
        id="mobile-float-whatsapp-btn"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-300" />
        <span>WHATSAPP</span>
      </a>
    </div>
  );
};
