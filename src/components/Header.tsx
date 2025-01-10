// Header Component
import { Navigation } from "@/components";
import { LanguageSelector, ThemeSelector } from "@/components";
import Link from "next/link";
import Cart from "./Cart";
import UserProfile from "./User";

const Header = () => {
  return (
    <header className="w-full h-20 fixed top-0 left-0 border-b border-border flex justify-between items-center bg-navbar px-10 z-20">
      <h1>
        <Link
          href="/"
          className="text-xs bg-primary py-2 px-4 text-white font-bold"
        >
          LOGO
        </Link>
      </h1>{" "}
      {/* TODO: Logo tukaj! */}
      <Navigation />
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
