"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { POPULAR_CATEGORIES, CategoryItem } from "@/data/categories";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function PopularCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const totalItems = POPULAR_CATEGORIES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Autoplay functionality (every 4.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Swipe support for touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 40) {
        nextSlide();
      } else if (distance < -40) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setIsPaused(false);
  };

  const handleCategoryClick = (index: number) => {
    if (index === activeIndex) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      className="py-16 sm:py-24 bg-[#FFFDF5] overflow-hidden"
      id="categories"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="POPULAR CATEGORIES"
          title={
            <>
              Popular <span className="text-[#B8913A]">Categories</span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Explore high-demand product and service categories featured inside gyms across India.
            </span>
          }
        />

        {/* Center-Focused Carousel Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
          
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous category"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#740202] text-[#FAFA33] border-2 border-[#FAFA33] flex items-center justify-center shadow-xl transition-all hover:bg-[#500101] hover:text-[#FAFA33] hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next category"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#740202] text-[#FAFA33] border-2 border-[#FAFA33] flex items-center justify-center shadow-xl transition-all hover:bg-[#500101] hover:text-[#FAFA33] hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Carousel Stage */}
          <div
            className="relative h-[520px] sm:h-[560px] flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {POPULAR_CATEGORIES.map((cat: CategoryItem, index: number) => {
              // Calculate relative position with infinite loop wrapping
              let diff = index - activeIndex;
              if (diff > totalItems / 2) diff -= totalItems;
              if (diff < -totalItems / 2) diff += totalItems;

              const isActive = diff === 0;
              const isPrev = diff === -1;
              const isNext = diff === 1;

              // Hide items further away than prev/next for clean visual focus
              if (!isActive && !isPrev && !isNext) {
                return null;
              }

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(index)}
                  style={{
                    transform: isActive
                      ? "translateX(0%) scale(1)"
                      : isPrev
                      ? "translateX(-62%) scale(0.85)"
                      : "translateX(62%) scale(0.85)",
                    opacity: isActive ? 1 : 0.4,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                    zIndex: isActive ? 10 : 1,
                    transition:
                      "transform 600ms ease, opacity 600ms ease, filter 600ms ease",
                  }}
                  className={`absolute w-[260px] xs:w-[290px] sm:w-[360px] cursor-pointer select-none rounded-3xl border-2 bg-[#FFFDF5] p-4 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden group ${
                    isActive
                      ? "border-[#740202] shadow-[0_20px_50px_rgba(116,2,2,0.22)]"
                      : "border-[#740202]/20 pointer-events-auto hover:opacity-75"
                  }`}
                >
                  <div>
                    {/* Badge */}
                    {cat.badge && (
                      <span className="inline-block rounded-full bg-[#FAFA33] px-3.5 py-1 text-sm font-bold text-[#740202] border border-[#F0E2E4] mb-3">
                        {cat.badge}
                      </span>
                    )}

                    {/* Image Container */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F8F8FA] border border-[#F0E2E4] mb-4 flex items-center justify-center">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 640px) 290px, 360px"
                        priority={isActive}
                        loading={isActive ? "eager" : "lazy"}
                        className="object-contain sm:object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-1">
                      <h3
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="font-semibold italic text-base sm:text-lg text-[#740202] group-hover:text-[#B8913A] transition-colors duration-300 leading-relaxed mb-2 whitespace-normal break-words"
                      >
                        {cat.name}
                      </h3>

                      <p
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-medium line-clamp-2"
                      >
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-5 pt-3 border-t border-[#F0E2E4] px-1 flex items-center justify-between text-sm sm:text-base font-bold text-[#740202] group-hover:text-[#B8913A] transition-colors duration-300">
                    <span>Explore Spaces</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {POPULAR_CATEGORIES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === activeIndex
                    ? "w-8 h-2.5 bg-[#740202]"
                    : "w-2.5 h-2.5 bg-[#F0E2E4] hover:bg-[#740202]/50"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

