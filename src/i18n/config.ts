export type Locale = (typeof locales)[number];

export const locales = ["sl", "en"] as const;
export const defaultLocale = "sl";
