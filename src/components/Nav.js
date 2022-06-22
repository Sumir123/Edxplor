import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";

const Nav = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="end-section">
          <button className=" btn btn-transparent"> Sign In </button>
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
            <a href="#">News & Views</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">
              <FiSearch className="search_icon" strokeWidth="2.5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
