import React, { useState } from "react";
import Answer from "../Answer/Answer";

function Question({ item, urlPart }) {
  const [disable, setDisable] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setDisable(true);
  };
  const handleCheckAns = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="box" id={item.id} data-testid={`question-${item.id}`}>
      <p>
        <span>{item.id}.</span>
        {item.question}
      </p>
      <div
        className={disable ? "box-disabled" : ""}
        data-testid={`ans-container-${item.id}`}
      >
        {item?.answers?.map((answer, i) => {
          return (
            <Answer
              key={i}
              answer={answer}
              handleClick={handleClick}
              disable={disable}
              correct={item.correct}
              urlPart={urlPart}
              index={i}
            />
          );
        })}
      </div>
      {disable && (
        <button onClick={handleCheckAns} className="ans-btn">
          Check Answer
        </button>
      )}
      <div className={showAnswer ? "answer-div" : "hidden"}>{item.correct}</div>
    </div>
  );
}

export default Question;
