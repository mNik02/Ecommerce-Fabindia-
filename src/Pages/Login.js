import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import LoginForm from "../Components/Login/LoginForm";
import "../Assets/Css/Login.css";
import { Link } from "react-router-dom";
import { IMAGES, TEXTS } from "../Assets/Static/Constants";


const Login = () => {
  return (
    <>
      <Header />
      <img className="imageright" src={IMAGES.RIGHT_BG} alt="" />
      <div className="login-form">
        <LoginForm />
        <p className="signuptag">{TEXTS.NOT_USER}</p>
        <Link to="/register">
          <p className="existinguser">{TEXTS.SUBMIT_SIGNUP}</p>
        </Link>
      </div>
      <img className="imageleft" src={IMAGES.LEFT_BG} alt="" />
      <Footer />
    </>
  );
};

export default Login;
