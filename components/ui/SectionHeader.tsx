"use client";

import React from "react";
import { motion } from "framer-motion";

export interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeClassName?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "mb-10 sm:mb-12",
  titleClassName = "",
  subtitleClassName = "",
  badgeClassName = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center mx-auto" : "items-start text-left"} max-w-3xl ${className}`}>
      {/* Eyebrow Badge with Left & Right Gradient Wings */}
      <div className={`flex items-center gap-3 sm:gap-4 w-full mb-4 sm:mb-5 ${isCenter ? "justify-center" : "justify-start"}`}>
        <span
          className={`h-0.5 w-10 sm:w-16 opacity-80 ${
            dark ? "bg-gradient-to-r from-transparent to-[#FAFA33]" : "bg-gradient-to-r from-transparent to-[#740202]"
          }`}
          aria-hidden="true"
        />
        <span
          className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest whitespace-nowrap select-none shadow-xs transition-all ${
            dark
              ? "text-[#740202] bg-[#FAFA33] border-2 border-[#FAFA33]"
              : "text-[#740202] bg-[#FAFA33] border-2 border-[#740202]"
          } ${badgeClassName}`}
        >
          • {badge} •
        </span>
        <span
          className={`h-0.5 w-10 sm:w-16 opacity-80 ${
            dark ? "bg-gradient-to-l from-transparent to-[#FAFA33]" : "bg-gradient-to-l from-transparent to-[#740202]"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Main Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-[#740202]"
        } ${titleClassName}`}
      >
        {title}
      </motion.h2>

      {/* Subtitle / Lead Description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-4 max-w-2xl text-base md:text-lg leading-7 font-medium ${
            dark ? "text-white/80" : "text-[#5F5F5F]"
          } ${isCenter ? "mx-auto" : ""} ${subtitleClassName}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeader;
