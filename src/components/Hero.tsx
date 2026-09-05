import React from 'react';
import { Flame, MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[94vh] lg:min-h-screen flex items-center justify-start overflow-hidden pt-20"
    >
      {/* Background Image: Crisp, ultra-high-res wok flame toss */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=2400&q=90"
          alt="Freshly wok-fired Asian dish with live flames, steam and vibrant ingredients"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Subtle cinematic gradient overlay - keeps the food visually dominant while ensuring pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent sm:w-3/4 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Hero Content - Placed naturally with zero boxy card container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-2xl text-left">
          
          {/* Sub-label Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-[#E74C3C] fill-current animate-pulse" />
            <span>E-11 · ISLAMABAD</span>
            <span className="text-white/40">|</span>
            <span className="text-amber-300 flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3" /> Live Wok Cooking
            </span>
          </div>

          {/* Primary Restaurant Name */}
          <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] text-amber-200/95 uppercase mb-2 font-display">
            DRAGON WOK MASTER
          </h2>

          {/* Core Concept Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5 drop-shadow-md">
            THE WOK.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-red-400">
              THE FIRE.
            </span><br />
            THE FLAVOR.
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-stone-200 font-normal max-w-xl mb-8 leading-relaxed drop-shadow-sm">
            Freshly wok-fired Asian flavors in E-11, Islamabad. High heat, crisp vegetables, tender proteins, and authentic wok hei tossed to order.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, '#menu')}
              id="hero-view-menu-btn"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm sm:text-base font-bold tracking-wide bg-white text-[#1A221F] hover:bg-[#F2ECE2] shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              VIEW MENU
            </a>

            <a
              href={RESTAURANT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-order-btn"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold tracking-wide bg-[#194838] text-white hover:bg-[#12362A] border border-emerald-500/40 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-current text-emerald-300" />
              <span>ORDER / WHATSAPP</span>
            </a>
          </div>

          {/* Quick Info Tags */}
          <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap gap-6 text-xs sm:text-sm text-stone-300 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Fresh per order</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>High-heat wok tossing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Direct takeaway & dine</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1 group"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">EXPLORE</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-amber-300" />
      </a>
    </section>
  );
};
