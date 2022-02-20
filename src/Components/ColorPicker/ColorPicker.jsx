import React from "react";
import { Wrapper } from "./ColorPicker.style";

const ColorPicker = ({ color, getHighlight }) => {
  const clickHighlightHandler = (e) => {
    e.preventDefault();
    getHighlight(color);
  };
  return (
    <Wrapper onClick={clickHighlightHandler} bg={color}>
      &nbsp;
    </Wrapper>
  );
};

export default ColorPicker;

ColorPicker.defaultProps = {
  color: "rgba(247, 134, 96, 0.7)",
};
