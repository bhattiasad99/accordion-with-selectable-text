import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Header = styled.button`
  outline: none;
  border: none;
  width: 100%;
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background-color: ${(props) => props.bg};
`;

export const HeaderText = styled.span``;

export const HeaderIcon = styled.div`
  transform: rotate(${(props) => (props.isActive ? "0" : "90")}deg);
`;

export const Content = styled.div`
  height: ${(props) => (props.isActive ? "fit-content" : "0px")};
  display: ${(props) => (props.isActive ? "block" : "none")};
  overflow: hidden;
  transition: all 0.5s;
  padding: 2rem;
`;
