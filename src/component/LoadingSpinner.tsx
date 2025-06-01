import React from "react";

const LoadingSpinner: React.FC = () => {
  return <div className="flex items-center justify-center min-h-screen">
  <div className="w-10 h-10 border-4 border-t-4 border-t-indigo-600 border-gray-200 rounded-full animate-spin"></div>
</div>;
};

export default LoadingSpinner;