import type { NextPage } from "next";
import { useRef } from "react";
import { useIntersection } from "src/shared/helpers/viewport";

import Layout from "src/shared/components/Layout";
import Section from "src/shared/components/Section";
import Services from "./components/Services";
import DeliveryMethods from "./components/DeliveryMethods";
import FeesAndFunding from "./components/FeesAndFunding";
import Resources from "./components/Resources";
import AboutUs from "./components/AboutUs";
import BookSession from "./components/BookSession";
import Home from "./components/Home";
import FAQs from "./components/FAQs";

const Root: NextPage = () => {
  const homeRef = useRef();
  const s1Ref = useRef();
  const s2Ref = useRef();
  const s3Ref = useRef();
  const s4Ref = useRef();
  const s5Ref = useRef();
  const s6Ref = useRef();
  const s7Ref = useRef();

  const homeInView = useIntersection(homeRef, "-50%");
  const s1InView = useIntersection(s1Ref, "-50%");
  const s2InView = useIntersection(s2Ref, "-50%");
  const s3InView = useIntersection(s3Ref, "-50%");
  const s4InView = useIntersection(s4Ref, "-50%");
  const s5InView = useIntersection(s5Ref, "-50%");
  const s6InView = useIntersection(s6Ref, "-50%");
  const s7InView = useIntersection(s7Ref, "-50%");

  const sections = [
    {
      title: "Home",
      ref: homeRef,
      inView: homeInView,
    },
    {
      title: "About Us",
      ref: s1Ref,
      inView: s1InView,
    },
    {
      title: "Services",
      ref: s2Ref,
      inView: s2InView,
    },
    {
      title: "Delivery Methods",
      ref: s3Ref,
      inView: s3InView,
    },
    {
      title: "Fees and Funding",
      ref: s4Ref,
      inView: s4InView,
    },
    {
      title: "Resources",
      ref: s5Ref,
      inView: s5InView,
    },
    {
      title: "FAQs",
      ref: s6Ref,
      inView: s6InView,
    },
    {
      title: "Book a Session",
      ref: s7Ref,
      inView: s7InView,
    },
  ];

  return (
    <Layout sections={sections}>
      <Home ref={homeRef} servicesRef={s2Ref} bookSessionRef={s7Ref} />
      {/* CONTENT SECTIONS */}
      <div>
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
      </div>
    </Layout>
  );
};

export default Root;
