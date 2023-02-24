import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import QuestionBar from "../QuestionBar";
import { AppProvider } from "../../../context";

const MockQuestionBar = ({ item }) => (
  <AppProvider>
    <BrowserRouter>
      <QuestionBar item={{ ...item }} />{" "}
    </BrowserRouter>
  </AppProvider>
);

describe("Answer", () => {
  test("should render input paragraph element", () => {
    render(<MockQuestionBar item={{ id: 1, question: "What is Css?" }} />);
    const paraElem = screen.getByTestId("question-1");
    expect(paraElem).toBeInTheDocument();
  });
  test("should render some text", () => {
    render(<MockQuestionBar item={{ id: 1, question: "What is Css?" }} />);
    const paraElem = screen.getByTestId("question-1");
    expect(paraElem).toHaveTextContent(/1. What is Css?/i);
  });
});
