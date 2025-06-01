import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { postLogin } from "../../../service/apiUrls";
import {
  LoginFormFields,
  loginInitialValues,
  loginSchema,
} from "../utils/utils";
import CustomInput from "../../../component/Form/CustomInput";
import Button from "../../../component/UI/Button";
// import useApiCall from "../../../hooks/useApiCall";
import { AuthLogin } from "../../../types/pages.types";
// import { addUser } from "../../../store/slice/userSlice";
import Logo from "../../../../public/images/logo.svg";
import Banner from "../../../../public/images/login-banner.png";

const Login: React.FC = () => {
  // const { mutate } = useApiCall({
  //   key: postLogin,
  //   url: postLogin,
  //   method: "post",
  // });
  const handleSubmit = async (
    values: AuthLogin,
    actions: FormikHelpers<AuthLogin>
  ) => {
    console.log(values, actions);
    //   mutate(values, {
    //     onSuccess: (res : ApiResponse<UserDetails>) => {
    //       actions.setSubmitting(false);
    //       toast.success(res?.message);
    //       navigate("/dashboard");
    //       dispatch(addUser(res?.data));
    //     },
    //     onError: (err: ApiError) => {
    //       console.log(err);
    //       actions.setSubmitting(false);
    //       toast.error(err.response?.data?.message);
    //     },
    //   });
  };

  return (
    <section className="min-h-screen w-full grid justify-center grid-cols-1 md:grid-cols-2 items-center">
      <div className="relative hidden md:block h-[100dvh] w-full overflow-hidden">
        <div className="absolute flex justify-center -left-40 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E4FFF0] rounded-full">
          <img src={Banner} alt="banner" className="object-contain w-[400px]" />
        </div>
      </div>
      <div className="flex justify-center p-6 sm:p-8">
        <div className="w-[380px]">
          <div className="mb-4">
            <img src={Logo} className="mb-5" alt="logo" />
            <h6 className="text-xl md:text-[32px] font-semibold text-[#172B4D]">
              Sign In
            </h6>
            <small className="font-medium text-[#8790A1]">
              One sign-in. Total exam oversight.
            </small>
          </div>

          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {LoginFormFields.map((field, index) => (
                  <CustomInput key={index} {...field} />
                ))}
                <Button
                  splClass="w-full py-2 mt-4 rounded-[30px] transition-colors duration-300 text-white font-medium"
                  btnName={isSubmitting ? "Signing in..." : "Sign In"}
                />
              </Form>
            )}
          </Formik>
          <div className="mt-4 text-center">
            <small className="text-gray-600 text-[12px]">
              By singing in you agree to our
              <Link
                className="font-medium transition-colors duration-300"
                to="/#"
              >
                &nbsp;Terms of service
              </Link>{" "}
              &{" "}
              <Link
                className="font-medium transition-colors duration-300"
                to="/#"
              >
                Privacy Policy
              </Link>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
