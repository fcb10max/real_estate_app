import styled from "styled-components";
import styleVars from "../../../../styleVars";

const SliderComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .slider__wrapper {
    width: 100%;
    text-align: center;

    & > h2 {
      font-family: ${styleVars.mainFont};
      color: ${styleVars.orange};
      font-size: ${styleVars.fontSizeLarge};
      font-weight: 600;
      margin: 20px 0;
    }

    & > p {
      font-family: ${styleVars.secondaryFont};
      font-weight: 400;
      font-size: ${styleVars.fontSizeSmall};
      color: ${styleVars.white2};
      margin: 0;
    }

    & > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;

      span.left {
        content: "<";
        width: 50px;
        height: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        background-color: #00000066;
        color: ${styleVars.white2};
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        cursor: pointer;
      }
      span.right {
        content: ">";
        width: 50px;
        height: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        background-color: #00000066;
        color: ${styleVars.white2};
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        cursor: pointer;
      }

      .slider__wrapper__items {
        width: 100%;
        min-height: 590px;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        margin: 40px 0;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        & > div {
          width: auto;
          height: 450px;
          position: relative;
          padding: 4px;
          border-radius: 8px;
          background-color: #fff;
          transition: height 0.3s linear;

          &.active {
            height: 590px;
          }

          &:not(:last-child) {
            margin-right: 70px;
          }

          img {
            width: auto;
            height: 100%;
            object-fit: contain;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            left: 5%;
            bottom: 5%;

            h2 {
              margin: 0;
              padding: 0;
              font-family: ${styleVars.mainFont};
              color: ${styleVars.white1};
              font-size: ${styleVars.fontSizeMedium};
              font-weight: 600;
            }
            p {
              margin: 0;
              padding: 0;
              font-family: ${styleVars.mainFont};
              color: ${styleVars.white2};
              font-size: ${styleVars.fontSizeExtraSmall};
              font-weight: 700;
            }
          }
        }
      }

      .switcher {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          width: 15px;
          height: 15px;
          background-color: ${styleVars.white2};
          border-radius: 50%;
          margin-right: 10px;
          cursor: pointer;
          transition: width 0.3s linear, background-color 0.3s linear;

          :hover {
            background-color: ${styleVars.white1};
          }

          &.active {
            width: 30px;
            border-radius: 15px;
            background-color: ${styleVars.orange};
          }
        }
      }
    }
  }
`;

export default SliderComponent;
