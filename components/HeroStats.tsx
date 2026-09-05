"use client";

import React from "react";
import { Layers, Store, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { HERO_STATS } from "@/data/stats";

export default function HeroStats() {
  const iconMap: Record<string, React.ReactNode> = {
    spaces: <Layers className="w-6 h-6 text-[#FAFA33] group-hover:scale-110 transition-transform duration-300" />,
    brands: <Store className="w-6 h-6 text-[#FAFA33] group-hover:scale-110 transition-transform duration-300" />,
    earnings: <TrendingUp className="w-6 h-6 text-[#FAFA33] group-hover:scale-110 transition-transform duration-300" />,
  };

  return (
    <div className="bg-[#740202] text-white py-6 border-y border-[#500101] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-xs sm:text-sm font-extrabold text-[#FAFA33] uppercase tracking-widest">
            Extra Space. Extra Opportunity.
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#500101]/60">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.id}
              className="pt-4 sm:pt-0 flex flex-col items-center justify-center space-y-1 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#500101]/40 group cursor-default"
            >
              <div className="p-2.5 rounded-2xl bg-[#500101]/50 mb-1 group-hover:bg-[#500101] transition-colors">
                {iconMap[stat.id] || <Layers className="w-6 h-6 text-[#FAFA33]" />}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-[#FAFA33] tracking-tight">
                <AnimatedCounter
                  targetNumber={stat.targetNumber}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  durationMs={1200}
                />
              </span>
              <span className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

