import React from "react";
import About from "./components/About";
import Form from "./components/Form";
import PageTop from "./components/PageTop";
import Slider from "./components/Slider";
import { MainPage } from "./styles";
import sliderArr from "../../sliderObj";
import Catalog from "./components/Catalog";
import Map from "./components/Map";

const Main: React.FC = () => {
  return (
    <MainPage>
      <PageTop />
      <Catalog />
      <div className="map">
        <Map />
      </div>
      <About />
      <Slider arr={sliderArr} />
      <Form />
    </MainPage>
  );
};

export default Main;
