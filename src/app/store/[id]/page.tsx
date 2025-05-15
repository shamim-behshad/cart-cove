import Container from "@/components/Container";
import { ProductItemProps } from "@/components/ProductItem";
import React from "react";
import AddToCart from "../components/AddToCart";

interface ProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Product({ params }: ProductProps) {
  const { id } = await params;
  const results = await fetch(`http://localhost:3001/products/${id}`);
  const data = (await results.json()) as ProductItemProps;

  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-9 p-4">
          <h2 className="font-bold text-xl">{data.title}</h2>
          <p className="text-gray-600">{data.description}</p>
          <p className="font-bold">
            price: <span>{data.price}$</span>
          </p>
          <AddToCart />
        </div>
        <div className="col-span-3">
          <img src={data.image} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Product;
