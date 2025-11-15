import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import PaymentList from "./components/PaymentList";
import SearchBox from "../../component/SearchBox";
import SubHeader from "../../component/SubHeader";
import useApiCall from "../../hooks/useApiCall";
import { getPaymenrtDetails } from "../../service/apiUrls";
import Pagination from "../../component/UI/Pagination";
import useDebounce from "../../hooks/useDebounce";

const Payments: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState({ search: "", status: "all" });
  const debouncedSearch = useDebounce(filter.search, 500);
  const url = getPaymenrtDetails
    .replace(":page", String(page))
    .replace(":limit", String(limit))
    .replace(":search", debouncedSearch)
    .replace(":status", filter.status !== "all" ? filter.status : "");
  const { data } = useApiCall({
    key: url,
    url: url,
    method: "get",
  });
  const pagination = data?.data?.pagination;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Payments"));
  }, []);
  return (
    <section className="p-4">
      <SubHeader
        title="Payments"
        description="Payment received successfully. The student’s registration has been
          confirmed and recorded in the system"
      />
      <p className="text-[14px] mt-3 text-[#172B4D]">
        Total Payments: {pagination?.totalItems || 0}
      </p>
      <div className="flex justify-between items-center mt-2">
        <small className="text-[14px] text-[#172B4D]">
          <ul className="p-0 flex gap-2">
            {(["All", "Completed", "Pending", "Failed"] as const).map(
              (item) => (
                <li
                  key={item}
                  className={`py-2 px-4 rounded-[12px] text-[12px] cursor-pointer ${
                    filter.status ===
                    item.charAt(0).toLowerCase() + item.slice(1)
                      ? "bg-[#2BBC7C] text-white"
                      : "bg-white"
                  }`}
                  onClick={() =>
                    setFilter((prev) => ({
                      ...prev,
                      status: item.charAt(0).toLowerCase() + item.slice(1),
                    }))
                  }
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </small>
        <div className="flex gap-3">
          <SearchBox
            OnChange={(e) =>
              setFilter((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>
      </div>
      <PaymentList list={data?.data?.payments} />
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

export default Payments;
