import { navigationData } from "@/constants";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-6 font-semibold">
        {navigationData.map((navItem) => (
          <li key={navItem.slug}>
            <Link href={`/${navItem.slug}`}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
