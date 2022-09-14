import styled from "styled-components";
import bgImage from "../../../../assets/images/png/mainPageBg.png";
import styleVars from "../../../../styleVars";

const PageTopComponent = styled.div`
  height: 100vh;
  position: relative;
  top: -60px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      #1b1b1b 22.15%,
      rgba(27, 27, 27, 0.535551) 56.13%,
      rgba(27, 27, 27, 0.18) 81.14%,
      rgba(27, 27, 27, 0) 106.02%
    );
  }
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      360deg,
      #1b1b1b 22.15%,
      rgba(27, 27, 27, 0.535551) 56.13%,
      rgba(27, 27, 27, 0.18) 81.14%,
      rgba(27, 27, 27, 0) 106.02%
    );
  }

  .pageTop__wrapper {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    h1 {
      width: 65%;
      padding: 0;
      margin: 0;
      font-family: ${styleVars.mainFont};
      color: ${styleVars.fontColorWhite};
      font-size: ${styleVars.fontSizeExtraLarge};
      font-weight: 700;

      span {
        color: ${styleVars.orange};
      }
    }
  }
`;

export default PageTopComponent;
