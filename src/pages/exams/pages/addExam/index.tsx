import { FaArrowLeft } from "react-icons/fa6";
import Button from "../../../../component/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { FormikHelpers, FormikProps } from "formik";
import { ExamFormValues, QuestionItem } from "../../../../types/pages.types";
import ExamForm from "./component/ExamForm";
import QuestionsForm from "./component/QuestionsForm";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../../../store/slice/headerSlice";
import { toast } from "react-toastify";
import { ApiError, ApiResponse } from "../../../../types/apiservice.types";
import {
  getExamById,
  postAddExam,
  putEditExam,
} from "../../../../service/apiUrls";
import useApiCall from "../../../../hooks/useApiCall";
const initialValues = {
  id: 1,
  mark: "",
  english: {
    question: "",
    options: { A: "", B: "", C: "", D: "" },
    answer: "",
    description: "",
  },
  tamil: {
    question: "",
    options: { A: "", B: "", C: "", D: "" },
    answer: "",
    description: "",
  },
};

const AddExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<QuestionItem[]>([initialValues]);
  const formikRef = useRef<FormikProps<ExamFormValues>>(null);
  const { data } = useApiCall({
    key: `getExamById/${id}`,
    url: `${getExamById}/${id}`,
    method: "get",
    enabled: Boolean(id),
  });
  useEffect(() => {
    dispatch(changeHeader("Exams"));
    setQuestions(data?.questions || [initialValues]);
  }, [dispatch, data]);
  const { mutate } = useApiCall({
    key: id ? `${putEditExam}/${id}` : postAddExam,
    url: id ? `${putEditExam}/${id}` : postAddExam,
    method: id ? "put" : "post",
  });
  const handleSubmit = async (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => {
    const data = { examData: values, questions: questions };
    mutate(data, {
      onSuccess: (res: ApiResponse<any>) => {
        actions.setSubmitting(false);
        console.log(res);
        toast.success(res?.message);
        navigate(-1);
      },
      onError: (err: ApiError) => {
        console.log(err);
        actions.setSubmitting(false);
        toast.error(err.response?.data?.message);
      },
    });
  };
  return (
    <section className="mt-[1px]">
      <div className="bg-white flex justify-between p-3 z-30 sticky top-0">
        <p className="flex items-center gap-3">
          <FaArrowLeft
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          {id ? "Edit Exam" : "New Exam"}
        </p>
        <div className="flex gap-3">
          <Button
            type="outline"
            btnName="Cancel"
            splClass="rounded-[30px] text-[15px] border border-[#D4DDE7] px-3 text-black"
            handler={() => navigate(-1)}
          />
          <Button
            type="outline"
            btnName="Save as draft"
            splClass="rounded-[30px] text-[15px] border border-[#2BBC7C] px-3 text-[#2BBC7C]"
            handler={async () => {
              await formikRef.current?.setFieldValue("status", "draft");
              formikRef.current?.submitForm();
            }}
          />
          <Button
            btnName="Publish"
            splClass="rounded-[30px] text-[15px] px-3"
            handler={async () => {
              await formikRef.current?.setFieldValue("status", "publish");
              formikRef.current?.submitForm();
            }}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="p-4 bg-white rounded-2xl mb-3">
          <ExamForm
            handleSubmit={handleSubmit}
            formikRef={formikRef}
            details={data?.examData}
          />
        </div>
        <div className="p-4 bg-white rounded-2xl">
          <QuestionsForm questions={questions} setQuestions={setQuestions} />
        </div>
      </div>
    </section>
  );
};

export default AddExam;
