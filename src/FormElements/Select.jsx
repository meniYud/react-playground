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
    // externalChangeHandler(e);
  };

  console.log('select input rerendered')

  return (
    <label htmlFor={inputId}>
      {label}
      <select id={inputId} disabled={disabled} onChange={changeHandler}>
        {values.map((value) => (
          <option value={value} selected={selectedValue === value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};
