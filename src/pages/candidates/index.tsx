import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import SearchBox from "../../component/SearchBox";
import CandidateList from "./components/CandidateList";
import useDebounce from "../../hooks/useDebounce";
import { getCandidatesList } from "../../service/apiUrls";
import useApiCall from "../../hooks/useApiCall";
import Pagination from "../../component/UI/Pagination";

const Candidates: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState({ search: "" });
  const debouncedSearch = useDebounce(filter.search, 500);
  const url = getCandidatesList
    .replace(":page", String(page))
    .replace(":limit", String(limit))
    .replace(":search", debouncedSearch);
  const { data } = useApiCall({
    key: url,
    url: url,
    method: "get",
  });
  const pagination = data?.data?.pagination;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Candidates"));
  }, []);
  return (
    <section className="p-4">
      <div className="rounded-[16px] bg-white p-3">
        <h5 className="text-[20px] font-semibold">Candidates</h5>
        <small className="text-[#8790A1]">
          All candidate details are listed below. Track their registration,
          payment, and exam progress easily.
        </small>
      </div>
      <div className="flex justify-between items-center mt-5">
        <small className="text-[14px] text-[#172B4D]">
          Total Candidates: {pagination?.totalItems || 0}
        </small>
        <div className="flex gap-3">
          <SearchBox
            OnChange={(e) =>
              setFilter((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>
      </div>
      <CandidateList list={data?.data?.candidates} />
      <Pagination
        page={page}
        limit={limit}
        total={pagination ? pagination.totalPages : 0}
        onPageChange={(p) => setPage(p)}
        onLimitChange={(l) => {
          setLimit(l);
          setPage(1); // reset to 1 when limit changes
        }}
      />
    </section>
  );
};

export default Candidates;
