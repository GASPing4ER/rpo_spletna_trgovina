export type TProduct = {
  id: string;
  branch_id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imgUrl: string;
  created_at: Date;
};

export type TNavigation = {
  title: string;
  slug: string;
};

export type TOrder = {
  id: number;
  user_id: number;
  total_price: number;
  status: "completed" | "pending" | "shipped" | "canceled";
  created_at: string;
};
