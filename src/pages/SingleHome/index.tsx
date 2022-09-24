import React from "react";
import { useParams } from "react-router-dom";
import catalgoItems from "../../catalogItems";
import { SingleHomeComponent } from "./styles";
import shareIcon from "../../assets/images/svg/shareIcon.svg";
import bedroomIcon from "../../assets/images/svg/bedroomIcon.svg";
import bathroomIcon from "../../assets/images/svg/bathroomIcon.svg";
import Map from "../Main/components/Map";
import MasonrySlider from "./components/MasonrySlider";

const SingleHome: React.FC = () => {
  const { id } = useParams();
  const data = catalgoItems.find((el) =>
    el.id === parseInt(id!) ? parseInt(id!) : 0
  );

  return (
    <SingleHomeComponent>
      {data ? (
        <>
          <div className="singleHome__sliderContainer">
            <MasonrySlider imgArr={data.roomImgs} />
          </div>
          <div className="singleHome__info">
            <div className="singleHome__info__priceAndShareBlock">
              <p>{data.price} $</p>
              <i>
                <img src={shareIcon} alt="share" />
              </i>
            </div>
            <div className="singleHome__info__details">
              <div>
                <p>{data.area} sq ft</p>
                <span>
                  <i>
                    <img src={bedroomIcon} alt="bedrooms" />
                  </i>
                  <p>
                    {data.rooms.bedrooms > 1
                      ? `${data.rooms.bedrooms} bedrooms`
                      : `${data.rooms.bedrooms} bedroom`}
                  </p>
                </span>
                <span>
                  <i>
                    <img src={bathroomIcon} alt="baths" />
                  </i>
                  <p>
                    {data.rooms.bathrooms > 1
                      ? `${data.rooms.bathrooms} bathrooms`
                      : `${data.rooms.bathrooms} bathroom`}
                  </p>
                </span>
              </div>
              <button>Enquire</button>
            </div>
            <div className="singleHome__info__features">
              <h1>Features</h1>
              <div className="singleHome__info__features__container">
                {data.features ? (
                  data.features.map((el, idx) => (
                    <div key={idx}>
                      <img src={el.img} alt={el.name} />
                      <p>{el.name}</p>
                    </div>
                  ))
                ) : (
                  <p>No features</p>
                )}
              </div>
            </div>
          </div>
          <div className="singleHome__map">
            <Map />
          </div>
        </>
      ) : (
        <div>something went wrong</div>
      )}
    </SingleHomeComponent>
  );
};

export default SingleHome;
