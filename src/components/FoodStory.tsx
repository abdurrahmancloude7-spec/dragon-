import React, { useState } from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { FOOD_STORY_STEPS } from '../data/restaurantData';

export const FoodStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-y border-[#EBE3D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194838]/10 text-[#194838] text-xs font-bold tracking-widest uppercase mb-3">
              <Flame className="w-3.5 h-3.5 text-[#C0392B]" />
              <span>THE PROCESS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#19221F] tracking-tight">
              FROM RAW FIRE TO YOUR BOWL
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A6460] max-w-md">
            Every dish undergoes a lightning-fast transformation at 700°F. Watch how heat and fresh produce unite.
          </p>
        </div>

        {/* Journey Timeline Progression Indicator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {FOOD_STORY_STEPS.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl text-left border transition-all ${
                activeStep === idx
                  ? 'bg-white border-[#194838] shadow-md ring-2 ring-[#194838]/20'
                  : 'bg-white/60 border-[#E8E1D5] hover:bg-white hover:border-[#D5CCC0]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span className={activeStep === idx ? 'text-[#194838]' : 'text-[#8A9590]'}>
                  STEP {step.number}
                </span>
                {idx < FOOD_STORY_STEPS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 hidden sm:inline" />
                )}
              </div>
              <h4 className={`text-xs sm:text-sm font-bold truncate ${
                activeStep === idx ? 'text-[#19221F]' : 'text-[#58635F]'
              }`}>
                {step.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Featured Story Display - High-Impact Stage */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D6] grid grid-cols-1 lg:grid-cols-12">
          {/* Main Visual Photo */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden bg-stone-900">
            <img
              src={FOOD_STORY_STEPS[activeStep].image}
              alt={FOOD_STORY_STEPS[activeStep].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            
            {/* Step Counter Tag */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#19221F] shadow-xs">
              STAGE {FOOD_STORY_STEPS[activeStep].number} OF 04
            </div>
          </div>

          {/* Story Narrative Card */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C0392B] block mb-2">
                {FOOD_STORY_STEPS[activeStep].tagline}
              </span>
              
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#19221F] tracking-tight mb-4">
                {FOOD_STORY_STEPS[activeStep].title}
              </h3>
              
              <p className="text-base sm:text-lg text-[#55605B] leading-relaxed mb-6">
                {FOOD_STORY_STEPS[activeStep].description}
              </p>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE9DF] text-xs text-[#525C57]">
                <strong className="text-[#194838] block mb-1">The Wok Master Standard:</strong>
                Never boiled, never pre-steamed. Cooked at extreme speed in E-11 to preserve maximum crunch, crisp aroma, and natural nutrition.
              </div>
            </div>

            {/* Stepper Navigation Controls */}
            <div className="pt-6 border-t border-[#EFE9DF] flex items-center justify-between mt-6">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : FOOD_STORY_STEPS.length - 1))}
                className="text-xs font-bold text-[#55605B] hover:text-[#19221F] px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors"
              >
                ← Previous
              </button>

              <div className="flex gap-1.5">
                {FOOD_STORY_STEPS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === i ? 'w-6 bg-[#194838]' : 'w-2 bg-stone-300'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev < FOOD_STORY_STEPS.length - 1 ? prev + 1 : 0))}
                className="text-xs font-bold text-[#194838] hover:text-[#12362A] px-4 py-2 rounded-lg hover:bg-[#EBF3EF] transition-colors"
              >
                Next →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
