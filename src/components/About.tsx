import React from 'react';
import { Flame, Sparkles, Utensils, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle ambient accent textures */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#194838]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C0392B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Asymmetrical Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
                alt="Fresh Asian wok cooking with vibrant ingredients and aromatic spices"
                className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Asymmetric Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-xl shadow-md border border-[#E9E2D5] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#194838] flex items-center justify-center text-white shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#194838]">Authentic Live Fire</p>
                  <p className="text-xs text-[#525B57] font-medium">Flash-fired in carbon steel woks</p>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#194838]/30 rounded-tl-xl pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#C0392B]/30 rounded-br-xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text Presentation */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3EF] border border-[#D1E4DB] text-[#194838] text-xs font-bold tracking-widest uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PHILOSOPHY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171D1B] tracking-tight leading-[1.15] mb-6">
              Where Quick Cooking Meets <span className="text-[#C0392B]">Serious Flavor</span>.
            </h2>

            {/* Exact Required Quote Content */}
            <div className="relative pl-6 border-l-3 border-[#C0392B] mb-8">
              <p className="text-lg sm:text-xl text-[#2C3431] font-medium italic leading-relaxed">
                &ldquo;At Dragon Wok Master, every dish is built around the heat of the wok, fresh ingredients and bold Asian-inspired flavors. A place where quick cooking meets serious flavor.&rdquo;
              </p>
            </div>

            <p className="text-base text-[#4F5955] leading-relaxed mb-8">
              Situated in the vibrant neighborhood of E-11, Islamabad, we bring the captivating sizzle and theatrical aroma of live wok tossing right to your table. Our kitchen focuses on blistering heat, crispy textures, and rich caramelization that only a raging flame and carbon steel can deliver.
            </p>

            {/* Micro Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE4D8] mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#194838] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#19221F]">Fresh Chopped Daily</h4>
                  <p className="text-xs text-[#636E69]">Crisp seasonal greens and aromatics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#194838] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#19221F]">High Wok Heat</h4>
                  <p className="text-xs text-[#636E69]">Sealing in crunch, moisture & savor</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div>
              <a
                href={RESTAURANT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#194838] text-white hover:bg-[#12362A] shadow-md hover:shadow-lg transition-all"
                id="about-cta-btn"
              >
                <Utensils className="w-4 h-4" />
                <span>EXPERIENCE THE FLAVOR</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
