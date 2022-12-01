import { ReactNode } from "react";
import { BsCalendarCheck } from "react-icons/bs";
export interface IButtonProps {
  variant: "standard" | "action" | "booking";
  children?: ReactNode;
  ref?: any;
  onClick: any;
  floating?: boolean;
  selected?: boolean;
  disabled?: boolean;
  icon?: any;
  ariaLabel?: string;
}

const Button = (props: IButtonProps) => {
  const {
    onClick,
    children,
    variant,
    floating,
    selected,
    disabled,
    icon,
    ariaLabel,
  } = props;

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
      className={`p-[15px] rounded-[10px] h-full ${getVariantStyle()} ${getFloatingStyle()} ${getDisabledStyle()}`}
      disabled={disabled}
      aria-label={ariaLabel}
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

          <div
            className={`${
              variant === "booking" ? "" : ""
            } font-heading font-bold`}
          >
            {children}
          </div>
        </div>
        {selected && variant !== "booking" && (
          <div className="h-[5px] w-full bg-primary-yellow rounded-[10px]" />
        )}
      </div>
    </button>
  );
};

export default Button;
