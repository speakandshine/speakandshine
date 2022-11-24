import * as React from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import FadeIn from "src/shared/components/FadeIn";

export interface IResourceSectionProps {
  question: string;
  children?: React.ReactNode;
}

const FAQ = React.forwardRef((props: IResourceSectionProps, ref) => {
  const { question, children } = props;

  const [showAnswer, toggleShowAnswer] = React.useState(false);
  return (
    <>
      <div
        className="grid grid-cols-12 shadow-border p-[15px] my-[10px] bg-secondary-yellow cursor-pointer"
        onClick={() => toggleShowAnswer(!showAnswer)}
      >
        <h4 className="col-span-12 flex items-center space-x-2">
          {showAnswer && <AiFillCaretRight />}
          {!showAnswer && <AiFillCaretDown />}
          <h4> {question} </h4>
        </h4>
      </div>
      {showAnswer && (
        <FadeIn title="">
          <div className="p-[15px]">{children}</div>{" "}
        </FadeIn>
      )}
    </>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;
