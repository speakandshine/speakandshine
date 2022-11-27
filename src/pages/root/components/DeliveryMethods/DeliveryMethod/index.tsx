import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IDeliveryMethodProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  icons?: any[];
  button: any;
}

const DeliveryMethod = (props: IDeliveryMethodProps) => {
  const { title, subtitle, children, icons, button } = props;
  return (
    <div className="grid grid-rows-5 border-divider border-solid laptop:border-r-[5px] laptop:border-b-0 border-b-[5px] p-[10px] rounded-[20px]">
      <div className="row-span-1 flex flex-col items-center justify-center">
        <div className="flex space-x-10">
          {icons?.map((icon) => {
            return (
              <div key={uuidv4()} className="text-icon text-[#add8e6]">
                {icon}
              </div>
            );
          })}
        </div>
        <h1 className="text-center"> {title} </h1>
        <h1 className={`text-center`}> {subtitle}</h1>
      </div>
      <div className=" row-span-3">{children}</div>
      <div className=" row-span-1 flex justify-center items-center">
        <div> {button} </div>
      </div>
    </div>
  );
};

export default DeliveryMethod;
