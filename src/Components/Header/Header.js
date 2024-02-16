import React from "react";
import "../../Assets/Css/Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { IMAGES, TEXTS } from "../../Assets/Static/Constants";
import Badge from "@mui/material/Badge";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";


function Header() {
  const { user } = useAuth();
  const { cart, loading } = useCart();
  const cartQuantity = loading
    ? "Loading..."
    : cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <React.Fragment>
      <div>
      <div id="container">
  <div class="arrow-right"></div>
</div>
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
            <div className="row align-items-center">
             <Link to={"/orderhistory"}>
                <FontAwesomeIcon
                  icon={faBars}
                  size="lg"
                  style={{ color: "#903233" }}
                />
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#0">
                <LocationOnIcon size="30" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#1">
                <img
                  style={{
                    height: "28px",
                    borderRadius: "50%",
                  }}
                  size="lg"
                  src={IMAGES.INDIAN_FLAG}
                  alt=""
                />
              </a>
              &nbsp;
              <Dropdown className="flaglogo"> India </Dropdown>
              <center>
                <Link to="/">
                  <img src={IMAGES.FABINDIA_LOGO} alt="logo" />
                </Link>
              </center>
              <Col className="logo">
                <Link to="/search">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="lg"
                    style={{ color: "#903233" }}
                  />
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <DropDownMenu />
                &nbsp;&nbsp;&nbsp;
                {user ? (
                <Link to={"/wishlist"}>
                  <FavoriteBorderRoundedIcon
                    sx={{ color: "#903233", fontSize: 30 }}
                  />
                </Link>):(
                  <Link to={"/www.fabindia.com/login"}>
                  <FavoriteBorderRoundedIcon
                    sx={{ color: "#903233", fontSize: 30 }}
                  />
                  </Link>
                )}
                &nbsp;&nbsp;&nbsp;
                {user ? (
                  <Link to={"/cart"}>
                    <Badge badgeContent={cartQuantity} color="secondary" >
                      <ShoppingCartOutlinedIcon
                        sx={{ color: "#903233", fontSize: 30 }}
                      />
                    </Badge>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    {" "}
                    <ShoppingCartOutlinedIcon
                      sx={{ color: "#903233", fontSize: 30 }}
                    />
                  </Link>
                  
                )}
                
              </Col>
            </div>
          </span>
        </header>
      </div>
    </React.Fragment>
  );
}

export default Header;
