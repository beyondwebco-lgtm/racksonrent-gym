"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import ScrollReveal from "@/components/ScrollReveal";

const SpaceSearch = dynamic(() => import("@/components/SpaceSearch"));
const GymSpaceShowcase = dynamic(() => import("@/components/GymSpaceShowcase"));
const PopularCategories = dynamic(() => import("@/components/PopularCategories"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const TrustStrip = dynamic(() => import("@/components/TrustStrip"));

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<"gym-owner" | "wellness" | "general">("gym-owner");
  const [searchValues, setSearchValues] = useState<{
    location?: string;
    spaceType?: string;
    rackSize?: string;
    category?: string;
  }>({});

  const handleRoleSelect = (role: "gym-owner" | "wellness") => {
    setSelectedRole(role);
  };

  const handleSearchSelect = (params: {
    location: string;
    spaceType: string;
    rackSize: string;
    category: string;
  }) => {
    setSearchValues(params);
    setSelectedRole("wellness");
  };

  const handleShowcaseSelect = (
    role: "gym-owner" | "wellness",
    prefillData: { spaceType?: string; category?: string }
  ) => {
    setSelectedRole(role);
    setSearchValues((prev) => ({
      ...prev,
      spaceType: prefillData.spaceType || prev.spaceType,
      category: prefillData.category || prev.category,
    }));
  };

  return (
    <>
      <Hero onSelectRole={handleRoleSelect} />
      <HeroStats />

      <ScrollReveal>
        <SpaceSearch onSearch={handleSearchSelect} />
      </ScrollReveal>



      <ScrollReveal>
        <GymSpaceShowcase onSelectCategoryAction={handleShowcaseSelect} />
      </ScrollReveal>

      <ScrollReveal>
        <PopularCategories />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <EnquiryForm
          selectedRole={selectedRole}
          initialSearchValues={searchValues}
          onRoleChange={(r) => setSelectedRole(r)}
        />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <TrustStrip />
    </>
  );
}
