import React, { useState } from "react";
import DropDown from "../CustomDropdown";
import FormComponent from "./styles";
import styleVars from "../../../../styleVars";
import { IFormData, InterestedIn } from "../../../../inpuDataTypes";

const Form = () => {
  const [data, setData] = useState<IFormData>({
    name: "",
    email: "",
    phoneNumber: 0,
    interestedIn: InterestedIn.default,
    message: "",
  });

  const dropDownInputStyles: React.CSSProperties = {
    fontFamily: styleVars.mainFont,
    fontWeight: 400,
    borderBottom: `3px solid ${styleVars.borderColor}`,
    color: styleVars.borderColor,
    fontSize: styleVars.fontSizeSmall,
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const elName = e.target.name;
    const val: string | number = e.target.value;
    setData({ ...data, [elName]: val });
  };

  return (
    <FormComponent>
      <div className="form__wrapper">
        <div className="form__wrapper__left">
          <h1>
            Did You Find Your <span>Dream Home?</span>
          </h1>
          <p>
            Thank you for getting in touch! if you find your dream home connect
            with us
          </p>
        </div>
        <div className="from__wrapper__right">
          <div className="from__wrapper__right__container">
            <input
              type="text"
              onChange={handleInputChange}
              name="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="from__wrapper__right__container">
            <input
              type="tel"
              onChange={handleInputChange}
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <div className="dropDown">
              <DropDown
                setValue={setData}
                value={data}
                inputName={"interestedIn"}
                optionsArr={Object.values(InterestedIn).filter(
                  (i) => i !== InterestedIn.default
                )}
                placeholderText={"Interested in"}
                inputStyles={dropDownInputStyles}
              />
            </div>
          </div>
          <textarea
            onChange={handleInputChange}
            name="message"
            placeholder="Message"
          />
        </div>
      </div>
    </FormComponent>
  );
};

export default Form;
