import React from 'react';
import { Instagram, Facebook, ArrowUpRight, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5EFE6] border-t border-[#EAE2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194838]/10 text-[#194838] text-xs font-bold tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>JOIN OUR COMMUNITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#19221F] tracking-tight">
            FOLLOW THE WOK
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#56605C] max-w-lg mx-auto">
            Stay connected with Dragon Wok Master on Instagram and Facebook for sizzling kitchen updates in E-11, Islamabad.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Instagram Card */}
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-white border border-[#E6DFD2] shadow-xs hover:shadow-lg transition-all flex items-center justify-between hover:-translate-y-1"
            id="social-instagram-card"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7A8580]">Instagram</p>
                <h4 className="font-bold text-base text-[#19221F]">{RESTAURANT_INFO.instagramHandle}</h4>
                <p className="text-xs text-[#525B57] mt-0.5">Follow our wok cooking moments</p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-[#194838] group-hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Facebook Card */}
          <a
            href={RESTAURANT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-white border border-[#E6DFD2] shadow-xs hover:shadow-lg transition-all flex items-center justify-between hover:-translate-y-1"
            id="social-facebook-card"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7A8580]">Facebook</p>
                <h4 className="font-bold text-base text-[#19221F]">Dragon Wok Master</h4>
                <p className="text-xs text-[#525B57] mt-0.5">Official Facebook page</p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-[#194838] group-hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
