import React, { useState } from "react";

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

interface IProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<IFilter | undefined>>;
  setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<IProps> = ({ setFilterSettings, setIsFilterActive }) => {
  const [filter, setFilter] = useState<IFilter>({
    price: { startValue: 100000, endValue: 400000 },
    bedrooms: { startValue: 1, endValue: 4 },
    area: { startValue: 500, endValue: 1000 },
    features: [],
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (e.currentTarget.type === "radio" && /^\d+-\d+$/.test(value)) {
      return setFilter({
        ...filter,
        [name]: {
          startValue: parseInt(value.split("-")[0]),
          endValue: parseInt(value.split("-")[1]),
        },
      });
    }
    if (
      e.currentTarget.type === "checkbox" &&
      e.currentTarget.name === "features"
    ) {
      if (value === "all") {
        e.currentTarget.checked
          ? setFilter({ ...filter, features: Object.values(featuresEnum) })
          : setFilter({ ...filter, features: [] });
        return;
      }
      if (
        filter.features &&
        Object.values(featuresEnum).includes(value as featuresEnum)
      ) {
        setFilter({
          ...filter,
          features: e.target.checked
            ? [...filter.features, value as featuresEnum]
            : [...filter.features.filter((el) => el !== e.target.value)],
        });
      } else {
        setFilter({ ...filter, features: [value as featuresEnum] });
      }
    }
  };

  return (
    <>
      <div className="filterModalWindow__container__byPrice">
        <h3>By Price</h3>
        <div>
          <input
            type="radio"
            name="price"
            id="price_filter"
            value={"100000-400000"}
            defaultChecked
            onChange={inputChangeHandler}
          />
          <label htmlFor="price_filter">All</label>
          <input
            type="radio"
            name="price"
            id="price_filter1"
            value={"100000-200000"}
            onChange={inputChangeHandler}
          />
          <label htmlFor="price_filter1">100 000$ - 200 000$</label>
          <input
            type="radio"
            name="price"
            id="price_filter2"
            value={"200000-300000"}
            onChange={inputChangeHandler}
          />
          <label htmlFor="price_filter2">200 000$ - 300 000$</label>
          <input
            type="radio"
            name="price"
            id="price_filter3"
            value={"300000-400000"}
            onChange={inputChangeHandler}
          />
          <label htmlFor="price_filter3">300 000$ - 400 000$</label>
        </div>
      </div>
      <div className="filterModalWindow__container__byRooms">
        <h3>By Bedrooms</h3>
        <div>
          <input
            type="radio"
            name="bedrooms"
            id="room_filter"
            value={"1-4"}
            defaultChecked
            onChange={inputChangeHandler}
          />
          <label htmlFor="room_filter">All</label>
          <input
            type="radio"
            name="bedrooms"
            id="room_filter1"
            value={"1-2"}
            onChange={inputChangeHandler}
          />
          <label htmlFor="room_filter1">1-2 bedrooms</label>
          <input
            type="radio"
            name="bedrooms"
            id="room_filter2"
            value={"3-4"}
            onChange={inputChangeHandler}
          />
          <label htmlFor="room_filter2">3-4 bedrooms</label>
        </div>
      </div>
      <div className="filterModalWindow__container__byArea">
        <h3>By Area</h3>
        <div>
          <input
            type="radio"
            name="area"
            id="area_filter"
            value="500-1000"
            defaultChecked
            onChange={inputChangeHandler}
          />
          <label htmlFor="area_filter">All</label>
          <input
            type="radio"
            name="area"
            id="area_filter1"
            value="500-750"
            onChange={inputChangeHandler}
          />
          <label htmlFor="area_filter1">500-750 sq ft</label>
          <input
            type="radio"
            name="area"
            id="area_filter2"
            value="750-1000"
            onChange={inputChangeHandler}
          />
          <label htmlFor="area_filter2">750-1000 sq ft</label>
        </div>
      </div>
      <div className="filterModalWindow__container__byFeatures">
        <h3>By Features</h3>
        <div>
          <input
            type="checkbox"
            name="features"
            id={`feature`}
            onChange={inputChangeHandler}
            value={"all"}
          />
          <label htmlFor={`feature`}>All</label>
          {Object.values(featuresEnum).map((el, idx) => (
            <React.Fragment key={idx}>
              <input
                type="checkbox"
                name="features"
                id={`feature${idx}`}
                onChange={inputChangeHandler}
                value={el}
              />
              <label htmlFor={`feature${idx}`}>{el}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <button
        className="apply"
        onClick={() => {
          setFilterSettings(filter);
          setIsFilterActive(false);
        }}
      >
        Apply
      </button>
    </>
  );
};

export default Filter;
