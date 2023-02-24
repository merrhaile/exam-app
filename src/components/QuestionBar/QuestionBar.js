// import { HashLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function QuestionBar({ item, urlPart }) {
  return (
    <p
      key={item.id}
      className="question-bar"
      data-testid={`question-${item.id}`}
    >
      <HashLink smooth to={`/${urlPart}#${item.id}`} className="text-link">
        {item.id}. {item.question}
      </HashLink>
    </p>
  );
}

export default QuestionBar;
