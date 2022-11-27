import * as React from "react";
import FundingMethod from "src/pages/root/components/FeesAndFunding/FundingMethod";
import FilledImage from "src/shared/components/FilledImage";
import {
  ASPECT_RATIO_FEES_AND_FUNDING_MEDICARE,
  ASPECT_RATIO_FEES_AND_FUNDING_NDIS,
} from "src/shared/helpers/aspectRatios";
import { MdHealthAndSafety } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import Button from "src/shared/components/Button";
import { scrollToSection } from "src/shared/helpers/scroll";

export interface IFeesAndFundingProps {
  bookSessionRef: any;
}

const FeesAndFunding = (props: IFeesAndFundingProps) => {
  return (
    <>
      <div className="flex flex-col laptop:grid laptop:grid-cols-4 laptop:gap-9 space-y-[15px] laptop:space-y-0 p-[20px]">
        <FundingMethod
          title="Medicare"
          icons={[
            <FilledImage
              src="/assets/sections/feesAndFunding/Medicare.png"
              alt="Medicare Logo"
              key={uuidv4()}
              aspectRatio={ASPECT_RATIO_FEES_AND_FUNDING_MEDICARE}
              height={50}
            />,
          ]}
        >
          <div>
            Your child may be eligible for a Medicare rebate on some Speech
            Pathology services. Speak to your GP about a Chronic Disease
            Management Plan.
          </div>
        </FundingMethod>
        <FundingMethod
          title="NDIS"
          icons={[
            <FilledImage
              src="/assets/sections/feesAndFunding/NDIS.png"
              alt="Medicare Logo"
              aspectRatio={ASPECT_RATIO_FEES_AND_FUNDING_NDIS}
              height={50}
              key={uuidv4()}
            />,
          ]}
        >
          <div>
            We provide speech therapy for clients who are self-managed, and
            plan-managed.
          </div>
        </FundingMethod>
        <FundingMethod
          title="Private health insurance"
          icons={[<MdHealthAndSafety key={uuidv4()} />]}
        >
          <div>
            If your child has private health insurance they may be eligible for
            a rebate on some Speech Pathology services. Speak to your provider.
          </div>
        </FundingMethod>
        <FundingMethod
          title="Self-funded"
          icons={[<RiMoneyDollarCircleFill key={uuidv4()} />]}
        >
          <div> Privately funded speech therapy.</div>
        </FundingMethod>
      </div>
      <div className="bg-secondary-yellow p-[20px]">
        <h2> Cancellation Policy </h2>
        <div className="text-left my-[10px]">
          <ul className="list-disc ml-[30px]">
            <li>
              All cancellations must be made 48 hours prior to the commencement
              of therapy session.
            </li>
            <li>
              Cancellations made with less than 48 hours notice will incur the
              full cost.
            </li>
            <li>
              Our cancellation fees are also outlined in your Service Agreement.
            </li>
            <li>
              Where possible, the therapist will aim to use the time from the
              cancelled appointments to create resources, write report, or to
              liaise with other health and services supporting the individual.
            </li>
          </ul>
        </div>
        <br />
        <Button
          variant="booking"
          onClick={() => {
            scrollToSection(props.bookSessionRef);
          }}
        >
          Book a session
        </Button>
      </div>
    </>
  );
};

export default FeesAndFunding;
