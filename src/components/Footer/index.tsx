import React from "react";
import { FooterMain } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/svg/logo.svg";
import phone from "../../assets/images/svg/phoneIcon.svg";
import message from "../../assets/images/svg/envelopeIcon.svg";
import instagram from "../../assets/images/svg/instagramIcon.svg"
import youtube from "../../assets/images/svg/youtubeIcon.svg"
import twitter from "../../assets/images/svg/twitterIcon.svg"

const Footer:React.FC = () => {
  return (
    <FooterMain>
      <div className="footer__wrapper">
        <div className="footer__wrapper__siteInfo">
          <div className="footer__wrapper__siteInfo__logo">
            <i>
              <img src={logo} alt="logo" />
            </i>
            <p>Dream Home</p>
          </div>
          <p className="footer__wrapper__siteInfo__text">
            Dream Home is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the
            <Link to="/about">...View More</Link>
          </p>
        </div>
        <div className="footer__wrapper__contacts">
          <h2>Contact Us</h2>
          <p>Deam home villas San Diego, CA, USA</p>
          <p><i><img src={phone} alt="call" /></i>025-777-3067</p>
          <p><i><img src={message} alt="call" /></i>info@dreamhome.com</p>
        </div>
        <div className="footer__wrapper__socialMedia">
        <h2>Follow Us</h2>
        <div>
          <span><i><img src={instagram} alt="instagram" /></i></span>
          <span><i><img src={youtube} alt="youtube" /></i></span>
          <span><i><img src={twitter} alt="twitter" /></i></span>
        </div>
        </div>
      </div>
      <hr />
      <p>© 2022 Dandelion | All Rights Reserved</p>
    </FooterMain>
  );
}

export default Footer;
