import React from "react";

function ProductItem() {
  return (
    <div className="shadow-md">
      <img
        src="https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png"
        alt="picture of a camera"
      />
      <div className="p-2">
        <h3>Product 1</h3>
        <p>
          price: <span>38$</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
