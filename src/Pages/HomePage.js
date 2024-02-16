import React from "react";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {
  WomenCards,
  KidsCards,
  MenCards,
  FirstDoubleCardImages,
  SecondDoubleCardImages,
  BodyCarouselMid,
  BodyCarouselTop,
  BodyCarouselBottom,
  HomedecorCards,
  ThirdDoubleCardImages,
} from "../Assets/images/BodyComponentsGallery";

import DualCardDisplay from "../Components/Body/DualCardDisplay";
import AutoPlayImageCarousel from "../Components/Body/AutoPlayImageCarousel";
import ProductCategoryCarouselItem from "../Components/Body/ProductCategoryCarouselItem";

function HomePage() {
  return (
    <>
      <Header />
      <AutoPlayImageCarousel carouselData={BodyCarouselTop} />
      <ProductCategoryCarouselItem title="Fantastic Finds" cards={WomenCards} />
      <br />


      <DualCardDisplay cardImages={FirstDoubleCardImages} />
      <br />
      <br />

      <ProductCategoryCarouselItem title="Fantastic Finds" cards={MenCards} />
      <br />
      <br />

      <AutoPlayImageCarousel carouselData={BodyCarouselMid} />

      <ProductCategoryCarouselItem title="Fantastic Finds" cards={KidsCards} />
      <br />
      <br />
      <DualCardDisplay cardImages={SecondDoubleCardImages} />
      <br />
      <br />
      <AutoPlayImageCarousel carouselData={BodyCarouselBottom} />
      <ProductCategoryCarouselItem
        title="Fantastic Finds"
        cards={HomedecorCards}
      />
      <br />
      <br />
      <DualCardDisplay cardImages={ThirdDoubleCardImages} />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default HomePage;
