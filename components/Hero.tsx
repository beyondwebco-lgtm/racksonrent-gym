"use client";

import React, { useState } from "react";

import { Store, ShoppingBag, TrendingUp, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Hero({ onSelectRole }: HeroProps) {
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });

  const handleRoleClick = (role: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMoveBtn1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn1Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn1 = () => {
    setBtn1Pos({ x: 0, y: 0 });
  };

  const handleMouseMoveBtn2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn2Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn2 = () => {
    setBtn2Pos({ x: 0, y: 0 });
  };

  const benefitItems = [
    { text: "Extra Space. Extra Income.", icon: <TrendingUp className="w-4 h-4 text-[#740202]" /> },
    { text: "Connect with Verified Brands.", icon: <ShieldCheck className="w-4 h-4 text-[#740202]" /> },
    { text: "Safe, Secure & Trusted Platform.", icon: <Lock className="w-4 h-4 text-[#740202]" /> },
    { text: "Hassle-Free & Transparent.", icon: <CheckCircle2 className="w-4 h-4 text-[#740202]" /> },
  ];

  return (
    <section className="relative pt-8 pb-12 lg:pt-16 lg:pb-20 bg-[radial-gradient(circle_at_80%_20%,rgba(116,2,2,0.08),transparent_40%),linear-gradient(180deg,#fffdf5_0%,#fffbcc_25%,#fffdf5_100%)] border-b border-[#F0E2E4]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#FAFA33] px-4 py-1.5 text-xs sm:text-sm font-bold text-[#740202] border border-[#740202]/20">
                For Gym Owners & Wellness Brands
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#740202] leading-[1.15] word-break-wrap">
              Turn Unused Gym Space{" "}
              <span className="text-[#FAFA33]">
                Into Income.
              </span>
            </h1>

            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed max-w-2xl"
            >
              Racks on Rent connects gym owners with nutrition, fitness, and wellness businesses through simple rack and display-space opportunities.
            </p>

            {/* 4 Small Benefit Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefitItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-[#FFFDF5] p-2.5 rounded-xl border border-[#F0E2E4] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#FFFBCC] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-sans text-xs xl:text-sm font-bold italic text-[#740202] leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Animated 2 Primary CTAs */}
            <div className="relative pt-4">
              <div className="w-16 h-0.5 bg-[#740202]/30 rounded-full animate-accent-line mb-3" />

              <div className="absolute inset-0 -top-1 bg-[radial-gradient(ellipse_at_center,rgba(250,250,51,0.30),transparent_70%)] pointer-events-none rounded-3xl blur-md animate-cta-pulse-group" />

              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4 z-10">
                
                {/* Button 1: I Own a Gym (List Your Space) */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("gym-owner")}
                  onMouseMove={handleMouseMoveBtn1}
                  onMouseLeave={handleMouseLeaveBtn1}
                  className="animate-cta-btn-1 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#FAFA33] border-2 border-[#740202]/20 px-6 py-3.5 text-[#740202] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(116,2,2,0.22)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-base font-black">
                      <Store className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>I Own a Gym</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-80 mt-0.5">
                      List Your Space
                    </span>
                  </div>
                </button>

                {/* Button 2: I Own a Wellness Brand (Find Space to Display) */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("wellness")}
                  onMouseMove={handleMouseMoveBtn2}
                  onMouseLeave={handleMouseLeaveBtn2}
                  className="animate-cta-btn-2 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-[#740202] bg-[#740202] px-6 py-3.5 text-[#FAFA33] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(116,2,2,0.35)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[#FAFA33]/30 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-base font-black">
                      <ShoppingBag className="w-5 h-5 text-[#FAFA33] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>I Own a Wellness Brand</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FAFA33] mt-0.5">
                      Find Space to Display
                    </span>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column (High Quality Gym Showcase Video - Horizontal Aspect Ratio) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="animate-hero-video-entrance rounded-[2rem] border-2 border-[#F0E2E4] bg-[#FFFDF5] p-2.5 sm:p-3 shadow-[0_24px_70px_rgba(116,2,2,0.12)] relative overflow-hidden transition-all duration-350 hover:scale-[1.015] hover:shadow-[0_28px_80px_rgba(116,2,2,0.20)] hover:border-[#FAFA33]/60 group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#740202] flex items-center justify-center">
                  <video
                    src="/videos/hero-gym.mp4"
                    poster="/spaces/08_Healthy_Snacks_Foods.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#740202] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border-2 border-[#FAFA33] shadow-xl flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FAFA33] animate-ping" />
                    <span>Extra Space. Extra Income.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


