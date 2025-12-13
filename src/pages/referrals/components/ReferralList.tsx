import React from "react";
import { Referral } from "../utils/index.utils";
import { FaEdit } from "react-icons/fa";

interface CandidateListProps {
  list: Array<Referral>;
  startEdit: (referral: Referral) => void;
}

const ReferralList: React.FC<CandidateListProps> = ({ list, startEdit }) => {
  const data = list || [];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-[14px] rounded-2xl bg-white text-[#172B4D]">
        <thead>
          <tr>
            {["Name", "Email", "Promocode", "Offer Percent", "Exams", ""].map(
              (item) => (
                <th
                  key={item}
                  className="text-left px-4 py-2 border-b border-[#E5E5E5] text-sm font-semibold"
                >
                  {item}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-[#F2FFF7] border-b-[0.5px] border-[#F4F4F4]"
            >
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.email}</td>
              <td className="px-4 py-2">{row.promocode}</td>
              <td className="px-4 py-2">{row.offerPercent}</td>
              <td className="px-4 py-2 text-center">
                {" "}
                {Array.isArray(row.mapped_exams)
                  ? row.mapped_exams.length
                  : JSON.parse(row.mapped_exams || "[]").length}
              </td>
              <td className="px-3">
                <FaEdit
                  className="text-xl cursor-pointer text-gray-500"
                  onClick={() =>
                    startEdit({
                      ...row,
                      mapped_exams: Array.isArray(row.mapped_exams)
                        ? row.mapped_exams
                        : JSON.parse(row.mapped_exams || "[]"),
                    })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralList;
