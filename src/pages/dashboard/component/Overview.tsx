import DoughnutChart from "../../../component/charts/DoughnutChart";
import LineChart from "../../../component/charts/LineChart";
import dots from "../../../../public/images/dots.svg";
import userDevice from "../../../../public/images/userDevice.svg";
import BarChart from "../../../component/charts/BarChart";
import PassRateCircle from "./PassRateCircle";
import { extractChartData, getStatusArray } from "../../../utils/index.utils";
import { OverviewProps } from "../../../types/pages.types";

const Overview: React.FC<OverviewProps> = ({ data }) => {
  const group4Status = getStatusArray(
    data?.category_status_overview?.group_4 || {}
  );
  const group2AStatus = getStatusArray(
    data?.category_status_overview?.group_2a_mains || {}
  );
  const groupPrelimsStatus = getStatusArray(
    data?.category_status_overview?.group_1_prelims || {}
  );

  const { labels: paymentLabels, values: paymentValues } = extractChartData(
    data?.payment_overview_monthly || [],
    "month",
    "total_payments"
  );

  const { labels: candidateLabels, values: candidateValues } = extractChartData(
    data?.candidate_overview_monthly || [],
    "month",
    "new_candidates"
  );

  const { labels: attendanceLabels, values: attendanceValues } =
    extractChartData(
      data?.monthly_exam_attendance || [],
      "month",
      "attendance_count"
    );

  return (
    <div className="mt-3 grid grid-cols-6 gap-3">
      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-2">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Group 4 overview
        </h3>
        <DoughnutChart value={group4Status} />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-2">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Group 2A Mains Overview
        </h3>
        <DoughnutChart value={group2AStatus} />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-2 lg:col-span-2">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Group 1 Prelims Overview
        </h3>
        <DoughnutChart value={groupPrelimsStatus} />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-3 lg:col-span-3">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Payment Overview
        </h3>
        <div className="flex gap-3 mb-4">
          <img src={dots} alt="i" />
          <div>
            <p className="text-sm text-[#8790A1] mb-0">Total Amount</p>
            <p className="text-[20px] font-semibold text-[#21272C]">
              ₹{data?.total_payments || 0}
            </p>
          </div>
        </div>
        <LineChart
          labels={paymentLabels}
          values={paymentValues}
          chartLabel="Payments"
        />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow w-full md:col-span-3 lg:col-span-3">
        <h3 className="text-[20px] font-medium text-[#21272C] mb-3">
          Candidates Overview
        </h3>
        <div className="flex gap-3 mb-4">
          <img src={dots} alt="i" />
          <div>
            <p className="text-sm text-[#8790A1] mb-0">Total candidates</p>
            <p className="text-[20px] font-semibold text-[#21272C]">
              {data?.total_registered_candidates || 0}
            </p>
          </div>
        </div>
        <LineChart
          labels={candidateLabels}
          values={candidateValues}
          chartLabel="Candidates"
        />
      </div>

      <div className="bg-white flex justify-between p-4 rounded-2xl shadow w-full md:col-span-3 lg:col-span-3">
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

      <div className="bg-white p-4 rounded-xl shadow w-full md:col-span-3 lg:col-span-3">
        <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
          Monthly Exam Attendance
        </h3>
        <BarChart labels={attendanceLabels} values={attendanceValues} />
      </div>
    </div>
  );
};

export default Overview;
