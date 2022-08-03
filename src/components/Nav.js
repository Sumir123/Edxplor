import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";

const Nav = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <Link to="/signin">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="end-section">
          <Link to="/signin">
            <button className=" btn btn-transparent">Sign In</button>
          </Link>
          <button className="btn btn-secondary"> Sign Up </button>
        </div>
      </div>
      <div className="header-bottom">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">
              Courses <HiOutlineChevronDown className="down_icon" />
            </Link>
          </li>
          <li>
            <Link to="/colleges">
              Colleges <HiOutlineChevronDown className="down_icon" />
            </Link>
          </li>
          <li>
            <Link to="/result">Result</Link>
          </li>
          <li>
            <Link to="/entrance_preparation">Entrance</Link>
          </li>
          <li>
            <link href="#">News & Views</link>
          </li>
          <li>
            <link href="#">Contact Us</link>
          </li>
          <li>
            <link href="#">
              <FiSearch className="search_icon" strokeWidth="2.5" />
            </link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
