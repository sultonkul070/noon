import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="nav">
          <div className="navbar">
            <a className="logo-link" href="/uae-en/" id="btn_logo">
              <img
                src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
                alt="noon"
                className="logo-img"
              />
            </a>

            <div className="delivery-address-box">
              <div className="delivery-box">
                <a className="delivery-link" href="#1">
                  <img
                    src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
                    alt="country-ae"
                    className="delivery-img"
                  />
                  <span>
                    <span className="delivery-text-box">
                      Deliver to &nbsp; &nbsp;{" "}
                      <div className="delivery-icon-box">
                        <img
                          src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
                          alt="areaCode"
                          className="delivery-icon"
                        />
                      </div>
                    </span>
                    <div className="default-address">
                      <span className="address-text">Dubai</span>
                    </div>
                  </span>
                </a>
              </div>
            </div>

            <div className="nav-search-box">
              <div className="nav-search-box-div">
                {/* <div className="navbar-search-box">
                  <div className="search-box">
                    <button className="search-box-btn">
                      <div className="search-box-btn-div">
                        <span></span>
                        <img
                          src="https://z.nooncdn.com/s/app/com/noon/icons/down-chevron.svg"
                          alt="open"
                        />
                      </div>
                    </button>
                    <div className="search-box-empty">
                      <div></div>
                    </div>
                  </div>
                </div> */}
                <div className="search-input-box">
                  <input
                    type="text"
                    id="searchBar"
                    className="search-input"
                    placeholder="What are you looking for?"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div className="lang-box">
              <div role="button" tabIndex="0" className="lang-btn">
                العربية
              </div>
              <div className="lang-div"></div>
            </div>

            <div className="sign-box">
              <div className="sign-box-div">
                <button type="button" className="sign-btn">
                  <span id="dd_header_signInOrUp" className="sign-text">
                    Sign In
                  </span>
                  <img
                    src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg"
                    alt="Open Login Modal"
                    className="sign-icon"
                  />
                </button>
              </div>
            </div>

            <a href="#1" title="Cart" className="cart-link">
              <span className="cart-title">Cart</span>
              <div className="cart-icon-container">
                <img
                  src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"
                  alt="cart"
                  width="20px"
                  height="20px"
                  className="cart-icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
