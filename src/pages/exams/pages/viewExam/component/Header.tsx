import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosSquare } from "react-icons/io";
import Button from "../../../../../component/UI/Button";
import { LuCalendarDays, LuFileQuestion, LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import { ExamDetails } from "../../../../../types/pages.types";
import {
  formatDate,
  formatMinutesToHours,
} from "../../../../../utils/index.utils";

const Header = ({ id, data }: { id: string; data: ExamDetails }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex justify-between p-3 z-30 sticky top-0">
      <div className="flex gap-3">
        <FaArrowLeft
          className="cursor-pointer mt-1"
          onClick={() => navigate(-1)}
        />
        <div>
          <div className="flex gap-3">
            {data?.exam_name}
            <ul className="flex gap-2">
              {data?.status === "scheduled" && (
                <li className="bg-[#E9EDFF] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                  <IoIosSquare className="text-[#3253EB] text-[14px]" />{" "}
                  Scheduled
                </li>
              )}
              {data?.status === "publish" && (
                <li className="bg-[#CBFFE8] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                  <IoIosSquare className="text-[#2BBC7C] text-[14px]" />{" "}
                  Published
                </li>
              )}
              {data?.status === "draft" && (
                <li className="bg-[#FFE3E5] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                  <IoIosSquare className="text-[#F74D58] text-[14px]" /> Draft
                </li>
              )}
              <li
                className={`${
                  data?.exam_type === "free" ? "bg-[#EBEBEB]" : "bg-[#FFEFC4]"
                } rounded-2xl text-[12px] font-semibold p-1 px-3`}
              >
                {data?.exam_type === "free" ? "Free" : "Paid"}
              </li>
            </ul>
          </div>
          <small className="text-[#8790A1] text-[12px]">
            Created on {formatDate(data?.created_on)}{" "}
          </small>
          <small className="text-[#21272C] flex gap-2 my-3 mb-4 text-[12px] font-medium">
            <span className="flex items-center gap-2">
              <LuFileQuestion className="text-[#EB7632] text-[13px]" />{" "}
              {data?.questions_count} Questions
            </span>
            |
            <span className="flex items-center gap-2">
              <TbReload className="text-[#6929E2] text-[14px]" />{" "}
              {data?.attempt_per_person} Attempts
            </span>
            |
            <span className="flex items-center gap-2">
              <PiTimerBold className="text-[#2BBC7C] text-[14px]" />{" "}
              {formatMinutesToHours(Number(data?.duration))} hrs
            </span>
            |
            <span className="flex items-center gap-2">
              <LuGauge className="text-[#FF4444] text-[14px]" />{" "}
              {data?.total_marks} marks
            </span>
            {data?.published_on && (
              <>
                {" "}
                |
                <span className="flex items-center gap-2">
                  <LuCalendarDays className="text-[#3253EB] text-[14px]" />{" "}
                  Published on <b>{formatDate(data?.published_on)}</b>
                </span>
              </>
            )}
          </small>
        </div>
      </div>
      <div className="gap-3 flex flex-col items-end">
        <div className="flex gap-3">
          {/* <small className="m-0 cursor-pointer w-[40px] h-[40px] flex justify-center items-center p-2 text-[14px] border bg-white border-[#EBEBEB] rounded-3xl">
            <HiOutlineTrash className="text-[18px]" />
          </small> */}
          {data?.status !== "publish" && (
            <Button
              btnName="Edit"
              splClass="rounded-[30px] h-[40px] text-[15px] px-6"
              handler={() => navigate(`/exams/edit/${id}`)}
            />
          )}
        </div>
        <p>
          <strong className="text-[24px] font-extrabold">
            ₹{parseInt(data?.final_cost || "0")} &nbsp;
            <small className="text-[#8790A1]">/</small>&nbsp;
            <small className="text-[#8790A1] text-[14px] font-light">
              Candidate
            </small>
          </strong>{" "}
          |{" "}
          <i className="bg-[#F5F7F9] text-[12px] p-1 px-2 rounded-2xl">
            {data?.registered_candidate} candidate registered{" "}
          </i>
        </p>
      </div>
    </div>
  );
};

export default Header;
