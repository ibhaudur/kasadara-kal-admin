import { useFormikContext } from "formik";
import Select, { MultiValue } from "react-select";
import { SelectOptions } from "../../types/component.types";

interface MultiSelectProps {
  name: string;
  options: SelectOptions[];
  disabled?: boolean;
  placeholder?: string;
  testId?: string;
}

const MultiSelectField: React.FC<MultiSelectProps> = ({
  name,
  options,
  disabled,
  placeholder,
  testId,
}) => {
  const { setFieldValue, values } = useFormikContext<Record<string, any>>();

  const selectedValues: string[] = Array.isArray(values?.[name])
    ? values[name]
    : [];

  return (
    <Select
      isMulti
      name={name}
      inputId={name}
      data-testid={testId}
      isDisabled={disabled}
      placeholder={placeholder}
      options={options}
      isSearchable
      value={options.filter((opt) =>
        selectedValues.includes(opt.value as string)
      )}
      onChange={(selectedOptions: MultiValue<SelectOptions>) => {
        const selectedIds = selectedOptions.map((item) => item.value);
        setFieldValue(name, selectedIds);
      }}
      classNamePrefix="react-select"
      styles={{
        control: (base) => ({
          ...base,
          minHeight: "40px",
          borderRadius: "10px",
          borderColor: "#D4DDE7",
          fontSize: "13px",
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "2px 6px",
        }),
        multiValue: (base) => ({
          ...base,
          borderRadius: "6px",
        }),
      }}
    />
  );
};

export default MultiSelectField;
