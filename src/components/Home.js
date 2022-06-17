import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div className="hero_section">
        <div className="side-1">
          <div className="hero_heading">
            Find the Best College for Your Future.
          </div>
          <div className="hero_text">
            Take your education anywhere you want. You lead, and we'll help.
          </div>
          <div className="hero_call_to_action">
            <div className="action_container">
              <div className="action">
                <h5>I'M READY TO</h5>
                <p>Find courses</p>
              </div>
              <div className="action_btn">
                <FaChevronRight />
              </div>
            </div>
            <div className="group_action">
              <div className="action_container">
                <div className="action">
                  <h5>I'M READY TO</h5>
                  <p>Find colleges</p>
                </div>
                <div className="action_btn">
                  <FaChevronRight />
                </div>
              </div>
              <div className="action_container">
                <div className="action">
                  <h5>I'M READY TO</h5>
                  <p>Find careers</p>
                </div>
                <div className="action_btn">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_image">
          <img src="./images/hero_image.png" alt="img" />
        </div>
        <div className="texture_rectangle"></div>
      </div>
      <div className="info_section">
        <div className="headings">
          <div className="heading">
            <h3>Find Your Passion</h3>
          </div>
          <div className="subheading">
            <p>
              Expand your skills or start something new. Discover the best
              colleges by <br />
              subject areas that matter to you.
            </p>
          </div>
          <button>
            View more <HiOutlineArrowRight />
          </button>
        </div>
        <div className="info_container">
          <div className="info_card first">
            <div className="info_icon">
              <img src="/images/icon-1.png" alt="icon" />
            </div>
            <div className="info_details">
              <h3>Agriculture</h3>
              <p>
                We provide various services for online money transfers. Our
                service is the best...
              </p>
            </div>
          </div>
          <div className="info_card">
            <div className="info_icon">
              <img src="/images/icon-1.png" alt="icon" />
            </div>
            <div className="info_details">
              <h3>Architecture</h3>
              <p>
                We provide various services for online money transfers. Our
                service is the best...
              </p>
            </div>
          </div>
          <div className="info_card">
            <div className="info_icon">
              <img src="/images/icon-1.png" alt="icon" />
            </div>
            <div className="info_details">
              <h3>Chemical Engineering</h3>
              <p>
                We provide various services for online money transfers. Our
                service is the best...
              </p>
            </div>
          </div>
          <div className="info_card">
            <div className="info_icon">
              <img src="/images/icon-1.png" alt="icon" />
            </div>
            <div className="info_details">
              <h3>Finance</h3>
              <p>
                We provide various services for online money transfers. Our
                service is the best...
              </p>
            </div>
          </div>
        </div>
        <div className="infos">
          <div className="info">
            <h3>Compare your school options.</h3>
            <p>
              View the most relevant school for your interests and compare them
              by tuition, programs, acceptance rate, and other factors important
              to find your college home.
            </p>
          </div>
          <div className="image">
            <img src="/images/image-2.png" alt="img" />
          </div>
        </div>
        <div className="search_form">
          <h1>Start your search below</h1>

          <div className="form_contaoner">
            <form>
              <div className="select_menu">
                <select>
                  <option>Select degree</option>
                </select>
                <div className="custom_arrow"></div>
              </div>
              <svg
                width="1"
                height="49"
                viewBox="0 0 1 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="49"
                  stroke="#E9E5E5"
                />
              </svg>

              <div className="select_menu">
                <select>
                  <option>Select category</option>
                </select>
                <div className="custom_arrow"></div>
              </div>
              <svg
                width="1"
                height="49"
                viewBox="0 0 1 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="49"
                  stroke="#E9E5E5"
                />
              </svg>

              <div className="select_menu">
                <select>
                  <option>Select subject</option>
                </select>
                <div className="custom_arrow"></div>
              </div>
              <div className="select_menu last">
                <button>Search Programs</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="find_section">
        <div className="img">
          <img src="/images/img.png" alt="img" />
        </div>
        <div className="details">
          <h1>Find From Where You Live</h1>
          <p>
            Looking for local options? Search the best campus and online
            colleges by location to find the right school close to home.
          </p>
          <form>
            <input type="text" placeholder="Enter your location"></input>
            <img
              src="/images/location_icon_primary.png"
              alt="icon"
              className="icon"
            />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className="latest_section">
        <div className="headings">
          <div className="details">
            <h1>Latest News & Views</h1>
            <p>
              Looking for the latest education news and advice? Visit our blog
              for articles covering all the topics that impact your student
              life.
            </p>
          </div>
          <button>
            View more <HiOutlineArrowRight />
          </button>
        </div>
        <div className="card_container">
          <div className="cards">
            <div className="card">
              <img src="/images/news_image1.png" alt="img" />
              <div className="card_details">
                <div className="tags_aurthor">
                  <button>Information Technology</button>
                  <div className="aurthor">
                    <img src="/images/aurthor_image.png" alt="img" />
                    <h6>Mick Harris</h6>
                  </div>
                </div>
                <div className="card_text">
                  <p> Goodwill Saving closes NPR 16 Billion Project Loan....</p>
                </div>
                <div className="card_last">
                  <a href="#">Read More</a>
                  <div className="date">
                    <img src="/images/timer_icon.png" alt="icon" />
                    <p>November 17, 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="/images/news_image2.png" alt="img" />
              <div className="card_details">
                <div className="tags_aurthor">
                  <button>Information Technology</button>
                  <div className="aurthor">
                    <img src="/images/aurthor_image.png" alt="img" />
                    <h6>Mick Harris</h6>
                  </div>
                </div>
                <div className="card_text">
                  <p> Goodwill Saving closes NPR 16 Billion Project Loan....</p>
                </div>
                <div className="card_last">
                  <a href="#">Read More</a>
                  <div className="date">
                    <img src="/images/timer_icon.png" alt="icon" />
                    <p>November 17, 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="/images/news_image3.png" alt="img" />
              <div className="card_details">
                <div className="tags_aurthor">
                  <button>Information Technology</button>
                  <div className="aurthor">
                    <img src="/images/aurthor_image.png" alt="img" />
                    <h6>Mick Harris</h6>
                  </div>
                </div>
                <div className="card_text">
                  <p> Goodwill Saving closes NPR 16 Billion Project Loan....</p>
                </div>
                <div className="card_last">
                  <a href="#">Read More</a>
                  <div className="date">
                    <img src="/images/timer_icon.png" alt="icon" />
                    <p>November 17, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navigations">
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile active"></div>
            <div className="tile"></div>
            <div className="tile"></div>
          </div>
        </div>
      </div>
      <div className="resource_section">
        <img src="/images/img2.png" alt="img" />
        <div className="resource_container">
          <div className="resource_details">
            <div className="headings">
              <h1>Amplify Your College Experience</h1>
              <p>
                In need of some guidance? Our in-depth resources help you
                navigate the college experience and prepare for life after
                graduation
              </p>
            </div>
            <div className="resources">
              <div className="resource_btn_group">
                <div className="resource_btn">
                  <div className="btn_container">
                    <div className="action">
                      <p>College Planning</p>
                    </div>
                    <div className="action_btn">
                      <img src="/images/arrow_icon.png" alt="icon" />
                    </div>
                  </div>
                  <div className="btn_container">
                    <div className="action">
                      <p>College Planning</p>
                    </div>
                    <div className="action_btn">
                      <img src="/images/arrow_icon.png" alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="resource_btn">
                  <div className="btn_container">
                    <div className="action">
                      <p>College Planning</p>
                    </div>
                    <div className="action_btn">
                      <img src="/images/arrow_icon.png" alt="icon" />
                    </div>
                  </div>
                  <div className="btn_container">
                    <div className="action">
                      <p>College Planning</p>
                    </div>
                    <div className="action_btn">
                      <img src="/images/arrow_icon.png" alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="resource_btn">
                  <div className="btn_container">
                    <div className="action">
                      <p>College Planning</p>
                    </div>
                    <div className="action_btn">
                      <img src="/images/arrow_icon.png" alt="icon" />
                    </div>
                  </div>
                  <div className="btn_container">
                    <div className="action">
                      <p>College Planning</p>
                    </div>
                    <div className="action_btn">
                      <img src="/images/arrow_icon.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colleges_section">
        <div className="headings">
          <div className="details">
            <h1>These Colleges Trust Us</h1>
            <p>
              Fusce tempor, tortor et vehicula ermpts posuere, mi est iaculis
              quamec luctus enim erat iaculis quamec quisque elit diam
            </p>
          </div>
          <button>
            View more <HiOutlineArrowRight />
          </button>
        </div>
        <div className="colleges_logo">
          <div className="logo">
            <img src="/images/clz_logos/clz_logo1.png" alt="logo" />
          </div>
          <div className="logo">
            <img src="/images/clz_logos/clz_logo2.png" alt="logo" />
          </div>
          <div className="logo">
            <img src="/images/clz_logos/clz_logo3.png" alt="logo" />
          </div>
          <div className="logo">
            <img src="/images/clz_logos/clz_logo4.png" alt="logo" />
          </div>
          <div className="logo">
            <img src="/images/clz_logos/clz_logo5.png" alt="logo" />
          </div>
          <div className="logo">
            <img src="/images/clz_logos/clz_logo6.png" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
