"use client";
import { AppButtonProps } from "@/types";

const AppButton = ({
  icon,
  variant = "success",
  className = "",
  children,
  type = "button",
  ...props
}: AppButtonProps) => {
  const bootstrapClass =
    variant === "circle"
      ? "btn btn-success rounded-circle"
      : variant === "danger"
        ? "btn btn-danger"
        : `btn btn-${variant}`;

  return (
    <button
      type={type}
      className={`app-button app-button--${variant} ${bootstrapClass} ${className}`.trim()}
      {...props}
    >
      {icon && <i className={`app-button__icon bi ${icon}`} />}
      {icon && children ? <span className="app-button__space"> </span> : null}
      {children && <span className="app-button__text">{children}</span>}
    </button>
  );
}

export default AppButton;