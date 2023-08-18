import React from "react";
import checkoutImg from "../images/checkoutAd.jpg";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useAuth } from "../context/GlobalState";
import "./Checkout.css";
const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkoutImg} />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => <CheckoutProduct {...item} />)
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right"><Subtotal /></div>
    </div>
  );
};

export default Checkout;
