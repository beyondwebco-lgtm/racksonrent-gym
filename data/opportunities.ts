export interface OpportunityExample {
  id: string;
  title: string;
  location: string;
  spaceType: string;
  suitableFor: string;
  approxSize: string;
  arrangement: string;
  badgeText: string;
  description: string;
  bgGradient: string;
}

export const SAMPLE_OPPORTUNITIES: OpportunityExample[] = [
  {
    id: "premium-clothing-rack",
    title: "Clothing Rack Space inside Boutique Store",
    location: "Hyderabad (Banjara Hills / Jubilee Hills)",
    spaceType: "Floor-standing apparel rack inside high-footfall fashion boutique",
    suitableFor: "Women's dresses, designer kurtis, western tops & ethnic collections",
    approxSize: "5 ft x 2 ft clothing rack",
    arrangement: "Monthly Retail Rack Sublet",
    badgeText: "Featured Boutique",
    description: "Prime floor clothing rack inside a high-footfall boutique store serving active fashion shoppers.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "boutique-display-corner",
    title: "Boutique Display Corner",
    location: "Vijayawada (MG Road area)",
    spaceType: "Curated display corner with mannequins and lighting inside retail store",
    suitableFor: "Festive wear, sarees, designer collections & accessories",
    approxSize: "6 ft x 4 ft display corner",
    arrangement: "Weekly / Monthly Space Rental",
    badgeText: "High Footfall",
    description: "Dedicated fashion corner with mannequin styling and spot lighting right in the primary store walking flow.",
    bgGradient: "from-yellow-950/90 to-amber-950/90"
  },
  {
    id: "window-display-space",
    title: "Front Store Window Display",
    location: "Bengaluru (Indiranagar / HSR Layout)",
    spaceType: "Street-facing front glass window showcase area",
    suitableFor: "Mannequin styling, featured collections, footwear & luxury handbags",
    approxSize: "5 ft x 3 ft window showcase",
    arrangement: "Monthly Space Rental",
    badgeText: "Max Footfall Visibility",
    description: "High-impact street-facing window showcase capturing footfall from shoppers walking past.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "accessory-counter-display",
    title: "Checkout Accessory Counter",
    location: "Visakhapatnam (Beach Road area)",
    spaceType: "Point-of-sale counter space beside main retail cash counter",
    suitableFor: "Jewellery, sunglasses, wallets, hair accessories & gift items",
    approxSize: "3 ft countertop display",
    arrangement: "Monthly Space Sublet",
    badgeText: "Impulse Buy Spot",
    description: "Top impulse-buy spot beside the billing desk capturing every customer during checkout.",
    bgGradient: "from-amber-900/90 to-stone-900/90"
  },
  {
    id: "shelf-display-space",
    title: "Eye-Level Shelf Display",
    location: "Chennai (Velachery / T. Nagar)",
    spaceType: "Eye-level wooden shelf display inside lifestyle studio",
    suitableFor: "Handbags, clutches, folded denim, scarves & footwear",
    approxSize: "4 ft x 1.5 ft wall shelf",
    arrangement: "Monthly Space Rental",
    badgeText: "Eye Level",
    description: "Clean eye-level shelf display inside a premium lifestyle store with steady customer browsing.",
    bgGradient: "from-rose-950/90 to-pink-950/90"
  },
  {
    id: "grab-and-go-fashion-rack",
    title: "Entrance Grab-and-Go Fashion Rack",
    location: "Guntur (Lakshmipuram area)",
    spaceType: "Entrance floor rack for trending fashion and accessories",
    suitableFor: "Graphic t-shirts, tote bags, summer dresses & quick-buy fashion",
    approxSize: "4 ft x 2 ft promotional rack",
    arrangement: "Flexible Monthly Rental",
    badgeText: "High Traffic",
    description: "Entrance retail spot in a busy fashion hub designed for quick discovery and impulse purchases.",
    bgGradient: "from-purple-950/90 to-rose-950/90"
  }
];


