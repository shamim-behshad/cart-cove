import React from "react";
import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";

function Store() {
  return (
    <Container>
      <h1 className="py-4">Store</h1>
      <div className="grid grid-cols-4 gap-4">
        <ProductItem />
      </div>
    </Container>
  );
}

export default Store;
