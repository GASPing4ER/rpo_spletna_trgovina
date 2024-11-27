import { categoriesData, productsDummyData } from "@/constants";
import { ArrowRightIcon, ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="w-full hero-bg-color mt-20 text-white">
        <div className="flex flex-col gap-4 hero-bg h-full w-full p-24">
          <h1 className="text-8xl font-extralight">
            Samsung{" "}
            <span className="block">
              Galaxy <span className="font-bold">S24</span>
            </span>
          </h1>
          <p className="text-lg text-[#909090] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="text-left border border-white py-4 px-14 rounded-[6px] w-fit font-medium text-lg">
            Preveri več
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-10 bg-[#EDEDED] w-full py-20 px-40">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Išči po kategoriji</h2>
          <ArrowRightIcon />
        </div>
        <ul className="flex gap-8">
          {categoriesData.map((category) => (
            <li
              key={category.slug}
              className="flex-1 flex flex-col items-center justify-center h-[128px] bg-white rounded-[15px]"
            >
              <Link
                href={category.slug}
                className="flex flex-col items-center gap-1"
              >
                <Image
                  src={category.iconUrl}
                  alt="kategorija"
                  width={25}
                  height={25}
                />
                <h3>{category.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-10 bg-white w-full py-20 px-40">
        <h2 className="text-2xl font-semibold">Novo v ponudbi</h2>
        <div className="flex gap-10">
          {Array.from({ length: 4 }).map((_, index) => {
            const product = productsDummyData[0];
            return (
              <div
                key={index}
                className="bg-[#F6F6F6] flex-1 h-[438px] flex flex-col items-center pt-14 px-4 gap-4"
              >
                <Image
                  src={product.imgUrl}
                  alt="product"
                  width={246}
                  height={185}
                />
                <h3 className="text-center">
                  {product.name}, {product.description}
                </h3>
                <p className="text-2xl font-bold">{product.price},00 €</p>
                <button className="px-16 py-3 bg-[#4156D8] text-white rounded-[8px]">
                  Kupi zdaj
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-10 bg-white w-full pb-20 px-40">
        <h2 className="text-2xl font-semibold">Znižanje do -50%</h2>
        <div className="flex gap-10">
          {Array.from({ length: 4 }).map((_, index) => {
            const product = productsDummyData[0];
            return (
              <div
                key={index}
                className="bg-[#F6F6F6] flex-1 h-[438px] flex flex-col items-center pt-14 px-4 gap-4"
              >
                <Image
                  src={product.imgUrl}
                  alt="product"
                  width={246}
                  height={185}
                />
                <h3 className="text-center">
                  {product.name}, {product.description}
                </h3>
                <p className="text-2xl font-bold">{product.price},00 €</p>
                <button className="px-16 py-3 bg-[#4156D8] text-white rounded-[8px]">
                  Kupi zdaj
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full hero-bg-color mt-20 text-white flex relative">
        <div className="flex flex-col gap-4 h-full w-full p-24">
          <h1 className="text-8xl font-extralight">
            Nintendo <span className="font-bold">Switch</span>
          </h1>
          <p className="text-lg text-[#909090] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="text-left border border-white py-4 px-14 rounded-[6px] w-fit font-medium text-lg">
            Preveri več
          </button>
        </div>
        <Image
          src="/images/nintendo-switch.png"
          alt="nintendo switch"
          width={800}
          height={400}
          className="absolute object-cover right-0"
        />
      </section>
      <section className="flex flex-col gap-10 bg-white w-full py-20 px-40">
        <h2 className="text-2xl font-semibold">Odkrij naše favorite</h2>
        <div className="flex items-center gap-10 bg-[#F5F5F5] py-11 pl-14">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between">
              <h3 className="text-3xl">
                Dell <span className="font-semibold">XPS 15</span>
              </h3>
              <ArrowUpIcon width={32} height={32} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="text-left border border-black py-4 px-14 rounded-[6px] w-fit font-medium text-lg">
              Preveri več
            </button>
            <hr className="h-[2px] bg-black" />
            <h3 className="text-3xl">
              MacBook <span className="font-semibold">Pro</span>
            </h3>
            <hr className="h-[2px] bg-black" />
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
      <section className="flex flex-col gap-10 bg-white w-full pb-20 px-40">
        <h2 className="text-2xl font-semibold">Znižanje do -50%</h2>
        <div className="flex gap-10">
          {Array.from({ length: 4 }).map((_, index) => {
            const product = productsDummyData[0];
            return (
              <div
                key={index}
                className="bg-[#F6F6F6] flex-1 h-[438px] flex flex-col items-center pt-14 px-4 gap-4"
              >
                <Image
                  src={product.imgUrl}
                  alt="product"
                  width={246}
                  height={185}
                />
                <h3 className="text-center">
                  {product.name}, {product.description}
                </h3>
                <p className="text-2xl font-bold">{product.price},00 €</p>
                <button className="px-16 py-3 bg-[#4156D8] text-white rounded-[8px]">
                  Kupi zdaj
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full hero-bg-color mt-20 text-white flex relative">
        <div className="flex flex-col items-center justify-center gap-4 h-full w-full p-24 z-20">
          <h1 className="text-8xl font-extralight">
            Velika <span className="font-bold">razprodaja</span>
          </h1>
          <p className="text-lg text-[#909090] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="text-left border border-white py-4 px-14 rounded-[6px] w-fit font-medium text-lg mt-10">
            Preveri ponudbo
          </button>
        </div>
        <Image
          src="/images/before-footer/img-1.png"
          alt="nintendo switch"
          width={338}
          height={182}
          className="absolute top-0 left-[230px]"
        />
        <Image
          src="/images/before-footer/img-2.png"
          alt="nintendo switch"
          width={237}
          height={192}
          className="absolute top-0 left-10 z-10"
        />
        <Image
          src="/images/before-footer/img-3.png"
          alt="nintendo switch"
          width={370}
          height={262}
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/images/before-footer/img-4.png"
          alt="nintendo switch"
          width={180}
          height={365}
          className="absolute top-0 right-0"
        />
        <Image
          src="/images/before-footer/img-5.png"
          alt="nintendo switch"
          width={404}
          height={321}
          className="absolute bottom-0 right-0"
        />
      </section>
    </main>
  );
}
