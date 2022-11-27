import { v4 as uuidv4 } from "uuid";
import FAQSection from "./FAQSection";
import FAQ from "./FAQ";
import Resource from "../Resources/Resource";

export interface IFAQsProps {
  bookSessionRef: any;
}

const FAQs = (props: IFAQsProps) => {
  return (
    <>
      <h1 className="text-center">Frequently Asked Questions</h1>
      <FAQSection title="1. Location">
        <FAQ question="Where is the clinic located? ">
          <div>
            Speak & Shine is a mobile speech pathology business. We currently
            service areas in Marrickville and surrounding suburbs (Alexandria,
            Dulwich hill, Petersham, Newtown, etc.) - Approximately a 10-13km
            radius from Marrickville.
          </div>
          <div>
            - However, if you live further away please
            <span className="underline font-bold"> enquire here </span> to
            discuss a solution.
          </div>
          <div>
            - <span className="font-bold"> Note: </span> Travel fee will depend
            on the distance of the commute.
          </div>
        </FAQ>
      </FAQSection>
      <FAQSection title="2. Mobile Speech Therapy">
        <FAQ question="Does my child need speech therapy?">
          <div>Please refer to the documents listed below:</div>
          <div className="grid grid-cols-3 w-[75%]">
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
        </FAQ>
        <FAQ question="Do I need to prepare anything at home?">
          <div>
            All we need is an area in your home to deliver the session such as
            dining table, study room, quiet area etc.
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
            <span className="font-bold underline"> Read here for more. </span>
          </div>
        </FAQ>
        <FAQ question="How much is the travel fee? ">
          <div>
            Travel fee will depend on the distance of your home from the speech
            pathologist. It can range from $40 - $100+. This may be funded in
            full, if you have NDIS funding.{" "}
            <span className="font-bold underline">Enquire here </span>to discuss
            travel options.
          </div>
        </FAQ>
        <FAQ question="What are the session rates? ">
          <div>
            According to Speech Pathology Australia the standard fee for an
            assessment is _____ and the therapy hourly rate is _______.{" "}
            <span className="font-bold underline">Enquire here</span> to discuss
            payment options/assistance.
          </div>
        </FAQ>
        <FAQ question="What are your methods of payment? ">
          <div>
            Refer to the
            <span className="font-bold underline">Fees and Funding</span> page
          </div>
        </FAQ>
      </FAQSection>
      <FAQSection title="5. General Questions">
        <FAQ question="How do I book? ">
          <div>
            Book through this website.
            <span className="font-bold underline">Click here</span> to book.
          </div>
        </FAQ>
        <FAQ question="How long does therapy last? ">
          <div>
            Therapy can range from 30 - 120 mins depending on your child{"'"}s
            specific needs.
          </div>
        </FAQ>
        <FAQ question="How many sessions will my child need to do? ">
          <div>
            Total number of sessions will depend on each individual child. We
            will complete a full assessment for the first session. The
            assessment will provide the speech pathologist with the information
            to form a plan and set the amount of therapy needed for the child.
          </div>
        </FAQ>
        <FAQ question="What are the hours?">
          <div> Business hours are from 9am to 7pm</div>
        </FAQ>
        <FAQ question="What is your cancellation policy? ">
          <div>
            Refer to the cancellation policy{" "}
            <span className="font-bold underline">here</span>
          </div>
        </FAQ>
      </FAQSection>
      <br />
    </>
  );
};

export default FAQs;
