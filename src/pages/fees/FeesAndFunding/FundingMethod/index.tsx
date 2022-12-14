import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IFundingMethodProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  icons?: any[];
}

const FundingMethod = (props: IFundingMethodProps) => {
  const { title, subtitle, children, icons } = props;
  return (
    <div
      className={`col-span-1 grid grid-rows-4 gap-[10px] border-divider border-solid laptop:border-r-[5px] laptop:border-b-0 border-b-[5px] rounded-[20px] pr-[10px] text-center`}
    >
      <div className="row-span-1 flex justify-center items-center">
        {icons?.map((icon) => {
          return (
            <div key={uuidv4()} className="text-icon text-secondary-blue">
              {icon}
            </div>
          );
        })}
      </div>
      <h1 className="row-span-1 flex justify-center items-center text-center">
        {title}
      </h1>
      <div className="row-span-2">{children}</div>
    </div>
  );
};

export default FundingMethod;
