"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Navigation } from "@/components";

const MobileMenu = ({ locale }: { locale: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="text-black"
        aria-label="Toggle Menu"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-navbar z-30 border-t border-border flex flex-col items-start p-6">
          <Navigation locale={locale} />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
