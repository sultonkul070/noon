import React from "react";
import "./Bigsales.css";

const Bigsales = () => {
  return (
    <div className="section-bigsales">
      <div className="container">
        <div className="bigsales">
          <div className="bigsale">
            <a href="#1" className="bigsale-link">
              <img
                className="bigsale-img"
                src="images/bigsales/bigsale-1.png"
                alt="bigsale "
              />
            </a>
          </div>
          <div className="bigsale">
            <a href="#2" className="bigsale-link">
              <img
                className="bigsale-img"
                src="images/bigsales/bigsale-2.png"
                alt="bigsale "
              />
            </a>
          </div>
          <div className="bigsale">
            <a href="#3" className="bigsale-link">
              <img
                className="bigsale-img"
                src="images/bigsales/bigsale-3.png"
                alt="bigsale "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigsales;
