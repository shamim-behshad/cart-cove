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
  handleIncreaseProductQty: (id: number) => void;
  getProductQty: (id:number) => number;
  cartTotalQty: number;
};

const ShopingCartContext = createContext({} as TShopingCartContext);

export const useShopingCartContext = () => {
  return useContext(ShopingCartContext);
};

export function ShopingCartContextProvider({
  children,
}: ShopingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0
  };

  const cartTotalQty = cartItems.reduce((totalQty, item)=>{
    return totalQty + item.qty
  }, 0);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let isProductExist = currentItem.find((item) => item.id == id) == null;

      if (isProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShopingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty, getProductQty, cartTotalQty }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
