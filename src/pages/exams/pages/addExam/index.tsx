import { FaArrowLeft } from "react-icons/fa6";
import Button from "../../../../component/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { FormikHelpers } from "formik";
import { ExamFormValues } from "../../../../types/pages.types";
import ExamForm from "./component/ExamForm";
import QuestionsForm from "./component/QuestionsForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../../../store/slice/headerSlice";

const AddExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeader("Exams"));
  }, [dispatch]);

  const handleSubmit = async (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => {
    console.log(values, actions);
  };
  return (
    <section>
      <div className="bg-white flex justify-between p-3">
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
          />
          <Button
            type="outline"
            btnName="Save as draft"
            splClass="rounded-[30px] text-[15px] border border-[#2BBC7C] px-3 text-[#2BBC7C]"
          />
          <Button
            btnName="Publish"
            splClass="rounded-[30px] text-[15px] px-3"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="p-4 bg-white rounded-2xl mb-3">
          <ExamForm handleSubmit={handleSubmit} />
        </div>
        <div className="p-4 bg-white rounded-2xl">
          <QuestionsForm />
        </div>
      </div>
    </section>
  );
};

export default AddExam;
