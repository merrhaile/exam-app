import React from "react";
import useFetch from "../components/useFetch";
import Exam from "./Exam";

export default function Javascript() {
  const { questions } = useFetch({ url: "/javascript.json" });
  return (
    <Exam
      questions={questions}
      title="JavScript Questions"
      urlPart="javascript"
    />
  );
}
