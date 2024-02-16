import React from "react";
import Header from "./../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link ,useNavigate } from "react-router-dom";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../../Assets/Css/Wishlist.css";
import { useCart } from './../../context/CartContext';
import { ToastContainer, toast } from "react-toastify";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const wishlisturl = process.env.REACT_APP_API_ENDPOINT_USER_WISHLIST;
  const addtoCart = process.env.REACT_APP_API_ENDPOINT_HANDLE_CART;

  const fetchUserWishlist = async () => {
    try {
      if (user?.token) {
        const response = await axios.get(`${wishlisturl}${user.token}`);
        console.log("Result wishlist: " + response.data);
        setWishlist(response.data);
        console.log("Wishlist get:", response.data);
        console.log("first");
      }
    } catch (error) {
      console.error("Error fetching wishlist items: ", error);
    }
  };
  useEffect(() => {
    fetchUserWishlist();
  }, [user?.token]);

  const handleDeleteItem = async (productId) => {
    try {
      await axios.delete(wishlisturl + "remove", {
        data: { user_id: user?.token, productId: productId },
      });
      fetchUserWishlist();
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };
  
  const handleAddToCart = async (productId) => {
    const quantity = 1;
    try {
      const response = await axios.post(`${addtoCart}add`, {
        user_id: user?.token,
        productId: productId,
        quantity: quantity,
      
      });
      console.log(user?.token);
      handleDeleteItem(productId);
      toast.success("Item Moved to cart.");
      
    } catch (error) {
      toast.error("Error moving to cart")
      console.error("Error adding to cart", error);
    }
  };
    

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />

      <div className="nav-msg">
        Wishlist
        <hr />
      </div>
      <span className="nav-message">It's never too late to add to your cart!</span>

      <div className="wishlist-container">
        <div className="wishlist-cards">
          {wishlist.length === 0 ? (
            <div className="empty-wishlist-message">
              <FavoriteBorderRoundedIcon
                className="wishlist-icon"
                sx={{ color: "#ccc", fontSize: 150, fontWeight: 400 }}
              />
              <p className="empty-wishlist">Your wishlist is empty ! </p>
              <p className="empty-message">
                Save items that you like in your wishlist.{" "}
              </p>
              <Link to={"/search"}>
                <button className="start-shopping">Start Shopping</button>
              </Link>
            </div>
          ) : (
            <div className="wishlist-card">
              {wishlist.map((wishlistItem) => (
                <div
                  key={wishlistItem.wishlist_id}
                  className="display-wishlist-card"
                >
                  <Link
                    to={`/displayproduct/${wishlistItem.product.productId}`}
                  >
                    <img
                      src={wishlistItem.product.imageUrl}
                      alt={wishlistItem.product.title}
                      className="card-image"
                    />
                  </Link>
                
                  <Link
                    to={`/displayproduct/${wishlistItem.product.productId}`}
                  >
                    <p className="title">{wishlistItem.product.title}</p>
                  </Link>
                  <p className="price-title">
                    M.R.P.{" "}
                    <span className="price">₹{wishlistItem.product.price}</span>
                  </p>
                  <div className="delete-button">
                  <button
                    onClick={() =>
                      handleDeleteItem(wishlistItem.product.productId)
                    }
                   
                  >
                    <FavoriteIcon
                      sx={{ color: "#903233", fontSize: 25, fontWeight: 100 }}
                    />
                  </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(wishlistItem.product.productId)}
                    className="movetocart-btn"
                  >
                     <ShoppingCartOutlinedIcon
                      sx={{ color: "white", fontSize: 20 }}
                    /> Move to cart
                  </button>
                 
                 
               
                </div>
              
              ))}
              
            </div>
          )}
         
        </div>
        
      
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
