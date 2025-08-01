import DoughnutChart from "../../../component/charts/DoughnutChart";
import LineChart from "../../../component/charts/LineChart";
import dots from "../../../../public/images/dots.svg";
import userDevice from "../../../../public/images/userDevice.svg";
import BarChart from "../../../component/charts/BarChart";
import PassRateCircle from "./PassRateCircle";
const Overview = () => {
  return (
    <div className="mt-3 grid grid-cols-6 gap-3">
      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-2 ">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Exam overview
        </h3>
        <DoughnutChart />
      </div>
      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-2 ">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Quick Tests Overview
        </h3>
        <DoughnutChart />
      </div>
      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-2 ">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Mock Test Overview{" "}
        </h3>
        <DoughnutChart />
      </div>
      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-3">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Payment Overview
        </h3>
        <div className="flex gap-3 mb-4">
          <img src={dots} alt="i" />
          <div>
            <p className="text-sm text-[#8790A1] mb-0">Total Amount</p>
            <p className="text-[20px] font-medium text-[#21272C]">$63,489.50</p>
          </div>
        </div>
        <LineChart />
      </div>
      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-3">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Candidates Overview
        </h3>
        <div className="flex gap-3 mb-4">
          <img src={dots} alt="i" />
          <div>
            <p className="text-sm text-[#8790A1] mb-0">Total candidates</p>
            <p className="text-[20px] font-medium text-[#21272C]">489</p>
          </div>
        </div>
        <LineChart />
      </div>
      <div className="bg-white flex justify-between p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-3">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-[16px] font-semibold text-gray-800 mb-0">
              Pass rate
            </h3>
            <small className="text-[#626F86]">
              Comparing with overall candidates in main exams
            </small>
          </div>
          <div className="bg-[#E5FFF0] rounded-[20px] flex p-1 gap-2 mb-2">
            <img src={userDevice} alt="i" />
            <small className="text-xs">
              <b>78%</b> increased from last month. <b>234</b> candidates
              increased as passed candidates
            </small>
          </div>
        </div>
        <PassRateCircle percentage={75} />
      </div>
      <div className="bg-white p-4 rounded-xl shadow w-full md:col-span-2 lg:col-span-3">
        <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
          Monthly Exam Attendance
        </h3>
        <BarChart />
      </div>
    </div>
  );
};

export default Overview;
