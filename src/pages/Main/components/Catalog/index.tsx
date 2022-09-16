import React, { useEffect, useRef, useState } from "react";
import CatalogComponent from "./styles";
import data, { IObj } from "../../../../catalogItems";
import { Link } from "react-router-dom";
import filterIcon from "../../../../assets/images/svg/filter.svg";
import bathroomIcon from "../../../../assets/images/svg/bathroomIcon.svg";
import bedroomIcon from "../../../../assets/images/svg/bedroomIcon.svg";
import loadMore from "../../../../assets/images/svg/loadMore.svg";

const Catalog = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [catalogItems, setCatalogItems] = useState(data.slice(0, 6));
  const [isAllDataFetched, setIsAllDataFetched] = useState(false);

  const [houseTypes, setHouseTypes] = useState<string[]>([]);
  useEffect(() => {
    const types = Array.from(new Set(data.map((i) => i.houseType)));
    setHouseTypes(types);
  }, []);

  const loadMoreHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCatalogItems(data);
    setIsAllDataFetched(true);
  };

  return (
    <CatalogComponent>
      <div
        className={
          isFilterActive ? "filterModalWindow active" : "filterModalWindow"
        }
      >
        <div className="filterModalWindow__container">
          <span
            className="filterModalWindow__container__close"
            onClick={() => setIsFilterActive(false)}
          />
          <div className="filterModalWindow__container__byTypes"></div>
          <div className="filterModalWindow__container__byPrice"></div>
          <div className="filterModalWindow__container__byRooms"></div>
          <div className="filterModalWindow__container__byArea"></div>
          <div className="filterModalWindow__container__byFeatures"></div>
        </div>
      </div>
      <div className="catalog__wrapper">
        <div className="catalog__wrapper__sortAndFilterBlock">
          <div className="catalog__wrapper__sortAndFilterBlock__types">
            {houseTypes.map((item, idx) => (
              <div key={idx}>
                <input
                  type={"radio"}
                  name="houseTypes"
                  value={item}
                  id={`type${idx}`}
                  defaultChecked={idx === 0 ? true : false}
                />
                <label htmlFor={`type${idx}`}>{item}</label>
              </div>
            ))}
          </div>
          <div className="catalog__wrapper__sortAndFilterBlock__filter">
            <button onClick={() => setIsFilterActive(true)}>
              <p>Filter</p>
              <i>
                <img src={filterIcon} alt="filter" />
              </i>
            </button>
          </div>
        </div>
        <div className="catalog__wrapper__items">
          {catalogItems.map((item, idx) => (
            <Item item={item} key={idx} homeIdx={idx} />
          ))}
        </div>
        {!isAllDataFetched && (
          <div className="catalog__wrapper__loadMore" onClick={loadMoreHandler}>
            <i>
              <img src={loadMore} alt="load_more" />
            </i>
            <p>View More</p>
          </div>
        )}
      </div>
    </CatalogComponent>
  );
};

const Item = ({ item, homeIdx }: { item: IObj; homeIdx: number }) => {
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
          <Link to={`/home/${homeIdx}`}>View Details</Link>
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

export default Catalog;
