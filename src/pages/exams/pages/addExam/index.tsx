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
import { postAddExam } from "../../../../service/apiUrls";
import useApiCall from "../../../../hooks/useApiCall";

const AddExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<QuestionItem[]>([
    {
      id: 1,
      mark: "2",
      english: {
        question: "What is the capital of France?",
        options: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" },
        answer: "C",
        description: "Paris is the capital and most populous city of France.",
      },
      tamil: {
        question: "பிரான்ஸின் தலைநகர் எது?",
        options: { A: "பெர்லின்", B: "மாட்ரிட்", C: "பாரிஸ்", D: "ரோம்" },
        answer: "C",
        description: "பாரிஸ் பிரான்ஸின் தலைநகராகும்.",
      },
    },
    {
      id: 2,
      mark: "5",
      english: {
        question: "Which planet is known as the Red Planet?",
        options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Saturn" },
        answer: "B",
        description:
          "Mars is often called the Red Planet due to its reddish appearance.",
      },
      tamil: {
        question: "சிவப்புப் கோளாக அழைக்கப்படும் கிரகம் எது?",
        options: { A: "பூமி", B: "செவ்வாய்", C: "வியாழன்", D: "சனி" },
        answer: "B",
        description:
          "செவ்வாய் அதன் சிவப்பு நிறம் காரணமாக சிவப்புக் கோளாக அழைக்கப்படுகிறது.",
      },
    },
    {
      id: 3,
      mark: "2",
      english: {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: {
          A: "William Shakespeare",
          B: "Charles Dickens",
          C: "Leo Tolstoy",
          D: "Mark Twain",
        },
        answer: "A",
        description: "William Shakespeare wrote 'Romeo and Juliet'.",
      },
      tamil: {
        question: "'ரோமியோ மற்றும் ஜூலியட்' என்ற நாடகத்தை யார் எழுதியார்?",
        options: {
          A: "வில்லியம் ஷேக்ஸ்பியர்",
          B: "சார்ல்ஸ் டிக்கன்ஸ்",
          C: "லியோ டால்ஸ்டாய்",
          D: "மார்க் டுவைன்",
        },
        answer: "A",
        description:
          "'ரோமியோ மற்றும் ஜூலியட்' என்ற நாடகத்தை வில்லியம் ஷேக்ஸ்பியர் எழுதியுள்ளார்.",
      },
    },
    {
      id: 4,
      mark: "4",
      english: {
        question: "Which gas do plants absorb from the atmosphere?",
        options: {
          A: "Oxygen",
          B: "Nitrogen",
          C: "Carbon Dioxide",
          D: "Helium",
        },
        answer: "C",
        description: "Plants absorb carbon dioxide for photosynthesis.",
      },
      tamil: {
        question: "சூழலிலிருந்து தாவரங்கள் எந்த வாயுவை உறிஞ்சுகின்றன?",
        options: {
          A: "ஆக்ஸிஜன்",
          B: "நைட்ரஜன்",
          C: "கார்பன் டையாக்சைடு",
          D: "ஹீலியம்",
        },
        answer: "C",
        description:
          "தாவரங்கள் புகையொளிச்சேர்க்கைக்காக கார்பன் டையாக்சைடை உறிஞ்சுகின்றன.",
      },
    },
    {
      id: 5,
      mark: "2",
      english: {
        question: "What is H2O commonly known as?",
        options: { A: "Salt", B: "Water", C: "Sugar", D: "Oxygen" },
        answer: "B",
        description: "H2O is the chemical formula for water.",
      },
      tamil: {
        question: "H2O பொதுவாக எதை குறிக்கிறது?",
        options: { A: "உப்பு", B: "தண்ணீர்", C: "சர்க்கரை", D: "ஆக்ஸிஜன்" },
        answer: "B",
        description: "H2O என்பது தண்ணீரின் இரசாயன சூத்திரம்.",
      },
    },
  ]);
  const formikRef = useRef<FormikProps<ExamFormValues>>(null);

  useEffect(() => {
    dispatch(changeHeader("Exams"));
  }, [dispatch]);
  const { mutate } = useApiCall({
    key: postAddExam,
    url: postAddExam,
    method: "post",
  });
  const handleSubmit = async (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => {
    const data = { examData: values, questions: questions };
    console.log(data);
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
          />
          <Button
            type="outline"
            btnName="Save as draft"
            splClass="rounded-[30px] text-[15px] border border-[#2BBC7C] px-3 text-[#2BBC7C]"
          />
          <Button
            btnName="Publish"
            splClass="rounded-[30px] text-[15px] px-3"
            handler={() => formikRef.current?.handleSubmit()}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="p-4 bg-white rounded-2xl mb-3">
          <ExamForm handleSubmit={handleSubmit} formikRef={formikRef} />
        </div>
        <div className="p-4 bg-white rounded-2xl">
          <QuestionsForm questions={questions} setQuestions={setQuestions} />
        </div>
      </div>
    </section>
  );
};

export default AddExam;
