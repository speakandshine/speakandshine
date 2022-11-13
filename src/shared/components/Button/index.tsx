import * as React from "react";
import { BsCalendarCheck } from "react-icons/bs";
export interface IButtonProps {
  variant: "standard" | "action" | "booking";
  children?: React.ReactNode;
  ref?: any;
  onClick: any;
  floating?: boolean;
  selected?: boolean;
  disabled?: boolean;
  icon?: any;
}

const Button = React.forwardRef((props: IButtonProps, ref) => {
  const { onClick, children, variant, floating, selected, disabled, icon } =
    props;

  const getVariantStyle = () => {
    switch (variant) {
      case "booking":
        return "bg-primary-yellow text-black";
      case "action":
        return "bg-primary-yellow text-black";
      case "standard":
        return "bg-white";
    }
  };

  const getFloatingStyle = () => {
    return floating
      ? "fixed bottom-[50px] right-[50px] z-[2] shadow-border"
      : "";
  };

  const getDisabledStyle = () => {
    return variant === "action" && disabled
      ? "text-inherit bg-secondary-grey"
      : "";
  };

  return (
    <button
      onClick={onClick}
      className={`p-[15px] rounded-[10px] ${getVariantStyle()} ${getFloatingStyle()} ${getDisabledStyle()}`}
      disabled={disabled}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          {(variant === "booking" || icon) && (
            <i className="text-[20px] mr-[5px]">
              {variant === "booking" && (
                <BsCalendarCheck className="text-black" />
              )}
              {variant !== "booking" && icon}
            </i>
          )}

          <h3 className={`${variant === "booking" ? "" : ""}`}>{children}</h3>
        </div>
        {selected && variant !== "booking" && (
          <div className="h-[5px] w-full bg-primary-yellow rounded-[10px]" />
        )}
      </div>
    </button>
  );
});

Button.displayName = "FadeIn";

export default Button;
