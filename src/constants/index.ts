import { TCategory, TNavigation } from "@/types";

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
    title: "Poslovalnice",
    slug: "branches",
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
  /*
  {
    title: "Drugo2",
    slug: "/shop?category=drugo2",
    iconUrl: "/icons/drugo.svg",
    slugId: "drugo2",
    brands: [
      "Logitech",
      "Razer",
      "Corsair",
      "SteelSeries",
      "HyperX",
      "Cooler Master",
    ],
  },
  */
];
