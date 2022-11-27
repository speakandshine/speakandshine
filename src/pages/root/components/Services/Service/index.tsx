import { useState, forwardRef } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import FadeIn from "src/shared/components/FadeIn";

export interface IServiceProps {
  title: string;
  description: string;
  icon?: any;
  changeBackground?: boolean;
}

const Service = (props: IServiceProps) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="flex space-x-2 items-center">
        {!open && (
          <div className="text-[16px] cursor-pointer" onClick={toggleDropdown}>
            <AiFillCaretDown />
          </div>
        )}
        {open && (
          <div className="text-[16px] cursor-pointer" onClick={toggleDropdown}>
            <AiFillCaretRight />
          </div>
        )}
        <h4 className="cursor-pointer" onClick={toggleDropdown}>
          {props.title}
        </h4>
      </div>
      {open && (
        <FadeIn title="">
          <div className="ml-[25px]"> {props.description}</div>
        </FadeIn>
      )}
    </div>
  );
};

export default Service;
