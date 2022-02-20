import styled, { keyframes } from "styled-components";

const mount = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;
export const EditFieldStyled = styled.div`
  display: inline-flex;
  position: absolute;
  background: #172b4d;
  top: -148px;
  border-radius: 5px;
  color: white;
  height: 110px;
  width: 20rem;
  justify-content: center;
  align-items: center;
  animation: ${mount} 0.3s linear;
`;
