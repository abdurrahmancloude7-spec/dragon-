import React, { useState } from 'react';
import { Sparkles, X, ZoomIn, Camera } from 'lucide-react';
import { GALLERY_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'wok' | 'dishes' | 'ingredients' | 'kitchen'>('all');

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#194838]/10 text-[#194838] text-xs font-bold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>VISUAL FEAST</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#19221F] tracking-tight">
            THE GALLERY
          </h2>
          <p className="mt-4 text-base text-[#59635F] max-w-xl mx-auto">
            A glimpse into the open flame, freshly tossed noodle strands, garden produce, and sizzling aromas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {(['all', 'wok', 'dishes', 'ingredients', 'kitchen'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? 'bg-[#194838] text-white shadow-2xs'
                  : 'bg-white text-[#4A5450] hover:bg-stone-100 border border-[#E5DFD4]'
              }`}
            >
              {filter === 'all' ? 'All Visuals' : filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-900 shadow-xs hover:shadow-xl transition-all duration-300 h-72 sm:h-80 border border-[#E8E1D5]"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
                  {item.category}
                </span>
                <h4 className="font-display text-lg font-bold text-white mb-0.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          id="gallery-lightbox-modal"
        >
          <div
            className="relative max-w-4xl w-full bg-stone-950 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close modal"
              id="lightbox-close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-5 sm:p-6 bg-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  {selectedImage.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  {selectedImage.subtitle}
                </p>
              </div>
              <a
                href={RESTAURANT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold bg-[#194838] text-white hover:bg-[#12362A] shrink-0"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
