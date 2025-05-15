"use client";
import { createContext, useContext, useState } from "react";

type ShopingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};

type TShopingCartContext = {
    cartItems: CartItems[];
}

const ShopingCartContext = createContext({} as TShopingCartContext);

export const useShopingCartContext = () => {
    return useContext(ShopingCartContext);
}

export function ShopingCartContextProvider({
  children,
}: ShopingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  return (
    <ShopingCartContext.Provider value={{cartItems}}>
      {children}
    </ShopingCartContext.Provider>
  );
}
