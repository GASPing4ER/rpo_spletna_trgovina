import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        navbar: "var(--navbar)",
        footer: "var(--footer)",
        onBackground: "var(--onBackground)",
        surface: "var(--surface)",
        onSurface: "var(--onSurface)",
        surfaceBorder: "var(--surfaceBorder)",
        hero: "var(--hero)",
        heroTitle: "var(--heroTitle)",
        heroSubTitle: "var(--heroSubTitle)",
        heroBorder: "var(--heroBorder)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        textPrimary: "var(--textPrimary)",
        textFooter: "var(--textFooter)",
        textSecondary: "var(--textSecondary)",
        textTertiary: "var(--textTertiary)",
        textOnPrimary: "var(--textOnPrimary)",
        iconColor: "var(--iconColor)",
        footerIcon: "var(--footerIcon)",
        separator: "var(--separator)",
        border: "var(--border)",
        onHover: "var(--onHover)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config;
