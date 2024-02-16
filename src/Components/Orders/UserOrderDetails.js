import React, { useState, useEffect } from "react";
import axios from "axios";
import Stepper from "../Products/Stepper";
import { useAuth } from "../../context/AuthContext";
import "../../Assets/Css/AddressForm.css";
import { IMAGES, TEXTS } from "../../Assets/Static/Constants";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import OrderSummary from "../Orders/OrderSummary";
import "../Orders/AddressCard";
import AddressCard from "../Orders/AddressCard";
import { useCart } from "./../../context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const UserOrderDetails = ({ step, onNextStep }) => {
  const { user } = useAuth();
  const { cart, setCart,totalprice, addressId ,clearCart } = useCart();
  const [userCart, setUserCart] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const [showAllItems, setShowAllItems] = useState(false);
  const navigate = useNavigate();

  const override = css`
  display: block;
  margin: 0 auto;
`;
  const apiUrl = process.env.REACT_APP_API_ENDPOINT_HANDLE_CART;
  const createOrderUrl = process.env.REACT_APP_API_ENDPOINT_CREATE_ORDER;

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        if (user?.token) {
          const response = await axios.get(`${apiUrl}${user.token}`);
          setUserCart(response.data);
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
      }
    };

    fetchUserCart();
  }, [user]);

  const createOrder = async () => {
    try {
      const cartItemList = cart.map((cartItem) => ({
        cartItemId:cartItem.cartItemId,
        product: {
          productId: cartItem.productId, 
        },
        quantity: cartItem.quantity,
        user: {
          userId: user?.token,
        },
      }));
      
      await axios.post(`${createOrderUrl}`, {
        addressId: addressId,
        userId: user?.token,
        totalPrice: totalprice,
    
        
          
      });
      setCart([]);
      Swal.fire({
        icon: "success",
        title: "Order Placed !",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        setLoading(false); // Make sure to set loading to false after the timeout
        navigate("/");
      }, 2000); // Adjust the timeout value as needed
  
    } catch (error) {
      console.error("Error placing:", error);
    } finally {
      setLoading(false);
    }
  };



  const handlePlaceOrder = () => {
    setLoading(true);
    createOrder();
    clearCart();
  };

  return (
    <>
      <ToastContainer />
      <div>
        <p className="flex h-6 items-center justify-center bg-brown-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8 marquebg">
          <marquee width="100%" direction="left" height="30px" scrollment="1">
            {TEXTS.MARQUE}
            <a className="atag" href={TEXTS.PLAYSTORE}>
              {TEXTS.PLAYSTORE}{" "}
            </a>
            & App Store:
            <a className="atag" href={TEXTS.APPSTORE}>
              {" "}
              {TEXTS.APPSTORE}
            </a>
          </marquee>
        </p>
        <header className="headerbody">
          <span className="cont">
            <center className="fab-logo">
              <Link to="/">
                <img src={IMAGES.FABINDIA_LOGO} alt="logo" />
              </Link>
            </center>
            <span className="address">Address</span>
          </span>
        </header>
      </div>

      <div className="stepper-container">
        <div className="stepper">
         <Link to={"/cart"}> <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
          <p className="cart-step">Cart</p>
          </Link>
          <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
          <p className="address-step">Address</p>
          <div className={`step ${step === 3 ? "active" : ""}`}>3</div>
          <p className="payment-step">Payment</p>
        </div>
      </div>
      <div className="page-container">
        <div className="cart-details-container">
          <span className="cartitems"> Cart Details</span>
          <hr />
          {userCart
            .slice(0, showAllItems ? userCart.length : 5)
            .map((cartItem) => (
              <div key={cartItem.cart_item_id} className="cart-item-address">
                <Link to={`/displayproduct/${cartItem.product.productId}`}>
                  <img
                    src={cartItem.product.imageUrl}
                    className="product-image"
                    alt="Product"
                  />
                </Link>

                <div className="cartbody">
                  <Link
                    to={`/displayproduct/${cartItem.product.productId}`}
                    className="product-link"
                  >
                    <span className="title">{cartItem.product.title}</span>
                    <span className="quantity"> Qty{"  "}&nbsp;</span>
                    {cartItem.quantity}
                  </Link>
                </div>
              </div>
            ))}
          {userCart.length > 5 && (
            <button
              className="show-more-btn"
              onClick={() => setShowAllItems((prev) => !prev)}
            >
              {showAllItems ? "Show less..." : "Show more..."}
            </button>
          )}

          <div className="addresscard">
          
            <br></br>
            <span className="add-delivery">Select or add new address for delivery: </span>
            <AddressCard />
            <br/>
          </div>
          <span className="linetag">|</span>
          <div className="new-address">

            <Link to={"/addressform"}>
              {" "}
              <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
              &nbsp;&nbsp;Add New Address
            </Link>
          </div>
        </div>

        <div className="ordersummary-container">
          <OrderSummary userCart={userCart} />
          <button className="payment-btn" onClick={handlePlaceOrder} disabled={loading}>
  {loading ? (
    <ClipLoader color="#ffffff" loading={loading} css={override} size={20} />
  ) : (
    "Continue to payment"
  )}
  
</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserOrderDetails;
