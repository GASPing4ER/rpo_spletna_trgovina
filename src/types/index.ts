export type TProduct = {
  id: string;
  branch_id: string;
  created_at: string; // ISO 8601 format (e.g., "2024-12-16T13:25:41.053832+00:00")
  name: string;
  name_en: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  category: string;
  brand: string;
  imgUrl_2: string;
  imgUrl_3: string;
  details_Label: string;
  details_Label_2: string;
  details_Label_3: string;
  details_Label_4: string;
  details_Value: string;
  details_Value_2: string;
  details_Value_3: string;
  details_Value_4: string;
  details_Label_en: string;
  details_Label_2_en: string;
  details_Label_3_en: string;
  details_Label_4_en: string;
  details_Value_en: string;
  details_Value_2_en: string;
  details_Value_3_en: string;
  details_Value_4_en: string;
  description_en: string;
};

export type TProductReview = {
  id: string;
  user_id: string;
  product_id: string;
  rating: number;
  title: string;
  description: string;
  created_at: Date;
};

export type TProductWithQuantity = {
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
  quantity: number;
};

export type TCartProduct = {
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

export type TUser = {
  id: string;
  user_auth_id?: string;
  is_guest: boolean;
  email: string;
  first_name: string;
  last_name: string;
  bank_details: {
    full_name: string;
    account_number: string;
    expiration_date: string;
    ccv: string;
  };
  delivery_details: {
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    postal: string;
  };
  created_at: Date;
};

export type TBranch = {
  id: string;
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  created_at: Date;
  working_hours: string;
  manager: string;
  contact: string;
};

export type TBranchNotification = {
  id: number;
  name: string;
  created_at: Date;
  en_description: string;
  sl_description: string;
};

export type TNavigation = {
  sl_title: string;
  en_title: string;
  slug: string;
};

export type TOrder = {
  id: string;
  user_id: string;
  total_price: number;
  status: "completed" | "pending" | "shipped" | "canceled";
  created_at: Date;
};

export type TOrderData = Omit<TOrder, "id" | "created_at">;

export type TOrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  created_at: Date;
};

export type TOrderItemData = Omit<TOrderItem, "id" | "created_at">;

// Example type definition for TOrderWithItems
export type TOrderWithItems = TOrder & {
  order_items: (TOrderItem & { products: TProduct })[];
};

export type TCategory = {
  sl_title: string;
  en_title: string;
  slug: string;
  iconUrl: string;
  slugId: string;
  brands: string[];
};

export type NewUserDataProps = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
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

export type BankDetailsProps = {
  full_name: string;
  account_number: string;
  expiration_date: string;
  ccv: string;
};

export type DeliveryDetailsProps = {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  postal: string;
};

export type ShopClientProps = {
  products: TProduct[];
  category: string;
  page: number;
};
