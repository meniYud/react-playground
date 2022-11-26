import { useState } from "react";

export const Select = ({
  inputId,
  label,
  initialValue,
  values,
  disabled,
  externalChangeHandler,
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const changeHandler = (e) => {
    setSelectedValue(e.target.value);
    externalChangeHandler(e);
  };

  return (
    <label htmlFor={inputId}>
      {label}
      <select
        id={inputId}
        disabled={disabled}
        onChange={changeHandler}
        defaultValue={selectedValue}
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};
