import React from "react";

const PassRateCircle: React.FC<{ percentage: number }> = ({ percentage }) => {
  const radius = 70;
  const stroke = 7;
  const normalizedRadius = radius - stroke / 2;
  const fullCircumference = 2 * Math.PI * normalizedRadius;

  const visiblePercent = 0.8;
  const visibleCircumference = visiblePercent * fullCircumference;
  const dashArray = `${visibleCircumference} ${fullCircumference}`;
  const dashOffset = visibleCircumference * (1 - percentage / 100);

  return (
    <div className="flex items-center justify-center w-40 h-40">
      <svg height="160" width="160">
        {/* Grey background circle inside */}
        <circle
          cx="80"
          cy="80"
          r={normalizedRadius - 12}
          fill="#F3F4F6" // light grey
        />

        {/* Track */}
        <circle
          cx="80"
          cy="80"
          r={normalizedRadius}
          fill="transparent"
          stroke="#E5E7EB"
          strokeWidth={stroke}
          strokeDasharray={dashArray}
          strokeDashoffset="0"
          transform="rotate(-233 80 80)"
        />

        {/* Progress */}
        <circle
          cx="80"
          cy="80"
          r={normalizedRadius}
          fill="transparent"
          stroke="#22C55E"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform="rotate(-233 80 80)"
        />

        {/* Percentage Text */}
        <text
          x="80"
          y="78"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="#0F172A"
        >
          {percentage}%
        </text>

        {/* Label */}
        <text
          x="80"
          y="100"
          textAnchor="middle"
          fontSize="13"
          fill="#9CA3AF"
        >
          Pass rate
        </text>
      </svg>
    </div>
  );
};

export default PassRateCircle;
