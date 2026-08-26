import React from "react";
import { PlusCircle, Search, Handshake, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "List Your Unused Space",
      description: "Add rack details and available space information.",
      icon: PlusCircle,
    },
    {
      number: 2,
      title: "Brands Discover You",
      description: "Relevant wellness brands find your available space.",
      icon: Search,
    },
    {
      number: 3,
      title: "Connect & Approve",
      description: "Review requests and approve suitable brands.",
      icon: Handshake,
    },
    {
      number: 4,
      title: "Earn Regular Income",
      description: "Build partnerships and generate additional monthly income.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF6A3]/30 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="4-Step Process"
          title="How It Works"
          subtitle="Four simple steps to connect gym owners with nutrition, health, and wellness providers."
        />

        {/* 4 Step Cards with Desktop Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col group">
                <div className="rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-6 shadow-[0_12px_35px_rgba(107,15,26,0.06)] flex flex-col items-center text-center relative group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-[#6B0F1A]/50 group-hover:shadow-[0_20px_45px_rgba(107,15,26,0.12)] transition-all duration-300 h-full">
                  
                  {/* Step Number Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B0F1A] font-black text-[#FFF6A3] mb-5 shadow-sm text-lg border-2 border-[#F7E200] group-hover:scale-110 group-hover:bg-[#F7E200] group-hover:text-[#3D0710] group-hover:border-[#6B0F1A] transition-all duration-300">
                    {step.number}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] mb-4 text-[#6B0F1A] group-hover:bg-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-[#6B0F1A] mb-2 group-hover:text-[#3D0710] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Desktop Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-[#F7E200] text-[#3D0710] shadow-sm border border-[#6B0F1A]/20 group-hover:translate-x-1.5 group-hover:bg-[#3D0710] group-hover:text-[#F7E200] transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
