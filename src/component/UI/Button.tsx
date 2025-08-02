import React from "react";
import { ButtonProps } from "../../types/component.types";

const Button: React.FC<Partial<ButtonProps>> = ({
  splClass,
  btnName,
  handler,
  type,
}) => {
  const baseClass = "cursor-pointer rounded-[8px] p-2 transition-all";
  const outlineClass =
    "border border-[#2BBC7C] text-[#2BBC7C] hover:bg-[#E6F4EF]";
  const filledClass =
    "bg-[#2BBC7C] hover:bg-[#0C804D] text-white";

  const finalClass =
    type === "outline"
      ? `${baseClass} ${outlineClass} ${splClass || ""}`
      : `${baseClass} ${filledClass} ${splClass || ""}`;

  return (
    <button
      data-testid="button"
      className={finalClass}
      onClick={handler}
      type="submit"
    >
      {btnName}
    </button>
  );
};

export default React.memo(Button);
