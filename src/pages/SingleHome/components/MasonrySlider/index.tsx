import React, { useState, useRef, useEffect } from "react";
import Main from "./styles";
import zoomIn from "../../../../assets/images/svg/zoom-in.svg";
import zoomOut from "../../../../assets/images/svg/zoom-out.svg";

interface IProps {
  imgArr: {
    l: string;
    s: string;
  }[];
}

const MasonrySlider: React.FC<IProps> = ({ imgArr }) => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const [largeImg, setLargeImg] = useState<string>("");
  const [isImgFullScreenViewActive, setIsImgFullScreenViewActive] =
    useState(false);
  const [zoomValue, setZoomValue] = useState(1);

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

  const showLargeImage = (imgUrl: string) => {
    setLargeImg(imgUrl);
    setIsImgFullScreenViewActive(true);
  };

  const zoomInHandler = () => {
    if (zoomValue >= 2) return;
    setZoomValue(zoomValue + 0.1);
  };

  const zoomOutHandler = () => {
    setZoomValue(zoomValue - 0.1);
  };

  useEffect(() => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = `scale(${zoomValue})`;
  }, [zoomValue]);

  return (
    <Main>
      {isImgFullScreenViewActive && (
        <div className="largeImgModalWindow">
          <span
            className="close"
            onClick={() => {
              setIsImgFullScreenViewActive(false);
              setZoomValue(1);
            }}
          />
          {zoomValue < 2 && (
            <span onClick={zoomInHandler} className="zoomIn">
              <img src={zoomIn} alt="zoom in" />
            </span>
          )}{" "}
          {zoomValue > 1 && (
            <span onClick={zoomOutHandler} className="zoomOut">
              <img src={zoomOut} alt="zoom out" />
            </span>
          )}
          <img src={largeImg} alt="room" ref={imgRef} />
        </div>
      )}
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
                  <div key={idx2} onClick={(e) => showLargeImage(imgURL.l)}>
                    <img src={imgURL.s} alt="room" />
                  </div>
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
