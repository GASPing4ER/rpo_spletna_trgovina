"use client";

import { TProduct } from "@/types";
import { useLocale } from "next-intl"; // Import useLocale hook

const Specifications = ({ product }: { product: TProduct }) => {
  const locale = useLocale(); // Get the current locale ('sl' or 'en')

  // Dynamically choose labels based on locale
  const labels = locale === "en"
    ? [
        { label: product.details_Label_en, value: product.details_Value_en },
        { label: product.details_Label_2_en, value: product.details_Value_2_en },
        { label: product.details_Label_3_en, value: product.details_Value_3_en },
        { label: product.details_Label_4_en, value: product.details_Value_4_en },
      ]
    : [
        { label: product.details_Label, value: product.details_Value },
        { label: product.details_Label_2, value: product.details_Value_2 },
        { label: product.details_Label_3, value: product.details_Value_3 },
        { label: product.details_Label_4, value: product.details_Value_4 },
      ];

  return (
    <div className="bg-onBackground grid gap-6 rounded-md py-6 px-10">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {locale === "en" ? "Product Specifications" : "Specifikacije izdelka"}
      </h2>
      <div className="grid gap-4">
        {labels.map(({ label, value }, idx) => (
          <div
            className="flex justify-between border-b last:border-b-0 py-2"
            style={{ borderColor: "separator" }}
            key={idx}
          >
            <h3 className="text-lg font-semibold">{label}</h3>
            <p className="text-muted-foreground">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
