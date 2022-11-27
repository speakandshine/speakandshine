export interface ICheckboxProps {
  value: string;
  checked: boolean;
  onChange: any;
  disabled?: boolean;
}

const Checkbox = (props: ICheckboxProps) => {
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
};
export default Checkbox;
