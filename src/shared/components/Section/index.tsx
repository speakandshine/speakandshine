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
      <div className="min-h-[calc(100vh-100px)]">
        <div className="flex flex-col items-center text-center bg-primary-grey w-full py-[5px]">
          <h1 className="text-white text-big-heading-mobile laptop:big-heading-mobile">
            {props.title}
          </h1>
        </div>
        <div className="p-[10px] pt-[20px]">{props.children}</div>
      </div>
    </FadeIn>
  );
});

Section.displayName = "Section";

export default Section;