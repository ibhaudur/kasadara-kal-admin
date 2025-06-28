const CandidateList = () => {
  const data = [
    {
      user: "John Doe",
      emailId: "nevaeh.simmons@example.com",
      totalExam: "3",
      date: "2024-07-01",
      rank: "#1",
      amount: "$50",
    },
    {
      user: "John Doe",
      emailId: "nevaeh.simmons@example.com",
      totalExam: "3",
      date: "2024-07-01",
      rank: "#1",
      amount: "$50",
    },
    {
      user: "John Doe",
      emailId: "nevaeh.simmons@example.com",
      totalExam: "3",
      date: "2024-07-01",
      rank: "#1",
      amount: "$50",
    },
    {
      user: "John Doe",
      emailId: "nevaeh.simmons@example.com",
      totalExam: "3",
      date: "2024-07-01",
      rank: "#1",
      amount: "$50",
    },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-[14px] rounded-2xl bg-white text-[#172B4D]">
        <thead>
          <tr>
            {[
              "User",
              "Email",
              "Total Exam",
              "Date of Join",
              "Rank",
              "Amount",
            ].map((item) => (
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
              <td className="px-4 py-2">{row.emailId}</td>
              <td className="px-4 py-2">{row.totalExam}</td>
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2">{row.rank}</td>
              <td className="px-4 py-2">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;
