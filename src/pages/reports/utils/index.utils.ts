import * as Yup from "yup";

export const reportsInitialValues = {
  users: "",
  exam: "",
  transactions: "",
  date_range: "",
  rank: "",
};
export const reportSchema = Yup.object().shape({
  users: Yup.string().required("Users is required"),
  exam: Yup.string().required("Exam is required"),
  transactions: Yup.string().required("Transactions is required"),
  date_range: Yup.string().required("Date Range is required"),
  rank: Yup.string().required("Rank is required"),
});
export const ReportFormFields = [
  {
    label: "Users",
    name: "users",
    type: "select",
    placeholder: "Select Users",
    testId: "users-input",
    options: [
      { label: "Paid", value: "paid" },
      { label: "Free", value: "free" },
    ],
    required: true,
  },
  {
    label: "Exam",
    name: "exam",
    type: "select",
    placeholder: "Select Exam",
    testId: "exam-input",
    options: [
      { label: "Paid", value: "paid" },
      { label: "Free", value: "free" },
    ],
    required: true,
  },
  {
    label: "Transcations",
    name: "transactions",
    type: "select",
    placeholder: "Select Transactions",
    testId: "transactions-input",
    options: [
      { label: "Paid", value: "paid" },
      { label: "Free", value: "free" },
    ],
    required: true,
  },
  {
    label: "Date Range",
    name: "date_range",
    type: "date-range",
    testId: "date-range-input",
    required: true,
  },
  {
    label: "Rank",
    name: "rank",
    type: "select",
    placeholder: "Select Rank",
    testId: "rank-input",
    options: [
      { label: "Paid", value: "paid" },
      { label: "Free", value: "free" },
    ],
    required: true,
  },
];
