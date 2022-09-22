import styled from "styled-components";
import styleVars from "../../styleVars";

export const HeaderMain = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  .header__wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .header__wrapper__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    i {
      width: 40px;
      height: 40px;
    }

    p {
      color: #fff;
      font-family: ${styleVars.logoFont};
      font-weight: 400;
      margin: 0;
    }
  }

  .header__wrapper__navbar {
    display: flex;
    align-items: center;
    font-family: ${styleVars.headerNavbarItemFont};
    font-weight: 600;
    font-size: 14px;

    a {
      text-decoration: none;
      color: #fffbfb;
      position: relative;
      margin-right: 20px;

      &.active {
        ::before {
          content: "";
          width: 10px;
          height: 10px;
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translate(-50%, 0);
          border-radius: 50%;
          background-color: ${styleVars.orange};
          margin: 0 auto;
        }
      }
    }

    div {
      color: #fffbfb;

      ::after {
        content: "\\25be";
        margin: 0 20px 0 2px;
      }
    }

    button {
      background-color: ${styleVars.white1};
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
