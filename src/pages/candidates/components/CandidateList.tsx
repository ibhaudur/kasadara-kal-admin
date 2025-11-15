import React from "react";

interface CandidateListProps {
  list: Array<{
    user_id: number;
    username: string;
    email: string;
    total_attended_exams: number;
    date_of_join: string;
  }>;
}

const CandidateList: React.FC<CandidateListProps> = ({ list }) => {
  const data = list || [];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-[14px] rounded-2xl bg-white text-[#172B4D]">
        <thead>
          <tr>
            {["User", "Email", "Total Exam", "Date of Join"].map((item) => (
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
              <td className="px-4 py-2">{row.email}</td>
              <td className="px-4 py-2">{row.total_attended_exams}</td>
              <td className="px-4 py-2">{row.date_of_join}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;
