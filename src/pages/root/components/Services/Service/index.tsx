import { useState, forwardRef } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import FadeIn from "src/shared/components/FadeIn";

export interface IServiceProps {
  title: string;
  description: string;
  icon?: any;
  changeBackground?: boolean;
}

const Service = forwardRef((props: IServiceProps, ref) => {
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
          <h4>
            <AiFillCaretDown />
          </h4>
        )}
        {open && (
          <h4>
            <AiFillCaretRight />
          </h4>
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
});

Service.displayName = "Service";

export default Service;
