import React from "react";
import { SearchImage } from "../../assets";
import ProductCard from "./ProductCard";

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
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    star: "5",
    image:
      "https://th.bing.com/th?id=ORMS.10c3aa15fe2896840d000e71ef33f92c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
  },
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    star: "5",
    image:
      "https://th.bing.com/th?id=ORMS.10c3aa15fe2896840d000e71ef33f92c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
  },
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    star: "5",
    image:
      "https://th.bing.com/th?id=ORMS.10c3aa15fe2896840d000e71ef33f92c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
  },
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    star: "5",
    image:
      "https://th.bing.com/th?id=ORMS.10c3aa15fe2896840d000e71ef33f92c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
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

const handelSearch = (e) => {
  e.preventDefault();
};

const OurProduct = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <form className="d-flex justify-content-center">
        <div className="d-flex gap-3 col-md-4 mb-3 ">
          <input className="form-control p-2" placeholder="Searh here.." />
          <button className=" border-0 bg-white" onClick={handelSearch}>
            <img height="35" src={SearchImage} alt="" />
          </button>
        </div>
      </form>
      <div className="eight-product">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
