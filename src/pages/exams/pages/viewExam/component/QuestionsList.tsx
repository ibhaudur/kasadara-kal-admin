import React, { useState } from "react";
import { QuestionItem } from "../../../../../types/pages.types";

type QuestionsListProps = {
  questions: QuestionItem[];
};

const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
  const [language, setLanguage] = useState<"English" | "Tamil">("English");

  return (
    <>
      {/* Language Toggle */}
      <ul className="p-0 flex gap-3">
        {(["English", "Tamil"] as const).map((item) => (
          <li
            key={item}
            className={`border py-2 px-4 rounded-[12px] text-[12px] cursor-pointer ${
              language === item
                ? "bg-[#2BBC7C] border-[#2C8C53] text-white"
                : "border-[#DCDFE4]"
            }`}
            onClick={() => setLanguage(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Questions */}
      <div>
        <h5 className="text-[20px] font-semibold mt-3">Questions</h5>
        {questions.map((item) => {
          const q = item[language.toLowerCase() as "english" | "tamil"];
          const answerKey = q.answer as keyof typeof q.options;

          return (
            <div
              key={item.id}
              className="my-3 border-b border-b-[#E5E5E5] py-3 last:border-b-0"
            >
              {/* Question */}
              <p className="font-bold text-[15px]">
                {item.id}. {q.question}
              </p>

              {/* Options */}
              <ul className="p-3">
                {(["A", "B", "C", "D"] as const).map((key) => (
                  <li key={key} className="mb-1 text-[14px] font-light">
                    {key}
                    {")"}. &nbsp; {q.options[key]}
                  </li>
                ))}
              </ul>

              {/* Answer */}
              {q.answer && (
                <p className="bg-[#D0FFEA] mb-2 p-2 rounded-[8px] text-[14px] w-[50%]">
                  Answer:{" "}
                  <span className="text-[#2BBC7C]">
                    {answerKey}
                    {")"}. {q.options[answerKey]}
                  </span>
                </p>
              )}

              {/* Marks */}
              <p className="bg-[#FFF8DA] p-2 rounded-[8px] text-[14px] inline-block">
                Marks: <span className="text-[#E2B905]">{item.mark}</span>
              </p>

              {/* Explanation */}
              {q.description && (
                <>
                  <h5 className="text-[14px] font-semibold mt-3">
                    Explanation
                  </h5>
                  <small>{q.description}</small>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuestionsList;
