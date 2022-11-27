import Button from "src/shared/components/Button";
import DeliveryMethod from "src/pages/root/components/DeliveryMethods/DeliveryMethod";
import { scrollToSection } from "src/shared/helpers/scroll";
import { AiFillHome } from "react-icons/ai";
import { FaLaptopHouse } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

export interface IDeliveryMethodsProps {
  bookSessionRef: any;
}

const DeliveryMethods = (props: IDeliveryMethodsProps) => {
  const BookSessionButton = (
    <Button
      variant="booking"
      onClick={() => {
        scrollToSection(props.bookSessionRef);
      }}
    >
      Book a Session
    </Button>
  );

  return (
    <>
      <div className="text-center">
        <h2> Service Area </h2>
        <div>
          At Speak & Shine, our mobile speech therapy team is currently
          servicing Sydney and the greater Sydney region.
        </div>
      </div>
      <div className="flex flex-col laptop:grid laptop:grid-cols-3 laptop:gap-4 space-y-[15px] laptop:space-y-0 p-[20px]">
        <DeliveryMethod
          title="Mobile Therapy"
          subtitle="(In-home / school visits)"
          icons={[
            <AiFillHome key={uuidv4()} />,
            <IoIosSchool key={uuidv4()} />,
          ]}
          button={BookSessionButton}
        >
          <div>
            Our Mobile Speech therapy service provides expert and high-quality
            Speech across:
          </div>
          <div className="text-left my-[10px]">
            <ul className="list-disc ml-[30px]">
              <li>Homes</li>
              <li>Pre-schools</li>
              <li>Primary schools</li>
              <li> Childcare centers</li>
              <li> High school</li>
            </ul>
          </div>
          <div>
            Professional home visiting Speech Therapists will come to your house
            to complete a comprehensive assessment and deliver appropriate
            treatment ongoing therapy for children. Mobile therapy is perfect
            for you if transportation and commute is a barrier or you have time
            difficulties with in-person sessions.
          </div>
          <br />
          <div>
            <label>
              - Traveling charges may vary on the distance from the clinic to
              the location.
            </label>
          </div>
          <div>
            <label>
              - Contact us for further information regarding traveling charges.{" "}
            </label>
          </div>
        </DeliveryMethod>
        <DeliveryMethod
          title="Telehealth Speech Therapy"
          subtitle="(Zoom)"
          icons={[<FaLaptopHouse key={uuidv4()} />]}
          button={BookSessionButton}
        >
          <div>Therapy from where you are.</div>
          <br />
          <div>
            If transportation barriers, scheduling conflicts, or health concerns
            make it difficult to accommodate in-person sessions, teletherapy may
            be right for you.
          </div>
          <br />
          <div>
            To get started, click the button below to schedule a free, 15-minute
            introductory call with us. We’ll talk about your availability and
            preferences and match you with a therapist that will best meet your
            needs.
          </div>
        </DeliveryMethod>
        <DeliveryMethod
          title="Pre-Kindy Screening"
          subtitle=""
          icons={[<RiContactsFill key={uuidv4()} />]}
          button={BookSessionButton}
        >
          <div>
            Speech and language screening is a very effective way to identify
            their strengths and difficulties in their speech and language
            development.
          </div>
          <br />
          <div>
            It identifies children who require further in-depth speech pathology
            assessment. This allows for early intervention therapy to commence,
            and provides the building blocks to achieving positive long term
            outcomes for social, emotional and academic success.
          </div>
          <br />
          <div>
            Recommendations for parents and teachers to strengthen specific
            skills and/or referrals to speech pathologists are provided. There
            is flexibility when it comes to the format of running the screen.
          </div>
          <br />
          <div>
            <label>
              - The cost will vary depending on your school’s needs.
            </label>
          </div>
          <div>
            <label> - Please contact us for further information.</label>
          </div>
        </DeliveryMethod>
      </div>
    </>
  );
};

export default DeliveryMethods;
