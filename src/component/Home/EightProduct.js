import React from "react";
import ProductCard from "../Product/ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    star: "5",
    image:
      "https://th.bing.com/th?id=ORMS.10c3aa15fe2896840d000e71ef33f92c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$19.99",
    star: "4",
    image: "http://github.com/sangamprashant.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$15.49",
    star: "3.4",
    image:
      "https://thewatchdogonline.com/wp-content/uploads/2021/01/image.jpeg",
  },
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    star: "5",
    image:
      "https://th.bing.com/th?id=ORMS.10c3aa15fe2896840d000e71ef33f92c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
  },
];

const EightProduct = () => {
  return (
    <div className="container">
      <h2 className="text-center">Latest Products</h2>
      <div className="eight-product">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EightProduct;
