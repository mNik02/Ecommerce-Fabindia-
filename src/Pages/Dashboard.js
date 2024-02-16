import React from "react";
import { IMAGES } from "../Assets/Static/Constants";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "../Assets/Css/Loginlandingpage.css";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="main-body">
        <div
          className="background-img"
          style={{
            backgroundImage: `url(${IMAGES.LANDINGPAGE})`,
          }}
        >
          <img className="right-bg" src={IMAGES.RIGHT_BG_WHITE} alt=""></img>

          <br></br>
<div className="center-data">
          <div className="hello">Hello !</div>
          <p className="hello-text">Log in or register to manage your orders</p>
          <div className="login-icon">
            <Link to={"/login"}>
              {" "}
              <button className="landing-login-btn">Login</button>{" "}
            </Link>
            <Link to={"/register"}>
              <button className="landing-register-btn">Register</button>
            </Link>
          </div>
          </div>
          
        </div>
        <img className="left-bg" src={IMAGES.LEFT_BG_WHITE} alt=""></img>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
