import React, { useState } from "react";
import Answers from "./Answers";

function Questions({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="flex flex-col justify-center mr-10 ml-10">
        <button
          type="button"
          onClick={toggleExpand}
          className="flex flex-col font-semibold"
        >
          {question}
        </button>
        <p>+</p>
      </div>
      <div>{expanded && <Answers answer={answer} />}</div>
    </div>
  );
}

export default Questions;
