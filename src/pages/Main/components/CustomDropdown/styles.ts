import styled from "styled-components";

const DropDownComponent = styled.div`
  width: 100%;
  position: relative;

  .inputArea {
    position: relative;
    cursor: pointer;

    ::after {
      content: "\\25be";
      position: absolute;
      right: 5px;
      top: 0;
    }
  }

  .optionsArea {
    display: none;
    position: absolute;
    width: 100%;
    background-color: #fff;
    top: 110%;
    left: 0;

    &.active {
      display: block;
    }

    .option {
      width: 100%;
      cursor: pointer;
      :hover {
        background-color: #fff111;
      }
    }
  }
`;

export default DropDownComponent;
