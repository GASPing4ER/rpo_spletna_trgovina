import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";

const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-footer flex justify-between items-center border-t py-28 px-40 text-textFooter">
      <div className="flex flex-col gap-6">
        {" "}
        <h1>
          <Link
            href="/"
            className="text-xs bg-primary py-2 px-4 text-black font-bold"
          >
            LOGO
          </Link>
        </h1>
        <p className="max-w-[384px] text-sm">{t("description")}</p>
      </div>
      <div className="flex gap-8">
        <Image src="/icons/twitter.svg" alt="twitter" width={16} height={16} />
        <Image
          src="/icons/facebook.svg"
          alt="facebook"
          width={16}
          height={16}
          className="invert-[green]"
        />
        <Image src="/icons/tiktok.svg" alt="tiktok" width={16} height={16} />
        <Image
          src="/icons/instagram.svg"
          alt="instagram"
          width={16}
          height={16}
        />
      </div>
    </footer>
  );
};

export default Footer;
