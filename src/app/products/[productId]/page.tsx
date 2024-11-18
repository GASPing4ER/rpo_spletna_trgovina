import { ProductCard } from "@/components";
import { Button } from "@/components/ui/button";
import { productsDummyData } from "@/constants";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  const product = productsDummyData.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <main className="flex flex-col">
      <section className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col items-start gap-6">
            <Image
              src={product.imgUrl}
              alt="Product Image"
              width={600}
              height={600}
              className="rounded-lg w-full aspect-square object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-lg">
              {product.description}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 fill-yellow-400" />
                <StarIcon className="w-5 h-5 fill-yellow-400" />
                <StarIcon className="w-5 h-5 fill-yellow-400" />
                <StarIcon className="w-5 h-5 fill-yellow-400" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <p className="text-lg font-semibold">4.3 (120 reviews)</p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-bold">${product.price}</h2>
              <Button size="lg">Add to Cart</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Product Details
            </h2>
            <div className="grid gap-4 text-muted-foreground">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsDummyData
                .filter((product) => product.id !== productId)
                .splice(0, 3)
                .map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
