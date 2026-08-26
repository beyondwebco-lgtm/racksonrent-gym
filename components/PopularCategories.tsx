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
          className="relative max-w-5xl mx-auto px-2 sm:px-4"
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
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F7E200] flex items-center justify-center shadow-lg transition-all cursor-pointer hover:bg-[#3D0710] hover:text-[#F7E200] hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next category"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F7E200] flex items-center justify-center shadow-lg transition-all cursor-pointer hover:bg-[#3D0710] hover:text-[#F7E200] hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* 3D Coverflow Stage */}
          <div className="relative h-[440px] sm:h-[480px] w-full flex items-center justify-center overflow-hidden sm:overflow-visible">
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

              const isCentered = diff === 0;
              const translateXVal = diff * 75;
              const scaleVal = isCentered ? 1 : 0.35;
              const opacityVal = isCentered ? 1 : 0.5;
              const filterVal = isCentered ? "blur(0px)" : "blur(4px)";
              const zIndexVal = isCentered ? 30 : 10;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCardClick(diff)}
                  className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[320px] md:w-[350px] rounded-3xl border-2 border-[#6B0F1A]/15 bg-[#FFFDF5] p-4 sm:p-5 shadow-[0_10px_30px_rgba(107,15,26,0.12)] cursor-pointer select-none transition-all duration-600 ease-in-out group ${
                    isCentered
                      ? "hover:shadow-[0_20px_50px_rgba(107,15,26,0.22)] border-[#6B0F1A]"
                      : "hover:opacity-75"
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateXVal}%) scale(${scaleVal})`,
                    opacity: opacityVal,
                    filter: filterVal,
                    zIndex: zIndexVal,
                    transition:
                      "transform 600ms ease, opacity 600ms ease, filter 600ms ease, box-shadow 300ms ease",
                  }}
                >
                  <div>
                    {/* Card Image Container */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FFFDF5] border border-[#F0E2E4] mb-3 sm:mb-4 flex items-center justify-center">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 640px) 280px, 350px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {cat.badge && (
                        <span className="absolute top-3 right-3 bg-[#6B0F1A] text-[#FFF6A3] text-xs font-bold px-2.5 py-1 rounded-full shadow-md border border-[#F7E200]/40">
                          {cat.badge}
                        </span>
                      )}
                    </div>

                    <div className="px-1">
                      <h3 className="font-extrabold text-base sm:text-lg text-[#6B0F1A] leading-snug mb-1 group-hover:text-[#3D0710] transition-colors">
                        {cat.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium line-clamp-2">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 pt-3 border-t border-[#F0E2E4] px-1 flex items-center justify-between text-xs sm:text-sm font-extrabold text-[#6B0F1A] group-hover:text-[#3D0710]">
                    <span>Explore Spaces</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

