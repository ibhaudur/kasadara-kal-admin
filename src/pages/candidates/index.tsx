import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import SearchBox from "../../component/SearchBox";
import { MdOutlineSwapVert } from "react-icons/md";
import CandidateList from "./components/CandidateList";

const Candidates: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Candidates"));
  }, []);
  return (
    <section className="p-4">
      <div className="rounded-[16px] bg-white p-3">
        <h5 className="text-[20px] font-semibold">Candidates</h5>
        <small className="text-[#8790A1]">
          All candidate details are listed below. Track their registration,
          payment, and exam progress easily.
        </small>
      </div>
      <div className="flex justify-between items-center mt-5">
        <small className="text-[14px] text-[#172B4D]">
          Total Candidates: 400
        </small>
        <div className="flex gap-3">
          <SearchBox />
          <div className="flex items-center w-[100%] px-4 text-[#172B4D] h-[40px] bg-white rounded-[14px] border-[0.6px] border-[#DCDFE4] text-sm">
            <MdOutlineSwapVert className="text-[20px]" /> &nbsp; Default (date
            created)
          </div>
        </div>
      </div>
      <CandidateList />
    </section>
  );
};

export default Candidates;
