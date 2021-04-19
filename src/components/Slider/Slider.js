import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import '../../assets/css/slick.css'

const CustomSlider = (props)  =>  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const { data } = props;

  return (
    <div className="slick">
      <Slider {...settings}>
        {data && data.map((banner, index) => (
          <Link key={index} to={banner.link}>
            <img src={banner.image_url} alt={banner?.description} style={{width: '100%'}}></img>
          </Link>
        ))}
        {/* <div>
          
        </div>
        <div>
          <img src="https://loremflickr.com/2000/800?random=2" alt=":asd" style={{width: '100%'}}></img>
        </div>
        <div>
          <img src="https://loremflickr.com/2000/800?random=3" alt=":asd" style={{width: '100%'}}></img>
        </div>
        <div>
          <img src="https://loremflickr.com/2000/800?random=4" alt=":asd" style={{width: '100%'}}></img>
        </div>
        <div>
          <img src="https://loremflickr.com/2000/800?random=5" alt=":asd" style={{width: '100%'}}></img>
        </div> */}
      </Slider>
    </div>
  );
}

export default CustomSlider;