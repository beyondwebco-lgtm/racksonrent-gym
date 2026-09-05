"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 cursor-pointer min-h-[48px] min-w-[48px]"
    >
      <MessageCircle className="w-6 h-6 fill-current text-current" />
      <span className="font-extrabold text-sm hidden sm:inline-block pr-1">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
