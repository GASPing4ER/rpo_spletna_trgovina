import Link from "next/link";
import Cart from "./Cart";
import UserProfile from "./User";
import { LanguageSelector, ThemeSelector } from "@/components";
import { Navigation } from "@/components";
import MobileMenu from "./MobileMenu"; // New client-only component for the mobile menu
import { getUserLocale } from "@/utils/lang/locale";
import Image from "next/image";

const Header = async () => {
  const locale = await getUserLocale();
  return (
    <header className="w-full max-w-screen h-20 fixed top-0 left-0 border-b border-border flex justify-between items-center bg-navbar px-6 lg:px-10 z-20">
      <div className="lg:hidden">
        <MobileMenu locale={locale} />
      </div>
      <h1>
        <Link href="/" className="text-xs py-2 px-4 text-white font-bold">
          <Image src="/icons/logo.svg" width={150} height={75} alt="logo" />
        </Link>
      </h1>
      {/* TODO: Logo here */}
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <Navigation locale={locale} />
      </nav>
      {/* Mobile Menu */}
      {/* Desktop Utilities */}
      <div className="flex items-center gap-4">
        <Cart />
        <UserProfile />
        <ThemeSelector />
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
