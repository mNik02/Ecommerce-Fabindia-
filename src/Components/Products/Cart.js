// Importing necessary dependencies and components from React and other libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../Assets/Css/Cart.css";
import OrderSummary from "../Orders/OrderSummary";
import CloseIcon from '@mui/icons-material/Close';
import "../../Assets/Css/Stepper.css";

// Functional component for the Cart page
const Cart = ({ step, onNextStep }) => {
  // State to store user's cart items and user details
  const [userCart, setUserCart] = useState([]);
  const { user } = useAuth(); // Accessing user information from the authentication context
  const { cart, removeFromCart } = useCart(); // Accessing cart information from the cart context

  // API endpoint for handling cart operations
  const apiUrl = process.env.REACT_APP_API_ENDPOINT_HANDLE_CART;

  // Function to fetch user's cart items from the server
  const fetchUserCart = async () => {
    try {
      // Checking if user is authenticated
      if (user?.token) {
        // Sending a GET request to the server to fetch user's cart items
        const response = await axios.get(`${apiUrl}${user.token}`);
        setUserCart(response.data);
      }
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  // Function to handle the deletion of a cart item
  const handleDeleteItem = async (productId) => {
    try {
      // Sending a DELETE request to the server to remove the specified product from the cart
      await axios.delete(apiUrl + "remove", {
        data: { user_id: user?.token, productId: productId },
      });
      // Updating the local cart state by removing the specified product
      removeFromCart(productId);
      // Fetching the updated user cart from the server
      fetchUserCart();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Function to handle the change in quantity of a cart item
  const handleQuantityChange = async (productId, newQuantity) => {
    try {
      // Checking if the new quantity is less than or equal to 0, and removing the product if true
      if (newQuantity <= 0) {
        await handleDeleteItem(productId);
      } else {
        // Sending a PUT request to the server to update the quantity of the specified product in the cart
        await axios.put(apiUrl + "update", {
          user_id: user?.token,
          productId: productId,
          quantity: newQuantity,
        });

        // Updating the local cart state with the new quantity
        const updatedCart = cart.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Updating the cart in local storage
        fetchUserCart(); // Fetching the updated user cart from the server
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Effect hook to fetch the user's cart when the component mounts or when the cart context changes
  useEffect(() => {
    fetchUserCart();
  }, [cart]);

  // JSX structure for rendering the Cart component
  return (
    <>
      {/* Header component */}
      <Header />

      <div className="stepper-container">
        <div className="stepper">
          <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
          <p className="cart-step-cart">Cart</p>
          <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
          <p className="address-step-cart">Address</p>
          <div className={`step ${step === 3 ? "active" : ""}`}>3</div>
          <p className="payment-step-cart">Payment</p>
        </div>
      </div>
      <div className="user-cart-heading">User Cart
          <hr/></div>
      <div className="page-container">
        {/* Container for the main content of the Cart page */}
       
       
        <div className="cart-overview-containerr">
          {/* Conditional rendering based on whether the cart is empty or not */}
          {userCart.length === 0 ? (
            // Rendered when the cart is empty
            <div className="empty-cart-message">
              <p className="empty-cart">Your cart is empty!</p>
              <br></br>
              <Link to={"/search"}>
                <button className="continue-shopping">Explore Products</button>
              </Link>
            </div>
          ) : (
            <div className="cart-overview-container">
            {/* // Rendered when the cart has items */}
            
          {  userCart.map((cartItem) => (
              <div key={cartItem.cart_item_id} className="cart-item">
                <Link to={`/displayproduct/${cartItem.product.productId}`}>
                  <img
                    src={cartItem.product.imageUrl}
                    className="product-image"
                    alt="Product"
                  />
                </Link>

                <div className="cart-body">
                  <Link
                    to={`/displayproduct/${cartItem.product.productId}`}
                    className="product-link"
                  >
                    <span className="pname">{cartItem.product.title}</span>
                  </Link>
                </div>
                <div className="deleteicon">
                  <button
                    onClick={() => handleDeleteItem(cartItem.product.productId)}
                  
                  >
                    <CloseIcon sx={{fontSize:30}}/>
                  </button>
                </div>

                <div className="mrp">
                  MRP (incl. of all taxes): ₹{cartItem.product.price}.00
                </div>

                <div className="quantity-buttons">
                  <button
                    key={`decrease-${cartItem.cart_item_id}`}
                    onClick={() =>
                      handleQuantityChange(
                        cartItem.product.productId,
                        cartItem.quantity - 1
                      )
                    }
                  >
                    -
                  </button>

                  <span className="mx-2">{cartItem.quantity}</span>

                  <button
                    key={`increase-${cartItem.cart_item_id}`}
                    onClick={() =>
                      handleQuantityChange(
                        cartItem.product.productId,
                        cartItem.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
     
   
      <div className="summary-container">
        {/* Conditional rendering of total price section based on whether the cart has items */}
        {userCart.length > 0 && <OrderSummary userCart={userCart} />}
      
      {userCart.length !== 0 ? (
        <Link to={"/address"}>
          <button className="checkout-btn" onClick={onNextStep}>
            Proceed to checkout
          </button>
        </Link>
      ) : (
        " "
      )}
      </div>
      </div>
      {/* Footer component */}
      <Footer />
    </>
  );
};

// Exporting the Cart component as the default export
export default Cart;
