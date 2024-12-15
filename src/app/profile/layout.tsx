import { getUser } from "@/actions/auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  console.log(user);
  if (!user.id) {
    redirect("/login");
  }
  return <div>{children}</div>;
};

export default AuthLayout;
