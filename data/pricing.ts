export interface PricingTier {
  id: string;
  title: string;
  targetRole: string;
  priceDisplay: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  roleType: "gym-owner" | "wellness";
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "gym-listing",
    title: "Gym Space Listing",
    targetRole: "For Gym Owners & Fitness Partners",
    priceDisplay: "Free",
    period: "Forever",
    description: "List your unused gym racks, shelf space, or reception counters and start earning extra monthly income.",
    features: [
      "Zero listing & setup fees",
      "Direct wellness brand matching",
      "Set your own display rental terms",
      "Full approval over displayed products"
    ],
    ctaLabel: "List Your Space",
    roleType: "gym-owner",
    highlighted: true
  },
  {
    id: "wellness-space-rental",
    title: "Wellness Space Placement",
    targetRole: "For Nutrition & Wellness Brands",
    priceDisplay: "Flexible Plans",
    period: "Weekly or Monthly",
    description: "Display and sell your supplements, apparel, beverages, snacks, or tech inside top gym facilities.",
    features: [
      "Access high daily health-conscious member footfall",
      "Flexible rack sizes & setup formats",
      "Direct contact with gym owners",
      "No heavy standalone lease overhead"
    ],
    ctaLabel: "Find Space to Display",
    roleType: "wellness",
    highlighted: false
  }
];


