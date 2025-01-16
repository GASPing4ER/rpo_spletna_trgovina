import { TCategory, TNavigation, TProduct } from "@/types";

export const testProduct: TProduct = {
  branch_id: "eebc0688-7687-48c6-a4f7-b4e7ae3c618d",
  created_at: "2024-12-16T13:25:41.053832+00:00",
  name: "SONY WH1000XM4 brezžične naglavne srebrne slušalke",
  description:
    "Ko uporabljate slušalke WH-1000XM4, vas obdaja samo glasba. To je enostavnejši način za čistejši zvok z manj šuma, ki s pametno tehnologijo za poslušanje samodejno prilagodi vaše doživetje.\r\n" +
    "\r\n" +
    "Odkrijte, kako slušalke WH-1000XM4 našo najnaprednejšo tehnologijo odpravljanja šumov združijo z izjemno kakovostjo zvoka in nizom pametnih funkcij za edinstveno glasbeno doživetje. Slušalke WH-1000XM4 odpravljajo še več visoko- in srednje frekvenčnega zvoka, zato je funkcija odpravljanja šumov najboljša doslej, ne glede na to, ali ste na dolgem poletu ali pa le sedite v kavarni.",
  price: 249,
  stock: 19,
  id: "792f549c-58b7-42a8-a1c1-16ea7c3976fe",
  imgUrl:
    "https://ekbrncrkenlgcayytdwf.supabase.co/storage/v1/object/public/images/SONY%20WH1000XM4_.png",
  category: "slusalke",
  brand: "Sony",
  imgUrl_2:
    "https://ekbrncrkenlgcayytdwf.supabase.co/storage/v1/object/public/images/SONY%20WH1000XM4__2.png",
  imgUrl_3:
    "https://ekbrncrkenlgcayytdwf.supabase.co/storage/v1/object/public/images/SONY%20WH1000XM4__3.png",
  details_Label: "Način nošenja",
  details_Label_2: "Aktivno odpravljanje hrupa",
  details_Label_3: "Bluetooth",
  details_Label_4: "Mikrofon",
  details_Value: "na ušesa (krožno)",
  details_Value_2: "da",
  details_Value_3: "da",
  details_Value_4: "da",
  details_Label_en: "Way to wear",
  details_Label_2_en: "Active noise cancelling",
  details_Label_3_en: "Bluetooth",
  details_Label_4_en: "Microphone",
  details_Value_en: "over ears (round)",
  details_Value_2_en: "yes",
  details_Value_3_en: "yes",
  details_Value_4_en: "yes",
  description_en:
    "When you use the WH-1000XM4 headphones, you’re surrounded by music only. It’s a simpler way to enjoy cleaner sound with less noise, thanks to smart listening technology that automatically adjusts your experience.\r\n" +
    "\r\n" +
    "Discover how the WH-1000XM4 headphones combine our most advanced noise-canceling technology with exceptional sound quality and a range of smart features for a unique music experience. The WH-1000XM4 headphones eliminate even more high- and mid-frequency sounds, making noise cancellation better than ever, whether you're on a long flight or just sitting in a café.",
  name_en:
    "SONY WH1000XM4 wireless over-ear silver headphones\r\n\r\n\r\n\r\n\r\n\r\n",
};

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
