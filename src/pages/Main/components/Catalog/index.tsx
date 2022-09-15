import React, { useEffect, useState } from "react";
import CatalogComponent from "./styles";
import data from "../../../../catalogItems";
import filterIcon from "../../../../assets/images/svg/filter.svg";

const Catalog = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [catalogItems, setCatalogItems] = useState(data.slice(0, 6));

  const [houseTypes, setHouseTypes] = useState<string[]>([]);
  useEffect(() => {
    const types = Array.from(new Set(data.map((i) => i.houseType)));
    setHouseTypes(types);
  }, []);

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
            <div key={idx} className="catalog__wrapper__items__item">
              <div className="catalog__wrapper__items__item__imgs">
                {item.homeImgs.map((image, idx) => (
                  <img key={idx} src={image} alt="home" />
                ))}
              </div>
              <div className="catalog__wrapper__items__item__info">
                <div className="catalog__wrapper__items__item__info__top"></div>
                <div className="catalog__wrapper__items__item__info__botom"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="catalog__wrapper__loadMore"></div>
      </div>
    </CatalogComponent>
  );
};

export default Catalog;
