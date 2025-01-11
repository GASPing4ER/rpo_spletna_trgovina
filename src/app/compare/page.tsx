import { getProducts } from "@/actions/products";
import CompareComponent from "@/components/CompareComponent";

const ComparePage = async () => {
  const { data: products } = await getProducts();

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-24">
        <p className="text-xl">No products available for comparison.</p>
      </div>
    );
  }

  return <CompareComponent products={products} />;
};

export default ComparePage;
