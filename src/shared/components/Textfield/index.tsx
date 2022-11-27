export interface ITextfieldProps {
  placeholder: string;
  value: string;
  onChange: any;
  disabled?: boolean;
  onBlur?: any;
  error?: boolean;
}

const Textfield = (props: ITextfieldProps) => {
  const { placeholder, value, onChange, disabled, error, onBlur } = props;
  return (
    <>
      <input
        type="text"
        className={`bg-white text-[black] p-[10px] rounded-[5px] w-full focus:outline-primary-yellow`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
      {error && <div className="text-red"> *Please enter a valid email</div>}
    </>
  );
};

export default Textfield;
