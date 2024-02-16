import React, { useState, useEffect } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import { useAuth } from "../../context/AuthContext";
import TextField from "@mui/material/TextField";
import "../../Assets/Css/AddressForm.css";
import { IMAGES, TEXTS } from "../../Assets/Static/Constants";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";

const statesList = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const AddressForm = ({ step, onNextStep }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userCart, setUserCart] = useState([]);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT_HANDLE_CART;
  const addressUrl = process.env.REACT_APP_API_ENDPOINT_HANDLE_ADDRESS;
  const [addressData, setAddressData] = useState({
    mobileNo: "",
    addressNickname: "",
    firstName: "",
    lastName: "",
    pincode: "",
    city: "",
    country: "",
    state: null,
    addressLine1: "",
    addressLine2: "",
    userId: user?.token,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  const handleStateChange = (_, newValue) => {
    setAddressData({
      ...addressData,
      state: newValue,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${addressUrl}${user?.token}`,
        addressData
      );

      console.log("Response:", response.data);
      navigate("/address");

      // Add navigation logic here if needed after successful form submission
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div>
        <p className="flex h-6 items-center justify-center bg-brown-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8 marquebg">
          <marquee width="100%" direction="left" height="30px" scrollment="1">
            {TEXTS.MARQUE}
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
          <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
          <p className="cart-step-form">Cart</p>
          <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
          <p className="address-step">Address</p>
          <div className={`step ${step === 3 ? "active" : ""}`}>3</div>
          <p className="payment-step">Payment</p>
        </div>
      </div>
      <div className="page-container">
        <div className="addrescontainer">
          <br />

          <form onSubmit={handleSubmit} className="address-form">
            <h2 className="label-heading">Contact Details</h2>
            <hr />
            <div className="form-address">
              <br />
              <label className="address-label">Mobile-No:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="mobileNo"
                value={addressData.mobileNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-address">
              <label className="address-label">Address Nickname:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="addressNickname"
                value={addressData.addressNickname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-address">
              <label className="address-label">First Name:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="firstName"
                value={addressData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-address">
              <label className="address-label">Last Name:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="lastName"
                value={addressData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <br />
            <br />

            <h2 className="label-heading">Address</h2>
            <hr />
            <div className="form-address">
              <br />
              <label className="address-label">Pincode:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="pincode"
                value={addressData.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-address">
              <label className="address-label">City:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="city"
                value={addressData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-address">
              <label className="address-label">Country:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="country"
                value={addressData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-address">
              <label className="address-label">State:</label>
              <br></br>
              <br></br>
              <Autocomplete
                options={statesList}
                value={addressData.state}
                
                onChange={handleStateChange}
                required
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="custom-input"
                    variant="standard"
                    size="small"
                  />
                )}
              />
            </div>

            <div className="form-address">
              <label className="address-label">Address Line 1:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="addressLine1"
                value={addressData.addressLine1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-address">
              <label className="address-label">Address Line 2:</label>
              <br></br>
              <input
                className="address-input"
                type="text"
                name="addressLine2"
                value={addressData.addressLine2}
                onChange={handleChange}
              />
            </div>

            <div className="submit-option">
              <Link to={"/address"}>
                <button className="back-btn" type="submit">
                  {" "}
                  Back
                </button>
              </Link>
              <button className="save-address" type="submit">
                Save Address
              </button>
            </div>
          </form>
        </div>
        <div className="order-summarycontainer">
          <OrderSummary userCart={userCart} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddressForm;
