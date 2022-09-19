import React from "react";
import { Link } from "react-router-dom";
import AboutComponent from "./styles";

const About: React.FC = () => {
  return (
    <AboutComponent>
      <div className="about__wrapper">
        <div className="about__wrapper__left">
          <h2>About Us</h2>
          <p>
            Dream Home is a gated community with a great location. Located
            downtown, you're within walking distance of Parks, and the best
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys. . Laundry is available
            on premises.
          </p>
          <Link to="/about">Read More</Link>
        </div>
        <div className="about__wrapper__right">
          <div className="about__wrapper__right__item">
            <h2>500+</h2>
            <h3>Projects</h3>
            <p>Over 500 lexury villas for "Home Away From Home" experience</p>
          </div>
          <div className="about__wrapper__right__item">
            <h2>40+</h2>
            <h3>Locations</h3>
            <p>luxury villas and private holiday homes, from all across</p>
          </div>
          <div className="about__wrapper__right__item">
            <h2>24/7</h2>
            <h3>Help</h3>
            <p>24/7 Help service for all customers to guide and support</p>
          </div>
        </div>
      </div>
    </AboutComponent>
  );
};

export default About;
