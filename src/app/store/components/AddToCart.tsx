"use client"
import { useShopingCartContext } from "@/context/ShopingCartContext";
import React from "react";


function AddToCart() {
 const {} = useShopingCartContext()

  return (
    <div className="mt-4">
      <button className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
        +
      </button>
      <span className="mx-4">2</span>
      <button className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
        -
      </button>
    </div>
  );
}

export default AddToCart;
