import { forwardRef, ReactNode } from "react";

import FadeIn from "src/shared/components/FadeIn";

export interface ISectionProps {
  title: string;
  ref: any;
  children?: ReactNode;
}

const Section = forwardRef((props: ISectionProps, ref) => {
  return (
    <FadeIn title={props.title} ref={ref}>
      <div>
        <div className="flex flex-col items-center text-center bg-primary-grey w-full py-[5px]">
          <h1 className="text-white text-big-heading-mobile laptop:big-heading-mobile">
            {props.title}
          </h1>
        </div>
        <div className="p-[15px] pt-[20px] laptop:p-[25px]">
          {props.children}
        </div>
        <br />
      </div>
    </FadeIn>
  );
});

Section.displayName = "Section";

export default Section;
