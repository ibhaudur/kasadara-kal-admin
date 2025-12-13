import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import {
  examFormFields,
  examInitialValues,
  examSchema,
  Referral,
} from "../utils/index.utils";
import CustomInput from "../../../component/Form/CustomInput";

interface ExamFormProps {
  handleSubmit: (
    values: Referral,
    actions: FormikHelpers<Referral>
  ) => void | Promise<void>;
  details?: Referral | null;
  examList: Array<{ exam_id: number; exam_name: string }>;
}

const ReferralForm: React.FC<ExamFormProps> = ({
  handleSubmit,
  details,
  examList,
}) => {
  return (
    <Formik
      initialValues={details ? details : examInitialValues}
      validationSchema={examSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {(formikProps) => <FormFields {...formikProps} examList={examList} />}
    </Formik>
  );
};

const FormFields: React.FC<any> = ({ examList }) => {
  return (
    <Form className="grid grid-cols-12 gap-4">
      {examFormFields.map((field, index) => (
        <div
          key={index}
          className={
            index === examFormFields.length - 1 ? "col-span-12" : "col-span-6"
          }
        >
          <CustomInput
            {...field}
            testId={field.name}
            optionsList={{ exam: examList }}
          />
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
