import React from "react";
import "../src/Assets/Css/Header.css";
import "../src/Assets/Css/Footer.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ProductList from "./Components/Products/ProductsSearch";
import ProductDetails from "./Components/Products/ProductDetails";
import Cart from "./Components/Products/Cart";
import Wishlist from "./Components/Products/Wishlist";
import "tailwindcss/tailwind.css";
import AddressForm from "./Components/Orders/AddressForm";
import UserOrderDetails from "./Components/Orders/UserOrderDetails";
import PaymentForm from "./Components/Orders/PaymentForm";
import CustomerService from './Components/CustomerServiceDashboard';
import OrderHistory from "./Components/Orders/OrderHistory";
import UserProfile from "./Pages/UserProfile";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/www.fabindia.com/login" element={<Dashboard/>}/>
          <Route path="/search" element={<ProductList />} />
          <Route
            path="/displayproduct/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/address" element={<UserOrderDetails />} />
          <Route path="/addressform" element={<AddressForm />} />
          <Route path="/customerservice" element={<CustomerService/>}/>
          <Route path="/orderhistory" element={<OrderHistory/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
