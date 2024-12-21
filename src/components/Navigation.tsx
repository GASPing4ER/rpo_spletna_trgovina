import { navigationData } from "@/constants";
import { getUserLocale } from "../utils/lang/locale";
import Link from "next/link";

const Navigation = async () => {
  const locale = await getUserLocale();

  return (
    <nav>
      <ul className="flex gap-6 font-semibold">
        {navigationData.map((navItem) => (
          <li key={navItem.slug}>
            {locale === "sl" ? (
              <Link href={`/${navItem.slug}`}>{navItem.sl_title}</Link>
            ) : (
              <Link href={`/${navItem.slug}`}>{navItem.en_title}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
