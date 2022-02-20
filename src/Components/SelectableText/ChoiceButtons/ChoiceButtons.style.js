import styled, { keyframes } from "styled-components";

const mount = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

export const StringOptions = styled.div`
  display: inline-flex;
  position: absolute;
  background: #172b4d;
  top: -33px;
  border-radius: 5px;
  color: white;
  width: 10rem;
  justify-content: center;
  align-items: center;
  animation: ${mount} 0.3s linear;
`;

export const IconButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  padding: 1rem;
  color: white;
  background: transparent;
`;

export const IconButtonHover = styled(IconButton)`
  &:hover {
    color: grey;
    cursor: pointer;
  }
`;
