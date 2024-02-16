import React from "react";
import "../../Assets/Css/AddressForm.css";
import { useCart } from "../../context/CartContext";

const OrderSummary = ({ userCart }) => {
  const {setTotalprice} = useCart();
  const calculateTotalPrice = () => {
    return userCart.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0
    );
  };
setTotalprice(calculateTotalPrice);
  return (
    <>
      <div className="order-summary-container">
        <span className="ordersummary">Order Summary</span>
        <hr />
        <span className="pricedetail">
          Price Detail ({userCart.length}items)
        </span>

        {/* <div className="container mx-auto my-4 total-price-section"> */}
        <div className="totalprice">
          <label>Total MRP</label>
          <label className="pricevalue">
            ₹  {calculateTotalPrice().toFixed(2)}
          </label>
        </div>
        <label className="totalprice">Delivery Charges</label>
        <span className="delivery"> FREE</span>
        <hr />
        <br/>
        <label className="amountpay"> Amount payable</label>
        <span className="amountvalue"> ₹ {calculateTotalPrice().toFixed(2)}</span>
      </div>
    </>
  );
};

export default OrderSummary;
