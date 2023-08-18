import React from 'react'
import { useAuth } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"

const Payment = () => {
    const {basket,user}=useAuth()

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link style={{textDecoration:'None'}} to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* Delivery Address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Alexandria, Egypt</p>
          </div>
        </div>
        {/* Review Items*/}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                {...item}
              />
            ))}
          </div>
        </div>
        {/* Payment method*/}
        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-details">
            <form >
              {/* <CardElement  /> */}
              {/* <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                /> */}
                <button>
                 
                
                 Buy now
                </button>
              {/* </div> */}
             
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
