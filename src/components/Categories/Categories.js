import React from "react";
import Slider from "react-slick";
import { categories } from "../Data";
import "./Categories.css";

const Categories = () => {
  const Prev = ({ className, onClick }) => {
    return (
      <div onClick={onClick} className="btn-arrow btn-prev">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
    );
  };

  const Next = ({ className, onClick }) => {
    return (
      <div onClick={onClick} className="btn-arrow btn-next">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    );
  };

  const settings = {
    infinite: false,
    slidesToShow: 12,
    swipeToSlide: true,
    speed: 500,
    slidesToScroll: 12,
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
    <div className="section-categories">
      <div className="container">
        <Slider className="categories" {...settings}>
          {categories.map((item, index) => (
            <div className="category" key={index}>
              <a href="#1" className="category-link">
                <img className="category-img" src={item} alt="Category item" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
