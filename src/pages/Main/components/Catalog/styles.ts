import styled from "styled-components";
import styleVars from "../../../../styleVars";

const CatalogComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .catalog__wrapper {
    width: 90%;
    height: 100%;

    .catalog__wrapper__sortAndFilterBlock {
      display: flex;
      align-items: center;

      .catalog__wrapper__sortAndFilterBlock__types {
        width: 100%;
        height: 70px;
        flex: 2;
        display: flex;
        align-items: center;

        div {
          height: fit-content;

          input[name="houseTypes"] {
            width: 0;
            opacity: 0;
            pointer-events: none;

            &:checked + label {
              color: ${styleVars.orange};
              border-color: ${styleVars.orange};
            }
          }

          label {
            background-color: transparent;
            color: ${styleVars.fontColorWhite};
            border: 1.5px solid ${styleVars.fontColorWhite};
            border-radius: 8px;
            padding: 12px 24px;
            margin-right: 20px;
            text-transform: capitalize;
            transition: color 0.3s linear, border-color 0.3s linear;
            cursor: pointer;

            :hover {
              color: ${styleVars.fontColorWhiteFade};
              border-color: ${styleVars.fontColorWhiteFade};
            }
          }
        }
      }
      .catalog__wrapper__sortAndFilterBlock__filter {
        flex: 1;
        height: 70px;
        display: flex;
        justify-content: end;
        align-items: center;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background-color: ${styleVars.fontColorWhite};
          border-radius: 8px;
          transition: background-color 0.3s linear;

          :hover {
            background-color: ${styleVars.fontColorWhiteFade};
          }

          p {
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeSmall};
            font-weight: 600;
            color: ${styleVars.fontColorDark};
            margin: 0;
            margin-right: 20px;
          }
        }
      }
    }

    .catalog__wrapper__items {
      width: 100%;
      display: grid;
      margin: 50px 0;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;

      .catalog__wrapper__items__item {
        width: 100%;
        height: 600px;
        overflow: hidden;
        background-color: ${styleVars.cardBg};
        display: flex;
        flex-direction: column;

        .catalog__wrapper__items__item__imgs {
          flex: 3;
          width: 100%;
          display: flex;
          overflow-x: scroll;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .catalog__wrapper__items__item__info {
          flex: 1;
        }
      }
    }
  }

  .filterModalWindow {
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000cc;
    justify-content: center;
    align-items: center;
    z-index: 10;

    &.active {
      display: flex;
    }

    .filterModalWindow__container {
      width: 500px;
      height: 500px;
      background-color: #fff;
      position: relative;

      .filterModalWindow__container__close {
        width: 40px;
        height: 5px;
        background-color: #000;
        position: absolute;
        right: 20px;
        top: 30px;
        transform: rotate(45deg);

        ::before {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          height: 5px;
          width: 40px;
          background-color: #000;
          transform: rotate(90deg);
        }
      }
    }
  }
`;

export default CatalogComponent;
