import React from "react";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Assets/Css/Footer.css";
import { useState } from "react";
import { TEXTS } from "../../Assets/Static/Constants";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { IMAGES } from "../../Assets/Static/Constants";
import { FooterData } from './../../Assets/Static/Constants';


const Footer = () => {
  // Calculate the number of columns
  const columns = 4;

  // Calculate the number of items in each column
  const itemsPerColumn = Math.ceil(FooterData.length / columns);

  // Create an array of columns
  const columnArray = Array.from({ length: columns }, (_, columnIndex) => {
    const startIndex = columnIndex * itemsPerColumn;
    const endIndex = startIndex + itemsPerColumn;
    return FooterData.slice(startIndex, endIndex);
  });
  const [year] = useState(new Date().getFullYear());

  return (
    <React.Fragment>
      <footer className="footercolumn">
        <div className="footercontainer">
          <div className="footerrow">
            {columnArray.map((column, Index) => (
              <Col key={Index}>
                {column.map((section, index) => (
                  <div key={index} className="footer-section">
                    <h2 className="footer-heading">{section.heading}</h2>
                    <ul className="footer-list">
                      {section.subParts.map((subPart, subIndex) => (
                        <li key={subIndex}>
                         {subPart}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Col>
            ))}
          </div>
        </div>
        <p>Follow Us</p>
        <p className="ptag">Our Largest Store At Your Fingertips</p>
        {/* Footer Icons */}
        <div className="d-flex flex-row mb-sm-1">
         <a href="https://m.facebook.com/Fabindia"> <FontAwesomeIcon icon={faFacebookF} size="lg" /> &nbsp;&nbsp;</a>
          <a href="https://twitter.com/FabindiaNews"><FontAwesomeIcon icon={faTwitter} size="lg" /> &nbsp;&nbsp;</a>
        <a href="https://www.instagram.com/fabindiaofficial"> <FontAwesomeIcon icon={faInstagram} size="lg" /></a>
          &nbsp;&nbsp;
         <a href="https://www.linkedin.com/company/fabindia-overseas-pvt-ltd"> <FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
          &nbsp;&nbsp;
          <a href="https://www.youtube.com/c/FabindiaNews"> <FontAwesomeIcon icon={faYoutube} size="lg" /></a>
          <div className="playstore">
          <a className="atag" href={TEXTS.PLAYSTORE}>  <img src={IMAGES.PLAYSTORE} alt="" /></a>
          <a className="atag" href={TEXTS.APPSTORE}>   <img className="applestore" src={IMAGES.APPSTORE} alt=""></img></a>
          
          </div>
        </div>
        <br></br>
        <p className="copyright">
          &copy; Copyright {year} Fabindia.com. All rights reserved.
        </p>
        <br></br>
        <br></br>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
