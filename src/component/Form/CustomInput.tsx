import { Field, useFormikContext } from "formik";
import React, { ReactNode } from "react";
import { CustomInputProps } from "../../types/component.types";
import MultiSelectField from "./MultiSelectField";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  testId,
  placeholder,
  disabled,
  name,
  splClass,
  options,
  optionsList,
  keyValue,
  labelValue,
  parameter,
  dateAttribute,
  required,
}) => {
  const { errors, touched } = useFormikContext<any>();

  const isError = (fieldName: string) =>
    fieldName && touched[fieldName] && errors[fieldName];

  const getInputClasses = (fieldName: string) =>
    `w-full px-3 py-2 border rounded-[10px] border-[#D4DDE7] bg-white focus:outline-none focus:ring-2 placeholder:text-[12px] text-[13px] focus:ring-[#2BBC7C] ${
      isError(fieldName) ? "border-red-500" : ""
    } ${splClass}`;

  const renderFields = () => {
    if (!name) return null;

    if (type === "date-range") {
      return (
        <div className="w-full">
          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 bg-white">
            <Field
              type="date"
              name={`${name}.from`}
              data-testid={`${testId}-from`}
              disabled={disabled}
              className="border-none outline-none w-full text-sm text-gray-700"
              max={
                dateAttribute === "max"
                  ? new Date().toISOString().split("T")[0]
                  : ""
              }
            />
            <span className="mx-2 text-gray-500">to</span>
            <Field
              type="date"
              name={`${name}.to`}
              data-testid={`${testId}-to`}
              disabled={disabled}
              className="border-none outline-none w-full text-sm text-gray-700"
              max={
                dateAttribute === "max"
                  ? new Date().toISOString().split("T")[0]
                  : ""
              }
            />
          </div>
        </div>
      );
    }

    switch (type) {
      case "select":
        return (
          <Field
            as="select"
            name={name}
            id={name}
            data-testid={testId}
            disabled={disabled}
            className={`${getInputClasses(name)}`}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {parameter
              ? optionsList?.[parameter]?.map((option) => (
                  <option
                    key={keyValue ? (option?.[keyValue] as string) : ""}
                    value={keyValue ? (option?.[keyValue] as string) : ""}
                  >
                    {labelValue
                      ? (option?.[labelValue as string] as ReactNode)
                      : ""}{" "}
                  </option>
                ))
              : options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
          </Field>
        );
      case "multiselect":
        return (
          <MultiSelectField
            name={name}
            options={options || []}
            disabled={disabled}
            placeholder={placeholder}
            testId={testId}
          />
        );
      case "radio":
        return (
          <div className={`flex ${splClass}`}>
            {options?.map((option) => (
              <label key={option.value} className="mr-4 flex gap-2">
                <Field
                  type="radio"
                  name={name}
                  value={option.value}
                  data-testid={`${testId}-${option.value}`}
                  disabled={disabled}
                />
                {option.label}
              </label>
            ))}
          </div>
        );

      case "textarea":
        return (
          <Field
            as="textarea"
            name={name}
            id={name}
            data-testid={testId}
            placeholder={placeholder}
            disabled={disabled}
            className={`${getInputClasses(name)}`}
          />
        );

      default:
        return (
          <Field
            type={type}
            name={name}
            id={name}
            data-testid={testId}
            placeholder={placeholder}
            min={
              dateAttribute === "min"
                ? new Date(Date.now() + 86400000).toISOString().split("T")[0]
                : ""
            }
            max={
              dateAttribute === "max"
                ? new Date().toISOString().split("T")[0]
                : ""
            }
            disabled={disabled}
            className={`${getInputClasses(name)}`}
          />
        );
    }
  };

  return (
    <React.Fragment>
      <label className="flex text-[12px] mb-1" htmlFor={name}>
        {label} {required && <span className="text-[#FF4444]">*</span>}
      </label>
      {renderFields()}
    </React.Fragment>
  );
};

export default React.memo(CustomInput);
