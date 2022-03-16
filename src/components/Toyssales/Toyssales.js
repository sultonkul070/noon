import React from "react";
import "./Toyssales.css";

const Toyssales = () => {
  return (
    <div className="section-toyssale">
      <div className="container">
        <div className="toyssale-header">
          <img
            className="toyssale-header-img"
            src="images/toyssales/toyssale-header.png"
            alt="toyssale header"
          />
        </div>

        <div className="toyssales">
          <div className="toyssale">
            <a href="#1" className="toyssale-link">
              <img
                className="toyssale-img"
                src="images/toyssales/toyssale-1.png"
                alt="toyssale "
              />
            </a>
          </div>
          <div className="toyssale">
            <a href="#2" className="toyssale-link">
              <img
                className="toyssale-img"
                src="images/toyssales/toyssale-2.png"
                alt="toyssale "
              />
            </a>
          </div>
          <div className="toyssale">
            <a href="#3" className="toyssale-link">
              <img
                className="toyssale-img"
                src="images/toyssales/toyssale-3.png"
                alt="toyssale "
              />
            </a>
          </div>
          <div className="toyssale">
            <a href="#4" className="toyssale-link">
              <img
                className="toyssale-img"
                src="images/toyssales/toyssale-4.png"
                alt="toyssale "
              />
            </a>
          </div>
          <div className="toyssale">
            <a href="#5" className="toyssale-link">
              <img
                className="toyssale-img"
                src="images/toyssales/toyssale-5.png"
                alt="toyssale "
              />
            </a>
          </div>
          <div className="toyssale">
            <a href="#6" className="toyssale-link">
              <img
                className="toyssale-img"
                src="images/toyssales/toyssale-6.png"
                alt="toyssale "
              />
            </a>
          </div>
          <div className="toyssale">
            <a href="#7" className="toyssale-link">
              <img
                className="toyssale-img"
                src="images/toyssales/toyssale-7.png"
                alt="toyssale "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toyssales;
