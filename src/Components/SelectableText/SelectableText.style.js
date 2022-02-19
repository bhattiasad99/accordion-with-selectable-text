import styled from "styled-components";

export const Wrapper = styled.p``;

export const BuildText = styled.span`
  margin-left: 0.4rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  transition: all 0.2s;
  position: relative;
`;

export const BuildTextHoverEffect = styled(BuildText)`
  &:hover {
    background: #e0e0e0;
  }
`;

export const StringOptions = styled.span`
  position: absolute;
  z-index: 1000;
  background: rgba(23, 43, 77, 0.6);
  padding: 0.4rem 0.6rem;
  top: -70%;
`;
