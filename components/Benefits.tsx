import React from "react";
import { CheckCircle2, Dumbbell, Store } from "lucide-react";
import { BENEFITS_COMPARISON } from "@/data/benefits";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Benefits() {
  const { gymOwners, wellnessBusinesses } = BENEFITS_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Mutual Value"
          title="A Simple Win for Both Sides"
          subtitle="Discover how space subletting delivers immediate advantages to both gym owners and health entrepreneurs."
        />

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Gym Owners */}
          <div className="rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:border-[#6B0F1A]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#F0E2E4] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] text-[#6B0F1A]">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#6B0F1A]">
                  {gymOwners.title}
                </h3>
              </div>

              <div className="space-y-4">
                {gymOwners.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#1F1F1F]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wellness Businesses */}
          <div className="rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:border-[#6B0F1A]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#F0E2E4] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] text-[#6B0F1A]">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#6B0F1A]">
                  {wellnessBusinesses.title}
                </h3>
              </div>

              <div className="space-y-4">
                {wellnessBusinesses.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#1F1F1F]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
