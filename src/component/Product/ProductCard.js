import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";

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
      {hasHalfStar && <span>&#9734;</span>} {/* Half star character */}
    </div>
  );
};

function ProductCard({ product }) {
  const { isLogged } = useContext(AuthContext);

  return (
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
          {isLogged && (
            <div className="d-flex justify-content-between">
              <button className="btn btn-danger">Buy now</button>
              <button className="btn btn-danger">Add to Cart</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
