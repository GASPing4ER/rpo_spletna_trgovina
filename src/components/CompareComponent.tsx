"use client";

import { TProduct } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const CompareComponent = ({ products }: { products: TProduct[] }) => {
  const t = useTranslations("Compare");
  const locale: string = useLocale();

  const [selectedProduct1, setSelectedProduct1] = useState<TProduct | null>(
    null
  );
  const [selectedProduct2, setSelectedProduct2] = useState<TProduct | null>(
    null
  );

  const handleProduct1Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const product = products.find((p) => p.id === event.target.value) || null;
    setSelectedProduct1(product);
    setSelectedProduct2(null); // Reset the second selection when the first changes
  };

  const handleProduct2Change = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const product = products.find((p) => p.id === event.target.value) || null;
    setSelectedProduct2(product);
  };

  const filteredProductsForSecondDropdown = selectedProduct1
    ? products.filter(
        (product) => product.category === selectedProduct1.category
      )
    : [];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center gap-8 p-6 lg:p-24 bg-gray-50">
      <h1 className="text-4xl text-textPrimary font-bold text-gray-800 mb-6">
        {t("compare_title")}
      </h1>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 w-full max-w-6xl">
        {/* Dropdown for first product */}
        <div className="flex-1">
          <label className="block text-lg text-textPrimary font-medium text-gray-700 mb-2">
            {t("product_label1")}:
          </label>
          <select
            className="w-full bg-onBackground border border-border text-textPrimary rounded-md p-3 shadow-sm focus:border-primary focus:ring-primary"
            value={selectedProduct1?.id || ""}
            onChange={handleProduct1Change}
          >
            <option value="" disabled>
              {t("option_select1")}
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {locale === "en" ? product.name_en : product.name}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for second product */}
        <div className="flex-1">
          <label className="block text-lg text-textPrimary font-medium text-gray-700 mb-2">
            {t("product_label2")}:
          </label>
          <select
            className="w-full bg-onBackground border border-border text-textPrimary rounded-md p-3 shadow-sm focus:border-primary focus:ring-primary"
            value={selectedProduct2?.id || ""}
            onChange={handleProduct2Change}
            disabled={!selectedProduct1}
          >
            <option value="" disabled>
              {selectedProduct1 ? t("option_select2") : t("option_select3")}
            </option>
            {filteredProductsForSecondDropdown.map((product) => (
              <option key={product.id} value={product.id}>
                {locale === "en" ? product.name_en : product.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedProduct1 && selectedProduct2 && (
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mt-8">
          <ProductDetailsCard product={selectedProduct1} />
          <ProductDetailsCard product={selectedProduct2} />
        </div>
      )}
    </div>
  );
};

export default CompareComponent;

const ProductDetailsCard = ({ product }: { product: TProduct }) => {
  const t = useTranslations("Compare");
  const locale: string = useLocale();

  return (
    <div className="flex-1 bg-surface shadow-lg rounded-md p-6 border border-border">
      <h2 className="text-2xl font-bold text-textPrimary mb-4">
        {product.name}
      </h2>
      {product.imgUrl && (
        <div className="w-full h-48 mb-4">
          <Image
            src={product.imgUrl}
            alt={product.name}
            width={100}
            height={100}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      )}
      <ul className="space-y-3 text-textPrimary">
        <li className="flex justify-between">
          <span className="font-medium">{t("price")}:</span>
          <span>${product.price}</span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">
            {locale === "en" ? product.details_Label_en : product.details_Label}
            :
          </span>
          <span>
            {locale === "en" ? product.details_Value_en : product.details_Value}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">
            {locale === "en"
              ? product.details_Label_2_en
              : product.details_Label_2}
            :
          </span>
          <span>
            {locale === "en"
              ? product.details_Value_2_en
              : product.details_Value_2}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">
            {locale === "en"
              ? product.details_Label_3_en
              : product.details_Label_3}
            :
          </span>
          <span>
            {locale === "en"
              ? product.details_Value_3_en
              : product.details_Value_3}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">
            {locale === "en"
              ? product.details_Label_4_en
              : product.details_Label_4}
            :
          </span>
          <span>
            {locale === "en"
              ? product.details_Value_4_en
              : product.details_Value_4}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="font-medium">{t("brand")}:</span>
          <span>{product.brand}</span>
        </li>
      </ul>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-textPrimary">
          {t("description")}
        </h3>
        <p className="text-textPrimary mt-2">
          {locale === "en" ? product.description_en : product.description}
        </p>
      </div>
    </div>
  );
};
