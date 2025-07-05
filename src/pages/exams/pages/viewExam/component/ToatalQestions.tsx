import React from "react";
import { StepsProps } from "../../../../../types/pages.types";

const ToatalQestions: React.FC<StepsProps> = ({
  setSelect,
  questions,
  select,
}) => {
  return (
    <div className="bg-white h-fit p-4 w-[239px] rounded-3xl sticky top-16">
      <p className="mb-2">Total questions : {questions.length}</p>

      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: questions.length }).map((_, index) => (
          <small
            key={index}
            onClick={() => {
              if (index < questions.length) setSelect(index + 1);
            }}
            className={`w-[35px] h-[35px] flex items-center justify-center text-[12px]  rounded-[12px] shrink-0 ${
              select === index + 1 ? "bg-[#2BBC7C] text-white" : "bg-[#F8F8F8]"
            } ${
              Number(questions.length) >= index + 1
                ? "cursor-pointer"
                : "cursor-not-allowed"
            }`}
          >
            {index + 1}
          </small>
        ))}
      </div>
    </div>
  );
};

export default ToatalQestions;
