import React from "react";
import { QuestionFormProps } from "../../../../../types/pages.types";
import { RichTextEditor } from "@mantine/rte";

const QuestionForm: React.FC<QuestionFormProps> = ({
  select,
  questions,
  handleChange,
  language,
}) => {
  const q = questions[select][language];

  return (
    <React.Fragment>
      <label className="text-[13px] font-medium">
        {language.charAt(0).toUpperCase() + language.slice(1)}
      </label>

      {/* Mantine Rich Text Editor for Question */}
      <RichTextEditor
        value={q.question}
        onChange={(value) => handleChange(select, language, "question", value)}
        className="mb-3 border rounded-[10px]"
        controls={[
          ["bold", "italic", "underline", "strike"],
          ["unorderedList", "orderedList"],
          ["blockquote", "codeBlock"],
          ["clean"],
        ]}
      />

      {/* Options */}
      <ul className="mt-5">
        {(["A", "B", "C", "D"] as const).map((opt) => (
          <li className="flex gap-3 items-center mb-3" key={opt}>
            <small className="m-0 w-10 h-10 text-center p-2 text-[14px] border bg-white border-[#EBEBEB] inline-block rounded-3xl">
              {opt}
            </small>
            <input
              type="text"
              value={q.options[opt]}
              onChange={(e) =>
                handleChange(select, language, "options", e.target.value, opt)
              }
              placeholder="Type here..."
              className="w-full px-3 py-2 border rounded-[10px] text-[13px] bg-white border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] focus:ring-[#2BBC7C]"
            />
          </li>
        ))}
      </ul>

      <label className="flex text-[12px] mb-1">Answer</label>
      <select
        value={q.answer.toUpperCase()}
        onChange={(e) =>
          handleChange(select, language, "answer", e.target.value)
        }
        className="w-full px-3 mb-3 py-2 border rounded-[10px] text-[13px] bg-white border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] focus:ring-[#2BBC7C]"
      >
        <option value="">Select correct answer</option>
        {(["A", "B", "C", "D"] as const).map((opt) => (
          <option key={opt} value={opt}>
            {opt}: {q.options[opt]}
          </option>
        ))}
      </select>

      <label className="text-[13px]">Description</label>
      <textarea
        placeholder="Type here..."
        value={q.description}
        onChange={(e) =>
          handleChange(select, language, "description", e.target.value)
        }
        className="w-full px-3 py-2 border rounded-[10px] text-[13px] bg-white border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] focus:ring-[#2BBC7C]"
      />
    </React.Fragment>
  );
};

export default QuestionForm;
