// Header Component

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-20 fixed top-0 left-0 border flex justify-between items-center bg-white">
      <div>
        {/* TODO: Nakupovalni meni tukaj */}
        {/* TODO: Ostali linki do strani tukaj */}
      </div>
      <h1>
        <Link href="/">LOGO ALNEKI</Link>
      </h1>{" "}
      {/* TODO: Logo tukaj! */}
      <div>
        {/* TODO: Izbira jezika tukaj */}
        {/* TODO: Ikona za uporabnika tukaj */}
        {/* TODO: Košarica tukaj */}
      </div>
    </header>
  );
};

export default Header;
