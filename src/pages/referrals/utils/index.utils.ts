import * as Yup from "yup";
export interface ExamFormValues {
  name: string;
  email: string;
  promocode: string;
  mappedExams: { label: string; value: string }[];
  offerPercent: string;
}

export const examInitialValues: ExamFormValues = {
  name: "",
  email: "",
  promocode: "",
  mappedExams: [],
  offerPercent: "",
};
export const examSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  promocode: Yup.string().required("Promo Code is required"),
  mappedExams: Yup.array()
    .of(Yup.string().required())
    .min(1, "Select at least one exam")
    .required("Mapped exams is required"),
  offerPercent: Yup.string().required("Offer Percent is required"),
});
export const examFormFields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter Name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    required: true,
  },
  {
    label: "Promo Code",
    name: "promocode",
    type: "text",
    placeholder: "Enter Promo Code",
    required: true,
  },
  {
    label: "Offer Percent",
    name: "offerPercent",
    type: "number",
    placeholder: "Enter Offer Percent",
    required: true,
  },
  {
    label: "Mapped Exams",
    name: "mappedExams",
    type: "multiselect",
    placeholder: "Search & Select Exams",
    required: true,
    options: [
      { label: "Maths", value: 1 },
      { label: "Physics", value: 2 },
      { label: "Chemistry", value: 3 },
    ],
  },
];
