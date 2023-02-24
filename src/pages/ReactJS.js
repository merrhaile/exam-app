import React from "react";
import useFetch from "../components/useFetch";
import Exam from "./Exam";

export default function ReactJS() {
  const { questions } = useFetch({ url: "/react.json" });
  return <Exam questions={questions} title="React Questions" urlPart="react" />;
}
