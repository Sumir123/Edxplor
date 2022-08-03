import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_container">
          <h4>Useful Links</h4>
          <div className="footer_list">
            <ul>
              <li>
                <link href="#"> Department of Cooperative</link>
              </li>
              <li>
                <link href="#"> Nepal Rastra Bank Ltd.</link>
              </li>
              <li>
                <link href="#"> Employees Provident Fund</link>
              </li>
              <li>
                <link href="#">Nepal Stock Exchange</link>
              </li>
              <li>
                <link href="#">NEFSCUN</link>
              </li>
              <li>
                <link href="#">Department of Transport Mgmt</link>
              </li>
              <li>
                <link href="#"> Citizen Investment Trust</link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_container">
          <h4>Our Services</h4>
          <div className="footer_list">
            <ul>
              <li>
                <Link to="/mockup_test"> Mockup Test</Link>
              </li>
              <li>
                <Link to="/membership"> Membership</Link>
              </li>
              <li>
                <link href="#">Deposit</link>
              </li>
              <li>
                <link href="#">Loan</link>
              </li>
              <li>
                <link href="#">Smart Banking</link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_container">
          <h4>Contact Details </h4>
          <div className="footer_list">
            <ul>
              <li>
                <img src="/images/location_icon.png" alt="icon" />
                <link href="#">Chabahil -7, Kathmandu</link>
              </li>
              <li>
                <img src="/images/phone_icon.png" alt="icon" />
                <link href="#">01 4478416, 4481746</link>
              </li>
              <li>
                <img src="/images/email_icon.png" alt="icon" />
                <link href="#">abc@example.com</link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_container">
          <div className="suscribe_section">
            <h4>Subscribe</h4>
            <p>Subscribe to stay tuned for latest updates. </p>
            <form>
              <input type="text" placeholder="Email" />
              <button>Suscribe</button>
            </form>
            <h3>Social Media</h3>
            <div className="icon_list">
              <div className="icon_base_circle">
                <img src="/images/facebook.png" alt="icon" />
              </div>
              <div className="icon_base_circle">
                <img src="/images/instagram.png" alt="icon" />
              </div>
              <div className="icon_base_circle">
                <img src="/images/twitter.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="left">© 2022 All Rights Reserved</div>
        <div className="right">
          <link href="#">Privacy Policy</link>
          <link href="#">Terms of Use</link>
          <link href="#">Site Map</link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
