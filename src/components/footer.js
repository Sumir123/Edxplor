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
                <a href="#"> Department of Cooperative</a>
              </li>
              <li>
                <a href="#"> Nepal Rastra Bank Ltd.</a>
              </li>
              <li>
                <a href="#"> Employees Provident Fund</a>
              </li>
              <li>
                <a href="#">Nepal Stock Exchange</a>
              </li>
              <li>
                <a href="#">NEFSCUN</a>
              </li>
              <li>
                <a href="#">Department of Transport Mgmt</a>
              </li>
              <li>
                <a href="#"> Citizen Investment Trust</a>
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
                <a href="#">Deposit</a>
              </li>
              <li>
                <a href="#">Loan</a>
              </li>
              <li>
                <a href="#">Smart Banking</a>
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
                <a href="#">Chabahil -7, Kathmandu</a>
              </li>
              <li>
                <img src="/images/phone_icon.png" alt="icon" />
                <a href="#">01 4478416, 4481746</a>
              </li>
              <li>
                <img src="/images/email_icon.png" alt="icon" />
                <a href="#">abc@example.com</a>
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
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
