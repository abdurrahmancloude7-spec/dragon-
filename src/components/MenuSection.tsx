import React, { useState } from 'react';
import { Flame, MessageCircle, Sparkles, Search, SlidersHorizontal } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL DISHES");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item: MenuItem) => {
    const matchesCategory =
      activeCategory === "ALL DISHES" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDishWhatsAppUrl = (dishName: string) => {
    const text = encodeURIComponent(
      `Hi Dragon Wok Master, I'd like to know more about the ${dishName} on your menu in E-11, Islamabad.`
    );
    return `https://wa.me/923005520882?text=${text}`;
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#194838]/10 text-[#194838] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>AUTHENTIC WOK REPERTOIRE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#19221F] tracking-tight">
            THE WOK SELECTIONS
          </h2>
          <p className="mt-4 text-base text-[#56605B] max-w-2xl mx-auto leading-relaxed">
            Freshly wok-fired to order over roaring carbon-steel heat. Contact us directly on WhatsApp or phone for current daily variations and orders.
          </p>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div className="mb-10 space-y-5">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search noodles, fried rice, chicken..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#E4DCCE] text-sm text-[#19221F] placeholder-stone-400 shadow-2xs focus:outline-hidden focus:border-[#194838] focus:ring-1 focus:ring-[#194838]"
              id="menu-search-input"
            />
          </div>

          {/* Category Tabs Carousel / Scroll */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none" id="menu-category-tabs">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#194838] text-white shadow-xs'
                    : 'bg-white text-[#4A5450] hover:bg-[#F0EAE0] border border-[#E8E1D5]'
                }`}
                id={`cat-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notice badge */}
        <div className="max-w-2xl mx-auto mb-10 p-3 rounded-xl bg-[#EBF3EF] border border-[#D5E6DE] text-center text-xs text-[#285747] font-medium flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 text-[#C0392B] shrink-0" />
          <span>Every order is wok-fired fresh. Tap any dish to inquire or order immediately via WhatsApp!</span>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 font-medium">No dishes found matching your search.</p>
            <button
              onClick={() => { setActiveCategory("ALL DISHES"); setSearchQuery(""); }}
              className="mt-3 text-xs font-bold text-[#194838] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#EBE3D7] flex flex-col justify-between group hover:-translate-y-1"
                id={`menu-card-${dish.id}`}
              >
                <div>
                  {/* Dish Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-100">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-white tracking-wider">
                      {dish.category}
                    </div>

                    {/* Signature or Spice Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      {dish.isSignature && (
                        <span className="bg-[#BA3222] text-white px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase">
                          Signature
                        </span>
                      )}
                      {dish.spiceLevel && dish.spiceLevel > 1 && (
                        <span className="bg-amber-600 text-white px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                          <Flame className="w-3 h-3 fill-current" />
                          {dish.spiceLevel === 3 ? 'Extra Spicy' : 'Spicy'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dish Details */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl font-bold text-[#19221F] mb-2 group-hover:text-[#BA3222] transition-colors">
                      {dish.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#5B6560] leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E9E2D6] text-[11px] font-medium text-[#65716C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-[#F2ECE2] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#194838]">
                    Fresh Wok Preparation
                  </span>

                  <a
                    href={getDishWhatsAppUrl(dish.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#194838] text-white hover:bg-[#12362A] transition-colors shadow-2xs"
                    title={`Inquire or order ${dish.name} on WhatsApp`}
                    id={`dish-order-btn-${dish.id}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire / Order</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Menu Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] border border-[#E5DDCF] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#19221F] mb-1">
              Have a special custom wok preference?
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6661]">
              Extra spice, more scallions, or custom ingredient combinations. Talk directly with the Dragon Wok team.
            </p>
          </div>
          <a
            href={RESTAURANT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#BA3222] text-white hover:bg-[#9E281A] shadow-xs hover:shadow-md transition-all"
            id="custom-order-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>CUSTOM WOK ORDER</span>
          </a>
        </div>

      </div>
    </section>
  );
};
