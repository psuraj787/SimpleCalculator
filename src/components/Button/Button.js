import React from "react";

export const Button = (props) => {
  const numClickHandler = (event) => {
    props.getButtonData(event.target.value);
  };

  return (
    <button
      type="button"
      name="numBtn"
      onClick={numClickHandler}
      value={props.num}
    >
      {props.num}
    </button>
  );
};

export default Button;
