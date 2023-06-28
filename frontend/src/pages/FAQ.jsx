import React from "react";
import Questions from "../components/Questions";
import question from "../assets/question.png";

function FAQ() {
  const faqData = [
    { id: 1, question: "Question 1", answer: "Réponse 1" },
    { id: 2, question: "Question 2", answer: "Réponse 2" },
    { id: 3, question: "Question 3", answer: "Réponse 3" },
    { id: 4, question: "Question 4", answer: "Réponse 4" },
    { id: 5, question: "Question 5", answer: "Réponse 5" },
    { id: 6, question: "Question 6", answer: "Réponse 6" },
  ];

  return (
    <div>
      <img
        src={question}
        alt="petit logo question réponse dessiné"
        className="w-40 flex justify-center pr-5 pt-10 pl-2 m-8"
      />
      <h1 className="flex justify-center pr-5 pt-10 pl-2 text-3xl font-bold m-8">
        Foire A Questions
      </h1>
      {faqData.map((faq) => (
        <Questions key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQ;
