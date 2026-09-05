"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, Store } from "lucide-react";
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
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(1);

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
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
        scrolled ? "py-2 shadow-md bg-[#FFFDF5]/98" : "py-3 sm:py-4 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left Lockup (Logo) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group focus:outline-none"
          aria-label="Racks on Rent Home"
        >
          {/* Square Rack-Icon Logo (40px mobile / 52px desktop) */}
          <div className="relative w-10 h-10 lg:w-[52px] lg:h-[52px] rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#740202]/20 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center">
            <img
              src="/images/navbar-logo.jpeg"
              alt="Racks on Rent Logo Icon"
              width={52}
              height={52}
              className="w-full h-full object-contain"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Separate Horizontal Logo Lockup */}
          <div className="flex flex-col justify-center">
            {/* Main Brand Title */}
            <div className="flex items-baseline font-black tracking-tighter leading-none text-lg sm:text-2xl lg:text-3xl">
              <span className="text-[#740202] font-black italic">Racks</span>
              <span className="text-[#f9c400] font-bold italic lowercase mx-1 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
              <span className="text-[#f9c400] font-black italic">Rent</span>
            </div>

            {/* Sub-tagline Strip */}
            <div className="flex items-center gap-1 mt-0.5 text-[7px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap">
              <span className="h-[1.5px] w-3 bg-[#740202] inline-block" />
              <span className="text-[#740202]">SUBLET SPACE.</span>
              <span className="text-[#f9c400]">SHARE SUCCESS.</span>
              <span className="h-[1.5px] w-3 bg-[#740202] inline-block" />
            </div>
          </div>
        </Link>

        {/* Desktop Main Navigation Links (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative group px-3 py-2 rounded-xl font-sans text-xs xl:text-sm font-bold text-[#740202] hover:text-[#740202] hover:bg-[#FFFBCC]/60 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              <span>{link.label}</span>
              {/* Interactive centered 2px Lemon Yellow underline expanding 0% -> 70% on hover */}
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-[#FAFA33] transition-all duration-300 group-hover:w-[70%]"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* Desktop Action CTA Button (>= 1024px) */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <button
            type="button"
            onClick={handleListYourRack}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] px-5 py-2.5 text-xs xl:text-sm font-extrabold text-[#740202] border border-[#740202]/20 shadow-sm hover:bg-[#740202] hover:text-[#FAFA33] hover:shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap min-h-[44px]"
          >
            <Store className="w-4 h-4" />
            <span>List Your Rack</span>
          </button>
        </div>

        {/* Mobile Navigation Controls (< 1024px) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleListYourRack}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAFA33] text-[#740202] text-xs font-extrabold border border-[#740202]/20 shadow-xs hover:bg-[#740202] hover:text-[#FAFA33] transition-colors cursor-pointer whitespace-nowrap min-h-[44px]"
          >
            <Store className="w-3.5 h-3.5" />
            <span>List Your Rack</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="p-2.5 rounded-xl text-[#740202] hover:bg-[#FFFBCC]/50 border border-[#F0E2E4] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Fullscreen Mobile Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDF5] lg:hidden flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Mobile Drawer */}
          <div className="py-3 px-4 sm:px-6 flex items-center justify-between border-b border-[#F0E2E4] bg-[#FFFDF5] sticky top-0 z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 flex-shrink-0 group focus:outline-none"
              aria-label="Racks on Rent Home"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#740202]/20 shadow-2xs flex items-center justify-center">
                <img
                  src="/images/navbar-logo.jpeg"
                  alt="Racks on Rent Logo Icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline font-black tracking-tighter leading-none text-lg">
                  <span className="text-[#740202] font-black italic">Racks</span>
                  <span className="text-[#f9c400] font-bold italic lowercase mx-0.5 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
                  <span className="text-[#f9c400] font-black italic">Rent</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5 text-[7px] font-black uppercase tracking-[0.15em] leading-none whitespace-nowrap">
                  <span className="h-[1px] w-2 bg-[#740202] inline-block" />
                  <span className="text-[#740202]">SUBLET.</span>
                  <span className="text-[#f9c400]">SHARE.</span>
                  <span className="h-[1px] w-2 bg-[#740202] inline-block" />
                </div>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="p-2.5 rounded-xl text-[#740202] hover:bg-[#FFFBCC]/50 border border-[#F0E2E4] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links inside Mobile Drawer */}
          <nav className="p-6 space-y-2 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl font-sans font-bold text-sm text-[#740202] hover:bg-[#FFFBCC]/60 hover:text-[#740202] transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Sticky Bottom Action CTA Button inside Drawer */}
          <div className="p-6 border-t border-[#F0E2E4] bg-[#FFFBCC] safe-area-bottom">
            <button
              type="button"
              onClick={handleListYourRack}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] py-3.5 text-base font-extrabold text-[#740202] border border-[#740202]/20 shadow-sm hover:bg-[#740202] hover:text-[#FAFA33] transition-colors cursor-pointer min-h-[48px]"
            >
              <Store className="w-5 h-5" />
              <span>List Your Rack</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
