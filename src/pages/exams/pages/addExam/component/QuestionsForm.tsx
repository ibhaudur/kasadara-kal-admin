import React from "react";
import Button from "../../../../../component/UI/Button";
import { PiUploadSimpleBold } from "react-icons/pi";
import CreateQuestions from "./CreateQuestions";

const QuestionsForm = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <h5 className="text-[20px] font-semibold text-[#21272C]">Questions</h5>
        <Button
          type="outline"
          btnName={
            <span className="flex items-center gap-2">
              <PiUploadSimpleBold /> Excel Upload
            </span>
          }
          splClass="rounded text-[12px] border border-[#2BBC7C] px-3 text-[#2BBC7C]"
        />
      </div>
      <CreateQuestions />
    </React.Fragment>
  );
};

export default QuestionsForm;
