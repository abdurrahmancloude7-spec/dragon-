import React, { useState } from 'react';
import { Phone, MessageCircle, Flame, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [customNote, setCustomNote] = useState('');

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const baseMsg = customNote.trim()
      ? `Hi Dragon Wok Master, ${customNote.trim()}`
      : "Hi Dragon Wok Master, I'd like to know more about your menu.";
    window.open(`https://wa.me/923005520882?text=${encodeURIComponent(baseMsg)}`, '_blank');
  };

  const quickPrompts = [
    "I'd like to know more about your menu.",
    "I want to place a takeaway order for pickup in E-11.",
    "Do you have spicy noodle specials today?",
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#194838]/10 text-[#194838] text-xs font-bold tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#C0392B]" />
            <span>DIRECT CONNECT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#19221F] tracking-tight">
            READY FOR THE WOK?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#55605B]">
            Reach out directly for orders, questions, or custom spice requests in E-11, Islamabad.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Phone Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#E7DFD2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3EF] text-[#194838] flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Call Us Directly</span>
                <h3 className="font-display text-2xl font-bold text-[#19221F] mt-1 mb-2">
                  0300 5520882
                </h3>
                <p className="text-xs text-[#5C6662] mb-6">
                  Speak with the Dragon Wok team for immediate inquiries and phone orders.
                </p>
              </div>

              <a
                href={RESTAURANT_INFO.telLink}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-sm bg-white border-2 border-[#194838] text-[#194838] hover:bg-[#194838] hover:text-white transition-all shadow-2xs"
                id="contact-call-btn"
              >
                <Phone className="w-4 h-4" />
                <span>CALL 0300 5520882</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#E7DFD2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#194838] text-white flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Instant Chat</span>
                <h3 className="font-display text-2xl font-bold text-[#19221F] mt-1 mb-2">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-[#5C6662] mb-6">
                  Chat with us instantly on WhatsApp. Browse dishes or order right away.
                </p>
              </div>

              <a
                href={RESTAURANT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm bg-[#194838] text-white hover:bg-[#12362A] transition-all shadow-md"
                id="contact-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-300" />
                <span>MESSAGE ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Quick WhatsApp Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#E7DFD2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C0392B] mb-2">
                <Flame className="w-4 h-4" />
                <span>Quick Message Starter</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#19221F] mb-3">
                Send a WhatsApp Note
              </h3>
              <p className="text-sm text-[#5C6662] mb-6">
                Pick a question or type your custom message to open WhatsApp with your text ready:
              </p>

              {/* Quick Suggestion Chips */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-semibold text-stone-600">Quick suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setCustomNote(prompt)}
                      className="text-left text-xs px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E6DFD3] text-[#2F3834] hover:border-[#194838] hover:bg-[#EBF3EF] transition-all"
                    >
                      &ldquo;{prompt}&rdquo;
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendCustomWhatsApp} className="space-y-4">
                <div>
                  <label htmlFor="custom-msg-input" className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Your message:
                  </label>
                  <textarea
                    id="custom-msg-input"
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Hi Dragon Wok Master, I'd like to know more about your menu."
                    className="w-full p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] text-sm text-[#19221F] placeholder-stone-400 focus:outline-hidden focus:border-[#194838] focus:ring-1 focus:ring-[#194838]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm bg-[#194838] text-white hover:bg-[#12362A] transition-all shadow-md"
                  id="send-whatsapp-custom-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>START CHAT ON WHATSAPP</span>
                </button>
              </form>
            </div>

            <div className="pt-6 border-t border-[#EFE9DF] mt-6 flex items-center gap-2 text-xs text-[#626E69]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct connection to our phone number (0300 5520882). No middlemen.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
