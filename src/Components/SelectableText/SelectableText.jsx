import PropTypes from "prop-types";
import React from "react";
import ChoiceButtons from "./ChoiceButtons/ChoiceButtons";
import EditFieldUi from "./EditFieldUi/EditFieldUi";
import { sample_text } from "../../Helpers/sample-text";
import Comments from "./Comments/Comments";
import {
  Wrapper,
  BuildText,
  SentencesContainer,
  CommentsContainer,
} from "./SelectableText.style";

const SelectableText = ({ data }) => {
  // states
  const [showComments, setShowComments] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const [editChoice, setEditChoice] = React.useState("");
  const [init, setInit] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const [sentences, setSentences] = React.useState([]);
  const [activeSentence, setActiveSentence] = React.useState({});

  // use effects
  // initial render
  React.useEffect(() => {
    let temp = data.map((el, i) => {
      return {
        ...el,
        id: i,
      };
    });
    setSentences(temp);
    // avoid some functions on first render
    setInit(false);
  }, []);

  // make sure when sentence is changed, then active class doesnt toggle and the edit choice comp unmounts
  React.useEffect(() => {
    if (!init) {
      setActive(true);
      setEditChoice("");
    } else return;
  }, [activeSentence.id]);

  // whenever a new sentence is selected by user, the edit choice component should unmount
  React.useEffect(() => {
    if (!active) {
      setEditChoice("");
    }
  }, [active]);

  // select a sentence
  const selectTextHandler = (e) => {
    // stopping propagation for unmount when user clicks on the edit actions (which is not a wise step, but i could use a document listener, but as i normally do, i use redux for this)
    e.stopPropagation();
    const component = e.target.tagName;
    if (component === "SPAN") {
      const selectedText = sentences[e.target.getAttribute("id")];
      setActiveSentence({
        ...selectedText,
        id: parseInt(e.target.getAttribute("id")),
      });
      if (active) {
        setActive(false);
      } else setActive(true);
    }
  };

  // clear the popovers when user clicks on wrapper (normally i use redux)
  const clickWrapperHandler = (e) => {
    setActive(false);
    setEditChoice("");
  };

  // when user clicks on comments button, then this function toggles the popover to view the comments
  const toggleShowComments = (e) => {
    e.preventDefault();
    setShowComments((prevState) => !prevState);
    const tempComments = sentences.filter(
      (sentence) => sentence.comment.length > 0
    );
    setComments(tempComments);
  };

  // if users wants to add comment, or if user wants to set a color
  const userChoiceHandler = (e) => {
    setEditChoice(e);
  };

  // recieve comments by user and edit the comment state
  const getUserComment = (e) => {
    let temp = [...sentences];
    const toChangeSentence = sentences.find(
      (sentence, index) => index === activeSentence.id
    );
    toChangeSentence.comment = e;
    setSentences(temp);
    const tempComments = sentences.filter(
      (sentence) => sentence.comment.length > 0
    );
    setComments(tempComments);
    setEditChoice("");
    setActive(false);
  };

  // set highlight for sentence when user adds highlight
  const getUserHighlight = (e) => {
    let temp = [...sentences];
    temp[activeSentence.id].highlight = `rgba(${e})`;
    setSentences(temp);
    setEditChoice("");
    setActive(false);
  };
  return (
    <Wrapper onClick={clickWrapperHandler}>
      {sentences.length > 0 ? (
        <React.Fragment>
          <SentencesContainer>
            {sentences &&
              sentences.map((str, index) => (
                <React.Fragment key={index}>
                  <BuildText
                    onClick={selectTextHandler}
                    highlight={str.highlight}
                    id={index}
                  >
                    {editChoice.length > 0 && index === activeSentence.id && (
                      <EditFieldUi
                        getHighlight={getUserHighlight}
                        userComment={getUserComment}
                        choice={editChoice}
                      />
                    )}
                    {index === activeSentence.id && active ? (
                      <ChoiceButtons
                        getChoice={userChoiceHandler}
                        index={index}
                        sentence={sentences[index]}
                      />
                    ) : null}
                    {str.id + 1}. {str.string}
                  </BuildText>
                </React.Fragment>
              ))}
          </SentencesContainer>
          <CommentsContainer onClick={toggleShowComments}>
            <Comments comments={comments} show={showComments} />
          </CommentsContainer>
        </React.Fragment>
      ) : (
        <div>Not given</div>
      )}
    </Wrapper>
  );
};

SelectableText.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }),
};

SelectableText.defaultProps = {
  data: sample_text,
};

export default SelectableText;
