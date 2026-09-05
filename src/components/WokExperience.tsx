import React from 'react';
import { Flame, Leaf, Zap, UtensilsCrossed } from 'lucide-react';
import { EXPERIENCE_MOMENTS } from '../data/restaurantData';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6 text-[#C0392B]" />,
  Leaf: <Leaf className="w-6 h-6 text-[#194838]" />,
  Zap: <Zap className="w-6 h-6 text-amber-600" />,
  Utensils: <UtensilsCrossed className="w-6 h-6 text-[#194838]" />,
};

export const WokExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194838]/10 text-[#194838] text-xs font-bold tracking-widest uppercase mb-3">
            <span>THE LIVE TECHNIQUE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#19221F] tracking-tight leading-tight">
            WOK-FIRED.<br className="hidden sm:inline" /> FRESH. FULL OF FLAVOR.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#55605B] max-w-xl mx-auto">
            The secret to true wok cooking lies in rapid velocity, searing temperatures, and precise timing.
          </p>
        </div>

        {/* 4 Visual Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EXPERIENCE_MOMENTS.map((item) => (
            <div
              key={item.step}
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#E8E1D5] flex flex-col hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Step badge */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white font-mono text-xs font-bold tracking-wider">
                  {item.step}
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-200">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EAE4D8] flex items-center justify-center mb-4 group-hover:bg-[#EBF3EF] transition-colors">
                    {iconMap[item.iconName] || <Flame className="w-6 h-6 text-[#C0392B]" />}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#19221F] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6661] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
