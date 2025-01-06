import { getProductReviews } from "@/actions/product_reviews";
import { getProduct, getProducts } from "@/actions/products";
import { getUserData } from "@/actions/profile";
import { ProductCard } from "@/components";
import AddToCartButton from "@/components/AddToCartButton";
import ReviewsSection from "@/components/ReviewsSection";
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
        <section className="bg-muted md:py-24 lg:py-32 py-6 px-20">
          <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6">
            <ImageSection product={product} />
            <DetailsSection
              product={product}
              productRating={productRating}
              reviewCount={productReviews.length}
            />
          </div>
        </section>

        {/* Product Information */}
        <section className="bg-gray pb-12 md:pb-24 lg:pb-32 pt-8">
          <div className="container grid gap-12 px-4 md:px-6 max-w-7xl mx-auto">
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

const ImageSection = ({ product }: { product: TProduct }) => (
  <div className="flex gap-4">
    {/* Thumbnails Section */}
    <div className="flex flex-col gap-2">
      {[product.imgUrl, product.imgUrl, product.imgUrl].map((url, idx) => (
        <Image
          key={idx}
          src={url}
          alt={`${product.name} thumbnail ${idx + 1}`}
          width={100}
          height={100}
          className="rounded-lg object-cover cursor-pointer hover:opacity-80"
        />
      ))}
    </div>

    {/* Main Image Section */}
    <div>
      <Image
        src={product.imgUrl}
        alt={product.name}
        width={600}
        height={600}
        className="rounded-lg object-contain"
      />
    </div>
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
}) => {
  const MAX_LENGTH = 200; // Maximum number of characters before truncation

  // Truncate the description if it's longer than MAX_LENGTH
  const truncatedDescription =
    product.description.length > MAX_LENGTH
      ? product.description.substring(0, MAX_LENGTH) + "..."
      : product.description;

  return (
    <div className="flex flex-col items-start gap-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {product.name}
      </h1>
      <p className="text-muted-foreground text-lg">
        {truncatedDescription}{" "}
        {product.description.length > MAX_LENGTH && (
          <a href="#product-details" className="text-grey underline">
            več
          </a>
        )}
      </p>
      <div className="flex items-center gap-4">
        <RatingDisplay rating={productRating} />
        <p className="text-lg font-semibold">
          {productRating.toFixed(1)} ({reviewCount} reviews)
        </p>
      </div>
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold">${product.price}</h2>
      </div>
      <div className="w-full">
        <AddToCartButton product={product} />
      </div>

      {/* Gray Boxes Section */}
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Delivery Time Box */}
        <div className="flex items-center gap-2 p-4 bg-gray rounded-md">
          <Image
            src="/icons/delivery.png"
            alt="Čas dostave"
            width={24}
            height={24}
          />
          <div>
            <p className="text-sm font-medium">Čas dostave</p>
            <p className="text-lg font-semibold">1-2 dni</p>
          </div>
        </div>

        {/* In Stock Box */}
        <div className="flex items-center gap-2 p-4 bg-gray rounded-md">
          <Image
            src="/icons/domov.png"
            alt="Čas dostave"
            width={24}
            height={24}
          />
          <div>
            <p className="text-sm font-medium">Na zalogi</p>
            <p className="text-lg font-semibold">Danes</p>
          </div>
        </div>

        {/* Warranty Box */}
        <div className="flex items-center gap-2 p-4 bg-gray rounded-md">
          <Image
            src="/icons/guarantee.png"
            alt="Čas dostave"
            width={24}
            height={24}
          />
          <div>
            <p className="text-sm font-medium">Garancija</p>
            <p className="text-lg font-semibold">1 leto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RatingDisplay = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`w-6 h-6 ${
        index < Math.round(rating)
          ? "fill-accent stroke-accent"
          : "fill-gray stroke-accent"
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
  <div
    id="product-details"
    className="bg-white grid gap-6 rounded-md py-6 px-10"
  >
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    <div className="grid gap-4 text-muted-foreground">
      <p>{content}</p>
    </div>
  </div>
);

const Specifications = () => (
  <div className="bg-white grid gap-6 rounded-md py-6 px-10">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
      Product Specifications
    </h2>
    <div className="grid gap-4">
      {[
        {
          label: "Diagonala zaslona",
          value: "43,9 cm (17,3in)",
        },
        { label: "Družina procesorja", value: "AMD Ryzen 7 7730U procesor" },
        {
          label: "Ločljivost zaslona",
          value: "1920x1080",
        },
        { label: "Kapaciteta RAM pomnilnika [GB]", value: "16" },
        {
          label: "Link to original page",
          value: (
            <Link href="/" className="text-muted-foreground">
              www.originalpage.com
            </Link>
          ),
        },
      ].map(({ label, value }, idx) => (
        <div
          className="flex justify-between border-b last:border-b-0 py-2"
          style={{ borderColor: "rgba(198, 198, 198, 0.75)" }}
          key={idx}
        >
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
