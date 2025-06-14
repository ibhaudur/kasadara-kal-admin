import React, { useRef } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { StepsProps } from "../../../../../types/pages.types";

const Steps: React.FC<StepsProps> = ({ questions, setSelect, select }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 5 * 48;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center mb-3 mt-4">
      <CgChevronLeft
        onClick={scrollLeft}
        className="w-[34px] h-[34px] cursor-pointer text-center p-2 text-[14px] border border-[#EBEBEB] rounded-full shrink-0"
      />
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 px-2 scrollbar-hide"
      >
        {Array.from({ length: 40 }).map((_, index) => (
          <small
            key={index}
            onClick={() => {
              if (index < questions.length) setSelect(index);
            }}
            className={`w-[40px] h-[40px] flex items-center justify-center text-[14px]  rounded-[12px] shrink-0 ${
              select === index ? "bg-[#2BBC7C] text-white" : "bg-[#F8F8F8]"
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
      <CgChevronRight
        onClick={scrollRight}
        className="w-[34px] h-[34px] cursor-pointer text-center p-2 text-[14px] border border-[#EBEBEB] rounded-full shrink-0"
      />
    </div>
  );
};

export default Steps;
