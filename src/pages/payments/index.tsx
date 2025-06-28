import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import PaymentList from "./components/PaymentList";
import SearchBox from "../../component/SearchBox";
import { MdOutlineSwapVert } from "react-icons/md";

const Payments: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Payments"));
  }, []);
  return (
    <section className="p-4">
      <div className="rounded-[16px] bg-white p-3">
        <h5 className="text-[20px] font-semibold">Payments</h5>
        <small className="text-[#8790A1]">
          Payment received successfully. The student’s registration has been
          confirmed and recorded in the system{" "}
        </small>
      </div>
      <div className="flex justify-between items-center mt-5">
        <small className="text-[14px] text-[#172B4D]">Total Exams: 400</small>
        <div className="flex gap-3">
          <SearchBox />
          <div className="flex items-center w-[100%] px-4 text-[#172B4D] h-[40px] bg-white rounded-[14px] border-[0.6px] border-[#DCDFE4] text-sm">
            <MdOutlineSwapVert className="text-[20px]" /> &nbsp; Default (date created)
          </div>
        </div>
      </div>
      <PaymentList />
    </section>
  );
};

export default Payments;
