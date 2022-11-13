import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export interface IResourceSectionProps {
  title: string;
  children: React.ReactNode;
  icons?: any[];
  customClass?: string;
}

const ResourceSection = React.forwardRef(
  (props: IResourceSectionProps, ref) => {
    const { title, children, customClass } = props;
    return (
      <div className={`flex flex-col col-span-1 p-[30px] ${customClass}`}>
        <h2> {title} </h2>
        <br />
        <div className="col-span-1 grid grid-cols-3 gap-5 w-full">
          {children}
        </div>
        <br />
      </div>
    );
  }
);

ResourceSection.displayName = "ResourceSection";

export default ResourceSection;
