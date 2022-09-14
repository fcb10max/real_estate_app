import React, { useRef, useState, useEffect } from "react";
import SliderComponent from "./styles";

interface IObj {
  image: string;
  city: string;
  country: string;
}

interface IProps {
  arr: IObj[];
}

const Slider: React.FC<IProps> = ({ arr }) => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const switcherContainerRef = useRef<HTMLDivElement>(null);
  const [currentSliderElInd, setCurrentSliderElInd] = useState(0);

  const sliderElClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const el = e.currentTarget;
    setCurrentSliderElInd(parseInt(el.id));
  };

  const sliderMoveButtonClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!sliderContainerRef.current) return;
    const el = sliderContainerRef.current;
    const children: Element[] = Array.from(el.children);
    const isTurnForward = e.currentTarget.innerText === ">" ? true : false;
    if (currentSliderElInd === 0 && !isTurnForward)
      return setCurrentSliderElInd(children.length - 1);
    if (currentSliderElInd + 1 === children.length && isTurnForward)
      return setCurrentSliderElInd(0);
    setCurrentSliderElInd((prev) => (isTurnForward ? prev + 1 : prev - 1));
  };

  const switcherClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const swithcerElId = parseInt(e.currentTarget.id.slice(-1));
    setCurrentSliderElInd(swithcerElId);
  }

  useEffect(() => {
    if (!sliderContainerRef.current) return;
    const el = sliderContainerRef.current;
    const children: Element[] = Array.from(el.children);
    children[currentSliderElInd].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentSliderElInd]);

  return (
    <SliderComponent>
      <div className="slider__wrapper">
        <h2>Other Projects</h2>
        <p>Other projects by us in different locations </p>
        <div>
          <span className="left" onClick={sliderMoveButtonClickHandler}>
            {"<"}
          </span>
          <span className="right" onClick={sliderMoveButtonClickHandler}>
            {">"}
          </span>
          <div className="slider__wrapper__items" ref={sliderContainerRef}>
            {arr.map((item, ind) => (
              <div
                key={ind}
                id={`${ind}`}
                className={ind === currentSliderElInd ? "active" : ""}
                onClick={sliderElClickHandler}
              >
                <img src={item.image} alt="home" />
                <div className="text">
                  <h2>{item.city}</h2>
                  <p>{item.country}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="switcher" ref={switcherContainerRef}>
            {arr.map((el,ind)=><div onClick={switcherClickHandler} id={`img${ind}`} className={ind === currentSliderElInd ? "active" : ""} key={ind} />)}
          </div>
        </div>
      </div>
    </SliderComponent>
  );
};

export default Slider;
