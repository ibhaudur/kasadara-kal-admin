import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import SearchBox from "../../component/SearchBox";
import CandidateList from "./components/CandidateList";
import useDebounce from "../../hooks/useDebounce";
import { getCandidatesList } from "../../service/apiUrls";
import useApiCall from "../../hooks/useApiCall";
import Pagination from "../../component/UI/Pagination";
import Modal from "../../component/Modal/Modal";
import ReferralForm from "./components/ReferralForm";
import { ExamFormValues } from "./utils/index.utils";
import { FormikHelpers } from "formik";

const Referrals: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
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
    dispatch(changeHeader("Referrals"));
  }, []);
  const handleSubmit = async (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => {
    console.log(values);
    // const data = { examData: values, questions };

    // const bulkData = createBulkData(values, file);

    // mutate(file ? bulkData : data, {
    //   onSuccess: (res: ApiResponse<any>) => {
    //     actions.setSubmitting(false);
    //     toast.success(res?.message);
    //     navigate(-1);
    //   },
    //   onError: (err: ApiError) => {
    //     actions.setSubmitting(false);
    //     toast.error(err.response?.data?.message);
    //   },
    // });
  };
  return (
    <section className="p-4">
      <div className="rounded-2xl bg-white p-3">
        <h5 className="text-[20px] font-semibold">Referrals</h5>
        <small className="text-[#8790A1]">
          All candidate details are listed below. Track their registration,
          payment, and exam progress easily.
        </small>
      </div>
      <div className="flex justify-between items-center mt-5">
        <small className="text-[14px] text-[#172B4D]">
          Total Referrals: {pagination?.totalItems || 0}
        </small>
        <div className="flex gap-3">
          <SearchBox
            OnChange={(e) =>
              setFilter((prev) => ({ ...prev, search: e.target.value }))
            }
          />
          <button
            onClick={() => setOpen(true)}
            className="bg-[#2BBC7C] cursor-pointer rounded-xl flex items-center gap-2 text-nowrap text-[14px] text-white px-5 py-2"
          >
            Add Referrals
          </button>
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Add Referrals">
        <div className="p-4">
          <ReferralForm handleSubmit={handleSubmit} />
        </div>
      </Modal>
      <CandidateList list={[]} />
      {/* <Pagination
        page={page}
        limit={limit}
        total={pagination ? pagination.totalPages : 0}
        onPageChange={(p) => setPage(p)}
        onLimitChange={(l) => {
          setLimit(l);
          setPage(1); // reset to 1 when limit changes
        }}
      /> */}
    </section>
  );
};

export default Referrals;
