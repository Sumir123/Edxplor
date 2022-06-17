import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";

const Nav = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="end-section">
          <button className=" btn btn-transparent"> Sign In </button>
          <button className="btn btn-secondary"> Sign Up </button>
        </div>
      </div>
      <div className="header-bottom">
        <ul className="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              Courses <HiOutlineChevronDown className="down_icon" />
            </a>
          </li>
          <li>
            <a href="#">
              Colleges <HiOutlineChevronDown className="down_icon" />
            </a>
          </li>
          <li>
            <a href="#">News & Views</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">
              <FiSearch className="search_icon" stroke-width="2.5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
