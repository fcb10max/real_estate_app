import styled from "styled-components";
import styleVars from "../../styleVars";

export const SingleHomeComponent = styled.div`
  width: 100%;
  
  .singleHome__sliderContainer {
  }

  .singleHome__info {
    width: 90%;
    margin: 0 auto;

    .singleHome__info__priceAndShareBlock {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeLarge};
        color: ${styleVars.white1};
        font-weight: 600;
      }

      i {
        width: 32px;
        height: 32px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .singleHome__info__details {
      & > div {
        display: flex;

        & > p {
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeMedium};
          color: ${styleVars.white2};
          font-weight: 600;
          margin-right: 40px;
        }

        & > span {
          display: flex;
          align-items: center;
          margin-right: 40px;

          i {
            width: 24px;
            height: 24px;
            margin-right: 10px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          p {
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeMedium};
            color: ${styleVars.white2};
            font-weight: 600;
          }
        }
      }

      & > button {
        padding: 12px 24px;
        background-color: ${styleVars.white1};
        border: none;
        border-radius: 8px;
        color: ${styleVars.dark1};
        font-family: ${styleVars.mainFont};
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s linear;

        :hover {
          background-color: ${styleVars.white2};
        }
      }
    }

    .singleHome__info__features {
      & > h1 {
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeLarge};
        color: ${styleVars.orange};
        font-weight: 600;
      }

      .singleHome__info__features__container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        div {
          height: 135px;
          width: 170px;
          padding: 29px 51px;
          margin-right: 32px;
          border: 3px solid ${styleVars.white3};
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img {
            width: 48px;
            height: 48px;
            margin-bottom: 10px;
          }
          p {
            margin: 0;
            white-space: nowrap;
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeExtraSmall};
            color: ${styleVars.white1};
            text-transform: capitalize;
            font-weight: 600;
          }
        }
      }
    }

  }
  .singleHome__map {
    width: 90%;
    margin: 40px auto;
  }
`;
