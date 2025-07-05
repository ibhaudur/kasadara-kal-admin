import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosSquare } from "react-icons/io";
import Button from "../../../../../component/UI/Button";
import { LuCalendarDays, LuFileQuestion, LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";

const details = {
  status: "scheduled",
  type: "paid",
  mark: "100",
  hour: "1.5",
  questionCount: "50",
  attempts: "2",
};
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex justify-between p-3">
      <div className="flex gap-3">
        <FaArrowLeft
          className="cursor-pointer mt-1"
          onClick={() => navigate(-1)}
        />
        <div>
          <p className="flex gap-3">
            Group 4 Exam - Quick Test - 4
            <ul className="flex gap-2">
              {details.status === "scheduled" && (
                <li className="bg-[#E9EDFF] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                  <IoIosSquare className="text-[#3253EB] text-[14px]" />{" "}
                  Scheduled
                </li>
              )}
              {details.status === "published" && (
                <li className="bg-[#CBFFE8] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                  <IoIosSquare className="text-[#2BBC7C] text-[14px]" />{" "}
                  Published
                </li>
              )}
              {details.status === "draft" && (
                <li className="bg-[#FFE3E5] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                  <IoIosSquare className="text-[#F74D58] text-[14px]" /> Draft
                </li>
              )}
              <li
                className={`${
                  details.type === "free" ? "bg-[#EBEBEB]" : "bg-[#FFEFC4]"
                } rounded-2xl text-[12px] font-semibold p-1 px-3`}
              >
                {details.type === "free" ? "Free" : "Paid"}
              </li>
            </ul>
          </p>
          <small className="text-[#8790A1] text-[12px]">
            Created on 23 Oct 2024 at 04:30 PM{" "}
          </small>
          <small className="text-[#21272C] flex gap-2 my-3 mb-4 text-[12px] font-medium">
            <span className="flex items-center gap-2">
              <LuFileQuestion className="text-[#EB7632] text-[13px]" />{" "}
              {details.questionCount} Questions
            </span>
            |
            <span className="flex items-center gap-2">
              <TbReload className="text-[#6929E2] text-[14px]" />{" "}
              {details.attempts} Attempts
            </span>
            |
            <span className="flex items-center gap-2">
              <PiTimerBold className="text-[#2BBC7C] text-[14px]" />{" "}
              {details.hour} hrs
            </span>
            |
            <span className="flex items-center gap-2">
              <LuGauge className="text-[#FF4444] text-[14px]" /> {details.mark}{" "}
              marks
            </span>
            |
            <span className="flex items-center gap-2">
              <LuCalendarDays className="text-[#3253EB] text-[14px]" />{" "}
              Published on <b>25th Oct</b> at<b> 05:30 PM - 06:30 PM</b>
            </span>
          </small>
        </div>
      </div>
      <div className="gap-3 flex flex-col items-end">
        <div className="flex gap-3">
          <small className="m-0 cursor-pointer w-[40px] h-[40px] flex justify-center items-center p-2 text-[14px] border bg-white border-[#EBEBEB] rounded-3xl">
            <HiOutlineTrash  className="text-[18px]"/>
          </small>
          <Button
            btnName="Edit"
            splClass="rounded-[30px] h-[40px] text-[15px] px-6"
            handler={() => navigate('/exams/edit/2')}
            
          />
        </div>
        <p>
          <strong className="text-[24px] font-extrabold">
            ₹49<small className="text-[#8790A1]">/</small>&nbsp;
            <small className="text-[#8790A1] text-[14px] font-light">
              Candidate
            </small>
          </strong>{" "}
          |{" "}
          <i className="bg-[#F5F7F9] text-[12px] p-1 px-2 rounded-2xl">
            85 candidate registerd{" "}
          </i>
        </p>
      </div>
    </div>
  );
};

export default Header;
