import type { NextPage } from "next";
import { useAppDispatch } from "src/redux/hooks";
import { useEffect } from "react";
import Layout from "src/components/Layout";
import Banner from "./Banner";
import { setSelectedTab } from "src/redux/slices/navigationSlice";
import FadeIn from "src/components/FadeIn";

const Root: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedTab("Home"));
  }, []);

  return (
    <FadeIn>
      <Banner />
    </FadeIn>
  );

  {
    /* CONTENT SECTIONS */
  }
  {
    /* <div>
        <Section title={sections[1].title} ref={s1Ref}>
          <AboutUs />
        </Section>
        <Section title={sections[2].title} ref={s2Ref}>
          <Services bookSessionRef={s7Ref} />
        </Section>
        <Section title={sections[3].title} ref={s3Ref}>
          <DeliveryMethods bookSessionRef={s7Ref} />
        </Section>
        <Section title={sections[4].title} ref={s4Ref}>
          <FeesAndFunding bookSessionRef={s7Ref} />
        </Section>
        <Section title={sections[5].title} ref={s5Ref}>
          <Resources />
        </Section>
        <Section title={sections[6].title} ref={s6Ref}>
          <FAQs bookSessionRef={s7Ref} feesAndFundingRef={s4Ref} />
        </Section>
        <Section title={sections[7].title} ref={s7Ref}>
          <BookSession />
        </Section>
      </div> */
  }
};

export default Root;
