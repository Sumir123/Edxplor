import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Benifit_of_membership = () => {
  return (
    <>
      <div className="cover_image_container">
        <img
          src="/images/colleges_cover.png"
          alt="cover"
          className="cover_image"
        />
        <div className="center">
          <h3>Benefits of Membership </h3>
          <div className="path">
            <Link to="/">
              <div className="item">Home</div>
            </Link>
            <div className="item">
              <FaChevronRight />
            </div>
            <Link to="/cources">
              <div className="item">Benefits of Membership </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="content_main_body">
        <div className="headings">
          <h1>Benefits of Membership</h1>
          <p>
            <img src="images/calander_icon.png" /> Last Updated on July 18,2022
          </p>
        </div>
        <div className="paragraph">
          <h5>For Students</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.{" "}
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>

            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
          </ul>
        </div>
        <div className="paragraph">
          <h5>For Colleges</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.{" "}
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>

            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
            <li>
              It is a long established fact that a reader will be distracted.
            </li>
          </ul>
        </div>
        <div className="send_message_form">
          <h5>For more information please mail us.</h5>
          <form>
            <div className="row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone  Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Benifit_of_membership;
