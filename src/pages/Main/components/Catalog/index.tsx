import React, { useEffect, useState } from "react";
import CatalogComponent from "./styles";
import data, { IObj } from "../../../../catalogItems";
import filterIcon from "../../../../assets/images/svg/filter.svg";
import loadMore from "../../../../assets/images/svg/loadMore.svg";
import Filter from "./subcomponents/Filter";
import Item from "./subcomponents/Item";

enum featuresEnum {
  elevator = "elevator",
  laundry = "laundry facilities",
  closet = "walk in closet",
  fireplace = "fireplace",
  balcony = "balcony",
  garden = "garden",
}
interface IFilter {
  price: {
    startValue: number;
    endValue: number;
  };
  bedrooms: {
    startValue: number;
    endValue: number;
  };
  area: {
    startValue: number;
    endValue: number;
  };
  features?: featuresEnum[];
}

const Catalog: React.FC = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [catalogItems, setCatalogItems] = useState(data);
  const [renderItems, setRenderItems] = useState(catalogItems.slice(0, 6));
  const [isAllDataFetched, setIsAllDataFetched] = useState(false);
  const [filterSettings, setFilterSettings] = useState<IFilter>();

  useEffect(() => {
    let filteredData: IObj[] = data;
    if (filterSettings?.area) {
      filteredData = filteredData.filter(
        (el) =>
          el.area >= filterSettings.area.startValue &&
          el.area <= filterSettings.area.endValue
      );
    }
    if (filterSettings?.price) {
      filteredData = filteredData.filter(
        (el) =>
          el.price >= filterSettings.price.startValue &&
          el.price <= filterSettings.price.endValue
      );
    }
    if (filterSettings?.bedrooms) {
      filteredData = filteredData.filter(
        (el) =>
          el.rooms.bedrooms >= filterSettings.bedrooms.startValue &&
          el.rooms.bedrooms <= filterSettings.bedrooms.endValue
      );
    }
    if (filterSettings?.features && filterSettings.features.length > 0) {
      filteredData = filteredData.filter((el) => {
        const vals = el.features!.map((i) => i.name);
        for (let i = 0; i < filterSettings.features!.length; i++) {
          if (!vals?.includes(filterSettings.features![i])) return false;
        }
        return true;
      });
    }
    if (filteredData.length < 6) {
      setIsAllDataFetched(true);
      setCatalogItems(filteredData);
      setRenderItems(filteredData);
      return;
    }
    setCatalogItems(filteredData);
    setRenderItems(filteredData.slice(0, 6));
    setIsAllDataFetched(false);
  }, [filterSettings]);

  const loadMoreHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (catalogItems.length > renderItems.length + 6) {
      setRenderItems(catalogItems.slice(0, renderItems.length + 6));
      return;
    }
    setRenderItems(catalogItems);
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
          <Filter
            setFilterSettings={setFilterSettings}
            setIsFilterActive={setIsFilterActive}
          />
        </div>
      </div>
      <div className="catalog__wrapper">
        <div className="catalog__wrapper__sortAndFilterBlock">
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
          {renderItems && !renderItems.length && (
            <div style={{ color: "white" }}>No items found</div>
          )}
          {renderItems &&
            renderItems.length > 0 &&
            renderItems.map((item) => <Item item={item} key={item.id} />)}
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

export default Catalog;
