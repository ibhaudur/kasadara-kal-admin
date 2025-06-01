import * as Yup from "yup";
import { AuthLogin } from "../../../types/pages.types";

export const loginInitialValues: AuthLogin = {
  emailId: "",
  password: "",
};
export const loginSchema = Yup.object().shape({
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: Yup.string().required("Password is required"),
});


export const LoginFormFields = [
  {
    label: "Email ID",
    name: "emailId",
    type: "email",
    placeholder: "Enter Email Id",
    testId: "email-input",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    testId: "password-input",
  },
];
