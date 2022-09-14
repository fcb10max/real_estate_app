import React from "react";
import About from "./components/About";
import Form from "./components/Form";
import PageTop from "./components/PageTop";
import Slider from "./components/Slider";
import { MainPage } from "./styles";
import sliderArr from "../../sliderObj";

const Main: React.FC = () => {

  return (
    <MainPage>
      <PageTop />
      {/* there will be items component */}
      {/* there will be map component */}
      <About />
      <Slider arr={sliderArr} />
      <Form />
    </MainPage>
  );
};

export default Main;