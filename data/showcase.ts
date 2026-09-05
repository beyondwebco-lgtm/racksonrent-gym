export interface ShowcaseCategory {
  id: string;
  eyebrow: string;
  title: string;
  shortName: string;
  description: string;
  suitableFor: string[];
  benefits: string[];
  primaryCta: string;
  secondaryCta: string;
  image: string;
  iconName: string;
  rolePrimary: "gym-owner" | "wellness";
  spaceTypePrimary: string;
  roleSecondary: "gym-owner" | "wellness";
  categorySecondary: string;
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "supplements",
    eyebrow: "Category 01",
    title: "Fitness Accessories & Supplements",
    shortName: "Supplements",
    description:
      "Display essential gym supplements, pre-workouts, creatine, shaker bottles, gym straps, and resistance bands right where active fitness members train.",
    suitableFor: [
      "Whey & plant protein tubs",
      "BCAA & pre-workout supplements",
      "Creatine & amino acids",
      "Gym shaker bottles",
      "Lifting belts & wrist wraps",
      "Resistance bands & straps",
    ],
    benefits: [
      "High purchase intent from gym members",
      "Immediate convenience after workouts",
      "High repeat monthly orders",
      "Low footprint shelf & rack display",
      "Extra steady income for gym owners",
    ],
    primaryCta: "List Supplement Rack",
    secondaryCta: "Find Space for Supplements",
    image: "/spaces/03_Gym_Accessories_Supplements.png",
    iconName: "Layers",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Product Rack",
    roleSecondary: "wellness",
    categorySecondary: "Fitness Accessories",
  },
  {
    id: "apparel",
    eyebrow: "Category 02",
    title: "Gym Apparel & Activewear",
    shortName: "Apparel",
    description:
      "Showcase premium workout apparel, dry-fit tees, gym tights, compression wear, and lifting hoodies directly inside fitness centers and gyms.",
    suitableFor: [
      "Dry-fit training t-shirts",
      "Compression shorts & tights",
      "Gym stringers & tank tops",
      "Activewear sets for women",
      "Sweatbands & gym towels",
      "Gym duffle bags & caps",
    ],
    benefits: [
      "Strong visual impulse buy appeal",
      "Targeted reach to fitness enthusiasts",
      "Build local brand awareness fast",
      "Zero standalone store overheads",
      "Attractive rack revenue share",
    ],
    primaryCta: "List Apparel Space",
    secondaryCta: "Find Space for Apparel",
    image: "/spaces/02_Gym_Apparel.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Product Rack",
    roleSecondary: "wellness",
    categorySecondary: "Gym Apparel",
  },
  {
    id: "healthy-bowls",
    eyebrow: "Category 03",
    title: "Fruit Bowls & Healthy Salads",
    shortName: "Healthy Bowls",
    description:
      "Set up fresh fruit bowl and healthy salad prep or grab-and-go counters offering nutritious meals to health-conscious gym members.",
    suitableFor: [
      "Fresh fruit salad bowls",
      "High-protein sprout salads",
      "Boiled egg & chicken bowls",
      "Oatmeal & chia seed bowls",
      "Greek yogurt parfaits",
      "Detox meal boxes",
    ],
    benefits: [
      "Immediate post-workout nourishment",
      "High daily member subscriptions",
      "Enhances gym member experience",
      "High customer retention & loyalty",
      "Boosts gym lifestyle positioning",
    ],
    primaryCta: "List Salad Counter",
    secondaryCta: "Find Space for Salad Bowls",
    image: "/spaces/01_Fruit_Bowls_Healthy_Salads.png",
    iconName: "Store",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Nutrition Corner",
    roleSecondary: "wellness",
    categorySecondary: "Fruit Bowls & Healthy Salads",
  },
  {
    id: "healthy-drinks",
    eyebrow: "Category 04",
    title: "Health Drinks & Beverages",
    shortName: "Healthy Drinks",
    description:
      "Provide cold-pressed juices, electrolyte replenishment drinks, detox waters, and hydration beverages in prime gym refrigerator and counter spots.",
    suitableFor: [
      "Cold-pressed fruit & green juices",
      "Electrolyte & hydration drinks",
      "Coconut water & aloe vera drinks",
      "Sugar-free energy drinks",
      "Herbal detox iced teas",
      "Kombucha & probiotic drinks",
    ],
    benefits: [
      "Instant high-volume daily consumption",
      "Minimal counter or cooler space needed",
      "Appeals to every member entering the gym",
      "Steady daily replenishment revenue",
      "Promotes clean healthy hydration",
    ],
    primaryCta: "List Beverage Cooler",
    secondaryCta: "Find Space for Health Drinks",
    image: "/spaces/04_Healthy_Drinks.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Reception Counter",
    roleSecondary: "wellness",
    categorySecondary: "Health Drinks & Beverages",
  },
  {
    id: "protein-shakes",
    eyebrow: "Category 05",
    title: "Protein Shake Corners",
    shortName: "Protein Shakes",
    description:
      "Run a dedicated protein shake bar serving freshly prepared post-workout recovery shakes, mass gainers, and custom smoothie blends.",
    suitableFor: [
      "Fresh whey protein shakes",
      "Plant-based protein smoothies",
      "BCAA iced coolers",
      "Peanut butter power shakes",
      "Custom pre/post workout blends",
      "Oatmeal protein shakes",
    ],
    benefits: [
      "High margin recurring daily sales",
      "Massive demand immediately after training",
      "Turns unused gym corner into profit hub",
      "Builds a vibrant gym social community",
      "Flexible counter and kiosk lease terms",
    ],
    primaryCta: "List Shake Corner",
    secondaryCta: "Find Space for Shake Bar",
    image: "/spaces/05_Protein_Shake_Corner.png",
    iconName: "HeartHandshake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Nutrition Corner",
    roleSecondary: "wellness",
    categorySecondary: "Protein Shake Corners",
  },
  {
    id: "wellness",
    eyebrow: "Category 06",
    title: "Personal Care & Wellness",
    shortName: "Wellness",
    description:
      "Place organic recovery balms, muscle pain relief sprays, sports sunscreen, gym deodorants, and body care items in gym locker and reception counters.",
    suitableFor: [
      "Muscle relief balms & sprays",
      "Organic gym deodorants & mists",
      "Sweat-resistant sports sunscreens",
      "Anti-chafing sticks & creams",
      "Essential oil recovery roll-ons",
      "Gym toiletry kits",
    ],
    benefits: [
      "Premium impulse self-care purchases",
      "Zero competition with core gym equipment",
      "High profit margin per unit area",
      "Strong interest from active lifestyle users",
      "Compact tabletop and shelf displays",
    ],
    primaryCta: "List Wellness Space",
    secondaryCta: "Find Space for Wellness",
    image: "/spaces/06_Personal_Care_Wellness.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Wall Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Personal Care & Wellness",
  },
  {
    id: "fitness-tech",
    eyebrow: "Category 07",
    title: "Fitness Technology & Wearables",
    shortName: "Fitness Tech",
    description:
      "Showcase smart fitness trackers, heart rate chest straps, smart rings, massage guns, and connected fitness gear in eye-catching display areas.",
    suitableFor: [
      "Smart fitness bands & watches",
      "Heart rate monitors & straps",
      "Percussion massage guns",
      "Smart body composition scales",
      "Smart jump ropes & grip dynamometers",
      "Noise-cancelling workout earbuds",
    ],
    benefits: [
      "High average transaction value",
      "Tech-forward appeal to modern gym goers",
      "Hands-on trial drives high conversions",
      "Modernizes gym entrance and lobby",
      "Brand-building among tech enthusiasts",
    ],
    primaryCta: "List Tech Display",
    secondaryCta: "Find Space for Fitness Tech",
    image: "/spaces/07_Fitness_Technology_Wearables.png",
    iconName: "Layers",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Reception Counter",
    roleSecondary: "wellness",
    categorySecondary: "Fitness Technology & Wearables",
  },
  {
    id: "healthy-snacks",
    eyebrow: "Category 08",
    title: "Healthy Snacks & Foods",
    shortName: "Healthy Snacks",
    description:
      "Offer a convenient grab-and-go station for protein bars, muesli, dry fruits, and healthy cookies.",
    suitableFor: [
      "Protein bars",
      "Energy bites",
      "Dry fruits",
      "Healthy cookies",
      "Muesli",
      "Roasted snacks",
    ],
    benefits: [
      "High turnover rate",
      "Low maintenance display",
      "Appeals to all gym members",
      "Great cross-selling potential",
      "Promotes healthy habits",
    ],
    primaryCta: "List Snack Display",
    secondaryCta: "Find Space for Healthy Snacks",
    image: "/spaces/08_Healthy_Snacks_Foods.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Product Rack",
    roleSecondary: "wellness",
    categorySecondary: "Healthy Snacks & Foods",
  },
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Gym Spaces", desc: "Curated & safety checked", iconName: "ShieldCheck" },
  { label: "Targeted Fitness Audience", desc: "Active health enthusiasts", iconName: "Users" },
  { label: "Flexible Setup Options", desc: "Racks, counters & kiosks", iconName: "Layers" },
  { label: "Dedicated Support", desc: "Pan-India assistance team", iconName: "Headphones" },
  { label: "Pan India Opportunities", desc: "Expanding gym networks", iconName: "MapPin" },
];



