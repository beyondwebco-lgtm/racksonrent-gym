"use client";

import React, { useState } from "react";
import { Sparkles, Copy, Check, Sliders, Edit3, RefreshCw } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function TypographySampler() {
  // Font settings state
  const [fontSize, setFontSize] = useState<string>("text-sm");
  const [fontWeight, setFontWeight] = useState<string>("font-normal");
  const [fontStyle, setFontStyle] = useState<"normal" | "italic">("normal");
  const [textColor, setTextColor] = useState<string>("text-[#1F1F1F]");
  const [lineHeight, setLineHeight] = useState<string>("leading-relaxed");
  const [letterSpacing, setLetterSpacing] = useState<string>("tracking-normal");
  const [contentType, setContentType] = useState<"overview" | "hero" | "benefits" | "custom">("overview");
  const [customText, setCustomText] = useState<string>(
    "Give your handcrafted clothing and designer apparel a physical home inside prestigious retail boutiques. Racks on Rent connects creative fashion entrepreneurs directly with store owners for flexible display space sharing."
  );
  const [copied, setCopied] = useState<boolean>(false);

  // Preset options
  const fontSizes = [
    { label: "12px", value: "text-xs", desc: "Small Label" },
    { label: "13px", value: "text-[13px]", desc: "Compact Body" },
    { label: "14px", value: "text-sm", desc: "Standard Body" },
    { label: "15px", value: "text-[15px]", desc: "Editorial Body" },
    { label: "16px", value: "text-base", desc: "Base Paragraph" },
    { label: "18px", value: "text-lg", desc: "Lead Paragraph" },
    { label: "22px", value: "text-xl", desc: "Subheading" },
    { label: "28px", value: "text-2xl", desc: "Section Header" },
  ];

  const fontWeights = [
    { label: "Regular", value: "font-normal", numeric: "400" },
    { label: "Medium", value: "font-medium", numeric: "500" },
    { label: "SemiBold", value: "font-semibold", numeric: "600" },
    { label: "Bold", value: "font-bold", numeric: "700" },
    { label: "ExtraBold", value: "font-extrabold", numeric: "800" },
    { label: "Black", value: "font-black", numeric: "900" },
  ];

  const textColors = [
    { label: "Dark Text", value: "text-[#1F1F1F]", hex: "#1F1F1F", bg: "bg-[#1F1F1F]" },
    { label: "Primary Maroon", value: "text-[#740202]", hex: "#740202", bg: "bg-[#740202]" },
    { label: "Dark Gold", value: "text-[#B8913A]", hex: "#B8913A", bg: "bg-[#B8913A]" },
    { label: "Muted Text", value: "text-[#5F5F5F]", hex: "#5F5F5F", bg: "bg-[#5F5F5F]" },
  ];

  const lineHeights = [
    { label: "Compact", value: "leading-snug" },
    { label: "Normal", value: "leading-normal" },
    { label: "Relaxed", value: "leading-relaxed" },
    { label: "Spacious", value: "leading-loose" },
  ];

  const letterSpacings = [
    { label: "Tight", value: "tracking-tight" },
    { label: "Normal", value: "tracking-normal" },
    { label: "Wide", value: "tracking-wide" },
    { label: "Widest", value: "tracking-widest" },
  ];

  const activeColorHex = textColors.find((c) => c.value === textColor)?.hex || "#1F1F1F";

  const handleCopySnippet = () => {
    const snippet = `font-family: 'Playfair Display', serif;\nfont-size: ${fontSize};\nfont-weight: ${fontWeight};\nfont-style: ${fontStyle};\ncolor: ${activeColorHex};\nline-height: ${lineHeight};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t-4 border-[#FAFA33] relative" id="typography-sampler">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="CLASSICAL LUXURY SERIF PREVIEW"
          title={
            <>
              Playfair Display <span className="text-[#B8913A]">Typography</span>
            </>
          }
          subtitle="High-contrast transitional serif with classical luxury flair. Customize the options below to preview live font sizes, weights, styles, and colors in a single interactive display box."
        />

        {/* The Main Container Card */}
        <div className="rounded-3xl border-2 border-[#740202] bg-[#FFFDF5] shadow-[0_20px_50px_rgba(116,2,2,0.12)] overflow-hidden">
          
          {/* Controls Bar Header */}
          <div className="bg-[#FFFBCC]/60 border-b-2 border-[#740202]/20 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#740202]" />
                <span className="text-xs sm:text-sm font-black text-[#740202] uppercase tracking-wider">
                  Interactive Font Controls
                </span>
              </div>

              {/* Quick Font Info Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFA33] text-[#740202] text-xs font-black border border-[#740202]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Font Family: 'Playfair Display', serif</span>
              </div>
            </div>

            {/* Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* 1. Font Size Control */}
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5">
                  Font Size
                </label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2 text-xs sm:text-sm font-bold text-[#740202] outline-none focus:border-[#740202] focus:ring-2 focus:ring-[#FFFBCC] cursor-pointer"
                >
                  {fontSizes.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label} — {s.desc}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Font Weight Control */}
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5">
                  Font Weight
                </label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2 text-xs sm:text-sm font-bold text-[#740202] outline-none focus:border-[#740202] focus:ring-2 focus:ring-[#FFFBCC] cursor-pointer"
                >
                  {fontWeights.map((w) => (
                    <option key={w.value} value={w.value}>
                      {w.label} ({w.numeric})
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Font Style & Spacing */}
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5">
                  Style (Italic / Normal)
                </label>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setFontStyle("normal")}
                    className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      fontStyle === "normal"
                        ? "bg-[#740202] text-[#FAFA33]"
                        : "bg-white text-[#740202] border border-[#F0E2E4] hover:bg-[#FFFBCC]"
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontStyle("italic")}
                    className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold italic transition-all cursor-pointer ${
                      fontStyle === "italic"
                        ? "bg-[#740202] text-[#FAFA33]"
                        : "bg-white text-[#740202] border border-[#F0E2E4] hover:bg-[#FFFBCC]"
                    }`}
                  >
                    Italic
                  </button>
                </div>
              </div>

              {/* 4. Text Color Control */}
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5">
                  Color Token
                </label>
                <select
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full rounded-xl border border-[#F0E2E4] bg-white px-3 py-2 text-xs sm:text-sm font-bold text-[#740202] outline-none focus:border-[#740202] focus:ring-2 focus:ring-[#FFFBCC] cursor-pointer"
                >
                  {textColors.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label} ({c.hex})
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Content Preset Selector Bar */}
            <div className="mt-4 pt-4 border-t border-[#740202]/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-extrabold text-[#740202] uppercase tracking-wider mr-1">
                  Sample Content:
                </span>
                {[
                  { id: "overview", label: "Boutique Story" },
                  { id: "hero", label: "Hero Statement" },
                  { id: "benefits", label: "Display Perks" },
                  { id: "custom", label: "Custom Text ✍️" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setContentType(tab.id as any)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      contentType === tab.id
                        ? "bg-[#740202] text-[#FAFA33] shadow-xs"
                        : "bg-white text-[#740202] border border-[#740202]/30 hover:bg-[#FFFBCC]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Line Height Selector */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#740202]">
                <span className="opacity-80">Line Height:</span>
                {lineHeights.map((lh) => (
                  <button
                    key={lh.value}
                    type="button"
                    onClick={() => setLineHeight(lh.value)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      lineHeight === lh.value
                        ? "bg-[#740202] text-[#FAFA33]"
                        : "bg-white border border-[#F0E2E4] text-[#740202] hover:bg-[#FFFBCC]"
                    }`}
                  >
                    {lh.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* THE SINGLE LIVE PREVIEW BOX */}
          <div className="p-6 sm:p-10 bg-[#FFFDF5] min-h-[260px] flex flex-col justify-center relative">
            
            {/* Corner Decorative Motif */}
            <div className="absolute top-4 right-5 text-[11px] font-bold uppercase tracking-widest text-[#B8913A] select-none opacity-80">
              ✦ Classical Luxury Serif
            </div>

            {/* Content Display based on selected preset */}
            {contentType === "overview" && (
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className={`${fontSize} ${fontWeight} ${fontStyle === "italic" ? "italic" : "not-italic"} ${textColor} ${lineHeight} ${letterSpacing} transition-all`}
              >
                Racks on Rent seamlessly unites independent fashion labels, jewellery designers, and artisanal creators with premier retail store owners. Display your seasonal collections inside established boutiques and engage active shoppers where luxury meets everyday elegance.
              </p>
            )}

            {contentType === "hero" && (
              <div className="space-y-3">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className={`text-2xl sm:text-3xl lg:text-4xl ${fontWeight} ${fontStyle === "italic" ? "italic" : "not-italic"} ${textColor} leading-tight transition-all`}
                >
                  Give Your Fashion Products a Place Inside a Busy Store.
                </h3>
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className={`${fontSize} ${fontWeight} ${fontStyle === "italic" ? "italic" : "not-italic"} ${textColor} ${lineHeight} opacity-90 transition-all`}
                >
                  Rent display space inside trusted boutiques, fashion studios, and high-footfall retail stores across the city.
                </p>
              </div>
            )}

            {contentType === "benefits" && (
              <div className="space-y-3">
                {[
                  "Top checkout counter impulse purchases & maximum footfall visibility.",
                  "Direct touch-and-feel engagement for active retail shoppers.",
                  "High profit margin per square foot with flexible weekly rentals.",
                  "Prestigious storefront presence in leading fashion neighborhoods.",
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-baseline gap-2.5">
                    <span className="text-[#B8913A] font-black text-xs">◆</span>
                    <p
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className={`${fontSize} ${fontWeight} ${fontStyle === "italic" ? "italic" : "not-italic"} ${textColor} ${lineHeight} transition-all`}
                    >
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {contentType === "custom" && (
              <div className="space-y-3">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#740202]">
                  Type your custom text below (updates in real time):
                </label>
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  rows={4}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className={`w-full rounded-2xl border-2 border-[#740202]/30 bg-white p-4 ${fontSize} ${fontWeight} ${fontStyle === "italic" ? "italic" : "not-italic"} ${textColor} ${lineHeight} outline-none focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] shadow-inner transition-all`}
                />
              </div>
            )}

          </div>

          {/* Footer Bar with Copyable CSS & Settings */}
          <div className="bg-[#FFFBCC]/40 border-t border-[#740202]/20 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 text-[#740202] font-semibold">
              <span className="font-bold">Active Configuration:</span>
              <code className="bg-white px-2 py-0.5 rounded-md border border-[#740202]/20 text-[#740202] font-mono text-[11px]">
                'Playfair Display', serif
              </code>
              <code className="bg-white px-2 py-0.5 rounded-md border border-[#740202]/20 text-[#740202] font-mono text-[11px]">
                {fontSize}
              </code>
              <code className="bg-white px-2 py-0.5 rounded-md border border-[#740202]/20 text-[#740202] font-mono text-[11px]">
                {fontWeight}
              </code>
              <code className="bg-white px-2 py-0.5 rounded-md border border-[#740202]/20 text-[#740202] font-mono text-[11px]">
                {fontStyle}
              </code>
            </div>

            <button
              type="button"
              onClick={handleCopySnippet}
              className="inline-flex items-center gap-2 rounded-xl bg-[#740202] hover:bg-[#500101] text-[#FAFA33] px-4 py-2 font-extrabold text-xs shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "CSS Snippet Copied!" : "Copy CSS Style"}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
