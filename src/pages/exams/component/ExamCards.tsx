import React from "react";
import { LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { LuFileQuestion } from "react-icons/lu";
import { BiTimeFive } from "react-icons/bi";
import { IoIosSquare } from "react-icons/io";
import { ExamDetails } from "../../../types/pages.types";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { formatMinutesToHours } from "../../../utils/index.utils";

type DetailsProps = { details: ExamDetails };

const ExamCards: React.FC<DetailsProps> = ({ details }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`view/${details.exam_id}`)}
      className="relative bg-white rounded-2xl p-4 shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      {details.exam_type === "free" && (
        <span className="absolute top-[13px] right-[-25px] w-[100px] text-center bg-[#FFCA60] text-[12px] font-bold px-5 py-1 shadow-sm rotate-45 overflow-hidden">
          FREE
        </span>
      )}
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between mb-4 items-center">
          <ul className="flex gap-2">
            {details.status === "scheduled" && (
              <li className="bg-[#E9EDFF] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                <IoIosSquare className="text-[#3253EB] text-[14px]" /> Scheduled
              </li>
            )}
            {details.status === "publish" && (
              <li className="bg-[#CBFFE8] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                <IoIosSquare className="text-[#2BBC7C] text-[14px]" /> Published
              </li>
            )}
            {details.status === "draft" && (
              <li className="bg-[#FFE3E5] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                <IoIosSquare className="text-[#F74D58] text-[14px]" /> Draft
              </li>
            )}
            <li
              className={`${
                details.exam_type === "free" ? "bg-[#EBEBEB]" : "bg-[#FFEFC4]"
              } rounded-2xl text-[12px] font-semibold p-1 px-3`}
            >
              {details.exam_type === "free" ? "Free" : "Paid"}
            </li>
          </ul>
          {details.exam_type === "paid" && (
            <strong className="text-[24px] font-extrabold">
              ₹{details?.discount_cost}
            </strong>
          )}
        </div>
        <div>
          <h5 className="text-[18px] font-semibold text-[#21272C]">
            {details.exam_name}
          </h5>
          <small className="text-[#8790A1] flex gap-2 my-3 mb-4 text-[12px] font-medium">
            <span className="flex items-center gap-2">
              <LuGauge /> {details.total_marks} marks
            </span>
            |
            <span className="flex items-center gap-2">
              <PiTimerBold /> {formatMinutesToHours(Number(details.duration))}{" "}
            </span>
            |
            <span className="flex items-center gap-2">
              <LuFileQuestion /> {details.questionCount} Questions
            </span>
          </small>
          <i className="bg-[#F4ECFF] text-[12px] font-semibold py-1 px-3 rounded-3xl">
            {details.candidateCount} candidate registerd{" "}
          </i>
          <div className="mt-5">
            <small className="flex gap-2 items-center">
              <BiTimeFive className="text-[18px] text-[#2BBC7C] font-bold" />
              Start{" "}
              <b>
                on{" "}
                {moment(details.start_datetime)
                  .local()
                  .format("DD MMM, h:mm A")}
              </b>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCards;
