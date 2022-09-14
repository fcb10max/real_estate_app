import styled from "styled-components";
import aboutBgImg from "../../../../assets/images/png/cityImgBg.png";
import styleVars from "../../../../styleVars";

const AboutComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${aboutBgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0 0 50px 50px #1c1c1c inset;

  .about__wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    .about__wrapper__left {
      width: 50%;
      h2 {
        font-family: ${styleVars.mainFont};
        color: ${styleVars.orange};
        font-size: ${styleVars.fontSizeLarge};
        font-weight: 600;
        margin: 0;
      }
      p {
        font-family: ${styleVars.mainFont};
        color: ${styleVars.fontColorWhite};
        font-size: ${styleVars.fontSizeSmall};
        font-weight: 400;
        line-height: 25px;
        margin: 20px 0 40px;
      }
      a {
        box-sizing: content-box;
        text-decoration: none;
        font-family: ${styleVars.mainFont};
        font-weight: 600;
        font-size: ${styleVars.fontSizeExtraSmall};
        color: ${styleVars.fontColorDark};
        background-color: ${styleVars.fontColorWhite};
        padding: 12px 24px;
        border-radius: 8px;
      }
    }
    .about__wrapper__right {
      display: flex;
      flex-direction: column;
      align-items: end;

      .about__wrapper__right__item {
        width: 60%;
        text-align: center;
        h2 {
          font-family: ${styleVars.mainFont};
          color: ${styleVars.orange};
          font-size: ${styleVars.fontSizeLarge};
          font-weight: 600;
        }
        h3 {
          font-family: ${styleVars.mainFont};
          color: ${styleVars.fontColorWhiteFade};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 600;
        }
        p {
          font-family: ${styleVars.secondaryFont};
          color: ${styleVars.fontColorWhiteFade};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;
        }
      }
    }
  }
`;

export default AboutComponent;
