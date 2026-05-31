"use client";

import { AppSelectProps } from "@/types";

const AppSelect = ({
  options = [],
  children,
  className = "",
  ...props
}: AppSelectProps) => {
  return (
    <select className={`app-select form-select ${className}`.trim()} {...props}>
      {children}
      {options.map((option) => (
        <option
          className="app-select__option"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default AppSelect;