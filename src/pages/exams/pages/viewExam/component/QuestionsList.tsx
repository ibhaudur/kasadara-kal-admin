import React, { useState, useEffect, useRef } from "react";
import { QuestionItem } from "../../../../../types/pages.types";

type QuestionsListProps = {
  questions: QuestionItem[];
  select: number;
};

const QuestionsList: React.FC<QuestionsListProps> = ({ questions, select }) => {
  const [language, setLanguage] = useState<"English" | "Tamil">("English");
  const questionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const isFirstRender = useRef(true);
  const prevSelect = useRef<number | null>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevSelect.current = select;
      return;
    }
    if (prevSelect.current === select) {
      return;
    }

    if (select && questionRefs.current[select]) {
      questionRefs.current[select]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    prevSelect.current = select;
  }, [select]);

  return (
    <React.Fragment>
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
      <div>
        <h5 className="text-[20px] font-semibold mt-3">Questions</h5>
        {questions?.map((item) => {
          const q = item[language.toLowerCase() as "english" | "tamil"];
          const answerKey = q.answer as keyof typeof q.options;

          return (
            <div
              ref={(el) => {
                questionRefs.current[item.id] = el;
              }}
              key={item.id}
              className="my-3 border-b border-b-[#E5E5E5] py-3 last:border-b-0 scroll-mt-30"
            >
              <p className="font-bold text-[15px]">
                {item.id}. {q.question}
              </p>
              <ul className="p-3">
                {(["A", "B", "C", "D"] as const).map((key) => (
                  <li key={key} className="mb-1 text-[14px] font-light">
                    {key}) &nbsp; {q.options[key]}
                  </li>
                ))}
              </ul>
              {q.answer && (
                <p className="bg-[#D0FFEA] mb-2 p-2 rounded-[8px] text-[14px] w-[50%]">
                  Answer:{" "}
                  <span className="text-[#2BBC7C]">
                    {answerKey}) {q.options[answerKey]}
                  </span>
                </p>
              )}
              <p className="bg-[#FFF8DA] p-2 rounded-[8px] text-[14px] inline-block">
                Marks: <span className="text-[#E2B905]">{item.mark}</span>
              </p>
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
    </React.Fragment>
  );
};

export default QuestionsList;
