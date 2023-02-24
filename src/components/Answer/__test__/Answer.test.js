import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Answer from "../Answer";
import { AppProvider } from "../../../context";

const mochHandleClick = jest.fn();
const MockAnswer = ({ answer, correct }) => {
  return (
    <AppProvider>
      <Answer answer={answer} correct={correct} handleClick={mochHandleClick} />
    </AppProvider>
  );
};

describe("Answer", () => {
  test("should render input radio element", () => {
    render(<MockAnswer />);
    const inputElem = screen.getByRole("radio");
    expect(inputElem).toBeInTheDocument();
  });

  test("should render the value of answer prop", () => {
    render(<MockAnswer answer="Hello World" />);

    // const { getByText } = within(screen.getByTitle(/Answer/i));
    const divElem = screen.getByTitle(/AnswerDiv/i);
    expect(divElem).toHaveTextContent(/Hello World/i);
  });

  test("should change color to green when correct", () => {
    render(<MockAnswer answer="Hello World" correct="Hello World" />);
    const inputElem = screen.getByTitle(/AnswerRadio/i);
    const divElem = screen.getByTitle(/AnswerDiv/i);
    fireEvent.click(divElem);
    expect(inputElem.checked).toBe(true);
    expect(divElem).toHaveClass("input-radio correct");
  });
});
