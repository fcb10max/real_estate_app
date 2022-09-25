import styled from "styled-components";
import styleVars from "../../../../styleVars";
import zoomIn from "../../../../assets/images/svg/zoom-in.svg";

const Main = styled.div`
  position: relative;
  .largeImgModalWindow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000dd;
    z-index: 10;
    overflow: auto;

    span.zoomIn {
      right: 100px;
      top: 15px;
    }
    span.zoomOut {
      right: 150px;
      top: 15px;
    }

    span {
      position: fixed;
      right: 50px;
      top: 30px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      z-index: 2;

      &.close::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 3px;
        background-color: #fff;
        transform: rotate(45deg);
      }
      &.close::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 3px;
        background-color: #fff;
        transform: rotate(-45deg);
      }
    }

    img {
      height: 90%;
      width: 80%;
      object-fit: contain;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &.active {
      display: block;
    }
  }

  .masonrySlider__wrapper {
    position: relative;

    & > span {
      position: absolute;
      top: 0;
      width: 50px;
      height: 100%;
      background-color: #00000055;
      color: ${styleVars.white1};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${styleVars.fontSizeLarge};
      cursor: pointer;
      z-index: 5;
    }

    span:nth-of-type(1) {
      left: 0;
    }
    span:nth-of-type(2) {
      right: 0;
    }

    &__imagesCardContainer {
      display: flex;
      overflow: scroll hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        display: none;
      }

      &__card {
        min-width: 50%;
        height: 530px;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        padding: 5px;
        scroll-snap-align: start;

        div {
          height: 100%;
          width: 100%;
          background-color: #fff;
          padding: 5px;
          border-radius: 8px;
          position: relative;

          ::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: url(${zoomIn});
            display: inline-block;
            background-size: 50px 50px;
            background-position: center;
            background-repeat: no-repeat;
            background-color: #00000055;
            opacity: 0;
            transition: opacity 0.3s linear;
            cursor: pointer;
          }

          :hover::before {
            opacity: 1;
          }

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }

        &:nth-child(n + 1) {
          div:nth-child(1) {
            grid-column: 1 / span 4;
            grid-row: 1 / span 2;
          }
          div:nth-child(2) {
            grid-column: 1 / span 2;
            grid-row: 3 / span 2;
          }
          div:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(2n) {
          div:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 4;
          }
          div:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 3;
          }
          div:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 4 / span 1;
          }
        }

        &:nth-child(3n) {
          div:nth-child(1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 2;
          }
          div:nth-child(2) {
            grid-column: 4 / span 1;
            grid-row: 1 / span 2;
          }
          div:nth-child(3) {
            grid-column: 1 / span 4;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(4n) {
          div:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 2 / span 3;
          }
          div:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 4;
          }
          div:nth-child(3) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 1;
          }
        }

        &:nth-child(5n) {
          div:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 2;
          }
          div:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 2;
          }
          div:nth-child(3) {
            grid-column: 1 / span 4;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(6n) {
          div:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 4;
          }
          div:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 2;
          }
          div:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(7n) {
          div:nth-child(1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 2;
          }
          div:nth-child(2) {
            grid-column: 4 / span 1;
            grid-row: 1 / span 4;
          }
          div:nth-child(3) {
            grid-column: 1 / span 3;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(8n) {
          div:nth-child(1) {
            grid-column: 1 / span 4;
            grid-row: 1 / span 2;
          }
          div:nth-child(2) {
            grid-column: 1 / span 1;
            grid-row: 3 / span 4;
          }
          div:nth-child(3) {
            grid-column: 2 / span 3;
            grid-row: 3 / span 4;
          }
        }

        &:nth-child(9n) {
          div:nth-child(1) {
            grid-column: 1 / span 1;
            grid-row: 1 / span 2;
          }
          div:nth-child(2) {
            grid-column: 1 / span 1;
            grid-row: 3 / span 2;
          }
          div:nth-child(3) {
            grid-column: 2 / span 3;
            grid-row: 1 / span 4;
          }
        }

        /* &:nth-child(10n) {
          div:nth-child(1) {
            grid-column: 1 / span 4;
            grid-row: 1 / span 3;
          }
          div:nth-child(2) {
            grid-column: 1 / span 2;
            grid-row: 4 / span 1;
          }
          div:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 4 / span 1;
          }
        } */

        &:nth-child(11n) {
          div:nth-child(1) {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
          }
          div:nth-child(2) {
            grid-column: 1 / span 1;
            grid-row: 2 / span 3;
          }
          div:nth-child(3) {
            grid-column: 2 / span 3;
            grid-row: 1 / span 4;
          }
        }

        &:nth-child(12n) {
          div:nth-child(1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 4;
          }
          div:nth-child(2) {
            grid-column: 4 / span 1;
            grid-row: 1 / span 3;
          }
          div:nth-child(3) {
            grid-column: 4 / span 1;
            grid-row: 4 / span 1;
          }
        }
      }
    }

    &--switcher {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        margin: 20px 5px;
        background-color: ${styleVars.white3};
        transition: background-color 0.3s linear, width 0.3s linear;
        cursor: pointer;

        &.active {
          width: 20px;
          border-radius: 8px;
          background-color: ${styleVars.orange};
        }
      }
    }
  }
`;

export default Main;
