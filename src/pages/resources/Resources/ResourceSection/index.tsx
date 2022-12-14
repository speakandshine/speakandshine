import { ReactNode } from "react";

export interface IResourceSectionProps {
  title: string;
  children: ReactNode;
  icons?: any[];
  customClass?: string;
}

const ResourceSection = (props: IResourceSectionProps) => {
  const { title, children, customClass } = props;
  return (
    <div className={`flex flex-col col-span-1 p-[20px] ${customClass}`}>
      <h2> {title} </h2>
      <br />
      <div className="col-span-1 grid grid-cols-2 gap-5 w-full">{children}</div>
      <br />
    </div>
  );
};
export default ResourceSection;
