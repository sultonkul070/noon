import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import { items } from "../Data";
import "./Recommended.css";

const Recommended = () => {
  const Prev = ({ onClick }) => {
    return (
      <div onClick={onClick} className="btn-arrow btn-prev">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
    );
  };

  const Next = ({ onClick }) => {
    return (
      <div onClick={onClick} className="btn-arrow btn-next">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    );
  };

  const settings = {
    infinite: false,
    slidesToShow: 7,
    swipeToSlide: true,
    speed: 500,
    slidesToScroll: 7,
    initialSlide: 0,
    prevArrow: <Prev />,
    nextArrow: <Next />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="section-recommended">
      <div className="container">
        <div className="recommended-title-box">
          <h3 className="recommended-title">Recommended for you</h3>
        </div>

        <div className="cards-box">
          <Slider className="cards" {...settings}>
            {items.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
