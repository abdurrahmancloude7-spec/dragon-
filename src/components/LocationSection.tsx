import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.location);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194838]/10 text-[#194838] text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>FIND US IN ISLAMABAD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#19221F] tracking-tight">
            LOCATION & ACCESS
          </h2>
          <p className="mt-3 text-base text-[#57615D] max-w-xl mx-auto">
            Conveniently situated in Sector E-11, Islamabad. Visit us for takeaway or dine in and watch the live flames.
          </p>
        </div>

        {/* Location Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-[#E6DFD3] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Interactive Details */}
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3EF] text-[#194838] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#BA3222] block mb-1">
                SECTOR E-11
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#19221F] mb-4">
                Dragon Wok Master E-11
              </h3>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE5DA] mb-6">
                <p className="text-xs text-stone-500 font-medium mb-1">Official Address</p>
                <p className="text-base font-semibold text-[#19221F]">
                  {RESTAURANT_INFO.location}
                </p>
              </div>

              <div className="space-y-3 text-sm text-[#55605C] mb-8">
                <div className="flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-[#C0392B]" />
                  <span>Fresh live wok cooking prepared fresh to order</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-[#194838]" />
                  <span>Easily accessible from Margalla Road & Main E-11</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#EFE9DF]">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm bg-[#194838] text-white hover:bg-[#12362A] shadow-xs hover:shadow-md transition-all"
                id="get-directions-btn"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-semibold text-xs border border-[#D8CFC2] text-[#333D39] hover:bg-stone-50 transition-colors"
                id="copy-address-btn"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY LOCATION TEXT</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-7 h-80 sm:h-96 lg:h-auto min-h-[350px] relative bg-stone-200">
            <iframe
              title="Dragon Wok Master E-11 Islamabad Map"
              src="https://maps.google.com/maps?q=E-11%20Islamabad%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
};
