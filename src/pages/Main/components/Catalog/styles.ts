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
      justify-content: end;
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
      display: grid;
      margin: 50px 0;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;

      .catalog__wrapper__items__item {
        background-color: ${styleVars.cardBg};
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border-radius: 8px;

        .catalog__wrapper__items__item__imgs {
          position: relative;

          span {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 0;
            top: 0;
            width: 30px;
            height: 100%;
            color: ${styleVars.fontColorWhite};
            font-size: ${styleVars.fontSizeMedium};
            background-color: #000000dd;
            cursor: pointer;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Chrome/Safari/Opera */
            -khtml-user-select: none; /* Konqueror */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
          }
          span.left {
            left: 0;
          }
          span.right {
            right: 0;
          }

          div {
            display: flex;
            overflow: scroll hidden;
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;

            &::-webkit-scrollbar {
              display: none;
            }

            section {
              width: 100%;
              height: 500px;
              scroll-snap-align: start;

              img {
                height: 100%;
                min-width: 100%;
                object-fit: fill;
              }
            }
          }
        }
        .catalog__wrapper__items__item__info {
          display: flex;
          flex-direction: column;
          align-items: center;

          .catalog__wrapper__items__item__info__top {
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
              font-family: ${styleVars.mainFont};
              color: ${styleVars.fontColorWhite};
              font-weight: 600;
              font-size: ${styleVars.fontSizeMedium};
            }

            a {
              text-decoration: none;
              font-family: ${styleVars.mainFont};
              color: ${styleVars.fontColorDark};
              font-weight: 600;
              font-size: ${styleVars.fontSizeExtraSmall};
              padding: 12px 24px;
              background-color: ${styleVars.fontColorWhite};
              border-radius: 8px;
              transition: background-color 0.3s linear;

              :hover {
                background-color: ${styleVars.fontColorWhiteFade};
              }
            }
          }
          .catalog__wrapper__items__item__info__bottom {
            width: 90%;
            display: flex;
            border: 1.5px solid #fffbfb59;
            border-radius: 8px;
            margin: 0 0 10px 0;

            span {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;

              &:not(:last-child) {
                border-right: 1.5px solid #fffbfb59;
              }

              i {
                margin-right: 5px;
              }
              p {
                font-family: ${styleVars.mainFont};
                color: ${styleVars.fontColorWhiteFade};
                font-weight: 600;
                font-size: ${styleVars.fontSizeExtraSmall};
              }
            }
          }
        }
      }
    }

    .catalog__wrapper__loadMore {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      i {
        width: 40px;
        height: 40px;
      }

      p {
        font-family: ${styleVars.mainFont};
        font-weight: 500;
        font-size: ${styleVars.fontSizeExtraSmall};
        color: ${styleVars.fontColorWhite};
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
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        margin: 10px 0;
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeSmall};
        font-weight: 600;
        color: ${styleVars.fontColorDark};
      }

      .filterModalWindow__container__close {
        width: 40px;
        height: 5px;
        background-color: #000;
        position: absolute;
        right: 20px;
        top: 30px;
        transform: rotate(45deg);
        cursor: pointer;

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

      .filterModalWindow__container__byPrice,
      .filterModalWindow__container__byRooms,
      .filterModalWindow__container__byArea,
      .filterModalWindow__container__byFeatures {
        width: 90%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;

        div {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: start;

          input {
            display: none;
          }

          input + label {
            padding: 12px 24px;
            margin: 0 10px 10px 0;
            border: 2px solid ${styleVars.fontColorDark};
            border-radius: 8px;
            transition: border-color 0.3s linear;
            cursor: pointer;
            font-family: ${styleVars.mainFont};
            font-size: ${styleVars.fontSizeExtraSmall};
            font-weight: 600;
            color: ${styleVars.fontColorDark};
          }

          input:checked + label {
            border-color: ${styleVars.orange};
          }
        }
      }

      button {
        padding: 12px 24px;
        background-color: ${styleVars.fontColorDark};
        border: none;
        border-radius: 8px;
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeExtraSmall};
        font-weight: 600;
        color: ${styleVars.fontColorWhite};
        margin: 20px;
        cursor: pointer;
        transition: color 0.3s linear;

        :hover {
          color: ${styleVars.fontColorWhiteFade};
        }
      }
    }
  }
`;

export default CatalogComponent;
