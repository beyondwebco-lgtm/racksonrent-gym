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
    title: "Gym Accessories & Supplements",
    shortName: "Supplements",
    description: "Create a dedicated retail space for fitness accessories, protein powders, and daily workout supplements.",
    suitableFor: ["Protein powders", "BCAAs", "Creatine", "Lifting belts", "Shakers", "Gym bags", "Towels"],
    benefits: ["Premium gym location", "Targeted health-conscious audience", "High product visibility", "Additional income opportunity", "Direct access to fitness customers"],
    primaryCta: "List Supplement Space",
    secondaryCta: "Find Space for Supplements",
    image: "/spaces/03_Gym_Accessories_Supplements.png",
    iconName: "Stethoscope",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Supplement Centre",
    roleSecondary: "wellness",
    categorySecondary: "Accessories & Supplements",
  },
  {
    id: "apparel",
    eyebrow: "Category 02",
    title: "Gym Apparel & Activewear",
    shortName: "Apparel",
    description: "Breathable and stretchable gym wear designed for maximum comfort during intense workouts.",
    suitableFor: ["Gym T-Shirts & Tops", "Activewear Shorts", "Gym Hoodies & Jackets", "Track Pants", "Compression Wear"],
    benefits: ["Breathable fabric – stay cool & comfortable", "Stretchable fit for flexible movement", "Built for durability & high performance", "Daily visibility among gym members", "Turn unused gym space into retail revenue"],
    primaryCta: "List Apparel Space",
    secondaryCta: "Find Space for Activewear",
    image: "/spaces/02_Gym_Apparel.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Apparel Rack",
    roleSecondary: "wellness",
    categorySecondary: "Gym Apparel",
  },
  {
    id: "fruit-salads",
    eyebrow: "Category 03",
    title: "Fruit Bowls & Healthy Salads",
    shortName: "Healthy Bowls",
    description: "Offer fresh fruit bowls, sprout salads, and healthy post-workout meals inside gyms.",
    suitableFor: ["Fruit bowls", "Sprouts bowls", "Healthy salads", "Oatmeal bowls", "Yogurt parfaits", "Fresh meals"],
    benefits: ["Access health-conscious customers", "Sell at the point of fitness activity", "Encourage repeat purchases", "Offer convenient post-workout nutrition", "Build a local healthy-food brand"],
    primaryCta: "List Salad Corner",
    secondaryCta: "Find Space for Healthy Bowls",
    image: "/spaces/01_Fruit_Bowls_Healthy_Salads.png",
    iconName: "Apple",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Food Counter",
    roleSecondary: "wellness",
    categorySecondary: "Fruit Bowls & Salads",
  },
  {
    id: "healthy-drinks",
    eyebrow: "Category 04",
    title: "Healthy Drinks & Beverages",
    shortName: "Healthy Drinks",
    description: "Provide fresh juices, electrolyte drinks, cold-pressed juices, and kombucha for active members.",
    suitableFor: ["Fresh juices", "Electrolyte drinks", "Kombucha", "Energy drinks", "Coconut water", "Detox drinks"],
    benefits: ["High impulse purchases", "Perfect for pre & post workout", "Low space requirement", "High daily volume", "Premium brand placement"],
    primaryCta: "List Beverage Cooler",
    secondaryCta: "Find Space for Drinks",
    image: "/spaces/04_Healthy_Drinks.png",
    iconName: "Zap",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Beverage Cooler",
    roleSecondary: "wellness",
    categorySecondary: "Healthy Beverages",
  },
  {
    id: "protein-shakes",
    eyebrow: "Category 05",
    title: "Protein Shake Corner",
    shortName: "Protein Shakes",
    description: "Set up a freshly blended protein shake and smoothie counter for instant post-workout recovery.",
    suitableFor: ["Protein shakes", "Smoothies", "Pre-workout drinks", "Mass gainer shakes", "Meal replacement shakes"],
    benefits: ["Immediate post-workout consumption", "High margin opportunity", "Engage members directly", "Subscription model potential", "Enhances gym experience"],
    primaryCta: "List Shake Counter",
    secondaryCta: "Find Space for Protein Shakes",
    image: "/spaces/05_Protein_Shake_Corner.png",
    iconName: "Stethoscope",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Shake Counter",
    roleSecondary: "wellness",
    categorySecondary: "Protein Shakes",
  },
  {
    id: "wellness",
    eyebrow: "Category 06",
    title: "Personal Care & Wellness",
    shortName: "Wellness",
    description: "Place wellness, grooming, recovery, and personal-care products in a compact display area inside gyms.",
    suitableFor: ["Muscle recovery products", "Pain-relief sprays", "Massage products", "Organic soaps", "Skincare", "Grooming products"],
    benefits: ["Targeted wellness buyers", "High impulse purchases", "Compact display footprint", "Direct member engagement", "Enhanced brand credibility"],
    primaryCta: "List Wellness Display Space",
    secondaryCta: "Find Space for Wellness Products",
    image: "/spaces/06_Personal_Care_Wellness.png",
    iconName: "HeartHandshake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Wellness Display Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Personal Care & Wellness",
  },
  {
    id: "technology",
    eyebrow: "Category 07",
    title: "Fitness Technology & Wearables",
    shortName: "Fitness Tech",
    description: "Showcase smart fitness devices, wearables, training accessories, and connected health products inside gyms.",
    suitableFor: ["Fitness bands", "Smartwatches", "Heart-rate monitors", "Smart scales", "Earbuds", "Fitness trackers"],
    benefits: ["Demo tech to active athletes", "Premium member demographic", "Direct sales & pre-orders", "Interactive showcase format", "Low storefront overhead"],
    primaryCta: "List Tech Display Space",
    secondaryCta: "Find Space for Fitness Tech",
    image: "/spaces/07_Fitness_Technology_Wearables.png",
    iconName: "Zap",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Tech Kiosk",
    roleSecondary: "wellness",
    categorySecondary: "Fitness Technology",
  },
  {
    id: "healthy-snacks",
    eyebrow: "Category 08",
    title: "Healthy Snacks & Foods",
    shortName: "Healthy Snacks",
    description: "Offer a convenient grab-and-go station for protein bars, muesli, dry fruits, and healthy cookies.",
    suitableFor: ["Protein bars", "Energy bites", "Dry fruits", "Healthy cookies", "Muesli", "Roasted snacks"],
    benefits: ["High turnover rate", "Low maintenance display", "Appeals to all gym members", "Great cross-selling potential", "Promotes healthy habits"],
    primaryCta: "List Snack Display",
    secondaryCta: "Find Space for Healthy Snacks",
    image: "/spaces/08_Healthy_Snacks_Foods.png",
    iconName: "Apple",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Snack Rack",
    roleSecondary: "wellness",
    categorySecondary: "Healthy Snacks",
  }
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Gym Spaces", desc: "Curated & safety checked", iconName: "ShieldCheck" },
  { label: "Targeted Fitness Audience", desc: "Active health enthusiasts", iconName: "Users" },
  { label: "Flexible Setup Options", desc: "Racks, counters & kiosks", iconName: "Layers" },
  { label: "Dedicated Support", desc: "Pan-India assistance team", iconName: "Headphones" },
  { label: "Pan India Opportunities", desc: "Expanding gym networks", iconName: "MapPin" },
];
