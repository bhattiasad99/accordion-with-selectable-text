import React from "react";
import { MdOutlineInsertComment } from "react-icons/md";
import {
  CommentsContainer,
  CommentsHeading,
  CommentsListContainer,
  CommentsListItem,
} from "./Comments.style";
const Comments = ({ show, comments }) => {
  const u_remove_propagation = (e) => {
    e.stopPropagation();
  };
  return (
    <React.Fragment>
      <MdOutlineInsertComment />
      {show && (
        <CommentsContainer onClick={u_remove_propagation}>
          <CommentsHeading>Comments</CommentsHeading>
          <CommentsListContainer>
            {comments.length > 0
              ? comments.map((comment) => (
                  <CommentsListItem key={comment.id}>
                    {comment.id + 1}. {comment.comment}
                  </CommentsListItem>
                ))
              : "No Comment Added!"}
          </CommentsListContainer>
        </CommentsContainer>
      )}
    </React.Fragment>
  );
};

export default Comments;
