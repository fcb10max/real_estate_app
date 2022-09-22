import styled from "styled-components";
import styleVars from "../../../../styleVars";
import homeIcon from "../../../../assets/images/svg/houseIcon.svg";

const FormComponent = styled.div`
  background-color: ${styleVars.dark2};
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
    min-height: 600px;

    margin: 0 auto;
    display: flex;

    .form__wrapper__left {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;


      h1 {
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeExtraLarge};
        font-weight: 700;
        color: ${styleVars.white1};
        margin: 0;

        span {
          color: ${styleVars.orange};
        }
      }

      p {
        width: 75%;
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeLarge};
        color: ${styleVars.white2};
        font-weight: 400;
        line-height: 45px;
        margin: 20px 0;
      }
    }
    .from__wrapper__right {
      flex: 1;
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
          border-bottom: 3px solid ${styleVars.white3};
          color: ${styleVars.white2};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;

          ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${styleVars.white3};
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeSmall};
            font-weight: 400;
            opacity: 1; /* Firefox */
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: ${styleVars.white3};
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeSmall};
            font-weight: 400;
          }

          ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: ${styleVars.white3};
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
        border-bottom: 3px solid ${styleVars.white3};
        color: ${styleVars.white2};
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeSmall};
        font-weight: 400;

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${styleVars.white3};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${styleVars.white3};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: ${styleVars.white3};
          font-family: ${styleVars.mainFont};
          font-size: ${styleVars.fontSizeSmall};
          font-weight: 400;
        }
      }
    }
  }
`;

export default FormComponent;
