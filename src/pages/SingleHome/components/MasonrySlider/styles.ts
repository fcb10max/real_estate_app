import styled from "styled-components";
import styleVars from "../../../../styleVars";
import zoomIn from "../../../../assets/images/svg/zoom-in.svg"

const Main = styled.div`
  .bigImgModalWindow {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000dd;
    z-index: 10;

    span {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 20px;
      height: 20px;
      background-color: #fff;
    }

    img {
      height: 90%;
      width: 90%;
      object-fit: contain;
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

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          background-color: #fff;
          padding: 5px;
          border-radius: 8px;
          position: relative;
          
          ::before {
            content: url(${zoomIn});
            opacity: 1;
            position: absolute;
            width: 100px;
            height: 100px;
            left: 0;
            top: 0;
            transition: opacity 0.3s linear;
          }

          &:hover::before {
            opacity: 1;
          }
        }

        &:nth-child(n + 1) {
          img:nth-child(1) {
            grid-column: 1 / span 4;
            grid-row: 1 / span 2;
          }
          img:nth-child(2) {
            grid-column: 1 / span 2;
            grid-row: 3 / span 2;
          }
          img:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(2n) {
          img:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 4;
          }
          img:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 3;
          }
          img:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 4 / span 1;
          }
        }

        &:nth-child(3n) {
          img:nth-child(1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 2;
          }
          img:nth-child(2) {
            grid-column: 4 / span 1;
            grid-row: 1 / span 2;
          }
          img:nth-child(3) {
            grid-column: 1 / span 4;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(4n) {
          img:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 2 / span 3;
          }
          img:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 4;
          }
          img:nth-child(3) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 1;
          }
        }

        &:nth-child(5n) {
          img:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 2;
          }
          img:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 2;
          }
          img:nth-child(3) {
            grid-column: 1 / span 4;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(6n) {
          img:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 1 / span 4;
          }
          img:nth-child(2) {
            grid-column: 3 / span 2;
            grid-row: 1 / span 2;
          }
          img:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(7n) {
          img:nth-child(1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 2;
          }
          img:nth-child(2) {
            grid-column: 4 / span 1;
            grid-row: 1 / span 4;
          }
          img:nth-child(3) {
            grid-column: 1 / span 3;
            grid-row: 3 / span 2;
          }
        }

        &:nth-child(8n) {
          img:nth-child(1) {
            grid-column: 1 / span 4;
            grid-row: 1 / span 2;
          }
          img:nth-child(2) {
            grid-column: 1 / span 1;
            grid-row: 3 / span 4;
          }
          img:nth-child(3) {
            grid-column: 2 / span 3;
            grid-row: 3 / span 4;
          }
        }

        &:nth-child(9n) {
          img:nth-child(1) {
            grid-column: 1 / span 1;
            grid-row: 1 / span 2;
          }
          img:nth-child(2) {
            grid-column: 1 / span 1;
            grid-row: 3 / span 2;
          }
          img:nth-child(3) {
            grid-column: 2 / span 3;
            grid-row: 1 / span 4;
          }
        }

        /* &:nth-child(10n) {
          img:nth-child(1) {
            grid-column: 1 / span 4;
            grid-row: 1 / span 3;
          }
          img:nth-child(2) {
            grid-column: 1 / span 2;
            grid-row: 4 / span 1;
          }
          img:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 4 / span 1;
          }
        } */

        &:nth-child(11n) {
          img:nth-child(1) {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
          }
          img:nth-child(2) {
            grid-column: 1 / span 1;
            grid-row: 2 / span 3;
          }
          img:nth-child(3) {
            grid-column: 2 / span 3;
            grid-row: 1 / span 4;
          }
        }

        &:nth-child(12n) {
          img:nth-child(1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 4;
          }
          img:nth-child(2) {
            grid-column: 4 / span 1;
            grid-row: 1 / span 3;
          }
          img:nth-child(3) {
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
