import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../store/slice/headerSlice";
import SearchBox from "../../component/SearchBox";
import ReferralList from "./components/ReferralList";
import useDebounce from "../../hooks/useDebounce";
import {
  getExamsList,
  getReferralsList,
  postAddReferral,
  updateReferralById,
} from "../../service/apiUrls";
import useApiCall from "../../hooks/useApiCall";
import Pagination from "../../component/UI/Pagination";
import Modal from "../../component/Modal/Modal";
import ReferralForm from "./components/ReferralForm";
import { Referral } from "./utils/index.utils";
import { FormikHelpers } from "formik";
import { ApiError, ApiResponse } from "../../types/apiservice.types";
import { toast } from "react-toastify";

const Referrals: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<Referral | null>(null);
  const [filter, setFilter] = useState({ search: "" });
  const debouncedSearch = useDebounce(filter.search, 500);
  const url = getReferralsList
    .replace(":page", String(page))
    .replace(":limit", String(limit))
    .replace(":search", debouncedSearch);
  const { data, refetch } = useApiCall({
    key: url,
    url: url,
    method: "get",
  });
  const { data: ExamsList } = useApiCall({
    key: getExamsList,
    url: getExamsList,
    method: "get",
  });
  const pagination = data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Referrals"));
  }, []);
  const Mutateurl = details
    ? updateReferralById.replace(":id", String(details.id))
    : postAddReferral;
  const { mutate } = useApiCall({
    key: Mutateurl,
    url: Mutateurl,
    method: details ? "put" : "post",
  });

  const handleSubmit = async (
    values: Referral,
    actions: FormikHelpers<Referral>
  ) => {
    mutate(values, {
      onSuccess: (res: ApiResponse<any>) => {
        actions.setSubmitting(false);
        toast.success(res?.message);
        refetch();

        setOpen(false);
      },
      onError: (err: ApiError) => {
        actions.setSubmitting(false);
        toast.error(err.response?.data?.message);
      },
    });
  };
  const startEdit = (referral: Referral) => {
    setDetails(referral);
    setOpen(true);
  };
  const cancelEdit = () => {
    setDetails(null);
    setOpen(false);
  };
  return (
    <section className="p-4">
      <div className="rounded-2xl bg-white p-3">
        <h5 className="text-[20px] font-semibold">Referrals</h5>
        <small className="text-[#8790A1]">
          All referrals details are listed below. Track their promocodes, offer
          Percentage, and exam easily.
        </small>
      </div>
      <div className="flex justify-end items-center mt-5">
        {/* <small className="text-[14px] text-[#172B4D]">
          Total Referrals: {pagination?.totalItems || 0}
        </small> */}
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
      <Modal
        isOpen={open}
        onClose={cancelEdit}
        title={details ? "Edit Referrals" : "Add Referrals"}
      >
        <div className="p-4">
          <ReferralForm
            handleSubmit={handleSubmit}
            details={details}
            examList={ExamsList?.data || []}
          />
        </div>
      </Modal>
      <ReferralList list={data?.data || []} startEdit={startEdit} />
      <Pagination
        page={page}
        limit={limit}
        total={pagination ? pagination.totalPages : 0}
        onPageChange={(p) => setPage(p)}
        onLimitChange={(l) => {
          setLimit(l);
          setPage(1);
        }}
      />
    </section>
  );
};

export default Referrals;
