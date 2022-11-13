import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export interface IResourceSectionProps {
  title: string;
  children: React.ReactNode;
  icons?: any[];
  customClass?: string;
}

const FAQSection = React.forwardRef((props: IResourceSectionProps, ref) => {
  const { title, children, customClass } = props;
  return (
    <div
      className={`flex flex-col col-span-1 p-[30px] pb-[10px] ${customClass}`}
    >
      <h2> {title} </h2>
      <br />
      <div className="">{children}</div>
    </div>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
