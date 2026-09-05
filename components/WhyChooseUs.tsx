import React from "react";
import { ShieldCheck, Lock, Headphones, TrendingUp } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/benefits";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ShieldCheck,
    Lock,
    Headphones,
    TrendingUp,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="PLATFORM ADVANTAGES"
          title={
            <>
              Why Choose Racks <span className="text-[#FAFA33]">on Rent</span>?
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              We provide a transparent platform designed to simplify gym display-space discovery, rental, and direct collaboration between gym owners and growing wellness brands.
            </span>
          }
        />

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 shadow-[0_12px_35px_rgba(116,2,2,0.06)] hover:shadow-[0_20px_50px_rgba(116,2,2,0.14)] hover:border-[#740202]/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFBCC] mb-5 shadow-xs group-hover:bg-[#740202] transition-colors duration-300">
                    <IconComp className="w-8 h-8 text-[#740202] group-hover:text-[#FAFA33] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-black italic text-[#740202] mb-2.5 group-hover:text-[#B8913A] transition-colors">
                    {item.title}
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-medium"
                  >
                    {item.description}
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
