import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-between items-center py-28 px-40">
      <div className="flex flex-col gap-6">
        {" "}
        <h1>
          <Link
            href="/"
            className="text-xs bg-gray-400 py-2 px-4 text-black font-bold"
          >
            LOGO
          </Link>
        </h1>
        <p className="max-w-[384px] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="flex gap-8">
        <Image src="/icons/twitter.svg" alt="twitter" width={16} height={16} />
        <Image
          src="/icons/facebook.svg"
          alt="facebook"
          width={16}
          height={16}
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
