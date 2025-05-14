import React from "react";
import Container from "@/components/Container";
import ProductItem , {ProductItemProps} from "@/components/ProductItem";
import Link from "next/link";

async function Store() {
  const results = await fetch("http://localhost:3001/products");
  const data = await results.json() as ProductItemProps[]

  return (
    <Container>
      <h1 className="py-4">Store</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link  key={item.id} href={`store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
