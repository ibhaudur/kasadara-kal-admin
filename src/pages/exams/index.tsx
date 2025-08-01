import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import ExamCards from "./component/ExamCards";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../component/SearchBox";
import { MdOutlineSwapVert } from "react-icons/md";
import useApiCall from "../../hooks/useApiCall";
import { getAllExams } from "../../service/apiUrls";
import { ExamDetails } from "../../types/pages.types";

const Exams: React.FC = () => {
  const [active, setActive] = useState<string>("Exams");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useApiCall({
    key: getAllExams,
    url: getAllExams,
    method: "get",
  });

  useEffect(() => {
    dispatch(changeHeader("Exams"));
  }, [dispatch]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="p-4">
      <div className="rounded-[16px] flex justify-between items-center bg-white p-3">
        <div>
          <h5 className="text-[20px] font-semibold">Exams</h5>
          <small className="text-[#8790A1]">
            Create exams and mock tests easily & manage them in one place.
          </small>
        </div>

        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="bg-[#2BBC7C] cursor-pointer rounded-3xl flex items-center gap-2 text-[14px] text-white px-5 py-2"
          >
            Add Exam <FaChevronDown className="text-[12px]" />
          </button>

          {showDropdown && (
            <ul className="absolute right-0 mt-1 w-40 bg-white rounded shadow-xl text-[14px] z-10">
              <li
                onClick={() => {
                  navigate("/exams/addExam");
                  setShowDropdown(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Exam
              </li>
              <li
                onClick={() => setShowDropdown(false)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Quick Test
              </li>
              <li
                onClick={() => setShowDropdown(false)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Mock Test
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <small className="text-[14px] text-[#172B4D]">
          <ul className="p-0 flex gap-2">
            {(["Exams", "Mock test", "Quick test"] as const).map((item) => (
              <li
                key={item}
                className={`py-2 px-4 rounded-[12px] text-[12px] cursor-pointer ${
                  active === item ? "bg-[#2BBC7C] text-white" : "bg-white"
                }`}
                onClick={() => setActive(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </small>
        <div className="flex gap-3">
          <SearchBox />
          <div className="flex items-center w-[100%] px-4 text-[#172B4D] h-[40px] bg-white rounded-[14px] border-[0.6px] border-[#DCDFE4] text-sm">
            <MdOutlineSwapVert className="text-[20px]" /> &nbsp; Default (date
            created)
          </div>
        </div>
      </div>

      {data?.data?.length > 0 ? (
        <div className="grid grid-cols-3 mt-4 gap-4">
          {data?.data?.map((item: ExamDetails, index: number) => {
            return <ExamCards key={index} details={item} />;
          })}
        </div>
      ) : (
        <p className="text-center mt-6">No Data Found!</p>
      )}
    </section>
  );
};

export default Exams;
