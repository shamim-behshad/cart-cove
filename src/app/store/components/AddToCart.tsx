"use client"
import { useShopingCartContext } from "@/context/ShopingCartContext";
import React from "react";

interface AddToCartProps {
  id: string;
}



function AddToCart({id}: AddToCartProps) {
 const { cartItems,handleIncreaseProductQty,getProductQty, handleDecreaseProductQty} = useShopingCartContext();

 console.log(cartItems)

  return (
    <div className="mt-4">
      <button onClick={()=> handleIncreaseProductQty(parseInt(id))} className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
        +
      </button>
      <span className="mx-4">{getProductQty(parseInt(id))}</span>
      <button onClick={()=> handleDecreaseProductQty(parseInt(id))} className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
        -
      </button>
    </div>
  );
}

export default AddToCart;
