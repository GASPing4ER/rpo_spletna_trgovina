import { getUserData } from "@/actions/profile";
import { CheckoutForm, CheckoutProductsDisplay } from "@/components";

const CheckoutPage = async () => {
  const user = await getUserData();

  return (
    <div className="min-h-screen flex pt-[68px]">
      <div className="flex-1">
        <CheckoutForm user={user.data || null} />
      </div>
      <div className="flex-1 bg-gray-200">
        <CheckoutProductsDisplay />
      </div>
    </div>
  );
};

export default CheckoutPage;