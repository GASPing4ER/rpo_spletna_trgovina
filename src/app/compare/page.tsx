import { getProducts } from "@/actions/products";
import CompareComponent from "@/components/CompareComponent";
import { getTranslations } from "next-intl/server";

const ComparePage = async () => {
  const { data: products } = await getProducts();
  const t = await getTranslations("Compare");

  if (!products || products.length === 0) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center p-24">
        <p className="text-xl">{t("no_products")}</p>
      </div>
    );
  }

  return <CompareComponent products={products} />;
};

export default ComparePage;
