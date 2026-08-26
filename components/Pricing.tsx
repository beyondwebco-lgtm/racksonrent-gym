"use client";

import React from "react";
import { CheckCircle2, Dumbbell, Store } from "lucide-react";
import { PRICING_TIERS, PricingTier } from "@/data/pricing";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface PricingProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Pricing({ onSelectRole }: PricingProps) {
  const handlePricingClick = (roleType: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(roleType);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Transparent Pricing"
          title="Simple & Transparent Options"
          subtitle="No hidden commissions. Direct, transparent terms tailored for gym owners and wellness brands."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier: PricingTier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border-2 p-8 flex flex-col justify-between transition-all relative ${
                tier.highlighted
                  ? "border-[#6B0F1A] bg-[#FFF6A3]/20 shadow-[0_16px_40px_rgba(107,15,26,0.12)]"
                  : "border-[#F0E2E4] bg-[#FFFDF5] shadow-[0_12px_35px_rgba(107,15,26,0.06)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B0F1A] text-[#FFF6A3] text-xs font-black px-4 py-1 rounded-full border border-[#F7E200]">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#6B0F1A]">
                      {tier.targetRole}
                    </span>
                    <h3 className="text-2xl font-black text-[#6B0F1A] mt-1">
                      {tier.title}
                    </h3>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FFF6A3] text-[#6B0F1A]">
                    {tier.roleType === "gym-owner" ? <Dumbbell className="w-6 h-6" /> : <Store className="w-6 h-6" />}
                  </div>
                </div>

                <div className="my-6 pb-6 border-b border-[#F0E2E4]">
                  <span className="text-4xl font-black text-[#6B0F1A]">
                    {tier.priceDisplay}
                  </span>
                  <span className="text-sm font-bold text-[#5F5F5F] ml-2">
                    / {tier.period}
                  </span>
                  <p className="text-xs text-[#5F5F5F] mt-2 font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0" />
                      <span className="text-sm font-extrabold text-[#1F1F1F]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePricingClick(tier.roleType)}
                className={`w-full py-4 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                  tier.highlighted
                    ? "bg-[#F7E200] text-[#3D0710] border border-[#6B0F1A]/20 hover:bg-[#3D0710] hover:text-[#F7E200]"
                    : "bg-[#6B0F1A] text-[#FFF6A3] hover:bg-[#3D0710] hover:text-[#F7E200]"
                }`}
              >
                {tier.ctaLabel}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
