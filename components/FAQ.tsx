"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EIGHT_FAQS } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-y border-[#F0E2E4]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="GOT QUESTIONS?"
          title={
            <>
              Frequently Asked Questions (<span className="text-[#B8913A]">FAQs</span>)
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Everything you need to know about the Racks on Rent platform and space sharing process.
            </span>
          }
        />

        {/* 8 Accessible FAQ Accordion with Smooth Grid Expansion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {EIGHT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 shadow-xs overflow-hidden ${
                  isOpen
                    ? "border-[#740202] bg-[#FFFBCC]/40 shadow-sm"
                    : "border-[#F0E2E4] bg-[#FFFDF5] hover:border-[#740202]/50 hover:bg-[#FFFBCC]/20 hover:-translate-y-0.5"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-semibold text-lg text-[#740202] hover:text-[#B8913A] focus:outline-none transition-colors cursor-pointer group min-h-[48px]"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-[#740202] text-[#FAFA33]" : "bg-[#FFFBCC] text-[#740202] group-hover:bg-[#740202] group-hover:text-[#FAFA33]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                <div
                  id={`faq-content-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="px-5 pb-6 sm:px-6 pt-2 text-[#1F1F1F] text-base leading-relaxed border-t border-[#F0E2E4] bg-[#FFFDF5] font-medium"
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
