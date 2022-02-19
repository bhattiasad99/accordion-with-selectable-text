import PropTypes from "prop-types";
import React from "react";
import * as faIcons from "react-icons/fa";
import * as styledComponents from "./SelectableText.style";

const TEST_DATA = [
  "Describe how to measure a variety of lengths.",
  "learn how to calculate the size of the sun.",
  "how to check if you have a life.",
  "learn how to calculate the size of the sun.",
  "how to check if you have a life.",
  "learn how to calculate the size of the sun.",
  "how to check if you have a life.",
  "learn how to calculate the size of the sun.",
  "how to check if you have a life.",
];

const SelectableText = ({ data }) => {
  const [selectedText, setSelectedText] = React.useState();
  const { Wrapper, BuildText, BuildTextHoverEffect, StringOptions } =
    styledComponents;
  const { FaCommentDots, FaHighlighter } = faIcons;
  const selectStrHandler = (e) => {
    setSelectedText(data[e.target.getAttribute("id")]);
  };
  return (
    <Wrapper>
      {data.map((str, index) => (
        <React.Fragment key={index}>
          <BuildTextHoverEffect id={index} onClick={selectStrHandler}>
            <StringOptions selectedState={selectedText}>
              <FaHighlighter color="white" />
              <FaCommentDots color="white" />
            </StringOptions>
            {index}. {str}
          </BuildTextHoverEffect>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

SelectableText.propTypes = {
  data: PropTypes.any,
};

SelectableText.defaultProps = {
  data: TEST_DATA,
};

export default SelectableText;
