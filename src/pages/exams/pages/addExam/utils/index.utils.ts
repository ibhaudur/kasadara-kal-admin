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
  start_datetime: "",
  attempt_per_person: "",
  examStartTime: "",
  valid_until: "",
  validityTime: "",
};
export const examSchema = Yup.object().shape({
  exam_name: Yup.string().required("Exam Name is required"),
  status: Yup.string(),
  exam_type: Yup.string(),
  duration: Yup.number().required("Duration is required").positive().integer(),
  attempt_per_person: Yup.number()
    .required("Attempt per person is required")
    .min(0),
  total_marks: Yup.number()
    .required("Total Marks is required")
    .positive()
    .integer(),
  cost: Yup.number().required("Cost is required").min(0),
  discount_cost: Yup.number().required("Discount Cost is required").min(0),
  start_datetime: Yup.date().required("Exam Start Date is required"),
  examStartTime: Yup.string().required("Exam Start Time is required"),
  valid_until: Yup.date().required("Validity Date is required"),
  validityTime: Yup.string().required("Validity Time is required"),
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
    label: "Status",
    name: "status",
    type: "text",
    placeholder: "Enter Status",
    testId: "status-input",
  },
  {
    label: "Exam Type",
    name: "exam_type",
    type: "text",
    placeholder: "Enter Exam Type",
    testId: "exam-type-input",
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
    name: "start_datetime",
    type: "date",
    placeholder: "Select Start Date",
    testId: "start-date-input",
    required: true,
  },
  {
    label: "Exam Start Time",
    name: "examStartTime",
    type: "time",
    placeholder: "Select Start Time",
    testId: "start-time-input",
    required: true,
  },
  {
    label: "Validity Date",
    name: "valid_until",
    type: "date",
    placeholder: "Select Validity Date",
    testId: "validity-date-input",
    required: true,
  },
  {
    label: "Validity Time",
    name: "validityTime",
    type: "time",
    placeholder: "Select Validity Time",
    testId: "validity-time-input",
    required: true,
  },
];
