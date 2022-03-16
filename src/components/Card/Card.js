import React from "react";
import { CardIcon, Star } from "../Icons";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-container-box">
          <div>
            <div className="card-inner-box">
              <div className="inner-icon-box">
                <CardIcon />
              </div>
              <div>
                <div className="card-img-box">
                  <img
                    src={item.img}
                    alt="Bluetooth Full Touch Call Smartwatch With Replaceable Strap Black"
                    className="card-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-head-box">
            <div className="card-head">
              <div className="card-head-div">
                <div className="card-head-text-box">
                  <p className="card-head-text">
                    10% off up to 50 | Use code: SAVING | T&amp;Cs apply
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-empty-box"></div>
        </div>

        <div className="card-body">
          <div className="card-body-title">
            <span>
              <span>
                <span>Apple iPhone 13 Pro</span>
                <br />
                <span>
                  <span>Max 256GB Sierra Bl</span>
                </span>
              </span>
              <span className="card-body-span">...</span>
            </span>
          </div>
          <div className="card-price-box">
            <div>
              <div className="card-price">
                <span className="currency">AED</span> <strong>31.95</strong>
              </div>
              <div className="old-price-box">
                <span className="old-price">AED 89</span>
                <span className="price-discount">64% OFF</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <span className="card-arrive-box">
              <div className="card-arrive-time">
                Arrives
                <div className="em">Tomorrow, Mar 17</div>
              </div>
            </span>
            <div className="card-arrive-status-box">
              <div className="arrive-status-img-box">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                  alt="noon-express"
                  className="arrive-status-img"
                  width="80"
                  height="20"
                />
              </div>
              <div className="status-stars-box">
                <div className="status-stars">
                  <Star className="star-icon" />
                  <span className="rating-value">4.1</span>
                  <span className="rating-count">
                    <svg
                      width="3"
                      height="10"
                      viewBox="0 0 3 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.244 10.188C1.464 8.676 0.984 7.296 0.984 5.304C0.984 3.3 1.464 1.932 2.244 0.408L1.692 0C0.612 1.488 0 3.372 0 5.304C0 7.236 0.612 9.12 1.692 10.608L2.244 10.188Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="count">185</span>
                    <svg
                      width="3"
                      height="10"
                      viewBox="0 0 3 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ transform: "scaleX(-1)" }}
                    >
                      <path
                        d="M2.244 10.188C1.464 8.676 0.984 7.296 0.984 5.304C0.984 3.3 1.464 1.932 2.244 0.408L1.692 0C0.612 1.488 0 3.372 0 5.304C0 7.236 0.612 9.12 1.692 10.608L2.244 10.188Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
