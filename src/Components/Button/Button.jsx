import React from "react";
import { ButtonStyled } from "./Button.style";
const Button = ({ children, ...otherProps }) => {
  return <ButtonStyled {...otherProps}>{children}</ButtonStyled>;
};

export default Button;
