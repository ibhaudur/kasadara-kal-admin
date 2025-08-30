import * as Yup from "yup";
import { ExamFormValues } from "../../../../../types/pages.types";

export const examInitialValues: ExamFormValues = {
  exam_name: "",
  status: "",
  exam_type: "",
  duration: "",
  total_marks: "",
  cost: "",
  discount_cost: "",
  exam_start_date: "",
  attempt_per_person: "",
  exam_start_time: "",
  exam_validity_date: "",
  exam_validity_time: "",
};
export const examSchema = Yup.object().shape({
  exam_name: Yup.string().required("Exam Name is required"),
  status: Yup.string(),
  exam_type: Yup.string().required("Exam type is required"),
  duration: Yup.number().required("Duration is required").positive().integer(),
  attempt_per_person: Yup.number()
    .required("Attempt per person is required")
    .min(0),
  total_marks: Yup.number()
    .required("Total Marks is required")
    .positive()
    .integer(),
  cost: Yup.number().when("exam_type", {
    is: (val: string) => val !== "free",
    then: (schema) => schema.required("Cost is required").min(0),
    otherwise: (schema) => schema.notRequired(),
  }),
  discount_cost: Yup.number().when("exam_type", {
    is: (val: string) => val !== "free",
    then: (schema) => schema.required("Discount Cost is required").min(0),
    otherwise: (schema) => schema.notRequired(),
  }),

  exam_start_date: Yup.date().required("Exam Start Date is required"),
  exam_start_time: Yup.string().required("Exam Start Time is required"),
  exam_validity_date: Yup.date().required("Validity Date is required"),
  exam_validity_time: Yup.string().required("Validity Time is required"),
});

export const examFormFields = [
  {
    label: "Exam Name",
    name: "exam_name",
    type: "text",
    placeholder: "Enter Exam Name",
    testId: "exam-name-input",
    required: true,
  },
  {
    label: "Exam Type",
    name: "exam_type",
    type: "select",
    placeholder: "Select Exam Type",
    testId: "exam-type-input",
    options: [
      { label: "Paid", value: "paid" },
      { label: "Free", value: "free" },
    ],
    required: true,
  },
  {
    label: "Attempt per person",
    name: "attempt_per_person",
    type: "number",
    placeholder: "Enter count",
    testId: "attempt-input",
    required: true,
  },
  {
    label: "Duration",
    name: "duration",
    type: "number",
    placeholder: "Enter Duration",
    testId: "duration-input",
    required: true,
  },
  {
    label: "Total Marks",
    name: "total_marks",
    type: "number",
    placeholder: "Enter Total Marks",
    testId: "total-marks-input",
    required: true,
  },
  {
    label: "Cost",
    name: "cost",
    type: "number",
    placeholder: "Enter Cost",
    testId: "cost-input",
    required: true,
  },
  {
    label: "Discounted Cost",
    name: "discount_cost",
    type: "number",
    placeholder: "Enter Discounted Cost",
    testId: "discount-cost-input",
    required: true,
  },
  {
    label: "Exam Start Date",
    name: "exam_start_date",
    type: "date",
    placeholder: "Select Start Date",
    testId: "start-date-input",
    required: true,
    dateAttribute: "min",
  },
  {
    label: "Exam Start Time",
    name: "exam_start_time",
    type: "time",
    placeholder: "Select Start Time",
    testId: "start-time-input",
    required: true,
  },
  {
    label: "Validity Date",
    name: "exam_validity_date",
    type: "date",
    placeholder: "Select Validity Date",
    testId: "validity-date-input",
    required: true,
    dateAttribute: "min",
  },
  {
    label: "Validity Time",
    name: "exam_validity_time",
    type: "time",
    placeholder: "Select Validity Time",
    testId: "validity-time-input",
    required: true,
  },
];
