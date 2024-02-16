import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  faUserPlus,
  faArrowRightToBracket,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import "../../Assets/Css/DropdownMenu.css";
import { useAuth } from "../../context/AuthContext";

const DropDownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    setDropdownOpen(false);
  }, [user]);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={toggleDropdown}>
          <PersonOutlineIcon
            sx={{ color: "#903233", fontSize: 32 }}
          ></PersonOutlineIcon>
        </button>

        {isDropdownOpen && (
          <>
            <div
              className="overlay"
              onClick={() => setDropdownOpen(false)}
            ></div>

            <div className="dropdown-content">
              {user ? (
                <>
                  <Link to="/userprofile">
                    <button>
                      <FontAwesomeIcon icon={faUser} />
                      &nbsp;Profile
                    </button>
                  </Link>
                  <Link to="/orderHistory">
                    <button>
                      <FontAwesomeIcon icon={faBagShopping} />
                      &nbsp;Orders
                    </button>
                  </Link>

                  <Link to="/">
                    <button onClick={logout}>
                      <FontAwesomeIcon icon={faArrowRightToBracket} />
                      &nbsp;Logout
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button>
                      <FontAwesomeIcon icon={faArrowRightToBracket} />
                      &nbsp;Login
                    </button>
                  </Link>

                  <Link to="/register">
                    <button>
                      <FontAwesomeIcon icon={faUserPlus} />
                      &nbsp;Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DropDownMenu;
