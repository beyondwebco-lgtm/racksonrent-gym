import React from "react";
import { Layers, Grid, Store, Coffee, Gift, Box } from "lucide-react";
import { COMPACT_SPACE_TYPES } from "@/data/spaceTypes";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function SpaceTypes() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-6 h-6 text-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors" />,
    Grid: <Grid className="w-6 h-6 text-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors" />,
    Store: <Store className="w-6 h-6 text-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors" />,
    Coffee: <Coffee className="w-6 h-6 text-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors" />,
    Gift: <Gift className="w-6 h-6 text-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors" />,
    Box: <Box className="w-6 h-6 text-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFF6A3]/30 border-y border-[#F0E2E4]" id="space-types">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Available Formats"
          title="What Kind of Space Can Be Offered?"
          subtitle="Explore popular gym space options that suit display racks, shelves, counters, and kiosks."
        />

        {/* Compact Grid with 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {COMPACT_SPACE_TYPES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-6 shadow-[0_12px_35px_rgba(107,15,26,0.06)] hover:shadow-[0_20px_50px_rgba(107,15,26,0.14)] transition-all hover:-translate-y-1 hover:border-[#6B0F1A]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] text-[#6B0F1A] group-hover:bg-[#6B0F1A] transition-colors mb-4">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="font-extrabold text-lg text-[#6B0F1A] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
