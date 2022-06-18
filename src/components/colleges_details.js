import React from "react";
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";

const Colleges_details = () => {
  return (
    <>
      <div className="cover_image_container">
        <img
          src="/images/colleges_cover2.png"
          alt="cover"
          className="cover_image"
        />
        <div className="center">
          <h3>College Detail</h3>
          <div className="path">
            <Link to="/">
              <div className="item">Home</div>
            </Link>
            <div className="item">
              <FaChevronRight />
            </div>
            <Link to="/colleges">
              <div className="item">Colleges</div>
            </Link>
          </div>
        </div>
        <div className="college_heading">
          <h1>Kantipur Engineering College</h1>
          <div className="college_contacts">
            <div className="contact">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0026 5.6152C9.372 5.6152 8.75555 5.80058 8.23122 6.1479C7.70689 6.49522 7.29822 6.98888 7.0569 7.56645C6.81558 8.14402 6.75244 8.77956 6.87546 9.39271C6.99849 10.0059 7.30215 10.5691 7.74806 11.0111C8.19397 11.4532 8.76209 11.7542 9.38058 11.8762C9.99907 11.9981 10.6401 11.9355 11.2228 11.6963C11.8054 11.4571 12.3033 11.0519 12.6537 10.5321C13.004 10.0123 13.191 9.40121 13.191 8.77606C13.1891 7.93833 12.8526 7.13545 12.255 6.54309C11.6575 5.95072 10.8476 5.6171 10.0026 5.6152ZM10.0026 10.2128C9.71597 10.2128 9.43576 10.1285 9.19743 9.97067C8.9591 9.8128 8.77334 9.58841 8.66365 9.32588C8.55396 9.06335 8.52526 8.77446 8.58118 8.49576C8.6371 8.21706 8.77513 7.96105 8.97781 7.76012C9.1805 7.55918 9.43873 7.42235 9.71987 7.36691C10.001 7.31147 10.2924 7.33992 10.5572 7.44867C10.822 7.55741 11.0484 7.74157 11.2076 7.97784C11.3669 8.21411 11.4519 8.49189 11.4519 8.77606C11.45 9.15652 11.2967 9.52087 11.0253 9.78991C10.7539 10.0589 10.3864 10.2109 10.0026 10.2128V10.2128ZM10.0026 2.16699C8.23508 2.16889 6.5405 2.86581 5.29068 4.10484C4.04085 5.34387 3.33786 7.02381 3.33594 8.77606C3.33594 14.3363 9.25623 18.5029 9.5026 18.6753C9.64862 18.7783 9.82339 18.8337 10.0026 18.8337C10.1818 18.8337 10.3566 18.7783 10.5026 18.6753C11.6228 17.8585 12.6484 16.9213 13.5606 15.8808C15.5968 13.5604 16.6693 11.1036 16.6693 8.77606C16.6674 7.02381 15.9644 5.34387 14.7145 4.10484C13.4647 2.86581 11.7701 2.16889 10.0026 2.16699V2.16699ZM12.2707 14.717C11.5803 15.5047 10.8213 16.2307 10.0026 16.8865C9.18389 16.2307 8.42492 15.5047 7.73449 14.717C6.52434 13.3306 5.07507 11.1682 5.07507 8.77606C5.07507 7.48048 5.59422 6.23798 6.51831 5.32187C7.4424 4.40576 8.69574 3.8911 10.0026 3.8911C11.3095 3.8911 12.5628 4.40576 13.4869 5.32187C14.411 6.23798 14.9301 7.48048 14.9301 8.77606C14.9301 11.1682 13.4881 13.3306 12.2707 14.717V14.717Z"
                  fill="#787B7C"
                />
              </svg>
              <a>Kuleshwor , Kathmandu</a>
            </div>
            <div className="contact">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5428 16.8337C5.99344 16.8337 0.664062 11.5043 0.664062 4.95492C0.664389 3.78359 1.09161 2.65254 1.86576 1.7735C2.6399 0.894462 3.70789 0.327708 4.86978 0.17934C5.21497 0.13617 5.56482 0.20688 5.86615 0.380724C6.16748 0.554568 6.40381 0.822038 6.53922 1.14248L8.15248 4.89873C8.25901 5.1423 8.30306 5.4086 8.28063 5.67349C8.25821 5.93838 8.17002 6.19349 8.02407 6.41568L6.78803 8.29381C7.33561 9.3286 8.18337 10.1736 9.21997 10.7177L11.074 9.48168C11.297 9.33441 11.5531 9.24484 11.8193 9.22102C12.0855 9.19721 12.3534 9.23989 12.599 9.34523L16.3552 10.9585C16.6757 11.0939 16.9431 11.3302 17.117 11.6316C17.2908 11.9329 17.3615 12.2828 17.3184 12.6279C17.17 13.7898 16.6033 14.8578 15.7242 15.632C14.8452 16.4061 13.7141 16.8333 12.5428 16.8337ZM4.86978 2.1297C4.22414 2.26915 3.64577 2.62559 3.23101 3.13966C2.81624 3.65373 2.59014 4.29439 2.59034 4.95492C2.59247 7.59382 3.64171 10.124 5.5077 11.99C7.37369 13.856 9.9039 14.9052 12.5428 14.9074C13.2033 14.9076 13.844 14.6815 14.3581 14.2667C14.8721 13.852 15.2286 13.2736 15.368 12.6279L11.997 11.1832L10.1349 12.4273C9.90335 12.5805 9.63612 12.6714 9.35912 12.6911C9.08212 12.7107 8.80473 12.6586 8.55379 12.5397C6.99587 11.7852 5.7356 10.5305 4.97412 8.97603C4.85166 8.72639 4.79685 8.44898 4.81516 8.17152C4.83347 7.89406 4.92426 7.62626 5.07846 7.39487L6.31449 5.5007L4.86978 2.1297Z"
                  fill="#787B7C"
                />
              </svg>

              <a>+977-1-5542546</a>
            </div>
            <div className="contact">
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00815 6.69984H3.35223V9.89977H2.54578C2.3319 9.89977 2.12677 9.98405 1.97554 10.1341C1.8243 10.2841 1.73933 10.4876 1.73933 10.6998C1.73933 10.9119 1.8243 11.1154 1.97554 11.2654C2.12677 11.4155 2.3319 11.4997 2.54578 11.4997H15.449C15.6629 11.4997 15.868 11.4155 16.0193 11.2654C16.1705 11.1154 16.2555 10.9119 16.2555 10.6998C16.2555 10.4876 16.1705 10.2841 16.0193 10.1341C15.868 9.98405 15.6629 9.89977 15.449 9.89977H14.6426V6.69984H15.9866C16.1619 6.69953 16.3323 6.6426 16.472 6.53767C16.6117 6.43273 16.7132 6.2855 16.761 6.11826C16.8089 5.95102 16.8005 5.77287 16.7372 5.61077C16.6738 5.44867 16.559 5.31145 16.41 5.21987L9.42078 0.953302C9.29379 0.874686 9.14709 0.833008 8.9974 0.833008C8.8477 0.833008 8.70101 0.874686 8.57401 0.953302L1.58476 5.21987C1.4358 5.31145 1.32096 5.44867 1.25763 5.61077C1.1943 5.77287 1.18592 5.95102 1.23377 6.11826C1.28161 6.2855 1.38307 6.43273 1.5228 6.53767C1.66252 6.6426 1.8329 6.69953 2.00815 6.69984ZM4.96514 6.69984H6.57804V9.89977H4.96514V6.69984ZM9.80385 6.69984V9.89977H8.19094V6.69984H9.80385ZM13.0297 9.89977H11.4168V6.69984H13.0297V9.89977ZM8.9974 2.57327L13.1372 5.09988H4.85761L8.9974 2.57327ZM17.3307 13.3664C17.3307 13.5785 17.2458 13.782 17.0945 13.932C16.9433 14.0821 16.7382 14.1663 16.5243 14.1663H1.47051C1.25663 14.1663 1.05151 14.0821 0.900267 13.932C0.749028 13.782 0.664063 13.5785 0.664062 13.3664C0.664062 13.1542 0.749028 12.9507 0.900267 12.8007C1.05151 12.6507 1.25663 12.5664 1.47051 12.5664H16.5243C16.7382 12.5664 16.9433 12.6507 17.0945 12.8007C17.2458 12.9507 17.3307 13.1542 17.3307 13.3664Z"
                  fill="#787B7C"
                />
              </svg>

              <a>Purbanchal University</a>
            </div>
            <div className="contact">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.68214H12.5V1.07608C12.5 0.834977 12.4052 0.603746 12.2364 0.433259C12.0676 0.262771 11.8387 0.166992 11.6 0.166992C11.3613 0.166992 11.1324 0.262771 10.9636 0.433259C10.7948 0.603746 10.7 0.834977 10.7 1.07608V1.68214H5.3V1.07608C5.3 0.834977 5.20518 0.603746 5.0364 0.433259C4.86761 0.262771 4.6387 0.166992 4.4 0.166992C4.16131 0.166992 3.93239 0.262771 3.7636 0.433259C3.59482 0.603746 3.5 0.834977 3.5 1.07608V1.68214H2C1.60278 1.68413 1.2224 1.84441 0.941518 2.12812C0.66064 2.41184 0.501971 2.79607 0.5 3.1973V15.3185C0.501971 15.7197 0.66064 16.104 0.941518 16.3877C1.2224 16.6714 1.60278 16.8317 2 16.8337H14C14.3972 16.8317 14.7776 16.6714 15.0585 16.3877C15.3394 16.104 15.498 15.7197 15.5 15.3185V3.1973C15.498 2.79607 15.3394 2.41184 15.0585 2.12812C14.7776 1.84441 14.3972 1.68413 14 1.68214ZM13.7 3.50033V5.31851H2.3V3.50033H13.7ZM2.3 15.0155V7.13669H13.7V15.0155H2.3Z"
                  fill="#787B7C"
                />
              </svg>

              <a>Established on 1914 A.D</a>
            </div>
          </div>
        </div>
      </div>
      <div className="college_details_section">
        <div className="side_section">
          <div className="menus active">Overview</div>
          <div className="menus">Admission Guideline</div>
          <div className="menus">Offered Programs</div>
          <div className="menus">Scholarship Information</div>
          <div className="menus">Facilities/Infrastructure</div>
          <div className="menus">Location</div>
        </div>

        <div className="main_section">
          <div className="courses">
            <div className="course">
              <div className="title">
                <h4>BTech in Biotechnology</h4>
                <div className="discount">
                  Discount - <span className="red">10%</span>
                </div>
              </div>
              <div className="apply_btn">
                <button className="btn ">Apply</button>
              </div>
            </div>
            <div className="course">
              <div className="title">
                <h4>BTech in Biotechnology</h4>
              </div>
              <div className="apply_btn">
                <button className="btn ">Apply</button>
              </div>
            </div>
            <div className="course">
              <div className="title">
                <h4>BTech in Biotechnology</h4>
              </div>
              <div className="apply_btn">
                <button className="btn ">Apply</button>
              </div>
            </div>
            <div className="course">
              <div className="title">
                <h4>BTech in Biotechnology</h4>
              </div>
              <div className="apply_btn">
                <button className="btn ">Apply</button>
              </div>
            </div>
          </div>
          <div className="description">
            <h3>Facilities / Infrastructure</h3>
            <div className="paragraph">
              <h5>Library Facilities</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.{" "}
              </p>
            </div>
            <div className="paragraph">
              <h5>Educational Tours</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.{" "}
              </p>
            </div>
            <div className="paragraph">
              <h5>Laboratory</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
            <div className="paragraph">
              <h5>Other Facilities</h5>
              <ul className="lists">
                <li>Sports</li>
                <li>Cafeteria</li>
                <li>Transportation</li>
                <li>Hostel</li>
                <li>Science Lab</li>
                <li>Parking</li>
                <li>Multimedia</li>
                <li>Conference Hall</li>
                <li>CCTV</li>
                <li>Counselling</li>
                <li>WiFi</li>
              </ul>
            </div>
          </div>
          <div className="admission_section">
            <h4>Admission Guidelines</h4>
            <div className="guidelines">
              <table>
                <thead>
                  <tr>
                    <th>Programs</th>
                    <th>Seats</th>
                    <th>Admission Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BTech in Biotechnology</td>
                    <td>125</td>
                    <td>BTech in Biotechnology</td>
                  </tr>
                  <tr>
                    <td>BTech in Biotechnology</td>
                    <td>150</td>
                    <td>BTech in Biotechnology</td>
                  </tr>
                  <tr>
                    <td>BTech in Biotechnology</td>
                    <td>150</td>
                    <td>BTech in Biotechnology</td>
                  </tr>
                  <tr>
                    <td>BTech in Biotechnology</td>
                    <td>150</td>
                    <td>BTech in Biotechnology</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="sections">
            <h4>Offered Programs </h4>

            <ul className="lists">
              <li>BTech in Biotechnology</li>
              <li>Bachelor of Business Administration (BBA)</li>
              <li>MAster of Business Administration(MBA)</li>
              <li>Executive MBA(EMBA)</li>
            </ul>
          </div>
          <div className="sections">
            <h4>Location </h4>
            <img src="/images/location_img.png"></img>
          </div>
          <div className="sections">
            <h4>Overview </h4>
            <div className="section">
              <div className="descriptions">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus.
                </p>
              </div>
              <div className="image">
                <div className="img">
                  <img src="/images/principal_image.png" />
                  <div className="img_title">
                    <h5>Ram Shrestha</h5>
                    <p>Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colleges_details;
