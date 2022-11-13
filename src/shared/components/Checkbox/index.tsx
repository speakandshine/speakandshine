import * as React from "react";

export interface ICheckboxProps {
  value: string;
  checked: boolean;
  onChange: any;
  disabled?: boolean;
}

const Checkbox = React.forwardRef((props: ICheckboxProps, ref) => {
  const { value, checked, onChange, disabled } = props;
  return (
    <div>
      <input
        type="checkbox"
        className="focus:outline-primary-yellow"
        checked={checked}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      <label> {value} </label>
    </div>
  );
});

Checkbox.displayName = "Section";

export default Checkbox;
