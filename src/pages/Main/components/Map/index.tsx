import React from "react";
import MapComponent from "./styles";

const Map: React.FC = () => {
  return (
    <MapComponent>
      <div className="mapComponent__wrapper">
        <h2>Neighborhood</h2>
        <p>Deam home villas San Diego, CA, USA</p>
        <div className="mapComponent__wrapper__map"></div>
      </div>
    </MapComponent>
  );
};

export default Map;
