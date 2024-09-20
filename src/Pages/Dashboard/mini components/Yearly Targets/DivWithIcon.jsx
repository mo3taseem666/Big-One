import React from 'react';
import Details from './Details';

export default function DivWithIcon({
  icon,
  text,
  value,
  percentage,
  color,
  colorDark
}) {
  return (
    <div className="flex gap-3 items-center">
      <div
        className={`${color} shrink-0 flex justify-center items-center xs:size-16 size-20`}
      >
        {icon}
      </div>
      <Details
        text={text}
        value={value}
        color={color}
        colorDark={colorDark}
        percentage={percentage}
      />
    </div>
  );
}
