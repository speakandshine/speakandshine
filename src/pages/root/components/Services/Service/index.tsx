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
      <div
        className="flex space-x-2 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {!open && (
          <div className="text-[16px]">
            <AiFillCaretDown />
          </div>
        )}
        {open && (
          <div className="text-[16px]">
            <AiFillCaretRight />
          </div>
        )}
        <h4>{props.title}</h4>
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
