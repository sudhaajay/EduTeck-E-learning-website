import React from "react";
import "./Footer.css";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="content_left">
          <h2>EduTrek E-learning</h2>
            <p>From bigginer to Advanced learners, find courses that fit your level and interests.</p>
            <div className="social_icons">
              <img src={facebook} alt="social icons" className="icons" />
              <img src={twitter} alt="social icons" className="icons" />
              <img src={linkedin} alt="social icons" className="icons" />
            </div>
          </div>
          <div className="content_center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
           
            </ul>
          </div>
          <div className="content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>Phone: (123) 456-7890</li>
              <li>Email:support@edutrek.com</li>
              <li>Address: 123 Business st,Suite 100, united State</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2024 ©Company. All right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
