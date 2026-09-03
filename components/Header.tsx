"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Dumbbell } from "lucide-react";
import { NAV_LINKS } from "@/data/config";

interface HeaderProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Header({ onSelectRole }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMenu();
    if (href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/")) {
      const targetId = href.replace(/^\/#?/, "");
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleListYourRack = () => {
    closeMenu();
    if (onSelectRole) {
      onSelectRole("gym-owner");
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b border-[#F0E2E4] bg-[#FFFDF5]/95 backdrop-blur-md ${
        scrolled ? "py-1.5 shadow-md bg-[#FFFDF5]/98" : "py-2 sm:py-2.5 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Far Left: Square Rack-Icon Logo + Horizontal Text Lockup */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group focus:outline-none"
          aria-label="Racks on Rent Home"
        >
          {/* Square Rack-Icon Logo */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#6B0F1A]/20 shadow-2xs group-hover:scale-[1.03] transition-transform">
            <Image
              src="/images/navbar-logo.jpeg"
              alt="Racks on Rent Logo Icon"
              fill
              sizes="(max-width: 640px) 44px, (max-width: 1024px) 52px, 56px"
              priority
              className="object-contain"
            />
          </div>

          {/* Separate Horizontal Logo Lockup */}
          <div className="flex flex-col justify-center min-w-[160px] lg:min-w-[200px]">
            {/* Main Brand Title: Racks on Rent */}
            <div className="flex items-baseline font-black tracking-tighter leading-none text-xl sm:text-2xl lg:text-[26px] xl:text-3xl">
              <span className="text-[#6B0F1A] font-black italic transform scale-y-110 origin-bottom">Racks</span>
              <span className="text-[#F7E200] font-bold italic lowercase mx-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.8em" }}>on</span>
              <span className="text-[#F7E200] font-black italic transform scale-y-110 origin-bottom">Rent</span>
            </div>

            {/* Tagline: — SUBLET SPACE. SHARE SUCCESS. — */}
            <div className="flex items-center justify-between gap-1 mt-0.5 text-[7px] sm:text-[8px] lg:text-[9px] font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap">
              <span className="h-[2px] w-3 sm:w-4 lg:w-5 bg-[#6B0F1A] inline-block" />
              <span className="text-[#6B0F1A]">SUBLET SPACE.</span>
              <span className="text-[#F7E200]">SHARE SUCCESS.</span>
              <span className="h-[2px] w-3 sm:w-4 lg:w-5 bg-[#6B0F1A] inline-block" />
            </div>
          </div>
        </Link>

        {/* Desktop Main Navigation Items (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-2 xl:px-2.5 py-1.5 rounded-lg text-[11px] xl:text-xs font-bold text-[#6B0F1A] hover:text-[#3D0710] hover:bg-[#FFF6A3]/50 transition-all whitespace-nowrap tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button (>= 1024px) */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <button
            type="button"
            onClick={handleListYourRack}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F7E200] px-4 py-2 text-[11px] xl:text-xs font-extrabold text-[#3D0710] transition-all hover:bg-[#3D0710] hover:text-[#F7E200] shadow-sm hover:shadow-md border border-[#6B0F1A]/20 cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>List Your Rack</span>
          </button>
        </div>

        {/* Mobile Right Controls (< 1024px) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleListYourRack}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F7E200] text-[#3D0710] text-xs font-extrabold shadow-xs hover:bg-[#3D0710] hover:text-[#F7E200] transition-colors cursor-pointer whitespace-nowrap"
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>List Rack</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="p-2.5 rounded-xl text-[#6B0F1A] hover:text-[#3D0710] hover:bg-[#FFF6A3]/40 border border-[#F0E2E4] transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Full-Screen Mobile Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDF5] lg:hidden flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Drawer */}
          <div className="py-3 px-4 sm:px-6 flex items-center justify-between border-b border-[#F0E2E4] bg-[#FFFDF5] sticky top-0 z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5 focus:outline-none"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#6B0F1A]/20">
                <Image
                  src="/images/navbar-logo.jpeg"
                  alt="Racks on Rent Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline font-black tracking-tighter leading-none text-2xl sm:text-3xl">
                  <span className="text-[#6B0F1A] font-black italic transform scale-y-110 origin-bottom">Racks</span>
                  <span className="text-[#F7E200] font-bold italic lowercase mx-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "0.8em" }}>on</span>
                  <span className="text-[#F7E200] font-black italic transform scale-y-110 origin-bottom">Rent</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[9px] font-black uppercase tracking-[0.15em] leading-none whitespace-nowrap">
                  <span className="h-[2px] w-3 bg-[#6B0F1A] inline-block" />
                  <span className="text-[#6B0F1A]">SUBLET SPACE.</span>
                  <span className="text-[#F7E200]">SHARE SUCCESS.</span>
                  <span className="h-[2px] w-3 bg-[#6B0F1A] inline-block" />
                </div>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="p-2.5 rounded-xl text-[#6B0F1A] hover:bg-[#FFF6A3]/40 border border-[#F0E2E4] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links inside Mobile Drawer */}
          <nav className="p-6 space-y-2 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl font-bold text-lg text-[#6B0F1A] hover:bg-[#FFF6A3]/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Action CTA button inside Drawer */}
          <div className="p-6 border-t border-[#F0E2E4] bg-[#FFF6A3]/30">
            <button
              type="button"
              onClick={handleListYourRack}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F7E200] py-3.5 text-base font-extrabold text-[#3D0710] shadow-xs hover:bg-[#3D0710] hover:text-[#F7E200] transition-colors cursor-pointer"
            >
              <Dumbbell className="w-5 h-5" />
              <span>List Your Rack</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
