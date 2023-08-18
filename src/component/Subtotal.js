import React from "react";

import "./Subtotal.css";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
 const navigate = useNavigate();
  return (
    <div className="subtotal">





      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    // </div>
  );
};

export default Subtotal;
