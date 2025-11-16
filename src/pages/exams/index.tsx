import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import ExamCards from "./component/ExamCards";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../component/SearchBox";
import useApiCall from "../../hooks/useApiCall";
import { getAllExams } from "../../service/apiUrls";
import { ExamDetails } from "../../types/pages.types";
import useDebounce from "../../hooks/useDebounce";
import Pagination from "../../component/UI/Pagination";

const Exams: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState({ search: "", status: "all" });
  const debouncedSearch = useDebounce(filter.search, 500);
  const url = getAllExams
    .replace(":page", String(page))
    .replace(":limit", String(limit))
    .replace(":search", debouncedSearch)
    .replace(":exam_category", filter.status !== "all" ? filter.status : "");
  const { data } = useApiCall({
    key: url,
    url: url,
    method: "get",
  });
  const pagination = data?.pagination;
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
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => {
              navigate("/exams/addExam");
            }}
            className="bg-[#2BBC7C] cursor-pointer rounded-3xl flex items-center gap-2 text-[14px] text-white px-5 py-2"
          >
            Add Exam
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <small className="text-[14px] text-[#172B4D]">
          <ul className="p-0 flex gap-2">
            {(
              [
                { name: "All", value: "all" },
                { name: "Group 4", value: "group 4" },
                { name: "Group 2A Mains", value: "group 2a mains" },
                { name: "Group 1 Prelims", value: "group 1 prelims" },
              ] as const
            ).map((item) => (
              <li
                key={item.value}
                className={`py-2 px-4 rounded-[12px] text-[12px] cursor-pointer ${
                  filter.status === item.value
                    ? "bg-[#2BBC7C] text-white"
                    : "bg-white"
                }`}
                onClick={() =>
                  setFilter((prev) => ({
                    ...prev,
                    status: item.value,
                  }))
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </small>
        <div className="flex gap-3">
          <SearchBox
            OnChange={(e) =>
              setFilter((prev) => ({ ...prev, search: e.target.value }))
            }
          />
          {/* <div className="flex items-center w-[100%] px-4 text-[#172B4D] h-[40px] bg-white rounded-[14px] border-[0.6px] border-[#DCDFE4] text-sm">
            <MdOutlineSwapVert className="text-[20px]" /> &nbsp; Default (date
            created)
          </div> */}
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
      <Pagination
        page={page}
        limit={limit}
        total={pagination ? pagination.totalPages : 0}
        onPageChange={(p) => setPage(p)}
        onLimitChange={(l) => {
          setLimit(l);
          setPage(1); // reset to 1 when limit changes
        }}
      />{" "}
    </section>
  );
};

export default Exams;
