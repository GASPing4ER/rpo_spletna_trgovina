import { TCategory, TNavigation, TOrder, TProduct } from "@/types";

export const productsDummyData: TProduct[] = [
  {
    id: "1",
    branch_id: "101",
    name: "HUAWEI pametni telefon Nova 12 SE",
    description: "8/256GB, zelena",
    price: 256.0,
    stock: 100,
    category: "telefoni",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "2",
    branch_id: "101",
    name: "AirPods Max Silver",
    description: "Noise-canceling headphones",
    price: 256.0,
    stock: 50,
    category: "Accessories",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "3",
    branch_id: "101",
    name: "Apple Watch Series 9 GPS",
    description: "41mm Starlight Aluminium",
    price: 256.0,
    stock: 30,
    category: "Wearables",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "4",
    branch_id: "101",
    name: "Apple iPhone 14 Pro",
    description: "1TB Gold (MQ2V3)",
    price: 256.0,
    stock: 20,
    category: "telefoni",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  //* Dumplicated test data
  {
    id: "5",
    branch_id: "101",
    name: "HUAWEI pametni telefon Nova 12 SE TEST1",
    description: "8/256GB, zelena",
    price: 256.0,
    stock: 100,
    category: "telefoni",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "6",
    branch_id: "101",
    name: "AirPods Max Silver TEST1",
    description: "Noise-canceling headphones",
    price: 256.0,
    stock: 50,
    category: "Accessories",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "7",
    branch_id: "101",
    name: "Apple Watch Series 9 GPS TEST1",
    description: "41mm Starlight Aluminium",
    price: 256.0,
    stock: 30,
    category: "Wearables",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "8",
    branch_id: "101",
    name: "Apple iPhone 14 Pro TEST1",
    description: "1TB Gold (MQ2V3)",
    price: 256.0,
    stock: 20,
    category: "telefoni",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  //* Duplicated test data2
  {
    id: "9",
    branch_id: "101",
    name: "HUAWEI pametni telefon Nova 12 SE TEST2",
    description: "8/256GB, zelena",
    price: 256.0,
    stock: 100,
    category: "telefoni",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "10",
    branch_id: "101",
    name: "AirPods Max Silver TEST2",
    description: "Noise-canceling headphones",
    price: 256.0,
    stock: 50,
    category: "Accessories",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "11",
    branch_id: "101",
    name: "Apple Watch Series 9 GPS TEST2",
    description: "41mm Starlight Aluminium",
    price: 256.0,
    stock: 30,
    category: "Wearables",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  {
    id: "12",
    branch_id: "101",
    name: "Apple iPhone 14 Pro TEST2",
    description: "1TB Gold (MQ2V3)",
    price: 256.0,
    stock: 20,
    category: "telefoni",
    imgUrl: "/images/product-placeholder.png", // Replace with actual image URL
    created_at: new Date(),
  },
  // {
  //   id: "1",
  //   branch_id: "101",
  //   name: "Wireless Earbuds",
  //   description:
  //     "High-quality noise-canceling wireless earbuds with up to 20 hours of battery life.",
  //   price: 99.99,
  //   stock: 50,
  //   category: "Electronics",
  //   imgUrl: "/images/wireless_earbuds.webp",
  //   created_at: new Date("2024-11-01T10:00:00Z"),
  // },
  // {
  //   id: "2",
  //   branch_id: "102",
  //   name: "Smartphone Stand",
  //   description:
  //     "Adjustable aluminum stand for smartphones and tablets, perfect for hands-free use.",
  //   price: 14.99,
  //   stock: 200,
  //   category: "Electronics",
  //   imgUrl: "/images/smartphone_stand.jpg",
  //   created_at: new Date("2024-11-02T12:00:00Z"),
  // },
  // {
  //   id: "3",
  //   branch_id: "103",
  //   name: "Gaming Mouse",
  //   description:
  //     "Ergonomic gaming mouse with RGB lighting and customizable buttons.",
  //   price: 49.99,
  //   stock: 120,
  //   category: "Electronics",
  //   imgUrl: "/images/gaming_mouse.webp",
  //   created_at: new Date("2024-11-03T14:30:00Z"),
  // },
  // {
  //   id: "4",
  //   branch_id: "104",
  //   name: "Portable Power Bank",
  //   description:
  //     "10,000mAh portable power bank with fast-charging capabilities and dual USB ports.",
  //   price: 29.99,
  //   stock: 80,
  //   category: "Electronics",
  //   imgUrl: "/images/portable_power_bank.jpg",
  //   created_at: new Date("2024-11-04T16:00:00Z"),
  // },
  // {
  //   id: "5",
  //   branch_id: "105",
  //   name: "Steel Water Bottle",
  //   description:
  //     "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
  //   price: 19.99,
  //   stock: 150,
  //   category: "Electronics",
  //   imgUrl: "/images/stainless_steel_water_bottle.webp",
  //   created_at: new Date("2024-11-05T18:00:00Z"),
  // },
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

export const ordersDummyData: TOrder[] = [
  {
    id: 1,
    user_id: 101,
    total_price: 59.99,
    status: "completed",
    created_at: "2024-11-01T10:15:30Z",
  },
  {
    id: 2,
    user_id: 102,
    total_price: 120.5,
    status: "pending",
    created_at: "2024-11-03T14:22:45Z",
  },
  {
    id: 3,
    user_id: 103,
    total_price: 35.0,
    status: "canceled",
    created_at: "2024-11-05T08:10:00Z",
  },
  {
    id: 4,
    user_id: 104,
    total_price: 250.75,
    status: "completed",
    created_at: "2024-11-07T11:45:30Z",
  },
  {
    id: 5,
    user_id: 105,
    total_price: 89.99,
    status: "shipped",
    created_at: "2024-11-09T13:20:00Z",
  },
  {
    id: 6,
    user_id: 106,
    total_price: 47.89,
    status: "completed",
    created_at: "2024-11-11T15:35:50Z",
  },
  {
    id: 7,
    user_id: 107,
    total_price: 15.99,
    status: "pending",
    created_at: "2024-11-13T09:05:10Z",
  },
  {
    id: 8,
    user_id: 108,
    total_price: 300.0,
    status: "shipped",
    created_at: "2024-11-15T12:55:20Z",
  },
  {
    id: 9,
    user_id: 109,
    total_price: 75.25,
    status: "completed",
    created_at: "2024-11-17T16:40:30Z",
  },
  {
    id: 10,
    user_id: 110,
    total_price: 99.99,
    status: "pending",
    created_at: "2024-11-19T18:15:00Z",
  },
];

export const categoriesData: TCategory[] = [
  {
    title: "Računalniki",
    slug: "/shop?category=racunalniki",
    iconUrl: "/icons/racunalniki.svg",
  },
  {
    title: "Telefoni",
    slug: "/shop?category=telefoni",
    iconUrl: "/icons/telefoni.svg",
  },
  {
    title: "Slušalke",
    slug: "/shop?category=slusalke",
    iconUrl: "/icons/slusalke.svg",
  },
  {
    title: "Pametne ure",
    slug: "/shop?category=pametne-ure",
    iconUrl: "/icons/pametne-ure.svg",
  },
  {
    title: "Tablice",
    slug: "/shop?category=tablice",
    iconUrl: "/icons/tablice.svg",
  },
  {
    title: "Drugo",
    slug: "/shop?category=drugo",
    iconUrl: "/icons/drugo.svg",
  },
  //* Duplicated test data
  {
    title: "TEST1",
    slug: "/shop?category=Test1",
    iconUrl: "/icons/racunalniki.svg",
  },
  {
    title: "TEST2",
    slug: "/shop?category=Test2",
    iconUrl: "/icons/telefoni.svg",
  },
];
