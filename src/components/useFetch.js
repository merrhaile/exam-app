import React from "react";

export default function useFetch(data) {
  const [questions, setQuestions] = React.useState([]);
  React.useEffect(() => {
    fetch(data.url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, [data.url]);
  return { questions };
}
