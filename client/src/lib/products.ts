export type ProductType = "rope" | "glove" | "digital";

export interface ProductVariant {
  id: string;
  name: string;
  color: string;
  size?: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  description: string;
  basePrice: number;
  originalPrice?: number;
  variants: ProductVariant[];
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "cordless-battle-ropes",
    name: "Wireless Battle Ropes",
    type: "rope",
    description: "Experience the freedom of cordless resistance. Compact design fits in any bag. Perfect for home, office, or travel workouts.",
    basePrice: 89.99,
    originalPrice: 119.00,
    features: ["No anchor point needed", "Silent operation", "Compact & portable", "Weighted resistance"],
    variants: [
      {
        id: "rope-pink",
        name: "Electric Pink",
        color: "bg-pink-500",
        price: 89.99,
        originalPrice: 119.00,
        image: "/images/pink-ropes.jpeg",
        inStock: true
      },
      {
        id: "rope-grey",
        name: "Concrete Grey",
        color: "bg-gray-500",
        price: 89.99,
        originalPrice: 119.00,
        image: "/images/grey-ropes.jpeg",
        inStock: true
      },
      {
        id: "rope-black",
        name: "Stealth Black",
        color: "bg-black",
        price: 89.99,
        originalPrice: 119.00,
        image: "/images/black-ropes.jpeg",
        inStock: true
      }
    ]
  },
  /*
  {
    id: "rebuild-strength-plan",
    name: "Rebuild: 12-Week Home Strength Plan",
    type: "digital",
    description: "A comprehensive 12-week program designed for rebuilding strength at home. Focuses on low-impact, high-intensity movements using minimal equipment. Perfect for post-weight loss toning.",
    basePrice: 49.99,
    features: ["12-Week Daily Schedule", "Video Demonstrations", "Progress Tracking Sheets", "Modification Guide"],
    variants: [
      {
        id: "plan-rebuild",
        name: "Digital Download",
        color: "bg-white",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
        inStock: true
      }
    ]
  },
  {
    id: "fuel-the-grind-meal-plan",
    name: "Fuel the Grind: High-Protein Meal Plan",
    type: "digital",
    description: "Stop guessing what to eat. Simple, high-protein recipes designed to support muscle growth and recovery without spending hours in the kitchen.",
    basePrice: 29.99,
    features: ["30+ High-Protein Recipes", "Weekly Shopping Lists", "Meal Prep Guide", "Macro Breakdown"],
    variants: [
      {
        id: "plan-fuel",
        name: "Digital Download",
        color: "bg-white",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000",
        inStock: true
      }
    ]
  },
  */
  {
    id: "performance-gloves",
    name: "Gloves for Weights",
    type: "glove",
    description: "Premium fitness gloves designed for protection and performance. Breathable, durable, and built for the grind.",
    basePrice: 34.99,
    features: ["Wrist support", "Breathable mesh", "Non-slip grip", "Durable stitching"],
    variants: [
      {
        id: "glove-black",
        name: "Stealth Black",
        color: "bg-black",
        price: 34.99,
        image: "/images/black-gloves-new.jpg",
        inStock: true
      },
      {
        id: "glove-pink",
        name: "Electric Pink",
        color: "bg-pink-500",
        price: 34.99,
        image: "/images/pink-gloves-new.jpg",
        inStock: true
      },
      {
        id: "glove-blue",
        name: "Cyan Blue",
        color: "bg-cyan-500",
        price: 34.99,
        image: "/images/blue-gloves-new.jpg",
        inStock: true
      },
      {
        id: "glove-grey",
        name: "Concrete Grey",
        color: "bg-gray-500",
        price: 34.99,
        image: "/images/grey-gloves-new.jpg",
        inStock: true
      }
    ]
  }
];
