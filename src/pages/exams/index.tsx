import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import ExamCards from "./component/ExamCards";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExamList = [
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:30",
    questionCount: "50",
    candidateCount: 80,
    status: "scheduled",
    type: "paid",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:00",
    questionCount: "50",
    candidateCount: 130,
    status: "published",
    type: "free",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:30",
    questionCount: "50",
    candidateCount: 85,
    status: "draft",
    type: "paid",
    price: "49",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:00",
    questionCount: "50",
    candidateCount: 130,
    status: "published",
    type: "free",
  },
  {
    examName: "Group 4 Exam - Quick Test - 4",
    mark: "100",
    hour: "01:30",
    questionCount: "50",
    candidateCount: 80,
    status: "scheduled",
    type: "paid",
  },
];

const Exams: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(changeHeader("Exams"));
  }, [dispatch]);

  return (
    <section className="p-4">
      <div className="rounded-[16px] flex justify-between items-center bg-white p-3">
        <div>
          <h5 className="text-[20px] font-semibold">Exams</h5>
          <small className="text-[#8790A1]">
            Create exams and mock tests easily & manage them in one place.
          </small>
        </div>
        <div className="relative group inline-block">
          <button className="bg-[#2BBC7C] rounded-3xl flex items-center gap-2 text-[14px] text-white px-5 py-2">
            Add Exam <FaChevronDown className="text-[12px]" />
          </button>

          <ul className="absolute right-0 mt-1 w-40 bg-white rounded shadow-xl opacity-0 text-[14px] group-hover:opacity-100 transition-opacity duration-200 z-10">
            <li
              onClick={() => navigate("/exams/addExam")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Exam
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Quick Test
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Mock Test
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {ExamList.map((item, index) => {
          return <ExamCards details={item} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Exams;
