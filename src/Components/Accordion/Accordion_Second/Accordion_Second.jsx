import React from "react";
import {
  Wrapper,
  Header,
  HeaderText,
  HeaderIcon,
  Content,
} from "./Accordion_Second.style";
import { HiOutlineChevronDown } from "react-icons/hi";

const Accordion_Second = ({ heading, children, bgColor }) => {
  const [active, setActive] = React.useState(false);
  const toggleActiveHandler = (e) => {
    e.preventDefault();
    setActive((prevState) => !prevState);
  };
  return (
    <Wrapper>
      <Header bg={bgColor} onClick={toggleActiveHandler}>
        <HeaderText>{heading}</HeaderText>
        <HeaderIcon isActive={active}>
          <HiOutlineChevronDown />
        </HeaderIcon>
      </Header>
      <Content isActive={active}>{children}</Content>
    </Wrapper>
  );
};

export default Accordion_Second;

Accordion_Second.defaultProps = {
  heading: "Second Accordion",
  children: <div>No Content given</div>,
  bgColor: "pink",
};
