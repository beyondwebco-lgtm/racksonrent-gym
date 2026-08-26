"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  Stethoscope,
  ShoppingBag,
  Sparkles,
  Apple,
  HeartHandshake,
  Zap,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Tag,
  ShieldCheck,
  Users,
  Layers,
  Headphones,
  MapPin,
  ArrowRight,
  Dumbbell,
  Store,
} from "lucide-react";
import {
  SHOWCASE_CATEGORIES,
  SHOWCASE_TRUST_ITEMS,
  ShowcaseCategory,
} from "@/data/showcase";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface GymSpaceShowcaseProps {
  onSelectCategoryAction?: (
    role: "gym-owner" | "wellness",
    prefillData: { spaceType?: string; category?: string }
  ) => void;
}

export default function GymSpaceShowcase({
  onSelectCategoryAction,
}: GymSpaceShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Stethoscope,
    ShoppingBag,
    Sparkles,
    Apple,
    HeartHandshake,
    Zap,
    ShieldCheck,
    Users,
    Layers,
    Headphones,
    MapPin,
  };

  const activeCategory: ShowcaseCategory = SHOWCASE_CATEGORIES[activeIndex];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_CATEGORIES.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + SHOWCASE_CATEGORIES.length) % SHOWCASE_CATEGORIES.length
    );
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating]);

  // Autoplay rotation every 7 seconds
  useEffect(() => {
    if (isAutoplayPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNext, isAutoplayPaused]);

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "SELECT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleCtaPrimaryClick = () => {
    if (onSelectCategoryAction) {
      onSelectCategoryAction("gym-owner", {
        spaceType: activeCategory.spaceTypePrimary,
      });
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaSecondaryClick = () => {
    if (onSelectCategoryAction) {
      onSelectCategoryAction("wellness", {
        category: activeCategory.categorySecondary,
      });
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-16 sm:py-24 bg-[#FFFDF5] border-b border-[#F0E2E4] relative overflow-hidden"
      id="opportunities"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Gym Space Opportunities"
          title={
            <>
              <span className="hidden sm:inline">Choose What You Want to Place Inside a Gym</span>
              <span className="sm:hidden">Explore Gym Space Formats</span>
            </>
          }
          subtitle="Explore premium rack, kiosk, counter, and service-space formats designed for nutrition, fitness, recovery, apparel, and healthy lifestyle businesses."
        />

        {/* Category Tab Bar (Horizontally Scrollable on Mobile) */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex gap-2 overflow-x-auto pb-2 pt-1 px-2 max-w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {SHOWCASE_CATEGORIES.map((cat, idx) => {
              const IconComp = iconMap[cat.iconName] || Layers;
              const isActive = idx === activeIndex;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(idx);
                    setTimeout(() => setIsAnimating(false), 450);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold border transition-all flex-shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#6B0F1A] text-[#FFF6A3] border-[#F7E200] shadow-md scale-105"
                      : "bg-[#FFFDF5] text-[#6B0F1A] border-[#F0E2E4] hover:bg-[#FFF6A3]/40"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-[#F7E200]" : "text-[#6B0F1A]"}`} />
                  <span>{cat.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Showcase Panel */}
        <div
          ref={showcaseRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-[#FFFDF5] rounded-3xl border-2 border-[#6B0F1A] p-6 sm:p-10 px-8 sm:px-14 lg:px-16 shadow-[0_24px_70px_rgba(107,15,26,0.12)] overflow-hidden"
        >
          {/* Left Arrow Button on Left Side of Box */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous space category"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F7E200] flex items-center justify-center shadow-lg hover:bg-[#3D0710] hover:text-[#F7E200] hover:scale-105 transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Right Arrow Button on Right Side of Box */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next space category"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F7E200] flex items-center justify-center shadow-lg hover:bg-[#3D0710] hover:text-[#F7E200] hover:scale-105 transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Category Content */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-450 ${
                isAnimating ? "opacity-30 scale-98 translate-x-2" : "opacity-100 scale-100 translate-x-0"
              }`}
            >
              <div>
                <span className="inline-flex rounded-full bg-[#FFF6A3] px-3.5 py-1 text-xs font-black text-[#6B0F1A] border border-[#6B0F1A]/20">
                  {activeCategory.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#6B0F1A] leading-snug">
                  {activeCategory.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium">
                  {activeCategory.description}
                </p>
              </div>

              {/* Suitable Products / Services */}
              <div>
                <span className="block text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Suitable For</span>
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeCategory.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#FFF6A3]/60 text-[#3D0710] text-xs font-bold border border-[#6B0F1A]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <span className="block text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Benefits</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCategory.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1F1F1F] font-extrabold">
                      <CheckCircle2 className="w-4 h-4 text-[#6B0F1A] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleCtaPrimaryClick}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7E200] text-[#3D0710] border border-[#6B0F1A]/30 px-6 py-3 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-[#3D0710] hover:text-[#F7E200] transition-all cursor-pointer"
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>{activeCategory.primaryCta}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCtaSecondaryClick}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6B0F1A] text-[#FFF6A3] border border-[#6B0F1A] px-6 py-3 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-[#3D0710] hover:text-[#F7E200] transition-all cursor-pointer"
                >
                  <Store className="w-4 h-4 text-[#F7E200]" />
                  <span>{activeCategory.secondaryCta}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Featured Category Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#6B0F1A]/30 shadow-[0_16px_40px_rgba(107,15,26,0.15)] w-full max-w-lg mx-auto group flex items-center justify-center">

                <img
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  className={`w-full h-auto block object-contain transition-all duration-500 group-hover:scale-[1.05] ${
                    isAnimating ? "opacity-40 scale-98" : "opacity-100 scale-100"
                  }`}
                />
                
                {/* Subtle Gradient at Bottom for Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Floating Category Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#3D0710]/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl border-2 border-[#F7E200] shadow-xl flex items-center justify-between text-sm sm:text-base font-bold tracking-wide z-10">
                  <span className="truncate">{activeCategory.title} Space</span>
                  <ArrowRight className="w-5 h-5 text-[#F7E200] flex-shrink-0 ml-2" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Compact Trust Supporting Strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-[#F0E2E4]">
          {SHOWCASE_TRUST_ITEMS.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFFDF5] border border-[#F0E2E4] shadow-2xs"
              >
                <div className="p-2 rounded-xl bg-[#FFF6A3] text-[#6B0F1A] flex-shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#6B0F1A] leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-[#5F5F5F] font-bold mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
