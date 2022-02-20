import PropTypes from "prop-types";
import React from "react";
import Accordion_First from "./Accordion_First/Accordion_First";
import Accordion_Second from "./Accordion_Second/Accordion_Second";
import Accordion_Third from "./Accordion_Third/Accordion_Third";

const Accordion = ({ collapsable, config, backgrounds }) => {
  // I could make a single accordion reusable component, but there was a huge styling difference in Octilearn app between each layer
  // Hence i made an each component for each layer
  return (
    <React.Fragment>
      {config.map((detail) => (
        <Accordion_First
          label={detail.label}
          key={detail.name}
          bgColor={backgrounds.first}
        >
          {detail.hasChildren &&
            detail.children.map((childFirst) => (
              <Accordion_Second
                label={childFirst.label}
                key={childFirst.name}
                bgColor={backgrounds.second}
              >
                {childFirst.hasChildren &&
                  childFirst.children.map((childSecond) => (
                    <Accordion_Third
                      label={childSecond.label}
                      key={childSecond.name}
                      bgColor={backgrounds.third}
                    >
                      {childSecond.content}
                    </Accordion_Third>
                  ))}
              </Accordion_Second>
            ))}
        </Accordion_First>
      ))}
    </React.Fragment>
  );
};

Accordion.propTypes = {
  backgrounds: PropTypes.shape({
    first: PropTypes.string,
    second: PropTypes.string,
    third: PropTypes.string,
  }),
  collapsable: PropTypes.bool,
  details: PropTypes.shape({
    map: PropTypes.func,
  }),
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
};

Accordion.defaultProps = {
  collapsable: false,
  backgrounds: {
    first: "#ffdbfe",
    second: "#ffe8fe",
    third: "#fff2fe",
  },
};

export default Accordion;
