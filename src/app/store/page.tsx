import React from "react";
import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";

function Store() {
  const data = [
    {
      id: "1",
      image: "https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png",
      title: "product1",
      description: "slkfjsld jsldkfjlksdjflk sldkfjklsdf",
      price: 15
    },
    {
      id: "2",
      image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      title: "product2",
      description: "slkfjsld jsldkfjlksdjflk sldkfjklsdf",
      price: 234
    },
    {
      id: "3",
      image: "https://magicstudio.com/blog/content/images/2023/10/props-product-photography.webp",
      title: "product3",
      description: "slkfjsld jsldkfjlksdjflk sldkfjklsdf",
      price: 123
    },
    {
      id: "4",
      image: "https://media.unstack.com/media/www/image/edit_product_pictures_cover.png",
      title: "product4",
      description: "slkfjsld jsldkfjlksdjflk sldkfjklsdf",
      price: 14
    },
  ]

  return (
    <Container>
      <h1 className="py-4">Store</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map(
          (item) => (
            <ProductItem key={item.id} {...item} />
          )
        )}
      </div>
    </Container>
  );
}

export default Store;
