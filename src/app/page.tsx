import { ProductCard } from "@/components";
import { productsDummyData } from "@/constants";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <ProductCard product={productsDummyData[0]} />
    </main>
  );
}
