import React from "react";
import "./Megadeals.css";

const Megadeals = () => {
  return (
    <div className="section-megadeals">
      <div className="container">
        <div className="megadeals-header">
          <img
            className="megadeals-header-img"
            src="images/megadeals/megadeals-header.png"
            alt="megadeal header"
          />
        </div>

        <div className="megadeals">
          <div className="megadeal">
            <a href="#1" className="megadeal-link">
              <img
                className="megadeal-img"
                src="images/megadeals/megadeal-1.png"
                alt="megadeal "
              />
            </a>
          </div>
          <div className="megadeal">
            <a href="#2" className="megadeal-link">
              <img
                className="megadeal-img"
                src="images/megadeals/megadeal-2.png"
                alt="megadeal "
              />
            </a>
          </div>
          <div className="megadeal">
            <a href="#3" className="megadeal-link">
              <img
                className="megadeal-img"
                src="images/megadeals/megadeal-3.png"
                alt="megadeal "
              />
            </a>
          </div>
          <div className="megadeal">
            <a href="#4" className="megadeal-link">
              <img
                className="megadeal-img"
                src="images/megadeals/megadeal-4.png"
                alt="megadeal "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megadeals;
