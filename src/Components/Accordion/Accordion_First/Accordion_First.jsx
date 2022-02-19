import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

import {
  Wrapper,
  Header,
  HeaderText,
  HeaderIcon,
  Content,
} from "./Accordion_First.style";

const Accordion_First = ({ heading, children, bgColor }) => {
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

export default Accordion_First;

Accordion_First.defaultProps = {
  heading: "First Accordion",
  children: <div>No Content given</div>,
  bgColor: "pink",
};
