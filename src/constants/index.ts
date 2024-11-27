import { TNavigation, TProduct } from "@/types";

export const productsDummyData: TProduct[] = [
  {
    id: "1",
    branch_id: "101",
    name: "Wireless Earbuds",
    description:
      "High-quality noise-canceling wireless earbuds with up to 20 hours of battery life.",
    price: 99.99,
    stock: 50,
    category: "Electronics",
    imgUrl: "/images/wireless_earbuds.webp",
    created_at: new Date("2024-11-01T10:00:00Z"),
  },
  {
    id: "2",
    branch_id: "102",
    name: "Smartphone Stand",
    description:
      "Adjustable aluminum stand for smartphones and tablets, perfect for hands-free use.",
    price: 14.99,
    stock: 200,
    category: "Electronics",
    imgUrl: "/images/smartphone_stand.jpg",
    created_at: new Date("2024-11-02T12:00:00Z"),
  },
  {
    id: "3",
    branch_id: "103",
    name: "Gaming Mouse",
    description:
      "Ergonomic gaming mouse with RGB lighting and customizable buttons.",
    price: 49.99,
    stock: 120,
    category: "Electronics",
    imgUrl: "/images/gaming_mouse.webp",
    created_at: new Date("2024-11-03T14:30:00Z"),
  },
  {
    id: "4",
    branch_id: "104",
    name: "Portable Power Bank",
    description:
      "10,000mAh portable power bank with fast-charging capabilities and dual USB ports.",
    price: 29.99,
    stock: 80,
    category: "Electronics",
    imgUrl: "/images/portable_power_bank.jpg",
    created_at: new Date("2024-11-04T16:00:00Z"),
  },
  {
    id: "5",
    branch_id: "105",
    name: "Steel Water Bottle",
    description:
      "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 19.99,
    stock: 150,
    category: "Electronics",
    imgUrl: "/images/stainless_steel_water_bottle.webp",
    created_at: new Date("2024-11-05T18:00:00Z"),
  },
];

export const navigationData: TNavigation[] = [
  {
    title: "Domov",
    slug: "/",
  },
  {
    title: "O nas",
    slug: "/about",
  },
  {
    title: "Kontakt",
    slug: "/contact",
  },
];
