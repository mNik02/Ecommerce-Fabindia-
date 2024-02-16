// components/Login/LoginForm.js
import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import "../../Assets/Css/Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { TEXTS } from "../../Assets/Static/Constants";
import { useCart } from "../../context/CartContext";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { login } = useAuth();
  const { setCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const apiUrl = process.env.REACT_APP_API_ENDPOINT_HANDLE_CART;
  const apiLogin = process.env.REACT_APP_API_ENDPOINT_LOGIN_USER;

  const formFields = [
    { name: "email", type: "text", label: "Email*" },
    { name: "password", type: "password", label: "Password*" },
  ];

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiLogin}`, credentials);
      const data = response.data;

      // Redirect after successful login
      navigate("/");

      const { userId, email } = data;
      login({ token: userId, email });

      const cartResponse = await axios.get(`${apiUrl}${userId}`);
      const userCart = cartResponse.data;

      // Set the user's cart in the context
      setCart(userCart);
    } catch (error) {
      setError("Incorrect credentials. Please try again.");
      console.error("Login failed", error);
      console.log("Server response:", error.response);
    } finally {
    }
  };

  const locationState = location.state;
  const loginMessage = locationState && locationState.message;

  return (
    <>
      {loginMessage ? (
        <span className="heading3">{loginMessage.slice(0, 5)}</span>
      ) : (
        <span className="heading3">{TEXTS.LOGIN_FORM}</span>
      )}

      {error && <div className="error-message">{error}</div>}

      <Form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div className="form-group" key={field.name}>
            <label className="loginlabel" htmlFor={field.name}>
              {field.label}
            </label>
            <br></br>
            <input
              className="logininput"
              type={field.type}
              name={field.name}
              value={credentials[field.name]}
              placeholder=" "
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <br />
        <Link to="/login/forgot-Password">
          <span className="forgotpass">{TEXTS.FORGOT}</span>
        </Link>
        <br></br>
        <button className="logbutton" type="submit">
          {TEXTS.SUBMIT_LOGIN}
        </button>
      </Form>
    </>
  );
};

export default LoginForm;
