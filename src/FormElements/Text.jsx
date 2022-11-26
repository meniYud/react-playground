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
    externalChangeHandler(e);
  };

  return (
    <label htmlFor={inputId}>
      {label}
      <input
        id={inputId}
        value={inputText}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </label>
  );
};
