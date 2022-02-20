import React from "react";
import { Wrapper, CommentStyled, SaveComment } from "./Comment.style";
import Button from "../../../Button/Button";
const Comment = ({ getSavedComment }) => {
  const [value, setValue] = React.useState("");
  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };
  const saveHandler = (e) => {
    e.preventDefault();
    console.log(value);
    getSavedComment(value);
    setValue("");
  };
  return (
    <Wrapper>
      <CommentStyled value={value} onChange={changeValueHandler} />
      <Button onClick={saveHandler}>Add comment</Button>
    </Wrapper>
  );
};

export default Comment;

Comment.defaultProps = {
  getSavedComment: (e) => {
    console.log(e, "no prop given");
  },
};
