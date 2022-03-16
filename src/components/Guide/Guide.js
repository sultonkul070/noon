import React from "react";
import "./Guide.css";

const Guide = () => {
  return (
    <div className="section-guides">
      <div className="container">
        <div className="guides-header">
          <img
            className="guides-header-img"
            src="images/guides/guide-header.png"
            alt="Guide header"
          />
        </div>

        <div className="guides">
          <div className="guide">
            <a href="#1" className="guide-link">
              <img
                className="guide-img"
                src="images/guides/guide-1.png"
                alt="Guide "
              />
            </a>
          </div>
          <div className="guide">
            <a href="#2" className="guide-link">
              <img
                className="guide-img"
                src="images/guides/guide-2.png"
                alt="Guide "
              />
            </a>
          </div>
          <div className="guide">
            <a href="#3" className="guide-link">
              <img
                className="guide-img"
                src="images/guides/guide-3.png"
                alt="Guide "
              />
            </a>
          </div>
          <div className="guide">
            <a href="#4" className="guide-link">
              <img
                className="guide-img"
                src="images/guides/guide-4.png"
                alt="Guide "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
