import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-[#6B0F1A] bg-[#3D0710] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#6B0F1A]/60">
          
          {/* Brand Logo & Horizontal Text Lockup */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 group focus:outline-none"
            aria-label="Racks on Rent Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#F7E200]/60 shadow-md transition-transform group-hover:scale-105">
              <Image
                src="/images/navbar-logo.jpeg"
                alt="Racks on Rent Logo Icon"
                fill
                sizes="(max-width: 640px) 48px, 56px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <div className="flex items-baseline font-black tracking-tight leading-none text-2xl sm:text-3xl">
                <span className="text-white font-extrabold italic">Racks</span>
                <span className="text-[#F7E200] font-serif text-lg sm:text-xl mx-0.5 font-bold italic lowercase">on</span>
                <span className="text-[#F7E200] font-extrabold italic">Rent</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider leading-none">
                <span className="h-[1.5px] w-3 bg-[#F7E200] inline-block" />
                <span className="text-[#FFF6A3]">SUBLET SPACE.</span>
                <span className="text-[#F7E200]">SHARE SUCCESS.</span>
                <span className="h-[1.5px] w-3 bg-[#F7E200] inline-block" />
              </div>
            </div>
          </Link>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#FFF6A3] hover:text-[#F7E200] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F7E200] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F7E200]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-[#6B0F1A]">•</span>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F7E200] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#F7E200] fill-current" />
              <span>WhatsApp</span>
            </a>

            <span className="text-[#6B0F1A]">•</span>

            <a
              href={SITE_CONFIG.supportMailtoLink}
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F7E200] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F7E200]" />
              <span>{SITE_CONFIG.supportEmail}</span>
            </a>

            <span className="text-[#6B0F1A]">•</span>

            <a
              href={SITE_CONFIG.contactMailtoLink}
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#F7E200] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F7E200]" />
              <span>{SITE_CONFIG.contactEmail}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-[#FFF6A3]/80 font-medium">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
