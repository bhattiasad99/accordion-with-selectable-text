import styled from "styled-components";

export const Wrapper = styled.div`
  line-height: 2;
`;

export const BuildText = styled.span`
  background: ${(props) => props.highlight};
  margin-left: 0.4rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  transition: all 0.2s;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SentencesContainer = styled.div``;

export const CommentsContainer = styled.button`
  background-color: #f3f3f3;
  border: none;
  padding: 1rem 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin: 1rem;
  cursor: pointer;
  position: relative;
`;
