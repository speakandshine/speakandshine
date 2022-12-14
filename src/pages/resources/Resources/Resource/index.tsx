import { AiFillFilePdf } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

export interface IResourceProps {
  title: string;
  description: string;
  type: "pdf" | "website";
  resource: string;
}

const Resource = (props: IResourceProps) => {
  const { title, description, type, resource } = props;
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          type === "pdf"
            ? `/assets/sections/resources/${resource}.pdf`
            : resource
        }
        className="col-span-1 flex space-x-1 w-full p-[10px] rounded-[8px] cursor-pointer"
      >
        <div
          className={`col-span-1 flex border-shadow text-[20px] p-[5px] rounded-[5px] ${
            type === "pdf" ? "text-red" : "text-secondary-blue"
          }`}
        >
          {type === "pdf" ? <AiFillFilePdf /> : <BsGlobe />}{" "}
        </div>
        <div className="col-span-3">{title}</div>
      </a>
      <div className="col-span-1 flex flex-col justify-center">
        {description}
      </div>
    </>
  );
};

export default Resource;
