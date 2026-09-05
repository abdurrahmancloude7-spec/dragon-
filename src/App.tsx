import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WokExperience } from './components/WokExperience';
import { FoodStory } from './components/FoodStory';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { SocialSection } from './components/SocialSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A221F] selection:bg-[#E8DCCB] selection:text-[#872016] overflow-x-hidden flex flex-col pb-16 lg:pb-0">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Full-width Hero */}
        <Hero />

        {/* Editorial About Section */}
        <About />

        {/* 4 Moments: Wok Experience */}
        <WokExperience />

        {/* Visual Story: Fresh Ingredients -> Hot Wok -> Fast Flame -> Perfect Bowl */}
        <FoodStory />

        {/* Category-Based Menu */}
        <MenuSection />

        {/* Sharp High-Res Gallery */}
        <GallerySection />

        {/* Community / Social Connect */}
        <SocialSection />

        {/* Location & Map in E-11 */}
        <LocationSection />

        {/* Direct Phone & WhatsApp Contact */}
        <ContactSection />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingActionBar />
    </div>
  );
}
