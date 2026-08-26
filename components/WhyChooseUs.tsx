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
        
        {/* Section Heading */}
        <SectionHeader
          badge="Platform Advantages"
          title="Why Choose Racks on Rent?"
          subtitle="We provide a transparent, dedicated platform designed to simplify fitness space subletting."
        />

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:shadow-[0_20px_50px_rgba(107,15,26,0.14)] hover:border-[#6B0F1A]/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF6A3] mb-5 shadow-xs group-hover:bg-[#6B0F1A] transition-colors duration-300">
                    <IconComp className="w-8 h-8 text-[#6B0F1A] group-hover:text-[#FFF6A3] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-black text-[#6B0F1A] mb-2.5 group-hover:text-[#3D0710] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed font-medium">
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
