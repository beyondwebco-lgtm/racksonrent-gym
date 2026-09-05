"use client";

import React, { useState } from "react";
import { Search, MapPin, Layers, Maximize2, Tag } from "lucide-react";
import { COMPACT_SPACE_TYPES, RACK_SIZES } from "@/data/spaceTypes";
import { POPULAR_CATEGORIES } from "@/data/categories";

interface SpaceSearchProps {
  onSearch?: (searchParams: {
    location: string;
    spaceType: string;
    rackSize: string;
    category: string;
  }) => void;
}

export default function SpaceSearch({ onSearch }: SpaceSearchProps) {
  const [location, setLocation] = useState("");
  const [spaceType, setSpaceType] = useState("Product Rack");
  const [rackSize, setRackSize] = useState("Small (Up to 3x2 ft)");
  const [category, setCategory] = useState("Fruit Bowls & Healthy Salads");


  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        location,
        spaceType,
        rackSize,
        category,
      });
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 bg-[#FFFDF5] relative -mt-6 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-[#FFFDF5] rounded-3xl border-2 border-[#740202] p-4 sm:p-5 shadow-[0_16px_40px_rgba(116,2,2,0.12)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            
            {/* Location Input */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-location">
                <MapPin className="w-3.5 h-3.5 text-[#740202]" />
                <span>Location</span>
              </label>
              <input
                id="search-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Hyderabad"
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#740202] placeholder:text-[#740202]/50 text-xs sm:text-sm outline-none transition focus:border-[#740202] focus:ring-2 focus:ring-[#FFFBCC] font-medium min-h-[44px] h-[44px]"
              />
            </div>

            {/* Space Type Select */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-space-type">
                <Layers className="w-3.5 h-3.5 text-[#740202]" />
                <span>Space Type</span>
              </label>
              <select
                id="search-space-type"
                value={spaceType}
                onChange={(e) => setSpaceType(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#B8913A] font-semibold italic text-xs sm:text-sm outline-none transition focus:border-[#740202] focus:ring-2 focus:ring-[#FFFBCC] min-h-[44px] h-[44px]"
              >
                {COMPACT_SPACE_TYPES.map((st) => (
                  <option
                    key={st.id}
                    value={st.name}
                    className="text-[#B8913A] font-semibold italic"
                  >
                    {st.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Space Size Select */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-rack-size">
                <Maximize2 className="w-3.5 h-3.5 text-[#740202]" />
                <span>Space Size</span>
              </label>
              <select
                id="search-rack-size"
                value={rackSize}
                onChange={(e) => setRackSize(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#B8913A] font-semibold italic text-xs sm:text-sm outline-none transition focus:border-[#740202] focus:ring-2 focus:ring-[#FFFBCC] min-h-[44px] h-[44px]"
              >
                {RACK_SIZES.map((rs) => (
                  <option key={rs.id} value={rs.name} className="text-[#B8913A] font-semibold italic">
                    {rs.name} ({rs.dimensions})
                  </option>
                ))}
              </select>
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1 flex items-center gap-1" htmlFor="search-category">
                <Tag className="w-3.5 h-3.5 text-[#740202]" />
                <span>Category</span>
              </label>
              <select
                id="search-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2.5 text-[#740202] text-xs sm:text-sm outline-none transition focus:border-[#740202] focus:ring-2 focus:ring-[#FFFBCC] font-medium min-h-[44px] h-[44px]"
              >
                {POPULAR_CATEGORIES.slice(0, 9).map((cat) => (
                  <option key={cat.id} value={cat.name} className="text-[#740202]">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button (Single Line on Desktop) */}
            <div className="col-span-1">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FAFA33] text-[#740202] border border-[#740202]/30 px-4 py-2.5 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-[#740202] hover:text-[#FAFA33] transition-all cursor-pointer min-h-[44px] h-[44px]"
              >
                <Search className="w-4 h-4" />
                <span>Search Spaces</span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

