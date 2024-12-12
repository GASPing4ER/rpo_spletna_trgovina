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
  brand: string;
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

export type TCategory = {
  title: string;
  slug: string;
  iconUrl: string;
  slugId: string;
  brands: string[];
};

export type NewUserDataProps = {
  email: string;
  username: string;
  password: string;
};

export type UserDataWithoutPassword = Omit<
  NewUserDataProps,
  "password" | "confirmPassword"
>;

export type LoginUserProps = {
  email: string;
  password: string;
};

export type AnimatedCarouselProps = {
  products: TProduct[];
  initialIndex: number;
};

export type AnimatedCategoryProps = {
  categories: TCategory[];
  initialIndex: number;
};
