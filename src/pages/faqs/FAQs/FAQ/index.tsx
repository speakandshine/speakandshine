import { ReactNode, useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import FadeIn from "src/components/FadeIn";

export interface IFAQProps {
  question: string;
  children?: ReactNode;
}

const FAQ = (props: IFAQProps) => {
  const { question, children } = props;

  const [showAnswer, toggleShowAnswer] = useState(false);
  return (
    <>
      <div
        className="grid grid-cols-12 shadow-border p-[15px] my-[10px] bg-secondary-yellow cursor-pointer"
        onClick={() => toggleShowAnswer(!showAnswer)}
      >
        <div className="col-span-12 flex items-center space-x-2">
          {showAnswer && <AiFillCaretRight className="text-[16px]" />}
          {!showAnswer && <AiFillCaretDown className="text-[16px]" />}
          <h3> {question} </h3>
        </div>
      </div>
      {showAnswer && (
        <FadeIn>
          <div className="p-[15px]">{children}</div>
        </FadeIn>
      )}
    </>
  );
};

export default FAQ;
