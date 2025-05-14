import Container from "@/components/Container";
import React from "react";

function Product() {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 p-4">
          <h2 className="font-bold text-xl">Product 1</h2>
          <p className="text-gray-600">
            Lorem ipsum d olor sit amet, consectetur adipisicing elit. Modi,
            dicta distinctio. Obcaecati distinctio voluptate et amet tenetur
            quas expedita praesentium asperiores, consequuntur iste!
          </p>
          <p className="font-bold">
            price: <span>23$</span>
          </p>
          <div className="mt-4">
            <button className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
              +
            </button>
            <span className="mx-4">2</span>
            <button className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
              -
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <img
            src="https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
}

export default Product;
