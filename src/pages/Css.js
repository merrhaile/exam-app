import React from "react";
import Exam from "./Exam";
import useFetch from "../components/useFetch";

export default function Css({ handleResult }) {
  const { questions } = useFetch({ url: "/css.json" });
  return <Exam questions={questions} title="Css Questions" urlPart="css" />;
}
