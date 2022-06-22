import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
const Mockup_test = () => {
  return (
    <>
      <div className="cover_image_container">
        <img
          src="/images/colleges_cover.png"
          alt="cover"
          className="cover_image"
        />
        <div className="center">
          <h3>Mockup Test</h3>
          <div className="path">
            <Link to="/">
              <div className="item">Home</div>
            </Link>
            <div className="item">
              <FaChevronRight />
            </div>
            <Link to="/cources">
              <div className="item">Mockup Test</div>
            </Link>
          </div>
        </div>
      </div>
      <div id="all_content">
        <div className="test_container">
          <div className="test_headings">
            <h3>Test yourself !</h3>
            <p>Choose any to test your skill and talent.</p>
          </div>
          <div className="test_options">
            <div className="options_btn">
              <Link to="/mockup_test/before_you_start">
                <div className="btn_container">
                  <div className="action">
                    <p>SEE</p>
                  </div>
                  <div className="action_btn">
                    <img src="/images/arrow_icon.png" alt="icon" />
                  </div>
                </div>
              </Link>
              <Link to="/mockup_test/before_you_start">
                <div className="btn_container">
                  <div className="action">
                    <p>+2</p>
                  </div>
                  <div className="action_btn">
                    <img src="/images/arrow_icon.png" alt="icon" />
                  </div>
                </div>
              </Link>
              <Link to="/mockup_test/before_you_start">
                <div className="btn_container">
                  <div className="action">
                    <p>BCA</p>
                  </div>
                  <div className="action_btn">
                    <img src="/images/arrow_icon.png" alt="icon" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Before_you_start = () => {
  return (
    <>
      <div className="before_we_start">
        <div className="instructions">
          <div className="time_questions">
            <h3>Physics Mockup Test</h3>
            <div className="group_icon_details">
              <div className="icon_details">
                <img src="/images/timer_icon.png" alt="" />
                <b>2 minutes</b> per question
              </div>
              <div className="icon_details">
                <img src="/images/menu_icon.png" alt="" />
                <b> 10 questions </b>per page out of <b>30</b>
              </div>
            </div>
          </div>
          <svg
            width="888"
            height="1"
            viewBox="0 0 888 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="line"
          >
            <line y1="0.5" x2="888" y2="0.5" stroke="#ECECEC" />
          </svg>

          <div className="instruction">
            <h3>BehtmlFore you start</h3>

            <ul className="lists">
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </li>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="start_btn">
        <Link to="/mockup_test/questions">
          <button className="primary_btn">Start </button>
        </Link>
      </div>
    </>
  );
};

const Questions = () => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };
  return (
    <>
      <div className="questions_container">
        <div className="questions_content">
          <div className="headings">
            <h3>Test your knowledge on law of Nepal</h3>
            <small>Total score : 50</small>
          </div>
          <ol>
            <div className="all_questions">
              <div className="questions">
                <div className="question">
                  <h2>
                    <li> The Attorney-General of Nepal is appointed by the</li>
                  </h2>
                </div>
                <div className="options">
                  <div className="option">
                    <input type="radio" name="option" id="option1" />
                    <label htmlFor="option1"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option2" />
                    <label htmlFor="option2"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option3" />
                    <label htmlFor="option3"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option4" />
                    <label htmlFor="option4"> The President </label>
                  </div>
                </div>
                <div className="result wrong">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.0026 0.332031C3.32541 0.332031 0.335938 3.3215 0.335938 6.9987C0.335938 10.6759 3.32541 13.6654 7.0026 13.6654C10.6798 13.6654 13.6693 10.6759 13.6693 6.9987C13.6693 3.3215 10.6798 0.332031 7.0026 0.332031ZM9.20611 8.318C9.44471 8.55659 9.44471 8.94958 9.20611 9.18817C9.0798 9.31449 8.92541 9.37063 8.77102 9.37063C8.61664 9.37063 8.44822 9.31449 8.33594 9.18817L7.0026 7.86887L5.68331 9.18817C5.55699 9.31449 5.4026 9.37063 5.24822 9.37063C5.09383 9.37063 4.92541 9.31449 4.81313 9.18817C4.57453 8.94958 4.57453 8.55659 4.81313 8.318L6.13243 6.9987L4.81313 5.6794C4.57453 5.4408 4.57453 5.04782 4.81313 4.80922C5.05173 4.57063 5.44471 4.57063 5.68331 4.80922L7.0026 6.12852L8.3219 4.80922C8.5605 4.57063 8.95348 4.57063 9.19208 4.80922C9.43067 5.04782 9.43067 5.4408 9.19208 5.6794L7.87278 6.9987L9.20611 8.318Z"
                      className="icon_fill"
                    />
                  </svg>
                  Wrong! You have selected wrong answer
                </div>
              </div>
              <div className="questions">
                <div className="question">
                  <h2>
                    <li>The Attorney-General of Nepal is appointed by the</li>
                  </h2>
                </div>
                <div className="options">
                  <div className="option">
                    <input type="radio" name="option" id="option5" />
                    <label htmlFor="option5"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option6" />
                    <label htmlFor="option6"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option7" />
                    <label htmlFor="option7"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option8" />
                    <label htmlFor="option8"> The President </label>
                  </div>
                </div>
                <div className="result wrong">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.0026 0.332031C3.32541 0.332031 0.335938 3.3215 0.335938 6.9987C0.335938 10.6759 3.32541 13.6654 7.0026 13.6654C10.6798 13.6654 13.6693 10.6759 13.6693 6.9987C13.6693 3.3215 10.6798 0.332031 7.0026 0.332031ZM9.20611 8.318C9.44471 8.55659 9.44471 8.94958 9.20611 9.18817C9.0798 9.31449 8.92541 9.37063 8.77102 9.37063C8.61664 9.37063 8.44822 9.31449 8.33594 9.18817L7.0026 7.86887L5.68331 9.18817C5.55699 9.31449 5.4026 9.37063 5.24822 9.37063C5.09383 9.37063 4.92541 9.31449 4.81313 9.18817C4.57453 8.94958 4.57453 8.55659 4.81313 8.318L6.13243 6.9987L4.81313 5.6794C4.57453 5.4408 4.57453 5.04782 4.81313 4.80922C5.05173 4.57063 5.44471 4.57063 5.68331 4.80922L7.0026 6.12852L8.3219 4.80922C8.5605 4.57063 8.95348 4.57063 9.19208 4.80922C9.43067 5.04782 9.43067 5.4408 9.19208 5.6794L7.87278 6.9987L9.20611 8.318Z"
                      className="icon_fill"
                    />
                  </svg>
                  Wrong! You have selected wrong answer
                </div>
              </div>
              <div className="questions">
                <div className="question">
                  <h2>
                    <li>The Attorney-General of Nepal is appointed by the</li>
                  </h2>
                </div>
                <div className="options">
                  <div className="option">
                    <input type="radio" name="option" id="option9" />
                    <label htmlFor="option9"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option10" />
                    <label htmlFor="option10"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option11" />
                    <label htmlFor="option11"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option12" />
                    <label htmlFor="option12"> The President </label>
                  </div>
                </div>
                <div className="result correct">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00261 0.332031C5.68406 0.332031 4.39513 0.723024 3.29881 1.45557C2.20248 2.18811 1.34799 3.2293 0.84341 4.44747C0.338826 5.66565 0.206804 7.00609 0.464039 8.2993C0.721273 9.59251 1.35621 10.7804 2.28856 11.7127C3.22091 12.6451 4.4088 13.28 5.702 13.5373C6.99521 13.7945 8.33566 13.6625 9.55383 13.1579C10.772 12.6533 11.8132 11.7988 12.5457 10.7025C13.2783 9.60617 13.6693 8.31724 13.6693 6.9987C13.6693 5.23059 12.9669 3.53489 11.7167 2.28465C10.4664 1.03441 8.77072 0.332031 7.00261 0.332031ZM5.66927 10.1098C5.61078 10.1101 5.5528 10.0989 5.49865 10.0768C5.4445 10.0547 5.39525 10.0221 5.35372 9.98092L2.68705 7.28759C2.64561 7.24615 2.61274 7.19695 2.59031 7.14281C2.56789 7.08866 2.55634 7.03063 2.55634 6.97203C2.55634 6.85367 2.60336 6.74017 2.68705 6.65647C2.77074 6.57278 2.88425 6.52577 3.00261 6.52577C3.12096 6.52577 3.23447 6.57278 3.31816 6.65647L5.66927 9.03425L10.6871 4.01648C10.7707 3.93278 10.8842 3.88577 11.0026 3.88577C11.121 3.88577 11.2345 3.93278 11.3182 4.01648C11.4019 4.10017 11.4489 4.21367 11.4489 4.33203C11.4489 4.45039 11.4019 4.5639 11.3182 4.64759L5.98483 9.98092C5.9433 10.0221 5.89405 10.0547 5.8399 10.0768C5.78575 10.0989 5.72777 10.1101 5.66927 10.1098Z"
                      className="icon_fill"
                    />
                  </svg>
                  Wrong! You have selected wrong answer
                </div>
              </div>
              <div className="questions">
                <div className="question">
                  <h2>
                    <li>The Attorney-General of Nepal is appointed by the </li>
                  </h2>
                </div>
                <div className="options">
                  <div className="option">
                    <input type="radio" name="option" id="option13" />
                    <label htmlFor="option13"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option14" />
                    <label htmlFor="option14"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option15" />
                    <label htmlFor="option15"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option16" />
                    <label htmlFor="option16"> The President </label>
                  </div>
                </div>
                <div className="result correct">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00261 0.332031C5.68406 0.332031 4.39513 0.723024 3.29881 1.45557C2.20248 2.18811 1.34799 3.2293 0.84341 4.44747C0.338826 5.66565 0.206804 7.00609 0.464039 8.2993C0.721273 9.59251 1.35621 10.7804 2.28856 11.7127C3.22091 12.6451 4.4088 13.28 5.702 13.5373C6.99521 13.7945 8.33566 13.6625 9.55383 13.1579C10.772 12.6533 11.8132 11.7988 12.5457 10.7025C13.2783 9.60617 13.6693 8.31724 13.6693 6.9987C13.6693 5.23059 12.9669 3.53489 11.7167 2.28465C10.4664 1.03441 8.77072 0.332031 7.00261 0.332031ZM5.66927 10.1098C5.61078 10.1101 5.5528 10.0989 5.49865 10.0768C5.4445 10.0547 5.39525 10.0221 5.35372 9.98092L2.68705 7.28759C2.64561 7.24615 2.61274 7.19695 2.59031 7.14281C2.56789 7.08866 2.55634 7.03063 2.55634 6.97203C2.55634 6.85367 2.60336 6.74017 2.68705 6.65647C2.77074 6.57278 2.88425 6.52577 3.00261 6.52577C3.12096 6.52577 3.23447 6.57278 3.31816 6.65647L5.66927 9.03425L10.6871 4.01648C10.7707 3.93278 10.8842 3.88577 11.0026 3.88577C11.121 3.88577 11.2345 3.93278 11.3182 4.01648C11.4019 4.10017 11.4489 4.21367 11.4489 4.33203C11.4489 4.45039 11.4019 4.5639 11.3182 4.64759L5.98483 9.98092C5.9433 10.0221 5.89405 10.0547 5.8399 10.0768C5.78575 10.0989 5.72777 10.1101 5.66927 10.1098Z"
                      className="icon_fill"
                    />
                  </svg>
                  Wrong! You have selected wrong answer
                </div>
              </div>
              <div className="questions">
                <div className="question">
                  <h2>
                    <li>The Attorney-General of Nepal is appointed by the</li>
                  </h2>
                </div>
                <div className="options">
                  <div className="option">
                    <input type="radio" name="option" id="option17" />
                    <label htmlFor="option17"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option18" />
                    <label htmlFor="option18"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option19" />
                    <label htmlFor="option19"> The President </label>
                  </div>
                  <div className="option">
                    <input type="radio" name="option" id="option20" />
                    <label htmlFor="option20"> The President </label>
                  </div>
                </div>
                <div className="result correct">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00261 0.332031C5.68406 0.332031 4.39513 0.723024 3.29881 1.45557C2.20248 2.18811 1.34799 3.2293 0.84341 4.44747C0.338826 5.66565 0.206804 7.00609 0.464039 8.2993C0.721273 9.59251 1.35621 10.7804 2.28856 11.7127C3.22091 12.6451 4.4088 13.28 5.702 13.5373C6.99521 13.7945 8.33566 13.6625 9.55383 13.1579C10.772 12.6533 11.8132 11.7988 12.5457 10.7025C13.2783 9.60617 13.6693 8.31724 13.6693 6.9987C13.6693 5.23059 12.9669 3.53489 11.7167 2.28465C10.4664 1.03441 8.77072 0.332031 7.00261 0.332031ZM5.66927 10.1098C5.61078 10.1101 5.5528 10.0989 5.49865 10.0768C5.4445 10.0547 5.39525 10.0221 5.35372 9.98092L2.68705 7.28759C2.64561 7.24615 2.61274 7.19695 2.59031 7.14281C2.56789 7.08866 2.55634 7.03063 2.55634 6.97203C2.55634 6.85367 2.60336 6.74017 2.68705 6.65647C2.77074 6.57278 2.88425 6.52577 3.00261 6.52577C3.12096 6.52577 3.23447 6.57278 3.31816 6.65647L5.66927 9.03425L10.6871 4.01648C10.7707 3.93278 10.8842 3.88577 11.0026 3.88577C11.121 3.88577 11.2345 3.93278 11.3182 4.01648C11.4019 4.10017 11.4489 4.21367 11.4489 4.33203C11.4489 4.45039 11.4019 4.5639 11.3182 4.64759L5.98483 9.98092C5.9433 10.0221 5.89405 10.0547 5.8399 10.0768C5.78575 10.0989 5.72777 10.1101 5.66927 10.1098Z"
                      className="icon_fill"
                    />
                  </svg>
                  Wrong! You have selected wrong answer
                </div>
              </div>
            </div>
          </ol>
        </div>

        <div className="next_btn">
          <button className="btn" id="next_button" onClick={togglePopup}>
            Next <FaChevronRight className="rightArrow_icon" />
          </button>
        </div>
      </div>
      {popup && (
        <>
          <div className="popup active" id="popup">
            <img src="/images/congrats_img.png" alt="" />
            <div>
              <h3>Congratulations!</h3>
              <p>You have scored 25 out of 30</p>
              <button>Continue</button>
            </div>
          </div>
          <div
            className="overlay active"
            id="overlay"
            onClick={togglePopup}
          ></div>
        </>
      )}
    </>
  );
};

export default Mockup_test;
export { Before_you_start, Questions };
