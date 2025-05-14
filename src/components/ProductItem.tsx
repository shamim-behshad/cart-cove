import React from "react";

export interface ProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

function ProductItem({image,title,price}: ProductItemProps) {
  return (
    <div className="shadow-md">
      <img
        src={image}
        alt="picture of a camera"
      />
      <div className="p-2">
        <h3>{title}</h3>
        <p>
          price: <span>{price}$</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
