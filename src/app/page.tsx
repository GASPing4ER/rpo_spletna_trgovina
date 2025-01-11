import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { categoriesData } from "@/constants";
import { ArrowUpIcon } from "lucide-react";
import { AnimatedCarousel, AnimatedCategory } from "@/components";
import { getProducts } from "@/actions/products";

export default async function Home() {
  const { data: products } = await getProducts();
  const t = await getTranslations("Home");

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Hero */}
      <section className="w-full bg-hero mt-20 text-heroTitle">
        <div className="flex flex-col gap-4 hero-bg h-full w-full p-24">
          <h1 className="text-8xl font-extralight">
            Samsung{" "}
            <span className="block">
              Galaxy <span className="font-bold">S24</span>
            </span>
          </h1>
          <p className="text-lg text-heroSubTitle font-semibold">
            {t("carousel_description")}
          </p>
          <button className="text-left border border-heroBorder py-4 px-14 rounded-[6px] w-fit font-medium text-lg">
            {t("carousel_button")}
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="flex flex-col gap-10 bg-background w-full py-20 px-40">
        <AnimatedCategory categories={categoriesData} initialIndex={0} />
      </section>

      {/* Carousels */}
      <section className="flex flex-col gap-10 bg-surface w-full py-20 px-40">
        <h2 className="text-2xl font-semibold text-textPrimary">
          {t("new_offers_title")}
        </h2>
        {products && <AnimatedCarousel products={products} initialIndex={0} />}
      </section>
      <section className="flex flex-col gap-10 bg-surface w-full pb-20 px-40">
        <h2 className="text-2xl font-semibold text-textPrimary">
          {t("discount_title")}
        </h2>
        {products && <AnimatedCarousel products={products} initialIndex={0} />}
      </section>

      {/* Second Hero */}
      <section className="w-full bg-hero pt-20 flex flex-col relative text-heroTitle">
        <div className="flex flex-col gap-4 h-full w-full p-24">
          <h1 className="text-8xl font-extralight">
            Nintendo <span className="font-bold">Switch</span>
          </h1>
          <p className="text-lg text-heroSubTitle font-semibold">
            {t("nintendo_description")}
          </p>
          <button className="text-left border border-heroBorder py-4 px-14 rounded-[6px] w-fit font-medium text-lg">
            {t("nintendo_button")}
          </button>
        </div>
        <Image
          src="/images/nintendo-switch.png"
          alt="nintendo switch"
          width={800}
          height={400}
          className="lg:absolute object-cover lg:right-0 block"
        />
      </section>

      {/* Favorites */}
      <section className="flex flex-col gap-10 bg-surface w-full py-20 px-8 md:px-20 lg:px-40 text-textPrimary">
        <h2 className="text-2xl font-semibold">{t("favorites_title")}</h2>
        <div className="flex flex-col sm:flex-row items-center gap-10 bg-onSurface py-11 pl-14">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between">
              <h3 className="text-3xl">
                Dell <span className="font-semibold">XPS 15</span>
              </h3>
              <ArrowUpIcon width={32} height={32} />
            </div>
            <p>{t("dell_xps_description")} </p>
            <button className="text-left border border-surfaceBorder py-4 px-14 rounded-[6px] w-fit font-medium text-lg">
              {t("dell_xps_button")}
            </button>
            <hr className="border-t-1 border-border" />
            <h3 className="text-3xl">
              MacBook <span className="font-semibold">Pro</span>
            </h3>
            <hr className="border-t-1 border-border" />
            <h3 className="text-3xl">
              Sony <span className="font-semibold">CH-520</span>
            </h3>
          </div>
          <div className="flex-1">
            <Image
              src="/images/deli-xps.png"
              alt="deli xps"
              width={830}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Second Carousel */}
      <section className="flex flex-col gap-10 bg-surface w-full pb-20 px-40">
        <h2 className="text-2xl font-semibold text-textPrimary">
          {t("discount_title")}
        </h2>
        {products && <AnimatedCarousel products={products} initialIndex={0} />}
      </section>

      {/* Big Sale */}
      <section className="w-full bg-hero pt-20 text-heroTitle flex relative">
        <div className="flex flex-col items-center justify-center gap-4 h-full w-full px-8 py-24 md:p-24 z-20">
          <h1 className="text-8xl font-extralight">
            {t("big_sale_main_heading-1")}{" "}
            <span className="font-bold">{t("big_sale_main_heading-2")}</span>
          </h1>
          <p className="text-lg text-heroSubTitle font-semibold">
            {t("big_sale_description")}
          </p>
          <button className="text-left border border-heroBorder py-4 px-14 rounded-[6px] w-fit font-medium text-lg mt-10">
            {t("big_sale_button")}
          </button>
        </div>
        <Image
          src="/images/before-footer/img-1.png"
          alt="nintendo switch 1"
          width={338}
          height={182}
          className="absolute top-0 left-[230px]"
        />
        <Image
          src="/images/before-footer/img-2.png"
          alt="nintendo switch 2"
          width={237}
          height={192}
          className="absolute top-0 left-10 z-10"
        />
        <Image
          src="/images/before-footer/img-3.png"
          alt="nintendo switch 3"
          width={370}
          height={262}
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/images/before-footer/img-4.png"
          alt="nintendo switch 4"
          width={180}
          height={365}
          className="absolute top-0 right-0"
        />
        <Image
          src="/images/before-footer/img-5.png"
          alt="nintendo switch 5"
          width={404}
          height={321}
          className="absolute bottom-0 right-0"
        />
      </section>
    </main>
  );
}
