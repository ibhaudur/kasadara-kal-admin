import React, { useState } from "react";
import { Question } from "../../../../../types/pages.types";
import Steps from "./Steps";

const CreateQuestions: React.FC = () => {
  const [select, setSelect] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "",
      options: { A: "", B: "", C: "", D: "" },
      answer: "",
    },
  ]);

  const handleChange = (
    index: number,
    field: keyof Question,
    value: string,
    optionKey?: keyof Question["options"]
  ) => {
    const updatedQuestions = [...questions];

    if (field === "options" && optionKey) {
      updatedQuestions[index].options[optionKey] = value;
    } else if (field !== "options") {
      updatedQuestions[index][field] = value;
    }

    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    const current = questions[select];

    const isQuestionFilled = current.question.trim() !== "";
    const areOptionsFilled = Object.values(current.options).every(
      (opt) => opt.trim() !== ""
    );
    const isAnswerFilled = current.answer.trim() !== "";

    if (!isQuestionFilled || !areOptionsFilled || !isAnswerFilled) {
      alert("Please fill in all fields before adding a new question.");
      return;
    }

    setQuestions([
      ...questions,
      {
        question: "",
        options: { A: "", B: "", C: "", D: "" },
        answer: "",
      },
    ]);
    setSelect(questions.length);
  };

  return (
    <div className="space-y-10">
      <Steps questions={questions} setSelect={setSelect} select={select} />
      {questions.length && (
        <div>
          <label className="text-[13px]">Question {select + 1}</label>
          <textarea
            placeholder="Type here..."
            value={questions[select]?.question}
            onChange={(e) => handleChange(select, "question", e.target.value)}
            className="w-full px-3 py-2 border rounded-[10px] border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] focus:ring-[#2BBC7C]"
          />
          <ul className="mt-5">
            {(["A", "B", "C", "D"] as const).map((opt) => (
              <li className="flex gap-3 items-center mb-3" key={opt}>
                <small className="m-0 w-[40px] h-[40px] text-center p-2 text-[14px] border border-[#EBEBEB] inline-block rounded-3xl">
                  {opt}
                </small>
                <input
                  type="text"
                  value={questions[select]?.options[opt]}
                  onChange={(e) =>
                    handleChange(select, "options", e.target.value, opt)
                  }
                  placeholder="Type here..."
                  className="w-full px-3 py-2 border rounded-[10px] border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] focus:ring-[#2BBC7C]"
                />
              </li>
            ))}
          </ul>
          <label>Answer</label>
          <select
            value={questions[select]?.answer}
            onChange={(e) => handleChange(select, "answer", e.target.value)}
            className="w-full px-3 py-2 border rounded-[10px] border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] focus:ring-[#2BBC7C]"
          >
            <option value="">Select correct answer</option>
            {(["A", "B", "C", "D"] as const).map((opt) => (
              <option key={opt} value={opt}>
                {opt}: {questions[select]?.options[opt]}
              </option>
            ))}
          </select>
        </div>
      )}
      <button
        onClick={addQuestion}
        className="px-6 py-2 float-right cursor-pointer bg-[#2BBC7C] rounded-3xl text-white"
      >
        Save & Add
      </button>
    </div>
  );
};

export default CreateQuestions;
