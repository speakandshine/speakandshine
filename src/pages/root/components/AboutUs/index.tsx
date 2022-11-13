import * as React from "react";
import styles from "./About.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export interface IAboutUsProps {}

function AboutUs(props: IAboutUsProps) {
  return (
    <div className="p-[20px] laptop:p-[40px]">
      <h1 className="">Mission statement</h1>
      <br />
      <div className="bg-secondary-yellow">
        <div className="p-[20px]">
          <i className="text-secondary-blue text-quote-icon-mobile laptop:text-quote-icon">
            <FaQuoteLeft />
          </i>
          <h1 className="text-center  ">
            At Speak & Shine we aim to deliver speech therapy that educates and
            empowers individuals with the communication skills to perform and
            function in society.
          </h1>
          <i className="flex justify-end text-secondary-blue text-quote-icon-mobile laptop:text-quote-icon">
            <FaQuoteRight />
          </i>
          <div className="flex justify-center items-center space-x-3">
            <div className="h-[1px] w-[40px] bg-primary-grey" />
            <h1> Tano De Guzman </h1>
            <div className="h-[1px] w-[40px] bg-primary-grey" />
          </div>
        </div>
      </div>

      <br />
      <div>
        <h1>Who are we?</h1>
        <div className="text-[11px] laptop:text-[18px]">
          Speak & Shine is a Mobile Speech Pathology that diagnoses and treats
          communication difficulties in children aged 1 - 12 years. We assess
          and treat difficulties with speaking, listening, understanding,
          literacy and social skills. We are mobile to make speech therapy
          convenient and easy for parents and children.
        </div>
        <br />
        <h1 className="">How / Why we started</h1>
        <div className="text-[11px] laptop:text-[18px]">
          Through family members that have hearing loss and speech difficulties,
          I have observed them experiencing hardship of acceptance in social
          environments. I started Speak & Shine to help children overcome their
          language barriers to empower them to live life with equal opportunity
          and social treatment. We started Speak & Shine because we are
          passionate about helping children to overcome speech difficulties and
          experience life to the fullest.
        </div>
        <br />
      </div>
    </div>
  );
}

export default AboutUs;
