import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Loading from "../Loading/Loading";
import "../../assets/css/slick.css";

const CustomSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: "ondemand",
    autoplaySpeed: 5000,
    swipeToSlide: true,
  };

  const { data, loading } = props;

  return (
    <div className="container">
      <div className="slick">
        <Slider {...settings}>
          {!loading &&
            data &&
            data.map((banner, index) => (
              <Link key={index} to={banner.link} style={{ overflow: "hidden" }}>
                <img
                  src={banner.image_url}
                  alt={banner?.description}
                  style={{ width: "100%" }}
                ></img>
              </Link>
            ))}
          {loading && <Loading />}
          {loading && <Loading />}
          {loading && <Loading />}
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
