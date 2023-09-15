import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Title from "../ui/Title";
import banner from "../api/banner.json";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const settings = {
  autoPlay: true,
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "linear",
  nextArrow: <NextBtn />,
  prevArrow: <PrevBtn />,
};

function NextBtn(props) {
  const { style, onClick } = props;
  return (
    <button
      className=" text-brand-color absolute top-1/2 -translate-y-1/2 -right-6"
      style={style}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </button>
  );
}

function PrevBtn(props) {
  const { style, onClick } = props;
  return (
    <button
      className="text-brand-color absolute top-1/2 -left-6 -translate-y-1/2"
      style={style}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </button>
  );
}

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    setCampaigns(banner);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <Title>Kampanyalar</Title>
      <Slider {...settings} className="-mx-2">
        {campaigns.length &&
          campaigns.map((banner, index) => (
            <div key={banner.id}>
              <picture className=" block px-2">
                <img src={banner.image} alt="" className="rounded-lg"></img>
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
