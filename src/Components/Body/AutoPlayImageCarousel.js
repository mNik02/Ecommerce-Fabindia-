import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const AutoPlayImageCarousel = ({ carouselData }) => {
  const items = carouselData.map((item) => (
    <img
      className="CursorPointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default AutoPlayImageCarousel;
