import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import SubHeader from "../../component/SubHeader";
import Avt from "../../../public/images/report.png";
import ReportForm from "./components/ReportForm";
const Reports: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Reports"));
  }, []);
  return (
    <section className="p-4">
      <SubHeader
        title="Reports"
        description="All candidate details are listed below. Track their registration,
          payment, and exam progress easily."
      />
      <div className="bg-white rounded-2xl grid grid-cols-6 p-4 mt-3">
        <img src={Avt} className="w-full col-span-6 md:col-span-6 lg:col-span-2" alt="i" />
        <ReportForm />
      </div>
    </section>
  );
};

export default Reports;
