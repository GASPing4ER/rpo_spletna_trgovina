"use client";

import { TProduct } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type CartContextProviderProps = {
  //   data: TProduct[];
  children: React.ReactNode;
};

type TCartContext = {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;
  handleAddProduct: (newProduct: TProduct) => Promise<void>;
  handleEditProduct: (
    productId: TProduct["id"],
    editedProduct: TProduct
  ) => Promise<void>;
  handleDeleteProduct: (id: TProduct["id"]) => Promise<void>;
};

export const CartContext = createContext<TCartContext | null>(null);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  // state
  const [cart, setCart] = useState<TProduct[]>([]);

  // handlers
  const handleAddProduct = async (newProduct: TProduct) => {
    setCart((prevCart) => [...prevCart, newProduct]);
  };

  const handleEditProduct = async (
    productId: TProduct["id"],
    editedProduct: TProduct
  ) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? editedProduct : product
      )
    );
  };

  const handleDeleteProduct = async (id: TProduct["id"]) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        products: cart,
        setProducts: setCart,
        handleAddProduct,
        handleEditProduct,
        handleDeleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
