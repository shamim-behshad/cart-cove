"use client";
import { createContext, useContext, useState } from "react";

type ShopingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};

const ShopingCartContext = createContext({});

export const useShopingCartContext = () => {
    return useContext(ShopingCartContext);
}

export function ShopingCartContextProvider({
  children,
}: ShopingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  return (
    <ShopingCartContext.Provider value={{}}>
      {children}
    </ShopingCartContext.Provider>
  );
}
