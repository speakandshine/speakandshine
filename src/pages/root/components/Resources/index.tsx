import { v4 as uuidv4 } from "uuid";
import ResourceSection from "./ResourceSection";
import Resource from "./Resource";
import FAQSection from "./FAQSection";
import FAQ from "./FAQ";

export interface IFeesAndFundingProps {}

function Resources(props: IFeesAndFundingProps) {
  return (
    <>
      <div className="border-divider border-solid border-b-[5px] p-[10px] rounded-[20px]">
        <h1 className="text-center pb-[10px]"> Resources </h1>
        <div className="flex flex-col laptop:grid laptop:grid-cols-2 space-y-[15px] laptop:space-y-0">
          <ResourceSection title="Language">
            <Resource
              title="Communication Milestone factsheet"
              description="Stages of speech development from 0 - 5yrs"
              type="pdf"
              resource="language1"
            />
            <Resource
              title="Speech pathology in mental health services"
              description="How speech pathology may help some mental health issues"
              type="pdf"
              resource="language2"
            />
            <Resource
              title="Raising Bilingual children"
              description="Most children are able to learn two (or more) languages at the
                same time without difficulty."
              type="pdf"
              resource="language3"
            />
            <Resource
              title=" Helping your Baby to talk"
              description="Every baby learns to speak by listening, playing with sounds and
                talking to others"
              type="pdf"
              resource="language4"
            />
            <Resource
              title="Helping your Baby to talk"
              description="Parent information/ parent guide"
              type="pdf"
              resource="language5"
            />
            <Resource
              title="Autism"
              description="A condition that affects the way a person makes sense of, and interacts with, other people and their environment."
              type="pdf"
              resource="language6"
            />
          </ResourceSection>
          <ResourceSection title="Speech" customClass="bg-secondary-yellow">
            <Resource
              title="The sound of speech"
              description="Stages of speech from 1 - 3 years old"
              type="pdf"
              resource="speech1"
            />
            <Resource
              title="Learning speech"
              description="Preschool and school aged children stages of speech"
              type="pdf"
              resource="speech2"
            />
            <Resource
              title="Speech Pathology and Indigenous children"
              description="Understanding indigenous children in speech therapy"
              type="pdf"
              resource="speech3"
            />
            <Resource
              title="Tongue Tie"
              description="A condition where a person has a short frenulum, or tie, that
                holds the tongue tightly to the floor of the mouth and reduces
                the mobility, flexibility and reach of the tongue"
              type="pdf"
              resource="speech4"
            />
          </ResourceSection>
          <ResourceSection
            title="Literacy (read and write)"
            customClass="laptop:bg-secondary-yellow"
          >
            <Resource
              title="When should I get help for literacy difficulty?"
              description="Signs of literacy difficulty"
              type="pdf"
              resource="literacy1"
            />
            <Resource
              title="Learning to read and write"
              description="Reading and writing (literacy) are essential skills for children"
              type="pdf"
              resource="literacy2"
            />
          </ResourceSection>
          <ResourceSection
            title="Fluency / Stuttering"
            customClass="bg-secondary-yellow laptop:bg-white"
          >
            <Resource
              title=" Does my child have a stutter?"
              description="A speech problem that makes it difficult for children to speak
                smoothly"
              type="website"
              resource="https://raisingchildren.net.au/preschoolers/development/language-development/stuttering"
            />
            <Resource
              title="Stuttering and fluency information"
              description=" Stuttering is a speech disorder that causes interruptions in the
                rhythm or flow of speech"
              type="pdf"
              resource="fluencystuttering2"
            />
          </ResourceSection>
          <ResourceSection title="Feeding / Swallowing and Voice">
            <Resource
              title="Swallowing"
              description="Babies and children who have trouble swallowing may not take in
                enough nutrients to support growth and brain development"
              type="pdf"
              resource="feedingswallowing2"
            />
            <Resource
              title="Voice information"
              description="The human voice provides the basic sound for speech and singing"
              type="pdf"
              resource="voice2"
            />
          </ResourceSection>
          <ResourceSection
            title="Fees and Funding"
            customClass="bg-secondary-yellow"
          >
            <Resource
              title="Speech pathology rebates and funded programs"
              description="Programs that assist in the funding of speech pathology services, including Medicare and the National Disability Insurance Scheme (NDIS)"
              type="website"
              resource="https://www.speechpathologyaustralia.org.au/SPAweb/Resources_For_Speech_Pathologists/Professional_Resources/Rebates_and_Funded_Programs/SPAweb/Resources_for_Speech_Pathologists/Medicare/Rebates_and_Funded_Programs.aspx?hkey=3aebffdf-3dcd-45d2-a287-b8fa823911af"
            />
            <Resource
              title="Support and services funded by NDIS"
              description="Supports and services delivered for NDIS participants"
              type="website"
              resource="https://www.ndis.gov.au/providers/becoming-ndis-provider/am-i-ready/supports-and-services-funded-ndis"
            />
            <Resource
              title="Speech pathology code of ethics"
              description="Ethical practices of speech pathologist"
              type="website"
              resource="https://www.speechpathologyaustralia.org.au/SPAweb/Members/Ethics/Code_of_Ethics_2020/SPAweb/Members/Ethics/HTML/Code_of_Ethics_2020.aspx?hkey=a9b5df85-282d-4ba9-981a-61345c399688"
            />
          </ResourceSection>
        </div>
      </div>

      <h1 className="text-center pt-[20px]">FAQs</h1>
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
            {" "}
            Refer to the{" "}
            <span className="font-bold underline">
              Fees and Funding{" "}
            </span> page{" "}
          </div>
        </FAQ>
      </FAQSection>
      <FAQSection title="5. General Questions">
        <FAQ question="How do I book? ">
          Book through this website.{" "}
          <span className="font-bold underline">Click here</span> to book.
        </FAQ>
        <FAQ question="How long does therapy last? ">
          {" "}
          <div>
            {" "}
            Therapy can range from 30 - 120 mins depending on your child{"'"}s
            specific needs.{" "}
          </div>{" "}
        </FAQ>
        <FAQ question="How many sessions will my child need to do? ">
          {" "}
          <div>
            {" "}
            Total number of sessions will depend on each individual child. We
            will complete a full assessment for the first session. The
            assessment will provide the speech pathologist with the information
            to form a plan and set the amount of therapy needed for the child.{" "}
          </div>
        </FAQ>
        <FAQ question="What are the hours?">
          {" "}
          <div> Business hours are from 9am to 7pm</div>{" "}
        </FAQ>
        <FAQ question="What is your cancellation policy? ">
          Refer to the cancellation policy{" "}
          <span className="font-bold underline">here</span>
        </FAQ>
      </FAQSection>
      <br />
    </>
  );
}

export default Resources;
