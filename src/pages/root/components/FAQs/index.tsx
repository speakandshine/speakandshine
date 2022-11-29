import { v4 as uuidv4 } from "uuid";
import FAQSection from "./FAQSection";
import FAQ from "./FAQ";
import Resource from "../Resources/Resource";
import { scrollToSection } from "src/shared/helpers/scroll";
import * as fbq from "src/shared/helpers/facebookPixel";
export interface IFAQsProps {
  bookSessionRef: any;
  feesAndFundingRef: any;
}

const FAQs = (props: IFAQsProps) => {
  const { bookSessionRef, feesAndFundingRef } = props;

  const BookSessionLink = (text: string) => {
    return (
      <span
        className="underline font-bold cursor-pointer"
        onClick={() => {
          scrollToSection(bookSessionRef);
          fbq.event("View Enquiry Section", {});
        }}
      >
        {text}
      </span>
    );
  };

  const FeesAndFundingLink = (text: string) => {
    return (
      <span
        className="underline font-bold cursor-pointer"
        onClick={() => {
          scrollToSection(feesAndFundingRef);
        }}
      >
        {text}
      </span>
    );
  };

  return (
    <>
      <h1 className="text-center">Frequently Asked Questions</h1>
      <FAQSection title="1. Location">
        <FAQ question="Where is the clinic located? ">
          <div>
            Speak & Shine is a mobile speech pathology business. We currently
            service areas in Marrickville and surrounding suburbs (Alexandria,
            Dulwich hill, Petersham, Newtown, etc.) - Approximately a 4 to 5km
            radius from Marrickville.
          </div>
          <div>
            - If you live further away, please {BookSessionLink("enquire now")}{" "}
            to discuss a solution.
          </div>
          <br />
          <label>
            Note: Travel fee will depend on the distance of the commute.
          </label>
        </FAQ>
      </FAQSection>
      <FAQSection title="2. Mobile Speech Therapy">
        <FAQ question="Does my child need speech therapy?">
          <div>Please refer to the documents listed below:</div>
          <br />
          <div className="grid grid-cols-2">
            <Resource
              title="Communication Milestone factsheet"
              description="Stages of speech development from 0 - 5yrs"
              type="pdf"
              resource="language1"
            />
            <Resource
              title="The sound of speech"
              description="Stages of speech from 1 - 3 years old"
              type="pdf"
              resource="speech1"
            />
            <Resource
              title="When should I get help for literacy difficulty?"
              description="Signs of literacy difficulty"
              type="pdf"
              resource="literacy1"
            />
          </div>
          <br />
          <div>
            {"OR "}
            {BookSessionLink("Enquire now")} to discuss over the phone.{" "}
          </div>
        </FAQ>
        <FAQ question="Do I need to prepare anything at home?">
          <div>
            All we need is an area in your home to deliver the session such as
            dining table, study room, quiet area, etc.
          </div>
        </FAQ>
      </FAQSection>
      <FAQSection title="3. Telehealth Speech Therapy">
        <FAQ question="What is the difference in results between face to face and telehealth?">
          <div>
            There will be minimal differences between, however there may be
            barriers to the delivery of the therapy if you have suboptimal
            internet access.
          </div>
        </FAQ>
      </FAQSection>
      <FAQSection title="4. Funding and Fees">
        <FAQ question="Can I use NDIS funding for mobile therapy?">
          <div>
            Yes, the amount will depend on several factors.{" "}
            {BookSessionLink("Enquire now")} to discuss.
          </div>
        </FAQ>
        <FAQ question="How much is the travel fee? ">
          <div>
            Travel fee will depend on the distance of your home from the speech
            pathologist. {BookSessionLink("Enquire now")} to discuss travel
            options.
          </div>
        </FAQ>
        <FAQ question="What are your methods of payment? ">
          <div>
            Refer to the {FeesAndFundingLink("Fees and Funding")} page for more
            info.
          </div>
        </FAQ>
      </FAQSection>
      <FAQSection title="5. General Questions">
        <FAQ question="How do I book? ">
          <div>
            You can book through this website.{" "}
            {BookSessionLink("Click here to book.")}
          </div>
        </FAQ>
        <FAQ question="What are the hours?">
          <div>
            {" "}
            We are flexible at Speak & Shine, depending on each speech
            pathologist{"'"}s availability.
          </div>
        </FAQ>
        <FAQ question="What is your cancellation policy? ">
          <div>
            Refer to the cancellation policy in the{" "}
            {FeesAndFundingLink("Fees and Funding")} page.
          </div>
        </FAQ>
      </FAQSection>
      <br />
    </>
  );
};

export default FAQs;
