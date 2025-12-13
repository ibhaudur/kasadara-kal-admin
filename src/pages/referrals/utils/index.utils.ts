import * as Yup from "yup";
export interface Referral {
  id?: number;
  name: string;
  email: string;
  promocode: string;
  mapped_exams: { label: string; value: string }[];
  offerPercent: string;
}

export const examInitialValues: Referral = {
  name: "",
  email: "",
  promocode: "",
  mapped_exams: [],
  offerPercent: "",
};
export const examSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  promocode: Yup.string().required("Promo Code is required"),
  mapped_exams: Yup.array()
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
    name: "mapped_exams",
    type: "multiselect",
    placeholder: "Search & Select Exams",
    required: true,
    parameter: "exam",
    keyValue: "exam_id",
    labelValue: "exam_name",
  },
];
