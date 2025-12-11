import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import {
  examFormFields,
  ExamFormValues,
  examInitialValues,
  examSchema,
} from "../utils/index.utils";
import { useParams } from "react-router-dom";
import CustomInput from "../../../component/Form/CustomInput";

interface ExamFormProps {
  handleSubmit: (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => void | Promise<void>;
  details?: ExamFormValues;
}

const ReferralForm: React.FC<ExamFormProps> = ({ handleSubmit, details }) => {
  const { id } = useParams();
  return (
    <Formik
      initialValues={id && details ? details : examInitialValues}
      validationSchema={examSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {(formikProps) => <FormFields {...formikProps} />}
    </Formik>
  );
};

const FormFields: React.FC<any> = () => {
  return (
    <Form className="grid grid-cols-12 gap-4">
      {examFormFields.map((field, index) => (
        <div
          key={index}
          className={
            index === examFormFields.length - 1 ? "col-span-12" : "col-span-6"
          }
        >
          <CustomInput {...field} testId={field.name} />
        </div>
      ))}

      <div className="col-span-12 flex justify-end mt-4">
        <button
          type="submit"
          className="bg-[#2BBC7C] cursor-pointer rounded-xl flex items-center gap-2 text-nowrap text-[14px] text-white px-5 py-2"
          data-testid="submit-btn"
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default ReferralForm;
