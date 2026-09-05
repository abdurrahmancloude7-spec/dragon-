import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111715] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#194838] flex items-center justify-center text-white">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <span className="font-display text-xl font-extrabold text-white tracking-wider">
                DRAGON WOK MASTER
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed mb-6">
              The Wok. The Fire. The Flavor. Freshly wok-fired Asian flavors in E-11, Islamabad.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                id="footer-instagram-link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                id="footer-facebook-link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollTo(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollTo(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => scrollTo(e, '#experience')}
                  className="hover:text-white transition-colors"
                >
                  Wok Experience
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => scrollTo(e, '#menu')}
                  className="hover:text-white transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollTo(e, '#gallery')}
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => scrollTo(e, '#location')}
                  className="hover:text-white transition-colors"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Restaurant Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 font-mono">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E74C3C] shrink-0" />
                <a
                  href={RESTAURANT_INFO.telLink}
                  className="hover:text-white transition-colors font-medium"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={RESTAURANT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  Chat with Dragon Wok on WhatsApp →
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Dragon Wok Master. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>E-11 · Islamabad, Pakistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
