"use client";

import { TProduct, TProductWithQuantity } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type TCartContext = {
  products: TProductWithQuantity[];
  setProducts: Dispatch<SetStateAction<TProductWithQuantity[]>>;
  handleAddProduct: (newProduct: TProduct) => Promise<void>;
  handleEditProduct: (
    productId: TProductWithQuantity["id"],
    editedProduct: TProductWithQuantity
  ) => Promise<void>;
  handleDeleteProduct: (id: TProduct["id"]) => Promise<void>;
};

export const CartContext = createContext<TCartContext | null>(null);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  // state
  const localCart: TProductWithQuantity[] = (() => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  })();

  const [cart, setCart] = useState<TProductWithQuantity[]>(localCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // handlers
  const handleAddProduct = async (newProduct: TProduct) => {
    console.log("Adding new item...");
    setCart((prevCart) => {
      const exist = prevCart.find((product) => product.id === newProduct.id);
      if (exist) {
        // If the product exists, increase its quantity
        return prevCart.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...newProduct, quantity: 1 }];
      }
    });
  };

  const handleEditProduct = async (
    productId: TProductWithQuantity["id"],
    editedProduct: TProductWithQuantity
  ) => {
    if (editedProduct.quantity !== 0) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId ? editedProduct : product
        )
      );
    } else {
      await handleDeleteProduct(productId);
    }
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
