import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeader } from "../../../../store/slice/headerSlice";
import ToatalQestions from "./component/ToatalQestions";
import { QuestionItem } from "../../../../types/pages.types";
import QuestionsList from "./component/QuestionsList";
import Header from "./component/Header";
import { useParams } from "react-router-dom";
import useApiCall from "../../../../hooks/useApiCall";
import { getExamById } from "../../../../service/apiUrls";

const ViewExam = () => {
  const { id } = useParams();
  const [select, setSelect] = useState<number>(1);
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const dispatch = useDispatch();
  const { data } = useApiCall({
    key: `getExamById/${id}`,
    url: `${getExamById}/${id}`,
    method: "get",
  });
  useEffect(() => {
    dispatch(changeHeader("Exams"));
    setQuestions(data?.questions);
  }, [dispatch, data]);
  return (
    <section className="mt-[1px]">
      <Header data={data?.examData} id={id || "0"} />
      <div className="p-4 flex gap-3">
        <ToatalQestions
          questions={questions}
          select={select}
          setSelect={setSelect}
        />
        <div className="bg-white p-4 flex-grow rounded-3xl">
          <QuestionsList select={select} questions={questions} />
        </div>
      </div>
    </section>
  );
};

export default ViewExam;
