import styled from "styled-components";

const Main = styled.div`
  .bigImgModalWindow {
    display: none;
  }

  .masonrySlider__wrapper {
    &__imagesCardContainer {
      display: flex;
      overflow: scroll hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;

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

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          background-color: #fff;
          padding: 5px;
          border-radius: 8px;
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
  }
`;

export default Main;
