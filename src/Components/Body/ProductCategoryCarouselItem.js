import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../Assets/Css/BodyCards.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const CardItem = ({ card }) => (
  <div style={{ width: "18rem" }} className="mb-3">
    <img src={card.image} alt="products" />
  </div>
);
const ProductCategoryCarouselItem = ({ title, cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);


  // Repeat cards for an infinite loop
  const duplicatedCards = [...cards, ...cards, ...cards,]; 

  const CardCarousel = () => (
    <AliceCarousel
      disableDotsControls
      cards={duplicatedCards}
      disableButtonsControls
      onSlideChanged={({ item }) => setActiveIndex(item)}
      activeIndex={activeIndex}
      infinite
    >
      {duplicatedCards.reduce((acc, card, index) => {
        if (index % 3 === 0) {
          acc.push([card]);
        } else {
          acc[acc.length - 1].push(card);
        }
        return acc;
      }, []).map((slide, index) => (
        <div key={index}>
          <div className="cards">
            {slide.map((card, index) => (
              <CardItem key={index} card={card} />
            ))}
          </div>
        </div>
      ))}
    </AliceCarousel>
  );

  return (
    <>
      <div className="CardCarousel">
        <a className="Cardtitle">
          <b>{title}</b>
        </a>
        <CardCarousel />
        <Button
          variant="contained"
          className="sideleft z-50  bg-white"
          onClick={slideNext}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(+90deg)", color: "black" }}
          />
        </Button>
        <Button
          variant="contained"
          className="sideright z-50  bg-white"
          onClick={slidePrev}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    </>
  );
};

export default ProductCategoryCarouselItem;
