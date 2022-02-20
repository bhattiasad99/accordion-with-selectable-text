import React from "react";
import { EditFieldStyled } from "./EditFieldUi.style";
import Highlight from "./Highlight/Highlight";
import Comment from "./Comment/Comment";
const EditFieldUi = ({ choice, userComment, userHighlight, getHighlight }) => {
  if (choice === "comment") {
    return (
      <EditFieldStyled>
        <Comment getSavedComment={userComment} />
      </EditFieldStyled>
    );
  }
  if (choice === "highlight") {
    return (
      <EditFieldStyled>
        <Highlight getHighlight={getHighlight} />
      </EditFieldStyled>
    );
  }
};

export default EditFieldUi;
