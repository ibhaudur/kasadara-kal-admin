import { Form, Formik } from "formik";
import {
  ReportFormFields,
  reportSchema,
  reportsInitialValues,
} from "../utils/index.utils";
import CustomInput from "../../../component/Form/CustomInput";
import Button from "../../../component/UI/Button";

const ReportForm = () => {
  const handleSubmit = () => {
    console.log("ss");
  };
  return (
    <div className="bg-[#F7F7F7] p-4 col-span-6 md:col-span-6 lg:col-span-4 rounded-2xl">
      <Formik
        initialValues={reportsInitialValues}
        validationSchema={reportSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-2 gap-3">
            {ReportFormFields.map((field, index) => (
              <div className="col-span-1">
                <CustomInput key={index} {...field} />
              </div>
            ))}
            <div className="flex gap-4">
              <Button
                splClass="py-2 flex-grow-1 mt-4 bg-white rounded-[30px] transition-colors duration-300 text-black border-[#E5E5E5] font-medium"
                btnName="Reset"
                type="outline"
              />
              <Button
                splClass="py-2 flex-grow-1 mt-4 rounded-[30px] transition-colors duration-300 text-white font-medium"
                btnName={isSubmitting ? "Exporting..." : "Export"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReportForm;
