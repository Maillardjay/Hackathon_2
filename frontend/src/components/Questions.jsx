import React, { useState } from "react";
import Answers from "./Answers";

function Questions({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button type="button" onClick={toggleExpand}>
        {question}
      </button>
      <div>{expanded && <Answers answer={answer} />}</div>
    </div>
  );
}

export default Questions;
