import PropTypes from "prop-types";
import React from "react";
import ChoiceButtons from "./ChoiceButtons/ChoiceButtons";

import * as styledComponents from "./SelectableText.style";
const ANOTHER_DATA = [
  {
    string: "Describe how to measure a variety of lengths.",
    comment: "",
    highlight: "",
  },
  {
    string: "Describe how to measure a variety of lengths.",
    comment: "",
    highlight: "",
  },
  {
    string: "Describe how to measure a variety of lengths.",
    comment: "",
    highlight: "",
  },
  {
    string: "Describe how to measure a variety of lengths.",
    comment: "",
    highlight: "",
  },
];

const SelectableText = ({ data }) => {
  const [init, setInit] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const [sentences, setSentences] = React.useState([]);
  const [activeSentence, setActiveSentence] = React.useState({});
  React.useEffect(() => {
    setSentences(data);
    setInit(false);
  }, []);
  React.useEffect(() => {
    if (!init) {
      setActive(true);
    } else return;
  }, [activeSentence.id]);
  React.useEffect(() => {}, [active]);
  const { Wrapper, BuildText, BuildTextHoverEffect, StringOptions } =
    styledComponents;

  const selectTextHandler = (e) => {
    e.stopPropagation();
    const component = e.target.tagName;
    if (component === "SPAN") {
      const selectedText = sentences[e.target.getAttribute("id")];
      setActiveSentence({
        ...selectedText,
        id: parseInt(e.target.getAttribute("id")),
      });
      if (active) {
        setActive(false);
      } else setActive(true);
    }
  };
  const clickWrapperHandler = (e) => {
    setActive(false);
  };
  const userChoiceHandler = (e) => {
    console.log(e);
  };
  // what to do if empty object
  return (
    <Wrapper onClick={clickWrapperHandler}>
      {sentences &&
        sentences.map((str, index) => (
          <React.Fragment key={index}>
            <BuildTextHoverEffect
              onClick={selectTextHandler}
              highlight={str.highlight}
              id={index}
            >
              {index === activeSentence.id && active ? (
                <ChoiceButtons
                  getChoice={userChoiceHandler}
                  index={index}
                  sentence={sentences[index]}
                />
              ) : null}
              {index}. {str.string}
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
  data: ANOTHER_DATA,
};

export default SelectableText;
