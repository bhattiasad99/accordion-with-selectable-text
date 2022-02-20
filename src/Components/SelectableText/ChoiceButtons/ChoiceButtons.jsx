import React from "react";
import {
  StringOptions,
  IconButton,
  IconButtonHover,
} from "./ChoiceButtons.style";
import * as faIcons from "react-icons/fa";
const { FaCommentDots, FaHighlighter } = faIcons;

const ChoiceButtons = ({ index, sentence, getChoice }) => {
  const highlightHandler = (e) => {
    e.preventDefault();
    getChoice("highlight");
  };
  const commentHandler = (e) => {
    e.preventDefault();
    getChoice("comment");
  };
  return (
    <StringOptions>
      <IconButtonHover onClick={highlightHandler}>
        <FaHighlighter />
      </IconButtonHover>
      <IconButtonHover onClick={commentHandler}>
        <FaCommentDots />
      </IconButtonHover>
    </StringOptions>
  );
};

export default ChoiceButtons;

ChoiceButtons.defaultProps = {
  getChoice: (e) => console.log("no function given"),
};
