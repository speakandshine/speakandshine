import { ReactNode } from "react";

export interface IFAQSectionProps {
  title: string;
  children: React.ReactNode;
  icons?: any[];
  customClass?: string;
}

const FAQSection = (props: IFAQSectionProps) => {
  const { title, children, customClass } = props;
  return (
    <div
      className={`flex flex-col col-span-1 p-[20px] pb-[10px] ${customClass}`}
    >
      <h2> {title} </h2>
      <br />
      <div className="">{children}</div>
    </div>
  );
};

export default FAQSection;
