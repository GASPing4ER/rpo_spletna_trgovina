import { getUserData } from "@/actions/profile";
import { CheckoutForm, CheckoutProductsDisplay } from "@/components";

const CheckoutPage = async () => {
  const user = await getUserData();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row pt-[68px]">
      <div className="flex-1">
        <CheckoutForm user={user.data || null} />
      </div>
      <div className="flex-1 bg-background">
        <CheckoutProductsDisplay />
      </div>
    </div>
  );
};

export default CheckoutPage;
