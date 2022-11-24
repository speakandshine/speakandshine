import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export interface IDeliveryMethodProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  icons?: any[];
}

const FundingMethod = React.forwardRef((props: IDeliveryMethodProps, ref) => {
  const { title, subtitle, children, icons } = props;
  return (
    <div
      className={`col-span-1 grid grid-rows-4 gap-[10px] border-divider border-solid laptop:border-r-[5px] laptop:border-b-0 border-b-[5px] rounded-[20px]`}
    >
      <div className="row-span-1 flex justify-center items-center">
        {icons?.map((icon, index) => {
          return (
            <i key={uuidv4()} className="text-icon text-secondary-blue">
              {" "}
              {icon}{" "}
            </i>
          );
        })}
      </div>
      <h1 className="row-span-1 flex justify-center items-center text-center">
        {" "}
        {title}{" "}
      </h1>
      <div className="row-span-2">{children}</div>
    </div>
  );
});

FundingMethod.displayName = "FundingMethod";

export default FundingMethod;
