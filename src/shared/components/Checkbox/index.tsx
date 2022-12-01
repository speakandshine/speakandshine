export interface ICheckboxProps {
  value: string;
  checked: boolean;
  onChange: any;
  disabled?: boolean;
}

const Checkbox = (props: ICheckboxProps) => {
  const { value, checked, onChange, disabled } = props;
  return (
    <div className="flex items-center space-x-1 my-2">
      <input
        type="checkbox"
        className="focus:outline-primary-yellow cursor-pointer"
        style={{
          height: "24px",
          width: "24px",
        }}
        checked={checked}
        onChange={onChange}
        value={value}
        disabled={disabled}
        id={`checkbox-${value}`}
      />
      <label htmlFor={`checkbox-${value}`}> {value}</label>
    </div>
  );
};
export default Checkbox;
