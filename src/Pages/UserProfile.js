import React from "react";
import "../Assets/Css/UserProfile.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import UnsubscribeOutlinedIcon from "@mui/icons-material/UnsubscribeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { useAuth } from "../context/AuthContext";

const UserProfile = () => {
  const { logout } = useAuth();
  return (
    <>
      <Header />

      <div className="navigation-msg">Home/Update Personal Details</div>

      <div className="details-container">
        <div className="side-menu-data">
          <div className="side-menu-items">
            My Profile{" "}
            <span className="dropdown-icon-profile">
              {" "}
              <FontAwesomeIcon icon={faAngleRight} />{" "}
            </span>
          </div>
          <hr />
          <div className="side-menu-items">
            My Address
            <span className="dropdown-icon-address">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
          <hr />
          <div className="side-menu-items">
            FabFamily
            <span className="dropdown-icon-family">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
          <hr />
          <div className="side-menu-items">
            <Link to={"/orderhistory"}> My Orders </Link>
            <span className="dropdown-icon-orders">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
          <hr />
          <div className="side-menu-items">
            Gift Cards
            <span className="dropdown-icon-gift">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
          <hr />
          <div className="side-menu-items">
            Unsubscribe
            <span className="dropdown-icon-unsubscribe">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
          <hr />
          <div className="side-menu-items">
            Delete Account
            <span className="dropdown-icon-delete">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
          <hr />
        </div>
        <div className="main-data">
          <div className="profile-card">
            <div className="user-name">NIKHIL TYAGI</div>
            <ModeEditIcon className="edit-icon" sx={{ color: "#000000" }} />
            <div className="user-mobile"> 9643172435</div>

            <div className="user-email"> nikhiltyagi2002@gmail.com </div>

            <div className="user-gender"> Male </div>

            <div className="user-dob"> 02/02/2002</div>

            <div className="user-password"> Change Password</div>
          </div>
          <div className="menu-cards">
            <div className="address-card">
              <Link to={"/addresscard"}>
                <LocationOnIcon className="location-icon" />
                <span className="location-title">Address</span>
                <br />
                <span className="location-msg">
                  Saving address for smooth checkout
                </span>
              </Link>
            </div>
            <div className="address-card">
              <Link to={"/fabfamily"}>
                <Diversity1Icon className="family-icon" />
                <span className="family-title">Fab Family</span>
                <br />
                <span className="family-msg">
                  Earn Fabcoins as you shop and use them
                </span>
              </Link>
            </div>
            <div className="address-card">
              <Link to={"/orderhistory"}>
                <DescriptionOutlinedIcon className="order-icon" />
                <span className="order-title">My Orders</span>
                <br />
                <span className="order-msg">Check your order status</span>
              </Link>
            </div>
            <div className="address-card">
              <Link to={"/giftcards"}>
                <RedeemOutlinedIcon className="gift-icon" />
                <span className="gift-title">Gift Cards</span>
                <br />
                <span className="gift-msg">
                  Redeem or send gift card to your family and friends
                </span>
              </Link>
            </div>
            <div className="address-card">
              <Link to={"/unsubcribr"}>
                <UnsubscribeOutlinedIcon className="unsubscribe-icon" />
                <span className="unsubscribe-title">Unsubcribre</span>
                <br />
                <span className="unsubscribe-msg">
                  See more details if you want to unsubscribe
                </span>
              </Link>
            </div>
            <div className="address-card">
              <Link to={"/deleteaccount"}>
                <ManageAccountsOutlinedIcon className="del-icon" />
                <span className="del-title">Delete my Account</span>
                <br />
                <span className="del-msg">
                  See more details if you want to delete account
                </span>
              </Link>
            </div>
          </div>
          <Link to="/">  <button onClick={logout} className="logout">
            Sign Out
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
