import React from "react";
import { Users, ShieldCheck, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function TopBar() {
  return (
    <div className="bg-[#740202] text-[#FFFBCC] text-[10px] sm:text-xs border-b border-[#500101] py-2 px-4 sm:px-6 lg:px-8 font-semibold relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Side */}
        <div className="flex items-center gap-1.5 text-[#FFFBCC]">
          <Users className="w-3.5 h-3.5 text-[#FAFA33] flex-shrink-0" />
          <span className="truncate max-w-[180px] xs:max-w-none">{SITE_CONFIG.topBarTextLeft}</span>
        </div>

        {/* Center Side (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 text-white font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FAFA33] flex-shrink-0" />
          <span>{SITE_CONFIG.topBarTextCenter}</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <a
            href={SITE_CONFIG.telLink}
            className="flex items-center gap-1.5 text-[#FFFBCC] hover:text-[#FAFA33] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#FAFA33]" />
            <span>{SITE_CONFIG.phoneFormatted}</span>
          </a>

          <span className="text-[#FAFA33]/40 hidden sm:inline">•</span>

          <a
            href={SITE_CONFIG.mailtoLink}
            className="hidden sm:flex items-center gap-1.5 text-[#FFFBCC] hover:text-[#FAFA33] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#FAFA33]" />
            <span>{SITE_CONFIG.emailSupport}</span>
          </a>

          <span className="text-[#FAFA33]/40 hidden md:inline">•</span>

          <a
            href={SITE_CONFIG.mailtoContactLink}
            className="hidden md:flex items-center gap-1.5 text-[#FFFBCC] hover:text-[#FAFA33] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#FAFA33]" />
            <span>{SITE_CONFIG.emailContact}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
