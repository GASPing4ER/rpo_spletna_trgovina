"use client";

import { TProduct } from "@/types";
import Image from "next/image";
import { useState } from "react";

const ImageSection = ({ product }: { product: TProduct }) => {
  const [imageUrl, setImageUrl] = useState(product.imgUrl);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        {[product.imgUrl, product.imgUrl_2, product.imgUrl_3].map(
          (url, idx) => (
            <Image
              onClick={() => setImageUrl(url)}
              key={idx}
              src={url}
              alt={`${product.name} thumbnail ${idx + 1}`}
              width={100}
              height={100}
              className={`rounded-lg object-cover cursor-pointer hover:opacity-80 ${
                imageUrl === url ? "border border-black" : ""
              }`}
            />
          )
        )}
      </div>

      <div>
        <Image
          src={imageUrl}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
};
export default ImageSection;
