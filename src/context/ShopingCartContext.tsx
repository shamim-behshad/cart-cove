"use client";
import { createContext, useState } from "react";

type ShopingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
    id: number;
    qty: number;
}

const ShopingCartContext = createContext({});

export function ShopingCartContextProvider({
  children,
}: ShopingCartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItems[]>([])

  return (
    <ShopingCartContext.Provider value={{}}>
      {children}
    </ShopingCartContext.Provider>
  );
}
