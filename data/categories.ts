export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
  badge?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "protein-shake-corners",
    name: "Protein Shake Corners",
    description: "Fresh whey protein shakes, post-workout recovery smoothies, and customized blend counters.",
    iconName: "Sparkles",
    image: "/spaces/05_Protein_Shake_Corner.png",
    alt: "Protein Shake Corner inside a modern gym facility",
    badge: "High Demand",
  },
  {
    id: "personal-care-wellness",
    name: "Personal Care & Wellness",
    description: "Natural recovery balms, soothing muscle sprays, gym toiletries, and wellness self-care products.",
    iconName: "HeartHandshake",
    image: "/spaces/06_Personal_Care_Wellness.png",
    alt: "Personal Care & Wellness station in gym",
    badge: "Featured",
  },
  {
    id: "fitness-tech-wearables",
    name: "Fitness Technology & Wearables",
    description: "Smart fitness trackers, heart rate monitors, smart rings, and connected fitness tech displays.",
    iconName: "Layers",
    image: "/spaces/07_Fitness_Technology_Wearables.png",
    alt: "Fitness Technology and Wearables display counter",
    badge: "Trending",
  },
  {
    id: "healthy-snacks-foods",
    name: "Healthy Snacks & Foods",
    description: "Protein bars, energy bites, roasted nuts, dry fruits, muesli, and healthy cookies for quick fuel.",
    iconName: "ShoppingBag",
    image: "/spaces/08_Healthy_Snacks_Foods.png",
    alt: "Healthy snacks and grab-and-go food rack in gym",
    badge: "Grab & Go",
  },
  {
    id: "fruit-bowls-salads",
    name: "Fruit Bowls & Healthy Salads",
    description: "Freshly cut fruit bowls, customized pre-workout salad bowls, and detox nutritional meals.",
    iconName: "Store",
    image: "/spaces/01_Fruit_Bowls_Healthy_Salads.png",
    alt: "Fruit Bowls and Healthy Salads counter in gym",
    badge: "Fresh & Healthy",
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "High-performance activewear, compression gear, dri-fit t-shirts, gym tights, and gym hoodies.",
    iconName: "ShoppingBag",
    image: "/spaces/02_Gym_Apparel.png",
    alt: "Gym apparel and workout clothing rack",
    badge: "Apparel",
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Lifting straps, gym belts, shaker bottles, resistance bands, yoga mats, and workout gear.",
    iconName: "Layers",
    image: "/spaces/03_Gym_Accessories_Supplements.png",
    alt: "Fitness accessories and gym essentials display shelf",
    badge: "Essentials",
  },
  {
    id: "health-drinks-beverages",
    name: "Health Drinks & Beverages",
    description: "Hydration drinks, electrolyte water, cold-pressed juices, and herbal pre-workout beverages.",
    iconName: "Sparkles",
    image: "/spaces/04_Healthy_Drinks.png",
    alt: "Health Drinks and Beverages cooler display inside gym",
    badge: "Refreshing",
  },
];



