export interface ServiceSupported {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "packaged" | "beverages" | "healthy" | "display";
}

export const SERVICES_SUPPORTED: ServiceSupported[] = [
  {
    id: "womens-fashion",
    title: "Women's Clothing & Boutique Wear",
    description: "Dresses, tunics, tops, festive wear, and boutique fashion collections.",
    iconName: "ShoppingBag",
    category: "packaged"
  },
  {
    id: "mens-wear",
    title: "Men's Apparel & Streetwear",
    description: "Shirts, jackets, casual wear, and independent men's streetwear labels.",
    iconName: "Store",
    category: "packaged"
  },
  {
    id: "ethnic-sarees",
    title: "Sarees & Traditional Ethnic Wear",
    description: "Handloom sarees, kurtis, dupattas, and festive traditional ensembles.",
    iconName: "Sparkles",
    category: "beverages"
  },
  {
    id: "kids-fashion",
    title: "Kids' Wear & Apparel",
    description: "Cute outfits, organic cotton wear, and festive kids' clothing collections.",
    iconName: "Apple",
    category: "healthy"
  },
  {
    id: "fashion-accessories",
    title: "Jewellery & Accessories",
    description: "Handcrafted earrings, necklaces, scarves, belts, and fashion accessories.",
    iconName: "HeartHandshake",
    category: "packaged"
  },
  {
    id: "bags-footwear",
    title: "Bags, Wallets & Footwear",
    description: "Handbags, clutches, leather wallets, totes, and designer footwear.",
    iconName: "ShoppingBag",
    category: "display"
  },
  {
    id: "clothing-racks",
    title: "Clothing Rack Spaces",
    description: "Floor-standing rack spaces inside boutiques and retail stores for apparel.",
    iconName: "Store",
    category: "display"
  },
  {
    id: "boutique-corners",
    title: "Boutique Display Corners",
    description: "Curated display corners with mannequins and lighting inside retail stores.",
    iconName: "Layers",
    category: "display"
  },
  {
    id: "window-showcases",
    title: "Window Display Spaces",
    description: "Front store window showcase areas attracting street-facing shoppers.",
    iconName: "Maximize",
    category: "display"
  }
];


