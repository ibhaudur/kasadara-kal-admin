import React, { useState } from "react";
import { Question, QuestionItem, QuestionsStateProps } from "../../../../../types/pages.types";
import Steps from "./Steps";
import QuestionForm from "./QuestionForm";

const CreateQuestions: React.FC<QuestionsStateProps> = ({
  questions,
  setQuestions,
}) => {
  const [select, setSelect] = useState<number>(0);

  const handleChange = (
    index: number,
    languageOrField: keyof QuestionItem | "mark",
    fieldOrValue: keyof Question | string,
    valueOrUndefined?: string,
    optionKey?: keyof Question["options"]
  ) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      const questionItem = { ...updatedQuestions[index] };

      if (languageOrField === "mark") {
        questionItem.mark = fieldOrValue as string;
      } else {
        const language = languageOrField as "english" | "tamil";
        const field = fieldOrValue as keyof Question;
        const langData = { ...questionItem[language] };

        switch (field) {
          case "options":
            if (optionKey) {
              langData.options = {
                ...langData.options,
                [optionKey]: valueOrUndefined ?? "",
              };
            }
            break;
          default:
            langData[field] = valueOrUndefined ?? "";
        }

        questionItem[language] = langData;
      }

      updatedQuestions[index] = questionItem;
      return updatedQuestions;
    });
  };

  const addQuestion = () => {
    const current = questions[select];

    const isEnglishValid =
      current.english.question.trim() !== "" &&
      Object.values(current.english.options).every(
        (opt) => opt.trim() !== ""
      ) &&
      current.english.answer.trim() !== "";

    const isTamilValid =
      current.tamil.question.trim() !== "" &&
      Object.values(current.tamil.options).every((opt) => opt.trim() !== "") &&
      current.tamil.answer.trim() !== "";

    if (!isEnglishValid || !isTamilValid) {
      alert(
        "Please fill in all fields in both languages before adding a new question."
      );
      return;
    }

    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        mark: "",
        english: {
          question: "",
          options: { A: "", B: "", C: "", D: "" },
          answer: "",
          description: "",
        },
        tamil: {
          question: "",
          options: { A: "", B: "", C: "", D: "" },
          answer: "",
          description: "",
        },
      },
    ]);
    setSelect(questions.length);
  };
  return (
    <div className="space-y-5">
      <Steps questions={questions} setSelect={setSelect} select={select} />
      {questions.length > 0 && (
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-12">
            <label className="font-semibold">Question {select + 1}</label>
            <div className="flex items-center gap-3 mt-4">
              <label className="text-[14px]">Mark of this question:</label>
              <input
                type="number"
                name="mark"
                value={questions[select].mark}
                onChange={(e) => handleChange(select, "mark", e.target.value)}
                placeholder="Enter value"
                className="w-[100px] px-2 py-2 border rounded-[10px] bg-white border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] focus:ring-[#2BBC7C]"
              />
            </div>
          </div>
          <div className="col-span-6 bg-[#F8F8F8] rounded-2xl p-4">
            <QuestionForm
              select={select}
              questions={questions}
              handleChange={handleChange}
              language="english"
            />
          </div>
          <div className="col-span-6 bg-[#F8F8F8] rounded-2xl p-4">
            <QuestionForm
              select={select}
              questions={questions}
              handleChange={handleChange}
              language="tamil"
            />
          </div>
        </div>
      )}
      <div className="flex justify-end">
        <button
          onClick={addQuestion}
          className="px-6 py-2 cursor-pointer bg-[#2BBC7C] rounded-3xl text-white"
        >
          Save & Add
        </button>
      </div>
    </div>
  );
};

export default CreateQuestions;
