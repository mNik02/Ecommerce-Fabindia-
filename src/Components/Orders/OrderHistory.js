import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "../../Assets/Css/OrderHistory.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { green } from "@mui/material/colors";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/cartitems/order-history/${user?.token}`
        );
        setOrderHistory(response.data);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    // Call the fetchOrderHistory function
    fetchOrderHistory();
  }, [user?.token]);

  // Render your component using the orderHistory state
  return (
    <>
    <Header/>
    
      <div className="title-history">Order History <hr/></div>
      
      <div className="order-history">
        {orderHistory.map((orderItem) => (
          <div key={orderItem.cartItemId} className="history-page">
            <div className="history-image">
              <img
                src={orderItem.product.imageUrl}
                alt={orderItem.product.title}
              />
           </div>
            <div>
              <p className="history-title">{orderItem.product.title.slice(0,25)}</p>
              
            </div>
            <span className="amount">Price: {" "}₹ {orderItem.order.totalAmount}</span>
            <p className="order-date">Order Date: {orderItem.order.orderDate}</p>
            <span className="order-status"><DoneOutlineIcon sx={{color:green}}/> Placed</span>
      
          </div>
        ))}
      </div>
      
    <Footer/>
    </>
  );
};

export default OrderHistory;
