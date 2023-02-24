import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "../../../context";
import Question from "../Question";

const MockQuestion = ({ item }) => (
  <AppProvider>
    <Question item={{ ...item }} />
  </AppProvider>
);

describe("Answer", () => {
  test("should have div element with data-testid", () => {
    render(<MockQuestion item={{ id: 1, question: "What is JS?" }} />);
    const divElem = screen.getByTestId("question-1");
    expect(divElem).toBeInTheDocument();
  });
  test("should render item.question", () => {
    render(<MockQuestion item={{ id: 1, question: "What is JS?" }} />);
    const divElem = screen.getByTestId("question-1");
    expect(divElem).toHaveTextContent("What is JS?");
  });

  test("should should be disabled when answered", () => {
    render(
      <MockQuestion
        item={{
          id: 1,
          question: "What is JS?",
          answers: ["A", "B", "C"],
          correct: "C",
        }}
      />
    );
    const divElem = screen.getByTestId(/input-container-0/i);
    const answerContainer = screen.getByTestId(/ans-container-1/i);
    fireEvent.click(divElem);

    expect(answerContainer).toHaveClass("box-disabled");
  });
});
