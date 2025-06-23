import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { title, image, stock = 1 } = product;

  const isOutOfStock = stock === 0;

  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked(!isLiked);


  return (
    <div className="product-card">
      <div className="image-wrapper">
        {isOutOfStock && <div className="badge">OUT OF STOCK</div>}
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <div className="title" title={title}>
          {title}
        </div>
        <div className="price-note">
          <span>
            <a href="/">Sign in</a> or Create an account to see pricing
          </span>
          <span role="button" className={`wishlist ${isLiked ? "liked" : ""}`} onClick={toggleLike}>
            {isLiked ? "♥" : "♡"}
          </span>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
