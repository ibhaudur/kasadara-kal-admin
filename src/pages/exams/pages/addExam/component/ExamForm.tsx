import React from "react";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import {
  examFormFields,
  examInitialValues,
  examSchema,
} from "../utils/index.utils";
import CustomInput from "../../../../../component/Form/CustomInput";
import { ExamFormValues } from "../../../../../types/pages.types";

interface ExamFormProps {
  handleSubmit: (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => void | Promise<void>;
  formikRef: React.Ref<FormikProps<ExamFormValues>>;
}

const ExamForm: React.FC<ExamFormProps> = ({ handleSubmit, formikRef }) => {
  return (
    <React.Fragment>
      <h5 className="text-[20px] font-semibold text-[#21272C]">Add Exam</h5>
      <small className="text-[#21272C]">
        Enter below details & questions to create new exam
      </small>

      <Formik
        innerRef={formikRef}
        initialValues={examInitialValues}
        validationSchema={examSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="grid grid-cols-12 gap-4 mt-5">
            {examFormFields.slice(0, 4).map((field, index) => (
              <div
                key={index}
                className={index === 0 ? "col-span-6" : "col-span-2"}
              >
                <CustomInput {...field} />
              </div>
            ))}
            <div className="col-span-12 grid grid-cols-8 gap-3">
              {examFormFields.slice(4, 12).map((field, index) => (
                <div key={index}>
                  <CustomInput {...field} />
                </div>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default ExamForm;
