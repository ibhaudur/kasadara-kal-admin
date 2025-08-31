import React from "react";
import {
  Formik,
  Form,
  FormikHelpers,
  FormikProps,
  useFormikContext,
} from "formik";
import {
  examFormFields,
  examInitialValues,
  examSchema,
} from "../utils/index.utils";
import CustomInput from "../../../../../component/Form/CustomInput";
import { ExamFormValues } from "../../../../../types/pages.types";
import { useParams } from "react-router-dom";

interface ExamFormProps {
  handleSubmit: (
    values: ExamFormValues,
    actions: FormikHelpers<ExamFormValues>
  ) => void | Promise<void>;
  formikRef: React.Ref<FormikProps<ExamFormValues>>;
  details: ExamFormValues;
}

const ExamForm: React.FC<ExamFormProps> = ({
  handleSubmit,
  formikRef,
  details,
}) => {
  const { id } = useParams();
  return (
    <>
      <h5 className="text-[20px] font-semibold text-[#21272C]">
        {id ? "Edit" : "Add"} Exam
      </h5>
      <small className="text-[#21272C]">
        Enter below details & questions to {id ? "update" : "create new"} exam
      </small>

      <Formik
        innerRef={formikRef}
        initialValues={id && details ? details : examInitialValues}
        validationSchema={examSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {() => <FormFields />}
      </Formik>
    </>
  );
};

const FormFields: React.FC = () => {
  const { values } = useFormikContext<ExamFormValues>();
  const examType = values.exam_type;

  return (
    <Form className="grid grid-cols-12 gap-4 mt-5">
      {examFormFields.slice(0, 3).map((field, index) => (
        <div
          key={field.name}
          className={index === 0 ? "col-span-6" : "col-span-3"}
        >
          <CustomInput {...field} />
        </div>
      ))}

      <div
        className={`col-span-12 grid ${
          examType === "free" ? "grid-cols-6" : "grid-cols-8"
        } gap-3`}
      >
        {examFormFields.slice(3, 12).map((field) => {
          if (
            examType === "free" &&
            (field.name === "cost" || field.name === "discount_cost")
          ) {
            return null;
          }

          return (
            <div key={field.name}>
              <CustomInput {...field} />
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default ExamForm;
