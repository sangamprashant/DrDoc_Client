import React from "react";
import { SearchImage } from "../../assets";

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

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const renderFullStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Full star character
    }
    return stars;
  };
  return (
    <div className="star-rating">
      {renderFullStars()}
      {hasHalfStar && <span>&#9734;</span>} 
    </div>
  );
};

const handelSearch = (e) => {
e.preventDefault()

}

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
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="card">
              <img
                height="200px"
                width="100%"
                className="object-fit-contain"
                src={product.image}
                alt={product.name}
              />
              <div className="p-2">
                <h5>{product.name}</h5>
                <p>{product.price}</p>
                <StarRating rating={parseFloat(product.star)} />
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger">Buy now</button>
                  <button className="btn btn-danger">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
