import { getProductReviews } from "@/actions/product_reviews";
import { getProduct, getProducts } from "@/actions/products";
import { getUserData } from "@/actions/profile";
import { ProductCard } from "@/components";
import ReviewsSection from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  try {
    const [
      productResponse,
      productReviewsResponse,
      productsResponse,
      userResponse,
    ] = await Promise.all([
      getProduct(productId),
      getProductReviews(productId),
      getProducts(),
      getUserData(),
    ]);

    const product = productResponse?.data;
    const productReviews = productReviewsResponse?.data || [];
    const products = productsResponse?.data || [];
    const user = userResponse.data;

    if (!product) {
      return <div>Product not found!</div>;
    }

    const productRating = productReviews.length
      ? productReviews.reduce((sum, review) => sum + review.rating, 0) /
        productReviews.length
      : 0;

    const relatedProducts = products
      .filter((item) => item.id !== productId)
      .slice(0, 3);

    return (
      <main className="flex flex-col">
        {/* Product Details */}
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6">
            <ImageSection />
            <DetailsSection
              product={product}
              productRating={productRating}
              reviewCount={productReviews.length}
            />
          </div>
        </section>

        {/* Product Information */}
        <section className="pb-12 md:pb-24 lg:pb-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <ProductInfo
              title="Product Details"
              content={product.description}
            />
            <Specifications />
            <ReviewsSection
              user={user}
              productId={productId}
              initialReviews={productReviews}
            />
            <RelatedProducts products={relatedProducts} />
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error loading product details:", error);
    return <div>Failed to load product details. Please try again later.</div>;
  }
}

const ImageSection = () => (
  <div className="flex flex-col items-start gap-6">
    <Image
      src="/images/product-placeholder.png"
      alt="Product Image"
      width={600}
      height={600}
      className="rounded-lg w-full aspect-square object-cover"
    />
  </div>
);

const DetailsSection = ({
  product,
  productRating,
  reviewCount,
}: {
  product: TProduct;
  productRating: number;
  reviewCount: number;
}) => (
  <div className="flex flex-col items-start gap-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
      {product.name}
    </h1>
    <p className="text-muted-foreground text-lg">{product.description}</p>
    <div className="flex items-center gap-4">
      <RatingDisplay rating={productRating} />
      <p className="text-lg font-semibold">
        {productRating.toFixed(1)} ({reviewCount} reviews)
      </p>
    </div>
    <div className="flex items-center gap-4">
      <h2 className="text-4xl font-bold">${product.price}</h2>
      <Button size="lg">Add to Cart</Button>
    </div>
  </div>
);

const RatingDisplay = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`w-5 h-5 ${
        index < Math.round(rating)
          ? "fill-yellow-400"
          : "fill-muted stroke-muted-foreground"
      }`}
    />
  ));
  return <div className="flex items-center gap-1">{stars}</div>;
};

const ProductInfo = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <div className="grid gap-6">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    <div className="grid gap-4 text-muted-foreground">
      <p>{content}</p>
    </div>
  </div>
);

const Specifications = () => (
  <div className="grid gap-6">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
      Product Specifications
    </h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {[
        {
          label: "Material",
          value: "60% combed ringspun cotton, 40% polyester jersey",
        },
        { label: "Fit", value: "Regular fit, true to size" },
        {
          label: "Care Instructions",
          value: "Machine wash cold, tumble dry low",
        },
        { label: "Warranty", value: "3 years" },
        {
          label: "Link to original page",
          value: (
            <Link href="/" className="text-muted-foreground">
              www.originalpage.com
            </Link>
          ),
        },
      ].map(({ label, value }, idx) => (
        <div className="grid gap-2" key={idx}>
          <h3 className="text-lg font-semibold">{label}</h3>
          <p className="text-muted-foreground">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

const RelatedProducts = ({ products }: { products: TProduct[] }) => (
  <div className="grid gap-6">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
      Related Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  </div>
);
