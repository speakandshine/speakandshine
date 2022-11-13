import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export interface IDeliveryMethodProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  icons?: any[];
}

const FundingMethod = React.forwardRef((props: IDeliveryMethodProps, ref) => {
  const { title, subtitle, children, icons } = props;
  return (
    <div
      className={`flex flex-col col-span-1 items-center p-[10px] pt-[20px] border-divider border-solid laptop:border-r-[5px] laptop:border-b-0 border-b-[5px] rounded-[20px]`}
    >
      <div className="flex space-x-10">
        {icons?.map((icon, index) => {
          return (
            <i key={uuidv4()} className="text-icon text-secondary-blue">
              {" "}
              {icon}{" "}
            </i>
          );
        })}
      </div>
      <br />
      <h1 className="text-center"> {title} </h1>
      <h1 className={`text-center`}> {subtitle}</h1>
      <br />
      <div className="col-span-1">{children}</div>
      <br />
    </div>
  );
});

FundingMethod.displayName = "FundingMethod";

export default FundingMethod;
