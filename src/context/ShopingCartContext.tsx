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
  getProductQty: (id: number) => number;
  cartTotalQty: number;
  handleDecreaseProductQty: (id: number) => void;
  handeDeleteProduct: (id: number) => void;
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
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
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

  const handeDeleteProduct = (id: number) => {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id != id);
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let isLastOne = currentItem.find((item) => item.id == id)?.qty == 1;

      if (isLastOne) {
        return currentItem.filter((item) => item.id != id);
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  console.log(cartItems)

  return (
    <ShopingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        getProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        handeDeleteProduct,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
