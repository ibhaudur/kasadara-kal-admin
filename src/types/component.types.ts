import { ReactNode } from "react";

export interface SelectOptions {
  label: string;
  value: string;
}
interface OptionsList {
  [key: string]: { [key: string]: unknown }[];
}
export interface CustomInputProps {
  type: string;
  label: string;
  placeholder?: string;
  pattern?: RegExp;
  patternErr?: string;
  required?: boolean;
  options?: SelectOptions[];
  dummy?: string;
  name: string;
  disabled?: boolean;
  testId: string;
  Onchange?: () => void;
  submit?: boolean;
  splClass?: string;
  optionsList?: OptionsList;
  keyValue?: string;
  labelValue?: string;
  parameter?: string;
  dateAttribute?: string;
}
export interface ButtonProps {
  splClass: string;
  btnName: string | ReactNode;
  handler: () => void;
  type: string;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
export interface SearchBoxProp {
  placeholder: string;
}
