import React from "react";
import { colors } from "../../../../Helpers/colors";
import ColorPicker from "../../../ColorPicker/ColorPicker";
import { HighlightWrapper, HighlightColors } from "./Highlight.style";
import Button from "../../../Button/Button";
const Highlight = ({ getHighlight }) => {
  console.log(colors);
  return (
    <HighlightWrapper>
      <HighlightColors>
        {colors.map((color, i) => (
          <ColorPicker getHighlight={getHighlight} key={i} color={color} />
        ))}
      </HighlightColors>
    </HighlightWrapper>
  );
};

export default Highlight;
