import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../Assets/Css/DisplayProduct.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "react-toastify/dist/ReactToastify.css";



function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
const navigate =useNavigate();
const {user}=useAuth();
const {addToCart}=useCart();
const addtoCart = process.env.REACT_APP_API_ENDPOINT_HANDLE_CART;
const getProduct=process.env.REACT_APP_API_ENDPOINT_GET_PRODUCT_BY_ID
  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`${getProduct}${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login", {
        state: { message: "Login first to Add to your Cart" },
      });
      return;
    }

    const userId = localStorage.getItem("token");
    // let quantity = 1;
    const productId = product.productId;
    console.log(productId);

    try {
      const response = await axios.post(
        `${addtoCart}add`,
        {
          user_id: userId,
          productId: productId,
          quantity: quantity,
        }
      );

      console.log(response.data);
      addToCart(product,quantity);
      console.log(quantity)
      setQuantity(1);
      toast.success("Item added to cart.");
      
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  const decreaseQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1); 
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  return (
    <>
      <Header />
      <ToastContainer  position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={true} closeOnClick/>
      <div className="product-details">
        {product ? (
          <div className="row product__row max-width product__row--default">
            <img
              className="productimage"
              src={product.imageUrl}
              alt={product.title}
            />
            <h2>{product.title}</h2>
            <span className="cost">
              MRP ₹ (Incl. of all taxes): ₹{product.price}.00
            </span>{" "}
            <p className="productdesc">{product.description}</p>
            <div className="buttons">
            &nbsp;&nbsp;&nbsp;&nbsp;
              <button className="decbutton" onClick={decreaseQuantity}>
                -
                &nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              {quantity}
          
              <button className="incbutton" onClick={increaseQuantity}>
              &nbsp;&nbsp;&nbsp;&nbsp;
                +
              </button>

           
              </div>
              <Link to={"/cart"}>
              <button
                className="addbutton"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              </Link>
              </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
