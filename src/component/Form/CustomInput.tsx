import { ErrorMessage, Field } from "formik";
import React, { ReactNode } from "react";
import { CustomInputProps } from "../../types/component.types";

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
  parameter,dateAttribute,required
}) => {
  const renderFields = () => {
    if (!name) {
      return null;
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
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6243cc] ${splClass}`}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {parameter
              ? optionsList?.[parameter]?.map((option) => (
                  <option
                    key={keyValue ? option?.[keyValue] as string: ""}
                    value={keyValue ? option?.[keyValue] as string: ""} 
                  >
                    {labelValue ? option?.[labelValue as string] as ReactNode: ""}
                  </option>
                ))
              : options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
          </Field>
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
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2BBC7C] ${splClass}`}
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
            min={dateAttribute === "min" ? new Date(Date.now() + 86400000).toISOString().split('T')[0] : ''}
            max={dateAttribute === "max" ? new Date().toISOString().split('T')[0] : ''}
            disabled={disabled}
            className={`w-full px-3 py-2 border rounded-[10px] border-[#D4DDE7] focus:outline-none focus:ring-2 placeholder:text-[12px] text-[13px] focus:ring-[#2BBC7C] ${splClass}`}
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
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </React.Fragment>
  );
};

export default React.memo(CustomInput);
