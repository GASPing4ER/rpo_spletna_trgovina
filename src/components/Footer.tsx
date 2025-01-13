import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-footer flex flex-col sm:flex-row gap-8 justify-between items-center border-t py-12 px-20 text-textFooter">
      <div className="flex flex-col items-center sm:items-start gap-6">
        <h1>
          <Link href="/" className="text-xs py-2 px-4 text-white font-bold">
            <Image src="/icons/logo.svg" width={150} height={75} alt="logo" />
          </Link>
        </h1>
        <p className="max-w-[384px] text-sm">{t("description")}</p>
      </div>
      <div className="flex gap-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path d="M23.643 4.937a9.654 9.654 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.72 9.72 0 01-3.105 1.185 4.916 4.916 0 00-8.37 4.482 13.95 13.95 0 01-10.125-5.14 4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616v.06a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.6 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.935 13.935 0 007.557 2.213c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.015-.636a9.993 9.993 0 002.457-2.548z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V10.41h3.128V7.794c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.099 2.797.143v3.24l-1.92.001c-1.505 0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.296h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path d="M12 2c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v1.82c.977.714 2.2 1.18 3.5 1.18h1c.553 0 1 .447 1 1v3c0 .553-.447 1-1 1h-1.24c-.785 0-1.55-.126-2.28-.364v5.71c0 3.866-3.582 7.057-7.835 6.604-3.483-.384-6.348-3.398-6.622-6.875C3.274 12.06 6.316 9 10 9h.167v3.044c-.473-.346-1.084-.528-1.71-.449-1.036.132-1.923 1.006-2.037 2.042-.17 1.57 1.14 2.863 2.696 2.696 1.072-.117 1.909-1.058 1.984-2.123.01-.129.014-5.54.014-5.54V2z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
