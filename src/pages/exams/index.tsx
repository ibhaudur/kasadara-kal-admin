import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import { LuGauge } from "react-icons/lu";
import { PiTimerBold } from "react-icons/pi";
import { LuFileQuestion } from "react-icons/lu";
import { BiTimeFive } from "react-icons/bi";
import { IoIosSquare } from "react-icons/io";

const Exams: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Exams"));
  }, []);
  return (
    <React.Fragment>
      <div className="rounded-[16px] bg-white p-3">
        <h5 className="text-[20px] font-semibold">Exams</h5>
        <small className="text-[#8790A1]">
          Create exams and mock tests easily & manage them in one place.
        </small>
      </div>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div key={index} className="bg-white rounded-2xl p-4">
              <div>
                <div className="flex justify-between mb-4 items-center">
                  <ul className="flex gap-2">
                    <li className="bg-[#E9EDFF] rounded-2xl text-[12px] flex items-center gap-1 font-semibold p-1 px-3">
                      <IoIosSquare className="text-[#3253EB] text-[14px]" />{" "}
                      Scheduled
                    </li>
                    <li className="bg-[#FFEFC4] rounded-2xl text-[12px] font-semibold p-1 px-3">
                      Paid
                    </li>
                  </ul>
                  <strong className="text-[24px] font-extrabold">₹49</strong>
                </div>
                <h5 className="text-[18px] font-semibold text-[#21272C]">
                  Group 4 Exam - Quick Test - 4
                </h5>
                <small className="text-[#8790A1] flex gap-2 my-3 mb-4 text-[12px] font-medium">
                  <span className="flex items-center gap-2">
                    <LuGauge /> 100 marks
                  </span>
                  |
                  <span className="flex items-center gap-2">
                    <PiTimerBold /> 01:00 hrs
                  </span>
                  |
                  <span className="flex items-center gap-2">
                    <LuFileQuestion /> 50 Questions
                  </span>
                </small>
                <i className="bg-[#F4ECFF] text-[12px] font-semibold py-1 px-3 rounded-3xl">
                  85 candidate registerd{" "}
                </i>
                <div className="mt-5">
                  <small className="flex gap-2 items-center">
                    <BiTimeFive className="text-[18px] text-[#2BBC7C] font-bold" />
                    Start <b>on 18 Apr, 9:00 AM</b>
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Exams;
