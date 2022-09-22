import styled from "styled-components";
import styleVars from "../../../../styleVars";

const MapComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .mapComponent__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      font-family: ${styleVars.mainFont};
      color: ${styleVars.orange};
      font-size: ${styleVars.fontSizeLarge};
      font-weight: 600;
      margin: 0;
    }

    p {
      font-family: ${styleVars.secondaryFont};
      color: ${styleVars.white2};
      font-size: ${styleVars.fontSizeSmall};
      font-weight: 400;
      margin: 10px 0 40px;
    }

    .mapComponent__wrapper__map {
      width: 100%;
      height: 600px;
    }
  }
`;

export default MapComponent;
