import React from "react";
import {
  Alert,
  AmericanExpress,
  Cash,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Mastercard,
  Twitter,
  Visa,
} from "../Icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./Footer.css";

const Rights = () => (
  <div className="rights">
    <img
      className="rights-img"
      src="images/footer/consumer-rights.png"
      alt="Consumer Rights"
    />
  </div>
);

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="help">
          <div className="help-text">
            <p className="help-title">We're Always Here To Help</p>
            <p className="help-description">
              Reach out to us through any of these support channels
            </p>
          </div>
          <div className="help-support">
            <a className="help-support-link" href="#center">
              <div className="help-support-icon">
                <Alert />
              </div>
              <div className="help-support-text">
                <span className="help-support-title">help center</span>
                <span className="help-support-url">help.noon.com</span>
              </div>
            </a>
            <a className="help-support-link" href="#email">
              <div className="help-support-icon">
                <Email />
              </div>
              <div className="help-support-text">
                <span className="help-support-title">email support</span>
                <span className="help-support-url">care@noon.com</span>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-nav-col">
            <p className="footer-nav-title">ELECTRONICS</p>
            <a href="#1" className="footer-nav-link">
              Mobiles
            </a>
            <a href="#1" className="footer-nav-link">
              Tablets
            </a>
            <a href="#1" className="footer-nav-link">
              Laptops
            </a>
            <a href="#1" className="footer-nav-link">
              Home Appliances
            </a>
            <a href="#1" className="footer-nav-link">
              Camera, Photo and Video
            </a>
            <a href="#1" className="footer-nav-link">
              Televisions
            </a>
            <a href="#1" className="footer-nav-link">
              Headphones
            </a>
            <a href="#1" className="footer-nav-link">
              Video Games
            </a>
          </div>

          <div className="footer-nav-col">
            <p className="footer-nav-title">FASHION</p>
            <a href="#1" className="footer-nav-link">
              Women's Fashion
            </a>
            <a href="#1" className="footer-nav-link">
              Men's Fashion
            </a>
            <a href="#1" className="footer-nav-link">
              Girls' Fashion
            </a>
            <a href="#1" className="footer-nav-link">
              Boys' Fashion
            </a>
            <a href="#1" className="footer-nav-link">
              Watches
            </a>
            <a href="#1" className="footer-nav-link">
              Jewellery
            </a>
            <a href="#1" className="footer-nav-link">
              Women's Handbags
            </a>
            <a href="#1" className="footer-nav-link">
              Men's Eyewear
            </a>
          </div>

          <div className="footer-nav-col">
            <p className="footer-nav-title">HOME AND KITCHEN</p>
            <a href="#1" className="footer-nav-link">
              Bath
            </a>
            <a href="#1" className="footer-nav-link">
              Home Decor
            </a>
            <a href="#1" className="footer-nav-link">
              Kitchen & Dining
            </a>
            <a href="#1" className="footer-nav-link">
              Tools & Home Improvement
            </a>
            <a href="#1" className="footer-nav-link">
              Audio & Video
            </a>
            <a href="#1" className="footer-nav-link">
              Furniture
            </a>
            <a href="#1" className="footer-nav-link">
              Patio, Lawn & Garden
            </a>
            <a href="#1" className="footer-nav-link">
              Pet Supplies
            </a>
          </div>

          <div className="footer-nav-col">
            <p className="footer-nav-title">BEAUTY</p>
            <a href="#1" className="footer-nav-link">
              Fragrance
            </a>
            <a href="#1" className="footer-nav-link">
              Make-Up
            </a>
            <a href="#1" className="footer-nav-link">
              Haircare
            </a>
            <a href="#1" className="footer-nav-link">
              Skincare
            </a>
            <a href="#1" className="footer-nav-link">
              Personal Care
            </a>
            <a href="#1" className="footer-nav-link">
              Tools & Accessories
            </a>
            <a href="#1" className="footer-nav-link">
              Men's Grooming
            </a>
            <a href="#1" className="footer-nav-link">
              Health Care Essentials
            </a>
          </div>

          <div className="footer-nav-col">
            <p className="footer-nav-title">BABY</p>
            <a href="#1" className="footer-nav-link">
              Strollers & Prams
            </a>
            <a href="#1" className="footer-nav-link">
              Car Seats
            </a>
            <a href="#1" className="footer-nav-link">
              Feeding
            </a>
            <a href="#1" className="footer-nav-link">
              Bathing & Skincare
            </a>
            <a href="#1" className="footer-nav-link">
              Diapering
            </a>
            <a href="#1" className="footer-nav-link">
              Baby Clothing & Shoes
            </a>
            <a href="#1" className="footer-nav-link">
              Baby & Toddler Toys
            </a>
            <a href="#1" className="footer-nav-link">
              Baby Foods
            </a>
          </div>

          <div className="footer-nav-col">
            <p className="footer-nav-title">TOP BRANDS</p>
            <a href="#1" className="footer-nav-link">
              Mothercare
            </a>
            <a href="#1" className="footer-nav-link">
              Apple
            </a>
            <a href="#1" className="footer-nav-link">
              Nike
            </a>
            <a href="#1" className="footer-nav-link">
              Samsung
            </a>
            <a href="#1" className="footer-nav-link">
              Tefal
            </a>
            <a href="#1" className="footer-nav-link">
              L'Oreal Paris
            </a>
            <a href="#1" className="footer-nav-link">
              Skechers
            </a>
            <a href="#1" className="footer-nav-link">
              Silsal
            </a>
          </div>

          <div className="footer-nav-col">
            <p className="footer-nav-title">DAILY GROCERIES</p>
            <a href="#1" className="footer-nav-link">
              Fresh Produce
            </a>
            <a href="#1" className="footer-nav-link">
              Dairy & Eggs
            </a>
            <a href="#1" className="footer-nav-link">
              Bread & Bakery
            </a>
            <a href="#1" className="footer-nav-link">
              Meat & Seafood
            </a>
            <a href="#1" className="footer-nav-link">
              Breakfast Food
            </a>
            <a href="#1" className="footer-nav-link">
              Pantry Staples
            </a>
            <a href="#1" className="footer-nav-link">
              Household Supplies
            </a>
            <a href="#1" className="footer-nav-link">
              Personal Care
            </a>
          </div>
        </div>

        <div className="footer-social-logos">
          <div className="mobile-apps-box">
            <div className="mobile-apps">
              <div className="mobile-apps-title">Shop on the go</div>
              <div className="mobile-apps-logos">
                <img
                  src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
                  alt="App Store"
                  className="mobile-app-logo"
                />
                <img
                  src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
                  alt="Google Play"
                  className="mobile-app-logo"
                />
              </div>
            </div>
          </div>
          <div className="social-media-box">
            <div className="social-media">
              <div className="social-media-title">Connect with us</div>
              <div className="social-media-logos">
                <a className="social-media-icon" href="#1">
                  <Facebook />
                </a>

                <a className="social-media-icon" href="#1">
                  <Twitter />
                </a>
                <a className="social-media-icon" href="#1">
                  <Instagram />
                </a>
                <a className="social-media-icon" href="#1">
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-under">
          <div className="footer-under-nav">
            <Tippy
              offset={[-36, 8]}
              theme="light"
              delay={150}
              content={
                <div className="copyright-tooltip">
                  'noon', the 'noon device', 'noon east', 'east' and the 'east
                  device' are trade marks or registered trade marks of Noon AD
                  Holdings LTD. in the UAE and other countries
                </div>
              }
            >
              <div className="footer-copyright">
                © 2022 noon. All Rights Reserved
              </div>
            </Tippy>
            <ul className="footer-payments-list">
              <li className="payment-type">
                <div className="payment-type-logo">
                  <Mastercard />
                </div>
              </li>
              <li className="payment-type">
                <div className="payment-type-logo">
                  <Visa />
                </div>
              </li>
              <li className="payment-type">
                <div className="payment-type-logo">
                  <Cash />
                </div>
              </li>
              <li className="payment-type">
                <div className="payment-type-logo">
                  <AmericanExpress />
                </div>
              </li>
            </ul>
            <div className="footer-terms-list">
              <li className="terms-list-item">
                <a className="terms-item-link" href="#1">
                  Careers
                </a>
              </li>
              <li className="terms-list-item">
                <a className="terms-item-link" href="#1">
                  Warranty Policy
                </a>
              </li>
              <li className="terms-list-item">
                <a className="terms-item-link" href="#1">
                  Sell with us
                </a>
              </li>
              <li className="terms-list-item">
                <a className="terms-item-link" href="#1">
                  Terms of Use
                </a>
              </li>
              <li className="terms-list-item">
                <a className="terms-item-link" href="#1">
                  Terms of Sale
                </a>
              </li>
              <li className="terms-list-item">
                <a className="terms-item-link" href="#1">
                  Privacy Policy
                </a>
              </li>
              <li className="terms-list-item">
                <Tippy theme="light" delay={150} content={<Rights></Rights>}>
                  <a className="terms-item-link" href="#1">
                    Consumer Rights
                  </a>
                </Tippy>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
