import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import {
  examFormFields,
  examInitialValues,
  examSchema,
} from "../utils/index.utils";
import CustomInput from "../../../../../component/Form/CustomInput";
import Button from "../../../../../component/UI/Button";
import { ExamFormValues } from "../../../../../types/pages.types";

interface ExamFormProps {
  handleSubmit: (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => void | Promise<void>;
}

const ExamForm: React.FC<ExamFormProps> = ({ handleSubmit }) => {
  return (
    <React.Fragment>
      <h5 className="text-[20px] font-semibold text-[#21272C]">Add Exam</h5>
      <small className="text-[#21272C]">
        Enter below details & questions to create new exam
      </small>

      <Formik
        initialValues={examInitialValues}
        validationSchema={examSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-2 gap-3 mt-5">
            {examFormFields.map((field, index) => {
              if (field.name === "examName") {
                return (
                  <div className="col-span-2">
                    <CustomInput key={index} {...field} />
                  </div>
                );
              }
              return (
                <div className="">
                  <CustomInput key={index} {...field} />
                </div>
              );
            })}
            <Button
              splClass="w-full col-span-2 py-2 mt-4 rounded-[30px] transition-colors duration-300 text-white font-medium"
              btnName={isSubmitting ? "Saving..." : "Save"}
            />
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default ExamForm;
