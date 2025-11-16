import React, { useState } from "react";
import Button from "../../../../../component/UI/Button";
import { PiUploadSimpleBold } from "react-icons/pi";
import CreateQuestions from "./CreateQuestions";
import { QuestionsStateProps } from "../../../../../types/pages.types";
import Modal from "../../../../../component/Modal/Modal";
import { FiDownload } from "react-icons/fi";

const QuestionsForm: React.FC<QuestionsStateProps> = ({
  questions,
  setQuestions,
  setFile,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Bulk Upload"
      >
        <div className="flex justify-end">
          <a
            href="/sample_exam_questions.xlsx"
            download="sample_exam_questions.xlsx"
            className="px-2 flex gap-2 items-center py-2 border border-[#3ac185] rounded-md text-[#3ac185] text-xs"
          >
            <FiDownload className="text-base" />
            Download Sample
          </a>
        </div>
        <div className="min-w-3xs">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload File
          </label>

          <input
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              } else {
                setFile(null);
              }
            }}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer
              bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2BBC7C]
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-[#2BBC7C] file:text-white
              hover:file:bg-[#0c7e4d]"
          />

          <div className="flex gap-4">
            <Button
              splClass="py-2 flex-grow-1 mt-4 bg-white rounded-[30px] transition-colors duration-300 text-black border-[#E5E5E5] font-medium"
              btnName="Cancel"
              type="outline"
              handler={() => setIsOpen(false)}
            />
            <Button
              splClass="py-2 flex-grow-1 mt-4 rounded-[30px] transition-colors duration-300 text-white font-medium"
              btnName="Submit"
              handler={() => setIsOpen(false)}
            />
          </div>
        </div>
      </Modal>

      <div className="flex justify-between">
        <h5 className="text-[20px] font-semibold text-[#21272C]">Questions</h5>
        <Button
          type="outline"
          handler={() => setIsOpen(true)}
          btnName={
            <span className="flex items-center gap-2">
              <PiUploadSimpleBold /> Excel Upload
            </span>
          }
          splClass="rounded text-[12px] border border-[#2BBC7C] px-3 text-[#2BBC7C]"
        />
      </div>

      <CreateQuestions questions={questions} setQuestions={setQuestions} />
    </React.Fragment>
  );
};

export default QuestionsForm;
