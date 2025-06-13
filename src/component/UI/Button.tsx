import React from "react";
import { ButtonProps } from "../../types/component.types";

const Button: React.FC<Partial<ButtonProps>> = ({
  splClass,
  btnName,
  handler,type
}) => {
  if (type === "outline") {
    return (
      <button
        data-testid="button"
        className={`cursor-pointer rounded-[8px] p-2 ${splClass}`}
        onClick={handler ? handler : undefined}
        type="submit"
      >
        {btnName}
      </button>
    );
  }
  return (
    <button
      data-testid="button"
      className={`cursor-pointer bg-[#2BBC7C] hover:bg-[#0C804D] rounded-[8px] text-white p-2 ${splClass}`}
      onClick={handler ? handler : undefined}
      type="submit"
    >
      {btnName}
    </button>
  );
};

export default React.memo(Button);
