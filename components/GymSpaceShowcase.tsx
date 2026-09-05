"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Sparkles,
  HeartHandshake,
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
  Store,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

import {
  SHOWCASE_CATEGORIES,
  SHOWCASE_TRUST_ITEMS,
  ShowcaseCategory,
} from "@/data/showcase";

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
    ShoppingBag,
    Sparkles,
    HeartHandshake,
    ShieldCheck,
    Users,
    Layers,
    Headphones,
    MapPin,
    Store,
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
        
        <SectionHeader
          badge="GYM DISPLAY OPPORTUNITIES"
          title={
            <>
              <span className="hidden sm:inline">
                Choose What You Want to <span className="text-[#B8913A]">Place</span> Inside a Gym
              </span>
              <span className="sm:hidden">
                Choose What You Want to <span className="text-[#B8913A]">Place</span> Inside a Gym
              </span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Explore premium rack, kiosk, counter, and service-space formats designed for nutrition, fitness, recovery, apparel, and healthy lifestyle businesses.
            </span>
          }
        />


        {/* Category Tab Bar (Flex Wrap - Fully Visible Without Horizontal Scroll) */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-5xl mx-auto px-2">
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
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all cursor-pointer min-h-[44px] ${
                    isActive
                      ? "bg-[#740202] text-[#FAFA33] border-[#FAFA33] shadow-md scale-105"
                      : "bg-[#FFFDF5] text-[#740202] border-[#F0E2E4] hover:bg-[#FFFBCC]/40"
                  }`}
                >
                  <IconComp className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-[#FAFA33]" : "text-[#740202]"}`} />
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className={`whitespace-normal text-left text-base sm:text-lg font-semibold italic leading-relaxed ${
                      isActive ? "text-[#FAFA33]" : "text-[#740202]"
                    }`}
                  >
                    {cat.shortName}
                  </span>
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
          className="relative bg-[#FFFDF5] rounded-3xl border-2 border-[#740202] p-6 sm:p-10 px-8 sm:px-14 lg:px-16 shadow-[0_24px_70px_rgba(116,2,2,0.12)] overflow-hidden"
        >
          {/* Left Arrow Button on Left Side of Box */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous space category"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#740202] text-[#FAFA33] border-2 border-[#FAFA33] flex items-center justify-center shadow-lg hover:bg-[#500101] hover:text-[#FAFA33] hover:scale-105 transition-all cursor-pointer active:scale-95 min-w-[44px] min-h-[44px]"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Right Arrow Button on Right Side of Box */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next space category"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#740202] text-[#FAFA33] border-2 border-[#FAFA33] flex items-center justify-center shadow-lg hover:bg-[#500101] hover:text-[#FAFA33] hover:scale-105 transition-all cursor-pointer active:scale-95"
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
                <span className="inline-flex rounded-full bg-[#FAFA33] px-3.5 py-1 text-xs font-black text-[#740202] border border-[#740202]/20">
                  {activeCategory.eyebrow}
                </span>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold italic text-[#740202] leading-snug"
                >
                  {activeCategory.title}
                </h3>
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="mt-3 text-base sm:text-lg text-[#1F1F1F] leading-relaxed font-medium"
                >
                  {activeCategory.description}
                </p>
              </div>

              {/* Suitable Products / Services */}
              <div className="pt-1">
                <span className="block text-xs font-extrabold italic text-[#B8913A] uppercase tracking-[0.05em] mb-2.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#B8913A]" />
                  <span>Suitable For</span>
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {activeCategory.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-[8px] bg-[rgba(255,251,204,0.60)] text-[#740202] text-xs sm:text-sm font-bold border border-[rgba(116,2,2,0.10)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="pt-1">
                <span className="block text-xs font-extrabold italic text-[#740202] uppercase tracking-[0.05em] mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#740202]" />
                  <span>Key Benefits</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {activeCategory.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[#B8913A] text-xs sm:text-sm font-bold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B8913A] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleCtaPrimaryClick}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FAFA33] text-[#740202] border border-[#740202]/30 px-6 py-3 font-semibold italic text-xs sm:text-sm shadow-xs hover:bg-[#740202] hover:text-[#FAFA33] transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{activeCategory.primaryCta}</span>
                </button>


                <button
                  type="button"
                  onClick={handleCtaSecondaryClick}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#740202] text-[#FAFA33] border border-[#740202] px-6 py-3 font-semibold italic text-xs sm:text-sm shadow-xs hover:bg-[#500101] hover:text-[#FAFA33] transition-all cursor-pointer"
                >
                  <Store className="w-4 h-4 text-[#FAFA33]" />
                  <span>{activeCategory.secondaryCta}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Featured Category Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#740202]/20 bg-[#740202] shadow-[0_16px_40px_rgba(116,2,2,0.15)] aspect-[2/3] w-full max-w-lg mx-auto group">
                <Image
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={`object-contain sm:object-cover object-center transition-all duration-500 group-hover:scale-105 ${
                    isAnimating ? "opacity-40 scale-102" : "opacity-100 scale-100"
                  }`}
                />
                
                {/* Dark Gradient at Bottom for Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Category Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#740202] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 border-[#FAFA33] shadow-xl flex items-center justify-between z-10">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="whitespace-normal leading-tight text-base sm:text-lg font-semibold italic text-white"
                  >
                    {activeCategory.title} Space
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#FAFA33] flex-shrink-0 ml-2" />
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
                <div className="p-2 rounded-xl bg-[#FFFBCC] text-[#740202] flex-shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#740202] leading-tight">
                    {item.label}
                  </h4>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xs text-[#1F1F1F] font-medium mt-0.5 leading-snug"
                  >
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
