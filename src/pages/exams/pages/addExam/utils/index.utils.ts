import * as Yup from "yup";
import { ExamFormValues } from "../../../../../types/pages.types";

export const examInitialValues: ExamFormValues = {
  examName: "",
  status: "",
  examType: "",
  duration: "",
  totalMarks: "",
  cost: "",
  discountCost: "",
  examStartDate: "",
  examStartTime: "",
  validityDate: "",
  validityTime: "",
};
export const examSchema = Yup.object().shape({
  examName: Yup.string().required("Exam Name is required"),
  status: Yup.string(),
  examType: Yup.string(),
  duration: Yup.number().required("Duration is required").positive().integer(),
  totalMarks: Yup.number()
    .required("Total Marks is required")
    .positive()
    .integer(),
  cost: Yup.number().required("Cost is required").min(0),
  discountCost: Yup.number().min(0),
  examStartDate: Yup.date().required("Exam Start Date is required"),
  examStartTime: Yup.string().required("Exam Start Time is required"),
  validityDate: Yup.date().required("Validity Date is required"),
  validityTime: Yup.string().required("Validity Time is required"),
});

export const examFormFields = [
  {
    label: "Exam Name",
    name: "examName",
    type: "text",
    placeholder: "Enter Exam Name",
    testId: "exam-name-input",
    required:true
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
    name: "examType",
    type: "text",
    placeholder: "Enter Exam Type",
    testId: "exam-type-input",
  },
  {
    label: "Duration (in minutes)",
    name: "duration",
    type: "number",
    placeholder: "Enter Duration",
    testId: "duration-input",
    required:true
  },
  {
    label: "Total Marks",
    name: "totalMarks",
    type: "number",
    placeholder: "Enter Total Marks",
    testId: "total-marks-input",
    required:true
  },
  {
    label: "Cost",
    name: "cost",
    type: "number",
    placeholder: "Enter Cost",
    testId: "cost-input",
    required:true
  },
  {
    label: "Discounted Cost",
    name: "discountCost",
    type: "number",
    placeholder: "Enter Discounted Cost",
    testId: "discount-cost-input",
    required:true
  },
  {
    label: "Exam Start Date",
    name: "examStartDate",
    type: "date",
    placeholder: "Select Start Date",
    testId: "start-date-input",
    required:true
  },
  {
    label: "Exam Start Time",
    name: "examStartTime",
    type: "time",
    placeholder: "Select Start Time",
    testId: "start-time-input",
    required:true
  },
  {
    label: "Validity Date",
    name: "validityDate",
    type: "date",
    placeholder: "Select Validity Date",
    testId: "validity-date-input",
    required:true
  },
  {
    label: "Validity Time",
    name: "validityTime",
    type: "time",
    placeholder: "Select Validity Time",
    testId: "validity-time-input",
    required:true
  },
];
