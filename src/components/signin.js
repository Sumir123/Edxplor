import React, { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";

const Signin = () => {
  const toogleHideBtn = () => {
    document.querySelector(".hidePassIcon").classList.add("hide");
    document.querySelector(".showPassIcon").classList.remove("hide");
    tooglePassword();
  };
  const toogleShowBtn = () => {
    document.querySelector(".hidePassIcon").classList.remove("hide");
    document.querySelector(".showPassIcon").classList.add("hide");
    tooglePassword();
  };
  const tooglePassword = () => {
    var inputType = document.getElementById("password");
    if (inputType.type === "password") {
      inputType.type = "text";
    } else {
      inputType.type = "password";
    }
  };
  return (
    <>
      <div className="side_img_left">
        <img src="/images/signin_side_left.png" />
      </div>
      <div className="side_img_right">
        <img src="/images/signin_side_right.png" />
      </div>

      <div className="signin_container">
        <div className="main_signInContainer">
          <div className="logo">
            <img src="/images/logo.png" />
          </div>
          <div className="signInContainer">
            <div className="form_container">
              <h3>Sign in to your account!</h3>
              <div className="form">
                <form>
                  <div className="form_group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      id="email"
                    ></input>
                  </div>
                  <div className="form_group">
                    <label htmlFor="password">Password </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                    ></input>
                    <HiEyeOff
                      className="hidePassIcon"
                      onClick={toogleHideBtn}
                    />
                    <HiEye
                      className="showPassIcon hide"
                      onClick={toogleShowBtn}
                    />
                  </div>
                  <div className="form_group_row">
                    <div>
                      <input type="checkbox" id="check" />
                      <label htmlFor="check">Remember Me</label>
                    </div>
                    <a href="#">Forgot Password?</a>
                  </div>
                  <button>Sign In</button>
                </form>
              </div>
            </div>
            <div className="line">
              <svg
                width="289"
                height="1"
                viewBox="0 0 289 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="289" y2="0.5" stroke="#D9D8D8" />
              </svg>
            </div>
            <div className="other_methods">
              <h3>You can also login with</h3>
              <div className="icon_group">
                <div className="icon">
                  <img src="/images/facebook.png" />
                </div>
                <div className="icon">
                  <img src="/images/google.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
