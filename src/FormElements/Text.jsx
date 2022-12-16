import { useState } from "react";

export const Text = ({
  inputId,
  label,
  initialText,
  externalChangeHandler,
  placeholder = "",
}) => {
  const [inputText, setInputText] = useState(initialText);

  const changeHandler = (e) => {
    setInputText(e.target.value);
    if (externalChangeHandler) {
      externalChangeHandler(e);
    }
  };

  return (
    <label htmlFor={inputId}>
      {label}
      <input
        type="text"
        className="search-input"
        name={inputId}
        id={inputId}
        value={inputText}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </label>
  );
};
