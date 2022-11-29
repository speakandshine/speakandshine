import FilledImage from "../../FilledImage";
import { ASPECT_RATIO_LOGO } from "src/shared/helpers/aspectRatios";
import { scrollToSection } from "src/shared/helpers/scroll";
import { v4 as uuidv4 } from "uuid";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import * as fbq from "src/shared/helpers/facebookPixel";
import { featureEmailServiceDisabled } from "src/shared/helpers/featureFlags";

export interface IFooterProps {
  sections: any[];
}

const Footer = (props: IFooterProps) => {
  const { sections } = props;
  const Links = sections.map((s) => {
    return (
      <div
        className="flex items-center justify-center text-center border-white border-[1px] border-solid laptop:p-[10px] rounded-[5px] cursor-pointer text-[12px] laptop:text-inherit"
        onClick={() => {
          if (s.title === "Enquire Now") {
            fbq.event("View Enquiry Section", {});
          }
          scrollToSection(s.ref);
        }}
        key={uuidv4()}
      >
        {s.title}
      </div>
    );
  });

  return (
    <footer className="bg-primary-grey laptop:h-[200px] w-full laptop:grid laptop:grid-cols-3 text-white p-[20px] space-y-5 laptop:space-y-0 pb-[30px] laptop:pb-[20px]">
      <div className="flex flex-col items-center justify-center">
        <FilledImage
          src="assets/shared/Logo2.png"
          alt=""
          aspectRatio={ASPECT_RATIO_LOGO}
          height={90}
        />
        {!featureEmailServiceDisabled() && (
          <div className="mt-[-10px] flex justify-center items-center space-x-2">
            <MdEmail />
            <label> admin@speakandshinespeechpathology.com.au </label>
          </div>
        )}
      </div>
      <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-3">
        {Links}
      </div>
      <div className="flex flex-col items-center justify-center">
        <a
          className="flex justify-center items-center space-x-2 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/speakandshinespeechpathology"
        >
          <AiFillInstagram className="text-[24px]" />
          <h3> Instagram</h3>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
