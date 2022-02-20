import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0rem 0.7rem;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const CommentStyled = styled.textarea`
  background: transparent;
  border: none;
  outline: none;
  color: wheat;
  resize: none;
  flex-grow: 1;
  margin-top: 1rem;
`;
