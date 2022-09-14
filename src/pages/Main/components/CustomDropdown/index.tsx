import React, { useRef } from "react";
import DropDownComponent from "./styles";
import useClickOutside from "../../../../hooks/useClickOutside";
import { IFormData } from "../../../../inpuDataTypes";

interface IProps {
  optionsArr: string[] | number[];
  setValue: React.Dispatch<React.SetStateAction<IFormData>>;
  value: IFormData;
  inputName: string;
  placeholderText?: string;
  inputStyles?: React.CSSProperties;
  optionsStyles?: React.CSSProperties;
  optionsContainerStyles?: React.CSSProperties;
}

const CustomDropDown: React.FC<IProps> = ({
  optionsArr,
  setValue,
  value,
  inputName,
  placeholderText,
  inputStyles,
  optionsContainerStyles,
  optionsStyles,
}) => {
  const optionsAreaRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useClickOutside(optionsAreaRef, (e: MouseEvent) => {
    const el: HTMLDivElement = optionsAreaRef.current;
    const optionsAreaEl: HTMLDivElement | null =
      el.querySelector(".optionsArea");
    if (optionsAreaEl) optionsAreaEl.classList.remove("active");
  });

  const toggleOptionsAreaActive = () => {
    if (!optionsAreaRef || !optionsAreaRef.current) return;
    const el: HTMLDivElement = optionsAreaRef.current;
    const optionsAreaEl: HTMLDivElement | null =
      el.querySelector(".optionsArea");
    if (optionsAreaEl) optionsAreaEl.classList.toggle("active");
  };

  const handleOptionClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const val: string = e.currentTarget.innerText;
    setValue({ ...value, [inputName]: val });
    toggleOptionsAreaActive();
  };

  return (
    <DropDownComponent ref={optionsAreaRef}>
      <div
        className="inputArea"
        onClick={toggleOptionsAreaActive}
        style={inputStyles}
      >
        {value ? value.interestedIn : placeholderText}
      </div>
      <div className="optionsArea" style={optionsContainerStyles}>
        {optionsArr.map((el, ind) => (
          <div
            className="option"
            onClick={handleOptionClick}
            key={ind}
            style={optionsStyles}
          >
            {el}
          </div>
        ))}
      </div>
    </DropDownComponent>
  );
};

export default CustomDropDown;
