// Header Component
import { Navigation } from "@/components";
import { LanguageSelector } from "@/components";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="w-full h-20 fixed top-0 left-0 border flex justify-between items-center bg-white px-10 z-20">
      <h1>
        <Link
          href="/"
          className="text-xs bg-gray-400 py-2 px-4 text-white font-bold"
        >
          LOGO
        </Link>
      </h1>{" "}
      {/* TODO: Logo tukaj! */}
      <Navigation />
      <div className="flex items-center gap-4">
        <Cart />
        <Link href="/profile">
          <Image src="/icons/user.svg" alt="user" width={20} height={20} />
        </Link>
        {/* TODO: Izbira jezika tukaj */}
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
