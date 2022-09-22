import React from "react";
import MapStyles from "./styles";
import { YMaps, Map, FullscreenControl, ZoomControl, ObjectManager } from "react-yandex-maps";

const MapComponent: React.FC = () => {
  return (
    <MapStyles>
      <div className="mapComponent__wrapper">
        <h2>Neighborhood</h2>
        <p>Deam home villas San Diego, CA, USA</p>
        <div className="mapComponent__wrapper__map">
          <YMaps
            query={{
              apikey: process.env.REACT_APP_YMAPS_API_KEY,
              lang: "en_RU",
            }}
          >
            <Map
              defaultState={{ center: [32.712101, -117.168759], zoom: 16 }}
              width={"100%"}
              height={"100%"}
            >
              <FullscreenControl />
              <ZoomControl />
              {/* <ObjectManager /> */}
            </Map>
          </YMaps>
        </div>
      </div>
    </MapStyles>
  );
};

export default MapComponent;
