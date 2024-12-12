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
    category: "slusalke",
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
];

export const navigationData: TNavigation[] = [
  {
    title: "Domov",
    slug: "",
  },
  {
    title: "Trgovina",
    slug: "shop",
  },
  {
    title: "O nas",
    slug: "about",
  },
  {
    title: "Kontakt",
    slug: "contact",
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
    slugId: "racunalniki",
    brands: ["Apple", "Lenovo", "HP", "Dell", "Asus", "Acer", "MSI", "Razer"],
  },
  {
    title: "Telefoni",
    slug: "/shop?category=telefoni",
    iconUrl: "/icons/telefoni.svg",
    slugId: "telefoni",
    brands: ["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Google"],
  },
  {
    title: "Slušalke",
    slug: "/shop?category=slusalke",
    iconUrl: "/icons/slusalke.svg",
    slugId: "slusalke",
    brands: ["Apple", "Sony", "Bose", "Sennheiser", "JBL", "Beats"],
  },
  {
    title: "Pametne ure",
    slug: "/shop?category=pametne-ure",
    iconUrl: "/icons/pametne-ure.svg",
    slugId: "pametne-ure",
    brands: ["Apple", "Samsung", "Huawei", "Xiaomi", "Fitbit", "Garmin"],
  },
  {
    title: "Tablice",
    slug: "/shop?category=tablice",
    iconUrl: "/icons/tablice.svg",
    slugId: "tablice",
    brands: ["Apple", "Samsung", "Huawei", "Lenovo", "Microsoft", "Amazon"],
  },
  {
    title: "Drugo",
    slug: "/shop?category=drugo",
    iconUrl: "/icons/drugo.svg",
    slugId: "drugo",
    brands: [
      "Logitech",
      "Razer",
      "Corsair",
      "SteelSeries",
      "HyperX",
      "Cooler Master",
    ],
  },
  //* Duplicated test data
  {
    title: "TEST1",
    slug: "/shop?category=Test1",
    iconUrl: "/icons/racunalniki.svg",
    slugId: "Test1",
    brands: ["Apple", "Lenovo", "HP", "Dell", "Asus", "Acer", "MSI", "Razer"],
  },
  {
    title: "TEST2",
    slug: "/shop?category=Test2",
    iconUrl: "/icons/telefoni.svg",
    slugId: "Test2",
    brands: ["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Google"],
  },
];
