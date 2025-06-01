import React from "react";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h6 className="text-2xl font-semibold mt-4 mb-3" data-testid="title">
      {title}
    </h6>
  );
};

export default Title;
