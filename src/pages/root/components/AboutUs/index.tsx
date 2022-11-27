import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export interface IAboutUsProps {}

const AboutUs = (props: IAboutUsProps) => {
  return (
    <>
      <h1 className="text-center">Mission statement</h1>
      <br />
      <div className="bg-secondary-yellow">
        <div className="p-[20px]">
          <div className="text-secondary-blue text-quote-icon-mobile laptop:text-quote-icon">
            <FaQuoteLeft />
          </div>
          <h1 className="text-[18px] laptop:text-[24px] text-center">
            At Speak & Shine we aim to deliver speech therapy that educates and
            empowers individuals with the communication skills to perform and
            function in society.
          </h1>
          <div className="flex justify-end text-secondary-blue text-quote-icon-mobile laptop:text-quote-icon">
            <FaQuoteRight />
          </div>

          <div className="flex justify-center items-center space-x-3">
            <div className="h-[1px] w-[40px] bg-primary-grey" />
            <h1> Founder </h1>
            <div className="h-[1px] w-[40px] bg-primary-grey" />
          </div>
        </div>
      </div>

      <br />
      <div className="p-[20px]">
        <h1>Who we are</h1>
        <div>
          Speak & Shine is a Mobile Speech Pathology that diagnoses and treats
          communication difficulties in children 1 - 18 years. We assess and
          treat difficulties with speaking, listening, understanding, literacy
          and social skills. We are mobile, to make speech therapy convenient
          and easy for parents and children.
        </div>
        <br />
        <h1>How / Why we started</h1>
        <div>
          Through family members that have hearing loss and speech difficulties,
          I have observed them experiencing hardship of acceptance in social
          environments. I started Speak & Shine to help children overcome their
          language barriers to empower them to live life with equal opportunity
          and social treatment. We started Speak & Shine because we are
          passionate about helping children to overcome speech difficulties and
          experience life to the fullest.
        </div>
      </div>
    </>
  );
};

export default AboutUs;
