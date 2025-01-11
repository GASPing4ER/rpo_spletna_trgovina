import { TCategory, TNavigation } from "@/types";

export const navigationData: TNavigation[] = [
  {
    sl_title: "Domov",
    en_title: "Home",
    slug: "",
  },
  {
    sl_title: "Trgovina",
    en_title: "Shop",
    slug: "shop",
  },
  {
    sl_title: "Primerjaj",
    en_title: "Compare",
    slug: "compare",
  },
  {
    sl_title: "Kontakt",
    en_title: "Contact",
    slug: "contact",
  },
];

export const categoriesData: TCategory[] = [
  {
    sl_title: "Računalniki",
    en_title: "Computers",
    slug: "/shop?category=racunalniki",
    iconUrl: "/icons/racunalniki.svg",
    slugId: "racunalniki",
    brands: ["Apple", "Lenovo", "HP", "Dell", "Asus", "Acer", "MSI", "Razer"],
  },
  {
    sl_title: "Telefoni",
    en_title: "Phones",
    slug: "/shop?category=telefoni",
    iconUrl: "/icons/telefoni.svg",
    slugId: "telefoni",
    brands: ["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Google"],
  },
  {
    sl_title: "Slušalke",
    en_title: "Headphones",
    slug: "/shop?category=slusalke",
    iconUrl: "/icons/slusalke.svg",
    slugId: "slusalke",
    brands: ["Apple", "Sony", "Bose", "Sennheiser", "JBL", "Beats"],
  },
  {
    sl_title: "Pametne ure",
    en_title: "Smartwatches",
    slug: "/shop?category=pametne-ure",
    iconUrl: "/icons/pametne-ure.svg",
    slugId: "pametne-ure",
    brands: ["Apple", "Samsung", "Huawei", "Xiaomi", "Fitbit", "Garmin"],
  },
  {
    sl_title: "Tablice",
    en_title: "Tablets",
    slug: "/shop?category=tablice",
    iconUrl: "/icons/tablice.svg",
    slugId: "tablice",
    brands: ["Apple", "Samsung", "Huawei", "Lenovo", "Microsoft", "Amazon"],
  },
  {
    sl_title: "Drugo",
    en_title: "Other",
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
];
