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

  const classnames = `search-input ${disabled ? "grayed-out-disabled" : ""}`;

  return (
    <label htmlFor={inputId}>
      {label}
      <select
        name={inputId}
        className={classnames}
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
