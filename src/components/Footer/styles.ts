import styled from "styled-components";
import styleVars from "../../styleVars";

export const FooterMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${styleVars.mainBgColor};
  padding: 64px 0;

  .footer__wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;

    div {
      flex: 1;
    }

    .footer__wrapper__siteInfo {
      /* width: 30%; */
      display: flex;
      flex-direction: column;

      .footer__wrapper__siteInfo__logo {
        align-self: start;
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
      .footer__wrapper__siteInfo__text {
        width: 75%;
        margin: 20px 0;
        color: ${styleVars.fontColorWhite};
        font-family: ${styleVars.mainFont};
        font-size: ${styleVars.fontSizeSmall};
        font-weight: 400;

        a {
          color: ${styleVars.orange};
        }
      }
    }

    .footer__wrapper__contacts {
      h2 {
        font-family: ${styleVars.mainFont};
        color: #fff;
        font-size: ${styleVars.fontSizeMedium};
        font-weight: 600;
      }
      p {
        display: flex;
        align-items: center;
        font-family: ${styleVars.mainFont};
        color: ${styleVars.fontColorWhiteFade};
        font-size: ${styleVars.fontSizeSmall};
        font-weight: 400;
        margin: 10px 0;

        i {
          margin-right: 5px;
        }
      }
    }

    .footer__wrapper__socialMedia {
      h2 {
        font-family: ${styleVars.mainFont};
        color: #fff;
        font-size: ${styleVars.fontSizeMedium};
        font-weight: 600;
      }

      div {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          background-color: ${styleVars.cardBg};
          padding: 5px;
          border-radius: 8px;
          cursor: pointer;

          i {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  hr {
    width: 100%;
    border: 1px solid ${styleVars.fontColorWhiteFade};
    box-sizing: border-box;
  }

  p {
    margin: 33px auto 0;
    padding: 0;
    font-family: ${styleVars.secondaryFont};
    color: ${styleVars.fontColorWhiteFade};
    font-size: ${styleVars.fontSizeExtraSmall};
    font-weight: 400;
  }
`;
