import React, { useState, useRef, useEffect } from "react";
import Main from "./styles";

interface IProps {
  imgArr: {
    l: string;
    s: string;
  }[];
}

const MasonrySlider: React.FC<IProps> = ({ imgArr }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const [largeImg, setLargeImg] = useState<string>("");
  const [isImgFullScreenViewActive, setIsImgFullScreenViewActive] = useState(false);

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

  const switchCard = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const isForward = e.currentTarget.innerText === ">" ? true : false;
    const maxCardIdxValue = chunkedImgArr.length - 1;
    if (isForward) {
      if (activeCardIdx < maxCardIdxValue) setActiveCardIdx(activeCardIdx + 1);
      if (activeCardIdx === maxCardIdxValue) setActiveCardIdx(0);
    }
    if (!isForward) {
      if (activeCardIdx > 0) setActiveCardIdx(activeCardIdx - 1);
      if (activeCardIdx === 0) setActiveCardIdx(maxCardIdxValue);
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    Array.from(el.children)[activeCardIdx].scrollIntoView({
      behavior: "smooth",
      inline: "end",
      block: "nearest",
    });
  }, [activeCardIdx]);

  return (
    <Main>
      <div className="bigImgModalWindow">
        <span />
        <img src={largeImg} alt="room" />
      </div>
      <div className="masonrySlider__wrapper">
        <span onClick={switchCard}>{"<"}</span>
        <span onClick={switchCard}>{">"}</span>
        <div className="masonrySlider__wrapper__imagesCardContainer" ref={ref}>
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
            Array(chunkedImgArr.length)
              .fill("")
              .map((el, idx) => (
                <span
                  key={idx}
                  className={activeCardIdx === idx ? "active" : undefined}
                  onClick={() => setActiveCardIdx(idx)}
                />
              ))}
        </div>
      </div>
    </Main>
  );
};

export default MasonrySlider;
