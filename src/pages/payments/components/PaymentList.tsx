import React from "react";

const PaymentList = () => {
  const data = [
    {
      user: "John Doe",
      exam: "Math Test",
      date: "2024-07-01",
      type: "Credit Card",
      amount: "$50",
    },
    {
      user: "Jane Smith",
      exam: "Science Quiz",
      date: "2024-07-03",
      type: "PayPal",
      amount: "$40",
    },
    {
      user: "Bob Johnson",
      exam: "History Exam",
      date: "2024-07-05",
      type: "Debit Card",
      amount: "$60",
    },
    {
      user: "Alice Brown",
      exam: "English Test",
      date: "2024-07-07",
      type: "Stripe",
      amount: "$55",
    },
    {
      user: "Charlie White",
      exam: "Physics Test",
      date: "2024-07-10",
      type: "Credit Card",
      amount: "$45",
    },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-[14px] rounded-2xl bg-white text-[#172B4D]">
        <thead>
          <tr>
            {["User", "Exam", "Date", "Payment Type", "Amount"].map((item) => (
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
              <td className="px-4 py-2">{row.user}</td>
              <td className="px-4 py-2">{row.exam}</td>
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2">{row.type}</td>
              <td className="px-4 py-2">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
