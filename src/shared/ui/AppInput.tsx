"use client";

import type { InputHTMLAttributes } from "react";

const AppInput = ({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`app-input form-control ${className}`.trim()}
      {...props}
    />
  );
}

export default AppInput;