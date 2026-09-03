"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { POPULAR_CATEGORIES, CategoryItem } from "@/data/categories";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function PopularCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalItems = POPULAR_CATEGORIES.length;

  // Loop forward
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Loop backward
  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Autoplay & Hover Control (4.5 Seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Mobile Touch & Swipe Gestures (40px Threshold)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffDistance = touchStartX - touchEndX;

    if (diffDistance > 40) {
      nextSlide(); // Swipe Left -> Next
    } else if (diffDistance < -40) {
      prevSlide(); // Swipe Right -> Previous
    }
    setTouchStartX(null);
  };

  // Interactive Features & Smooth Scroll
  const handleCardClick = (diff: number) => {
    if (diff === 0) {
      // Clicking active card scrolls to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (diff === 1) {
      nextSlide();
    } else if (diff === -1) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] overflow-hidden" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Product Placement Categories"
          title="Popular Categories"
          subtitle="Explore high-demand product and service categories featured inside gyms across India."
        />

        {/* 3D Coverflow Container */}
        <div
          className="relative max-w-6xl mx-auto px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous category"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F7E200] flex items-center justify-center shadow-xl transition-all cursor-pointer hover:bg-[#3D0710] hover:text-[#F7E200] hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next category"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F7E200] flex items-center justify-center shadow-xl transition-all cursor-pointer hover:bg-[#3D0710] hover:text-[#F7E200] hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* 3D Coverflow Stage */}
          <div className="relative h-[520px] sm:h-[600px] md:h-[640px] w-full flex items-center justify-center overflow-hidden sm:overflow-visible">
            {POPULAR_CATEGORIES.map((cat: CategoryItem, index: number) => {
              let diff = index - activeIndex;

              // Handle circular wrapping for continuous loop
              if (diff > totalItems / 2) {
                diff -= totalItems;
              } else if (diff < -totalItems / 2) {
                diff += totalItems;
              }

              // Display only Active (0), Previous (-1), and Next (1) cards
              if (Math.abs(diff) > 1) {
                return null;
              }

              const isMaroon = index % 2 === 0;
              const isCentered = diff === 0;
              const translateXVal = diff * 78;
              const scaleVal = isCentered ? 1 : 0.38;
              const opacityVal = isCentered ? 1 : 0.5;
              const filterVal = isCentered ? "blur(0px)" : "blur(4px)";
              const zIndexVal = isCentered ? 30 : 10;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCardClick(diff)}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateXVal}%) scale(${scaleVal})`,
                    opacity: opacityVal,
                    filter: filterVal,
                    zIndex: zIndexVal,
                    transition:
                      "transform 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 600ms ease, filter 600ms ease",
                  }}
                  className={`group absolute top-1/2 left-1/2 w-[88vw] max-w-[340px] sm:max-w-[420px] md:max-w-[460px] aspect-[4/5] cursor-pointer rounded-3xl shadow-2xl overflow-hidden border-2 transition-all duration-300 bg-white ${
                    isMaroon
                      ? "border-[#6B0F1A] shadow-[#6B0F1A]/20"
                      : "border-[#F7E200] shadow-[#F7E200]/20"
                  }`}
                >
                  {/* Full Image Container - Perfectly Fitted & Uncropped */}
                  <div className="relative w-full h-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 420px, 460px"
                      loading="lazy"
                      className="object-contain p-1.5 sm:p-2 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Badge */}
                  {cat.badge && (
                    <span className="absolute top-3.5 right-3.5 z-20 bg-[#6B0F1A]/95 backdrop-blur-md text-[#FFF6A3] text-xs font-black px-3 py-1 rounded-full shadow-md border border-[#F7E200]/40">
                      {cat.badge}
                    </span>
                  )}

                  {/* Clean Translucent Bottom Overlay Bar for Title & Explore Spaces */}
                  <div className="absolute inset-x-3.5 bottom-3.5 z-20">
                    <div
                      className={`backdrop-blur-md border shadow-xl rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center gap-2 transition-all duration-300 ${
                        isMaroon
                          ? "bg-[#6B0F1A]/95 text-white border-white/20"
                          : "bg-[#F7E200]/95 text-[#6B0F1A] border-[#6B0F1A]/30"
                      }`}
                    >
                      {/* Main Title (Top) */}
                      <h3 className="font-black text-sm sm:text-base leading-tight">
                        {cat.name}
                      </h3>

                      {/* Explore Spaces Action (Bottom) */}
                      <div
                        className={`w-full py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 shadow-xs flex items-center justify-center gap-1.5 ${
                          isMaroon
                            ? "bg-[#F7E200] text-[#6B0F1A] hover:bg-white"
                            : "bg-[#6B0F1A] text-[#FFF6A3] hover:bg-[#3D0710]"
                        }`}
                      >
                        <span>Explore Spaces</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
            {POPULAR_CATEGORIES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 bg-[#6B0F1A]"
                    : "w-2.5 bg-[#6B0F1A]/25 hover:bg-[#6B0F1A]/50"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

