import styled from "styled-components";
import styleVars from "../../../../styleVars";
import homeIcon from "../../../../assets/images/svg/houseIcon.svg";

const FormComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${styleVars.cardBg};
  position: relative;
  background-image: url(${homeIcon});
  background-size: 50% 80%;
  background-repeat: no-repeat;
  background-position: -25% 140%;

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

  .form__wrapper {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: space-between;

    .form__wrapper__left {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeExtraLarge};
        font-weight: 700;
        color: ${styleVars.fontColorWhite};

        span {
          color: ${styleVars.orange};
        }
      }

      p {
        width: 90%;
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeLarge};
        color: ${styleVars.fontColorWhiteFade};
        font-weight: 400;
        line-height: 45px;
      }
    }
    .from__wrapper__right {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .from__wrapper__right__container {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
          width: 47%;
          background-color: transparent;
          border: none;
          border-bottom: 3px solid ${styleVars.borderColor};
          color: ${styleVars.fontColorWhiteFade};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;

          ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${styleVars.borderColor};
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeSmall};
            font-weight: 400;
            opacity: 1; /* Firefox */
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: ${styleVars.borderColor};
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeSmall};
            font-weight: 400;
          }

          ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: ${styleVars.borderColor};
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeSmall};
            font-weight: 400;
          }
        }

        .dropDown {
          width: 47%;
        }
      }

      textarea {
        margin: 20px 0;
        resize: vertical;
        max-height: 40%;
        height: 30px;
        background-color: transparent;
        border: none;
        border-bottom: 3px solid ${styleVars.borderColor};
        color: ${styleVars.fontColorWhiteFade};
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeSmall};
        font-weight: 400;

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${styleVars.borderColor};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${styleVars.borderColor};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: ${styleVars.borderColor};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;
        }
      }
    }
  }
`;

export default FormComponent;
