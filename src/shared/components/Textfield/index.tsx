export interface ITextfieldProps {
  placeholder: string;
  value: string;
  onChange: any;
  disabled?: boolean;
  onBlur?: any;
  error?: string;
  maxLength?: number;
}

const Textfield = (props: ITextfieldProps) => {
  const { placeholder, value, onChange, disabled, error, onBlur, maxLength } =
    props;
  return (
    <>
      <input
        type="text"
        className={`bg-white text-[black] p-[10px] rounded-[5px] w-full focus:outline-primary-yellow`}
        placeholder={placeholder}
        value={value.replace(/[\[\]\{\}\<\>]/, "")}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        maxLength={maxLength}
      />
      {error && (
        <label className="text-red text-[11px]">
          {"*"}
          {error}{" "}
        </label>
      )}
    </>
  );
};

export default Textfield;
