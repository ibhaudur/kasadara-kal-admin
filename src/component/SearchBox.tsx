import React from "react";
import { FiSearch } from "react-icons/fi";
interface SearchBoxProps {
  OnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({ OnChange }) => {
  return (
    <div className="relative w-full">
      <FiSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        onChange={OnChange}
        placeholder="Search..."
        className="w-full h-[40px] bg-white pl-10 pr-4 rounded-[14px] border-[0.6px] border-[#DCDFE4] text-sm focus:outline-none focus:ring-2 focus:ring-[#2BBC7C]"
      />
    </div>
  );
};

export default SearchBox;
