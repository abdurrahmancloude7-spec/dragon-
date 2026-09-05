import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E2D8] py-3'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group focus:outline-hidden"
          id="nav-brand-logo"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
              isScrolled
                ? 'bg-[#194838] text-white shadow-xs'
                : 'bg-white/90 text-[#BA3222] shadow-sm backdrop-blur-xs'
            }`}
          >
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-display text-lg sm:text-xl font-extrabold tracking-wider transition-colors ${
                isScrolled ? 'text-[#19221F]' : 'text-white drop-shadow-sm'
              }`}
            >
              DRAGON WOK MASTER
            </span>
            <span
              className={`text-[11px] font-medium tracking-widest uppercase -mt-0.5 ${
                isScrolled ? 'text-[#194838]' : 'text-white/80'
              }`}
            >
              E-11 · ISLAMABAD
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#BA3222] focus:outline-hidden ${
                isScrolled ? 'text-[#2D312E]' : 'text-white/90 drop-shadow-xs'
              }`}
              id={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3" id="desktop-cta-group">
          <a
            href={RESTAURANT_INFO.telLink}
            id="nav-call-btn"
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
              isScrolled
                ? 'border border-[#D9D1C5] text-[#2D312E] hover:border-[#194838] hover:text-[#194838]'
                : 'bg-black/30 backdrop-blur-xs border border-white/30 text-white hover:bg-black/50'
            }`}
            title="Call Restaurant"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0300 5520882</span>
          </a>

          <a
            href={RESTAURANT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-order-whatsapp-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-[#194838] text-white hover:bg-[#12362a] shadow-xs hover:shadow-md transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>ORDER NOW</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={RESTAURANT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#194838] text-white sm:hidden"
            aria-label="Order via WhatsApp"
            id="mobile-quick-whatsapp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors focus:outline-hidden ${
              isScrolled
                ? 'text-[#19221F] hover:bg-[#EAE4D9]'
                : 'text-white bg-black/30 backdrop-blur-xs'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#E4DCCE] shadow-xl px-5 py-6 transition-all animate-in slide-in-from-top-4 duration-200"
          id="mobile-drawer-menu"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-[#1C211F] hover:text-[#BA3222] py-2 border-b border-[#EFE9DF] transition-colors"
                id={`mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={RESTAURANT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                id="mobile-drawer-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-[#194838] text-white shadow-xs hover:bg-[#13392c]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              <a
                href={RESTAURANT_INFO.telLink}
                id="mobile-drawer-call-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm border border-[#D5CCC0] text-[#1C211F] hover:bg-[#F2ECE2]"
              >
                <Phone className="w-4 h-4" />
                <span>CALL: 0300 5520882</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
