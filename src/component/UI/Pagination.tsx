import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-end gap-4 mt-6">
      {/* ▼ Limit Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Rows per page:</span>

        <select
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="border px-3 py-1 rounded"
        >
          {[10, 20, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* ▼ Pagination Buttons */}
      <div className="flex items-center gap-2">
        <FaChevronLeft
          className={`rounded-3xl p-1 text-2xl ${
            page !== 1
              ? "bg-green-400 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }  text-white`}
          onClick={() => (page !== 1 ? onPageChange(page - 1) : null)}
        />

        <p className="text-sm text-gray-600">
          Page {page} of {total}
        </p>
        <FaChevronRight
          className={`rounded-3xl p-1 text-2xl ${
            page !== total
              ? "bg-green-400 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }  text-white`}
          onClick={() => (page !== total ? onPageChange(page + 1) : null)}
        />
      </div>
    </div>
  );
};

export default Pagination;
