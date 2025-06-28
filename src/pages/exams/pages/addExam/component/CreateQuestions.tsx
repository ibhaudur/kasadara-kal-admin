import React, { useState } from "react";
import { Question, QuestionItem } from "../../../../../types/pages.types";
import Steps from "./Steps";
import QuestionForm from "./QuestionForm";

const CreateQuestions: React.FC = () => {
  const [select, setSelect] = useState<number>(0);
  const [questions, setQuestions] = useState<QuestionItem[]>([
    {
      id: 1,
      mark: "2",
      english: {
        question: "What is the capital of France?",
        options: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" },
        answer: "C",
        description: "Paris is the capital and most populous city of France.",
      },
      tamil: {
        question: "பிரான்ஸின் தலைநகர் எது?",
        options: { A: "பெர்லின்", B: "மாட்ரிட்", C: "பாரிஸ்", D: "ரோம்" },
        answer: "C",
        description: "பாரிஸ் பிரான்ஸின் தலைநகராகும்.",
      },
    },
    {
      id: 2,
      mark: "5",
      english: {
        question: "Which planet is known as the Red Planet?",
        options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Saturn" },
        answer: "B",
        description:
          "Mars is often called the Red Planet due to its reddish appearance.",
      },
      tamil: {
        question: "சிவப்புப் கோளாக அழைக்கப்படும் கிரகம் எது?",
        options: { A: "பூமி", B: "செவ்வாய்", C: "வியாழன்", D: "சனி" },
        answer: "B",
        description:
          "செவ்வாய் அதன் சிவப்பு நிறம் காரணமாக சிவப்புக் கோளாக அழைக்கப்படுகிறது.",
      },
    },
    {
      id: 3,
      mark: "2",
      english: {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: {
          A: "William Shakespeare",
          B: "Charles Dickens",
          C: "Leo Tolstoy",
          D: "Mark Twain",
        },
        answer: "A",
        description: "William Shakespeare wrote 'Romeo and Juliet'.",
      },
      tamil: {
        question: "'ரோமியோ மற்றும் ஜூலியட்' என்ற நாடகத்தை யார் எழுதியார்?",
        options: {
          A: "வில்லியம் ஷேக்ஸ்பியர்",
          B: "சார்ல்ஸ் டிக்கன்ஸ்",
          C: "லியோ டால்ஸ்டாய்",
          D: "மார்க் டுவைன்",
        },
        answer: "A",
        description:
          "'ரோமியோ மற்றும் ஜூலியட்' என்ற நாடகத்தை வில்லியம் ஷேக்ஸ்பியர் எழுதியுள்ளார்.",
      },
    },
    {
      id: 4,
      mark: "4",
      english: {
        question: "Which gas do plants absorb from the atmosphere?",
        options: {
          A: "Oxygen",
          B: "Nitrogen",
          C: "Carbon Dioxide",
          D: "Helium",
        },
        answer: "C",
        description: "Plants absorb carbon dioxide for photosynthesis.",
      },
      tamil: {
        question: "சூழலிலிருந்து தாவரங்கள் எந்த வாயுவை உறிஞ்சுகின்றன?",
        options: {
          A: "ஆக்ஸிஜன்",
          B: "நைட்ரஜன்",
          C: "கார்பன் டையாக்சைடு",
          D: "ஹீலியம்",
        },
        answer: "C",
        description:
          "தாவரங்கள் புகையொளிச்சேர்க்கைக்காக கார்பன் டையாக்சைடை உறிஞ்சுகின்றன.",
      },
    },
    {
      id: 5,
      mark: "2",
      english: {
        question: "What is H2O commonly known as?",
        options: { A: "Salt", B: "Water", C: "Sugar", D: "Oxygen" },
        answer: "B",
        description: "H2O is the chemical formula for water.",
      },
      tamil: {
        question: "H2O பொதுவாக எதை குறிக்கிறது?",
        options: { A: "உப்பு", B: "தண்ணீர்", C: "சர்க்கரை", D: "ஆக்ஸிஜன்" },
        answer: "B",
        description: "H2O என்பது தண்ணீரின் இரசாயன சூத்திரம்.",
      },
    },
  ]);

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
