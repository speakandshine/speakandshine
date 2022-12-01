import Button from "src/shared/components/Button";
import { scrollToSection } from "src/shared/helpers/scroll";
import Service from "src/pages/root/components/Services/Service";
import FilledImage from "src/shared/components/FilledImage";
import { ASPECT_RATIO_SERVICES_SPEECH_THERAPY } from "src/shared/helpers/aspectRatios";
import * as fbq from "src/shared/helpers/facebookPixel";

export interface IServicesProps {
  bookSessionRef: any;
}

const Services = (props: IServicesProps) => {
  return (
    <>
      <h1 className="col-span-1 text-center flex justify-center items-center text-big-heading-mobile laptop:text-big-heading">
        Speech Therapy
      </h1>
      <br />
      <div className="laptop:grid laptop:grid-cols-2 p-[20px] bg-secondary-yellow">
        <div className="col-span-1">
          <h2> Learning Areas </h2>
          <div>
            At Speak & Shine we aim to supports individuals in areas of
            communication, feeding and swallowing including:
          </div>
          <div className="flex flex-col space-y-4 p-[15px]">
            <Service
              title="Articulation"
              description="How sounds are made. This involves coordinating the movement of lips,
          tongue and teeth to make clear and understandable speech."
            />
            <Service
              title="Expressive Language"
              description="Expressing our thoughts, wants and needs. A speech
        pathologist can assist in developing vocabulary, using grammar
        appropriately and building well-structured sentences."
            />
            <Service
              title="Articulation"
              description="How sounds are made. This involves coordinating the movement of lips,
          tongue and teeth to make clear and understandable speech."
            />
            <Service
              title="Expressive Language"
              description="Expressing our thoughts, wants and needs. A speech
        pathologist can assist in developing vocabulary, using grammar
        appropriately and building well-structured sentences."
            />
            <Service
              title="Receptive Language"
              description="The understanding of information from words,
        gestures, signs, and symbols. Receptive language skills include
        following directions, understanding questions, and making predictions."
            />
            <Service
              title="Literacy Skills"
              description="The foundational skills required to develop strong literacy skills in
        the future. These skills include the awareness of individual sounds
        (phonemes) in words, knowledge of the alphabet and understanding of
        common print concepts (reading left to right and from up to down). These are the skills required to read and write at an age-appropriate
        level. A speech pathologist can help with developing letter and sound
        recognition, understanding spelling rules and developing comprehension
        skills."
            />
            <Service
              title="Fluency/Stuttering"
              description="Stuttering is when a person knows what they want to say but has
        trouble producing smooth clear speech to say it. A speech pathologist
        can help assess a stutter and come up with a treatment plan to assist."
            />
            <Service
              title="Social Communication/Pragmatic Skills"
              description="This is a broad area relating to how we use communication in social
        situations. It is how we interpret and interact with those around us.
        Please note that social skills can vary by age, culture and
        relationships."
            />
          </div>
          <br />
          <div>
            <Button
              variant="booking"
              onClick={() => {
                scrollToSection(props.bookSessionRef);
                fbq.event("View Enquiry Section", {});
              }}
            >
              Enquire Now
            </Button>
          </div>
        </div>
        <div className="hidden laptop:flex col-span-1 items-center justify-center">
          <FilledImage
            src="/assets/sections/services/speech-therapy.jpg"
            imageStyle={{ borderRadius: "10px" }}
            alt="Speech Patholigist mentoring child in a home visit"
            height={300}
            aspectRatio={ASPECT_RATIO_SERVICES_SPEECH_THERAPY}
          />
        </div>
      </div>
      <div className="p-[20px] pb-[0px]">
        <h2> Assessment </h2>
        <div>
          An initial assessment will take place during your first appointment.
          Assessment sessions are one hour in duration, however depending on the
          needs of your child, assessments can take multiple sessions to
          complete.
        </div>
        <br />
        <div>The assessment process includes: </div>
        <ul>
          <li className="list-disc ml-[30px]">
            Obtaining a detailed case history through discussion with parents.
          </li>
          <li className="list-disc ml-[30px]">
            Observation of your child during play and testing.
          </li>
          <li className="list-disc ml-[30px]">
            Administration of comprehensive standardised assessments to evaluate
            your child’s abilities and needs.
          </li>
          <li className="list-disc ml-[30px]">
            A written report within two weeks of the completion of the
            assessment.
          </li>
        </ul>
      </div>
      <div className="p-[20px]">
        <h2> Therapy </h2>
        <ul>
          <li className="list-disc ml-[30px]">
            Therapy goals will be obtained from the assessment results and
            through discussion of priorities with parents.
          </li>
          <li className="list-disc ml-[30px]">
            Therapy can be delivered in our office, at school/pre-school or in
            your home.
          </li>
          <li className="list-disc ml-[30px]">
            Therapy sessions allow for individualised time with your child to
            provide targeted therapy, modelling and instruction is given to
            parents, as well as guidance with carry over activities to be
            completed at home.
          </li>
        </ul>
      </div>
      <div className="flex justify-center pb-[10px]">
        <Button
          variant="booking"
          onClick={() => {
            scrollToSection(props.bookSessionRef);
            fbq.event("View Enquiry Section", {});
          }}
        >
          Enquire Now
        </Button>
      </div>
    </>
  );
};

export default Services;
