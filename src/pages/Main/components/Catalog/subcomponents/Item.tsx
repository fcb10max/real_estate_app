import React, {useRef} from "react";
import { Link } from "react-router-dom";
import {IObj} from "../../../../../catalogItems"; 
import bathroomIcon from "../../../../../assets/images/svg/bathroomIcon.svg";
import bedroomIcon from "../../../../../assets/images/svg/bedroomIcon.svg";


const Item: React.FC<{ item: IObj; }> = ({ item }) => {
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  const handleImageArrowClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (!imagesContainerRef.current) return;
    const imgsContainer = imagesContainerRef.current;
    const imgContainerOffsetWidth = imgsContainer.offsetWidth;
    const isForward = e.currentTarget.innerText === ">" ? true : false;
    if (isForward) {
      imgsContainer.scrollBy({
        left: imgContainerOffsetWidth,
        behavior: "smooth",
      });
    } else {
      imgsContainer.scrollBy({
        left: -imgContainerOffsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="catalog__wrapper__items__item">
      <div className="catalog__wrapper__items__item__imgs">
        <span className="left" onClick={handleImageArrowClick}>
          {"<"}
        </span>
        <span className="right" onClick={handleImageArrowClick}>
          {">"}
        </span>
        <div ref={imagesContainerRef}>
          {item.homeImgs.map((img, idx) => (
            <section key={idx}>
              <img src={img} alt="house" />
            </section>
          ))}
        </div>
      </div>
      <div className="catalog__wrapper__items__item__info">
        <div className="catalog__wrapper__items__item__info__top">
          <p className="price">{item.price} $</p>
          <Link to={`/home/${item.id}`}>View Details</Link>
        </div>
        <div className="catalog__wrapper__items__item__info__bottom">
          <span>
            <i>
              <img src={bedroomIcon} alt="bedroom" />
            </i>
            <p>
              {item.rooms.bedrooms > 1
                ? `${item.rooms.bedrooms} bedrooms`
                : `${item.rooms.bedrooms} bedroom`}
            </p>
          </span>
          <span>
            <i>
              <img src={bathroomIcon} alt="bathroom" />
            </i>
            <p>
              {item.rooms.bathrooms > 1
                ? `${item.rooms.bathrooms} bathrooms`
                : `${item.rooms.bathrooms} bathroom`}
            </p>
          </span>
          <span>
            <p>{item.area} sq ft</p>
          </span>
        </div>
      </div>
    </div>
  );
};


export default Item