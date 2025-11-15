import React from "react";
interface PaymentListProps {
  list: Array<{
    amount: string;
    date: string;
    exam_id: number;
    examname: string;
    payment_id: string;
    payment_status: "completed" | "pending" | "failed";
    username: string;
  }>;
}
const PaymentList: React.FC<PaymentListProps> = ({ list }) => {
  const data = list || [];
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-[14px] rounded-2xl bg-white text-[#172B4D]">
        <thead>
          <tr>
            {["User", "Exam", "Date", "Status", "Amount"].map((item) => (
              <th
                key={item}
                className="text-left px-4 py-2 border-b border-[#E5E5E5] text-sm font-semibold"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-[#F2FFF7] border-b-[0.5px] border-[#F4F4F4]"
            >
              <td className="px-4 py-2">{row.username}</td>
              <td className="px-4 py-2">{row.examname}</td>
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-3 py-1 rounded-full text-white text-[12px] font-medium ${
                    row.payment_status === "completed"
                      ? "bg-green-500"
                      : row.payment_status === "pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }
                  `}
                >
                  {row.payment_status.charAt(0).toUpperCase() +
                    row.payment_status.slice(1)}
                </span>
              </td>
              <td className="px-4 py-2">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
