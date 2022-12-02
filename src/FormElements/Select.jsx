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
    if (externalChangeHandler) {
      externalChangeHandler(e);
    }
  };

  return (
    <label htmlFor={inputId}>
      {label}
      <select
        name={inputId}
        id={inputId}
        disabled={disabled}
        onChange={changeHandler}
        defaultValue={selectedValue}
      >
        {!initialValue && <option value={""}>select one</option>}
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};
