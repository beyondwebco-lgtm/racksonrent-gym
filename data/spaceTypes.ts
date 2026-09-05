export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "product-rack",
    name: "Product Rack",
    description: "Floor-standing rack space inside gyms and fitness centers for display items.",
    iconName: "Store",
  },
  {
    id: "wall-shelf",
    name: "Wall Shelf",
    description: "Eye-level wall-mounted shelves for supplements, accessories, and wellness products.",
    iconName: "Layers",
  },
  {
    id: "reception-counter",
    name: "Reception Counter",
    description: "High-visibility reception area display right where members check in and check out.",
    iconName: "Sparkles",
  },
  {
    id: "nutrition-corner",
    name: "Nutrition Corner",
    description: "Dedicated shake, beverage, and nutritional snacks display station.",
    iconName: "HeartHandshake",
  },
  {
    id: "sampling-table",
    name: "Sampling Table",
    description: "Promotional sampling spot for product trials and customer tasting sessions.",
    iconName: "Gift",
  },
  {
    id: "small-kiosk",
    name: "Small Kiosk",
    description: "Compact brand kiosk or booth for wellness, wearables, and apparel setups.",
    iconName: "Box",
  },
  {
    id: "other-floor-space",
    name: "Other Floor Space",
    description: "Tailored floor display area suited for custom gym setups.",
    iconName: "Maximize",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small (Up to 3x2 ft)", dimensions: "Up to 3x2 ft" },
  { id: "medium", name: "Medium (3x2 ft to 6x3 ft)", dimensions: "3x2 ft to 6x3 ft" },
  { id: "large", name: "Large (6x3 ft to 10x5 ft)", dimensions: "6x3 ft to 10x5 ft" },
  { id: "custom", name: "Custom (Custom Floor Area)", dimensions: "Custom Floor Area" },
];



