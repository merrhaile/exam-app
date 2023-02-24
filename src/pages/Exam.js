import React from "react";
import Question from "../components/Question/Question";
import QuestionBar from "../components/QuestionBar/QuestionBar";
import "../App.css";

function Exam({ questions, title, urlPart }) {
  return (
    <>
      <div className="container">
        <div className="side-bar">
          <h3 className="title">{title}</h3>
          <div className="question-list">
            {questions.map((item) => {
              return (
                <QuestionBar key={item.id} item={item} urlPart={urlPart} />
              );
            })}
          </div>
        </div>
        <div className="main">
          {questions.map((item) => {
            return <Question key={item.id} item={item} urlPart={urlPart} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Exam;
