import React, { useState, useRef } from "react";
import { useGlobalContext } from "../../context";

function Answer({ answer, handleClick, correct, urlPart, index }) {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState(null);
  const { handleResult } = useGlobalContext();
  const inputRef = useRef();

  const handleCheckAnswer = () => {
    const val = inputRef.current.value;
    if (val === correct) {
      setCorrectAnswer(true);
      handleResult(urlPart);
    } else {
      setCorrectAnswer(false);
      setWrongAnswer(true);
    }
    inputRef.current.checked = true;
    handleClick();
  };

  return (
    <div
      className={
        correctAnswer
          ? "input-radio correct"
          : wrongAnswer
          ? "input-radio wrong"
          : "input-radio "
      }
      onClick={handleCheckAnswer}
      title="AnswerDiv"
      data-testid={`input-container-${index}`}
    >
      <input
        type="radio"
        value={answer}
        name="answer"
        ref={inputRef}
        title="AnswerRadio"
      />
      {" " + answer}
    </div>
  );
}

export default Answer;
