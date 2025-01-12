import { getProductReviews } from "@/actions/product_reviews";
import { getProduct, getProducts } from "@/actions/products";
import { getUserData } from "@/actions/profile";
import { ProductCard } from "@/components";
import AddToCartButton from "@/components/AddToCartButton";
import ImageSection from "@/components/ImageSection";
import ReviewsSection from "@/components/ReviewsSection";
import { TProduct } from "@/types";
import { StarIcon, Truck, Store, BadgeCheck } from "lucide-react";

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
      return (
        <div className="flex min-h-screen bg-background text-textPrimary justify-center mt-20 p-20">
          Product not found!
        </div>
      );
    }

    const productRating = productReviews.length
      ? productReviews.reduce((sum, review) => sum + review.rating, 0) /
        productReviews.length
      : 0;

    const relatedProducts = products
      .filter((item) => item.id !== productId)
      .slice(0, 3);

    return (
      <main className="flex flex-col bg-surface text-textPrimary">
        {/* Product Details */}
        <section className="bg-muted py-24 lg:py-32 md:px-20">
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
        <section className="bg-background pb-12 md:pb-24 lg:pb-32 pt-8">
          <div className="container grid gap-12 px-4 md:px-6 max-w-7xl mx-auto">
            <ProductInfo
              title="Product Details"
              content={product.description}
            />
            <Specifications product={product} />
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
        <div className="flex items-center gap-2 p-4 bg-onSurface rounded-md">
          <Truck size={24} className="text-iconColor" />
          <div>
            <p className="text-sm font-medium">Čas dostave</p>
            <p className="text-lg font-semibold">1-2 dni</p>
          </div>
        </div>

        {/* In Stock Box */}
        <div className="flex items-center gap-2 p-4 bg-onSurface rounded-md">
          <Store size={24} className="text-iconColor" />
          <div>
            <p className="text-sm font-medium">Na zalogi</p>
            <p className="text-lg font-semibold">Danes</p>
          </div>
        </div>

        {/* Warranty Box */}
        <div className="flex items-center gap-2 p-4 bg-onSurface rounded-md">
          <BadgeCheck size={24} className="text-iconColor" />
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
          ? "fill-primary stroke-primary"
          : "fill-surface stroke-primary"
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
    className="bg-onBackground grid gap-6 rounded-md py-6 px-10"
  >
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    <div className="grid gap-4 text-muted-foreground text-xs sm:text-sm md:text-base">
      <p>{content}</p>
    </div>
  </div>
);

const Specifications = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-onBackground grid gap-6 rounded-md py-6 px-10">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Product Specifications
      </h2>
      <div className="grid gap-4">
        {[
          { label: product.details_Label, value: product.details_Value },
          { label: product.details_Label_2, value: product.details_Value_2 },
          { label: product.details_Label_3, value: product.details_Value_3 },
          { label: product.details_Label_4, value: product.details_Value_4 },
        ].map(({ label, value }, idx) => (
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

const RelatedProducts = ({ products }: { products: TProduct[] }) => (
  <div className="flex justify-center items-center">
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
  </div>
);
