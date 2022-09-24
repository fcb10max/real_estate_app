import React, { useState } from "react";
import Main from "./styles";

interface IProps {
  imgArr: {
    l: string;
    s: string;
  }[];
}

const MasonrySlider: React.FC<IProps> = ({ imgArr }) => {
  const [activeSwitcherIdx, setActiveSwitcherIdx] = useState(0);
  const [largeImg, setLargeImg] = useState<string>("");

  // Divide imgArr into chunks of arrays that contain 3 imgArr elements in them
  const chunkedImgArr: Array<IProps["imgArr"]> = imgArr.reduce(
    (resultArray: Array<any>, item, index) => {
      const chunkIndex = Math.floor(index / 3);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    },
    []
  );

  return (
    <Main>
      <div className="bigImgModalWindow">
        <img src={largeImg} alt="room" />
      </div>
      <div className="masonrySlider__wrapper">
        <div className="masonrySlider__wrapper__imagesCardContainer">
          {chunkedImgArr.length &&
            chunkedImgArr.map((chunk, idx1) => (
              <div
                className="masonrySlider__wrapper__imagesCardContainer__card"
                key={idx1}
              >
                {chunk.map((imgURL, idx2) => (
                  <img src={imgURL.s} key={idx2} alt="room" />
                ))}
              </div>
            ))}
        </div>
        <div className="masonrySlider__wrapper--switcher">
          {imgArr.length &&
            Array(imgArr.length / 6)
              .fill("")
              .map((el, idx) => (
                <span
                  key={idx}
                  className={activeSwitcherIdx === idx ? "active" : ""}
                >
                  {idx}
                </span>
              ))}
        </div>
      </div>
    </Main>
  );
};

export default MasonrySlider;
