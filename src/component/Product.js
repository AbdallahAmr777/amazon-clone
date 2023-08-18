import React from "react";
import "./Product.css";
import starIcon from "../images/star.png";
import { useAuth } from "../context/GlobalState";
const Product = ({ id, image, price, title, description,rating }) => {
  const { dispatch } = useAuth();
  const AddToBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title:title,
        description:description,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>

        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} />
            </p>
          ))}
      </div>
      <img src={image} alt="product-img" />
      <button onClick={AddToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
